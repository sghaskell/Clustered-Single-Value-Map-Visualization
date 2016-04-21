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

    var ATTRIBUTIONS = {
        'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png': '&copy; OpenStreetMap contributors',
        'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png': '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
        'http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png': '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
        'http://tile.stamen.com/toner/{z}/{x}/{y}.png': 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.',
        'http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg': 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.',
        'http://tile.stamen.com/watercolor/{z}/{x}/{y}.jpg': 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.'
    }
        
    return SplunkVisualizationBase.extend({
        maxResults: 0,
        icons: [],
        tileLayer: null,

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

        updateView: function(data, config) {
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
            var cluster     = config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.cluster'] || "true",
                allPopups   = config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.allPopups'] || "false",
                multiplePopups = config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.multiplePopups'] || "false",
                animate     = config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.animate'] || "true",
                singleMarkerMode = config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.singleMarkerMode'] || "false",
                maxClusterRadius = parseInt(config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.maxClusterRadius']) || 80,
                mapTile     = SplunkVisualizationUtils.makeSafeUrl(config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.mapTile']) || 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                mapTileOverride  = SplunkVisualizationUtils.makeSafeUrl(config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.mapTileOverride']),
                mapAttributionOverride = config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.mapAttributionOverride'],
                scrollWheelZoom = config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.scrollWheelZoom'] || "true",
                mapCenterZoom = parseInt(config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.mapCenterZoom']) || 6,
                mapCenterLat = parseFloat(config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.mapCenterLat']) || 39.50,
                mapCenterLon = parseFloat(config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.mapCenterLon']) || -98.35,
                minZoom     = parseInt(config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.minZoom']) || 1,
                maxZoom     = parseInt(config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.maxZoom']) || 19

            this.activeTile = (mapTileOverride) ? mapTileOverride:mapTile;
            this.attribution = (mapAttributionOverride) ? mapAttributionOverride:ATTRIBUTIONS[mapTile];

            if (!this.isInitializedDom) {
                if(allPopups === 'true' || multiplePopups === 'true') {
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
                
            	$(this.el).height('100%').width('100%');
            
				this.tileLayer = L.tileLayer(this.activeTile, {
                    attribution: this.attribution,
                    minZoom: minZoom,
                    maxZoom: maxZoom
				});

                this.map.addLayer(this.tileLayer);   

                // Map Scroll
                (scrollWheelZoom === 'true') ? this.map.scrollWheelZoom.enable() : this.map.scrollWheelZoom.disable();

	            this.layerGroup = new L.LayerGroup().addTo(map);
                this.markers = new L.MarkerClusterGroup({ 
                    chunkedLoading: true,
                    maxClusterRadius: maxClusterRadius,
                    singleMarkerMode: (singleMarkerMode === 'true'),
                    animate: (animate === 'true'),
                    iconCreateFunction: function(cluster) {
                        var childCount = cluster.getChildCount();
                        var c = ' marker-cluster-';
                        if (childCount < 50) {
                            c += 'small';
                        } else if (childCount < 150) {
                            c += 'medium';
                        } else {
                            c += 'large';
                        }

                        return new L.DivIcon({ html: '<div><span><b>' + childCount + '</span></div></b>', className: 'marker-cluster' + c , iconSize: new L.Point(40, 40) });
                    }
                });
                this.markerList = [];
                this.chunk = 50000;
                this.offset = 0;
				this.isInitializedDom = true;         
                this.clearMap = false;
            } 

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
                    var markerIcon = L.AwesomeMarkers.icon(); 
                }

                if (cluster === 'true') {
                    var marker = L.marker([userData['latitude'], userData['longitude']], {icon: markerIcon, title: title});

                    if(userData["description"]) {
                        marker.bindPopup(userData['description']);
                    }

                    this.markerList.push(marker);
                } else {
                    if(!userData["description"]) {
                        L.marker([userData['latitude'], userData['longitude']], {icon: markerIcon}).addTo(layerGroup);
                    } else {
                        if(allPopups === 'true') {
                            L.marker([userData['latitude'], userData['longitude']], {icon: markerIcon, title: title}).addTo(layerGroup).bindPopup(userData['description']).openPopup();
                        } else {
                            L.marker([userData['latitude'], userData['longitude']], {icon: markerIcon, title: title}).addTo(layerGroup).bindPopup(userData['description']);
                        }
                    }
                }

            }, this);            

            if (cluster === 'true') {           
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
