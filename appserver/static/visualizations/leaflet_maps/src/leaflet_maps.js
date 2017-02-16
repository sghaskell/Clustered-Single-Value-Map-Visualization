define([
            'jquery',
            'underscore',
            'leaflet',
            'togeojson',
            'jszip',
            'jszip-utils',
            'vizapi/SplunkVisualizationBase',
            'vizapi/SplunkVisualizationUtils',
			'leaflet-contextmenu',
			'leaflet-dialog',
            '../contrib/leaflet.markercluster-src',
            '../contrib/leaflet.featuregroup.subgroup-src',
            '../contrib/leaflet-measure',
			'../contrib/leaflet.awesome-markers',
            '../contrib/leaflet-vector-markers'
        ],
        function(
            $,
            _,
            L,
            toGeoJSON,
            JSZip,
            JSZipUtils,
            SplunkVisualizationBase,
            SplunkVisualizationUtils
        ) {


    return SplunkVisualizationBase.extend({
        maxResults: 0,
        tileLayer: null,
        contribUri: '/en-US/static/app/leaflet_maps_app/visualizations/leaflet_maps/contrib/',
        defaultConfig:  {
            'display.visualizations.custom.leaflet_maps_app.leaflet_maps.cluster': 1,
            'display.visualizations.custom.leaflet_maps_app.leaflet_maps.allPopups': 0,
            'display.visualizations.custom.leaflet_maps_app.leaflet_maps.multiplePopups': 0,
            'display.visualizations.custom.leaflet_maps_app.leaflet_maps.animate': 1,
            'display.visualizations.custom.leaflet_maps_app.leaflet_maps.singleMarkerMode': 0,
            'display.visualizations.custom.leaflet_maps_app.leaflet_maps.maxClusterRadius': 80,
            'display.visualizations.custom.leaflet_maps_app.leaflet_maps.maxSpiderfySize': 100,
            'display.visualizations.custom.leaflet_maps_app.leaflet_maps.spiderfyDistanceMultiplier': 1,
            'display.visualizations.custom.leaflet_maps_app.leaflet_maps.mapTile': 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            'display.visualizations.custom.leaflet_maps_app.leaflet_maps.mapTileOverride': "",
            'display.visualizations.custom.leaflet_maps_app.leaflet_maps.mapAttributionOverride': "",
            'display.visualizations.custom.leaflet_maps_app.leaflet_maps.layerControl' : 1,
            'display.visualizations.custom.leaflet_maps_app.leaflet_maps.layerControlCollapsed': 1,
            'display.visualizations.custom.leaflet_maps_app.leaflet_maps.scrollWheelZoom': 1,
            'display.visualizations.custom.leaflet_maps_app.leaflet_maps.fullScreen': 0,
            'display.visualizations.custom.leaflet_maps_app.leaflet_maps.drilldown': 0,
			'display.visualizations.custom.leaflet_maps_app.leaflet_maps.contextMenu': 1,
            'display.visualizations.custom.leaflet_maps_app.leaflet_maps.defaultHeight': 600,
            'display.visualizations.custom.leaflet_maps_app.leaflet_maps.mapCenterZoom': 6,
            'display.visualizations.custom.leaflet_maps_app.leaflet_maps.mapCenterLat': 39.50,
            'display.visualizations.custom.leaflet_maps_app.leaflet_maps.mapCenterLon': -98.35,
            'display.visualizations.custom.leaflet_maps_app.leaflet_maps.minZoom': 1,
            'display.visualizations.custom.leaflet_maps_app.leaflet_maps.maxZoom': 19,
            'display.visualizations.custom.leaflet_maps_app.leaflet_maps.kmlOverlay' : "",
            'display.visualizations.custom.leaflet_maps_app.leaflet_maps.rangeOneBgColor': "#B5E28C",
            'display.visualizations.custom.leaflet_maps_app.leaflet_maps.rangeOneFgColor': "#6ECC39",
            'display.visualizations.custom.leaflet_maps_app.leaflet_maps.warningThreshold': 55,
            'display.visualizations.custom.leaflet_maps_app.leaflet_maps.rangeTwoBgColor': "#F1D357",
            'display.visualizations.custom.leaflet_maps_app.leaflet_maps.rangeTwoFgColor': "#F0C20C",
            'display.visualizations.custom.leaflet_maps_app.leaflet_maps.criticalThreshold': 80,
            'display.visualizations.custom.leaflet_maps_app.leaflet_maps.rangeThreeBgColor': "#FD9C73",
            'display.visualizations.custom.leaflet_maps_app.leaflet_maps.rangeThreeFgColor': "#F18017",
            'display.visualizations.custom.leaflet_maps_app.leaflet_maps.measureTool': 1,
            'display.visualizations.custom.leaflet_maps_app.leaflet_maps.measureIconPosition': "topright",
            'display.visualizations.custom.leaflet_maps_app.leaflet_maps.measurePrimaryLengthUnit': "feet",
            'display.visualizations.custom.leaflet_maps_app.leaflet_maps.measureSecondaryLengthUnit': "miles",
            'display.visualizations.custom.leaflet_maps_app.leaflet_maps.measurePrimaryAreaUnit': "acres",
            'display.visualizations.custom.leaflet_maps_app.leaflet_maps.measureSecondaryAreaUnit': "sqmiles",
            'display.visualizations.custom.leaflet_maps_app.leaflet_maps.measureActiveColor': "#00ff00",
            'display.visualizations.custom.leaflet_maps_app.leaflet_maps.measureCompletedColor': "#0066ff",
            'display.visualizations.custom.leaflet_maps_app.leaflet_maps.measureLocalization': "en"
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

        // Build object of key/value paris for invalid fields
        // to be used as data for _drilldown action
        validateFields: function(obj) {
            var invalidFields = {};
            var validFields = ['latitude',
							   'longitude',
                               'title',
							   'description',
							   'icon',
							   'markerColor',
							   'markerType',
							   'markerPriority',
							   'markerSize',
						       'markerAnchor',
							   'iconColor',
						       'shadowAnchor',
							   'shadowSize',
							   'prefix',
							   'extraClasses',
						       'layerDescription'];
            $.each(obj, function(key, value) {
                if($.inArray(key, validFields) === -1) {
                    invalidFields[key] = value;
                }
            });

            return(invalidFields);
        },

		// Custom drilldown behavior for markers
        _drilldown: function(drilldownFields, resource) {
            payload = {
                action: SplunkVisualizationBase.FIELD_VALUE_DRILLDOWN,
                data: drilldownFields
            };

            this.drilldown(payload);
        },

		/* 
		/ Convert 0x|# prefixed hex values to # prefixed for consistency
		/ Splunk's eval tostring('hex') method returns 0x prefix
		*/
		convertHex: function(value) {
			// Pass markerColor prefixed with # regardless of given prefix ("#" or "0x")
			var hexRegex = /^(?:#|0x)([a-f\d]{6})$/i;
			if (hexRegex.test(value)) {
				markerColor = "#" + hexRegex.exec(value)[1];
				return(markerColor);
			} else {
				return(value);
			}
		},

        // Convert hex values to RGB for marker icon colors
        hexToRgb: function(hex) {
            var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ? {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16)
            } : null;
        },

        // Convert string '1/0' or 'true/false' to boolean true/false
        isArgTrue: function(arg) {
            if(arg === 1 || arg === 'true') {
                return true;
            } else {
                return false;
            }
        },
      
        // Create RGBA string and corresponding HTML to dynamically set marker CSS in HTML head
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

        // Create a control icon and description in the layer control legend
        addLayerToControl: function(lg, control) {
            if(!lg.layerExists) {
                // update blue to awesome-marker blue color
                if(lg.icon.options.markerColor === "blue") {
                    var styleColor = "#38AADD";
                }
                else {
                    var styleColor = lg.icon.options.markerColor;
                }

                var iconHtml= "<i class=\"legend-toggle-icon " + lg.icon.options.prefix + " " + lg.icon.options.prefix + "-" + lg.icon.options.icon + "\" style=\"color: " + styleColor + "\"></i> " + lg.layerDescription;
                control.addOverlay(lg.group, iconHtml);
                lg.layerExists = true;
            }

        },

		// Show dialog box with pointer lat/lon and center lat/lon
		// coordinates. Allow user to copy and paste center coordinates into 
		// Center Lat and Center Lon format menu options.
        showCoordinates: function (e) {
            var coordinates = e.latlng.toString().match(/([-\d\.]+)/g);
            var centerCoordinates = this.map.getCenter().toString().match(/([-\d\.]+)/g);
            var content = "Pointer Latitude: <input type=\"text\" name=\"pointer_lat\" value=\"" + coordinates[0] + "\">" +
                  "<br>Pointer Longitude: <input type=\"text\" name=\"pointer_long\" value=\"" + coordinates[1] + "\">" +
                  "<br></br>Copy and paste the following values into Format menu to change <b>Center Lat</b> and <b>Center Lon</b> (visualization API does not currently support programmatically setting format menu options):<br>" +
                  "<br>Center Latitude: <input type=\"text\" name=\"center_lat\" value=\"" + centerCoordinates[0] + "\">" +
                  "<br>Center Longitude: <input type=\"text\" name=\"center_lon\" value=\"" + centerCoordinates[1] + "\">";
            var dialog = L.control.dialog({size: [300,375], anchor: [100, 500]})
              .setContent(content)
              .addTo(this.map);
        },

        centerMap: function (e) {
            this.map.panTo(e.latlng);
        },

        zoomIn: function (e) {
            this.map.zoomIn();
        },

        zoomOut: function (e) {
            this.map.zoomOut();
        },

        // Fetch KMZ or KML files and add to map
        fetchKmlAndMap: function(url, file, map) {
            // Test if it's a kmz file
            if(/.*\.kmz/.test(file)) {
                JSZipUtils.getBinaryContent(url, function (e, d) {
                    var z = new JSZip();

                    z.loadAsync(d)
                    .then(function(zip) {
                        return zip.file(/.*\.kml/)[0].async("string");
                    })
                    .then(function (text) {
                        var kmlText = $.parseXML(text);
                        var geojson = toGeoJSON.kml(kmlText);

						L.geoJson(geojson.features, {
							style: function (feature) {
								return {color: feature.properties.fill,
										opacity: feature.properties["fill-opacity"],
										weight: feature.properties["stroke-width"]};
							},
							onEachFeature: function (feature, layer) {
								layer.bindPopup(feature.properties.name);
								layer.bindTooltip(feature.properties.name);
							}
						}).addTo(map);
                    });
                });
            // it's a kml file
            } else {
                $.ajax({url: url, dataType: 'xml', context: this}).done(function(kml) {
                    var geojson = toGeoJSON.kml(kml);

					L.geoJson(geojson.features, {
						style: function (feature) {
							return {color: feature.properties.fill,
									opacity: feature.properties["fill-opacity"],
									weight: feature.properties["stroke-width"]};
						 },
						 onEachFeature: function (feature, layer) {
							 layer.bindPopup(feature.properties.name);
							 layer.bindTooltip(feature.properties.name);
						}
					}).addTo(map);
                });
            }
        },

        // Do the work of creating the viz
        updateView: function(data, config) {
            // viz gets passed empty config until you click the 'format' dropdown
            // intialize with defaults
            if(_.isEmpty(config)) {
                config = this.defaultConfig;
            }

            // Clear map and reset everything
            if(this.clearMap === true) {
                //console.log("CLEARING MAP!!");
                this.offset = 0; // reset offset
                this.updateDataParams({count: this.chunk, offset: this.offset}); // update data params
                this.invalidateUpdateView();  // redraw map
                var markers = this.markers;
                this.markers.clearLayers();
                var clearMap = this.clearMap;
                this.clearMap = false;
                // remove layers from map and clear out marker data
                _.each(this.layerFilter, function(lg, i) {
                    lg.group.clearLayers();
                    lg.markerList = [];
                }, this);
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
                maxSpiderfySize = parseInt(config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.maxSpiderfySize']),
                spiderfyDistanceMultiplier = parseInt(config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.spiderfyDistanceMultiplier']),
                mapTile     = SplunkVisualizationUtils.makeSafeUrl(config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.mapTile']),
                mapTileOverride  = SplunkVisualizationUtils.makeSafeUrl(config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.mapTileOverride']),
                mapAttributionOverride = config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.mapAttributionOverride'],
                layerControl = parseInt(config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.layerControl']),
                layerControlCollapsed = parseInt(config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.layerControlCollapsed']),
                scrollWheelZoom = parseInt(config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.scrollWheelZoom']),
                fullScreen = parseInt(config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.fullScreen']),
                drilldown = parseInt(config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.drilldown']),
				contextMenu = parseInt(config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.contextMenu']),
                defaultHeight = parseInt(config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.defaultHeight']),
                mapCenterZoom = parseInt(config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.mapCenterZoom']),
                mapCenterLat = parseFloat(config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.mapCenterLat']),
                mapCenterLon = parseFloat(config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.mapCenterLon']),
                minZoom     = parseInt(config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.minZoom']),
                maxZoom     = parseInt(config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.maxZoom']),
                kmlOverlay  = config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.kmlOverlay'],
                rangeOneBgColor = config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.rangeOneBgColor'],
                rangeOneFgColor = config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.rangeOneFgColor'],
                warningThreshold = config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.warningThreshold'],
                rangeTwoBgColor = config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.rangeTwoBgColor'],
                rangeTwoFgColor = config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.rangeTwoFgColor'],
                criticalThreshold = config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.criticalThreshold'],
                rangeThreeBgColor = config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.rangeThreeBgColor'],
                rangeThreeFgColor = config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.rangeThreeFgColor'],
                measureTool = parseInt(config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.measureTool']),
                measureIconPosition = config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.measureIconPosition'],
                measurePrimaryLengthUnit = config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.measurePrimaryLengthUnit'],
                measureSecondaryLengthUnit = config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.measureSecondaryLengthUnit'],
                measurePrimaryAreaUnit = config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.measurePrimaryAreaUnit'],
                measureSecondaryAreaUnit = config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.measureSecondaryAreaUnit'],
                measureActiveColor = config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.measureActiveColor'],
                measureCompletedColor = config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.measureCompletedColor'],
                measureLocalization = config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.measureLocalization']

            this.activeTile = (mapTileOverride) ? mapTileOverride:mapTile;
            this.attribution = (mapAttributionOverride) ? mapAttributionOverride:this.ATTRIBUTIONS[mapTile];

            // Initialize the DOM
            if (!this.isInitializedDom) {
                // Set defaul icon image path
                L.Icon.Default.imagePath = location.origin + this.contribUri + 'images/';

                // Create layer filter object
                var layerFilter = this.layerFilter = {};

                // Setup cluster marker CSS
                this.createMarkerStyle(rangeOneBgColor, rangeOneFgColor, "one");
                this.createMarkerStyle(rangeTwoBgColor, rangeTwoFgColor, "two");
                this.createMarkerStyle(rangeThreeBgColor, rangeThreeFgColor, "three");

                // Configure context menu
                if(this.isArgTrue(contextMenu)) {
                    var mapOptions =  {contextmenu: true,
                                       contextmenuWidth: 140,
                                       contextmenuItems: [{
                                           text: 'Show details',
                                           context: this,
                                           callback: this.showCoordinates
                                       }, {
                                           text: 'Center map here',
                                           context: this,
                                           callback: this.centerMap
                                       }, '-', {
                                           text: 'Zoom in',
                                           iconCls: 'fa fa-search-plus',
                                           context: this,
                                           callback: this.zoomIn
                                       }, {
                                           text: 'Zoom out',
                                           iconCls: 'fa fa-search-minus',
                                           context: this,
                                           callback: this.zoomOut
                                       }]}
                }

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

                    // Disable close popup on click to allow multiple popups
                    mapOptions.closePopupOnClick = false;
                }

                // Create map 
                var map = this.map = new L.Map(this.el, mapOptions).setView([mapCenterLat, mapCenterLon], mapCenterZoom);
               
                // Setup the tile layer with map tile, zoom and attribution
				this.tileLayer = L.tileLayer(this.activeTile, {
                    attribution: this.attribution,
                    minZoom: minZoom,
                    maxZoom: maxZoom
				});

                // Add tile layer to map
                this.map.addLayer(this.tileLayer);   

                this.markers = new L.MarkerClusterGroup({ 
                    chunkedLoading: true,
                    maxClusterRadius: maxClusterRadius,
                    maxSpiderfySize: maxSpiderfySize,
                    spiderfyDistanceMultiplier: spiderfyDistanceMultiplier,
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

                this.control = L.control.layers(null, null, { collapsed: this.isArgTrue(layerControlCollapsed)});
                this.markers.addTo(this.map);
           
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
                    this.map.invalidateSize();
                } else {
                    $("div[data-cid=" + parentEl + "]").css("height", defaultHeight);
                    this.map.invalidateSize();
                }

                // Enable measure tool plugin and add to map
                if(this.isArgTrue(measureTool)) {
                    var measureOptions = { position: measureIconPosition,
                                           activeColor: measureActiveColor,
                                           completedColor: measureCompletedColor,
                                           primaryLengthUnit: measurePrimaryLengthUnit,
                                           secondaryLengthUnit: measureSecondaryLengthUnit,
                                           primaryAreaUnit: measurePrimaryAreaUnit,
                                           secondaryAreaUnit: measureSecondaryAreaUnit,
                                           localization: measureLocalization};

                    var measureControl = new L.Control.Measure(measureOptions);
                    measureControl.addTo(this.map);
                }

                // Iterate through KML files and load overlays into layers on map 
                if(kmlOverlay) {
                    // Create array of kml/kmz files
                    var kmlFiles = kmlOverlay.split(/\s*,\s*/);

                    // Loop through each file and load it onto the map
                    _.each(kmlFiles, function(file, i) {
                        var url = location.origin + this.contribUri + 'kml/' + file;
                        this.fetchKmlAndMap(url, file, this.map);
                    }, this);
                }
               
                // Init defaults
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
           
			/********* BEGIN PROCESSING DATA **********/
 
            // Iterate through each row creating layer groups per icon type
            // and create markers appending to a markerList in each layerfilter object
            _.each(dataRows, function(userData, i) {
                // Set icon options
                var icon = _.has(userData, "icon") ? userData["icon"]:"circle";

                // Create Clustered featuregroup subgroup layer
                if (typeof this.layerFilter[icon] == 'undefined' && this.isArgTrue(cluster)) {
                    this.layerFilter[icon] = {'group' : L.featureGroup.subGroup(this.markers),
                                              'markerList' : [],
                                              'iconStyle' : icon,
                                              'layerExists' : false
                                             };
                // Create normal layergroup
                } else if (typeof this.layerFilter[icon] == 'undefined') {
                    this.layerFilter[icon] = {'group' : L.layerGroup(),
                                              'markerList' : [],
                                              'iconStyle' : icon,
                                              'layerExists' : false
                                             };
                }

                var layerDescription  = _.has(userData, "layerDescription") ? userData["layerDescription"]:"";

                if (typeof this.layerFilter[icon] !== 'undefined') {
                    this.layerFilter[icon].layerDescription = layerDescription;
                }

                var markerColor = _.has(userData, "markerColor") ? userData["markerColor"]:"blue";
                var markerType = _.has(userData, "markerType") ? userData["markerType"]:"png";
                var iconColor = _.has(userData, "iconColor") ? userData["iconColor"]:"white";
                var markerSize = _.has(userData, "markerSize") ? userData["markerSize"].split(/,/):[35,45];
                var markerAnchor = _.has(userData, "markerAnchor") ? userData["markerAnchor"].split(/,/):[15,50];
                var shadowSize = _.has(userData, "shadowSize") ? userData["shadowSize"].split(/,/):[30,46];
                var shadowAnchor = _.has(userData, "shadowAnchor") ? userData["shadowAnchor"].split(/,/):[30,30];
                var markerPriority = _.has(userData, "markerPriority") ? parseInt(userData["markerPriority"]):0;
                var title = _.has(userData, "title") ? userData["title"]:null;
                var prefix = _.has(userData, "prefix") ? userData["prefix"]:"fa";
                var extraClasses = _.has(userData, "extraClasses") ? userData["extraClasses"]:"fa-lg";

                if(/^(fa-)?map-marker/.test(icon) || /^(fa-)?map-pin/.test(icon)) {
                    var className = "";
                    var popupAnchor = [-3, -35];
                } else {
                    var className = "awesome-marker";
                    var popupAnchor = [1, -35];
                }

                var description = _.has(userData, "description") ? userData["description"]:"";

                if (markerType == "svg") {
					// Update marker to shade of Awesome Marker blue
					if(markerColor == "blue") { markerColor = "#38AADD"; }
					markerColor = this.convertHex(markerColor);
					iconColor = this.convertHex(iconColor);

                    var markerIcon = L.VectorMarkers.icon({
                        icon: icon,
                        iconColor: iconColor,
                        markerColor: markerColor,
                        shadowSize: shadowSize,
                        shadowAnchor: shadowAnchor,
                        extraIconClasses: extraClasses,
                        prefix: prefix,
                        iconSize: markerSize,
						iconAnchor: markerAnchor,
                    });
                } else {
                    // Create markerIcon
                    var markerIcon = L.AwesomeMarkers.icon({
                        icon: icon,
                        markerColor: markerColor,
                        iconColor: iconColor,
                        title: title,
                        prefix: prefix,
                        className: className,
                        extraClasses: extraClasses,
                        popupAnchor: popupAnchor,
                        description: description
                    });

                }

                /* Add the icon to layerFilter so we can access properties
				 * for overlay in addLayerToControl
				 */
                if (typeof this.layerFilter[icon] !== 'undefined') {
                    this.layerFilter[icon].icon = markerIcon;
                }

                var marker = L.marker([userData['latitude'],
                                       userData['longitude']],
                                      {icon: markerIcon,
                                       title: title,
                                       layerDescription: layerDescription,
									   zIndexOffset: markerPriority});

                if(this.isArgTrue(drilldown)) {
					var drilldownFields = this.validateFields(userData);
                    marker.on('dblclick', this._drilldown.bind(this, drilldownFields));
                }

                // Bind description popup if description exists
                if(userData["description"]) {
                    marker.bindPopup(userData['description']);
                }

                // Save each icon in the layer
                this.layerFilter[icon].markerList.push(marker);
            }, this);            

            // Enable/disable layer controls and toggle collapse 
            if (this.isArgTrue(layerControl)) {           
                this.control.addTo(this.map);
                this.control.options.collapsed = this.isArgTrue(layerControlCollapsed);
            } else {
                this.control.remove();
            }

            // Clustered
            if (this.isArgTrue(cluster)) {           
                _.each(this.layerFilter, function(lg, i) { 
                    // Create temp clustered layergroup and add markerlist
                    this.tmpFG = L.featureGroup.subGroup(this.markers, lg.markerList);

                    // add temp layergroup to layer filter layergroup and add to map
                    lg.group.addLayer(this.tmpFG);
                    lg.group.addTo(this.map);

                    this.addLayerToControl(lg, this.control);

                }, this);
            // Single value
            } else {
                // Loop through layer filters
                _.each(this.layerFilter, function(lg, i) { 
                    lg.group.addTo(this.map);

                    // Loop through markers and add to map
                    _.each(lg.markerList, function(m, k) {
                        if(this.isArgTrue(allPopups)) {
                            m.addTo(lg.group).bindPopup(m.options.icon.options.description).openPopup();
                        } else {
                            m.addTo(lg.group);
                        }
                    }, this);

                    // Add layer controls
                    this.addLayerToControl(lg, this.control);
                }, this);

            }

            // Chunk through data 50k results at a time
            if(dataRows.length === this.chunk) {
                this.offset += this.chunk;
                this.updateDataParams({count: this.chunk, offset: this.offset});
            } else {
                this.clearMap = true;
            }

            return this;
        }
    });
});
