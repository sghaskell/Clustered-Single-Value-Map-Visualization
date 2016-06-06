define([
            'jquery',
            'underscore',
            'leaflet',
            'vizapi/SplunkVisualizationBase',
            'vizapi/SplunkVisualizationUtils',
            'drmonty-leaflet-awesome-markers',
            '../contrib/leaflet.markercluster-src'
        ],
        function(
            $,
            _,
            L,
            SplunkVisualizationBase,
            SplunkVisualizationUtils
        ) {


    return SplunkVisualizationBase.extend({
        maxResults: 0,
        icons: [],
        tileLayer: null,
        defaultConfig:  {
            'display.visualizations.custom.leaflet_maps_app.leaflet_maps.cluster': 1,
            'display.visualizations.custom.leaflet_maps_app.leaflet_maps.allPopups': 0,
            'display.visualizations.custom.leaflet_maps_app.leaflet_maps.multiplePopups': 0,
            'display.visualizations.custom.leaflet_maps_app.leaflet_maps.animate': 1,
            'display.visualizations.custom.leaflet_maps_app.leaflet_maps.singleMarkerMode': 0,
            'display.visualizations.custom.leaflet_maps_app.leaflet_maps.maxClusterRadius': 80,
            'display.visualizations.custom.leaflet_maps_app.leaflet_maps.mapTile': 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            'display.visualizations.custom.leaflet_maps_app.leaflet_maps.mapTileOverride': "",
            'display.visualizations.custom.leaflet_maps_app.leaflet_maps.mapAttributionOverride': "",
            'display.visualizations.custom.leaflet_maps_app.leaflet_maps.scrollWheelZoom': 1,
            'display.visualizations.custom.leaflet_maps_app.leaflet_maps.fullScreen': 0,
            'display.visualizations.custom.leaflet_maps_app.leaflet_maps.defaultHeight': 600,
            'display.visualizations.custom.leaflet_maps_app.leaflet_maps.mapCenterZoom': 6,
            'display.visualizations.custom.leaflet_maps_app.leaflet_maps.mapCenterLat': 39.50,
            'display.visualizations.custom.leaflet_maps_app.leaflet_maps.mapCenterLon': -98.35,
            'display.visualizations.custom.leaflet_maps_app.leaflet_maps.minZoom': 1,
            'display.visualizations.custom.leaflet_maps_app.leaflet_maps.maxZoom': 19,
            'display.visualizations.custom.leaflet_maps_app.leaflet_maps.rangeOneBgColor': "#B5E28C",
            'display.visualizations.custom.leaflet_maps_app.leaflet_maps.rangeOneFgColor': "#6ECC39",
            'display.visualizations.custom.leaflet_maps_app.leaflet_maps.warningThreshold': 55,
            'display.visualizations.custom.leaflet_maps_app.leaflet_maps.rangeTwoBgColor': "#F1D357",
            'display.visualizations.custom.leaflet_maps_app.leaflet_maps.rangeTwoFgColor': "#F0C20C",
            'display.visualizations.custom.leaflet_maps_app.leaflet_maps.criticalThreshold': 80,
            'display.visualizations.custom.leaflet_maps_app.leaflet_maps.rangeThreeBgColor': "#FD9C73",
            'display.visualizations.custom.leaflet_maps_app.leaflet_maps.rangeThreeFgColor': "#F18017"
        },
        ATTRIBUTIONS: {
        'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png': '&copy; OpenStreetMap contributors',
        'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png': '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
        'http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png': '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
        'http://tile.stamen.com/toner/{z}/{x}/{y}.png': 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.',
        'http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg': 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.',
        'http://tile.stamen.com/watercolor/{z}/{x}/{y}.jpg': 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.'
        },


        initialize: function() {
            SplunkVisualizationBase.prototype.initialize.apply(this, arguments);
            this.$el = $(this.el);
            this.isInitializedDom = false;
        },
  
        // Search data params
        getInitialDataParams: function() {
            return ({
                outputMode: SplunkVisualizationBase.RAW_OUTPUT_MODE,
                count: this.maxResults
            });
        },

        setupView: function() {
            this.clearMap = false;
        },

        hexToRgb: function(hex) {
            var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ? {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16)
            } : null;
        },

        isArgTrue: function(arg) {
            if(arg === 1 || arg === 'true') {
                return true;
            } else {
                return false;
            }
        },
       
        createMarkerStyle: function(bgHex, fgHex, markerName) {
            var bgRgb = this.hexToRgb(bgHex);
            var fgRgb = this.hexToRgb(fgHex);
            var bgRgba = 'rgba(' + bgRgb.r + ', ' + bgRgb.g + ', ' + bgRgb.b + ', 0.6)';
            var fgRgba = 'rgba(' + fgRgb.r + ', ' + fgRgb.g + ', ' + fgRgb.b + ', 0.6)';

            var html = '.marker-cluster-' + markerName + ' { background-color: ' + bgRgba + ';} .marker-cluster-' + markerName + ' div { background-color: ' + fgRgba + ';}';
            $("<style>")
                .prop("type", "text/css")
                .html(html)
                .appendTo("head");
        },

        updateView: function(data, config) {
            // viz gets passed empty config until you click the 'format' dropdown
            // intialize with defaults
            if(_.isEmpty(config)) {
                config = this.defaultConfig;
            }

            // Clear map and reset everything
            if(this.clearMap === true) {
                this.offset = 0; // reset offset
                this.updateDataParams({count: this.chunk, offset: this.offset}); // update data params
                this.invalidateUpdateView();  // redraw map
                var layerGroup = this.layerGroup;
                this.layerGroup.clearLayers();
                var markers = this.markers;
                this.markers.clearLayers();
                var markerList = this.markerList;
                this.markerList = [];
                var clearMap = this.clearMap;
                this.clearMap = false;
            }

            // get data
            var dataRows = data.results;


            // check for data
            if (!dataRows || dataRows.length === 0 || dataRows[0].length === 0) {
                return this;
            }

            // Validate we have at least latitude and longitude fields
            if(!("latitude" in dataRows[0]) || !("longitude" in dataRows[0])) {
                 throw new SplunkVisualizationBase.VisualizationError(
                    'Incorrect Fields Detected - latitude & longitude fields required'
                );
            }

            // get configs
            var cluster     = parseInt(config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.cluster']),
                allPopups   = parseInt(config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.allPopups']),
                multiplePopups = parseInt(config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.multiplePopups']),
                animate     = parseInt(config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.animate']),
                singleMarkerMode = parseInt(config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.singleMarkerMode']),
                maxClusterRadius = parseInt(config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.maxClusterRadius']),
                mapTile     = SplunkVisualizationUtils.makeSafeUrl(config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.mapTile']),
                mapTileOverride  = SplunkVisualizationUtils.makeSafeUrl(config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.mapTileOverride']),
                mapAttributionOverride = config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.mapAttributionOverride'],
                scrollWheelZoom = parseInt(config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.scrollWheelZoom']),
                fullScreen = parseInt(config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.fullScreen']),
                defaultHeight = parseInt(config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.defaultHeight']),
                mapCenterZoom = parseInt(config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.mapCenterZoom']),
                mapCenterLat = parseFloat(config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.mapCenterLat']),
                mapCenterLon = parseFloat(config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.mapCenterLon']),
                minZoom     = parseInt(config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.minZoom']),
                maxZoom     = parseInt(config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.maxZoom']),
                rangeOneBgColor = config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.rangeOneBgColor'],
                rangeOneFgColor = config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.rangeOneFgColor'],
                warningThreshold = config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.warningThreshold'],
                rangeTwoBgColor = config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.rangeTwoBgColor'],
                rangeTwoFgColor = config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.rangeTwoFgColor'],
                criticalThreshold = config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.criticalThreshold'],
                rangeThreeBgColor = config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.rangeThreeBgColor'],
                rangeThreeFgColor = config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.rangeThreeFgColor']

            this.activeTile = (mapTileOverride) ? mapTileOverride:mapTile;
            this.attribution = (mapAttributionOverride) ? mapAttributionOverride:this.ATTRIBUTIONS[mapTile];

            if (!this.isInitializedDom) {
                // Setup cluster marker CSS
                this.createMarkerStyle(rangeOneBgColor, rangeOneFgColor, "one");
                this.createMarkerStyle(rangeTwoBgColor, rangeTwoFgColor, "two");
                this.createMarkerStyle(rangeThreeBgColor, rangeThreeFgColor, "three");

                // Enable all or multiple popups
                if(this.isArgTrue(allPopups) || this.isArgTrue(multiplePopups)) {
                    L.Map = L.Map.extend({
                        openPopup: function (popup, latlng, options) {
                            if (!(popup instanceof L.Popup)) {
                                popup = new L.Popup(options).setContent(popup);
                            }

                            if (latlng) {
                                popup.setLatLng(latlng);
                            }

                            if (this.hasLayer(popup)) {
                                return this;
                            }

                            this._popup = popup;
                            return this.addLayer(popup);
                        }
                    });                    

            	    var map = this.map = new L.Map(this.el, {closePopupOnClick: false}).setView([mapCenterLat, mapCenterLon], mapCenterZoom);
                } else {
            	    var map = this.map = new L.Map(this.el).setView([mapCenterLat, mapCenterLon], mapCenterZoom);
                }
                
				this.tileLayer = L.tileLayer(this.activeTile, {
                    attribution: this.attribution,
                    minZoom: minZoom,
                    maxZoom: maxZoom
				});

                this.map.addLayer(this.tileLayer);   

	            this.layerGroup = new L.LayerGroup().addTo(map);
                this.markers = new L.MarkerClusterGroup({ 
                    chunkedLoading: true,
                    maxClusterRadius: maxClusterRadius,
                    singleMarkerMode: (this.isArgTrue(singleMarkerMode)),
                    animate: (this.isArgTrue(animate)),
                    iconCreateFunction: function(cluster) {
                        var childCount = cluster.getChildCount();
                        var c = ' marker-cluster-';
                        if (childCount >= criticalThreshold) {
                            c += 'three';
                        } else if (childCount >= warningThreshold) {
                            c += 'two';
                        } else {
                            c += 'one';
                        }
                        return new L.DivIcon({ html: '<div><span><b>' + childCount + '</span></div></b>', className: 'marker-cluster' + c , iconSize: new L.Point(40, 40) });
                    }
                });

                // Get parent element of div to resize
                var parentEl = $(this.el).parent().parent().closest("div").attr("data-cid");

                // Map Full Screen Mode
                if (this.isArgTrue(fullScreen)) {
                    var vh = $(window).height() - 120;
                    $("div[data-cid=" + parentEl + "]").css("height", vh);

                    $(window).resize(function() {
                        var vh = $(window).height() - 120;
                        $("div[data-cid=" + parentEl + "]").css("height", vh);
                    });
                } else {
                    $("div[data-cid=" + parentEl + "]").css("height", defaultHeight);
                }


                this.markerList = [];
                this.chunk = 50000;
                this.offset = 0;
				this.isInitializedDom = true;         
                this.clearMap = false;
            } 


            // Map Scroll
            (this.isArgTrue(scrollWheelZoom)) ? this.map.scrollWheelZoom.enable() : this.map.scrollWheelZoom.disable();

            // Reset Tile If Changed
            if(this.tileLayer._url != this.activeTile) {
                this.tileLayer.setUrl(this.activeTile);
            }

            // Reset tile zoom levels if changed
            if (this.tileLayer.options.maxZoom != maxZoom) {
                this.tileLayer.options.maxZoom = maxZoom;
            }

            if (this.tileLayer.options.minZoom != minZoom) {
                this.tileLayer.options.minZoom = minZoom;
            }

            // Reset map zoom
            if (this.map.getZoom() != mapCenterZoom) {
                this.map.setZoom(mapCenterZoom);
            }

      		if (data.length == 0) {
      			return;
      		}

            var layerGroup = this.layerGroup;

            _.each(dataRows, function(userData, i) {
                // Set icon options
                if(Object.keys(userData).length > 2) {
                    if("icon" in userData) {
                        var icon = userData["icon"];
                    } else {
                        var icon = "circle";
                    }

                    if("title" in userData) {
                        var title = userData["title"];
                    } else {
                        var title = "";
                    }

                    if("markerColor" in userData) {
                        var markerColor = userData["markerColor"];
                    } else {
                        var markerColor = "blue";
                    }

                    if("iconColor" in userData) {
                        var iconColor = userData["iconColor"];
                    } else {
                        var iconColor = "white";
                    }

                    if("prefix" in userData && userData["prefix"] === "ion") {
                        var prefix = "ion";
                    } else {
                        var prefix = "fa";
                    }

                    if(/^(fa-)?map-marker/.test(icon) || /^(fa-)?map-pin/.test(icon)) {
                        var className = "";
                        var popupAnchor = [-3, -35];
                    } else {
                        var className = "awesome-marker";
                        extraClasses = "";
                        var popupAnchor = [1, -35];
                    }

                    if("extraClasses" in userData) {
                        var extraClasses = userData["extraClasses"];
                    } else if (prefix === "fa") {
                        var extraClasses = "fa-4x";
                    } else {
                        var extraClasses = "";
                    }
                    
                    var markerIcon = L.AwesomeMarkers.icon({
                        icon: icon,
                        markerColor: markerColor,
                        iconColor: iconColor,
                        prefix: prefix,
                        className: className,
                        extraClasses: extraClasses,
                        popupAnchor: popupAnchor
                    }); 
                }
                else {
                    // Default marker
                    var markerIcon = L.AwesomeMarkers.icon({
                        icon: "circle",
                        markerColor: "blue",
                        iconColor: "white",
                        prefix: "fa"
                    });
                }

                if (this.isArgTrue(cluster)) {
                    var marker = L.marker([userData['latitude'], userData['longitude']], {icon: markerIcon, title: title});

                    if(userData["description"]) {
                        marker.bindPopup(userData['description']);
                    }

                    this.markerList.push(marker);
                } else {
                    if(!userData["description"]) {
                        L.marker([userData['latitude'], userData['longitude']], {icon: markerIcon}).addTo(layerGroup);
                    } else {
                        if(this.isArgTrue(allPopups)) {
                            L.marker([userData['latitude'], userData['longitude']], {icon: markerIcon, title: title}).addTo(layerGroup).bindPopup(userData['description']).openPopup();
                        } else {
                            L.marker([userData['latitude'], userData['longitude']], {icon: markerIcon, title: title}).addTo(layerGroup).bindPopup(userData['description']);
                        }
                    }
                }

            }, this);            

            if (this.isArgTrue(cluster)) {           
                // Create marker Layer and add to layer group
                this.markers.addLayers(this.markerList);
                this.layerGroup.addLayer(this.markers);
            }

            // Chunk through data 50k results at a time
            if(dataRows.length === this.chunk) {
                this.offset += this.chunk;
                this.updateDataParams({count: this.chunk, offset: this.offset});
            } else {
                this.markerList = [];
                this.clearMap = true;
            }

            return this;
        }
    });
});
