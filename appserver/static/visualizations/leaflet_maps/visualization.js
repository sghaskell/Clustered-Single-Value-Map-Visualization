define(["vizapi/SplunkVisualizationBase","vizapi/SplunkVisualizationUtils"], function(__WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	            __webpack_require__(1),
	            __webpack_require__(2),
	            __webpack_require__(3),
	            __webpack_require__(4),
	            __webpack_require__(5),
	            __webpack_require__(6),
	            __webpack_require__(7),
	            __webpack_require__(8)
	        ], __WEBPACK_AMD_DEFINE_RESULT__ = function(
	            $,
	            _,
	            L,
	            SplunkVisualizationBase,
	            SplunkVisualizationUtils
	        ) {


	    return SplunkVisualizationBase.extend({
	        maxResults: 0,
	        tileLayer: null,
	        layerFilter: {},
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
	                //console.log("CLEARING MAP!!");
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

	                //this.group1 = L.featureGroup.subGroup(this.markers);
	                //console.log(this.group1);
	                //this.control = L.control.layers(null, null, { collapsed: true});
	                this.control = L.control.layers(null, null, { collapsed: this.isArgTrue(layerControlCollapsed)});
	                //console.log(this.control);
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

	                    // Create Clustered icon layer
	                    if (typeof this.layerFilter[icon] == 'undefined' && this.isArgTrue(cluster)) {
	                        this.layerFilter[icon] = {'group' : L.featureGroup.subGroup(this.markers),
	                                                  'markerList' : [],
	                                                  'iconStyle' : icon,
	                                                  'layerExists' : false
	                                                 };
	                    } else if (typeof this.layerFilter[icon] == 'undefined') {
	                        this.layerFilter[icon] = {'group' : L.layerGroup(),
	                                                  'markerList' : [],
	                                                  'iconStyle' : icon,
	                                                  'layerExists' : false
	                                                 };
	                    }

	                    if("title" in userData) {
	                        var title = userData["title"];
	                    } else {
	                        var title = "";
	                    }

	                    if (typeof this.layerFilter[icon] !== 'undefined') {
	                        this.layerFilter[icon].title = title;
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
	                
	                    if("description" in userData) {
	                        var description = userData["description"]
	                    }
	                    else {
	                        var description = "";
	                    }    

	                    var markerIcon = L.AwesomeMarkers.icon({
	                        icon: icon,
	                        markerColor: markerColor,
	                        iconColor: iconColor,
	                        prefix: prefix,
	                        className: className,
	                        extraClasses: extraClasses,
	                        popupAnchor: popupAnchor,
	                        description: description
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

	                // Add the icon so we can access properties for overlay
	                if (typeof this.layerFilter[icon] !== 'undefined') {
	                    this.layerFilter[icon].icon = markerIcon;
	                }

	                // Create marker
	                var marker = L.marker([userData['latitude'], userData['longitude']], {icon: markerIcon, title: title});

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

	            if (this.isArgTrue(cluster)) {           

	                _.each(this.layerFilter, function(lg, i) { 
	                    // Create temp clustered layergroup and add markerlist
	                    this.tmpFG = L.featureGroup.subGroup(this.markers, lg.markerList);

	                    // add temp layergroup to layer filter layergroup and add to map
	                    lg.group.addLayer(this.tmpFG);
	                    lg.group.addTo(this.map);
	                        //console.log(iconDiv);
	                        //console.log($(iconDiv)[0].outerHTML);
	                        //var iconHtml = $(iconDiv)[0].outerHTML;
	                        //var iconHtml = "<div class=\"awesome-marker-icon-red awesome-marker\"><i style=\"color: white\" class=\"fa fa-exclamation  \"></i>" + lg.title + " </div>";
	                        //console.log(iconHtml);
	                        //var foo = $(iconDiv).append($('').clone()).html();
	                        //console.log(iconDiv);
	                        //console.log("text ", $(iconDiv).html(), "end");
	                        //console.log("text ", $(iconDiv).outerHTML(), "end");
	                        //var iconString = "<html><body>" + lg.icon.createIcon() + "</body></html>";
	                        //console.log(lg.icon.createIcon()); 
	                        //console.log(iconDiv);
	                        //console.log($(iconDiv).find("awesome-marker").text());
	                        //var iconHtml= "<div class=\"awesome-marker-icon-" + lg.color + " awesome-marker\">" + "<i class=\"legend-toggle-icon " + lg.prefix + " " + lg.prefix + "-" + lg.icon.options.icon + " style=\"color: white\"></i>" + lg.title + "</div>";
	                        //var iconHtml= "<div class=\"awesome-marker awesome-marker-icon-" + lg.icon.options.markerColor + "\"><i class=\"legend-toggle-icon " + lg.prefix + " " + lg.prefix + "-" + lg.icon.options.icon + "\" style=\"color: " + lg.icon.options.iconColor + "\"></i>  " + lg.title + "</div>";
	                        //var iconHtml= "<i class=\"awesome-marker-icon-" + lg.color + " awesome-marker legend-toggle-icon " + lg.prefix + " " + lg.prefix + "-" + lg.icon.options.icon + " style=\"color: white\"></i>" + lg.title;

	                    // create control icon overlay and add to layergroup if it doesn't already exist
	                    if(!lg.layerExists) {
	                        var iconHtml= "<i class=\"legend-toggle-icon " + lg.icon.options.prefix + " " + lg.icon.options.prefix + "-" + lg.icon.options.icon + "\" style=\"color: " + lg.icon.options.markerColor + "\"></i> " + lg.title;
	                        console.log(iconHtml);
	                        //console.log(iconString);
	                        this.control.addOverlay(lg.group, iconHtml);
	                        lg.layerExists = true;
	                    }
	                        //this.control.addOverlay(lg.group, iconString);
	                        //this.icons.push(lg.icon);
	                        //this.baseLayers[iconHtml] = lg.group;

	                    //lg.group.addLayer(this.tmpFG);
	                    //lg.group.addTo(this.map);
	                }, this);
	            } else {
	                console.log("Single Value"); 
	                //this.control.addTo(this.map);

	                // Loop through layer filters
	                _.each(this.layerFilter, function(lg, i) { 

	                    this.tmpFG = L.layerGroup(lg.markerList);
	                    lg.group.addLayer(this.tmpFG);
	                    lg.group.addTo(this.map);

	                    console.log(lg.markerList[0]);
	                    _.each(lg.markerList, function(m, k) {
	                        if(this.isArgTrue(allPopups)) {
	                            //L.marker([userData['latitude'], userData['longitude']], {icon: markerIcon, title: title}).addTo(layerGroup).bindPopup(userData['description']).openPopup();
	                            //var marker = L.marker([userData['latitude'], userData['longitude']], {icon: markerIcon, title: title}).bindPopup(userData['description']).openPopup();
	                            //m.addTo(lg.group).openPopup();
	                            m.addTo(lg.group).bindPopup(m.options.icon.options.description).openPopup();
	                        } else {
	                            //L.marker([userData['latitude'], userData['longitude']], {icon: markerIcon, title: title}).addTo(layerGroup).bindPopup(userData['description']);
	                            //var marker = L.marker([userData['latitude'], userData['longitude']], {icon: markerIcon, title: title}).bindPopup(userData['description']);
	                            m.addTo(lg.group);
	                        }
	                    }, this);

	                    if(!lg.layerExists) {
	                        var iconHtml= "<i class=\"legend-toggle-icon " + lg.icon.options.prefix + " " + lg.icon.options.prefix + "-" + lg.icon.options.icon + "\" style=\"color: " + lg.icon.options.markerColor + "\"></i> " + lg.title;
	                        console.log(iconHtml);
	                        this.control.addOverlay(lg.group, iconHtml);
	                        lg.layerExists = true;
	                    }
	                }, this);

	            }

	            // Chunk through data 50k results at a time
	            if(dataRows.length === this.chunk) {
	                this.offset += this.chunk;
	                this.updateDataParams({count: this.chunk, offset: this.offset});
	            } else if (typeof data.meta.done !== 'undefined' && data.meta.done) {
	                console.log("search done!!");
	                this.markerList = [];
	                this.clearMap = true;
	            }

	            return this;
	        }
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v2.2.4
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-05-20T17:23Z
	 */

	(function( global, factory ) {

		if ( typeof module === "object" && typeof module.exports === "object" ) {
			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}

	// Pass this if window is not defined yet
	}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

	// Support: Firefox 18+
	// Can't be in strict mode, several libs including ASP.NET trace
	// the stack via arguments.caller.callee and Firefox dies if
	// you try to trace through "use strict" call chains. (#13335)
	//"use strict";
	var arr = [];

	var document = window.document;

	var slice = arr.slice;

	var concat = arr.concat;

	var push = arr.push;

	var indexOf = arr.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var support = {};



	var
		version = "2.2.4",

		// Define a local copy of jQuery
		jQuery = function( selector, context ) {

			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},

		// Support: Android<4.1
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([\da-z])/gi,

		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};

	jQuery.fn = jQuery.prototype = {

		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// Start with an empty selector
		selector: "",

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function() {
			return slice.call( this );
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
			return num != null ?

				// Return just the one element from the set
				( num < 0 ? this[ num + this.length ] : this[ num ] ) :

				// Return all the elements in a clean array
				slice.call( this );
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
			ret.context = this.context;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},

		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},

		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},

		first: function() {
			return this.eq( 0 );
		},

		last: function() {
			return this.eq( -1 );
		},

		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},

		end: function() {
			return this.prevObject || this.constructor();
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};

	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;

			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
			target = {};
		}

		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}

		for ( ; i < length; i++ ) {

			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {

				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];

					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = jQuery.isArray( copy ) ) ) ) {

						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray( src ) ? src : [];

						} else {
							clone = src && jQuery.isPlainObject( src ) ? src : {};
						}

						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );

					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend( {

		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function( msg ) {
			throw new Error( msg );
		},

		noop: function() {},

		isFunction: function( obj ) {
			return jQuery.type( obj ) === "function";
		},

		isArray: Array.isArray,

		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},

		isNumeric: function( obj ) {

			// parseFloat NaNs numeric-cast false positives (null|true|false|"")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			// adding 1 corrects loss of precision from parseFloat (#15100)
			var realStringObj = obj && obj.toString();
			return !jQuery.isArray( obj ) && ( realStringObj - parseFloat( realStringObj ) + 1 ) >= 0;
		},

		isPlainObject: function( obj ) {
			var key;

			// Not plain objects:
			// - Any object or value whose internal [[Class]] property is not "[object Object]"
			// - DOM nodes
			// - window
			if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
				return false;
			}

			// Not own constructor property must be Object
			if ( obj.constructor &&
					!hasOwn.call( obj, "constructor" ) &&
					!hasOwn.call( obj.constructor.prototype || {}, "isPrototypeOf" ) ) {
				return false;
			}

			// Own properties are enumerated firstly, so to speed up,
			// if last one is own, then all properties are own
			for ( key in obj ) {}

			return key === undefined || hasOwn.call( obj, key );
		},

		isEmptyObject: function( obj ) {
			var name;
			for ( name in obj ) {
				return false;
			}
			return true;
		},

		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}

			// Support: Android<4.0, iOS<6 (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call( obj ) ] || "object" :
				typeof obj;
		},

		// Evaluates a script in a global context
		globalEval: function( code ) {
			var script,
				indirect = eval;

			code = jQuery.trim( code );

			if ( code ) {

				// If the code includes a valid, prologue position
				// strict mode pragma, execute code by injecting a
				// script tag into the document.
				if ( code.indexOf( "use strict" ) === 1 ) {
					script = document.createElement( "script" );
					script.text = code;
					document.head.appendChild( script ).parentNode.removeChild( script );
				} else {

					// Otherwise, avoid the DOM node creation, insertion
					// and removal by using an indirect global eval

					indirect( code );
				}
			}
		},

		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE9-11+
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},

		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},

		each: function( obj, callback ) {
			var length, i = 0;

			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}

			return obj;
		},

		// Support: Android<4.1
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},

		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];

			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}

			return ret;
		},

		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},

		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;

			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}

			first.length = i;

			return first;
		},

		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];

			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}

			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}
			}

			// Flatten any nested arrays
			return concat.apply( [], ret );
		},

		// A global GUID counter for objects
		guid: 1,

		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;

			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}

			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}

			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};

			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;

			return proxy;
		},

		now: Date.now,

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );

	// JSHint would error on this code due to the Symbol not being defined in ES5.
	// Defining this global in .jshintrc would create a danger of using the global
	// unguarded in another place, it seems safer to just disable JSHint for these
	// three lines.
	/* jshint ignore: start */
	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}
	/* jshint ignore: end */

	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

	function isArrayLike( obj ) {

		// Support: iOS 8.2 (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = jQuery.type( obj );

		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}

		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.2.1
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2015-10-17
	 */
	(function( window ) {

	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,

		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,

		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},

		// General-purpose constants
		MAX_NEGATIVE = 1 << 31,

		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// http://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},

		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

		// Regular expressions

		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",

		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",

		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",

		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),

		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},

		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,

		rnative = /^[^{]+\{\s*\[native \w/,

		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

		rsibling = /[+~]/,
		rescape = /'|\\/g,

		// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},

		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		};

	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?

			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :

			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}

	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, nidselect, match, groups, newSelector,
			newContext = context && context.ownerDocument,

			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;

		results = results || [];

		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

			return results;
		}

		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {

			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;

			if ( documentIsHTML ) {

				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

					// ID selector
					if ( (m = match[1]) ) {

						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {

								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}

						// Element context
						} else {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {

								results.push( elem );
								return results;
							}
						}

					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;

					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {

						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}

				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;

					// qSA looks outside Element context, which is not what we want
					// Thanks to Andrew Dupont for this workaround technique
					// Support: IE <=8
					// Exclude object elements
					} else if ( context.nodeName.toLowerCase() !== "object" ) {

						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rescape, "\\$&" );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}

						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						nidselect = ridentifier.test( nid ) ? "#" + nid : "[id='" + nid + "']";
						while ( i-- ) {
							groups[i] = nidselect + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );

						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}

					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}

		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}

	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];

		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}

	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}

	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created div and expects a boolean result
	 */
	function assert( fn ) {
		var div = document.createElement("div");

		try {
			return !!fn( div );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( div.parentNode ) {
				div.parentNode.removeChild( div );
			}
			// release memory in IE
			div = null;
		}
	}

	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;

		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}

	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				( ~b.sourceIndex || MAX_NEGATIVE ) -
				( ~a.sourceIndex || MAX_NEGATIVE );

		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}

		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}

		return a ? 1 : -1;
	}

	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;

				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}

	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}

	// Expose support vars for convenience
	support = Sizzle.support = {};

	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};

	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, parent,
			doc = node ? node.ownerDocument || node : preferredDoc;

		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}

		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );

		// Support: IE 9-11, Edge
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		if ( (parent = document.defaultView) && parent.top !== parent ) {
			// Support: IE 11
			if ( parent.addEventListener ) {
				parent.addEventListener( "unload", unloadHandler, false );

			// Support: IE 9 - 10 only
			} else if ( parent.attachEvent ) {
				parent.attachEvent( "onunload", unloadHandler );
			}
		}

		/* Attributes
		---------------------------------------------------------------------- */

		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( div ) {
			div.className = "i";
			return !div.getAttribute("className");
		});

		/* getElement(s)By*
		---------------------------------------------------------------------- */

		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( div ) {
			div.appendChild( document.createComment("") );
			return !div.getElementsByTagName("*").length;
		});

		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );

		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( div ) {
			docElem.appendChild( div ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});

		// ID find and filter
		if ( support.getById ) {
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var m = context.getElementById( id );
					return m ? [ m ] : [];
				}
			};
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
		} else {
			// Support: IE6/7
			// getElementById is not reliable as a find shortcut
			delete Expr.find["ID"];

			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
		}

		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );

				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :

			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );

				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}

					return tmp;
				}
				return results;
			};

		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};

		/* QSA/matchesSelector
		---------------------------------------------------------------------- */

		// QSA and matchesSelector support

		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];

		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See http://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];

		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( div ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// http://bugs.jquery.com/ticket/12359
				docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";

				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( div.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}

				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !div.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}

				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}

				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}

				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibing-combinator selector` fails
				if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});

			assert(function( div ) {
				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				div.appendChild( input ).setAttribute( "name", "D" );

				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( div.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}

				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":enabled").length ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Opera 10-11 does not throw on post-comma invalid pseudos
				div.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}

		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {

			assert(function( div ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( div, "div" );

				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( div, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}

		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );

		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};

		/* Sorting
		---------------------------------------------------------------------- */

		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {

			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}

			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :

				// Otherwise we know they are disconnected
				1;

			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}

				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}

			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];

			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;

			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}

			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}

			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}

			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};

		return document;
	};

	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};

	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );

		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

			try {
				var ret = matches.call( elem, expr );

				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}

		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};

	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};

	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;

		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};

	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};

	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;

		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}

		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;

		return results;
	};

	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes

		return ret;
	};

	Expr = Sizzle.selectors = {

		// Can be adjusted by the user
		cacheLength: 50,

		createPseudo: markFunction,

		match: matchExpr,

		attrHandle: {},

		find: {},

		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},

		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );

				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}

				return match.slice( 0, 4 );
			},

			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();

				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}

					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}

				return match;
			},

			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];

				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}

				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";

				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}

				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},

		filter: {

			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},

			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];

				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},

			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );

					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}

					result += "";

					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},

			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";

				return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :

					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;

						if ( parent ) {

							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {

											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [ forward ? parent.firstChild : parent.lastChild ];

							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {

								// Seek `elem` from a previously-cached index

								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];

								while ( (node = ++nodeIndex && node && node[ dir ] ||

									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {

									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}

							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});

									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});

									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}

								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {

										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {

											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});

												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});

												uniqueCache[ type ] = [ dirruns, diff ];
											}

											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},

			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );

				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}

				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}

				return fn;
			}
		},

		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );

				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;

						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),

			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),

			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),

			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),

			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},

			"root": function( elem ) {
				return elem === docElem;
			},

			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},

			// Boolean properties
			"enabled": function( elem ) {
				return elem.disabled === false;
			},

			"disabled": function( elem ) {
				return elem.disabled === true;
			},

			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},

			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}

				return elem.selected === true;
			},

			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},

			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},

			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},

			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},

			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},

			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},

			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),

			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),

			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),

			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};

	Expr.pseudos["nth"] = Expr.pseudos["eq"];

	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}

	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();

	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];

		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}

		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;

		while ( soFar ) {

			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}

			matched = false;

			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}

			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}

			if ( !matched ) {
				break;
			}
		}

		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};

	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}

	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			checkNonElements = base && dir === "parentNode",
			doneName = done++;

		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
			} :

			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];

				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

							if ( (oldCache = uniqueCache[ dir ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ dir ] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
			};
	}

	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}

	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}

	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;

		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}

		return newUnmatched;
	}

	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,

				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,

				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

						// ...intermediate processing is necessary
						[] :

						// ...otherwise use results directly
						results :
					matcherIn;

			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}

			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );

				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}

			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}

					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

							seed[temp] = !(results[temp] = elem);
						}
					}
				}

			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}

	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,

			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];

		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}

		return elementMatcher( matchers );
	}

	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;

				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}

				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}

				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;

				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}

					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}

					// Add matches to results
					push.apply( results, setMatched );

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {

						Sizzle.uniqueSort( results );
					}
				}

				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}

	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];

		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}

			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};

	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );

		results = results || [];

		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {

			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					support.getById && context.nodeType === 9 && documentIsHTML &&
					Expr.relative[ tokens[1].type ] ) {

				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;

				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}

				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];

				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}

						break;
					}
				}
			}
		}

		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};

	// One-time assignments

	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;

	// Initialize against the default document
	setDocument();

	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( div1 ) {
		// Should return 1, but returns 4 (following)
		return div1.compareDocumentPosition( document.createElement("div") ) & 1;
	});

	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( div ) {
		div.innerHTML = "<a href='#'></a>";
		return div.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}

	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( div ) {
		div.innerHTML = "<input/>";
		div.firstChild.setAttribute( "value", "" );
		return div.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}

	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( div ) {
		return div.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}

	return Sizzle;

	})( window );



	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;



	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};


	var siblings = function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	};


	var rneedsContext = jQuery.expr.match.needsContext;

	var rsingleTag = ( /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/ );



	var risSimple = /^.[^:#\[\.,]*$/;

	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				/* jshint -W018 */
				return !!qualifier.call( elem, i, elem ) !== not;
			} );

		}

		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );

		}

		if ( typeof qualifier === "string" ) {
			if ( risSimple.test( qualifier ) ) {
				return jQuery.filter( qualifier, elements, not );
			}

			qualifier = jQuery.filter( qualifier, elements );
		}

		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];

		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		return elems.length === 1 && elem.nodeType === 1 ?
			jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
			jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
				return elem.nodeType === 1;
			} ) );
	};

	jQuery.fn.extend( {
		find: function( selector ) {
			var i,
				len = this.length,
				ret = [],
				self = this;

			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}

			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}

			// Needed because $( selector, context ) becomes $( context ).find( selector )
			ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
			ret.selector = this.selector ? this.selector + " " + selector : selector;
			return ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );


	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,

		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}

			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;

			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[ 0 ] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {

					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];

				} else {
					match = rquickExpr.exec( selector );
				}

				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {

					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;

						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );

						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {

								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );

								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}

						return this;

					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );

						// Support: Blackberry 4.6
						// gEBID returns nodes no longer in the document (#6963)
						if ( elem && elem.parentNode ) {

							// Inject the element directly into the jQuery object
							this.length = 1;
							this[ 0 ] = elem;
						}

						this.context = document;
						this.selector = selector;
						return this;
					}

				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}

			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this.context = this[ 0 ] = selector;
				this.length = 1;
				return this;

			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :

					// Execute immediately if ready is not present
					selector( jQuery );
			}

			if ( selector.selector !== undefined ) {
				this.selector = selector.selector;
				this.context = selector.context;
			}

			return jQuery.makeArray( selector, this );
		};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery( document );


	var rparentsprev = /^(?:parents|prev(?:Until|All))/,

		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

	jQuery.fn.extend( {
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;

			return this.filter( function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},

		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
					jQuery( selectors, context || this.context ) :
					0;

			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( pos ?
						pos.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}

			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},

		// Determine the position of an element within the set
		index: function( elem ) {

			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}

			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}

			// Locate the position of the desired element
			return indexOf.call( this,

				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},

		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},

		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );

	function sibling( cur, dir ) {
		while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
		return cur;
	}

	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
			return elem.contentDocument || jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );

			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}

			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}

			if ( this.length > 1 ) {

				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}

				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}

			return this.pushStack( matched );
		};
	} );
	var rnotwhite = ( /\S+/g );



	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}

	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );

		var // Flag to know if list is currently firing
			firing,

			// Last fire value for non-forgettable lists
			memory,

			// Flag to know if list was already fired
			fired,

			// Flag to prevent firing
			locked,

			// Actual callback list
			list = [],

			// Queue of execution data for repeatable lists
			queue = [],

			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,

			// Fire callbacks
			fire = function() {

				// Enforce single-firing
				locked = options.once;

				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {

						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {

							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}

				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}

				firing = false;

				// Clean up if we're done firing for good
				if ( locked ) {

					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];

					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},

			// Actual Callbacks object
			self = {

				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {

						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}

						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( jQuery.isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );

						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},

				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );

							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},

				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},

				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},

				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},

				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = queue = [];
					if ( !memory ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},

				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},

				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},

				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};

		return self;
	};


	jQuery.extend( {

		Deferred: function( func ) {
			var tuples = [

					// action, add listener, listener list, final state
					[ "resolve", "done", jQuery.Callbacks( "once memory" ), "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ), "rejected" ],
					[ "notify", "progress", jQuery.Callbacks( "memory" ) ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					then: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;
						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {
								var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];

								// deferred[ done | fail | progress ] for forwarding actions to newDefer
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this === promise ? newDefer.promise() : this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},

					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};

			// Keep pipe for back-compat
			promise.pipe = promise.then;

			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 3 ];

				// promise[ done | fail | progress ] = list.add
				promise[ tuple[ 1 ] ] = list.add;

				// Handle state
				if ( stateString ) {
					list.add( function() {

						// state = [ resolved | rejected ]
						state = stateString;

					// [ reject_list | resolve_list ].disable; progress_list.lock
					}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
				}

				// deferred[ resolve | reject | notify ]
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? promise : this, arguments );
					return this;
				};
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );

			// Make the deferred a promise
			promise.promise( deferred );

			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function( subordinate /* , ..., subordinateN */ ) {
			var i = 0,
				resolveValues = slice.call( arguments ),
				length = resolveValues.length,

				// the count of uncompleted subordinates
				remaining = length !== 1 ||
					( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

				// the master Deferred.
				// If resolveValues consist of only a single Deferred, just use that.
				deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

				// Update function for both resolve and progress values
				updateFunc = function( i, contexts, values ) {
					return function( value ) {
						contexts[ i ] = this;
						values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( values === progressValues ) {
							deferred.notifyWith( contexts, values );
						} else if ( !( --remaining ) ) {
							deferred.resolveWith( contexts, values );
						}
					};
				},

				progressValues, progressContexts, resolveContexts;

			// Add listeners to Deferred subordinates; treat others as resolved
			if ( length > 1 ) {
				progressValues = new Array( length );
				progressContexts = new Array( length );
				resolveContexts = new Array( length );
				for ( ; i < length; i++ ) {
					if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
						resolveValues[ i ].promise()
							.progress( updateFunc( i, progressContexts, progressValues ) )
							.done( updateFunc( i, resolveContexts, resolveValues ) )
							.fail( deferred.reject );
					} else {
						--remaining;
					}
				}
			}

			// If we're not waiting on anything, resolve the master
			if ( !remaining ) {
				deferred.resolveWith( resolveContexts, resolveValues );
			}

			return deferred.promise();
		}
	} );


	// The deferred used on DOM ready
	var readyList;

	jQuery.fn.ready = function( fn ) {

		// Add the callback
		jQuery.ready.promise().done( fn );

		return this;
	};

	jQuery.extend( {

		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},

		// Handle when the DOM is ready
		ready: function( wait ) {

			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );

			// Trigger any bound ready events
			if ( jQuery.fn.triggerHandler ) {
				jQuery( document ).triggerHandler( "ready" );
				jQuery( document ).off( "ready" );
			}
		}
	} );

	/**
	 * The ready event handler and self cleanup method
	 */
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );
		jQuery.ready();
	}

	jQuery.ready.promise = function( obj ) {
		if ( !readyList ) {

			readyList = jQuery.Deferred();

			// Catch cases where $(document).ready() is called
			// after the browser event has already occurred.
			// Support: IE9-10 only
			// Older IE sometimes signals "interactive" too soon
			if ( document.readyState === "complete" ||
				( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

				// Handle it asynchronously to allow scripts the opportunity to delay ready
				window.setTimeout( jQuery.ready );

			} else {

				// Use the handy event callback
				document.addEventListener( "DOMContentLoaded", completed );

				// A fallback to window.onload, that will always work
				window.addEventListener( "load", completed );
			}
		}
		return readyList.promise( obj );
	};

	// Kick off the DOM ready check even if the user does not
	jQuery.ready.promise();




	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;

		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {

				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn(
						elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}

		return chainable ?
			elems :

			// Gets
			bulk ?
				fn.call( elems ) :
				len ? fn( elems[ 0 ], key ) : emptyGet;
	};
	var acceptData = function( owner ) {

		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		/* jshint -W018 */
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};




	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}

	Data.uid = 1;

	Data.prototype = {

		register: function( owner, initial ) {
			var value = initial || {};

			// If it is a node unlikely to be stringify-ed or looped over
			// use plain assignment
			if ( owner.nodeType ) {
				owner[ this.expando ] = value;

			// Otherwise secure it in a non-enumerable, non-writable property
			// configurability must be true to allow the property to be
			// deleted with the delete operator
			} else {
				Object.defineProperty( owner, this.expando, {
					value: value,
					writable: true,
					configurable: true
				} );
			}
			return owner[ this.expando ];
		},
		cache: function( owner ) {

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( !acceptData( owner ) ) {
				return {};
			}

			// Check if the owner object already has a cache
			var value = owner[ this.expando ];

			// If not, create one
			if ( !value ) {
				value = {};

				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if ( acceptData( owner ) ) {

					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if ( owner.nodeType ) {
						owner[ this.expando ] = value;

					// Otherwise secure it in a non-enumerable property
					// configurable must be true to allow the property to be
					// deleted when data is removed
					} else {
						Object.defineProperty( owner, this.expando, {
							value: value,
							configurable: true
						} );
					}
				}
			}

			return value;
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );

			// Handle: [ owner, key, value ] args
			if ( typeof data === "string" ) {
				cache[ data ] = value;

			// Handle: [ owner, { properties } ] args
			} else {

				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ prop ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :
				owner[ this.expando ] && owner[ this.expando ][ key ];
		},
		access: function( owner, key, value ) {
			var stored;

			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {

				stored = this.get( owner, key );

				return stored !== undefined ?
					stored : this.get( owner, jQuery.camelCase( key ) );
			}

			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );

			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i, name, camel,
				cache = owner[ this.expando ];

			if ( cache === undefined ) {
				return;
			}

			if ( key === undefined ) {
				this.register( owner );

			} else {

				// Support array or space separated string of keys
				if ( jQuery.isArray( key ) ) {

					// If "name" is an array of keys...
					// When data is initially created, via ("key", "val") signature,
					// keys will be converted to camelCase.
					// Since there is no way to tell _how_ a key was added, remove
					// both plain key and camelCase key. #12786
					// This will only penalize the array argument path.
					name = key.concat( key.map( jQuery.camelCase ) );
				} else {
					camel = jQuery.camelCase( key );

					// Try the string as a key before any manipulation
					if ( key in cache ) {
						name = [ key, camel ];
					} else {

						// If a key with the spaces exists, use it.
						// Otherwise, create an array by matching non-whitespace
						name = camel;
						name = name in cache ?
							[ name ] : ( name.match( rnotwhite ) || [] );
					}
				}

				i = name.length;

				while ( i-- ) {
					delete cache[ name[ i ] ];
				}
			}

			// Remove the expando if there's no more data
			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

				// Support: Chrome <= 35-45+
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://code.google.com/p/chromium/issues/detail?id=378607
				if ( owner.nodeType ) {
					owner[ this.expando ] = undefined;
				} else {
					delete owner[ this.expando ];
				}
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	var dataPriv = new Data();

	var dataUser = new Data();



	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /[A-Z]/g;

	function dataAttr( elem, key, data ) {
		var name;

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
			data = elem.getAttribute( name );

			if ( typeof data === "string" ) {
				try {
					data = data === "true" ? true :
						data === "false" ? false :
						data === "null" ? null :

						// Only convert to a number if it doesn't change the string
						+data + "" === data ? +data :
						rbrace.test( data ) ? jQuery.parseJSON( data ) :
						data;
				} catch ( e ) {}

				// Make sure we set the data so it isn't changed later
				dataUser.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}

	jQuery.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || dataPriv.hasData( elem );
		},

		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data );
		},

		removeData: function( elem, name ) {
			dataUser.remove( elem, name );
		},

		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return dataPriv.access( elem, name, data );
		},

		_removeData: function( elem, name ) {
			dataPriv.remove( elem, name );
		}
	} );

	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;

			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = dataUser.get( elem );

					if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {

							// Support: IE11+
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						dataPriv.set( elem, "hasDataAttrs", true );
					}
				}

				return data;
			}

			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					dataUser.set( this, key );
				} );
			}

			return access( this, function( value ) {
				var data, camelKey;

				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {

					// Attempt to get data from the cache
					// with the key as-is
					data = dataUser.get( elem, key ) ||

						// Try to find dashed key if it exists (gh-2779)
						// This is for 2.2.x only
						dataUser.get( elem, key.replace( rmultiDash, "-$&" ).toLowerCase() );

					if ( data !== undefined ) {
						return data;
					}

					camelKey = jQuery.camelCase( key );

					// Attempt to get data from the cache
					// with the key camelized
					data = dataUser.get( elem, camelKey );
					if ( data !== undefined ) {
						return data;
					}

					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, camelKey, undefined );
					if ( data !== undefined ) {
						return data;
					}

					// We tried really hard, but the data doesn't exist.
					return;
				}

				// Set the data...
				camelKey = jQuery.camelCase( key );
				this.each( function() {

					// First, attempt to store a copy or reference of any
					// data that might've been store with a camelCased key.
					var data = dataUser.get( this, camelKey );

					// For HTML5 data-* attribute interop, we have to
					// store property names with dashes in a camelCase form.
					// This might not apply to all properties...*
					dataUser.set( this, camelKey, value );

					// *... In the case of properties that might _actually_
					// have dashes, we need to also store a copy of that
					// unchanged property.
					if ( key.indexOf( "-" ) > -1 && data !== undefined ) {
						dataUser.set( this, key, value );
					}
				} );
			}, null, value, arguments.length > 1, null, true );
		},

		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} );
		}
	} );


	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;

			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = dataPriv.get( elem, type );

				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},

		dequeue: function( elem, type ) {
			type = type || "fx";

			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};

			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}

			if ( fn ) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}

				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}

			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},

		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					dataPriv.remove( elem, [ type + "queue", key ] );
				} )
			} );
		}
	} );

	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;

			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}

			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}

			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );

					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );

					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},

		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};

			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while ( i-- ) {
				tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

	var isHidden = function( elem, el ) {

			// isHidden might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;
			return jQuery.css( elem, "display" ) === "none" ||
				!jQuery.contains( elem.ownerDocument, elem );
		};



	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted,
			scale = 1,
			maxIterations = 20,
			currentValue = tween ?
				function() { return tween.cur(); } :
				function() { return jQuery.css( elem, prop, "" ); },
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

			// Starting value computation is required for potential unit mismatches
			initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );

		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];

			// Make sure we update the tween properties later on
			valueParts = valueParts || [];

			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;

			do {

				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";

				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style( elem, prop, initialInUnit + unit );

			// Update scale, tolerating zero or NaN from tween.cur()
			// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (
				scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
			);
		}

		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;

			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}
	var rcheckableType = ( /^(?:checkbox|radio)$/i );

	var rtagName = ( /<([\w:-]+)/ );

	var rscriptType = ( /^$|\/(?:java|ecma)script/i );



	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {

		// Support: IE9
		option: [ 1, "<select multiple='multiple'>", "</select>" ],

		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

	// Support: IE9
	wrapMap.optgroup = wrapMap.option;

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;


	function getAll( context, tag ) {

		// Support: IE9-11+
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret = typeof context.getElementsByTagName !== "undefined" ?
				context.getElementsByTagName( tag || "*" ) :
				typeof context.querySelectorAll !== "undefined" ?
					context.querySelectorAll( tag || "*" ) :
				[];

		return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
			jQuery.merge( [ context ], ret ) :
			ret;
	}


	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}


	var rhtml = /<|&#?\w+;/;

	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {

					// Support: Android<4.1, PhantomJS<2
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Support: Android<4.1, PhantomJS<2
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {

			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	}


	( function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );

		// Support: Android 4.0-4.3, Safari<=5.1
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );

		div.appendChild( input );

		// Support: Safari<=5.1, Android<4.2
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

		// Support: IE<=11+
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	} )();


	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	// Support: IE9
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}

	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {

			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {

				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}

		if ( data == null && fn == null ) {

			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {

				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {

				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {

				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};

			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}

	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {

		global: {},

		add: function( elem, types, handler, data, selector ) {

			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {

					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}

			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );

				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}

				if ( special.add ) {
					special.add.call( elem, handleObj );

					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}

		},

		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {

			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}

				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];

					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );

						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

						jQuery.removeEvent( elem, type, elemData.handle );
					}

					delete events[ type ];
				}
			}

			// Remove data and the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},

		dispatch: function( event ) {

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( event );

			var i, j, ret, matched, handleObj,
				handlerQueue = [],
				args = slice.call( arguments ),
				handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;
			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;

				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {

					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );

						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}

			return event.result;
		},

		handlers: function( event, handlers ) {
			var i, matches, sel, handleObj,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;

			// Support (at least): Chrome, IE9
			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			//
			// Support: Firefox<=42+
			// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
			if ( delegateCount && cur.nodeType &&
				( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {

				for ( ; cur !== this; cur = cur.parentNode || this ) {

					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
						matches = [];
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if ( matches[ sel ] === undefined ) {
								matches[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matches[ sel ] ) {
								matches.push( handleObj );
							}
						}
						if ( matches.length ) {
							handlerQueue.push( { elem: cur, handlers: matches } );
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
			}

			return handlerQueue;
		},

		// Includes some event props shared by KeyEvent and MouseEvent
		props: ( "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " +
			"metaKey relatedTarget shiftKey target timeStamp view which" ).split( " " ),

		fixHooks: {},

		keyHooks: {
			props: "char charCode key keyCode".split( " " ),
			filter: function( event, original ) {

				// Add which for key events
				if ( event.which == null ) {
					event.which = original.charCode != null ? original.charCode : original.keyCode;
				}

				return event;
			}
		},

		mouseHooks: {
			props: ( "button buttons clientX clientY offsetX offsetY pageX pageY " +
				"screenX screenY toElement" ).split( " " ),
			filter: function( event, original ) {
				var eventDoc, doc, body,
					button = original.button;

				// Calculate pageX/Y if missing and clientX/Y available
				if ( event.pageX == null && original.clientX != null ) {
					eventDoc = event.target.ownerDocument || document;
					doc = eventDoc.documentElement;
					body = eventDoc.body;

					event.pageX = original.clientX +
						( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) -
						( doc && doc.clientLeft || body && body.clientLeft || 0 );
					event.pageY = original.clientY +
						( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) -
						( doc && doc.clientTop  || body && body.clientTop  || 0 );
				}

				// Add which for click: 1 === left; 2 === middle; 3 === right
				// Note: button is not normalized, so don't use it
				if ( !event.which && button !== undefined ) {
					event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
				}

				return event;
			}
		},

		fix: function( event ) {
			if ( event[ jQuery.expando ] ) {
				return event;
			}

			// Create a writable copy of the event object and normalize some properties
			var i, prop, copy,
				type = event.type,
				originalEvent = event,
				fixHook = this.fixHooks[ type ];

			if ( !fixHook ) {
				this.fixHooks[ type ] = fixHook =
					rmouseEvent.test( type ) ? this.mouseHooks :
					rkeyEvent.test( type ) ? this.keyHooks :
					{};
			}
			copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

			event = new jQuery.Event( originalEvent );

			i = copy.length;
			while ( i-- ) {
				prop = copy[ i ];
				event[ prop ] = originalEvent[ prop ];
			}

			// Support: Cordova 2.5 (WebKit) (#13255)
			// All events should have a target; Cordova deviceready doesn't
			if ( !event.target ) {
				event.target = document;
			}

			// Support: Safari 6.0+, Chrome<28
			// Target should not be a text node (#504, #13143)
			if ( event.target.nodeType === 3 ) {
				event.target = event.target.parentNode;
			}

			return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
		},

		special: {
			load: {

				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {

				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {

				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},

			beforeunload: {
				postDispatch: function( event ) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};

	jQuery.removeEvent = function( elem, type, handle ) {

		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};

	jQuery.Event = function( src, props ) {

		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}

		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&

					// Support: Android<4.0
					src.returnValue === false ?
				returnTrue :
				returnFalse;

		// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();

		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
		isSimulated: false,

		preventDefault: function() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;

			if ( e && !this.isSimulated ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://code.google.com/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,

			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;

				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );

	jQuery.fn.extend( {
		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {

				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {

				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {

				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		}
	} );


	var
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,

		// Support: IE 10-11, Edge 10240+
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,

		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	// Manipulating tables requires a tbody
	function manipulationTarget( elem, content ) {
		return jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

			elem.getElementsByTagName( "tbody" )[ 0 ] ||
				elem.appendChild( elem.ownerDocument.createElement( "tbody" ) ) :
			elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );

		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute( "type" );
		}

		return elem;
	}

	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

		if ( dest.nodeType !== 1 ) {
			return;
		}

		// 1. Copy private data: events, handlers, etc.
		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.access( src );
			pdataCur = dataPriv.set( dest, pdataOld );
			events = pdataOld.events;

			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};

				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}

		// 2. Copy user data
		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );

			dataUser.set( dest, udataCur );
		}
	}

	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();

		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;

		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}

	function domManip( collection, args, callback, ignored ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}

		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {

							// Support: Android<4.1, PhantomJS<2
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( collection[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {

							if ( node.src ) {

								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
							}
						}
					}
				}
			}
		}

		return collection;
	}

	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;

		for ( ; ( node = nodes[ i ] ) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}

			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}

		return elem;
	}

	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},

		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );

			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {

				// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}

			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );

					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}

			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}

			// Return the cloned set
			return clone;
		},

		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;

			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				if ( acceptData( elem ) ) {
					if ( ( data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );

								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}

						// Support: Chrome <= 35-45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataPriv.expando ] = undefined;
					}
					if ( elem[ dataUser.expando ] ) {

						// Support: Chrome <= 35-45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataUser.expando ] = undefined;
					}
				}
			}
		}
	} );

	jQuery.fn.extend( {

		// Keep domManip exposed until 3.0 (gh-2225)
		domManip: domManip,

		detach: function( selector ) {
			return remove( this, selector, true );
		},

		remove: function( selector ) {
			return remove( this, selector );
		},

		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each( function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					} );
			}, null, value, arguments.length );
		},

		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},

		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},

		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},

		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},

		empty: function() {
			var elem,
				i = 0;

			for ( ; ( elem = this[ i ] ) != null; i++ ) {
				if ( elem.nodeType === 1 ) {

					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );

					// Remove any remaining nodes
					elem.textContent = "";
				}
			}

			return this;
		},

		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},

		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;

				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}

				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

					value = jQuery.htmlPrefilter( value );

					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};

							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}

						elem = 0;

					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}

				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},

		replaceWith: function() {
			var ignored = [];

			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;

				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}

			// Force callback invocation
			}, ignored );
		}
	} );

	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;

			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );

				// Support: QtWebKit
				// .get() because push.apply(_, arraylike) throws
				push.apply( ret, elems.get() );
			}

			return this.pushStack( ret );
		};
	} );


	var iframe,
		elemdisplay = {

			// Support: Firefox
			// We have to pre-define these values for FF (#10227)
			HTML: "block",
			BODY: "block"
		};

	/**
	 * Retrieve the actual display of a element
	 * @param {String} name nodeName of the element
	 * @param {Object} doc Document object
	 */

	// Called only from within defaultDisplay
	function actualDisplay( name, doc ) {
		var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

			display = jQuery.css( elem[ 0 ], "display" );

		// We don't have any data stored on the element,
		// so use "detach" method as fast way to get rid of the element
		elem.detach();

		return display;
	}

	/**
	 * Try to determine the default display value of an element
	 * @param {String} nodeName
	 */
	function defaultDisplay( nodeName ) {
		var doc = document,
			display = elemdisplay[ nodeName ];

		if ( !display ) {
			display = actualDisplay( nodeName, doc );

			// If the simple way fails, read from inside an iframe
			if ( display === "none" || !display ) {

				// Use the already-created iframe if possible
				iframe = ( iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" ) )
					.appendTo( doc.documentElement );

				// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
				doc = iframe[ 0 ].contentDocument;

				// Support: IE
				doc.write();
				doc.close();

				display = actualDisplay( nodeName, doc );
				iframe.detach();
			}

			// Store the correct default display
			elemdisplay[ nodeName ] = display;
		}

		return display;
	}
	var rmargin = ( /^margin/ );

	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

	var getStyles = function( elem ) {

			// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;

			if ( !view || !view.opener ) {
				view = window;
			}

			return view.getComputedStyle( elem );
		};

	var swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.apply( elem, args || [] );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	};


	var documentElement = document.documentElement;



	( function() {
		var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );

		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}

		// Support: IE9-11+
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
			"padding:0;margin-top:1px;position:absolute";
		container.appendChild( div );

		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {
			div.style.cssText =

				// Support: Firefox<29, Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;" +
				"position:relative;display:block;" +
				"margin:auto;border:1px;padding:1px;" +
				"top:1%;width:50%";
			div.innerHTML = "";
			documentElement.appendChild( container );

			var divStyle = window.getComputedStyle( div );
			pixelPositionVal = divStyle.top !== "1%";
			reliableMarginLeftVal = divStyle.marginLeft === "2px";
			boxSizingReliableVal = divStyle.width === "4px";

			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = divStyle.marginRight === "4px";

			documentElement.removeChild( container );
		}

		jQuery.extend( support, {
			pixelPosition: function() {

				// This test is executed only once but we still do memoizing
				// since we can use the boxSizingReliable pre-computing.
				// No need to check if the test was already performed, though.
				computeStyleTests();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return boxSizingReliableVal;
			},
			pixelMarginRight: function() {

				// Support: Android 4.0-4.3
				// We're checking for boxSizingReliableVal here instead of pixelMarginRightVal
				// since that compresses better and they're computed together anyway.
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return pixelMarginRightVal;
			},
			reliableMarginLeft: function() {

				// Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return reliableMarginLeftVal;
			},
			reliableMarginRight: function() {

				// Support: Android 2.3
				// Check if div with explicit width and no margin-right incorrectly
				// gets computed margin-right based on width of container. (#3333)
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				// This support function is only executed once so no memoizing is needed.
				var ret,
					marginDiv = div.appendChild( document.createElement( "div" ) );

				// Reset CSS: box-sizing; display; margin; border; padding
				marginDiv.style.cssText = div.style.cssText =

					// Support: Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;box-sizing:content-box;" +
					"display:block;margin:0;border:0;padding:0";
				marginDiv.style.marginRight = marginDiv.style.width = "0";
				div.style.width = "1px";
				documentElement.appendChild( container );

				ret = !parseFloat( window.getComputedStyle( marginDiv ).marginRight );

				documentElement.removeChild( container );
				div.removeChild( marginDiv );

				return ret;
			}
		} );
	} )();


	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;

		computed = computed || getStyles( elem );
		ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined;

		// Support: Opera 12.1x only
		// Fall back to style even without computed
		// computed is undefined for elems on document fragments
		if ( ( ret === "" || ret === undefined ) && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// Support: IE9
		// getPropertyValue is only needed for .css('filter') (#12537)
		if ( computed ) {

			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// http://dev.w3.org/csswg/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret !== undefined ?

			// Support: IE9-11+
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}


	function addGetHookIf( conditionFn, hookFn ) {

		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {

					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}


	var

		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,

		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},

		cssPrefixes = [ "Webkit", "O", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style;

	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( name ) {

		// Shortcut for names that are not vendor prefixed
		if ( name in emptyStyle ) {
			return name;
		}

		// Check for vendor prefixed names
		var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;

		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}

	function setPositiveNumber( elem, value, subtract ) {

		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec( value );
		return matches ?

			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
			value;
	}

	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i = extra === ( isBorderBox ? "border" : "content" ) ?

			// If we already have the right measurement, avoid augmentation
			4 :

			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,

			val = 0;

		for ( ; i < 4; i += 2 ) {

			// Both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}

			if ( isBorderBox ) {

				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}

				// At this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {

				// At this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

				// At this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}

		return val;
	}

	function getWidthOrHeight( elem, name, extra ) {

		// Start with offset property, which is equivalent to the border-box value
		var valueIsBorderBox = true,
			val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
			styles = getStyles( elem ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {

			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}

			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test( val ) ) {
				return val;
			}

			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );

			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}

		// Use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}

	function showHide( elements, show ) {
		var display, elem, hidden,
			values = [],
			index = 0,
			length = elements.length;

		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}

			values[ index ] = dataPriv.get( elem, "olddisplay" );
			display = elem.style.display;
			if ( show ) {

				// Reset the inline display of this element to learn if it is
				// being hidden by cascaded rules or not
				if ( !values[ index ] && display === "none" ) {
					elem.style.display = "";
				}

				// Set elements which have been overridden with display: none
				// in a stylesheet to whatever the default browser style is
				// for such an element
				if ( elem.style.display === "" && isHidden( elem ) ) {
					values[ index ] = dataPriv.access(
						elem,
						"olddisplay",
						defaultDisplay( elem.nodeName )
					);
				}
			} else {
				hidden = isHidden( elem );

				if ( display !== "none" || !hidden ) {
					dataPriv.set(
						elem,
						"olddisplay",
						hidden ? display : jQuery.css( elem, "display" )
					);
				}
			}
		}

		// Set the display of most of the elements in a second loop
		// to avoid the constant reflow
		for ( index = 0; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
			if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
				elem.style.display = show ? values[ index ] || "" : "none";
			}
		}

		return elements;
	}

	jQuery.extend( {

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {

						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},

		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {

			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}

			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;

			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;

				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );

					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}

				// If a number was passed in, add the unit (except for certain CSS properties)
				if ( type === "number" ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}

				// Support: IE9-11+
				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {

					style[ name ] = value;
				}

			} else {

				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

					return ret;
				}

				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},

		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name );

			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}

			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}

			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}

			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}
			return val;
		}
	} );

	jQuery.each( [ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {

					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
						elem.offsetWidth === 0 ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, name, extra );
							} ) :
							getWidthOrHeight( elem, name, extra );
				}
			},

			set: function( elem, value, extra ) {
				var matches,
					styles = extra && getStyles( elem ),
					subtract = extra && augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					);

				// Convert to pixels if value adjustment is needed
				if ( subtract && ( matches = rcssNum.exec( value ) ) &&
					( matches[ 3 ] || "px" ) !== "px" ) {

					elem.style[ name ] = value;
					value = jQuery.css( elem, name );
				}

				return setPositiveNumber( elem, value, subtract );
			}
		};
	} );

	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} )
					) + "px";
			}
		}
	);

	// Support: Android 2.3
	jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
		function( elem, computed ) {
			if ( computed ) {
				return swap( elem, { "display": "inline-block" },
					curCSS, [ elem, "marginRight" ] );
			}
		}
	);

	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},

					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];

				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}

				return expanded;
			}
		};

		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );

	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;

				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;

					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}

					return map;
				}

				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		},
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}

			return this.each( function() {
				if ( isHidden( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );


	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];

			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];

			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;

			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}

			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;

				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}

				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );

				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {

				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 &&
					( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
						jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};

	// Support: IE9
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};

	jQuery.fx = Tween.prototype.init;

	// Back Compat <1.8 extension point
	jQuery.fx.step = {};




	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;

	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = jQuery.now() );
	}

	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };

		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4 ; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}

		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

				// We're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter( elem, props, opts ) {
		/* jshint validthis: true */
		var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHidden( elem ),
			dataShow = dataPriv.get( elem, "fxshow" );

		// Handle queue: false promises
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always( function() {

				// Ensure the complete handler is called before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}

		// Height/width overflow pass
		if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {

			// Make sure that nothing sneaks out
			// Record all 3 overflow attributes because IE9-10 do not
			// change the overflow attribute when overflowX and
			// overflowY are set to the same value
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

			// Set display property to inline-block for height/width
			// animations on inline elements that are having width/height animated
			display = jQuery.css( elem, "display" );

			// Test default display if display is currently "none"
			checkDisplay = display === "none" ?
				dataPriv.get( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

			if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
				style.display = "inline-block";
			}
		}

		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}

		// show/hide pass
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.exec( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {

					// If there is dataShow left over from a stopped hide or show
					// and we are going to proceed with show, we should pretend to be hidden
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

			// Any non-fx value stops us from restoring the original display value
			} else {
				display = undefined;
			}
		}

		if ( !jQuery.isEmptyObject( orig ) ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", {} );
			}

			// Store state if its toggle - enables .stop().toggle() to "reverse"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}
			if ( hidden ) {
				jQuery( elem ).show();
			} else {
				anim.done( function() {
					jQuery( elem ).hide();
				} );
			}
			anim.done( function() {
				var prop;

				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
			for ( prop in orig ) {
				tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

				if ( !( prop in dataShow ) ) {
					dataShow[ prop ] = tween.start;
					if ( hidden ) {
						tween.end = tween.start;
						tween.start = prop === "width" || prop === "height" ? 1 : 0;
					}
				}
			}

		// If this is a noop like .hide().hide(), restore an overwritten display value
		} else if ( ( display === "none" ? defaultDisplay( elem.nodeName ) : display ) === "inline" ) {
			style.display = display;
		}
	}

	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}

			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}

			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];

				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}

	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {

				// Don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

					// Support: Android 2.3
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;

				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( percent );
				}

				deferred.notifyWith( elem, [ animation, percent, remaining ] );

				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,

						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length ; index++ ) {
						animation.tweens[ index ].run( 1 );
					}

					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;

		propFilter( props, animation.opts.specialEasing );

		for ( ; index < length ; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( jQuery.isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						jQuery.proxy( result.stop, result );
				}
				return result;
			}
		}

		jQuery.map( props, createTween, animation );

		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}

		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);

		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}

	jQuery.Animation = jQuery.extend( Animation, {
		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},

		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnotwhite );
			}

			var prop,
				index = 0,
				length = props.length;

			for ( ; index < length ; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},

		prefilters: [ defaultPrefilter ],

		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );

	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};

		opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ?
			opt.duration : opt.duration in jQuery.fx.speeds ?
				jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};

		return opt;
	};

	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {

			// Show any hidden elements after setting opacity to 0
			return this.filter( isHidden ).css( "opacity", 0 ).show()

				// Animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {

					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );

					// Empty animations, or finishing resolves immediately
					if ( empty || dataPriv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;

			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};

			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}

			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = dataPriv.get( this );

				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}

				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {

						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}

				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = dataPriv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;

				// Enable finishing flag on private data
				data.finish = true;

				// Empty the queue first
				jQuery.queue( this, type, [] );

				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}

				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}

				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}

				// Turn off finishing flag
				delete data.finish;
			} );
		}
	} );

	jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );

	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );

	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;

		fxNow = jQuery.now();

		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];

			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};

	jQuery.fx.interval = 13;
	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};

	jQuery.fx.stop = function() {
		window.clearInterval( timerId );

		timerId = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,

		// Default speed
		_default: 400
	};


	// Based off of the plugin by Clint Helfers, with permission.
	// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};


	( function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );

		input.type = "checkbox";

		// Support: iOS<=5.1, Android<=4.2+
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";

		// Support: IE<=11+
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;

		// Support: Android<=2.3
		// Options inside disabled selects are incorrectly marked as disabled
		select.disabled = true;
		support.optDisabled = !opt.disabled;

		// Support: IE<=11+
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	} )();


	var boolHook,
		attrHandle = jQuery.expr.attrHandle;

	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},

		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );

	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}

			// All attributes are lowercase
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				name = name.toLowerCase();
				hooks = jQuery.attrHooks[ name ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
			}

			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}

				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				elem.setAttribute( name, value + "" );
				return value;
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},

		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},

		removeAttr: function( elem, value ) {
			var name, propName,
				i = 0,
				attrNames = value && value.match( rnotwhite );

			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					propName = jQuery.propFix[ name ] || name;

					// Boolean attributes get special treatment (#10870)
					if ( jQuery.expr.match.bool.test( name ) ) {

						// Set corresponding property to false
						elem[ propName ] = false;
					}

					elem.removeAttribute( name );
				}
			}
		}
	} );

	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {

				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};
	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;

		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle;
			if ( !isXML ) {

				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ name ];
				attrHandle[ name ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					name.toLowerCase() :
					null;
				attrHandle[ name ] = handle;
			}
			return ret;
		};
	} );




	var rfocusable = /^(?:input|select|textarea|button)$/i,
		rclickable = /^(?:a|area)$/i;

	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},

		removeProp: function( name ) {
			return this.each( function() {
				delete this[ jQuery.propFix[ name ] || name ];
			} );
		}
	} );

	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}

			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				return ( elem[ name ] = value );
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			return elem[ name ];
		},

		propHooks: {
			tabIndex: {
				get: function( elem ) {

					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );

					return tabindex ?
						parseInt( tabindex, 10 ) :
						rfocusable.test( elem.nodeName ) ||
							rclickable.test( elem.nodeName ) && elem.href ?
								0 :
								-1;
				}
			}
		},

		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );

	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function( elem ) {
				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;

					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}

	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );




	var rclass = /[\t\r\n\f]/g;

	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}

	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );

					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {

							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		toggleClass: function( value, stateVal ) {
			var type = typeof value;

			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}

			return this.each( function() {
				var className, i, self, classNames;

				if ( type === "string" ) {

					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = value.match( rnotwhite ) || [];

					while ( ( className = classNames[ i++ ] ) ) {

						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}

				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {

						// Store className if set
						dataPriv.set( this, "__className__", className );
					}

					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if ( this.setAttribute ) {
						this.setAttribute( "class",
							className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
						);
					}
				}
			} );
		},

		hasClass: function( selector ) {
			var className, elem,
				i = 0;

			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + getClass( elem ) + " " ).replace( rclass, " " )
						.indexOf( className ) > -1
				) {
					return true;
				}
			}

			return false;
		}
	} );




	var rreturn = /\r/g,
		rspaces = /[\x20\t\r\n\f]+/g;

	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[ 0 ];

			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];

					if ( hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}

					ret = elem.value;

					return typeof ret === "string" ?

						// Handle most common string cases
						ret.replace( rreturn, "" ) :

						// Handle cases where value is null/undef or number
						ret == null ? "" : ret;
				}

				return;
			}

			isFunction = jQuery.isFunction( value );

			return this.each( function( i ) {
				var val;

				if ( this.nodeType !== 1 ) {
					return;
				}

				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";

				} else if ( typeof val === "number" ) {
					val += "";

				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}

				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );

	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {

					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :

						// Support: IE10-11+
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						jQuery.trim( jQuery.text( elem ) ).replace( rspaces, " " );
				}
			},
			select: {
				get: function( elem ) {
					var value, option,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one" || index < 0,
						values = one ? null : [],
						max = one ? index + 1 : options.length,
						i = index < 0 ?
							max :
							one ? index : 0;

					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];

						// IE8-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&

								// Don't return options that are disabled or in a disabled optgroup
								( support.optDisabled ?
									!option.disabled : option.getAttribute( "disabled" ) === null ) &&
								( !option.parentNode.disabled ||
									!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

							// Get the specific value for the option
							value = jQuery( option ).val();

							// We don't need an array for one selects
							if ( one ) {
								return value;
							}

							// Multi-Selects return an array
							values.push( value );
						}
					}

					return values;
				},

				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;

					while ( i-- ) {
						option = options[ i ];
						if ( option.selected =
							jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
						) {
							optionSet = true;
						}
					}

					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	} );

	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );




	// Return jQuery for attributes-only inclusion


	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

	jQuery.extend( jQuery.event, {

		trigger: function( event, data, elem, onlyHandlers ) {

			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

			cur = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}

			if ( type.indexOf( "." ) > -1 ) {

				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );

			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;

				// jQuery handler
				handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
					dataPriv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}

				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {

				if ( ( !special._default ||
					special._default.apply( eventPath.pop(), data ) === false ) &&
					acceptData( elem ) ) {

					// Call a native DOM method on the target with the same name name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];

						if ( tmp ) {
							elem[ ontype ] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;

						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		// Piggyback on a donor event to simulate a different one
		// Used only for `focus(in | out)` events
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true
				}
			);

			jQuery.event.trigger( e, null, elem );
		}

	} );

	jQuery.fn.extend( {

		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );


	jQuery.each( ( "blur focus focusin focusout load resize scroll unload click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup error contextmenu" ).split( " " ),
		function( i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );

	jQuery.fn.extend( {
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );




	support.focusin = "onfocusin" in window;


	// Support: Firefox
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome, Safari
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};

			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix );

					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix ) - 1;

					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						dataPriv.remove( doc, fix );

					} else {
						dataPriv.access( doc, fix, attaches );
					}
				}
			};
		} );
	}
	var location = window.location;

	var nonce = jQuery.now();

	var rquery = ( /\?/ );



	// Support: Android 2.3
	// Workaround failure to string-cast null input
	jQuery.parseJSON = function( data ) {
		return JSON.parse( data + "" );
	};


	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml;
		if ( !data || typeof data !== "string" ) {
			return null;
		}

		// Support: IE9
		try {
			xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}

		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};


	var
		rhash = /#.*$/,
		rts = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,

		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},

		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},

		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),

		// Anchor tag for parsing the document origin
		originAnchor = document.createElement( "a" );
		originAnchor.href = location.href;

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {

		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {

			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

			if ( jQuery.isFunction( func ) ) {

				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {

					// Prepend if requested
					if ( dataType[ 0 ] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

		var inspected = {},
			seekingTransport = ( structure === transports );

		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}

		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}

		return target;
	}

	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {

		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}

		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {

			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}

			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}

	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},

			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while ( current ) {

			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}

			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}

			prev = current;
			current = dataTypes.shift();

			if ( current ) {

			// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {

					current = prev;

				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {

					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];

					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {

							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {

								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {

									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];

									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if ( conv !== true ) {

						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s.throws ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend( {

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test( location.protocol ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": jQuery.parseJSON,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?

				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},

		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),

		// Main method
		ajax: function( url, options ) {

			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var transport,

				// URL without anti-cache param
				cacheURL,

				// Response headers
				responseHeadersString,
				responseHeaders,

				// timeout handle
				timeoutTimer,

				// Url cleanup var
				urlAnchor,

				// To know if global events are to be dispatched
				fireGlobals,

				// Loop variable
				i,

				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),

				// Callbacks context
				callbackContext = s.context || s,

				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,

				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),

				// Status-dependent callbacks
				statusCode = s.statusCode || {},

				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},

				// The jqXHR state
				state = 0,

				// Default abort message
				strAbort = "canceled",

				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( state === 2 ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},

					// Raw string
					getAllResponseHeaders: function() {
						return state === 2 ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function( name, value ) {
						var lname = name.toLowerCase();
						if ( !state ) {
							name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( !state ) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( state < 2 ) {
								for ( code in map ) {

									// Lazy-add the new callback in a way that preserves old ones
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							} else {

								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							}
						}
						return this;
					},

					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};

			// Attach deferreds
			deferred.promise( jqXHR ).complete = completeDeferred.add;
			jqXHR.success = jqXHR.done;
			jqXHR.error = jqXHR.fail;

			// Remove hash character (#7531: and string promotion)
			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || location.href ) + "" ).replace( rhash, "" )
				.replace( rprotocol, location.protocol + "//" );

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

			// A cross-domain request is in order when the origin doesn't match the current origin.
			if ( s.crossDomain == null ) {
				urlAnchor = document.createElement( "a" );

				// Support: IE8-11+
				// IE throws exception if url is malformed, e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;

					// Support: IE8-11+
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
						urlAnchor.protocol + "//" + urlAnchor.host;
				} catch ( e ) {

					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}

			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}

			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

			// If request was aborted inside a prefilter, stop there
			if ( state === 2 ) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			cacheURL = s.url;

			// More options handling for requests with no content
			if ( !s.hasContent ) {

				// If data is available, append data to url
				if ( s.data ) {
					cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );

					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add anti-cache in url if needed
				if ( s.cache === false ) {
					s.url = rts.test( cacheURL ) ?

						// If there is already a '_' parameter, set its value
						cacheURL.replace( rts, "$1_=" + nonce++ ) :

						// Otherwise add one to the end
						cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
				}
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}

			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);

			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}

			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {

				// Abort if not done already and return
				return jqXHR.abort();
			}

			// Aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			for ( i in { success: 1, error: 1, complete: 1 } ) {
				jqXHR[ i ]( s[ i ] );
			}

			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}

				// If request was aborted inside ajaxSend, stop there
				if ( state === 2 ) {
					return jqXHR;
				}

				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}

				try {
					state = 1;
					transport.send( requestHeaders, done );
				} catch ( e ) {

					// Propagate exception as error if not done
					if ( state < 2 ) {
						done( -1, e );

					// Simply rethrow otherwise
					} else {
						throw e;
					}
				}
			}

			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;

				// Called once
				if ( state === 2 ) {
					return;
				}

				// State is "done" now
				state = 2;

				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );

				// If successful, handle type chaining
				if ( isSuccess ) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}

					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";

					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";

					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {

					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";

				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}

				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;

				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}

				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}

			return jqXHR;
		},

		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},

		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );

	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {

			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );


	jQuery._evalUrl = function( url ) {
		return jQuery.ajax( {
			url: url,

			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			async: false,
			global: false,
			"throws": true
		} );
	};


	jQuery.fn.extend( {
		wrapAll: function( html ) {
			var wrap;

			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapAll( html.call( this, i ) );
				} );
			}

			if ( this[ 0 ] ) {

				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}

				wrap.map( function() {
					var elem = this;

					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}

					return elem;
				} ).append( this );
			}

			return this;
		},

		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}

			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();

				if ( contents.length ) {
					contents.wrapAll( html );

				} else {
					self.append( html );
				}
			} );
		},

		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );

			return this.each( function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
			} );
		},

		unwrap: function() {
			return this.parent().each( function() {
				if ( !jQuery.nodeName( this, "body" ) ) {
					jQuery( this ).replaceWith( this.childNodes );
				}
			} ).end();
		}
	} );


	jQuery.expr.filters.hidden = function( elem ) {
		return !jQuery.expr.filters.visible( elem );
	};
	jQuery.expr.filters.visible = function( elem ) {

		// Support: Opera <= 12.12
		// Opera reports offsetWidths and offsetHeights less than zero on some elements
		// Use OR instead of AND as the element is not visible if either is true
		// See tickets #10406 and #13132
		return elem.offsetWidth > 0 || elem.offsetHeight > 0 || elem.getClientRects().length > 0;
	};




	var r20 = /%20/g,
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams( prefix, obj, traditional, add ) {
		var name;

		if ( jQuery.isArray( obj ) ) {

			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {

					// Treat each array item as a scalar.
					add( prefix, v );

				} else {

					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );

		} else if ( !traditional && jQuery.type( obj ) === "object" ) {

			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}

		} else {

			// Serialize scalar item.
			add( prefix, obj );
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, value ) {

				// If value is a function, invoke it and return its value
				value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
				s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
			};

		// Set traditional to true for jQuery <= 1.3.2 behavior.
		if ( traditional === undefined ) {
			traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
		}

		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );

		} else {

			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		// Return the resulting serialization
		return s.join( "&" ).replace( r20, "+" );
	};

	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {

				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;

				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();

				return val == null ?
					null :
					jQuery.isArray( val ) ?
						jQuery.map( val, function( val ) {
							return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
						} ) :
						{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );


	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	};

	var xhrSuccessStatus = {

			// File protocol always yields status code 0, assume 200
			0: 200,

			// Support: IE9
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();

	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;

	jQuery.ajaxTransport( function( options ) {
		var callback, errorCallback;

		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr();

					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}

					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = errorCallback = xhr.onload =
									xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {

									// Support: IE9
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if ( typeof xhr.status !== "number" ) {
										complete( 0, "error" );
									} else {
										complete(

											// File: protocol always yields status 0; see #8605, #14207
											xhr.status,
											xhr.statusText
										);
									}
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,

										// Support: IE9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										( xhr.responseType || "text" ) !== "text"  ||
										typeof xhr.responseText !== "string" ?
											{ binary: xhr.response } :
											{ text: xhr.responseText },
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};

					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = callback( "error" );

					// Support: IE9
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if ( xhr.onabort !== undefined ) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function() {

							// Check readyState before timeout as it changes
							if ( xhr.readyState === 4 ) {

								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout( function() {
									if ( callback ) {
										errorCallback();
									}
								} );
							}
						};
					}

					// Create the abort callback
					callback = callback( "abort" );

					try {

						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {

						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},

				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );

	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	} );

	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {

		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery( "<script>" ).prop( {
						charset: s.scriptCharset,
						src: s.url
					} ).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);

					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;

			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};

			// Force json dataType
			s.dataTypes[ 0 ] = "json";

			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always( function() {

				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );

				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}

				// Save back as free
				if ( s[ callbackName ] ) {

					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// Save the callback name for future use
					oldCallbacks.push( callbackName );
				}

				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}

				responseContainer = overwritten = undefined;
			} );

			// Delegate to script
			return "script";
		}
	} );




	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}
		context = context || document;

		var parsed = rsingleTag.exec( data ),
			scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}

		parsed = buildFragment( [ data ], context, scripts );

		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}

		return jQuery.merge( [], parsed.childNodes );
	};


	// Keep a copy of the old load method
	var _load = jQuery.fn.load;

	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		if ( typeof url !== "string" && _load ) {
			return _load.apply( this, arguments );
		}

		var selector, type, response,
			self = this,
			off = url.indexOf( " " );

		if ( off > -1 ) {
			selector = jQuery.trim( url.slice( off ) );
			url = url.slice( 0, off );
		}

		// If it's a function
		if ( jQuery.isFunction( params ) ) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,

				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {

				// Save response for use in complete callback
				response = arguments;

				self.html( selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

					// Otherwise use the full result
					responseText );

			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}

		return this;
	};




	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );




	jQuery.expr.filters.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};




	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
	}

	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};

			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;

			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}

			if ( jQuery.isFunction( options ) ) {

				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}

			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}

			if ( "using" in options ) {
				options.using.call( elem, props );

			} else {
				curElem.css( props );
			}
		}
	};

	jQuery.fn.extend( {
		offset: function( options ) {
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}

			var docElem, win,
				elem = this[ 0 ],
				box = { top: 0, left: 0 },
				doc = elem && elem.ownerDocument;

			if ( !doc ) {
				return;
			}

			docElem = doc.documentElement;

			// Make sure it's not a disconnected DOM node
			if ( !jQuery.contains( docElem, elem ) ) {
				return box;
			}

			box = elem.getBoundingClientRect();
			win = getWindow( doc );
			return {
				top: box.top + win.pageYOffset - docElem.clientTop,
				left: box.left + win.pageXOffset - docElem.clientLeft
			};
		},

		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}

			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };

			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {

				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();

			} else {

				// Get *real* offsetParent
				offsetParent = this.offsetParent();

				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}

				// Add offsetParent borders
				parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
			}

			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},

		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;

				while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || documentElement;
			} );
		}
	} );

	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;

		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );

				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}

				if ( win ) {
					win.scrollTo(
						!top ? val : win.pageXOffset,
						top ? val : win.pageYOffset
					);

				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length );
		};
	} );

	// Support: Safari<7-8+, Chrome<37-44+
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );

					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );


	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
			function( defaultExtra, funcName ) {

			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

				return access( this, function( elem, type, value ) {
					var doc;

					if ( jQuery.isWindow( elem ) ) {

						// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
						// isn't a whole lot we can do. See pull request at this URL for discussion:
						// https://github.com/jquery/jquery/pull/764
						return elem.document.documentElement[ "client" + name ];
					}

					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}

					return value === undefined ?

						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :

						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable, null );
			};
		} );
	} );


	jQuery.fn.extend( {

		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},

		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {

			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		},
		size: function() {
			return this.length;
		}
	} );

	jQuery.fn.andSelf = jQuery.fn.addBack;




	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.

	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}



	var

		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,

		// Map over the $ in case of overwrite
		_$ = window.$;

	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}

	return jQuery;
	}));


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//     Underscore.js 1.8.3
	//     http://underscorejs.org
	//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	//     Underscore may be freely distributed under the MIT license.

	(function() {

	  // Baseline setup
	  // --------------

	  // Establish the root object, `window` in the browser, or `exports` on the server.
	  var root = this;

	  // Save the previous value of the `_` variable.
	  var previousUnderscore = root._;

	  // Save bytes in the minified (but not gzipped) version:
	  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

	  // Create quick reference variables for speed access to core prototypes.
	  var
	    push             = ArrayProto.push,
	    slice            = ArrayProto.slice,
	    toString         = ObjProto.toString,
	    hasOwnProperty   = ObjProto.hasOwnProperty;

	  // All **ECMAScript 5** native function implementations that we hope to use
	  // are declared here.
	  var
	    nativeIsArray      = Array.isArray,
	    nativeKeys         = Object.keys,
	    nativeBind         = FuncProto.bind,
	    nativeCreate       = Object.create;

	  // Naked function reference for surrogate-prototype-swapping.
	  var Ctor = function(){};

	  // Create a safe reference to the Underscore object for use below.
	  var _ = function(obj) {
	    if (obj instanceof _) return obj;
	    if (!(this instanceof _)) return new _(obj);
	    this._wrapped = obj;
	  };

	  // Export the Underscore object for **Node.js**, with
	  // backwards-compatibility for the old `require()` API. If we're in
	  // the browser, add `_` as a global object.
	  if (true) {
	    if (typeof module !== 'undefined' && module.exports) {
	      exports = module.exports = _;
	    }
	    exports._ = _;
	  } else {
	    root._ = _;
	  }

	  // Current version.
	  _.VERSION = '1.8.3';

	  // Internal function that returns an efficient (for current engines) version
	  // of the passed-in callback, to be repeatedly applied in other Underscore
	  // functions.
	  var optimizeCb = function(func, context, argCount) {
	    if (context === void 0) return func;
	    switch (argCount == null ? 3 : argCount) {
	      case 1: return function(value) {
	        return func.call(context, value);
	      };
	      case 2: return function(value, other) {
	        return func.call(context, value, other);
	      };
	      case 3: return function(value, index, collection) {
	        return func.call(context, value, index, collection);
	      };
	      case 4: return function(accumulator, value, index, collection) {
	        return func.call(context, accumulator, value, index, collection);
	      };
	    }
	    return function() {
	      return func.apply(context, arguments);
	    };
	  };

	  // A mostly-internal function to generate callbacks that can be applied
	  // to each element in a collection, returning the desired result — either
	  // identity, an arbitrary callback, a property matcher, or a property accessor.
	  var cb = function(value, context, argCount) {
	    if (value == null) return _.identity;
	    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
	    if (_.isObject(value)) return _.matcher(value);
	    return _.property(value);
	  };
	  _.iteratee = function(value, context) {
	    return cb(value, context, Infinity);
	  };

	  // An internal function for creating assigner functions.
	  var createAssigner = function(keysFunc, undefinedOnly) {
	    return function(obj) {
	      var length = arguments.length;
	      if (length < 2 || obj == null) return obj;
	      for (var index = 1; index < length; index++) {
	        var source = arguments[index],
	            keys = keysFunc(source),
	            l = keys.length;
	        for (var i = 0; i < l; i++) {
	          var key = keys[i];
	          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
	        }
	      }
	      return obj;
	    };
	  };

	  // An internal function for creating a new object that inherits from another.
	  var baseCreate = function(prototype) {
	    if (!_.isObject(prototype)) return {};
	    if (nativeCreate) return nativeCreate(prototype);
	    Ctor.prototype = prototype;
	    var result = new Ctor;
	    Ctor.prototype = null;
	    return result;
	  };

	  var property = function(key) {
	    return function(obj) {
	      return obj == null ? void 0 : obj[key];
	    };
	  };

	  // Helper for collection methods to determine whether a collection
	  // should be iterated as an array or as an object
	  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
	  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
	  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
	  var getLength = property('length');
	  var isArrayLike = function(collection) {
	    var length = getLength(collection);
	    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
	  };

	  // Collection Functions
	  // --------------------

	  // The cornerstone, an `each` implementation, aka `forEach`.
	  // Handles raw objects in addition to array-likes. Treats all
	  // sparse array-likes as if they were dense.
	  _.each = _.forEach = function(obj, iteratee, context) {
	    iteratee = optimizeCb(iteratee, context);
	    var i, length;
	    if (isArrayLike(obj)) {
	      for (i = 0, length = obj.length; i < length; i++) {
	        iteratee(obj[i], i, obj);
	      }
	    } else {
	      var keys = _.keys(obj);
	      for (i = 0, length = keys.length; i < length; i++) {
	        iteratee(obj[keys[i]], keys[i], obj);
	      }
	    }
	    return obj;
	  };

	  // Return the results of applying the iteratee to each element.
	  _.map = _.collect = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length,
	        results = Array(length);
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      results[index] = iteratee(obj[currentKey], currentKey, obj);
	    }
	    return results;
	  };

	  // Create a reducing function iterating left or right.
	  function createReduce(dir) {
	    // Optimized iterator function as using arguments.length
	    // in the main function will deoptimize the, see #1991.
	    function iterator(obj, iteratee, memo, keys, index, length) {
	      for (; index >= 0 && index < length; index += dir) {
	        var currentKey = keys ? keys[index] : index;
	        memo = iteratee(memo, obj[currentKey], currentKey, obj);
	      }
	      return memo;
	    }

	    return function(obj, iteratee, memo, context) {
	      iteratee = optimizeCb(iteratee, context, 4);
	      var keys = !isArrayLike(obj) && _.keys(obj),
	          length = (keys || obj).length,
	          index = dir > 0 ? 0 : length - 1;
	      // Determine the initial value if none is provided.
	      if (arguments.length < 3) {
	        memo = obj[keys ? keys[index] : index];
	        index += dir;
	      }
	      return iterator(obj, iteratee, memo, keys, index, length);
	    };
	  }

	  // **Reduce** builds up a single result from a list of values, aka `inject`,
	  // or `foldl`.
	  _.reduce = _.foldl = _.inject = createReduce(1);

	  // The right-associative version of reduce, also known as `foldr`.
	  _.reduceRight = _.foldr = createReduce(-1);

	  // Return the first value which passes a truth test. Aliased as `detect`.
	  _.find = _.detect = function(obj, predicate, context) {
	    var key;
	    if (isArrayLike(obj)) {
	      key = _.findIndex(obj, predicate, context);
	    } else {
	      key = _.findKey(obj, predicate, context);
	    }
	    if (key !== void 0 && key !== -1) return obj[key];
	  };

	  // Return all the elements that pass a truth test.
	  // Aliased as `select`.
	  _.filter = _.select = function(obj, predicate, context) {
	    var results = [];
	    predicate = cb(predicate, context);
	    _.each(obj, function(value, index, list) {
	      if (predicate(value, index, list)) results.push(value);
	    });
	    return results;
	  };

	  // Return all the elements for which a truth test fails.
	  _.reject = function(obj, predicate, context) {
	    return _.filter(obj, _.negate(cb(predicate)), context);
	  };

	  // Determine whether all of the elements match a truth test.
	  // Aliased as `all`.
	  _.every = _.all = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length;
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      if (!predicate(obj[currentKey], currentKey, obj)) return false;
	    }
	    return true;
	  };

	  // Determine if at least one element in the object matches a truth test.
	  // Aliased as `any`.
	  _.some = _.any = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length;
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      if (predicate(obj[currentKey], currentKey, obj)) return true;
	    }
	    return false;
	  };

	  // Determine if the array or object contains a given item (using `===`).
	  // Aliased as `includes` and `include`.
	  _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
	    if (!isArrayLike(obj)) obj = _.values(obj);
	    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
	    return _.indexOf(obj, item, fromIndex) >= 0;
	  };

	  // Invoke a method (with arguments) on every item in a collection.
	  _.invoke = function(obj, method) {
	    var args = slice.call(arguments, 2);
	    var isFunc = _.isFunction(method);
	    return _.map(obj, function(value) {
	      var func = isFunc ? method : value[method];
	      return func == null ? func : func.apply(value, args);
	    });
	  };

	  // Convenience version of a common use case of `map`: fetching a property.
	  _.pluck = function(obj, key) {
	    return _.map(obj, _.property(key));
	  };

	  // Convenience version of a common use case of `filter`: selecting only objects
	  // containing specific `key:value` pairs.
	  _.where = function(obj, attrs) {
	    return _.filter(obj, _.matcher(attrs));
	  };

	  // Convenience version of a common use case of `find`: getting the first object
	  // containing specific `key:value` pairs.
	  _.findWhere = function(obj, attrs) {
	    return _.find(obj, _.matcher(attrs));
	  };

	  // Return the maximum element (or element-based computation).
	  _.max = function(obj, iteratee, context) {
	    var result = -Infinity, lastComputed = -Infinity,
	        value, computed;
	    if (iteratee == null && obj != null) {
	      obj = isArrayLike(obj) ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value > result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
	          result = value;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };

	  // Return the minimum element (or element-based computation).
	  _.min = function(obj, iteratee, context) {
	    var result = Infinity, lastComputed = Infinity,
	        value, computed;
	    if (iteratee == null && obj != null) {
	      obj = isArrayLike(obj) ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value < result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed < lastComputed || computed === Infinity && result === Infinity) {
	          result = value;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };

	  // Shuffle a collection, using the modern version of the
	  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
	  _.shuffle = function(obj) {
	    var set = isArrayLike(obj) ? obj : _.values(obj);
	    var length = set.length;
	    var shuffled = Array(length);
	    for (var index = 0, rand; index < length; index++) {
	      rand = _.random(0, index);
	      if (rand !== index) shuffled[index] = shuffled[rand];
	      shuffled[rand] = set[index];
	    }
	    return shuffled;
	  };

	  // Sample **n** random values from a collection.
	  // If **n** is not specified, returns a single random element.
	  // The internal `guard` argument allows it to work with `map`.
	  _.sample = function(obj, n, guard) {
	    if (n == null || guard) {
	      if (!isArrayLike(obj)) obj = _.values(obj);
	      return obj[_.random(obj.length - 1)];
	    }
	    return _.shuffle(obj).slice(0, Math.max(0, n));
	  };

	  // Sort the object's values by a criterion produced by an iteratee.
	  _.sortBy = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    return _.pluck(_.map(obj, function(value, index, list) {
	      return {
	        value: value,
	        index: index,
	        criteria: iteratee(value, index, list)
	      };
	    }).sort(function(left, right) {
	      var a = left.criteria;
	      var b = right.criteria;
	      if (a !== b) {
	        if (a > b || a === void 0) return 1;
	        if (a < b || b === void 0) return -1;
	      }
	      return left.index - right.index;
	    }), 'value');
	  };

	  // An internal function used for aggregate "group by" operations.
	  var group = function(behavior) {
	    return function(obj, iteratee, context) {
	      var result = {};
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index) {
	        var key = iteratee(value, index, obj);
	        behavior(result, value, key);
	      });
	      return result;
	    };
	  };

	  // Groups the object's values by a criterion. Pass either a string attribute
	  // to group by, or a function that returns the criterion.
	  _.groupBy = group(function(result, value, key) {
	    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
	  });

	  // Indexes the object's values by a criterion, similar to `groupBy`, but for
	  // when you know that your index values will be unique.
	  _.indexBy = group(function(result, value, key) {
	    result[key] = value;
	  });

	  // Counts instances of an object that group by a certain criterion. Pass
	  // either a string attribute to count by, or a function that returns the
	  // criterion.
	  _.countBy = group(function(result, value, key) {
	    if (_.has(result, key)) result[key]++; else result[key] = 1;
	  });

	  // Safely create a real, live array from anything iterable.
	  _.toArray = function(obj) {
	    if (!obj) return [];
	    if (_.isArray(obj)) return slice.call(obj);
	    if (isArrayLike(obj)) return _.map(obj, _.identity);
	    return _.values(obj);
	  };

	  // Return the number of elements in an object.
	  _.size = function(obj) {
	    if (obj == null) return 0;
	    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
	  };

	  // Split a collection into two arrays: one whose elements all satisfy the given
	  // predicate, and one whose elements all do not satisfy the predicate.
	  _.partition = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var pass = [], fail = [];
	    _.each(obj, function(value, key, obj) {
	      (predicate(value, key, obj) ? pass : fail).push(value);
	    });
	    return [pass, fail];
	  };

	  // Array Functions
	  // ---------------

	  // Get the first element of an array. Passing **n** will return the first N
	  // values in the array. Aliased as `head` and `take`. The **guard** check
	  // allows it to work with `_.map`.
	  _.first = _.head = _.take = function(array, n, guard) {
	    if (array == null) return void 0;
	    if (n == null || guard) return array[0];
	    return _.initial(array, array.length - n);
	  };

	  // Returns everything but the last entry of the array. Especially useful on
	  // the arguments object. Passing **n** will return all the values in
	  // the array, excluding the last N.
	  _.initial = function(array, n, guard) {
	    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
	  };

	  // Get the last element of an array. Passing **n** will return the last N
	  // values in the array.
	  _.last = function(array, n, guard) {
	    if (array == null) return void 0;
	    if (n == null || guard) return array[array.length - 1];
	    return _.rest(array, Math.max(0, array.length - n));
	  };

	  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
	  // Especially useful on the arguments object. Passing an **n** will return
	  // the rest N values in the array.
	  _.rest = _.tail = _.drop = function(array, n, guard) {
	    return slice.call(array, n == null || guard ? 1 : n);
	  };

	  // Trim out all falsy values from an array.
	  _.compact = function(array) {
	    return _.filter(array, _.identity);
	  };

	  // Internal implementation of a recursive `flatten` function.
	  var flatten = function(input, shallow, strict, startIndex) {
	    var output = [], idx = 0;
	    for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
	      var value = input[i];
	      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
	        //flatten current level of array or arguments object
	        if (!shallow) value = flatten(value, shallow, strict);
	        var j = 0, len = value.length;
	        output.length += len;
	        while (j < len) {
	          output[idx++] = value[j++];
	        }
	      } else if (!strict) {
	        output[idx++] = value;
	      }
	    }
	    return output;
	  };

	  // Flatten out an array, either recursively (by default), or just one level.
	  _.flatten = function(array, shallow) {
	    return flatten(array, shallow, false);
	  };

	  // Return a version of the array that does not contain the specified value(s).
	  _.without = function(array) {
	    return _.difference(array, slice.call(arguments, 1));
	  };

	  // Produce a duplicate-free version of the array. If the array has already
	  // been sorted, you have the option of using a faster algorithm.
	  // Aliased as `unique`.
	  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
	    if (!_.isBoolean(isSorted)) {
	      context = iteratee;
	      iteratee = isSorted;
	      isSorted = false;
	    }
	    if (iteratee != null) iteratee = cb(iteratee, context);
	    var result = [];
	    var seen = [];
	    for (var i = 0, length = getLength(array); i < length; i++) {
	      var value = array[i],
	          computed = iteratee ? iteratee(value, i, array) : value;
	      if (isSorted) {
	        if (!i || seen !== computed) result.push(value);
	        seen = computed;
	      } else if (iteratee) {
	        if (!_.contains(seen, computed)) {
	          seen.push(computed);
	          result.push(value);
	        }
	      } else if (!_.contains(result, value)) {
	        result.push(value);
	      }
	    }
	    return result;
	  };

	  // Produce an array that contains the union: each distinct element from all of
	  // the passed-in arrays.
	  _.union = function() {
	    return _.uniq(flatten(arguments, true, true));
	  };

	  // Produce an array that contains every item shared between all the
	  // passed-in arrays.
	  _.intersection = function(array) {
	    var result = [];
	    var argsLength = arguments.length;
	    for (var i = 0, length = getLength(array); i < length; i++) {
	      var item = array[i];
	      if (_.contains(result, item)) continue;
	      for (var j = 1; j < argsLength; j++) {
	        if (!_.contains(arguments[j], item)) break;
	      }
	      if (j === argsLength) result.push(item);
	    }
	    return result;
	  };

	  // Take the difference between one array and a number of other arrays.
	  // Only the elements present in just the first array will remain.
	  _.difference = function(array) {
	    var rest = flatten(arguments, true, true, 1);
	    return _.filter(array, function(value){
	      return !_.contains(rest, value);
	    });
	  };

	  // Zip together multiple lists into a single array -- elements that share
	  // an index go together.
	  _.zip = function() {
	    return _.unzip(arguments);
	  };

	  // Complement of _.zip. Unzip accepts an array of arrays and groups
	  // each array's elements on shared indices
	  _.unzip = function(array) {
	    var length = array && _.max(array, getLength).length || 0;
	    var result = Array(length);

	    for (var index = 0; index < length; index++) {
	      result[index] = _.pluck(array, index);
	    }
	    return result;
	  };

	  // Converts lists into objects. Pass either a single array of `[key, value]`
	  // pairs, or two parallel arrays of the same length -- one of keys, and one of
	  // the corresponding values.
	  _.object = function(list, values) {
	    var result = {};
	    for (var i = 0, length = getLength(list); i < length; i++) {
	      if (values) {
	        result[list[i]] = values[i];
	      } else {
	        result[list[i][0]] = list[i][1];
	      }
	    }
	    return result;
	  };

	  // Generator function to create the findIndex and findLastIndex functions
	  function createPredicateIndexFinder(dir) {
	    return function(array, predicate, context) {
	      predicate = cb(predicate, context);
	      var length = getLength(array);
	      var index = dir > 0 ? 0 : length - 1;
	      for (; index >= 0 && index < length; index += dir) {
	        if (predicate(array[index], index, array)) return index;
	      }
	      return -1;
	    };
	  }

	  // Returns the first index on an array-like that passes a predicate test
	  _.findIndex = createPredicateIndexFinder(1);
	  _.findLastIndex = createPredicateIndexFinder(-1);

	  // Use a comparator function to figure out the smallest index at which
	  // an object should be inserted so as to maintain order. Uses binary search.
	  _.sortedIndex = function(array, obj, iteratee, context) {
	    iteratee = cb(iteratee, context, 1);
	    var value = iteratee(obj);
	    var low = 0, high = getLength(array);
	    while (low < high) {
	      var mid = Math.floor((low + high) / 2);
	      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
	    }
	    return low;
	  };

	  // Generator function to create the indexOf and lastIndexOf functions
	  function createIndexFinder(dir, predicateFind, sortedIndex) {
	    return function(array, item, idx) {
	      var i = 0, length = getLength(array);
	      if (typeof idx == 'number') {
	        if (dir > 0) {
	            i = idx >= 0 ? idx : Math.max(idx + length, i);
	        } else {
	            length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
	        }
	      } else if (sortedIndex && idx && length) {
	        idx = sortedIndex(array, item);
	        return array[idx] === item ? idx : -1;
	      }
	      if (item !== item) {
	        idx = predicateFind(slice.call(array, i, length), _.isNaN);
	        return idx >= 0 ? idx + i : -1;
	      }
	      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
	        if (array[idx] === item) return idx;
	      }
	      return -1;
	    };
	  }

	  // Return the position of the first occurrence of an item in an array,
	  // or -1 if the item is not included in the array.
	  // If the array is large and already in sort order, pass `true`
	  // for **isSorted** to use binary search.
	  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
	  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);

	  // Generate an integer Array containing an arithmetic progression. A port of
	  // the native Python `range()` function. See
	  // [the Python documentation](http://docs.python.org/library/functions.html#range).
	  _.range = function(start, stop, step) {
	    if (stop == null) {
	      stop = start || 0;
	      start = 0;
	    }
	    step = step || 1;

	    var length = Math.max(Math.ceil((stop - start) / step), 0);
	    var range = Array(length);

	    for (var idx = 0; idx < length; idx++, start += step) {
	      range[idx] = start;
	    }

	    return range;
	  };

	  // Function (ahem) Functions
	  // ------------------

	  // Determines whether to execute a function as a constructor
	  // or a normal function with the provided arguments
	  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
	    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
	    var self = baseCreate(sourceFunc.prototype);
	    var result = sourceFunc.apply(self, args);
	    if (_.isObject(result)) return result;
	    return self;
	  };

	  // Create a function bound to a given object (assigning `this`, and arguments,
	  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
	  // available.
	  _.bind = function(func, context) {
	    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
	    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
	    var args = slice.call(arguments, 2);
	    var bound = function() {
	      return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
	    };
	    return bound;
	  };

	  // Partially apply a function by creating a version that has had some of its
	  // arguments pre-filled, without changing its dynamic `this` context. _ acts
	  // as a placeholder, allowing any combination of arguments to be pre-filled.
	  _.partial = function(func) {
	    var boundArgs = slice.call(arguments, 1);
	    var bound = function() {
	      var position = 0, length = boundArgs.length;
	      var args = Array(length);
	      for (var i = 0; i < length; i++) {
	        args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
	      }
	      while (position < arguments.length) args.push(arguments[position++]);
	      return executeBound(func, bound, this, this, args);
	    };
	    return bound;
	  };

	  // Bind a number of an object's methods to that object. Remaining arguments
	  // are the method names to be bound. Useful for ensuring that all callbacks
	  // defined on an object belong to it.
	  _.bindAll = function(obj) {
	    var i, length = arguments.length, key;
	    if (length <= 1) throw new Error('bindAll must be passed function names');
	    for (i = 1; i < length; i++) {
	      key = arguments[i];
	      obj[key] = _.bind(obj[key], obj);
	    }
	    return obj;
	  };

	  // Memoize an expensive function by storing its results.
	  _.memoize = function(func, hasher) {
	    var memoize = function(key) {
	      var cache = memoize.cache;
	      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
	      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
	      return cache[address];
	    };
	    memoize.cache = {};
	    return memoize;
	  };

	  // Delays a function for the given number of milliseconds, and then calls
	  // it with the arguments supplied.
	  _.delay = function(func, wait) {
	    var args = slice.call(arguments, 2);
	    return setTimeout(function(){
	      return func.apply(null, args);
	    }, wait);
	  };

	  // Defers a function, scheduling it to run after the current call stack has
	  // cleared.
	  _.defer = _.partial(_.delay, _, 1);

	  // Returns a function, that, when invoked, will only be triggered at most once
	  // during a given window of time. Normally, the throttled function will run
	  // as much as it can, without ever going more than once per `wait` duration;
	  // but if you'd like to disable the execution on the leading edge, pass
	  // `{leading: false}`. To disable execution on the trailing edge, ditto.
	  _.throttle = function(func, wait, options) {
	    var context, args, result;
	    var timeout = null;
	    var previous = 0;
	    if (!options) options = {};
	    var later = function() {
	      previous = options.leading === false ? 0 : _.now();
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    };
	    return function() {
	      var now = _.now();
	      if (!previous && options.leading === false) previous = now;
	      var remaining = wait - (now - previous);
	      context = this;
	      args = arguments;
	      if (remaining <= 0 || remaining > wait) {
	        if (timeout) {
	          clearTimeout(timeout);
	          timeout = null;
	        }
	        previous = now;
	        result = func.apply(context, args);
	        if (!timeout) context = args = null;
	      } else if (!timeout && options.trailing !== false) {
	        timeout = setTimeout(later, remaining);
	      }
	      return result;
	    };
	  };

	  // Returns a function, that, as long as it continues to be invoked, will not
	  // be triggered. The function will be called after it stops being called for
	  // N milliseconds. If `immediate` is passed, trigger the function on the
	  // leading edge, instead of the trailing.
	  _.debounce = function(func, wait, immediate) {
	    var timeout, args, context, timestamp, result;

	    var later = function() {
	      var last = _.now() - timestamp;

	      if (last < wait && last >= 0) {
	        timeout = setTimeout(later, wait - last);
	      } else {
	        timeout = null;
	        if (!immediate) {
	          result = func.apply(context, args);
	          if (!timeout) context = args = null;
	        }
	      }
	    };

	    return function() {
	      context = this;
	      args = arguments;
	      timestamp = _.now();
	      var callNow = immediate && !timeout;
	      if (!timeout) timeout = setTimeout(later, wait);
	      if (callNow) {
	        result = func.apply(context, args);
	        context = args = null;
	      }

	      return result;
	    };
	  };

	  // Returns the first function passed as an argument to the second,
	  // allowing you to adjust arguments, run code before and after, and
	  // conditionally execute the original function.
	  _.wrap = function(func, wrapper) {
	    return _.partial(wrapper, func);
	  };

	  // Returns a negated version of the passed-in predicate.
	  _.negate = function(predicate) {
	    return function() {
	      return !predicate.apply(this, arguments);
	    };
	  };

	  // Returns a function that is the composition of a list of functions, each
	  // consuming the return value of the function that follows.
	  _.compose = function() {
	    var args = arguments;
	    var start = args.length - 1;
	    return function() {
	      var i = start;
	      var result = args[start].apply(this, arguments);
	      while (i--) result = args[i].call(this, result);
	      return result;
	    };
	  };

	  // Returns a function that will only be executed on and after the Nth call.
	  _.after = function(times, func) {
	    return function() {
	      if (--times < 1) {
	        return func.apply(this, arguments);
	      }
	    };
	  };

	  // Returns a function that will only be executed up to (but not including) the Nth call.
	  _.before = function(times, func) {
	    var memo;
	    return function() {
	      if (--times > 0) {
	        memo = func.apply(this, arguments);
	      }
	      if (times <= 1) func = null;
	      return memo;
	    };
	  };

	  // Returns a function that will be executed at most one time, no matter how
	  // often you call it. Useful for lazy initialization.
	  _.once = _.partial(_.before, 2);

	  // Object Functions
	  // ----------------

	  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
	  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
	  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
	                      'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

	  function collectNonEnumProps(obj, keys) {
	    var nonEnumIdx = nonEnumerableProps.length;
	    var constructor = obj.constructor;
	    var proto = (_.isFunction(constructor) && constructor.prototype) || ObjProto;

	    // Constructor is a special case.
	    var prop = 'constructor';
	    if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

	    while (nonEnumIdx--) {
	      prop = nonEnumerableProps[nonEnumIdx];
	      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
	        keys.push(prop);
	      }
	    }
	  }

	  // Retrieve the names of an object's own properties.
	  // Delegates to **ECMAScript 5**'s native `Object.keys`
	  _.keys = function(obj) {
	    if (!_.isObject(obj)) return [];
	    if (nativeKeys) return nativeKeys(obj);
	    var keys = [];
	    for (var key in obj) if (_.has(obj, key)) keys.push(key);
	    // Ahem, IE < 9.
	    if (hasEnumBug) collectNonEnumProps(obj, keys);
	    return keys;
	  };

	  // Retrieve all the property names of an object.
	  _.allKeys = function(obj) {
	    if (!_.isObject(obj)) return [];
	    var keys = [];
	    for (var key in obj) keys.push(key);
	    // Ahem, IE < 9.
	    if (hasEnumBug) collectNonEnumProps(obj, keys);
	    return keys;
	  };

	  // Retrieve the values of an object's properties.
	  _.values = function(obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var values = Array(length);
	    for (var i = 0; i < length; i++) {
	      values[i] = obj[keys[i]];
	    }
	    return values;
	  };

	  // Returns the results of applying the iteratee to each element of the object
	  // In contrast to _.map it returns an object
	  _.mapObject = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    var keys =  _.keys(obj),
	          length = keys.length,
	          results = {},
	          currentKey;
	      for (var index = 0; index < length; index++) {
	        currentKey = keys[index];
	        results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
	      }
	      return results;
	  };

	  // Convert an object into a list of `[key, value]` pairs.
	  _.pairs = function(obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var pairs = Array(length);
	    for (var i = 0; i < length; i++) {
	      pairs[i] = [keys[i], obj[keys[i]]];
	    }
	    return pairs;
	  };

	  // Invert the keys and values of an object. The values must be serializable.
	  _.invert = function(obj) {
	    var result = {};
	    var keys = _.keys(obj);
	    for (var i = 0, length = keys.length; i < length; i++) {
	      result[obj[keys[i]]] = keys[i];
	    }
	    return result;
	  };

	  // Return a sorted list of the function names available on the object.
	  // Aliased as `methods`
	  _.functions = _.methods = function(obj) {
	    var names = [];
	    for (var key in obj) {
	      if (_.isFunction(obj[key])) names.push(key);
	    }
	    return names.sort();
	  };

	  // Extend a given object with all the properties in passed-in object(s).
	  _.extend = createAssigner(_.allKeys);

	  // Assigns a given object with all the own properties in the passed-in object(s)
	  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
	  _.extendOwn = _.assign = createAssigner(_.keys);

	  // Returns the first key on an object that passes a predicate test
	  _.findKey = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = _.keys(obj), key;
	    for (var i = 0, length = keys.length; i < length; i++) {
	      key = keys[i];
	      if (predicate(obj[key], key, obj)) return key;
	    }
	  };

	  // Return a copy of the object only containing the whitelisted properties.
	  _.pick = function(object, oiteratee, context) {
	    var result = {}, obj = object, iteratee, keys;
	    if (obj == null) return result;
	    if (_.isFunction(oiteratee)) {
	      keys = _.allKeys(obj);
	      iteratee = optimizeCb(oiteratee, context);
	    } else {
	      keys = flatten(arguments, false, false, 1);
	      iteratee = function(value, key, obj) { return key in obj; };
	      obj = Object(obj);
	    }
	    for (var i = 0, length = keys.length; i < length; i++) {
	      var key = keys[i];
	      var value = obj[key];
	      if (iteratee(value, key, obj)) result[key] = value;
	    }
	    return result;
	  };

	   // Return a copy of the object without the blacklisted properties.
	  _.omit = function(obj, iteratee, context) {
	    if (_.isFunction(iteratee)) {
	      iteratee = _.negate(iteratee);
	    } else {
	      var keys = _.map(flatten(arguments, false, false, 1), String);
	      iteratee = function(value, key) {
	        return !_.contains(keys, key);
	      };
	    }
	    return _.pick(obj, iteratee, context);
	  };

	  // Fill in a given object with default properties.
	  _.defaults = createAssigner(_.allKeys, true);

	  // Creates an object that inherits from the given prototype object.
	  // If additional properties are provided then they will be added to the
	  // created object.
	  _.create = function(prototype, props) {
	    var result = baseCreate(prototype);
	    if (props) _.extendOwn(result, props);
	    return result;
	  };

	  // Create a (shallow-cloned) duplicate of an object.
	  _.clone = function(obj) {
	    if (!_.isObject(obj)) return obj;
	    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
	  };

	  // Invokes interceptor with the obj, and then returns obj.
	  // The primary purpose of this method is to "tap into" a method chain, in
	  // order to perform operations on intermediate results within the chain.
	  _.tap = function(obj, interceptor) {
	    interceptor(obj);
	    return obj;
	  };

	  // Returns whether an object has a given set of `key:value` pairs.
	  _.isMatch = function(object, attrs) {
	    var keys = _.keys(attrs), length = keys.length;
	    if (object == null) return !length;
	    var obj = Object(object);
	    for (var i = 0; i < length; i++) {
	      var key = keys[i];
	      if (attrs[key] !== obj[key] || !(key in obj)) return false;
	    }
	    return true;
	  };


	  // Internal recursive comparison function for `isEqual`.
	  var eq = function(a, b, aStack, bStack) {
	    // Identical objects are equal. `0 === -0`, but they aren't identical.
	    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
	    if (a === b) return a !== 0 || 1 / a === 1 / b;
	    // A strict comparison is necessary because `null == undefined`.
	    if (a == null || b == null) return a === b;
	    // Unwrap any wrapped objects.
	    if (a instanceof _) a = a._wrapped;
	    if (b instanceof _) b = b._wrapped;
	    // Compare `[[Class]]` names.
	    var className = toString.call(a);
	    if (className !== toString.call(b)) return false;
	    switch (className) {
	      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
	      case '[object RegExp]':
	      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
	      case '[object String]':
	        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
	        // equivalent to `new String("5")`.
	        return '' + a === '' + b;
	      case '[object Number]':
	        // `NaN`s are equivalent, but non-reflexive.
	        // Object(NaN) is equivalent to NaN
	        if (+a !== +a) return +b !== +b;
	        // An `egal` comparison is performed for other numeric values.
	        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
	      case '[object Date]':
	      case '[object Boolean]':
	        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
	        // millisecond representations. Note that invalid dates with millisecond representations
	        // of `NaN` are not equivalent.
	        return +a === +b;
	    }

	    var areArrays = className === '[object Array]';
	    if (!areArrays) {
	      if (typeof a != 'object' || typeof b != 'object') return false;

	      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
	      // from different frames are.
	      var aCtor = a.constructor, bCtor = b.constructor;
	      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
	                               _.isFunction(bCtor) && bCtor instanceof bCtor)
	                          && ('constructor' in a && 'constructor' in b)) {
	        return false;
	      }
	    }
	    // Assume equality for cyclic structures. The algorithm for detecting cyclic
	    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

	    // Initializing stack of traversed objects.
	    // It's done here since we only need them for objects and arrays comparison.
	    aStack = aStack || [];
	    bStack = bStack || [];
	    var length = aStack.length;
	    while (length--) {
	      // Linear search. Performance is inversely proportional to the number of
	      // unique nested structures.
	      if (aStack[length] === a) return bStack[length] === b;
	    }

	    // Add the first object to the stack of traversed objects.
	    aStack.push(a);
	    bStack.push(b);

	    // Recursively compare objects and arrays.
	    if (areArrays) {
	      // Compare array lengths to determine if a deep comparison is necessary.
	      length = a.length;
	      if (length !== b.length) return false;
	      // Deep compare the contents, ignoring non-numeric properties.
	      while (length--) {
	        if (!eq(a[length], b[length], aStack, bStack)) return false;
	      }
	    } else {
	      // Deep compare objects.
	      var keys = _.keys(a), key;
	      length = keys.length;
	      // Ensure that both objects contain the same number of properties before comparing deep equality.
	      if (_.keys(b).length !== length) return false;
	      while (length--) {
	        // Deep compare each member
	        key = keys[length];
	        if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
	      }
	    }
	    // Remove the first object from the stack of traversed objects.
	    aStack.pop();
	    bStack.pop();
	    return true;
	  };

	  // Perform a deep comparison to check if two objects are equal.
	  _.isEqual = function(a, b) {
	    return eq(a, b);
	  };

	  // Is a given array, string, or object empty?
	  // An "empty" object has no enumerable own-properties.
	  _.isEmpty = function(obj) {
	    if (obj == null) return true;
	    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
	    return _.keys(obj).length === 0;
	  };

	  // Is a given value a DOM element?
	  _.isElement = function(obj) {
	    return !!(obj && obj.nodeType === 1);
	  };

	  // Is a given value an array?
	  // Delegates to ECMA5's native Array.isArray
	  _.isArray = nativeIsArray || function(obj) {
	    return toString.call(obj) === '[object Array]';
	  };

	  // Is a given variable an object?
	  _.isObject = function(obj) {
	    var type = typeof obj;
	    return type === 'function' || type === 'object' && !!obj;
	  };

	  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
	  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
	    _['is' + name] = function(obj) {
	      return toString.call(obj) === '[object ' + name + ']';
	    };
	  });

	  // Define a fallback version of the method in browsers (ahem, IE < 9), where
	  // there isn't any inspectable "Arguments" type.
	  if (!_.isArguments(arguments)) {
	    _.isArguments = function(obj) {
	      return _.has(obj, 'callee');
	    };
	  }

	  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
	  // IE 11 (#1621), and in Safari 8 (#1929).
	  if (typeof /./ != 'function' && typeof Int8Array != 'object') {
	    _.isFunction = function(obj) {
	      return typeof obj == 'function' || false;
	    };
	  }

	  // Is a given object a finite number?
	  _.isFinite = function(obj) {
	    return isFinite(obj) && !isNaN(parseFloat(obj));
	  };

	  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
	  _.isNaN = function(obj) {
	    return _.isNumber(obj) && obj !== +obj;
	  };

	  // Is a given value a boolean?
	  _.isBoolean = function(obj) {
	    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
	  };

	  // Is a given value equal to null?
	  _.isNull = function(obj) {
	    return obj === null;
	  };

	  // Is a given variable undefined?
	  _.isUndefined = function(obj) {
	    return obj === void 0;
	  };

	  // Shortcut function for checking if an object has a given property directly
	  // on itself (in other words, not on a prototype).
	  _.has = function(obj, key) {
	    return obj != null && hasOwnProperty.call(obj, key);
	  };

	  // Utility Functions
	  // -----------------

	  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
	  // previous owner. Returns a reference to the Underscore object.
	  _.noConflict = function() {
	    root._ = previousUnderscore;
	    return this;
	  };

	  // Keep the identity function around for default iteratees.
	  _.identity = function(value) {
	    return value;
	  };

	  // Predicate-generating functions. Often useful outside of Underscore.
	  _.constant = function(value) {
	    return function() {
	      return value;
	    };
	  };

	  _.noop = function(){};

	  _.property = property;

	  // Generates a function for a given object that returns a given property.
	  _.propertyOf = function(obj) {
	    return obj == null ? function(){} : function(key) {
	      return obj[key];
	    };
	  };

	  // Returns a predicate for checking whether an object has a given set of
	  // `key:value` pairs.
	  _.matcher = _.matches = function(attrs) {
	    attrs = _.extendOwn({}, attrs);
	    return function(obj) {
	      return _.isMatch(obj, attrs);
	    };
	  };

	  // Run a function **n** times.
	  _.times = function(n, iteratee, context) {
	    var accum = Array(Math.max(0, n));
	    iteratee = optimizeCb(iteratee, context, 1);
	    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
	    return accum;
	  };

	  // Return a random integer between min and max (inclusive).
	  _.random = function(min, max) {
	    if (max == null) {
	      max = min;
	      min = 0;
	    }
	    return min + Math.floor(Math.random() * (max - min + 1));
	  };

	  // A (possibly faster) way to get the current timestamp as an integer.
	  _.now = Date.now || function() {
	    return new Date().getTime();
	  };

	   // List of HTML entities for escaping.
	  var escapeMap = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    "'": '&#x27;',
	    '`': '&#x60;'
	  };
	  var unescapeMap = _.invert(escapeMap);

	  // Functions for escaping and unescaping strings to/from HTML interpolation.
	  var createEscaper = function(map) {
	    var escaper = function(match) {
	      return map[match];
	    };
	    // Regexes for identifying a key that needs to be escaped
	    var source = '(?:' + _.keys(map).join('|') + ')';
	    var testRegexp = RegExp(source);
	    var replaceRegexp = RegExp(source, 'g');
	    return function(string) {
	      string = string == null ? '' : '' + string;
	      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
	    };
	  };
	  _.escape = createEscaper(escapeMap);
	  _.unescape = createEscaper(unescapeMap);

	  // If the value of the named `property` is a function then invoke it with the
	  // `object` as context; otherwise, return it.
	  _.result = function(object, property, fallback) {
	    var value = object == null ? void 0 : object[property];
	    if (value === void 0) {
	      value = fallback;
	    }
	    return _.isFunction(value) ? value.call(object) : value;
	  };

	  // Generate a unique integer id (unique within the entire client session).
	  // Useful for temporary DOM ids.
	  var idCounter = 0;
	  _.uniqueId = function(prefix) {
	    var id = ++idCounter + '';
	    return prefix ? prefix + id : id;
	  };

	  // By default, Underscore uses ERB-style template delimiters, change the
	  // following template settings to use alternative delimiters.
	  _.templateSettings = {
	    evaluate    : /<%([\s\S]+?)%>/g,
	    interpolate : /<%=([\s\S]+?)%>/g,
	    escape      : /<%-([\s\S]+?)%>/g
	  };

	  // When customizing `templateSettings`, if you don't want to define an
	  // interpolation, evaluation or escaping regex, we need one that is
	  // guaranteed not to match.
	  var noMatch = /(.)^/;

	  // Certain characters need to be escaped so that they can be put into a
	  // string literal.
	  var escapes = {
	    "'":      "'",
	    '\\':     '\\',
	    '\r':     'r',
	    '\n':     'n',
	    '\u2028': 'u2028',
	    '\u2029': 'u2029'
	  };

	  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

	  var escapeChar = function(match) {
	    return '\\' + escapes[match];
	  };

	  // JavaScript micro-templating, similar to John Resig's implementation.
	  // Underscore templating handles arbitrary delimiters, preserves whitespace,
	  // and correctly escapes quotes within interpolated code.
	  // NB: `oldSettings` only exists for backwards compatibility.
	  _.template = function(text, settings, oldSettings) {
	    if (!settings && oldSettings) settings = oldSettings;
	    settings = _.defaults({}, settings, _.templateSettings);

	    // Combine delimiters into one regular expression via alternation.
	    var matcher = RegExp([
	      (settings.escape || noMatch).source,
	      (settings.interpolate || noMatch).source,
	      (settings.evaluate || noMatch).source
	    ].join('|') + '|$', 'g');

	    // Compile the template source, escaping string literals appropriately.
	    var index = 0;
	    var source = "__p+='";
	    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
	      source += text.slice(index, offset).replace(escaper, escapeChar);
	      index = offset + match.length;

	      if (escape) {
	        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
	      } else if (interpolate) {
	        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
	      } else if (evaluate) {
	        source += "';\n" + evaluate + "\n__p+='";
	      }

	      // Adobe VMs need the match returned to produce the correct offest.
	      return match;
	    });
	    source += "';\n";

	    // If a variable is not specified, place data values in local scope.
	    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

	    source = "var __t,__p='',__j=Array.prototype.join," +
	      "print=function(){__p+=__j.call(arguments,'');};\n" +
	      source + 'return __p;\n';

	    try {
	      var render = new Function(settings.variable || 'obj', '_', source);
	    } catch (e) {
	      e.source = source;
	      throw e;
	    }

	    var template = function(data) {
	      return render.call(this, data, _);
	    };

	    // Provide the compiled source as a convenience for precompilation.
	    var argument = settings.variable || 'obj';
	    template.source = 'function(' + argument + '){\n' + source + '}';

	    return template;
	  };

	  // Add a "chain" function. Start chaining a wrapped Underscore object.
	  _.chain = function(obj) {
	    var instance = _(obj);
	    instance._chain = true;
	    return instance;
	  };

	  // OOP
	  // ---------------
	  // If Underscore is called as a function, it returns a wrapped object that
	  // can be used OO-style. This wrapper holds altered versions of all the
	  // underscore functions. Wrapped objects may be chained.

	  // Helper function to continue chaining intermediate results.
	  var result = function(instance, obj) {
	    return instance._chain ? _(obj).chain() : obj;
	  };

	  // Add your own custom functions to the Underscore object.
	  _.mixin = function(obj) {
	    _.each(_.functions(obj), function(name) {
	      var func = _[name] = obj[name];
	      _.prototype[name] = function() {
	        var args = [this._wrapped];
	        push.apply(args, arguments);
	        return result(this, func.apply(_, args));
	      };
	    });
	  };

	  // Add all of the Underscore functions to the wrapper object.
	  _.mixin(_);

	  // Add all mutator Array functions to the wrapper.
	  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function() {
	      var obj = this._wrapped;
	      method.apply(obj, arguments);
	      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
	      return result(this, obj);
	    };
	  });

	  // Add all accessor Array functions to the wrapper.
	  _.each(['concat', 'join', 'slice'], function(name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function() {
	      return result(this, method.apply(this._wrapped, arguments));
	    };
	  });

	  // Extracts the result from a wrapped and chained object.
	  _.prototype.value = function() {
	    return this._wrapped;
	  };

	  // Provide unwrapping proxy for some methods used in engine operations
	  // such as arithmetic and JSON stringification.
	  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

	  _.prototype.toString = function() {
	    return '' + this._wrapped;
	  };

	  // AMD registration happens at the end for compatibility with AMD loaders
	  // that may not enforce next-turn semantics on modules. Even though general
	  // practice for AMD registration is to be anonymous, underscore registers
	  // as a named module because, like jQuery, it is a base library that is
	  // popular enough to be bundled in a third party lib, but not be part of
	  // an AMD load request. Those cases could generate an error when an
	  // anonymous define() is called outside of a loader request.
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return _;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	}.call(this));


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
	 Leaflet 1.0.0-rc.3, a JS library for interactive maps. http://leafletjs.com
	 (c) 2010-2015 Vladimir Agafonkin, (c) 2010-2011 CloudMade
	*/
	(function (window, document, undefined) {
	var L = {
		version: "1.0.0-rc.3"
	};

	function expose() {
		var oldL = window.L;

		L.noConflict = function () {
			window.L = oldL;
			return this;
		};

		window.L = L;
	}

	// define Leaflet for Node module pattern loaders, including Browserify
	if (typeof module === 'object' && typeof module.exports === 'object') {
		module.exports = L;

	// define Leaflet as an AMD module
	} else if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (L), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}

	// define Leaflet as a global L variable, saving the original L to restore later if needed
	if (typeof window !== 'undefined') {
		expose();
	}



	/*
	 * @namespace Util
	 *
	 * Various utility functions, used by Leaflet internally.
	 */

	L.Util = {

		// @function extend(dest: Object, src?: Object): Object
		// Merges the properties of the `src` object (or multiple objects) into `dest` object and returns the latter. Has an `L.extend` shortcut.
		extend: function (dest) {
			var i, j, len, src;

			for (j = 1, len = arguments.length; j < len; j++) {
				src = arguments[j];
				for (i in src) {
					dest[i] = src[i];
				}
			}
			return dest;
		},

		// @function create(proto: Object, properties?: Object): Object
		// Compatibility polyfill for [Object.create](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/create)
		create: Object.create || (function () {
			function F() {}
			return function (proto) {
				F.prototype = proto;
				return new F();
			};
		})(),

		// @function bind(fn: Function, …): Function
		// Returns a new function bound to the arguments passed, like [Function.prototype.bind](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
		// Has a `L.bind()` shortcut.
		bind: function (fn, obj) {
			var slice = Array.prototype.slice;

			if (fn.bind) {
				return fn.bind.apply(fn, slice.call(arguments, 1));
			}

			var args = slice.call(arguments, 2);

			return function () {
				return fn.apply(obj, args.length ? args.concat(slice.call(arguments)) : arguments);
			};
		},

		// @function stamp(obj: Object): Number
		// Returns the unique ID of an object, assiging it one if it doesn't have it.
		stamp: function (obj) {
			/*eslint-disable */
			obj._leaflet_id = obj._leaflet_id || ++L.Util.lastId;
			return obj._leaflet_id;
			/*eslint-enable */
		},

		// @property lastId: Number
		// Last unique ID used by [`stamp()`](#util-stamp)
		lastId: 0,

		// @function throttle(fn: Function, time: Number, context: Object): Function
		// Returns a function which executes function `fn` with the given scope `context`
		// (so that the `this` keyword refers to `context` inside `fn`'s code). The function
		// `fn` will be called no more than one time per given amount of `time`. The arguments
		// received by the bound function will be any arguments passed when binding the
		// function, followed by any arguments passed when invoking the bound function.
		// Has an `L.bind` shortcut.
		throttle: function (fn, time, context) {
			var lock, args, wrapperFn, later;

			later = function () {
				// reset lock and call if queued
				lock = false;
				if (args) {
					wrapperFn.apply(context, args);
					args = false;
				}
			};

			wrapperFn = function () {
				if (lock) {
					// called too soon, queue to call later
					args = arguments;

				} else {
					// call and lock until later
					fn.apply(context, arguments);
					setTimeout(later, time);
					lock = true;
				}
			};

			return wrapperFn;
		},

		// @function wrapNum(num: Number, range: Number[], includeMax?: Boolean): Number
		// Returns the number `num` modulo `range` in such a way so it lies within
		// `range[0]` and `range[1]`. The returned value will be always smaller than
		// `range[1]` unless `includeMax` is set to `true`.
		wrapNum: function (x, range, includeMax) {
			var max = range[1],
			    min = range[0],
			    d = max - min;
			return x === max && includeMax ? x : ((x - min) % d + d) % d + min;
		},

		// @function falseFn(): Function
		// Returns a function which always returns `false`.
		falseFn: function () { return false; },

		// @function formatNum(num: Number, digits?: Number): Number
		// Returns the number `num` rounded to `digits` decimals, or to 5 decimals by default.
		formatNum: function (num, digits) {
			var pow = Math.pow(10, digits || 5);
			return Math.round(num * pow) / pow;
		},

		// @function trim(str: String): String
		// Compatibility polyfill for [String.prototype.trim](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/Trim)
		trim: function (str) {
			return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
		},

		// @function splitWords(str: String): String[]
		// Trims and splits the string on whitespace and returns the array of parts.
		splitWords: function (str) {
			return L.Util.trim(str).split(/\s+/);
		},

		// @function setOptions(obj: Object, options: Object): Object
		// Merges the given properties to the `options` of the `obj` object, returning the resulting options. See `Class options`. Has an `L.setOptions` shortcut.
		setOptions: function (obj, options) {
			if (!obj.hasOwnProperty('options')) {
				obj.options = obj.options ? L.Util.create(obj.options) : {};
			}
			for (var i in options) {
				obj.options[i] = options[i];
			}
			return obj.options;
		},

		// @function getParamString(obj: Object, existingUrl?: String, uppercase?: Boolean): String
		// Converts an object into a parameter URL string, e.g. `{a: "foo", b: "bar"}`
		// translates to `'?a=foo&b=bar'`. If `existingUrl` is set, the parameters will
		// be appended at the end. If `uppercase` is `true`, the parameter names will
		// be uppercased (e.g. `'?A=foo&B=bar'`)
		getParamString: function (obj, existingUrl, uppercase) {
			var params = [];
			for (var i in obj) {
				params.push(encodeURIComponent(uppercase ? i.toUpperCase() : i) + '=' + encodeURIComponent(obj[i]));
			}
			return ((!existingUrl || existingUrl.indexOf('?') === -1) ? '?' : '&') + params.join('&');
		},

		// @function template(str: String, data: Object): String
		// Simple templating facility, accepts a template string of the form `'Hello {a}, {b}'`
		// and a data object like `{a: 'foo', b: 'bar'}`, returns evaluated string
		// `('Hello foo, bar')`. You can also specify functions instead of strings for
		// data values — they will be evaluated passing `data` as an argument.
		template: function (str, data) {
			return str.replace(L.Util.templateRe, function (str, key) {
				var value = data[key];

				if (value === undefined) {
					throw new Error('No value provided for variable ' + str);

				} else if (typeof value === 'function') {
					value = value(data);
				}
				return value;
			});
		},

		templateRe: /\{ *([\w_\-]+) *\}/g,

		// @function isArray(obj): Boolean
		// Compatibility polyfill for [Array.isArray](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)
		isArray: Array.isArray || function (obj) {
			return (Object.prototype.toString.call(obj) === '[object Array]');
		},

		// @function indexOf(array: Array, el: Object): Number
		// Compatibility polyfill for [Array.prototype.indexOf](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
		indexOf: function (array, el) {
			for (var i = 0; i < array.length; i++) {
				if (array[i] === el) { return i; }
			}
			return -1;
		},

		// @property emptyImageUrl: String
		// Data URI string containing a base64-encoded empty GIF image.
		// Used as a hack to free memory from unused images on WebKit-powered
		// mobile devices (by setting image `src` to this string).
		emptyImageUrl: 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='
	};

	(function () {
		// inspired by http://paulirish.com/2011/requestanimationframe-for-smart-animating/

		function getPrefixed(name) {
			return window['webkit' + name] || window['moz' + name] || window['ms' + name];
		}

		var lastTime = 0;

		// fallback for IE 7-8
		function timeoutDefer(fn) {
			var time = +new Date(),
			    timeToCall = Math.max(0, 16 - (time - lastTime));

			lastTime = time + timeToCall;
			return window.setTimeout(fn, timeToCall);
		}

		var requestFn = window.requestAnimationFrame || getPrefixed('RequestAnimationFrame') || timeoutDefer,
		    cancelFn = window.cancelAnimationFrame || getPrefixed('CancelAnimationFrame') ||
		               getPrefixed('CancelRequestAnimationFrame') || function (id) { window.clearTimeout(id); };


		// @function requestAnimFrame(fn: Function, context?: Object, immediate?: Boolean): Number
		// Schedules `fn` to be executed when the browser repaints. `fn` is bound to
		// `context` if given. When `immediate` is set, `fn` is called immediately if
		// the browser doesn't have native support for
		// [`window.requestAnimationFrame`](https://developer.mozilla.org/docs/Web/API/window/requestAnimationFrame),
		// otherwise it's delayed. Returns a request ID that can be used to cancel the request.
		L.Util.requestAnimFrame = function (fn, context, immediate) {
			if (immediate && requestFn === timeoutDefer) {
				fn.call(context);
			} else {
				return requestFn.call(window, L.bind(fn, context));
			}
		};

		// @function cancelAnimFrame(id: Number): undefined
		// Cancels a previous `requestAnimFrame`. See also [window.cancelAnimationFrame](https://developer.mozilla.org/docs/Web/API/window/cancelAnimationFrame).
		L.Util.cancelAnimFrame = function (id) {
			if (id) {
				cancelFn.call(window, id);
			}
		};
	})();

	// shortcuts for most used utility functions
	L.extend = L.Util.extend;
	L.bind = L.Util.bind;
	L.stamp = L.Util.stamp;
	L.setOptions = L.Util.setOptions;




	// @class Class
	// @aka L.Class

	// @section
	// @uninheritable

	// Thanks to John Resig and Dean Edwards for inspiration!

	L.Class = function () {};

	L.Class.extend = function (props) {

		// @function extend(props: Object): Function
		// [Extends the current class](#class-inheritance) given the properties to be included.
		// Returns a Javascript function that is a class constructor (to be called with `new`).
		var NewClass = function () {

			// call the constructor
			if (this.initialize) {
				this.initialize.apply(this, arguments);
			}

			// call all constructor hooks
			this.callInitHooks();
		};

		var parentProto = NewClass.__super__ = this.prototype;

		var proto = L.Util.create(parentProto);
		proto.constructor = NewClass;

		NewClass.prototype = proto;

		// inherit parent's statics
		for (var i in this) {
			if (this.hasOwnProperty(i) && i !== 'prototype') {
				NewClass[i] = this[i];
			}
		}

		// mix static properties into the class
		if (props.statics) {
			L.extend(NewClass, props.statics);
			delete props.statics;
		}

		// mix includes into the prototype
		if (props.includes) {
			L.Util.extend.apply(null, [proto].concat(props.includes));
			delete props.includes;
		}

		// merge options
		if (proto.options) {
			props.options = L.Util.extend(L.Util.create(proto.options), props.options);
		}

		// mix given properties into the prototype
		L.extend(proto, props);

		proto._initHooks = [];

		// add method for calling all hooks
		proto.callInitHooks = function () {

			if (this._initHooksCalled) { return; }

			if (parentProto.callInitHooks) {
				parentProto.callInitHooks.call(this);
			}

			this._initHooksCalled = true;

			for (var i = 0, len = proto._initHooks.length; i < len; i++) {
				proto._initHooks[i].call(this);
			}
		};

		return NewClass;
	};


	// @function include(properties: Object): this
	// [Includes a mixin](#class-includes) into the current class.
	L.Class.include = function (props) {
		L.extend(this.prototype, props);
		return this;
	};

	// @function mergeOptions(options: Object): this
	// [Merges `options`](#class-options) into the defaults of the class.
	L.Class.mergeOptions = function (options) {
		L.extend(this.prototype.options, options);
		return this;
	};

	// @function addInitHook(fn: Function): this
	// Adds a [constructor hook](#class-constructor-hooks) to the class.
	L.Class.addInitHook = function (fn) { // (Function) || (String, args...)
		var args = Array.prototype.slice.call(arguments, 1);

		var init = typeof fn === 'function' ? fn : function () {
			this[fn].apply(this, args);
		};

		this.prototype._initHooks = this.prototype._initHooks || [];
		this.prototype._initHooks.push(init);
		return this;
	};



	/*
	 * @class Evented
	 * @aka L.Evented
	 * @inherits Class
	 *
	 * A set of methods shared between event-powered classes (like `Map` and `Marker`). Generally, events allow you to execute some function when something happens with an object (e.g. the user clicks on the map, causing the map to fire `'click'` event).
	 *
	 * @example
	 *
	 * ```js
	 * map.on('click', function(e) {
	 * 	alert(e.latlng);
	 * } );
	 * ```
	 *
	 * Leaflet deals with event listeners by reference, so if you want to add a listener and then remove it, define it as a function:
	 *
	 * ```js
	 * function onClick(e) { ... }
	 *
	 * map.on('click', onClick);
	 * map.off('click', onClick);
	 * ```
	 */


	L.Evented = L.Class.extend({

		/* @method on(type: String, fn: Function, context?: Object): this
		 * Adds a listener function (`fn`) to a particular event type of the object. You can optionally specify the context of the listener (object the this keyword will point to). You can also pass several space-separated types (e.g. `'click dblclick'`).
		 *
		 * @alternative
		 * @method on(eventMap: Object): this
		 * Adds a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
		 */
		on: function (types, fn, context) {

			// types can be a map of types/handlers
			if (typeof types === 'object') {
				for (var type in types) {
					// we don't process space-separated events here for performance;
					// it's a hot path since Layer uses the on(obj) syntax
					this._on(type, types[type], fn);
				}

			} else {
				// types can be a string of space-separated words
				types = L.Util.splitWords(types);

				for (var i = 0, len = types.length; i < len; i++) {
					this._on(types[i], fn, context);
				}
			}

			return this;
		},

		/* @method off(type: String, fn?: Function, context?: Object): this
		 * Removes a previously added listener function. If no function is specified, it will remove all the listeners of that particular event from the object. Note that if you passed a custom context to `on`, you must pass the same context to `off` in order to remove the listener.
		 *
		 * @alternative
		 * @method off(eventMap: Object): this
		 * Removes a set of type/listener pairs.
		 *
		 * @alternative
		 * @method off: this
		 * Removes all listeners to all events on the object.
		 */
		off: function (types, fn, context) {

			if (!types) {
				// clear all listeners if called without arguments
				delete this._events;

			} else if (typeof types === 'object') {
				for (var type in types) {
					this._off(type, types[type], fn);
				}

			} else {
				types = L.Util.splitWords(types);

				for (var i = 0, len = types.length; i < len; i++) {
					this._off(types[i], fn, context);
				}
			}

			return this;
		},

		// attach listener (without syntactic sugar now)
		_on: function (type, fn, context) {
			this._events = this._events || {};

			/* get/init listeners for type */
			var typeListeners = this._events[type];
			if (!typeListeners) {
				typeListeners = {
					listeners: [],
					count: 0
				};
				this._events[type] = typeListeners;
			}

			if (context === this) {
				// Less memory footprint.
				context = undefined;
			}
			var newListener = {fn: fn, ctx: context},
			    listeners = typeListeners.listeners;

			// check if fn already there
			for (var i = 0, len = listeners.length; i < len; i++) {
				if (listeners[i].fn === fn && listeners[i].ctx === context) {
					return;
				}
			}

			listeners.push(newListener);
			typeListeners.count++;
		},

		_off: function (type, fn, context) {
			var typeListeners,
			    listeners,
			    i,
			    len;

			if (!this._events) { return; }

			typeListeners = this._events[type];

			if (!typeListeners) {
				return;
			}

			listeners = typeListeners.listeners;

			if (!fn) {
				// Set all removed listeners to noop so they are not called if remove happens in fire
				for (i = 0, len = listeners.length; i < len; i++) {
					listeners[i].fn = L.Util.falseFn;
				}
				// clear all listeners for a type if function isn't specified
				delete this._events[type];
				return;
			}


			if (context === this) {
				context = undefined;
			}

			if (listeners) {

				// find fn and remove it
				for (i = 0, len = listeners.length; i < len; i++) {
					var l = listeners[i];
					if (l.ctx !== context) { continue; }
					if (l.fn === fn) {

						// set the removed listener to noop so that's not called if remove happens in fire
						l.fn = L.Util.falseFn;
						typeListeners.count--;

						if (this._isFiring) {
							/* copy array in case events are being fired */
							listeners = listeners.slice();
						}
						listeners.splice(i, 1);

						return;
					}
				}
			}
		},

		// @method fire(type: String, data?: Object, propagate?: Boolean): this
		// Fires an event of the specified type. You can optionally provide an data
		// object — the first argument of the listener function will contain its
		// properties. The event might can optionally be propagated to event parents.
		fire: function (type, data, propagate) {
			if (!this.listens(type, propagate)) { return this; }

			var event = L.Util.extend({}, data, {type: type, target: this});

			if (this._events) {
				var typeListeners = this._events[type];

				if (typeListeners) {
					this._isFiring = true;
					var listeners = typeListeners.listeners;
					for (var i = 0, len = listeners.length; i < len; i++) {
						var l = listeners[i];
						l.fn.call(l.ctx || this, event);
					}

					this._isFiring = false;
				}
			}

			if (propagate) {
				// propagate the event to parents (set with addEventParent)
				this._propagateEvent(event);
			}

			return this;
		},

		// @method listens(type: String): Boolean
		// Returns `true` if a particular event type has any listeners attached to it.
		listens: function (type, propagate) {
			var typeListeners = this._events && this._events[type];
			if (typeListeners && typeListeners.count) { return true; }

			if (propagate) {
				// also check parents for listeners if event propagates
				for (var id in this._eventParents) {
					if (this._eventParents[id].listens(type, propagate)) { return true; }
				}
			}
			return false;
		},

		// @method once(…): this
		// Behaves as [`on(…)`](#evented-on), except the listener will only get fired once and then removed.
		once: function (types, fn, context) {

			if (typeof types === 'object') {
				for (var type in types) {
					this.once(type, types[type], fn);
				}
				return this;
			}

			var handler = L.bind(function () {
				this
				    .off(types, fn, context)
				    .off(types, handler, context);
			}, this);

			// add a listener that's executed once and removed after that
			return this
			    .on(types, fn, context)
			    .on(types, handler, context);
		},

		// @method addEventParent(obj: Evented): this
		// Adds an event parent - an `Evented` that will receive propagated events
		addEventParent: function (obj) {
			this._eventParents = this._eventParents || {};
			this._eventParents[L.stamp(obj)] = obj;
			return this;
		},

		// @method removeEventParent(obj: Evented): this
		// Removes an event parent, so it will stop receiving propagated events
		removeEventParent: function (obj) {
			if (this._eventParents) {
				delete this._eventParents[L.stamp(obj)];
			}
			return this;
		},

		_propagateEvent: function (e) {
			for (var id in this._eventParents) {
				this._eventParents[id].fire(e.type, L.extend({layer: e.target}, e), true);
			}
		}
	});

	var proto = L.Evented.prototype;

	// aliases; we should ditch those eventually

	// @method addEventListener(…): this
	// Alias to [`on(…)`](#evented-on)
	proto.addEventListener = proto.on;

	// @method removeEventListener(…): this
	// Alias to [`off(…)`](#evented-off)

	// @method clearAllEventListeners(…): this
	// Alias to [`off()`](#evented-off)
	proto.removeEventListener = proto.clearAllEventListeners = proto.off;

	// @method addOneTimeEventListener(…): this
	// Alias to [`once(…)`](#evented-once)
	proto.addOneTimeEventListener = proto.once;

	// @method fireEvent(…): this
	// Alias to [`fire(…)`](#evented-fire)
	proto.fireEvent = proto.fire;

	// @method hasEventListeners(…): Boolean
	// Alias to [`listens(…)`](#evented-listens)
	proto.hasEventListeners = proto.listens;

	L.Mixin = {Events: proto};



	/*
	 * @namespace Browser
	 * @aka L.Browser
	 *
	 * A namespace with static properties for browser/feature detection used by Leaflet internally.
	 *
	 * @example
	 *
	 * ```js
	 * if (L.Browser.ielt9) {
	 *   alert('Upgrade your browser, dude!');
	 * }
	 * ```
	 */

	(function () {

		var ua = navigator.userAgent.toLowerCase(),
		    doc = document.documentElement,

		    ie = 'ActiveXObject' in window,

		    webkit    = ua.indexOf('webkit') !== -1,
		    phantomjs = ua.indexOf('phantom') !== -1,
		    android23 = ua.search('android [23]') !== -1,
		    chrome    = ua.indexOf('chrome') !== -1,
		    gecko     = ua.indexOf('gecko') !== -1  && !webkit && !window.opera && !ie,

		    win = navigator.platform.indexOf('Win') === 0,

		    mobile = typeof orientation !== 'undefined' || ua.indexOf('mobile') !== -1,
		    msPointer = !window.PointerEvent && window.MSPointerEvent,
		    pointer = window.PointerEvent || msPointer,

		    ie3d = ie && ('transition' in doc.style),
		    webkit3d = ('WebKitCSSMatrix' in window) && ('m11' in new window.WebKitCSSMatrix()) && !android23,
		    gecko3d = 'MozPerspective' in doc.style,
		    opera12 = 'OTransition' in doc.style;


		var touch = !window.L_NO_TOUCH && (pointer || 'ontouchstart' in window ||
				(window.DocumentTouch && document instanceof window.DocumentTouch));

		L.Browser = {

			// @property ie: Boolean
			// `true` for all Internet Explorer versions (not Edge).
			ie: ie,

			// @property ielt9: Boolean
			// `true` for Internet Explorer versions less than 9.
			ielt9: ie && !document.addEventListener,

			// @property edge: Boolean
			// `true` for the Edge web browser.
			edge: 'msLaunchUri' in navigator && !('documentMode' in document),

			// @property webkit: Boolean
			// `true` for webkit-based browsers like Chrome and Safari (including mobile versions).
			webkit: webkit,

			// @property gecko: Boolean
			// `true` for gecko-based browsers like Firefox.
			gecko: gecko,

			// @property android: Boolean
			// `true` for any browser running on an Android platform.
			android: ua.indexOf('android') !== -1,

			// @property android23: Boolean
			// `true` for browsers running on Android 2 or Android 3.
			android23: android23,

			// @property chrome: Boolean
			// `true` for the Chrome browser.
			chrome: chrome,

			// @property safari: Boolean
			// `true` for the Safari browser.
			safari: !chrome && ua.indexOf('safari') !== -1,


			// @property win: Boolean
			// `true` when the browser is running in a Windows platform
			win: win,


			// @property ie3d: Boolean
			// `true` for all Internet Explorer versions supporting CSS transforms.
			ie3d: ie3d,

			// @property webkit3d: Boolean
			// `true` for webkit-based browsers supporting CSS transforms.
			webkit3d: webkit3d,

			// @property gecko3d: Boolean
			// `true` for gecko-based browsers supporting CSS transforms.
			gecko3d: gecko3d,

			// @property opera12: Boolean
			// `true` for the Opera browser supporting CSS transforms (version 12 or later).
			opera12: opera12,

			// @property any3d: Boolean
			// `true` for all browsers supporting CSS transforms.
			any3d: !window.L_DISABLE_3D && (ie3d || webkit3d || gecko3d) && !opera12 && !phantomjs,


			// @property mobile: Boolean
			// `true` for all browsers running in a mobile device.
			mobile: mobile,

			// @property mobileWebkit: Boolean
			// `true` for all webkit-based browsers in a mobile device.
			mobileWebkit: mobile && webkit,

			// @property mobileWebkit3d: Boolean
			// `true` for all webkit-based browsers in a mobile device supporting CSS transforms.
			mobileWebkit3d: mobile && webkit3d,

			// @property mobileOpera: Boolean
			// `true` for the Opera browser in a mobile device.
			mobileOpera: mobile && window.opera,

			// @property mobileGecko: Boolean
			// `true` for gecko-based browsers running in a mobile device.
			mobileGecko: mobile && gecko,


			// @property touch: Boolean
			// `true` for all browsers supporting [touch events](https://developer.mozilla.org/docs/Web/API/Touch_events).
			touch: !!touch,

			// @property msPointer: Boolean
			// `true` for browsers implementing the Microsoft touch events model (notably IE10).
			msPointer: !!msPointer,

			// @property pointer: Boolean
			// `true` for all browsers supporting [pointer events](https://msdn.microsoft.com/en-us/library/dn433244%28v=vs.85%29.aspx).
			pointer: !!pointer,


			// @property retina: Boolean
			// `true` for browsers on a high-resolution "retina" screen.
			retina: (window.devicePixelRatio || (window.screen.deviceXDPI / window.screen.logicalXDPI)) > 1
		};

	}());



	/*
	 * @class Point
	 * @aka L.Point
	 *
	 * Represents a point with `x` and `y` coordinates in pixels.
	 *
	 * @example
	 *
	 * ```js
	 * var point = L.point(200, 300);
	 * ```
	 *
	 * All Leaflet methods and options that accept `Point` objects also accept them in a simple Array form (unless noted otherwise), so these lines are equivalent:
	 *
	 * ```js
	 * map.panBy([200, 300]);
	 * map.panBy(L.point(200, 300));
	 * ```
	 */

	L.Point = function (x, y, round) {
		this.x = (round ? Math.round(x) : x);
		this.y = (round ? Math.round(y) : y);
	};

	L.Point.prototype = {

		// @method clone(): Point
		// Returns a copy of the current point.
		clone: function () {
			return new L.Point(this.x, this.y);
		},

		// @method add(otherPoint: Point): Point
		// Returns the result of addition of the current and the given points.
		add: function (point) {
			// non-destructive, returns a new point
			return this.clone()._add(L.point(point));
		},

		_add: function (point) {
			// destructive, used directly for performance in situations where it's safe to modify existing point
			this.x += point.x;
			this.y += point.y;
			return this;
		},

		// @method subtract(otherPoint: Point): Point
		// Returns the result of subtraction of the given point from the current.
		subtract: function (point) {
			return this.clone()._subtract(L.point(point));
		},

		_subtract: function (point) {
			this.x -= point.x;
			this.y -= point.y;
			return this;
		},

		// @method divideBy(num: Number): Point
		// Returns the result of division of the current point by the given number.
		divideBy: function (num) {
			return this.clone()._divideBy(num);
		},

		_divideBy: function (num) {
			this.x /= num;
			this.y /= num;
			return this;
		},

		// @method multiplyBy(num: Number): Point
		// Returns the result of multiplication of the current point by the given number.
		multiplyBy: function (num) {
			return this.clone()._multiplyBy(num);
		},

		_multiplyBy: function (num) {
			this.x *= num;
			this.y *= num;
			return this;
		},

		// @method scaleBy(scale: Point): Point
		// Multiply each coordinate of the current point by each coordinate of
		// `scale`. In linear algebra terms, multiply the point by the
		// [scaling matrix](https://en.wikipedia.org/wiki/Scaling_%28geometry%29#Matrix_representation)
		// defined by `scale`.
		scaleBy: function (point) {
			return new L.Point(this.x * point.x, this.y * point.y);
		},

		// @method unscaleBy(scale: Point): Point
		// Inverse of `scaleBy`. Divide each coordinate of the current point by
		// each coordinate of `scale`.
		unscaleBy: function (point) {
			return new L.Point(this.x / point.x, this.y / point.y);
		},

		// @method round(): Point
		// Returns a copy of the current point with rounded coordinates.
		round: function () {
			return this.clone()._round();
		},

		_round: function () {
			this.x = Math.round(this.x);
			this.y = Math.round(this.y);
			return this;
		},

		// @method floor(): Point
		// Returns a copy of the current point with floored coordinates (rounded down).
		floor: function () {
			return this.clone()._floor();
		},

		_floor: function () {
			this.x = Math.floor(this.x);
			this.y = Math.floor(this.y);
			return this;
		},

		// @method ceil(): Point
		// Returns a copy of the current point with ceiled coordinates (rounded up).
		ceil: function () {
			return this.clone()._ceil();
		},

		_ceil: function () {
			this.x = Math.ceil(this.x);
			this.y = Math.ceil(this.y);
			return this;
		},

		// @method distanceTo(otherPoint: Point): Number
		// Returns the cartesian distance between the current and the given points.
		distanceTo: function (point) {
			point = L.point(point);

			var x = point.x - this.x,
			    y = point.y - this.y;

			return Math.sqrt(x * x + y * y);
		},

		// @method equals(otherPoint: Point): Boolean
		// Returns `true` if the given point has the same coordinates.
		equals: function (point) {
			point = L.point(point);

			return point.x === this.x &&
			       point.y === this.y;
		},

		// @method contains(otherPoint: Point): Boolean
		// Returns `true` if both coordinates of the given point are less than the corresponding current point coordinates (in absolute values).
		contains: function (point) {
			point = L.point(point);

			return Math.abs(point.x) <= Math.abs(this.x) &&
			       Math.abs(point.y) <= Math.abs(this.y);
		},

		// @method toString(): String
		// Returns a string representation of the point for debugging purposes.
		toString: function () {
			return 'Point(' +
			        L.Util.formatNum(this.x) + ', ' +
			        L.Util.formatNum(this.y) + ')';
		}
	};

	// @factory L.point(x: Number, y: Number, round?: Boolean)
	// Creates a Point object with the given `x` and `y` coordinates. If optional `round` is set to true, rounds the `x` and `y` values.

	// @alternative
	// @factory L.point(coords: Number[])
	// Expects an array of the form `[x, y]` instead.

	// @alternative
	// @factory L.point(coords: Object)
	// Expects a plain object of the form `{x: Number, y: Number}` instead.
	L.point = function (x, y, round) {
		if (x instanceof L.Point) {
			return x;
		}
		if (L.Util.isArray(x)) {
			return new L.Point(x[0], x[1]);
		}
		if (x === undefined || x === null) {
			return x;
		}
		if (typeof x === 'object' && 'x' in x && 'y' in x) {
			return new L.Point(x.x, x.y);
		}
		return new L.Point(x, y, round);
	};



	/*
	 * @class Bounds
	 * @aka L.Bounds
	 *
	 * Represents a rectangular area in pixel coordinates.
	 *
	 * @example
	 *
	 * ```js
	 * var p1 = L.point(10, 10),
	 * p2 = L.point(40, 60),
	 * bounds = L.bounds(p1, p2);
	 * ```
	 *
	 * All Leaflet methods that accept `Bounds` objects also accept them in a simple Array form (unless noted otherwise), so the bounds example above can be passed like this:
	 *
	 * ```js
	 * otherBounds.intersects([[10, 10], [40, 60]]);
	 * ```
	 */

	L.Bounds = function (a, b) {
		if (!a) { return; }

		var points = b ? [a, b] : a;

		for (var i = 0, len = points.length; i < len; i++) {
			this.extend(points[i]);
		}
	};

	L.Bounds.prototype = {
		// @method extend(point: Point): this
		// Extends the bounds to contain the given point.
		extend: function (point) { // (Point)
			point = L.point(point);

			// @property min: Point
			// The top left corner of the rectangle.
			// @property max: Point
			// The bottom right corner of the rectangle.
			if (!this.min && !this.max) {
				this.min = point.clone();
				this.max = point.clone();
			} else {
				this.min.x = Math.min(point.x, this.min.x);
				this.max.x = Math.max(point.x, this.max.x);
				this.min.y = Math.min(point.y, this.min.y);
				this.max.y = Math.max(point.y, this.max.y);
			}
			return this;
		},

		// @method getCenter(round?: Boolean): Point
		// Returns the center point of the bounds.
		getCenter: function (round) {
			return new L.Point(
			        (this.min.x + this.max.x) / 2,
			        (this.min.y + this.max.y) / 2, round);
		},

		// @method getBottomLeft(): Point
		// Returns the bottom-left point of the bounds.
		getBottomLeft: function () {
			return new L.Point(this.min.x, this.max.y);
		},

		// @method getTopRight(): Point
		// Returns the top-right point of the bounds.
		getTopRight: function () { // -> Point
			return new L.Point(this.max.x, this.min.y);
		},

		// @method getSize(): Point
		// Returns the size of the given bounds
		getSize: function () {
			return this.max.subtract(this.min);
		},

		// @method contains(otherBounds: Bounds): Boolean
		// Returns `true` if the rectangle contains the given one.
		// @alternative
		// @method contains(point: Point): Boolean
		// Returns `true` if the rectangle contains the given point.
		contains: function (obj) {
			var min, max;

			if (typeof obj[0] === 'number' || obj instanceof L.Point) {
				obj = L.point(obj);
			} else {
				obj = L.bounds(obj);
			}

			if (obj instanceof L.Bounds) {
				min = obj.min;
				max = obj.max;
			} else {
				min = max = obj;
			}

			return (min.x >= this.min.x) &&
			       (max.x <= this.max.x) &&
			       (min.y >= this.min.y) &&
			       (max.y <= this.max.y);
		},

		// @method intersects(otherBounds: Bounds): Boolean
		// Returns `true` if the rectangle intersects the given bounds. Two bounds
		// intersect if they have at least one point in common.
		intersects: function (bounds) { // (Bounds) -> Boolean
			bounds = L.bounds(bounds);

			var min = this.min,
			    max = this.max,
			    min2 = bounds.min,
			    max2 = bounds.max,
			    xIntersects = (max2.x >= min.x) && (min2.x <= max.x),
			    yIntersects = (max2.y >= min.y) && (min2.y <= max.y);

			return xIntersects && yIntersects;
		},

		// @method overlaps(otherBounds: Bounds): Boolean
		// Returns `true` if the rectangle overlaps the given bounds. Two bounds
		// overlap if their intersection is an area.
		overlaps: function (bounds) { // (Bounds) -> Boolean
			bounds = L.bounds(bounds);

			var min = this.min,
			    max = this.max,
			    min2 = bounds.min,
			    max2 = bounds.max,
			    xOverlaps = (max2.x > min.x) && (min2.x < max.x),
			    yOverlaps = (max2.y > min.y) && (min2.y < max.y);

			return xOverlaps && yOverlaps;
		},

		isValid: function () {
			return !!(this.min && this.max);
		}
	};


	// @factory L.bounds(topLeft: Point, bottomRight: Point)
	// Creates a Bounds object from two coordinates (usually top-left and bottom-right corners).
	// @alternative
	// @factory L.bounds(points: Point[])
	// Creates a Bounds object from the points it contains
	L.bounds = function (a, b) {
		if (!a || a instanceof L.Bounds) {
			return a;
		}
		return new L.Bounds(a, b);
	};



	/*
	 * @class Transformation
	 * @aka L.Transformation
	 *
	 * Represents an affine transformation: a set of coefficients `a`, `b`, `c`, `d`
	 * for transforming a point of a form `(x, y)` into `(a*x + b, c*y + d)` and doing
	 * the reverse. Used by Leaflet in its projections code.
	 *
	 * @example
	 *
	 * ```js
	 * var transformation = new L.Transformation(2, 5, -1, 10),
	 * 	p = L.point(1, 2),
	 * 	p2 = transformation.transform(p), //  L.point(7, 8)
	 * 	p3 = transformation.untransform(p2); //  L.point(1, 2)
	 * ```
	 */


	// factory new L.Transformation(a: Number, b: Number, c: Number, d: Number)
	// Creates a `Transformation` object with the given coefficients.
	L.Transformation = function (a, b, c, d) {
		this._a = a;
		this._b = b;
		this._c = c;
		this._d = d;
	};

	L.Transformation.prototype = {
		// @method transform(point: Point, scale?: Number): Point
		// Returns a transformed point, optionally multiplied by the given scale.
		// Only accepts real `L.Point` instances, not arrays.
		transform: function (point, scale) { // (Point, Number) -> Point
			return this._transform(point.clone(), scale);
		},

		// destructive transform (faster)
		_transform: function (point, scale) {
			scale = scale || 1;
			point.x = scale * (this._a * point.x + this._b);
			point.y = scale * (this._c * point.y + this._d);
			return point;
		},

		// @method untransform(point: Point, scale?: Number): Point
		// Returns the reverse transformation of the given point, optionally divided
		// by the given scale. Only accepts real `L.Point` instances, not arrays.
		untransform: function (point, scale) {
			scale = scale || 1;
			return new L.Point(
			        (point.x / scale - this._b) / this._a,
			        (point.y / scale - this._d) / this._c);
		}
	};



	/*
	 * @namespace DomUtil
	 *
	 * Utility functions to work with the [DOM](https://developer.mozilla.org/docs/Web/API/Document_Object_Model)
	 * tree, used by Leaflet internally.
	 *
	 * Most functions expecting or returning a `HTMLElement` also work for
	 * SVG elements. The only difference is that classes refer to CSS classes
	 * in HTML and SVG classes in SVG.
	 */

	L.DomUtil = {

		// @function get(id: String|HTMLElement): HTMLElement
		// Returns an element given its DOM id, or returns the element itself
		// if it was passed directly.
		get: function (id) {
			return typeof id === 'string' ? document.getElementById(id) : id;
		},

		// @function getStyle(el: HTMLElement, styleAttrib: String): String
		// Returns the value for a certain style attribute on an element,
		// including computed values or values set through CSS.
		getStyle: function (el, style) {

			var value = el.style[style] || (el.currentStyle && el.currentStyle[style]);

			if ((!value || value === 'auto') && document.defaultView) {
				var css = document.defaultView.getComputedStyle(el, null);
				value = css ? css[style] : null;
			}

			return value === 'auto' ? null : value;
		},

		// @function create(tagName: String, className?: String, container?: HTMLElement): HTMLElement
		// Creates an HTML element with `tagName`, sets its class to `className`, and optionally appends it to `container` element.
		create: function (tagName, className, container) {

			var el = document.createElement(tagName);
			el.className = className || '';

			if (container) {
				container.appendChild(el);
			}

			return el;
		},

		// @function remove(el: HTMLElement)
		// Removes `el` from its parent element
		remove: function (el) {
			var parent = el.parentNode;
			if (parent) {
				parent.removeChild(el);
			}
		},

		// @function empty(el: HTMLElement)
		// Removes all of `el`'s children elements from `el`
		empty: function (el) {
			while (el.firstChild) {
				el.removeChild(el.firstChild);
			}
		},

		// @function toFront(el: HTMLElement)
		// Makes `el` the last children of its parent, so it renders in front of the other children.
		toFront: function (el) {
			el.parentNode.appendChild(el);
		},

		// @function toBack(el: HTMLElement)
		// Makes `el` the first children of its parent, so it renders back from the other children.
		toBack: function (el) {
			var parent = el.parentNode;
			parent.insertBefore(el, parent.firstChild);
		},

		// @function hasClass(el: HTMLElement, name: String): Boolean
		// Returns `true` if the element's class attribute contains `name`.
		hasClass: function (el, name) {
			if (el.classList !== undefined) {
				return el.classList.contains(name);
			}
			var className = L.DomUtil.getClass(el);
			return className.length > 0 && new RegExp('(^|\\s)' + name + '(\\s|$)').test(className);
		},

		// @function addClass(el: HTMLElement, name: String)
		// Adds `name` to the element's class attribute.
		addClass: function (el, name) {
			if (el.classList !== undefined) {
				var classes = L.Util.splitWords(name);
				for (var i = 0, len = classes.length; i < len; i++) {
					el.classList.add(classes[i]);
				}
			} else if (!L.DomUtil.hasClass(el, name)) {
				var className = L.DomUtil.getClass(el);
				L.DomUtil.setClass(el, (className ? className + ' ' : '') + name);
			}
		},

		// @function removeClass(el: HTMLElement, name: String)
		// Removes `name` from the element's class attribute.
		removeClass: function (el, name) {
			if (el.classList !== undefined) {
				el.classList.remove(name);
			} else {
				L.DomUtil.setClass(el, L.Util.trim((' ' + L.DomUtil.getClass(el) + ' ').replace(' ' + name + ' ', ' ')));
			}
		},

		// @function setClass(el: HTMLElement, name: String)
		// Sets the element's class.
		setClass: function (el, name) {
			if (el.className.baseVal === undefined) {
				el.className = name;
			} else {
				// in case of SVG element
				el.className.baseVal = name;
			}
		},

		// @function getClass(el: HTMLElement): String
		// Returns the element's class.
		getClass: function (el) {
			return el.className.baseVal === undefined ? el.className : el.className.baseVal;
		},

		// @function setOpacity(el: HTMLElement, opacity: Number)
		// Set the opacity of an element (including old IE support).
		// `opacity` must be a number from `0` to `1`.
		setOpacity: function (el, value) {

			if ('opacity' in el.style) {
				el.style.opacity = value;

			} else if ('filter' in el.style) {
				L.DomUtil._setOpacityIE(el, value);
			}
		},

		_setOpacityIE: function (el, value) {
			var filter = false,
			    filterName = 'DXImageTransform.Microsoft.Alpha';

			// filters collection throws an error if we try to retrieve a filter that doesn't exist
			try {
				filter = el.filters.item(filterName);
			} catch (e) {
				// don't set opacity to 1 if we haven't already set an opacity,
				// it isn't needed and breaks transparent pngs.
				if (value === 1) { return; }
			}

			value = Math.round(value * 100);

			if (filter) {
				filter.Enabled = (value !== 100);
				filter.Opacity = value;
			} else {
				el.style.filter += ' progid:' + filterName + '(opacity=' + value + ')';
			}
		},

		// @function testProp(props: String[]): String|false
		// Goes through the array of style names and returns the first name
		// that is a valid style name for an element. If no such name is found,
		// it returns false. Useful for vendor-prefixed styles like `transform`.
		testProp: function (props) {

			var style = document.documentElement.style;

			for (var i = 0; i < props.length; i++) {
				if (props[i] in style) {
					return props[i];
				}
			}
			return false;
		},

		// @function setTransform(el: HTMLElement, offset: Point, scale?: Number)
		// Resets the 3D CSS transform of `el` so it is translated by `offset` pixels
		// and optionally scaled by `scale`. Does not have an effect if the
		// browser doesn't support 3D CSS transforms.
		setTransform: function (el, offset, scale) {
			var pos = offset || new L.Point(0, 0);

			el.style[L.DomUtil.TRANSFORM] =
				(L.Browser.ie3d ?
					'translate(' + pos.x + 'px,' + pos.y + 'px)' :
					'translate3d(' + pos.x + 'px,' + pos.y + 'px,0)') +
				(scale ? ' scale(' + scale + ')' : '');
		},

		// @function setPosition(el: HTMLElement, position: Point)
		// Sets the position of `el` to coordinates specified by `position`,
		// using CSS translate or top/left positioning depending on the browser
		// (used by Leaflet internally to position its layers).
		setPosition: function (el, point) { // (HTMLElement, Point[, Boolean])

			/*eslint-disable */
			el._leaflet_pos = point;
			/*eslint-enable */

			if (L.Browser.any3d) {
				L.DomUtil.setTransform(el, point);
			} else {
				el.style.left = point.x + 'px';
				el.style.top = point.y + 'px';
			}
		},

		// @function getPosition(el: HTMLElement): Point
		// Returns the coordinates of an element previously positioned with setPosition.
		getPosition: function (el) {
			// this method is only used for elements previously positioned using setPosition,
			// so it's safe to cache the position for performance

			return el._leaflet_pos || new L.Point(0, 0);
		}
	};


	(function () {
		// prefix style property names

		// @property TRANSFORM: String
		// Vendor-prefixed fransform style name (e.g. `'webkitTransform'` for WebKit).
		L.DomUtil.TRANSFORM = L.DomUtil.testProp(
				['transform', 'WebkitTransform', 'OTransform', 'MozTransform', 'msTransform']);


		// webkitTransition comes first because some browser versions that drop vendor prefix don't do
		// the same for the transitionend event, in particular the Android 4.1 stock browser

		// @property TRANSITION: String
		// Vendor-prefixed transform style name.
		var transition = L.DomUtil.TRANSITION = L.DomUtil.testProp(
				['webkitTransition', 'transition', 'OTransition', 'MozTransition', 'msTransition']);

		L.DomUtil.TRANSITION_END =
				transition === 'webkitTransition' || transition === 'OTransition' ? transition + 'End' : 'transitionend';

		// @function disableTextSelection()
		// Prevents the user from generating `selectstart` DOM events, usually generated
		// when the user drags the mouse through a page with text. Used internally
		// by Leaflet to override the behaviour of any click-and-drag interaction on
		// the map. Affects drag interactions on the whole document.

		// @function enableTextSelection()
		// Cancels the effects of a previous [`L.DomUtil.disableTextSelection`](#domutil-disabletextselection).
		if ('onselectstart' in document) {
			L.DomUtil.disableTextSelection = function () {
				L.DomEvent.on(window, 'selectstart', L.DomEvent.preventDefault);
			};
			L.DomUtil.enableTextSelection = function () {
				L.DomEvent.off(window, 'selectstart', L.DomEvent.preventDefault);
			};

		} else {
			var userSelectProperty = L.DomUtil.testProp(
				['userSelect', 'WebkitUserSelect', 'OUserSelect', 'MozUserSelect', 'msUserSelect']);

			L.DomUtil.disableTextSelection = function () {
				if (userSelectProperty) {
					var style = document.documentElement.style;
					this._userSelect = style[userSelectProperty];
					style[userSelectProperty] = 'none';
				}
			};
			L.DomUtil.enableTextSelection = function () {
				if (userSelectProperty) {
					document.documentElement.style[userSelectProperty] = this._userSelect;
					delete this._userSelect;
				}
			};
		}

		// @function disableImageDrag()
		// As [`L.DomUtil.disableTextSelection`](#domutil-disabletextselection), but
		// for `dragstart` DOM events, usually generated when the user drags an image.
		L.DomUtil.disableImageDrag = function () {
			L.DomEvent.on(window, 'dragstart', L.DomEvent.preventDefault);
		};

		// @function enableImageDrag()
		// Cancels the effects of a previous [`L.DomUtil.disableImageDrag`](#domutil-disabletextselection).
		L.DomUtil.enableImageDrag = function () {
			L.DomEvent.off(window, 'dragstart', L.DomEvent.preventDefault);
		};

		// @function preventOutline(el: HTMLElement)
		// Makes the [outline](https://developer.mozilla.org/docs/Web/CSS/outline)
		// of the element `el` invisible. Used internally by Leaflet to prevent
		// focusable elements from displaying an outline when the user performs a
		// drag interaction on them.
		L.DomUtil.preventOutline = function (element) {
			while (element.tabIndex === -1) {
				element = element.parentNode;
			}
			if (!element || !element.style) { return; }
			L.DomUtil.restoreOutline();
			this._outlineElement = element;
			this._outlineStyle = element.style.outline;
			element.style.outline = 'none';
			L.DomEvent.on(window, 'keydown', L.DomUtil.restoreOutline, this);
		};

		// @function restoreOutline()
		// Cancels the effects of a previous [`L.DomUtil.preventOutline`]().
		L.DomUtil.restoreOutline = function () {
			if (!this._outlineElement) { return; }
			this._outlineElement.style.outline = this._outlineStyle;
			delete this._outlineElement;
			delete this._outlineStyle;
			L.DomEvent.off(window, 'keydown', L.DomUtil.restoreOutline, this);
		};
	})();



	/* @class LatLng
	 * @aka L.LatLng
	 *
	 * Represents a geographical point with a certain latitude and longitude.
	 *
	 * @example
	 *
	 * ```
	 * var latlng = L.latLng(50.5, 30.5);
	 * ```
	 *
	 * All Leaflet methods that accept LatLng objects also accept them in a simple Array form and simple object form (unless noted otherwise), so these lines are equivalent:
	 *
	 * ```
	 * map.panTo([50, 30]);
	 * map.panTo({lon: 30, lat: 50});
	 * map.panTo({lat: 50, lng: 30});
	 * map.panTo(L.latLng(50, 30));
	 * ```
	 */

	L.LatLng = function (lat, lng, alt) {
		if (isNaN(lat) || isNaN(lng)) {
			throw new Error('Invalid LatLng object: (' + lat + ', ' + lng + ')');
		}

		// @property lat: Number
		// Latitude in degrees
		this.lat = +lat;

		// @property lng: Number
		// Longitude in degrees
		this.lng = +lng;

		// @property alt: Number
		// Altitude in meters (optional)
		if (alt !== undefined) {
			this.alt = +alt;
		}
	};

	L.LatLng.prototype = {
		// @method equals(otherLatLng: LatLng, maxMargin?: Number): Boolean
		// Returns `true` if the given `LatLng` point is at the same position (within a small margin of error). The margin of error can be overriden by setting `maxMargin` to a small number.
		equals: function (obj, maxMargin) {
			if (!obj) { return false; }

			obj = L.latLng(obj);

			var margin = Math.max(
			        Math.abs(this.lat - obj.lat),
			        Math.abs(this.lng - obj.lng));

			return margin <= (maxMargin === undefined ? 1.0E-9 : maxMargin);
		},

		// @method toString(): String
		// Returns a string representation of the point (for debugging purposes).
		toString: function (precision) {
			return 'LatLng(' +
			        L.Util.formatNum(this.lat, precision) + ', ' +
			        L.Util.formatNum(this.lng, precision) + ')';
		},

		// @method distanceTo(otherLatLng: LatLng): Number
		// Returns the distance (in meters) to the given `LatLng` calculated using the [Haversine formula](http://en.wikipedia.org/wiki/Haversine_formula).
		distanceTo: function (other) {
			return L.CRS.Earth.distance(this, L.latLng(other));
		},

		// @method wrap(): LatLng
		// Returns a new `LatLng` object with the longitude wrapped so it's always between -180 and +180 degrees.
		wrap: function () {
			return L.CRS.Earth.wrapLatLng(this);
		},

		// @method toBounds(sizeInMeters: Number): LatLngBounds
		// Returns a new `LatLngBounds` object in which each boundary is `sizeInMeters` meters apart from the `LatLng`.
		toBounds: function (sizeInMeters) {
			var latAccuracy = 180 * sizeInMeters / 40075017,
			    lngAccuracy = latAccuracy / Math.cos((Math.PI / 180) * this.lat);

			return L.latLngBounds(
			        [this.lat - latAccuracy, this.lng - lngAccuracy],
			        [this.lat + latAccuracy, this.lng + lngAccuracy]);
		},

		clone: function () {
			return new L.LatLng(this.lat, this.lng, this.alt);
		}
	};



	// @factory L.latLng(latitude: Number, longitude: Number, altitude?: Number): LatLng
	// Creates an object representing a geographical point with the given latitude and longitude (and optionally altitude).

	// @alternative
	// @factory L.latLng(coords: Array): LatLng
	// Expects an array of the form `[Number, Number]` or `[Number, Number, Number]` instead.

	// @alternative
	// @factory L.latLng(coords: Object): LatLng
	// Expects an plain object of the form `{lat: Number, lng: Number}` or `{lat: Number, lng: Number, alt: Number}` instead.

	L.latLng = function (a, b, c) {
		if (a instanceof L.LatLng) {
			return a;
		}
		if (L.Util.isArray(a) && typeof a[0] !== 'object') {
			if (a.length === 3) {
				return new L.LatLng(a[0], a[1], a[2]);
			}
			if (a.length === 2) {
				return new L.LatLng(a[0], a[1]);
			}
			return null;
		}
		if (a === undefined || a === null) {
			return a;
		}
		if (typeof a === 'object' && 'lat' in a) {
			return new L.LatLng(a.lat, 'lng' in a ? a.lng : a.lon, a.alt);
		}
		if (b === undefined) {
			return null;
		}
		return new L.LatLng(a, b, c);
	};



	/*
	 * @class LatLngBounds
	 * @aka L.LatLngBounds
	 *
	 * Represents a rectangular geographical area on a map.
	 *
	 * @example
	 *
	 * ```js
	 * var southWest = L.latLng(40.712, -74.227),
	 * northEast = L.latLng(40.774, -74.125),
	 * bounds = L.latLngBounds(southWest, northEast);
	 * ```
	 *
	 * All Leaflet methods that accept LatLngBounds objects also accept them in a simple Array form (unless noted otherwise), so the bounds example above can be passed like this:
	 *
	 * ```js
	 * map.fitBounds([
	 * 	[40.712, -74.227],
	 * 	[40.774, -74.125]
	 * ]);
	 * ```
	 */

	L.LatLngBounds = function (southWest, northEast) { // (LatLng, LatLng) or (LatLng[])
		if (!southWest) { return; }

		var latlngs = northEast ? [southWest, northEast] : southWest;

		for (var i = 0, len = latlngs.length; i < len; i++) {
			this.extend(latlngs[i]);
		}
	};

	L.LatLngBounds.prototype = {

		// @method extend(latlng: LatLng): this
		// Extend the bounds to contain the given point

		// @alternative
		// @method extend(otherBounds: LatLngBounds): this
		// Extend the bounds to contain the given bounds
		extend: function (obj) {
			var sw = this._southWest,
			    ne = this._northEast,
			    sw2, ne2;

			if (obj instanceof L.LatLng) {
				sw2 = obj;
				ne2 = obj;

			} else if (obj instanceof L.LatLngBounds) {
				sw2 = obj._southWest;
				ne2 = obj._northEast;

				if (!sw2 || !ne2) { return this; }

			} else {
				return obj ? this.extend(L.latLng(obj) || L.latLngBounds(obj)) : this;
			}

			if (!sw && !ne) {
				this._southWest = new L.LatLng(sw2.lat, sw2.lng);
				this._northEast = new L.LatLng(ne2.lat, ne2.lng);
			} else {
				sw.lat = Math.min(sw2.lat, sw.lat);
				sw.lng = Math.min(sw2.lng, sw.lng);
				ne.lat = Math.max(ne2.lat, ne.lat);
				ne.lng = Math.max(ne2.lng, ne.lng);
			}

			return this;
		},

		// @method pad(bufferRatio: Number): LatLngBounds
		// Returns bigger bounds created by extending the current bounds by a given percentage in each direction.
		pad: function (bufferRatio) {
			var sw = this._southWest,
			    ne = this._northEast,
			    heightBuffer = Math.abs(sw.lat - ne.lat) * bufferRatio,
			    widthBuffer = Math.abs(sw.lng - ne.lng) * bufferRatio;

			return new L.LatLngBounds(
			        new L.LatLng(sw.lat - heightBuffer, sw.lng - widthBuffer),
			        new L.LatLng(ne.lat + heightBuffer, ne.lng + widthBuffer));
		},

		// @method getCenter(): LatLng
		// Returns the center point of the bounds.
		getCenter: function () {
			return new L.LatLng(
			        (this._southWest.lat + this._northEast.lat) / 2,
			        (this._southWest.lng + this._northEast.lng) / 2);
		},

		// @method getSouthWest(): LatLng
		// Returns the south-west point of the bounds.
		getSouthWest: function () {
			return this._southWest;
		},

		// @method getNorthEast(): LatLng
		// Returns the north-east point of the bounds.
		getNorthEast: function () {
			return this._northEast;
		},

		// @method getNorthWest(): LatLng
		// Returns the north-west point of the bounds.
		getNorthWest: function () {
			return new L.LatLng(this.getNorth(), this.getWest());
		},

		// @method getSouthEast(): LatLng
		// Returns the south-east point of the bounds.
		getSouthEast: function () {
			return new L.LatLng(this.getSouth(), this.getEast());
		},

		// @method getWest(): Number
		// Returns the west longitude of the bounds
		getWest: function () {
			return this._southWest.lng;
		},

		// @method getSouth(): Number
		// Returns the south latitude of the bounds
		getSouth: function () {
			return this._southWest.lat;
		},

		// @method getEast(): Number
		// Returns the east longitude of the bounds
		getEast: function () {
			return this._northEast.lng;
		},

		// @method getNorth(): Number
		// Returns the north latitude of the bounds
		getNorth: function () {
			return this._northEast.lat;
		},

		// @method contains(otherBounds: LatLngBounds): Boolean
		// Returns `true` if the rectangle contains the given one.

		// @alternative
		// @method contains (latlng: LatLng): Boolean
		// Returns `true` if the rectangle contains the given point.
		contains: function (obj) { // (LatLngBounds) or (LatLng) -> Boolean
			if (typeof obj[0] === 'number' || obj instanceof L.LatLng) {
				obj = L.latLng(obj);
			} else {
				obj = L.latLngBounds(obj);
			}

			var sw = this._southWest,
			    ne = this._northEast,
			    sw2, ne2;

			if (obj instanceof L.LatLngBounds) {
				sw2 = obj.getSouthWest();
				ne2 = obj.getNorthEast();
			} else {
				sw2 = ne2 = obj;
			}

			return (sw2.lat >= sw.lat) && (ne2.lat <= ne.lat) &&
			       (sw2.lng >= sw.lng) && (ne2.lng <= ne.lng);
		},

		// @method intersects(otherBounds: LatLngBounds): Boolean
		// Returns `true` if the rectangle intersects the given bounds. Two bounds intersect if they have at least one point in common.
		intersects: function (bounds) {
			bounds = L.latLngBounds(bounds);

			var sw = this._southWest,
			    ne = this._northEast,
			    sw2 = bounds.getSouthWest(),
			    ne2 = bounds.getNorthEast(),

			    latIntersects = (ne2.lat >= sw.lat) && (sw2.lat <= ne.lat),
			    lngIntersects = (ne2.lng >= sw.lng) && (sw2.lng <= ne.lng);

			return latIntersects && lngIntersects;
		},

		// @method overlaps(otherBounds: Bounds): Boolean
		// Returns `true` if the rectangle overlaps the given bounds. Two bounds overlap if their intersection is an area.
		overlaps: function (bounds) {
			bounds = L.latLngBounds(bounds);

			var sw = this._southWest,
			    ne = this._northEast,
			    sw2 = bounds.getSouthWest(),
			    ne2 = bounds.getNorthEast(),

			    latOverlaps = (ne2.lat > sw.lat) && (sw2.lat < ne.lat),
			    lngOverlaps = (ne2.lng > sw.lng) && (sw2.lng < ne.lng);

			return latOverlaps && lngOverlaps;
		},

		// @method toBBoxString(): String
		// Returns a string with bounding box coordinates in a 'southwest_lng,southwest_lat,northeast_lng,northeast_lat' format. Useful for sending requests to web services that return geo data.
		toBBoxString: function () {
			return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(',');
		},

		// @method equals(otherBounds: LatLngBounds): Boolean
		// Returns `true` if the rectangle is equivalent (within a small margin of error) to the given bounds.
		equals: function (bounds) {
			if (!bounds) { return false; }

			bounds = L.latLngBounds(bounds);

			return this._southWest.equals(bounds.getSouthWest()) &&
			       this._northEast.equals(bounds.getNorthEast());
		},

		// @method isValid(): Boolean
		// Returns `true` if the bounds are properly initialized.
		isValid: function () {
			return !!(this._southWest && this._northEast);
		}
	};

	// TODO International date line?

	// @factory L.latLngBounds(southWest: LatLng, northEast: LatLng)
	// Creates a `LatLngBounds` object by defining south-west and north-east corners of the rectangle.

	// @alternative
	// @factory L.latLngBounds(latlngs: LatLng[])
	// Creates a `LatLngBounds` object defined by the geographical points it contains. Very useful for zooming the map to fit a particular set of locations with [`fitBounds`](#map-fitbounds).
	L.latLngBounds = function (a, b) {
		if (a instanceof L.LatLngBounds) {
			return a;
		}
		return new L.LatLngBounds(a, b);
	};



	/*
	 * @namespace Projection
	 * @section
	 * Leaflet comes with a set of already defined Projections out of the box:
	 *
	 * @projection L.Projection.LonLat
	 *
	 * Equirectangular, or Plate Carree projection — the most simple projection,
	 * mostly used by GIS enthusiasts. Directly maps `x` as longitude, and `y` as
	 * latitude. Also suitable for flat worlds, e.g. game maps. Used by the
	 * `EPSG:3395` and `Simple` CRS.
	 */

	L.Projection = {};

	L.Projection.LonLat = {
		project: function (latlng) {
			return new L.Point(latlng.lng, latlng.lat);
		},

		unproject: function (point) {
			return new L.LatLng(point.y, point.x);
		},

		bounds: L.bounds([-180, -90], [180, 90])
	};



	/*
	 * @namespace Projection
	 * @projection L.Projection.SphericalMercator
	 *
	 * Spherical Mercator projection — the most common projection for online maps,
	 * used by almost all free and commercial tile providers. Assumes that Earth is
	 * a sphere. Used by the `EPSG:3857` CRS.
	 */

	L.Projection.SphericalMercator = {

		R: 6378137,
		MAX_LATITUDE: 85.0511287798,

		project: function (latlng) {
			var d = Math.PI / 180,
			    max = this.MAX_LATITUDE,
			    lat = Math.max(Math.min(max, latlng.lat), -max),
			    sin = Math.sin(lat * d);

			return new L.Point(
					this.R * latlng.lng * d,
					this.R * Math.log((1 + sin) / (1 - sin)) / 2);
		},

		unproject: function (point) {
			var d = 180 / Math.PI;

			return new L.LatLng(
				(2 * Math.atan(Math.exp(point.y / this.R)) - (Math.PI / 2)) * d,
				point.x * d / this.R);
		},

		bounds: (function () {
			var d = 6378137 * Math.PI;
			return L.bounds([-d, -d], [d, d]);
		})()
	};



	/*
	 * @class CRS
	 * @aka L.CRS
	 * Abstract class that defines coordinate reference systems for projecting
	 * geographical points into pixel (screen) coordinates and back (and to
	 * coordinates in other units for [WMS](https://en.wikipedia.org/wiki/Web_Map_Service) services). See
	 * [spatial reference system](http://en.wikipedia.org/wiki/Coordinate_reference_system).
	 *
	 * Leaflet defines the most usual CRSs by default. If you want to use a
	 * CRS not defined by default, take a look at the
	 * [Proj4Leaflet](https://github.com/kartena/Proj4Leaflet) plugin.
	 */

	L.CRS = {
		// @method latLngToPoint(latlng: LatLng, zoom: Number): Point
		// Projects geographical coordinates into pixel coordinates for a given zoom.
		latLngToPoint: function (latlng, zoom) {
			var projectedPoint = this.projection.project(latlng),
			    scale = this.scale(zoom);

			return this.transformation._transform(projectedPoint, scale);
		},

		// @method pointToLatLng(point: Point, zoom: Number): LatLng
		// The inverse of `latLngToPoint`. Projects pixel coordinates on a given
		// zoom into geographical coordinates.
		pointToLatLng: function (point, zoom) {
			var scale = this.scale(zoom),
			    untransformedPoint = this.transformation.untransform(point, scale);

			return this.projection.unproject(untransformedPoint);
		},

		// @method project(latlng: LatLng): Point
		// Projects geographical coordinates into coordinates in units accepted for
		// this CRS (e.g. meters for EPSG:3857, for passing it to WMS services).
		project: function (latlng) {
			return this.projection.project(latlng);
		},

		// @method unproject(point: Point): LatLng
		// Given a projected coordinate returns the corresponding LatLng.
		// The inverse of `project`.
		unproject: function (point) {
			return this.projection.unproject(point);
		},

		// @method scale(zoom: Number): Number
		// Returns the scale used when transforming projected coordinates into
		// pixel coordinates for a particular zoom. For example, it returns
		// `256 * 2^zoom` for Mercator-based CRS.
		scale: function (zoom) {
			return 256 * Math.pow(2, zoom);
		},

		// @method zoom(scale: Number): Number
		// Inverse of `scale()`, returns the zoom level correspondingto a scale
		// factor of `scale`.
		zoom: function (scale) {
			return Math.log(scale / 256) / Math.LN2;
		},

		// @method getProjectedBounds(zoom): Bounds
		// Returns the projection's bounds scaled and transformed for the provided `zoom`.
		getProjectedBounds: function (zoom) {
			if (this.infinite) { return null; }

			var b = this.projection.bounds,
			    s = this.scale(zoom),
			    min = this.transformation.transform(b.min, s),
			    max = this.transformation.transform(b.max, s);

			return L.bounds(min, max);
		},

		// @method distance(latlng1: LatLng, latlng1: LatLng): Number
		// Returns the distance between two geographical coordinates.

		// @property code: String
		// Standard code name of the CRS passed into WMS services (e.g. `'EPSG:3857'`)
		//
		// @property wrapLng: Number[]
		// An array of two numbers defining whether the longitude (horizontal) coordinate
		// axis wraps around a given range and how. Defaults to `[-180, 180]` in most
		// geographical CRSs. If `undefined`, the longitude axis does not wrap around.
		//
		// @property wrapLat: Number[]
		// Like `wrapLng`, but for the latitude (vertical) axis.

		// wrapLng: [min, max],
		// wrapLat: [min, max],

		// @property infinite: Boolean
		// If true, the coordinate space will be unbounded (infinite in both axes)
		infinite: false,

		// @method wrapLatLng(latlng: LatLng): LatLng
		// Returns a `LatLng` where lat and lng has been wrapped according to the
		// CRS's `wrapLat` and `wrapLng` properties, if they are outside the CRS's bounds.
		wrapLatLng: function (latlng) {
			var lng = this.wrapLng ? L.Util.wrapNum(latlng.lng, this.wrapLng, true) : latlng.lng,
			    lat = this.wrapLat ? L.Util.wrapNum(latlng.lat, this.wrapLat, true) : latlng.lat,
			    alt = latlng.alt;

			return L.latLng(lat, lng, alt);
		}
	};



	/*
	 * @namespace CRS
	 * @crs L.CRS.Simple
	 *
	 * A simple CRS that maps longitude and latitude into `x` and `y` directly.
	 * May be used for maps of flat surfaces (e.g. game maps). Note that the `y`
	 * axis should still be inverted (going from bottom to top). `distance()` returns
	 * simple euclidean distance.
	 */

	L.CRS.Simple = L.extend({}, L.CRS, {
		projection: L.Projection.LonLat,
		transformation: new L.Transformation(1, 0, -1, 0),

		scale: function (zoom) {
			return Math.pow(2, zoom);
		},

		zoom: function (scale) {
			return Math.log(scale) / Math.LN2;
		},

		distance: function (latlng1, latlng2) {
			var dx = latlng2.lng - latlng1.lng,
			    dy = latlng2.lat - latlng1.lat;

			return Math.sqrt(dx * dx + dy * dy);
		},

		infinite: true
	});



	/*
	 * @namespace CRS
	 * @crs L.CRS.Earth
	 *
	 * Serves as the base for CRS that are global such that they cover the earth.
	 * Can only be used as the base for other CRS and cannot be used directly,
	 * since it does not have a `code`, `projection` or `transformation`. `distance()` returns
	 * meters.
	 */

	L.CRS.Earth = L.extend({}, L.CRS, {
		wrapLng: [-180, 180],

		// Mean Earth Radius, as recommended for use by
		// the International Union of Geodesy and Geophysics,
		// see http://rosettacode.org/wiki/Haversine_formula
		R: 6371000,

		// distance between two geographical points using spherical law of cosines approximation
		distance: function (latlng1, latlng2) {
			var rad = Math.PI / 180,
			    lat1 = latlng1.lat * rad,
			    lat2 = latlng2.lat * rad,
			    a = Math.sin(lat1) * Math.sin(lat2) +
			        Math.cos(lat1) * Math.cos(lat2) * Math.cos((latlng2.lng - latlng1.lng) * rad);

			return this.R * Math.acos(Math.min(a, 1));
		}
	});



	/*
	 * @namespace CRS
	 * @crs L.CRS.EPSG3857
	 *
	 * The most common CRS for online maps, used by almost all free and commercial
	 * tile providers. Uses Spherical Mercator projection. Set in by default in
	 * Map's `crs` option.
	 */

	L.CRS.EPSG3857 = L.extend({}, L.CRS.Earth, {
		code: 'EPSG:3857',
		projection: L.Projection.SphericalMercator,

		transformation: (function () {
			var scale = 0.5 / (Math.PI * L.Projection.SphericalMercator.R);
			return new L.Transformation(scale, 0.5, -scale, 0.5);
		}())
	});

	L.CRS.EPSG900913 = L.extend({}, L.CRS.EPSG3857, {
		code: 'EPSG:900913'
	});



	/*
	 * @namespace CRS
	 * @crs L.CRS.EPSG4326
	 *
	 * A common CRS among GIS enthusiasts. Uses simple Equirectangular projection.
	 */

	L.CRS.EPSG4326 = L.extend({}, L.CRS.Earth, {
		code: 'EPSG:4326',
		projection: L.Projection.LonLat,
		transformation: new L.Transformation(1 / 180, 1, -1 / 180, 0.5)
	});



	/*
	 * @class Map
	 * @aka L.Map
	 * @inherits Evented
	 *
	 * The central class of the API — it is used to create a map on a page and manipulate it.
	 *
	 * @example
	 *
	 * ```js
	 * // initialize the map on the "map" div with a given center and zoom
	 * var map = L.map('map', {
	 * 	center: [51.505, -0.09],
	 * 	zoom: 13
	 * });
	 * ```
	 *
	 */

	L.Map = L.Evented.extend({

		options: {
			// @section Map State Options
			// @option crs: CRS = L.CRS.EPSG3857
			// The [Coordinate Reference System](#crs) to use. Don't change this if you're not
			// sure what it means.
			crs: L.CRS.EPSG3857,

			// @option center: LatLng = undefined
			// Initial geographic center of the map
			center: undefined,

			// @option zoom: Number = undefined
			// Initial map zoom level
			zoom: undefined,

			// @option minZoom: Number = undefined
			// Minimum zoom level of the map. Overrides any `minZoom` option set on map layers.
			minZoom: undefined,

			// @option maxZoom: Number = undefined
			// Maximum zoom level of the map. Overrides any `maxZoom` option set on map layers.
			maxZoom: undefined,

			// @option layers: Layer[] = []
			// Array of layers that will be added to the map initially
			layers: [],

			// @option maxBounds: LatLngBounds = null
			// When this option is set, the map restricts the view to the given
			// geographical bounds, bouncing the user back when he tries to pan
			// outside the view. To set the restriction dynamically, use
			// [`setMaxBounds`](#map-setmaxbounds) method.
			maxBounds: undefined,

			// @option renderer: Renderer = *
			// The default method for drawing vector layers on the map. `L.SVG`
			// or `L.Canvas` by default depending on browser support.
			renderer: undefined,


			// @section Animation Options
			// @option fadeAnimation: Boolean = true
			// Whether the tile fade animation is enabled. By default it's enabled
			// in all browsers that support CSS3 Transitions except Android.
			fadeAnimation: true,

			// @option markerZoomAnimation: Boolean = true
			// Whether markers animate their zoom with the zoom animation, if disabled
			// they will disappear for the length of the animation. By default it's
			// enabled in all browsers that support CSS3 Transitions except Android.
			markerZoomAnimation: true,

			// @option transform3DLimit: Number = 2^23
			// Defines the maximum size of a CSS translation transform. The default
			// value should not be changed unless a web browser positions layers in
			// the wrong place after doing a large `panBy`.
			transform3DLimit: 8388608, // Precision limit of a 32-bit float

			// @section Interaction Options
			// @option zoomSnap: Number = 1
			// Forces the map's zoom level to always be a multiple of this, particularly
			// right after a [`fitBounds()`](#map-fitbounds) or a pinch-zoom.
			// By default, the zoom level snaps to the nearest integer; lower values
			// (e.g. `0.5` or `0.1`) allow for greater granularity. A value of `0`
			// means the zoom level will not be snapped after `fitBounds` or a pinch-zoom.
			zoomSnap: 1,

			// @option zoomDelta: Number = 1
			// Controls how much the map's zoom level will change after a
			// [`zoomIn()`](#map-zoomin), [`zoomOut()`](#map-zoomout), pressing `+`
			// or `-` on the keyboard, or using the [zoom controls](#control-zoom).
			// Values smaller than `1` (e.g. `0.5`) allow for greater granularity.
			zoomDelta: 1,

			// @option trackResize: Boolean = true
			// Whether the map automatically handles browser window resize to update itself.
			trackResize: true
		},

		initialize: function (id, options) { // (HTMLElement or String, Object)
			options = L.setOptions(this, options);

			this._initContainer(id);
			this._initLayout();

			// hack for https://github.com/Leaflet/Leaflet/issues/1980
			this._onResize = L.bind(this._onResize, this);

			this._initEvents();

			if (options.maxBounds) {
				this.setMaxBounds(options.maxBounds);
			}

			if (options.zoom !== undefined) {
				this._zoom = this._limitZoom(options.zoom);
			}

			if (options.center && options.zoom !== undefined) {
				this.setView(L.latLng(options.center), options.zoom, {reset: true});
			}

			this._handlers = [];
			this._layers = {};
			this._zoomBoundLayers = {};
			this._sizeChanged = true;

			this.callInitHooks();

			this._addLayers(this.options.layers);
		},


		// @section Methods for modifying map state

		// @method setView(center: LatLng, zoom: Number, options?: Zoom/pan options): this
		// Sets the view of the map (geographical center and zoom) with the given
		// animation options.
		setView: function (center, zoom) {
			// replaced by animation-powered implementation in Map.PanAnimation.js
			zoom = zoom === undefined ? this.getZoom() : zoom;
			this._resetView(L.latLng(center), zoom);
			return this;
		},

		// @method setZoom(zoom: Number, options: Zoom/pan options): this
		// Sets the zoom of the map.
		setZoom: function (zoom, options) {
			if (!this._loaded) {
				this._zoom = zoom;
				return this;
			}
			return this.setView(this.getCenter(), zoom, {zoom: options});
		},

		// @method zoomIn(delta?: Number, options?: Zoom options): this
		// Increases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
		zoomIn: function (delta, options) {
			delta = delta || (L.Browser.any3d ? this.options.zoomDelta : 1);
			return this.setZoom(this._zoom + delta, options);
		},

		// @method zoomOut(delta?: Number, options?: Zoom options): this
		// Decreases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
		zoomOut: function (delta, options) {
			delta = delta || (L.Browser.any3d ? this.options.zoomDelta : 1);
			return this.setZoom(this._zoom - delta, options);
		},

		// @method setZoomAround(latlng: LatLng, zoom: Number, options: Zoom options): this
		// Zooms the map while keeping a specified geographical point on the map
		// stationary (e.g. used internally for scroll zoom and double-click zoom).
		// @alternative
		// @method setZoomAround(offset: Point, zoom: Number, options: Zoom options): this
		// Zooms the map while keeping a specified pixel on the map (relative to the top-left corner) stationary.
		setZoomAround: function (latlng, zoom, options) {
			var scale = this.getZoomScale(zoom),
			    viewHalf = this.getSize().divideBy(2),
			    containerPoint = latlng instanceof L.Point ? latlng : this.latLngToContainerPoint(latlng),

			    centerOffset = containerPoint.subtract(viewHalf).multiplyBy(1 - 1 / scale),
			    newCenter = this.containerPointToLatLng(viewHalf.add(centerOffset));

			return this.setView(newCenter, zoom, {zoom: options});
		},

		_getBoundsCenterZoom: function (bounds, options) {

			options = options || {};
			bounds = bounds.getBounds ? bounds.getBounds() : L.latLngBounds(bounds);

			var paddingTL = L.point(options.paddingTopLeft || options.padding || [0, 0]),
			    paddingBR = L.point(options.paddingBottomRight || options.padding || [0, 0]),

			    zoom = this.getBoundsZoom(bounds, false, paddingTL.add(paddingBR));

			zoom = (typeof options.maxZoom === 'number') ? Math.min(options.maxZoom, zoom) : zoom;

			var paddingOffset = paddingBR.subtract(paddingTL).divideBy(2),

			    swPoint = this.project(bounds.getSouthWest(), zoom),
			    nePoint = this.project(bounds.getNorthEast(), zoom),
			    center = this.unproject(swPoint.add(nePoint).divideBy(2).add(paddingOffset), zoom);

			return {
				center: center,
				zoom: zoom
			};
		},

		// @method fitBounds(bounds: LatLngBounds, options: fitBounds options): this
		// Sets a map view that contains the given geographical bounds with the
		// maximum zoom level possible.
		fitBounds: function (bounds, options) {

			bounds = L.latLngBounds(bounds);

			if (!bounds.isValid()) {
				throw new Error('Bounds are not valid.');
			}

			var target = this._getBoundsCenterZoom(bounds, options);
			return this.setView(target.center, target.zoom, options);
		},

		// @method fitWorld(options?: fitBounds options): this
		// Sets a map view that mostly contains the whole world with the maximum
		// zoom level possible.
		fitWorld: function (options) {
			return this.fitBounds([[-90, -180], [90, 180]], options);
		},

		// @method panTo(latlng: LatLng, options?: Pan options): this
		// Pans the map to a given center.
		panTo: function (center, options) { // (LatLng)
			return this.setView(center, this._zoom, {pan: options});
		},

		// @method panBy(offset: Point): this
		// Pans the map by a given number of pixels (animated).
		panBy: function (offset) { // (Point)
			// replaced with animated panBy in Map.PanAnimation.js
			this.fire('movestart');

			this._rawPanBy(L.point(offset));

			this.fire('move');
			return this.fire('moveend');
		},

		// @method setMaxBounds(bounds: Bounds): this
		// Restricts the map view to the given bounds (see the [maxBounds](#map-maxbounds) option).
		setMaxBounds: function (bounds) {
			bounds = L.latLngBounds(bounds);

			if (!bounds.isValid()) {
				this.options.maxBounds = null;
				return this.off('moveend', this._panInsideMaxBounds);
			} else if (this.options.maxBounds) {
				this.off('moveend', this._panInsideMaxBounds);
			}

			this.options.maxBounds = bounds;

			if (this._loaded) {
				this._panInsideMaxBounds();
			}

			return this.on('moveend', this._panInsideMaxBounds);
		},

		// @method setMinZoom(zoom: Number): this
		// Sets the lower limit for the available zoom levels (see the [minZoom](#map-minzoom) option).
		setMinZoom: function (zoom) {
			this.options.minZoom = zoom;

			if (this._loaded && this.getZoom() < this.options.minZoom) {
				return this.setZoom(zoom);
			}

			return this;
		},

		// @method setMaxZoom(zoom: Number): this
		// Sets the upper limit for the available zoom levels (see the [maxZoom](#map-maxzoom) option).
		setMaxZoom: function (zoom) {
			this.options.maxZoom = zoom;

			if (this._loaded && (this.getZoom() > this.options.maxZoom)) {
				return this.setZoom(zoom);
			}

			return this;
		},

		// @method panInsideBounds(bounds: LatLngBounds, options?: Pan options): this
		// Pans the map to the closest view that would lie inside the given bounds (if it's not already), controlling the animation using the options specific, if any.
		panInsideBounds: function (bounds, options) {
			this._enforcingBounds = true;
			var center = this.getCenter(),
			    newCenter = this._limitCenter(center, this._zoom, L.latLngBounds(bounds));

			if (!center.equals(newCenter)) {
				this.panTo(newCenter, options);
			}

			this._enforcingBounds = false;
			return this;
		},

		// @method invalidateSize(options: Zoom/Pan options): this
		// Checks if the map container size changed and updates the map if so —
		// call it after you've changed the map size dynamically, also animating
		// pan by default. If `options.pan` is `false`, panning will not occur.
		// If `options.debounceMoveend` is `true`, it will delay `moveend` event so
		// that it doesn't happen often even if the method is called many
		// times in a row.

		// @alternative
		// @method invalidateSize(animate: Boolean): this
		// Checks if the map container size changed and updates the map if so —
		// call it after you've changed the map size dynamically, also animating
		// pan by default.
		invalidateSize: function (options) {
			if (!this._loaded) { return this; }

			options = L.extend({
				animate: false,
				pan: true
			}, options === true ? {animate: true} : options);

			var oldSize = this.getSize();
			this._sizeChanged = true;
			this._lastCenter = null;

			var newSize = this.getSize(),
			    oldCenter = oldSize.divideBy(2).round(),
			    newCenter = newSize.divideBy(2).round(),
			    offset = oldCenter.subtract(newCenter);

			if (!offset.x && !offset.y) { return this; }

			if (options.animate && options.pan) {
				this.panBy(offset);

			} else {
				if (options.pan) {
					this._rawPanBy(offset);
				}

				this.fire('move');

				if (options.debounceMoveend) {
					clearTimeout(this._sizeTimer);
					this._sizeTimer = setTimeout(L.bind(this.fire, this, 'moveend'), 200);
				} else {
					this.fire('moveend');
				}
			}

			// @section Map state change events
			// @event resize: ResizeEvent
			// Fired when the map is resized.
			return this.fire('resize', {
				oldSize: oldSize,
				newSize: newSize
			});
		},

		// @section Methods for modifying map state
		// @method stop(): this
		// Stops the currently running `panTo` or `flyTo` animation, if any.
		stop: function () {
			this.setZoom(this._limitZoom(this._zoom));
			if (!this.options.zoomSnap) {
				this.fire('viewreset');
			}
			return this._stop();
		},


		// TODO handler.addTo
		// TODO Appropiate docs section?
		// @section Other Methods
		// @method addHandler(name: String, HandlerClass: Function): this
		// Adds a new `Handler` to the map, given its name and constructor function.
		addHandler: function (name, HandlerClass) {
			if (!HandlerClass) { return this; }

			var handler = this[name] = new HandlerClass(this);

			this._handlers.push(handler);

			if (this.options[name]) {
				handler.enable();
			}

			return this;
		},

		// @method remove(): this
		// Destroys the map and clears all related event listeners.
		remove: function () {

			this._initEvents(true);

			try {
				// throws error in IE6-8
				delete this._container._leaflet;
			} catch (e) {
				this._container._leaflet = undefined;
			}

			L.DomUtil.remove(this._mapPane);

			if (this._clearControlPos) {
				this._clearControlPos();
			}

			this._clearHandlers();

			if (this._loaded) {
				// @section Map state change events
				// @event unload: Event
				// Fired when the map is destroyed with [remove](#map-remove) method.
				this.fire('unload');
			}

			for (var i in this._layers) {
				this._layers[i].remove();
			}

			return this;
		},

		// @section Other Methods
		// @method createPane(name: String, container?: HTMLElement): HTMLElement
		// Creates a new [map pane](#map-pane) with the given name if it doesn't exist already,
		// then returns it. The pane is created as a children of `container`, or
		// as a children of the main map pane if not set.
		createPane: function (name, container) {
			var className = 'leaflet-pane' + (name ? ' leaflet-' + name.replace('Pane', '') + '-pane' : ''),
			    pane = L.DomUtil.create('div', className, container || this._mapPane);

			if (name) {
				this._panes[name] = pane;
			}
			return pane;
		},

		// @section Methods for Getting Map State

		// @method getCenter(): LatLng
		// Returns the geographical center of the map view
		getCenter: function () {
			this._checkIfLoaded();

			if (this._lastCenter && !this._moved()) {
				return this._lastCenter;
			}
			return this.layerPointToLatLng(this._getCenterLayerPoint());
		},

		// @method getZoom(): Number
		// Returns the current zoom level of the map view
		getZoom: function () {
			return this._zoom;
		},

		// @method getBounds(): LatLngBounds
		// Returns the geographical bounds visible in the current map view
		getBounds: function () {
			var bounds = this.getPixelBounds(),
			    sw = this.unproject(bounds.getBottomLeft()),
			    ne = this.unproject(bounds.getTopRight());

			return new L.LatLngBounds(sw, ne);
		},

		// @method getMinZoom(): Number
		// Returns the minimum zoom level of the map (if set in the `minZoom` option of the map or of any layers), or `0` by default.
		getMinZoom: function () {
			return this.options.minZoom === undefined ? this._layersMinZoom || 0 : this.options.minZoom;
		},

		// @method getMaxZoom(): Number
		// Returns the maximum zoom level of the map (if set in the `maxZoom` option of the map or of any layers).
		getMaxZoom: function () {
			return this.options.maxZoom === undefined ?
				(this._layersMaxZoom === undefined ? Infinity : this._layersMaxZoom) :
				this.options.maxZoom;
		},

		// @method getBoundsZoom(bounds: LatLngBounds, inside?: Boolean): Number
		// Returns the maximum zoom level on which the given bounds fit to the map
		// view in its entirety. If `inside` (optional) is set to `true`, the method
		// instead returns the minimum zoom level on which the map view fits into
		// the given bounds in its entirety.
		getBoundsZoom: function (bounds, inside, padding) { // (LatLngBounds[, Boolean, Point]) -> Number
			bounds = L.latLngBounds(bounds);
			padding = L.point(padding || [0, 0]);

			var zoom = this.getZoom() || 0,
			    min = this.getMinZoom(),
			    max = this.getMaxZoom(),
			    nw = bounds.getNorthWest(),
			    se = bounds.getSouthEast(),
			    size = this.getSize().subtract(padding),
			    boundsSize = this.project(se, zoom).subtract(this.project(nw, zoom)),
			    snap = L.Browser.any3d ? this.options.zoomSnap : 1;

			var scale = Math.min(size.x / boundsSize.x, size.y / boundsSize.y);
			zoom = this.getScaleZoom(scale, zoom);

			if (snap) {
				zoom = Math.round(zoom / (snap / 100)) * (snap / 100); // don't jump if within 1% of a snap level
				zoom = inside ? Math.ceil(zoom / snap) * snap : Math.floor(zoom / snap) * snap;
			}

			return Math.max(min, Math.min(max, zoom));
		},

		// @method getSize(): Point
		// Returns the current size of the map container (in pixels).
		getSize: function () {
			if (!this._size || this._sizeChanged) {
				this._size = new L.Point(
					this._container.clientWidth,
					this._container.clientHeight);

				this._sizeChanged = false;
			}
			return this._size.clone();
		},

		// @method getPixelBounds(): Bounds
		// Returns the bounds of the current map view in projected pixel
		// coordinates (sometimes useful in layer and overlay implementations).
		getPixelBounds: function (center, zoom) {
			var topLeftPoint = this._getTopLeftPoint(center, zoom);
			return new L.Bounds(topLeftPoint, topLeftPoint.add(this.getSize()));
		},

		// TODO: Check semantics - isn't the pixel origin the 0,0 coord relative to
		// the map pane? "left point of the map layer" can be confusing, specially
		// since there can be negative offsets.
		// @method getPixelOrigin(): Point
		// Returns the projected pixel coordinates of the top left point of
		// the map layer (useful in custom layer and overlay implementations).
		getPixelOrigin: function () {
			this._checkIfLoaded();
			return this._pixelOrigin;
		},

		// @method getPixelWorldBounds(zoom?: Number): Bounds
		// Returns the world's bounds in pixel coordinates for zoom level `zoom`.
		// If `zoom` is omitted, the map's current zoom level is used.
		getPixelWorldBounds: function (zoom) {
			return this.options.crs.getProjectedBounds(zoom === undefined ? this.getZoom() : zoom);
		},

		// @section Other Methods

		// @method getPane(pane: String|HTMLElement): HTMLElement
		// Returns a [map pane](#map-pane), given its name or its HTML element (its identity).
		getPane: function (pane) {
			return typeof pane === 'string' ? this._panes[pane] : pane;
		},

		// @method getPanes(): Object
		// Returns a plain object containing the names of all [panes](#map-pane) as keys and
		// the panes as values.
		getPanes: function () {
			return this._panes;
		},

		// @method getContainer: HTMLElement
		// Returns the HTML element that contains the map.
		getContainer: function () {
			return this._container;
		},


		// @section Conversion Methods

		// @method getZoomScale(toZoom: Number, fromZoom: Number): Number
		// Returns the scale factor to be applied to a map transition from zoom level
		// `fromZoom` to `toZoom`. Used internally to help with zoom animations.
		getZoomScale: function (toZoom, fromZoom) {
			// TODO replace with universal implementation after refactoring projections
			var crs = this.options.crs;
			fromZoom = fromZoom === undefined ? this._zoom : fromZoom;
			return crs.scale(toZoom) / crs.scale(fromZoom);
		},

		// @method getScaleZoom(scale: Number, fromZoom: Number): Number
		// Returns the zoom level that the map would end up at, if it is at `fromZoom`
		// level and everything is scaled by a factor of `scale`. Inverse of
		// [`getZoomScale`](#map-getZoomScale).
		getScaleZoom: function (scale, fromZoom) {
			var crs = this.options.crs;
			fromZoom = fromZoom === undefined ? this._zoom : fromZoom;
			return crs.zoom(scale * crs.scale(fromZoom));
		},

		// @method project(latlng: LatLng, zoom: Number): Point
		// Projects a geographical coordinate `LatLng` according to the projection
		// of the map's CRS, then scales it according to `zoom` and the CRS's
		// `Transformation`. The result is pixel coordinate relative to
		// the CRS origin.
		project: function (latlng, zoom) {
			zoom = zoom === undefined ? this._zoom : zoom;
			return this.options.crs.latLngToPoint(L.latLng(latlng), zoom);
		},

		// @method unproject(point: Point, zoom: Number): LatLng
		// Inverse of [`project`](#map-project).
		unproject: function (point, zoom) {
			zoom = zoom === undefined ? this._zoom : zoom;
			return this.options.crs.pointToLatLng(L.point(point), zoom);
		},

		// @method layerPointToLatLng(point: Point): LatLng
		// Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
		// returns the corresponding geographical coordinate (for the current zoom level).
		layerPointToLatLng: function (point) {
			var projectedPoint = L.point(point).add(this.getPixelOrigin());
			return this.unproject(projectedPoint);
		},

		// @method latLngToLayerPoint(latlng: LatLng): Point
		// Given a geographical coordinate, returns the corresponding pixel coordinate
		// relative to the [origin pixel](#map-getpixelorigin).
		latLngToLayerPoint: function (latlng) {
			var projectedPoint = this.project(L.latLng(latlng))._round();
			return projectedPoint._subtract(this.getPixelOrigin());
		},

		// @method wrapLatLng(latlng: LatLng): LatLng
		// Returns a `LatLng` where `lat` and `lng` has been wrapped according to the
		// map's CRS's `wrapLat` and `wrapLng` properties, if they are outside the
		// CRS's bounds.
		// By default this means longitude is wrapped around the dateline so its
		// value is between -180 and +180 degrees.
		wrapLatLng: function (latlng) {
			return this.options.crs.wrapLatLng(L.latLng(latlng));
		},

		// @method distance(latlng1: LatLng, latlng2: LatLng): Number
		// Returns the distance between two geographical coordinates according to
		// the map's CRS. By default this measures distance in meters.
		distance: function (latlng1, latlng2) {
			return this.options.crs.distance(L.latLng(latlng1), L.latLng(latlng2));
		},

		// @method containerPointToLayerPoint(point: Point): Point
		// Given a pixel coordinate relative to the map container, returns the corresponding
		// pixel coordinate relative to the [origin pixel](#map-getpixelorigin).
		containerPointToLayerPoint: function (point) { // (Point)
			return L.point(point).subtract(this._getMapPanePos());
		},

		// @method layerPointToContainerPoint(point: Point): Point
		// Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
		// returns the corresponding pixel coordinate relative to the map container.
		layerPointToContainerPoint: function (point) { // (Point)
			return L.point(point).add(this._getMapPanePos());
		},

		// @method containerPointToLatLng(point: Point): Point
		// Given a pixel coordinate relative to the map container, returns
		// the corresponding geographical coordinate (for the current zoom level).
		containerPointToLatLng: function (point) {
			var layerPoint = this.containerPointToLayerPoint(L.point(point));
			return this.layerPointToLatLng(layerPoint);
		},

		// @method latLngToContainerPoint(latlng: LatLng): Point
		// Given a geographical coordinate, returns the corresponding pixel coordinate
		// relative to the map container.
		latLngToContainerPoint: function (latlng) {
			return this.layerPointToContainerPoint(this.latLngToLayerPoint(L.latLng(latlng)));
		},

		// @method mouseEventToContainerPoint(ev: MouseEvent): Point
		// Given a MouseEvent object, returns the pixel coordinate relative to the
		// map container where the event took place.
		mouseEventToContainerPoint: function (e) {
			return L.DomEvent.getMousePosition(e, this._container);
		},

		// @method mouseEventToLayerPoint(ev: MouseEvent): Point
		// Given a MouseEvent object, returns the pixel coordinate relative to
		// the [origin pixel](#map-getpixelorigin) where the event took place.
		mouseEventToLayerPoint: function (e) {
			return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(e));
		},

		// @method mouseEventToLatLng(ev: MouseEvent): LatLng
		// Given a MouseEvent object, returns geographical coordinate where the
		// event took place.
		mouseEventToLatLng: function (e) { // (MouseEvent)
			return this.layerPointToLatLng(this.mouseEventToLayerPoint(e));
		},


		// map initialization methods

		_initContainer: function (id) {
			var container = this._container = L.DomUtil.get(id);

			if (!container) {
				throw new Error('Map container not found.');
			} else if (container._leaflet) {
				throw new Error('Map container is already initialized.');
			}

			L.DomEvent.addListener(container, 'scroll', this._onScroll, this);
			container._leaflet = true;
		},

		_initLayout: function () {
			var container = this._container;

			this._fadeAnimated = this.options.fadeAnimation && L.Browser.any3d;

			L.DomUtil.addClass(container, 'leaflet-container' +
				(L.Browser.touch ? ' leaflet-touch' : '') +
				(L.Browser.retina ? ' leaflet-retina' : '') +
				(L.Browser.ielt9 ? ' leaflet-oldie' : '') +
				(L.Browser.safari ? ' leaflet-safari' : '') +
				(this._fadeAnimated ? ' leaflet-fade-anim' : ''));

			var position = L.DomUtil.getStyle(container, 'position');

			if (position !== 'absolute' && position !== 'relative' && position !== 'fixed') {
				container.style.position = 'relative';
			}

			this._initPanes();

			if (this._initControlPos) {
				this._initControlPos();
			}
		},

		_initPanes: function () {
			var panes = this._panes = {};
			this._paneRenderers = {};

			// @section
			//
			// Panes are DOM elements used to control the ordering of layers on the map. You
			// can access panes with [`map.getPane`](#map-getpane) or
			// [`map.getPanes`](#map-getpanes) methods. New panes can be created with the
			// [`map.createPane`](#map-createpane) method.
			//
			// Every map has the following default panes that differ only in zIndex.
			//
			// @pane mapPane: HTMLElement = 'auto'
			// Pane that contains all other map panes

			this._mapPane = this.createPane('mapPane', this._container);
			L.DomUtil.setPosition(this._mapPane, new L.Point(0, 0));

			// @pane tilePane: HTMLElement = 200
			// Pane for `GridLayer`s and `TileLayer`s
			this.createPane('tilePane');
			// @pane overlayPane: HTMLElement = 400
			// Pane for vector overlays (`Path`s), like `Polyline`s and `Polygon`s
			this.createPane('shadowPane');
			// @pane shadowPane: HTMLElement = 500
			// Pane for overlay shadows (e.g. `Marker` shadows)
			this.createPane('overlayPane');
			// @pane markerPane: HTMLElement = 600
			// Pane for `Icon`s of `Marker`s
			this.createPane('markerPane');
			// @pane tooltipPane: HTMLElement = 650
			// Pane for tooltip.
			this.createPane('tooltipPane');
			// @pane popupPane: HTMLElement = 700
			// Pane for `Popup`s.
			this.createPane('popupPane');

			if (!this.options.markerZoomAnimation) {
				L.DomUtil.addClass(panes.markerPane, 'leaflet-zoom-hide');
				L.DomUtil.addClass(panes.shadowPane, 'leaflet-zoom-hide');
			}
		},


		// private methods that modify map state

		// @section Map state change events
		_resetView: function (center, zoom) {
			L.DomUtil.setPosition(this._mapPane, new L.Point(0, 0));

			var loading = !this._loaded;
			this._loaded = true;
			zoom = this._limitZoom(zoom);

			this.fire('viewprereset');

			var zoomChanged = this._zoom !== zoom;
			this
				._moveStart(zoomChanged)
				._move(center, zoom)
				._moveEnd(zoomChanged);

			// @event viewreset: Event
			// Fired when the map needs to redraw its content (this usually happens
			// on map zoom or load). Very useful for creating custom overlays.
			this.fire('viewreset');

			// @event load: Event
			// Fired when the map is initialized (when its center and zoom are set
			// for the first time).
			if (loading) {
				this.fire('load');
			}
		},

		_moveStart: function (zoomChanged) {
			// @event zoomstart: Event
			// Fired when the map zoom is about to change (e.g. before zoom animation).
			// @event movestart: Event
			// Fired when the view of the map starts changing (e.g. user starts dragging the map).
			if (zoomChanged) {
				this.fire('zoomstart');
			}
			return this.fire('movestart');
		},

		_move: function (center, zoom, data) {
			if (zoom === undefined) {
				zoom = this._zoom;
			}
			var zoomChanged = this._zoom !== zoom;

			this._zoom = zoom;
			this._lastCenter = center;
			this._pixelOrigin = this._getNewPixelOrigin(center);

			// @event zoom: Event
			// Fired repeteadly during any change in zoom level, including zoom
			// and fly animations.
			if (zoomChanged || (data && data.pinch)) {	// Always fire 'zoom' if pinching because #3530
				this.fire('zoom', data);
			}

			// @event move: Event
			// Fired repeteadly during any movement of the map, including pan and
			// fly animations.
			return this.fire('move', data);
		},

		_moveEnd: function (zoomChanged) {
			// @event zoomend: Event
			// Fired when the map has changed, after any animations.
			if (zoomChanged) {
				this.fire('zoomend');
			}

			// @event moveend: Event
			// Fired when the center of the map stops changing (e.g. user stopped
			// dragging the map).
			return this.fire('moveend');
		},

		_stop: function () {
			L.Util.cancelAnimFrame(this._flyToFrame);
			if (this._panAnim) {
				this._panAnim.stop();
			}
			return this;
		},

		_rawPanBy: function (offset) {
			L.DomUtil.setPosition(this._mapPane, this._getMapPanePos().subtract(offset));
		},

		_getZoomSpan: function () {
			return this.getMaxZoom() - this.getMinZoom();
		},

		_panInsideMaxBounds: function () {
			if (!this._enforcingBounds) {
				this.panInsideBounds(this.options.maxBounds);
			}
		},

		_checkIfLoaded: function () {
			if (!this._loaded) {
				throw new Error('Set map center and zoom first.');
			}
		},

		// DOM event handling

		// @section Interaction events
		_initEvents: function (remove) {
			if (!L.DomEvent) { return; }

			this._targets = {};
			this._targets[L.stamp(this._container)] = this;

			var onOff = remove ? 'off' : 'on';

			// @event click: MouseEvent
			// Fired when the user clicks (or taps) the map.
			// @event dblclick: MouseEvent
			// Fired when the user double-clicks (or double-taps) the map.
			// @event mousedown: MouseEvent
			// Fired when the user pushes the mouse button on the map.
			// @event mouseup: MouseEvent
			// Fired when the user releases the mouse button on the map.
			// @event mouseover: MouseEvent
			// Fired when the mouse enters the map.
			// @event mouseout: MouseEvent
			// Fired when the mouse leaves the map.
			// @event mousemove: MouseEvent
			// Fired while the mouse moves over the map.
			// @event contextmenu: MouseEvent
			// Fired when the user pushes the right mouse button on the map, prevents
			// default browser context menu from showing if there are listeners on
			// this event. Also fired on mobile when the user holds a single touch
			// for a second (also called long press).
			// @event keypress: Event
			// Fired when the user presses a key from the keyboard while the map is focused.
			L.DomEvent[onOff](this._container, 'click dblclick mousedown mouseup ' +
				'mouseover mouseout mousemove contextmenu keypress', this._handleDOMEvent, this);

			if (this.options.trackResize) {
				L.DomEvent[onOff](window, 'resize', this._onResize, this);
			}

			if (L.Browser.any3d && this.options.transform3DLimit) {
				this[onOff]('moveend', this._onMoveEnd);
			}
		},

		_onResize: function () {
			L.Util.cancelAnimFrame(this._resizeRequest);
			this._resizeRequest = L.Util.requestAnimFrame(
			        function () { this.invalidateSize({debounceMoveend: true}); }, this);
		},

		_onScroll: function () {
			this._container.scrollTop  = 0;
			this._container.scrollLeft = 0;
		},

		_onMoveEnd: function () {
			var pos = this._getMapPanePos();
			if (Math.max(Math.abs(pos.x), Math.abs(pos.y)) >= this.options.transform3DLimit) {
				// https://bugzilla.mozilla.org/show_bug.cgi?id=1203873 but Webkit also have
				// a pixel offset on very high values, see: http://jsfiddle.net/dg6r5hhb/
				this._resetView(this.getCenter(), this.getZoom());
			}
		},

		_findEventTargets: function (e, type) {
			var targets = [],
			    target,
			    isHover = type === 'mouseout' || type === 'mouseover',
			    src = e.target || e.srcElement,
			    dragging = false;

			while (src) {
				target = this._targets[L.stamp(src)];
				if (target && (type === 'click' || type === 'preclick') && !e._simulated && this._draggableMoved(target)) {
					// Prevent firing click after you just dragged an object.
					dragging = true;
					break;
				}
				if (target && target.listens(type, true)) {
					if (isHover && !L.DomEvent._isExternalTarget(src, e)) { break; }
					targets.push(target);
					if (isHover) { break; }
				}
				if (src === this._container) { break; }
				src = src.parentNode;
			}
			if (!targets.length && !dragging && !isHover && L.DomEvent._isExternalTarget(src, e)) {
				targets = [this];
			}
			return targets;
		},

		_handleDOMEvent: function (e) {
			if (!this._loaded || L.DomEvent._skipped(e)) { return; }

			var type = e.type === 'keypress' && e.keyCode === 13 ? 'click' : e.type;

			if (type === 'mousedown') {
				// prevents outline when clicking on keyboard-focusable element
				L.DomUtil.preventOutline(e.target || e.srcElement);
			}

			this._fireDOMEvent(e, type);
		},

		_fireDOMEvent: function (e, type, targets) {

			if (e.type === 'click') {
				// Fire a synthetic 'preclick' event which propagates up (mainly for closing popups).
				// @event preclick: MouseEvent
				// Fired before mouse click on the map (sometimes useful when you
				// want something to happen on click before any existing click
				// handlers start running).
				var synth = L.Util.extend({}, e);
				synth.type = 'preclick';
				this._fireDOMEvent(synth, synth.type, targets);
			}

			if (e._stopped) { return; }

			// Find the layer the event is propagating from and its parents.
			targets = (targets || []).concat(this._findEventTargets(e, type));

			if (!targets.length) { return; }

			var target = targets[0];
			if (type === 'contextmenu' && target.listens(type, true)) {
				L.DomEvent.preventDefault(e);
			}

			var data = {
				originalEvent: e
			};

			if (e.type !== 'keypress') {
				var isMarker = target instanceof L.Marker;
				data.containerPoint = isMarker ?
						this.latLngToContainerPoint(target.getLatLng()) : this.mouseEventToContainerPoint(e);
				data.layerPoint = this.containerPointToLayerPoint(data.containerPoint);
				data.latlng = isMarker ? target.getLatLng() : this.layerPointToLatLng(data.layerPoint);
			}

			for (var i = 0; i < targets.length; i++) {
				targets[i].fire(type, data, true);
				if (data.originalEvent._stopped ||
					(targets[i].options.nonBubblingEvents && L.Util.indexOf(targets[i].options.nonBubblingEvents, type) !== -1)) { return; }
			}
		},

		_draggableMoved: function (obj) {
			obj = obj.dragging && obj.dragging.enabled() ? obj : this;
			return (obj.dragging && obj.dragging.moved()) || (this.boxZoom && this.boxZoom.moved());
		},

		_clearHandlers: function () {
			for (var i = 0, len = this._handlers.length; i < len; i++) {
				this._handlers[i].disable();
			}
		},

		// @section Other Methods

		// @method whenReady(fn: Function, context?: Object): this
		// Runs the given function `fn` when the map gets initialized with
		// a view (center and zoom) and at least one layer, or immediately
		// if it's already initialized, optionally passing a function context.
		whenReady: function (callback, context) {
			if (this._loaded) {
				callback.call(context || this, {target: this});
			} else {
				this.on('load', callback, context);
			}
			return this;
		},


		// private methods for getting map state

		_getMapPanePos: function () {
			return L.DomUtil.getPosition(this._mapPane) || new L.Point(0, 0);
		},

		_moved: function () {
			var pos = this._getMapPanePos();
			return pos && !pos.equals([0, 0]);
		},

		_getTopLeftPoint: function (center, zoom) {
			var pixelOrigin = center && zoom !== undefined ?
				this._getNewPixelOrigin(center, zoom) :
				this.getPixelOrigin();
			return pixelOrigin.subtract(this._getMapPanePos());
		},

		_getNewPixelOrigin: function (center, zoom) {
			var viewHalf = this.getSize()._divideBy(2);
			return this.project(center, zoom)._subtract(viewHalf)._add(this._getMapPanePos())._round();
		},

		_latLngToNewLayerPoint: function (latlng, zoom, center) {
			var topLeft = this._getNewPixelOrigin(center, zoom);
			return this.project(latlng, zoom)._subtract(topLeft);
		},

		// layer point of the current center
		_getCenterLayerPoint: function () {
			return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
		},

		// offset of the specified place to the current center in pixels
		_getCenterOffset: function (latlng) {
			return this.latLngToLayerPoint(latlng).subtract(this._getCenterLayerPoint());
		},

		// adjust center for view to get inside bounds
		_limitCenter: function (center, zoom, bounds) {

			if (!bounds) { return center; }

			var centerPoint = this.project(center, zoom),
			    viewHalf = this.getSize().divideBy(2),
			    viewBounds = new L.Bounds(centerPoint.subtract(viewHalf), centerPoint.add(viewHalf)),
			    offset = this._getBoundsOffset(viewBounds, bounds, zoom);

			// If offset is less than a pixel, ignore.
			// This prevents unstable projections from getting into
			// an infinite loop of tiny offsets.
			if (offset.round().equals([0, 0])) {
				return center;
			}

			return this.unproject(centerPoint.add(offset), zoom);
		},

		// adjust offset for view to get inside bounds
		_limitOffset: function (offset, bounds) {
			if (!bounds) { return offset; }

			var viewBounds = this.getPixelBounds(),
			    newBounds = new L.Bounds(viewBounds.min.add(offset), viewBounds.max.add(offset));

			return offset.add(this._getBoundsOffset(newBounds, bounds));
		},

		// returns offset needed for pxBounds to get inside maxBounds at a specified zoom
		_getBoundsOffset: function (pxBounds, maxBounds, zoom) {
			var projectedMaxBounds = L.bounds(
			        this.project(maxBounds.getNorthEast(), zoom),
			        this.project(maxBounds.getSouthWest(), zoom)
			    ),
			    minOffset = projectedMaxBounds.min.subtract(pxBounds.min),
			    maxOffset = projectedMaxBounds.max.subtract(pxBounds.max),

			    dx = this._rebound(minOffset.x, -maxOffset.x),
			    dy = this._rebound(minOffset.y, -maxOffset.y);

			return new L.Point(dx, dy);
		},

		_rebound: function (left, right) {
			return left + right > 0 ?
				Math.round(left - right) / 2 :
				Math.max(0, Math.ceil(left)) - Math.max(0, Math.floor(right));
		},

		_limitZoom: function (zoom) {
			var min = this.getMinZoom(),
			    max = this.getMaxZoom(),
			    snap = L.Browser.any3d ? this.options.zoomSnap : 1;
			if (snap) {
				zoom = Math.round(zoom / snap) * snap;
			}
			return Math.max(min, Math.min(max, zoom));
		}
	});

	// @section

	// @factory L.map(id: String, options?: Map options)
	// Instantiates a map object given the DOM ID of a `<div>` element
	// and optionally an object literal with `Map options`.
	//
	// @alternative
	// @factory L.map(el: HTMLElement, options?: Map options)
	// Instantiates a map object given an instance of a `<div>` HTML element
	// and optionally an object literal with `Map options`.
	L.map = function (id, options) {
		return new L.Map(id, options);
	};




	/*
	 * @class Layer
	 * @inherits Evented
	 * @aka L.Layer
	 * @aka ILayer
	 *
	 * A set of methods from the Layer base class that all Leaflet layers use.
	 * Inherits all methods, options and events from `L.Evented`.
	 *
	 * @example
	 *
	 * ```js
	 * var layer = L.Marker(latlng).addTo(map);
	 * layer.addTo(map);
	 * layer.remove();
	 * ```
	 *
	 * @event add: Event
	 * Fired after the layer is added to a map
	 *
	 * @event remove: Event
	 * Fired after the layer is removed from a map
	 */


	L.Layer = L.Evented.extend({

		// Classes extending `L.Layer` will inherit the following options:
		options: {
			// @option pane: String = 'overlayPane'
			// By default the layer will be added to the map's [overlay pane](#map-overlaypane). Overriding this option will cause the layer to be placed on another pane by default.
			pane: 'overlayPane',
			nonBubblingEvents: []  // Array of events that should not be bubbled to DOM parents (like the map)
		},

		/* @section
		 * Classes extending `L.Layer` will inherit the following methods:
		 *
		 * @method addTo(map: Map): this
		 * Adds the layer to the given map
		 */
		addTo: function (map) {
			map.addLayer(this);
			return this;
		},

		// @method remove: this
		// Removes the layer from the map it is currently active on.
		remove: function () {
			return this.removeFrom(this._map || this._mapToAdd);
		},

		// @method removeFrom(map: Map): this
		// Removes the layer from the given map
		removeFrom: function (obj) {
			if (obj) {
				obj.removeLayer(this);
			}
			return this;
		},

		// @method getPane(name? : String): HTMLElement
		// Returns the `HTMLElement` representing the named pane on the map. If `name` is omitted, returns the pane for this layer.
		getPane: function (name) {
			return this._map.getPane(name ? (this.options[name] || name) : this.options.pane);
		},

		addInteractiveTarget: function (targetEl) {
			this._map._targets[L.stamp(targetEl)] = this;
			return this;
		},

		removeInteractiveTarget: function (targetEl) {
			delete this._map._targets[L.stamp(targetEl)];
			return this;
		},

		_layerAdd: function (e) {
			var map = e.target;

			// check in case layer gets added and then removed before the map is ready
			if (!map.hasLayer(this)) { return; }

			this._map = map;
			this._zoomAnimated = map._zoomAnimated;

			if (this.getEvents) {
				var events = this.getEvents();
				map.on(events, this);
				this.once('remove', function () {
					map.off(events, this);
				}, this);
			}

			this.onAdd(map);

			if (this.getAttribution && this._map.attributionControl) {
				this._map.attributionControl.addAttribution(this.getAttribution());
			}

			this.fire('add');
			map.fire('layeradd', {layer: this});
		}
	});

	/* @section Extension methods
	 * @uninheritable
	 *
	 * Every layer should extend from `L.Layer` and (re-)implement the following methods.
	 *
	 * @method onAdd(map: Map): this
	 * Should contain code that creates DOM elements for the layer, adds them to `map panes` where they should belong and puts listeners on relevant map events. Called on [`map.addLayer(layer)`](#map-addlayer).
	 *
	 * @method onRemove(map: Map): this
	 * Should contain all clean up code that removes the layer's elements from the DOM and removes listeners previously added in [`onAdd`](#layer-onadd). Called on [`map.removeLayer(layer)`](#map-removelayer).
	 *
	 * @method getEvents(): Object
	 * This optional method should return an object like `{ viewreset: this._reset }` for [`addEventListener`](#evented-addeventlistener). The event handlers in this object will be automatically added and removed from the map with your layer.
	 *
	 * @method getAttribution(): String
	 * This optional method should return a string containing HTML to be shown on the `Attribution control` whenever the layer is visible.
	 *
	 * @method beforeAdd(map: Map): this
	 * Optional method. Called on [`map.addLayer(layer)`](#map-addlayer), before the layer is added to the map, before events are initialized, without waiting until the map is in a usable state. Use for early initialization only.
	 */


	/* @namespace Map
	 * @section Layer events
	 *
	 * @event layeradd: LayerEvent
	 * Fired when a new layer is added to the map.
	 *
	 * @event layerremove: LayerEvent
	 * Fired when some layer is removed from the map
	 *
	 * @section Methods for Layers and Controls
	 */
	L.Map.include({
		// @method addLayer(layer: Layer): this
		// Adds the given layer to the map
		addLayer: function (layer) {
			var id = L.stamp(layer);
			if (this._layers[id]) { return this; }
			this._layers[id] = layer;

			layer._mapToAdd = this;

			if (layer.beforeAdd) {
				layer.beforeAdd(this);
			}

			this.whenReady(layer._layerAdd, layer);

			return this;
		},

		// @method removeLayer(layer: Layer): this
		// Removes the given layer from the map.
		removeLayer: function (layer) {
			var id = L.stamp(layer);

			if (!this._layers[id]) { return this; }

			if (this._loaded) {
				layer.onRemove(this);
			}

			if (layer.getAttribution && this.attributionControl) {
				this.attributionControl.removeAttribution(layer.getAttribution());
			}

			delete this._layers[id];

			if (this._loaded) {
				this.fire('layerremove', {layer: layer});
				layer.fire('remove');
			}

			layer._map = layer._mapToAdd = null;

			return this;
		},

		// @method hasLayer(layer: Layer): Boolean
		// Returns `true` if the given layer is currently added to the map
		hasLayer: function (layer) {
			return !!layer && (L.stamp(layer) in this._layers);
		},

		/* @method eachLayer(fn: Function, context?: Object): this
		 * Iterates over the layers of the map, optionally specifying context of the iterator function.
		 * ```
		 * map.eachLayer(function(layer){
		 *     layer.bindPopup('Hello');
		 * });
		 * ```
		 */
		eachLayer: function (method, context) {
			for (var i in this._layers) {
				method.call(context, this._layers[i]);
			}
			return this;
		},

		_addLayers: function (layers) {
			layers = layers ? (L.Util.isArray(layers) ? layers : [layers]) : [];

			for (var i = 0, len = layers.length; i < len; i++) {
				this.addLayer(layers[i]);
			}
		},

		_addZoomLimit: function (layer) {
			if (isNaN(layer.options.maxZoom) || !isNaN(layer.options.minZoom)) {
				this._zoomBoundLayers[L.stamp(layer)] = layer;
				this._updateZoomLevels();
			}
		},

		_removeZoomLimit: function (layer) {
			var id = L.stamp(layer);

			if (this._zoomBoundLayers[id]) {
				delete this._zoomBoundLayers[id];
				this._updateZoomLevels();
			}
		},

		_updateZoomLevels: function () {
			var minZoom = Infinity,
			    maxZoom = -Infinity,
			    oldZoomSpan = this._getZoomSpan();

			for (var i in this._zoomBoundLayers) {
				var options = this._zoomBoundLayers[i].options;

				minZoom = options.minZoom === undefined ? minZoom : Math.min(minZoom, options.minZoom);
				maxZoom = options.maxZoom === undefined ? maxZoom : Math.max(maxZoom, options.maxZoom);
			}

			this._layersMaxZoom = maxZoom === -Infinity ? undefined : maxZoom;
			this._layersMinZoom = minZoom === Infinity ? undefined : minZoom;

			// @section Map state change events
			// @event zoomlevelschange: Event
			// Fired when the number of zoomlevels on the map is changed due
			// to adding or removing a layer.
			if (oldZoomSpan !== this._getZoomSpan()) {
				this.fire('zoomlevelschange');
			}
		}
	});



	/*
	 * @namespace Projection
	 * @projection L.Projection.Mercator
	 *
	 * Elliptical Mercator projection — more complex than Spherical Mercator. Takes into account that Earth is a geoid, not a perfect sphere. Used by the EPSG:3395 CRS.
	 */

	L.Projection.Mercator = {
		R: 6378137,
		R_MINOR: 6356752.314245179,

		bounds: L.bounds([-20037508.34279, -15496570.73972], [20037508.34279, 18764656.23138]),

		project: function (latlng) {
			var d = Math.PI / 180,
			    r = this.R,
			    y = latlng.lat * d,
			    tmp = this.R_MINOR / r,
			    e = Math.sqrt(1 - tmp * tmp),
			    con = e * Math.sin(y);

			var ts = Math.tan(Math.PI / 4 - y / 2) / Math.pow((1 - con) / (1 + con), e / 2);
			y = -r * Math.log(Math.max(ts, 1E-10));

			return new L.Point(latlng.lng * d * r, y);
		},

		unproject: function (point) {
			var d = 180 / Math.PI,
			    r = this.R,
			    tmp = this.R_MINOR / r,
			    e = Math.sqrt(1 - tmp * tmp),
			    ts = Math.exp(-point.y / r),
			    phi = Math.PI / 2 - 2 * Math.atan(ts);

			for (var i = 0, dphi = 0.1, con; i < 15 && Math.abs(dphi) > 1e-7; i++) {
				con = e * Math.sin(phi);
				con = Math.pow((1 - con) / (1 + con), e / 2);
				dphi = Math.PI / 2 - 2 * Math.atan(ts * con) - phi;
				phi += dphi;
			}

			return new L.LatLng(phi * d, point.x * d / r);
		}
	};



	/*
	 * @namespace CRS
	 * @crs L.CRS.EPSG3395
	 *
	 * Rarely used by some commercial tile providers. Uses Elliptical Mercator projection.
	 */

	L.CRS.EPSG3395 = L.extend({}, L.CRS.Earth, {
		code: 'EPSG:3395',
		projection: L.Projection.Mercator,

		transformation: (function () {
			var scale = 0.5 / (Math.PI * L.Projection.Mercator.R);
			return new L.Transformation(scale, 0.5, -scale, 0.5);
		}())
	});



	/*
	 * @class GridLayer
	 * @inherits Layer
	 * @aka L.GridLayer
	 *
	 * Generic class for handling a tiled grid of HTML elements. This is the base class for all tile layers and replaces `TileLayer.Canvas`.
	 * GridLayer can be extended to create a tiled grid of HTML elements like `<canvas>`, `<img>` or `<div>`. GridLayer will handle creating and animating these DOM elements for you.
	 *
	 *
	 * @section Synchronous usage
	 * @example
	 *
	 * To create a custom layer, extend GridLayer and implement the `createTile()` method, which will be passed a `Point` object with the `x`, `y`, and `z` (zoom level) coordinates to draw your tile.
	 *
	 * ```js
	 * var CanvasLayer = L.GridLayer.extend({
	 *     createTile: function(coords){
	 *         // create a <canvas> element for drawing
	 *         var tile = L.DomUtil.create('canvas', 'leaflet-tile');
	 *
	 *         // setup tile width and height according to the options
	 *         var size = this.getTileSize();
	 *         tile.width = size.x;
	 *         tile.height = size.y;
	 *
	 *         // get a canvas context and draw something on it using coords.x, coords.y and coords.z
	 *         var ctx = tile.getContext('2d');
	 *
	 *         // return the tile so it can be rendered on screen
	 *         return tile;
	 *     }
	 * });
	 * ```
	 *
	 * @section Asynchronous usage
	 * @example
	 *
	 * Tile creation can also be asynchronous, this is useful when using a third-party drawing library. Once the tile is finished drawing it can be passed to the `done()` callback.
	 *
	 * ```js
	 * var CanvasLayer = L.GridLayer.extend({
	 *     createTile: function(coords, done){
	 *         var error;
	 *
	 *         // create a <canvas> element for drawing
	 *         var tile = L.DomUtil.create('canvas', 'leaflet-tile');
	 *
	 *         // setup tile width and height according to the options
	 *         var size = this.getTileSize();
	 *         tile.width = size.x;
	 *         tile.height = size.y;
	 *
	 *         // draw something asynchronously and pass the tile to the done() callback
	 *         setTimeout(function() {
	 *             done(error, tile);
	 *         }, 1000);
	 *
	 *         return tile;
	 *     }
	 * });
	 * ```
	 *
	 * @section
	 */


	L.GridLayer = L.Layer.extend({

		// @section
		// @aka GridLayer options
		options: {
			// @option tileSize: Number|Point = 256
			// Width and height of tiles in the grid. Use a number if width and height are equal, or `L.point(width, height)` otherwise.
			tileSize: 256,

			// @option opacity: Number = 1.0
			// Opacity of the tiles. Can be used in the `createTile()` function.
			opacity: 1,

			// @option updateWhenIdle: Boolean = depends
			// If `false`, new tiles are loaded during panning, otherwise only after it (for better performance). `true` by default on mobile browsers, otherwise `false`.
			updateWhenIdle: L.Browser.mobile,

			// @option updateWhenZooming: Boolean = true
			// By default, a smooth zoom animation (during a [touch zoom](#map-touchzoom) or a [`flyTo()`](#map-flyto)) will update grid layers every integer zoom level. Setting this option to `false` will update the grid layer only when the smooth animation ends.
			updateWhenZooming: true,

			// @option updateInterval: Number = 200
			// Tiles will not update more than once every `updateInterval` milliseconds when panning.
			updateInterval: 200,

			// @option attribution: String = null
			// String to be shown in the attribution control, describes the layer data, e.g. "© Mapbox".
			attribution: null,

			// @option zIndex: Number = 1
			// The explicit zIndex of the tile layer.
			zIndex: 1,

			// @option bounds: LatLngBounds = undefined
			// If set, tiles will only be loaded inside the set `LatLngBounds`.
			bounds: null,

			// @option minZoom: Number = 0
			// The minimum zoom level that tiles will be loaded at. By default the entire map.
			minZoom: 0,

			// @option maxZoom: Number = undefined
			// The maximum zoom level that tiles will be loaded at.
			maxZoom: undefined,

			// @option noWrap: Boolean = false
			// Whether the layer is wrapped around the antimeridian. If `true`, the
			// GridLayer will only be displayed once at low zoom levels. Has no
			// effect when the [map CRS](#map-crs) doesn't wrap around.
			noWrap: false,

			// @option pane: String = 'tilePane'
			// `Map pane` where the grid layer will be added.
			pane: 'tilePane',

			// @option className: String = ''
			// A custom class name to assign to the tile layer. Empty by default.
			className: '',

			// @option keepBuffer: Number = 2
			// When panning the map, keep this many rows and columns of tiles before unloading them.
			keepBuffer: 2
		},

		initialize: function (options) {
			options = L.setOptions(this, options);
		},

		onAdd: function () {
			this._initContainer();

			this._levels = {};
			this._tiles = {};

			this._resetView();
			this._update();
		},

		beforeAdd: function (map) {
			map._addZoomLimit(this);
		},

		onRemove: function (map) {
			this._removeAllTiles();
			L.DomUtil.remove(this._container);
			map._removeZoomLimit(this);
			this._container = null;
			this._tileZoom = null;
		},

		// @method bringToFront: this
		// Brings the tile layer to the top of all tile layers.
		bringToFront: function () {
			if (this._map) {
				L.DomUtil.toFront(this._container);
				this._setAutoZIndex(Math.max);
			}
			return this;
		},

		// @method bringToBack: this
		// Brings the tile layer to the bottom of all tile layers.
		bringToBack: function () {
			if (this._map) {
				L.DomUtil.toBack(this._container);
				this._setAutoZIndex(Math.min);
			}
			return this;
		},

		// @method getAttribution: String
		// Used by the `attribution control`, returns the [attribution option](#gridlayer-attribution).
		getAttribution: function () {
			return this.options.attribution;
		},

		// @method getContainer: String
		// Returns the HTML element that contains the tiles for this layer.
		getContainer: function () {
			return this._container;
		},

		// @method setOpacity(opacity: Number): this
		// Changes the [opacity](#gridlayer-opacity) of the grid layer.
		setOpacity: function (opacity) {
			this.options.opacity = opacity;
			this._updateOpacity();
			return this;
		},

		// @method setZIndex(zIndex: Number): this
		// Changes the [zIndex](#gridlayer-zindex) of the grid layer.
		setZIndex: function (zIndex) {
			this.options.zIndex = zIndex;
			this._updateZIndex();

			return this;
		},

		// @method isLoading: Boolean
		// Returns `true` if any tile in the grid layer has not finished loading.
		isLoading: function () {
			return this._loading;
		},

		// @method redraw: this
		// Causes the layer to clear all the tiles and request them again.
		redraw: function () {
			if (this._map) {
				this._removeAllTiles();
				this._update();
			}
			return this;
		},

		getEvents: function () {
			var events = {
				viewprereset: this._invalidateAll,
				viewreset: this._resetView,
				zoom: this._resetView,
				moveend: this._onMoveEnd
			};

			if (!this.options.updateWhenIdle) {
				// update tiles on move, but not more often than once per given interval
				if (!this._onMove) {
					this._onMove = L.Util.throttle(this._onMoveEnd, this.options.updateInterval, this);
				}

				events.move = this._onMove;
			}

			if (this._zoomAnimated) {
				events.zoomanim = this._animateZoom;
			}

			return events;
		},

		// @section Extension methods
		// Layers extending `GridLayer` shall reimplement the following method.
		// @method createTile(coords: Object, done?: Function): HTMLElement
		// Called only internally, must be overriden by classes extending `GridLayer`.
		// Returns the `HTMLElement` corresponding to the given `coords`. If the `done` callback
		// is specified, it must be called when the tile has finished loading and drawing.
		createTile: function () {
			return document.createElement('div');
		},

		// @section
		// @method getTileSize: Point
		// Normalizes the [tileSize option](#gridlayer-tilesize) into a point. Used by the `createTile()` method.
		getTileSize: function () {
			var s = this.options.tileSize;
			return s instanceof L.Point ? s : new L.Point(s, s);
		},

		_updateZIndex: function () {
			if (this._container && this.options.zIndex !== undefined && this.options.zIndex !== null) {
				this._container.style.zIndex = this.options.zIndex;
			}
		},

		_setAutoZIndex: function (compare) {
			// go through all other layers of the same pane, set zIndex to max + 1 (front) or min - 1 (back)

			var layers = this.getPane().children,
			    edgeZIndex = -compare(-Infinity, Infinity); // -Infinity for max, Infinity for min

			for (var i = 0, len = layers.length, zIndex; i < len; i++) {

				zIndex = layers[i].style.zIndex;

				if (layers[i] !== this._container && zIndex) {
					edgeZIndex = compare(edgeZIndex, +zIndex);
				}
			}

			if (isFinite(edgeZIndex)) {
				this.options.zIndex = edgeZIndex + compare(-1, 1);
				this._updateZIndex();
			}
		},

		_updateOpacity: function () {
			if (!this._map) { return; }

			// IE doesn't inherit filter opacity properly, so we're forced to set it on tiles
			if (L.Browser.ielt9) { return; }

			L.DomUtil.setOpacity(this._container, this.options.opacity);

			var now = +new Date(),
			    nextFrame = false,
			    willPrune = false;

			for (var key in this._tiles) {
				var tile = this._tiles[key];
				if (!tile.current || !tile.loaded) { continue; }

				var fade = Math.min(1, (now - tile.loaded) / 200);

				L.DomUtil.setOpacity(tile.el, fade);
				if (fade < 1) {
					nextFrame = true;
				} else {
					if (tile.active) { willPrune = true; }
					tile.active = true;
				}
			}

			if (willPrune && !this._noPrune) { this._pruneTiles(); }

			if (nextFrame) {
				L.Util.cancelAnimFrame(this._fadeFrame);
				this._fadeFrame = L.Util.requestAnimFrame(this._updateOpacity, this);
			}
		},

		_initContainer: function () {
			if (this._container) { return; }

			this._container = L.DomUtil.create('div', 'leaflet-layer ' + (this.options.className || ''));
			this._updateZIndex();

			if (this.options.opacity < 1) {
				this._updateOpacity();
			}

			this.getPane().appendChild(this._container);
		},

		_updateLevels: function () {

			var zoom = this._tileZoom,
			    maxZoom = this.options.maxZoom;

			if (zoom === undefined) { return undefined; }

			for (var z in this._levels) {
				if (this._levels[z].el.children.length || z === zoom) {
					this._levels[z].el.style.zIndex = maxZoom - Math.abs(zoom - z);
				} else {
					L.DomUtil.remove(this._levels[z].el);
					this._removeTilesAtZoom(z);
					delete this._levels[z];
				}
			}

			var level = this._levels[zoom],
			    map = this._map;

			if (!level) {
				level = this._levels[zoom] = {};

				level.el = L.DomUtil.create('div', 'leaflet-tile-container leaflet-zoom-animated', this._container);
				level.el.style.zIndex = maxZoom;

				level.origin = map.project(map.unproject(map.getPixelOrigin()), zoom).round();
				level.zoom = zoom;

				this._setZoomTransform(level, map.getCenter(), map.getZoom());

				// force the browser to consider the newly added element for transition
				L.Util.falseFn(level.el.offsetWidth);
			}

			this._level = level;

			return level;
		},

		_pruneTiles: function () {
			if (!this._map) {
				return;
			}

			var key, tile;

			var zoom = this._map.getZoom();
			if (zoom > this.options.maxZoom ||
				zoom < this.options.minZoom) {
				this._removeAllTiles();
				return;
			}

			for (key in this._tiles) {
				tile = this._tiles[key];
				tile.retain = tile.current;
			}

			for (key in this._tiles) {
				tile = this._tiles[key];
				if (tile.current && !tile.active) {
					var coords = tile.coords;
					if (!this._retainParent(coords.x, coords.y, coords.z, coords.z - 5)) {
						this._retainChildren(coords.x, coords.y, coords.z, coords.z + 2);
					}
				}
			}

			for (key in this._tiles) {
				if (!this._tiles[key].retain) {
					this._removeTile(key);
				}
			}
		},

		_removeTilesAtZoom: function (zoom) {
			for (var key in this._tiles) {
				if (this._tiles[key].coords.z !== zoom) {
					continue;
				}
				this._removeTile(key);
			}
		},

		_removeAllTiles: function () {
			for (var key in this._tiles) {
				this._removeTile(key);
			}
		},

		_invalidateAll: function () {
			for (var z in this._levels) {
				L.DomUtil.remove(this._levels[z].el);
				delete this._levels[z];
			}
			this._removeAllTiles();

			this._tileZoom = null;
		},

		_retainParent: function (x, y, z, minZoom) {
			var x2 = Math.floor(x / 2),
			    y2 = Math.floor(y / 2),
			    z2 = z - 1,
			    coords2 = new L.Point(+x2, +y2);
			coords2.z = +z2;

			var key = this._tileCoordsToKey(coords2),
			    tile = this._tiles[key];

			if (tile && tile.active) {
				tile.retain = true;
				return true;

			} else if (tile && tile.loaded) {
				tile.retain = true;
			}

			if (z2 > minZoom) {
				return this._retainParent(x2, y2, z2, minZoom);
			}

			return false;
		},

		_retainChildren: function (x, y, z, maxZoom) {

			for (var i = 2 * x; i < 2 * x + 2; i++) {
				for (var j = 2 * y; j < 2 * y + 2; j++) {

					var coords = new L.Point(i, j);
					coords.z = z + 1;

					var key = this._tileCoordsToKey(coords),
					    tile = this._tiles[key];

					if (tile && tile.active) {
						tile.retain = true;
						continue;

					} else if (tile && tile.loaded) {
						tile.retain = true;
					}

					if (z + 1 < maxZoom) {
						this._retainChildren(i, j, z + 1, maxZoom);
					}
				}
			}
		},

		_resetView: function (e) {
			var animating = e && (e.pinch || e.flyTo);
			this._setView(this._map.getCenter(), this._map.getZoom(), animating, animating);
		},

		_animateZoom: function (e) {
			this._setView(e.center, e.zoom, true, e.noUpdate);
		},

		_setView: function (center, zoom, noPrune, noUpdate) {
			var tileZoom = Math.round(zoom);
			if ((this.options.maxZoom !== undefined && tileZoom > this.options.maxZoom) ||
			    (this.options.minZoom !== undefined && tileZoom < this.options.minZoom)) {
				tileZoom = undefined;
			}

			var tileZoomChanged = this.options.updateWhenZooming && (tileZoom !== this._tileZoom);

			if (!noUpdate || tileZoomChanged) {

				this._tileZoom = tileZoom;

				if (this._abortLoading) {
					this._abortLoading();
				}

				this._updateLevels();
				this._resetGrid();

				if (tileZoom !== undefined) {
					this._update(center);
				}

				if (!noPrune) {
					this._pruneTiles();
				}

				// Flag to prevent _updateOpacity from pruning tiles during
				// a zoom anim or a pinch gesture
				this._noPrune = !!noPrune;
			}

			this._setZoomTransforms(center, zoom);
		},

		_setZoomTransforms: function (center, zoom) {
			for (var i in this._levels) {
				this._setZoomTransform(this._levels[i], center, zoom);
			}
		},

		_setZoomTransform: function (level, center, zoom) {
			var scale = this._map.getZoomScale(zoom, level.zoom),
			    translate = level.origin.multiplyBy(scale)
			        .subtract(this._map._getNewPixelOrigin(center, zoom)).round();

			if (L.Browser.any3d) {
				L.DomUtil.setTransform(level.el, translate, scale);
			} else {
				L.DomUtil.setPosition(level.el, translate);
			}
		},

		_resetGrid: function () {
			var map = this._map,
			    crs = map.options.crs,
			    tileSize = this._tileSize = this.getTileSize(),
			    tileZoom = this._tileZoom;

			var bounds = this._map.getPixelWorldBounds(this._tileZoom);
			if (bounds) {
				this._globalTileRange = this._pxBoundsToTileRange(bounds);
			}

			this._wrapX = crs.wrapLng && !this.options.noWrap && [
				Math.floor(map.project([0, crs.wrapLng[0]], tileZoom).x / tileSize.x),
				Math.ceil(map.project([0, crs.wrapLng[1]], tileZoom).x / tileSize.y)
			];
			this._wrapY = crs.wrapLat && !this.options.noWrap && [
				Math.floor(map.project([crs.wrapLat[0], 0], tileZoom).y / tileSize.x),
				Math.ceil(map.project([crs.wrapLat[1], 0], tileZoom).y / tileSize.y)
			];
		},

		_onMoveEnd: function () {
			if (!this._map || this._map._animatingZoom) { return; }

			this._update();
		},

		_getTiledPixelBounds: function (center) {
			var map = this._map,
			    mapZoom = map._animatingZoom ? Math.max(map._animateToZoom, map.getZoom()) : map.getZoom(),
			    scale = map.getZoomScale(mapZoom, this._tileZoom),
			    pixelCenter = map.project(center, this._tileZoom).floor(),
			    halfSize = map.getSize().divideBy(scale * 2);

			return new L.Bounds(pixelCenter.subtract(halfSize), pixelCenter.add(halfSize));
		},

		// Private method to load tiles in the grid's active zoom level according to map bounds
		_update: function (center) {
			var map = this._map;
			if (!map) { return; }
			var zoom = map.getZoom();

			if (center === undefined) { center = map.getCenter(); }
			if (this._tileZoom === undefined) { return; }	// if out of minzoom/maxzoom

			var pixelBounds = this._getTiledPixelBounds(center),
			    tileRange = this._pxBoundsToTileRange(pixelBounds),
			    tileCenter = tileRange.getCenter(),
			    queue = [],
			    margin = this.options.keepBuffer,
			    noPruneRange = new L.Bounds(tileRange.getBottomLeft().subtract([margin, -margin]),
			                              tileRange.getTopRight().add([margin, -margin]));

			for (var key in this._tiles) {
				var c = this._tiles[key].coords;
				if (c.z !== this._tileZoom || !noPruneRange.contains(L.point(c.x, c.y))) {
					this._tiles[key].current = false;
				}
			}

			// _update just loads more tiles. If the tile zoom level differs too much
			// from the map's, let _setView reset levels and prune old tiles.
			if (Math.abs(zoom - this._tileZoom) > 1) { this._setView(center, zoom); return; }

			// create a queue of coordinates to load tiles from
			for (var j = tileRange.min.y; j <= tileRange.max.y; j++) {
				for (var i = tileRange.min.x; i <= tileRange.max.x; i++) {
					var coords = new L.Point(i, j);
					coords.z = this._tileZoom;

					if (!this._isValidTile(coords)) { continue; }

					var tile = this._tiles[this._tileCoordsToKey(coords)];
					if (tile) {
						tile.current = true;
					} else {
						queue.push(coords);
					}
				}
			}

			// sort tile queue to load tiles in order of their distance to center
			queue.sort(function (a, b) {
				return a.distanceTo(tileCenter) - b.distanceTo(tileCenter);
			});

			if (queue.length !== 0) {
				// if its the first batch of tiles to load
				if (!this._loading) {
					this._loading = true;
					// @event loading: Event
					// Fired when the grid layer starts loading tiles.
					this.fire('loading');
				}

				// create DOM fragment to append tiles in one batch
				var fragment = document.createDocumentFragment();

				for (i = 0; i < queue.length; i++) {
					this._addTile(queue[i], fragment);
				}

				this._level.el.appendChild(fragment);
			}
		},

		_isValidTile: function (coords) {
			var crs = this._map.options.crs;

			if (!crs.infinite) {
				// don't load tile if it's out of bounds and not wrapped
				var bounds = this._globalTileRange;
				if ((!crs.wrapLng && (coords.x < bounds.min.x || coords.x > bounds.max.x)) ||
				    (!crs.wrapLat && (coords.y < bounds.min.y || coords.y > bounds.max.y))) { return false; }
			}

			if (!this.options.bounds) { return true; }

			// don't load tile if it doesn't intersect the bounds in options
			var tileBounds = this._tileCoordsToBounds(coords);
			return L.latLngBounds(this.options.bounds).overlaps(tileBounds);
		},

		_keyToBounds: function (key) {
			return this._tileCoordsToBounds(this._keyToTileCoords(key));
		},

		// converts tile coordinates to its geographical bounds
		_tileCoordsToBounds: function (coords) {

			var map = this._map,
			    tileSize = this.getTileSize(),

			    nwPoint = coords.scaleBy(tileSize),
			    sePoint = nwPoint.add(tileSize),

			    nw = map.wrapLatLng(map.unproject(nwPoint, coords.z)),
			    se = map.wrapLatLng(map.unproject(sePoint, coords.z));

			return new L.LatLngBounds(nw, se);
		},

		// converts tile coordinates to key for the tile cache
		_tileCoordsToKey: function (coords) {
			return coords.x + ':' + coords.y + ':' + coords.z;
		},

		// converts tile cache key to coordinates
		_keyToTileCoords: function (key) {
			var k = key.split(':'),
			    coords = new L.Point(+k[0], +k[1]);
			coords.z = +k[2];
			return coords;
		},

		_removeTile: function (key) {
			var tile = this._tiles[key];
			if (!tile) { return; }

			L.DomUtil.remove(tile.el);

			delete this._tiles[key];

			// @event tileunload: TileEvent
			// Fired when a tile is removed (e.g. when a tile goes off the screen).
			this.fire('tileunload', {
				tile: tile.el,
				coords: this._keyToTileCoords(key)
			});
		},

		_initTile: function (tile) {
			L.DomUtil.addClass(tile, 'leaflet-tile');

			var tileSize = this.getTileSize();
			tile.style.width = tileSize.x + 'px';
			tile.style.height = tileSize.y + 'px';

			tile.onselectstart = L.Util.falseFn;
			tile.onmousemove = L.Util.falseFn;

			// update opacity on tiles in IE7-8 because of filter inheritance problems
			if (L.Browser.ielt9 && this.options.opacity < 1) {
				L.DomUtil.setOpacity(tile, this.options.opacity);
			}

			// without this hack, tiles disappear after zoom on Chrome for Android
			// https://github.com/Leaflet/Leaflet/issues/2078
			if (L.Browser.android && !L.Browser.android23) {
				tile.style.WebkitBackfaceVisibility = 'hidden';
			}
		},

		_addTile: function (coords, container) {
			var tilePos = this._getTilePos(coords),
			    key = this._tileCoordsToKey(coords);

			var tile = this.createTile(this._wrapCoords(coords), L.bind(this._tileReady, this, coords));

			this._initTile(tile);

			// if createTile is defined with a second argument ("done" callback),
			// we know that tile is async and will be ready later; otherwise
			if (this.createTile.length < 2) {
				// mark tile as ready, but delay one frame for opacity animation to happen
				L.Util.requestAnimFrame(L.bind(this._tileReady, this, coords, null, tile));
			}

			L.DomUtil.setPosition(tile, tilePos);

			// save tile in cache
			this._tiles[key] = {
				el: tile,
				coords: coords,
				current: true
			};

			container.appendChild(tile);
			// @event tileloadstart: TileEvent
			// Fired when a tile is requested and starts loading.
			this.fire('tileloadstart', {
				tile: tile,
				coords: coords
			});
		},

		_tileReady: function (coords, err, tile) {
			if (!this._map) { return; }

			if (err) {
				// @event tileerror: TileErrorEvent
				// Fired when there is an error loading a tile.
				this.fire('tileerror', {
					error: err,
					tile: tile,
					coords: coords
				});
			}

			var key = this._tileCoordsToKey(coords);

			tile = this._tiles[key];
			if (!tile) { return; }

			tile.loaded = +new Date();
			if (this._map._fadeAnimated) {
				L.DomUtil.setOpacity(tile.el, 0);
				L.Util.cancelAnimFrame(this._fadeFrame);
				this._fadeFrame = L.Util.requestAnimFrame(this._updateOpacity, this);
			} else {
				tile.active = true;
				this._pruneTiles();
			}

			L.DomUtil.addClass(tile.el, 'leaflet-tile-loaded');

			// @event tileload: TileEvent
			// Fired when a tile loads.
			this.fire('tileload', {
				tile: tile.el,
				coords: coords
			});

			if (this._noTilesToLoad()) {
				this._loading = false;
				// @event load: Event
				// Fired when the grid layer loaded all visible tiles.
				this.fire('load');

				if (L.Browser.ielt9 || !this._map._fadeAnimated) {
					L.Util.requestAnimFrame(this._pruneTiles, this);
				} else {
					// Wait a bit more than 0.2 secs (the duration of the tile fade-in)
					// to trigger a pruning.
					setTimeout(L.bind(this._pruneTiles, this), 250);
				}
			}
		},

		_getTilePos: function (coords) {
			return coords.scaleBy(this.getTileSize()).subtract(this._level.origin);
		},

		_wrapCoords: function (coords) {
			var newCoords = new L.Point(
				this._wrapX ? L.Util.wrapNum(coords.x, this._wrapX) : coords.x,
				this._wrapY ? L.Util.wrapNum(coords.y, this._wrapY) : coords.y);
			newCoords.z = coords.z;
			return newCoords;
		},

		_pxBoundsToTileRange: function (bounds) {
			var tileSize = this.getTileSize();
			return new L.Bounds(
				bounds.min.unscaleBy(tileSize).floor(),
				bounds.max.unscaleBy(tileSize).ceil().subtract([1, 1]));
		},

		_noTilesToLoad: function () {
			for (var key in this._tiles) {
				if (!this._tiles[key].loaded) { return false; }
			}
			return true;
		}
	});

	// @factory L.gridLayer(options?: GridLayer options)
	// Creates a new instance of GridLayer with the supplied options.
	L.gridLayer = function (options) {
		return new L.GridLayer(options);
	};



	/*
	 * @class TileLayer
	 * @inherits GridLayer
	 * @aka L.TileLayer
	 * Used to load and display tile layers on the map. Extends `GridLayer`.
	 *
	 * @example
	 *
	 * ```js
	 * L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar'}).addTo(map);
	 * ```
	 *
	 * @section URL template
	 * @example
	 *
	 * A string of the following form:
	 *
	 * ```
	 * 'http://{s}.somedomain.com/blabla/{z}/{x}/{y}{r}.png'
	 * ```
	 *
	 * `{s}` means one of the available subdomains (used sequentially to help with browser parallel requests per domain limitation; subdomain values are specified in options; `a`, `b` or `c` by default, can be omitted), `{z}` — zoom level, `{x}` and `{y}` — tile coordinates. `{r}` can be used to add @2x to the URL to load retina tiles.
	 *
	 * You can use custom keys in the template, which will be [evaluated](#util-template) from TileLayer options, like this:
	 *
	 * ```
	 * L.tileLayer('http://{s}.somedomain.com/{foo}/{z}/{x}/{y}.png', {foo: 'bar'});
	 * ```
	 */


	L.TileLayer = L.GridLayer.extend({

		// @section
		// @aka TileLayer options
		options: {
			// @option minZoom: Number = 0
			// Minimum zoom number.
			minZoom: 0,

			// @option maxZoom: Number = 18
			// Maximum zoom number.
			maxZoom: 18,

			// @option maxNativeZoom: Number = null
			// Maximum zoom number the tile source has available. If it is specified,
			// the tiles on all zoom levels higher than `maxNativeZoom` will be loaded
			// from `maxNativeZoom` level and auto-scaled.
			maxNativeZoom: null,

			// @option subdomains: String|String[] = 'abc'
			// Subdomains of the tile service. Can be passed in the form of one string (where each letter is a subdomain name) or an array of strings.
			subdomains: 'abc',

			// @option errorTileUrl: String = ''
			// URL to the tile image to show in place of the tile that failed to load.
			errorTileUrl: '',

			// @option zoomOffset: Number = 0
			// The zoom number used in tile URLs will be offset with this value.
			zoomOffset: 0,

			// @option tms: Boolean = false
			// If `true`, inverses Y axis numbering for tiles (turn this on for [TMS](https://en.wikipedia.org/wiki/Tile_Map_Service) services).
			tms: false,

			// @option zoomReverse: Boolean = false
			// If set to true, the zoom number used in tile URLs will be reversed (`maxZoom - zoom` instead of `zoom`)
			zoomReverse: false,

			// @option detectRetina: Boolean = false
			// If `true` and user is on a retina display, it will request four tiles of half the specified size and a bigger zoom level in place of one to utilize the high resolution.
			detectRetina: false,

			// @option crossOrigin: Boolean = false
			// If true, all tiles will have their crossOrigin attribute set to ''. This is needed if you want to access tile pixel data.
			crossOrigin: false
		},

		initialize: function (url, options) {

			this._url = url;

			options = L.setOptions(this, options);

			// detecting retina displays, adjusting tileSize and zoom levels
			if (options.detectRetina && L.Browser.retina && options.maxZoom > 0) {

				options.tileSize = Math.floor(options.tileSize / 2);

				if (!options.zoomReverse) {
					options.zoomOffset++;
					options.maxZoom--;
				} else {
					options.zoomOffset--;
					options.minZoom++;
				}

				options.minZoom = Math.max(0, options.minZoom);
			}

			if (typeof options.subdomains === 'string') {
				options.subdomains = options.subdomains.split('');
			}

			// for https://github.com/Leaflet/Leaflet/issues/137
			if (!L.Browser.android) {
				this.on('tileunload', this._onTileRemove);
			}
		},

		// @method setUrl(url: String, noRedraw?: Boolean): this
		// Updates the layer's URL template and redraws it (unless `noRedraw` is set to `true`).
		setUrl: function (url, noRedraw) {
			this._url = url;

			if (!noRedraw) {
				this.redraw();
			}
			return this;
		},

		// @method createTile(coords: Object, done?: Function): HTMLElement
		// Called only internally, overrides GridLayer's [`createTile()`](#gridlayer-createtile)
		// to return an `<img>` HTML element with the appropiate image URL given `coords`. The `done`
		// callback is called when the tile has been loaded.
		createTile: function (coords, done) {
			var tile = document.createElement('img');

			L.DomEvent.on(tile, 'load', L.bind(this._tileOnLoad, this, done, tile));
			L.DomEvent.on(tile, 'error', L.bind(this._tileOnError, this, done, tile));

			if (this.options.crossOrigin) {
				tile.crossOrigin = '';
			}

			/*
			 Alt tag is set to empty string to keep screen readers from reading URL and for compliance reasons
			 http://www.w3.org/TR/WCAG20-TECHS/H67
			*/
			tile.alt = '';

			tile.src = this.getTileUrl(coords);

			return tile;
		},

		// @section Extension methods
		// @uninheritable
		// Layers extending `TileLayer` might reimplement the following method.
		// @method getTileUrl(coords: Object): String
		// Called only internally, returns the URL for a tile given its coordinates.
		// Classes extending `TileLayer` can override this function to provide custom tile URL naming schemes.
		getTileUrl: function (coords) {
			var data = {
				r: L.Browser.retina ? '@2x' : '',
				s: this._getSubdomain(coords),
				x: coords.x,
				y: coords.y,
				z: this._getZoomForUrl()
			};
			if (this._map && !this._map.options.crs.infinite) {
				var invertedY = this._globalTileRange.max.y - coords.y;
				if (this.options.tms) {
					data['y'] = invertedY;
				}
				data['-y'] = invertedY;
			}

			return L.Util.template(this._url, L.extend(data, this.options));
		},

		_tileOnLoad: function (done, tile) {
			// For https://github.com/Leaflet/Leaflet/issues/3332
			if (L.Browser.ielt9) {
				setTimeout(L.bind(done, this, null, tile), 0);
			} else {
				done(null, tile);
			}
		},

		_tileOnError: function (done, tile, e) {
			var errorUrl = this.options.errorTileUrl;
			if (errorUrl) {
				tile.src = errorUrl;
			}
			done(e, tile);
		},

		getTileSize: function () {
			var map = this._map,
			    tileSize = L.GridLayer.prototype.getTileSize.call(this),
			    zoom = this._tileZoom + this.options.zoomOffset,
			    zoomN = this.options.maxNativeZoom;

			// increase tile size when overscaling
			return zoomN !== null && zoom > zoomN ?
					tileSize.divideBy(map.getZoomScale(zoomN, zoom)).round() :
					tileSize;
		},

		_onTileRemove: function (e) {
			e.tile.onload = null;
		},

		_getZoomForUrl: function () {

			var options = this.options,
			    zoom = this._tileZoom;

			if (options.zoomReverse) {
				zoom = options.maxZoom - zoom;
			}

			zoom += options.zoomOffset;

			return options.maxNativeZoom !== null ? Math.min(zoom, options.maxNativeZoom) : zoom;
		},

		_getSubdomain: function (tilePoint) {
			var index = Math.abs(tilePoint.x + tilePoint.y) % this.options.subdomains.length;
			return this.options.subdomains[index];
		},

		// stops loading all tiles in the background layer
		_abortLoading: function () {
			var i, tile;
			for (i in this._tiles) {
				if (this._tiles[i].coords.z !== this._tileZoom) {
					tile = this._tiles[i].el;

					tile.onload = L.Util.falseFn;
					tile.onerror = L.Util.falseFn;

					if (!tile.complete) {
						tile.src = L.Util.emptyImageUrl;
						L.DomUtil.remove(tile);
					}
				}
			}
		}
	});


	// @factory L.tilelayer(urlTemplate: String, options?: TileLayer options)
	// Instantiates a tile layer object given a `URL template` and optionally an options object.

	L.tileLayer = function (url, options) {
		return new L.TileLayer(url, options);
	};



	/*
	 * @class TileLayer.WMS
	 * @inherits TileLayer
	 * @aka L.TileLayer.WMS
	 * Used to display [WMS](https://en.wikipedia.org/wiki/Web_Map_Service) services as tile layers on the map. Extends `TileLayer`.
	 *
	 * @example
	 *
	 * ```js
	 * var nexrad = L.tileLayer.wms("http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi", {
	 * 	layers: 'nexrad-n0r-900913',
	 * 	format: 'image/png',
	 * 	transparent: true,
	 * 	attribution: "Weather data © 2012 IEM Nexrad"
	 * });
	 * ```
	 */

	L.TileLayer.WMS = L.TileLayer.extend({

		// @section
		// @aka TileLayer.WMS options
		// If any custom options not documented here are used, they will be sent to the
		// WMS server as extra parameters in each request URL. This can be useful for
		// [non-standard vendor WMS parameters](http://docs.geoserver.org/stable/en/user/services/wms/vendor.html).
		defaultWmsParams: {
			service: 'WMS',
			request: 'GetMap',

			// @option layers: String = ''
			// **(required)** Comma-separated list of WMS layers to show.
			layers: '',

			// @option styles: String = ''
			// Comma-separated list of WMS styles.
			styles: '',

			// @option format: String = 'image/jpeg'
			// WMS image format (use `'image/png'` for layers with transparency).
			format: 'image/jpeg',

			// @option transparent: Boolean = false
			// If `true`, the WMS service will return images with transparency.
			transparent: false,

			// @option version: String = '1.1.1'
			// Version of the WMS service to use
			version: '1.1.1'
		},

		options: {
			// @option crs: CRS = null
			// Coordinate Reference System to use for the WMS requests, defaults to
			// map CRS. Don't change this if you're not sure what it means.
			crs: null,

			// @option uppercase: Boolean = false
			// If `true`, WMS request parameter keys will be uppercase.
			uppercase: false
		},

		initialize: function (url, options) {

			this._url = url;

			var wmsParams = L.extend({}, this.defaultWmsParams);

			// all keys that are not TileLayer options go to WMS params
			for (var i in options) {
				if (!(i in this.options)) {
					wmsParams[i] = options[i];
				}
			}

			options = L.setOptions(this, options);

			wmsParams.width = wmsParams.height = options.tileSize * (options.detectRetina && L.Browser.retina ? 2 : 1);

			this.wmsParams = wmsParams;
		},

		onAdd: function (map) {

			this._crs = this.options.crs || map.options.crs;
			this._wmsVersion = parseFloat(this.wmsParams.version);

			var projectionKey = this._wmsVersion >= 1.3 ? 'crs' : 'srs';
			this.wmsParams[projectionKey] = this._crs.code;

			L.TileLayer.prototype.onAdd.call(this, map);
		},

		getTileUrl: function (coords) {

			var tileBounds = this._tileCoordsToBounds(coords),
			    nw = this._crs.project(tileBounds.getNorthWest()),
			    se = this._crs.project(tileBounds.getSouthEast()),

			    bbox = (this._wmsVersion >= 1.3 && this._crs === L.CRS.EPSG4326 ?
				    [se.y, nw.x, nw.y, se.x] :
				    [nw.x, se.y, se.x, nw.y]).join(','),

			    url = L.TileLayer.prototype.getTileUrl.call(this, coords);

			return url +
				L.Util.getParamString(this.wmsParams, url, this.options.uppercase) +
				(this.options.uppercase ? '&BBOX=' : '&bbox=') + bbox;
		},

		// @method setParams(params: Object, noRedraw?: Boolean): this
		// Merges an object with the new parameters and re-requests tiles on the current screen (unless `noRedraw` was set to true).
		setParams: function (params, noRedraw) {

			L.extend(this.wmsParams, params);

			if (!noRedraw) {
				this.redraw();
			}

			return this;
		}
	});


	// @factory L.tileLayer.wms(baseUrl: String, options: TileLayer.WMS options)
	// Instantiates a WMS tile layer object given a base URL of the WMS service and a WMS parameters/options object.
	L.tileLayer.wms = function (url, options) {
		return new L.TileLayer.WMS(url, options);
	};



	/*
	 * @class ImageOverlay
	 * @aka L.ImageOverlay
	 * @inherits Interactive layer
	 *
	 * Used to load and display a single image over specific bounds of the map. Extends `Layer`.
	 *
	 * @example
	 *
	 * ```js
	 * var imageUrl = 'http://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg',
	 * 	imageBounds = [[40.712216, -74.22655], [40.773941, -74.12544]];
	 * L.imageOverlay(imageUrl, imageBounds).addTo(map);
	 * ```
	 */

	L.ImageOverlay = L.Layer.extend({

		// @section
		// @aka ImageOverlay options
		options: {
			// @option opacity: Number = 1.0
			// The opacity of the image overlay.
			opacity: 1,

			// @option alt: String = ''
			// Text for the `alt` attribute of the image (useful for accessibility).
			alt: '',

			// @option interactive: Boolean = false
			// If `true`, the image overlay will emit [mouse events](#interactive-layer) when clicked or hovered.
			interactive: false,

			// @option attribution: String = null
			// An optional string containing HTML to be shown on the `Attribution control`
			attribution: null,

			// @option crossOrigin: Boolean = false
			// If true, the image will have its crossOrigin attribute set to ''. This is needed if you want to access image pixel data.
			crossOrigin: false
		},

		initialize: function (url, bounds, options) { // (String, LatLngBounds, Object)
			this._url = url;
			this._bounds = L.latLngBounds(bounds);

			L.setOptions(this, options);
		},

		onAdd: function () {
			if (!this._image) {
				this._initImage();

				if (this.options.opacity < 1) {
					this._updateOpacity();
				}
			}

			if (this.options.interactive) {
				L.DomUtil.addClass(this._image, 'leaflet-interactive');
				this.addInteractiveTarget(this._image);
			}

			this.getPane().appendChild(this._image);
			this._reset();
		},

		onRemove: function () {
			L.DomUtil.remove(this._image);
			if (this.options.interactive) {
				this.removeInteractiveTarget(this._image);
			}
		},

		// @method setOpacity(): this
		// Sets the opacity of the overlay.
		setOpacity: function (opacity) {
			this.options.opacity = opacity;

			if (this._image) {
				this._updateOpacity();
			}
			return this;
		},

		setStyle: function (styleOpts) {
			if (styleOpts.opacity) {
				this.setOpacity(styleOpts.opacity);
			}
			return this;
		},

		// @method bringToFront(): this
		// Brings the layer to the top of all overlays.
		bringToFront: function () {
			if (this._map) {
				L.DomUtil.toFront(this._image);
			}
			return this;
		},

		// @method bringToBack(): this
		// Brings the layer to the bottom of all overlays.
		bringToBack: function () {
			if (this._map) {
				L.DomUtil.toBack(this._image);
			}
			return this;
		},

		// @method setUrl(url: String): this
		// Changes the URL of the image.
		setUrl: function (url) {
			this._url = url;

			if (this._image) {
				this._image.src = url;
			}
			return this;
		},

		setBounds: function (bounds) {
			this._bounds = bounds;

			if (this._map) {
				this._reset();
			}
			return this;
		},

		getAttribution: function () {
			return this.options.attribution;
		},

		getEvents: function () {
			var events = {
				zoom: this._reset,
				viewreset: this._reset
			};

			if (this._zoomAnimated) {
				events.zoomanim = this._animateZoom;
			}

			return events;
		},

		getBounds: function () {
			return this._bounds;
		},

		getElement: function () {
			return this._image;
		},

		_initImage: function () {
			var img = this._image = L.DomUtil.create('img',
					'leaflet-image-layer ' + (this._zoomAnimated ? 'leaflet-zoom-animated' : ''));

			img.onselectstart = L.Util.falseFn;
			img.onmousemove = L.Util.falseFn;

			img.onload = L.bind(this.fire, this, 'load');

			if (this.options.crossOrigin) {
				img.crossOrigin = '';
			}

			img.src = this._url;
			img.alt = this.options.alt;
		},

		_animateZoom: function (e) {
			var scale = this._map.getZoomScale(e.zoom),
			    offset = this._map._latLngToNewLayerPoint(this._bounds.getNorthWest(), e.zoom, e.center);

			L.DomUtil.setTransform(this._image, offset, scale);
		},

		_reset: function () {
			var image = this._image,
			    bounds = new L.Bounds(
			        this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
			        this._map.latLngToLayerPoint(this._bounds.getSouthEast())),
			    size = bounds.getSize();

			L.DomUtil.setPosition(image, bounds.min);

			image.style.width  = size.x + 'px';
			image.style.height = size.y + 'px';
		},

		_updateOpacity: function () {
			L.DomUtil.setOpacity(this._image, this.options.opacity);
		}
	});

	// @factory L.imageOverlay(imageUrl: String, bounds: LatLngBounds, options?: ImageOverlay options)
	// Instantiates an image overlay object given the URL of the image and the
	// geographical bounds it is tied to.
	L.imageOverlay = function (url, bounds, options) {
		return new L.ImageOverlay(url, bounds, options);
	};



	/*
	 * @class Icon
	 * @aka L.Icon
	 * @inherits Layer
	 *
	 * Represents an icon to provide when creating a marker.
	 *
	 * @example
	 *
	 * ```js
	 * var myIcon = L.icon({
	 *     iconUrl: 'my-icon.png',
	 *     iconRetinaUrl: 'my-icon@2x.png',
	 *     iconSize: [38, 95],
	 *     iconAnchor: [22, 94],
	 *     popupAnchor: [-3, -76],
	 *     shadowUrl: 'my-icon-shadow.png',
	 *     shadowRetinaUrl: 'my-icon-shadow@2x.png',
	 *     shadowSize: [68, 95],
	 *     shadowAnchor: [22, 94]
	 * });
	 *
	 * L.marker([50.505, 30.57], {icon: myIcon}).addTo(map);
	 * ```
	 *
	 * `L.Icon.Default` extends `L.Icon` and is the blue icon Leaflet uses for markers by default.
	 *
	 */

	L.Icon = L.Class.extend({

		/* @section
		 * @aka Icon options
		 *
		 * @option iconUrl: String = null
		 * **(required)** The URL to the icon image (absolute or relative to your script path).
		 *
		 * @option iconRetinaUrl: String = null
		 * The URL to a retina sized version of the icon image (absolute or relative to your
		 * script path). Used for Retina screen devices.
		 *
		 * @option iconSize: Point = null
		 * Size of the icon image in pixels.
		 *
		 * @option iconAnchor: Point = null
		 * The coordinates of the "tip" of the icon (relative to its top left corner). The icon
		 * will be aligned so that this point is at the marker's geographical location. Centered
		 * by default if size is specified, also can be set in CSS with negative margins.
		 *
		 * @option popupAnchor: Point = null
		 * The coordinates of the point from which popups will "open", relative to the icon anchor.
		 *
		 * @option shadowUrl: String = null
		 * The URL to the icon shadow image. If not specified, no shadow image will be created.
		 *
		 * @option shadowRetinaUrl: String = null
		 *
		 * @option shadowSize: Point = null
		 * Size of the shadow image in pixels.
		 *
		 * @option shadowAnchor: Point = null
		 * The coordinates of the "tip" of the shadow (relative to its top left corner) (the same
		 * as iconAnchor if not specified).
		 *
		 * @option className: String = ''
		 * A custom class name to assign to both icon and shadow images. Empty by default.
		 */

		initialize: function (options) {
			L.setOptions(this, options);
		},

		// @method createIcon(oldIcon?: HTMLElement): HTMLElement
		// Called internally when the icon has to be shown, returns a `<img>` HTML element
		// styled according to the options.
		createIcon: function (oldIcon) {
			return this._createIcon('icon', oldIcon);
		},

		// @method createShadow(oldIcon?: HTMLElement): HTMLElement
		// As `createIcon`, but for the shadow beneath it.
		createShadow: function (oldIcon) {
			return this._createIcon('shadow', oldIcon);
		},

		_createIcon: function (name, oldIcon) {
			var src = this._getIconUrl(name);

			if (!src) {
				if (name === 'icon') {
					throw new Error('iconUrl not set in Icon options (see the docs).');
				}
				return null;
			}

			var img = this._createImg(src, oldIcon && oldIcon.tagName === 'IMG' ? oldIcon : null);
			this._setIconStyles(img, name);

			return img;
		},

		_setIconStyles: function (img, name) {
			var options = this.options;
			var sizeOption = options[name + 'Size'];

			if (typeof sizeOption === 'number') {
				sizeOption = [sizeOption, sizeOption];
			}

			var size = L.point(sizeOption),
			    anchor = L.point(name === 'shadow' && options.shadowAnchor || options.iconAnchor ||
			            size && size.divideBy(2, true));

			img.className = 'leaflet-marker-' + name + ' ' + (options.className || '');

			if (anchor) {
				img.style.marginLeft = (-anchor.x) + 'px';
				img.style.marginTop  = (-anchor.y) + 'px';
			}

			if (size) {
				img.style.width  = size.x + 'px';
				img.style.height = size.y + 'px';
			}
		},

		_createImg: function (src, el) {
			el = el || document.createElement('img');
			el.src = src;
			return el;
		},

		_getIconUrl: function (name) {
			return L.Browser.retina && this.options[name + 'RetinaUrl'] || this.options[name + 'Url'];
		}
	});


	// @factory L.icon(options: Icon options)
	// Creates an icon instance with the given options.
	L.icon = function (options) {
		return new L.Icon(options);
	};



	/*
	 * L.Icon.Default is the blue marker icon used by default in Leaflet.
	 */

	L.Icon.Default = L.Icon.extend({

		options: {
			iconSize:    [25, 41],
			iconAnchor:  [12, 41],
			popupAnchor: [1, -34],
			tooltipAnchor: [16, -28],
			shadowSize:  [41, 41]
		},

		_getIconUrl: function (name) {
			var key = name + 'Url';

			if (this.options[key]) {
				return this.options[key];
			}

			var path = L.Icon.Default.imagePath;

			if (!path) {
				throw new Error('Couldn\'t autodetect L.Icon.Default.imagePath, set it manually.');
			}

			return path + '/marker-' + name + (L.Browser.retina && name === 'icon' ? '-2x' : '') + '.png';
		}
	});

	L.Icon.Default.imagePath = (function () {
		var scripts = document.getElementsByTagName('script'),
		    leafletRe = /[\/^]leaflet[\-\._]?([\w\-\._]*)\.js\??/;

		var i, len, src, path;

		for (i = 0, len = scripts.length; i < len; i++) {
			src = scripts[i].src || '';

			if (src.match(leafletRe)) {
				path = src.split(leafletRe)[0];
				return (path ? path + '/' : '') + 'images';
			}
		}
	}());



	/*
	 * @class Marker
	 * @inherits Interactive layer
	 * @aka L.Marker
	 * L.Marker is used to display clickable/draggable icons on the map. Extends `Layer`.
	 *
	 * @example
	 *
	 * ```js
	 * L.marker([50.5, 30.5]).addTo(map);
	 * ```
	 */

	L.Marker = L.Layer.extend({

		// @section
		// @aka Marker options
		options: {
			// @option icon: Icon = *
			// Icon class to use for rendering the marker. See [Icon documentation](#L.Icon) for details on how to customize the marker icon. Set to new `L.Icon.Default()` by default.
			icon: new L.Icon.Default(),

			// Option inherited from "Interactive layer" abstract class
			interactive: true,

			// @option draggable: Boolean = false
			// Whether the marker is draggable with mouse/touch or not.
			draggable: false,

			// @option keyboard: Boolean = true
			// Whether the marker can be tabbed to with a keyboard and clicked by pressing enter.
			keyboard: true,

			// @option title: String = ''
			// Text for the browser tooltip that appear on marker hover (no tooltip by default).
			title: '',

			// @option alt: String = ''
			// Text for the `alt` attribute of the icon image (useful for accessibility).
			alt: '',

			// @option zIndexOffset: Number = 0
			// By default, marker images zIndex is set automatically based on its latitude. Use this option if you want to put the marker on top of all others (or below), specifying a high value like `1000` (or high negative value, respectively).
			zIndexOffset: 0,

			// @option opacity: Number = 1.0
			// The opacity of the marker.
			opacity: 1,

			// @option riseOnHover: Boolean = false
			// If `true`, the marker will get on top of others when you hover the mouse over it.
			riseOnHover: false,

			// @option riseOffset: Number = 250
			// The z-index offset used for the `riseOnHover` feature.
			riseOffset: 250,

			// @option pane: String = 'markerPane'
			// `Map pane` where the markers icon will be added.
			pane: 'markerPane',

			// FIXME: shadowPane is no longer a valid option
			nonBubblingEvents: ['click', 'dblclick', 'mouseover', 'mouseout', 'contextmenu']
		},

		/* @section
		 *
		 * In addition to [shared layer methods](#Layer) like `addTo()` and `remove()` and [popup methods](#Popup) like bindPopup() you can also use the following methods:
		 */

		initialize: function (latlng, options) {
			L.setOptions(this, options);
			this._latlng = L.latLng(latlng);
		},

		onAdd: function (map) {
			this._zoomAnimated = this._zoomAnimated && map.options.markerZoomAnimation;

			if (this._zoomAnimated) {
				map.on('zoomanim', this._animateZoom, this);
			}

			this._initIcon();
			this.update();
		},

		onRemove: function (map) {
			if (this.dragging && this.dragging.enabled()) {
				this.options.draggable = true;
				this.dragging.removeHooks();
			}

			if (this._zoomAnimated) {
				map.off('zoomanim', this._animateZoom, this);
			}

			this._removeIcon();
			this._removeShadow();
		},

		getEvents: function () {
			return {
				zoom: this.update,
				viewreset: this.update
			};
		},

		// @method getLatLng: LatLng
		// Returns the current geographical position of the marker.
		getLatLng: function () {
			return this._latlng;
		},

		// @method setLatLng(latlng: LatLng): this
		// Changes the marker position to the given point.
		setLatLng: function (latlng) {
			var oldLatLng = this._latlng;
			this._latlng = L.latLng(latlng);
			this.update();

			// @event move: Event
			// Fired when the marker is moved via [`setLatLng`](#marker-setlatlng) or by [dragging](#marker-dragging). Old and new coordinates are included in event arguments as `oldLatLng`, `latlng`.
			return this.fire('move', {oldLatLng: oldLatLng, latlng: this._latlng});
		},

		// @method setZIndexOffset(offset: Number): this
		// Changes the [zIndex offset](#marker-zindexoffset) of the marker.
		setZIndexOffset: function (offset) {
			this.options.zIndexOffset = offset;
			return this.update();
		},

		// @method setIcon(icon: Icon): this
		// Changes the marker icon.
		setIcon: function (icon) {

			this.options.icon = icon;

			if (this._map) {
				this._initIcon();
				this.update();
			}

			if (this._popup) {
				this.bindPopup(this._popup, this._popup.options);
			}

			return this;
		},

		getElement: function () {
			return this._icon;
		},

		update: function () {

			if (this._icon) {
				var pos = this._map.latLngToLayerPoint(this._latlng).round();
				this._setPos(pos);
			}

			return this;
		},

		_initIcon: function () {
			var options = this.options,
			    classToAdd = 'leaflet-zoom-' + (this._zoomAnimated ? 'animated' : 'hide');

			var icon = options.icon.createIcon(this._icon),
			    addIcon = false;

			// if we're not reusing the icon, remove the old one and init new one
			if (icon !== this._icon) {
				if (this._icon) {
					this._removeIcon();
				}
				addIcon = true;

				if (options.title) {
					icon.title = options.title;
				}
				if (options.alt) {
					icon.alt = options.alt;
				}
			}

			L.DomUtil.addClass(icon, classToAdd);

			if (options.keyboard) {
				icon.tabIndex = '0';
			}

			this._icon = icon;

			if (options.riseOnHover) {
				this.on({
					mouseover: this._bringToFront,
					mouseout: this._resetZIndex
				});
			}

			var newShadow = options.icon.createShadow(this._shadow),
			    addShadow = false;

			if (newShadow !== this._shadow) {
				this._removeShadow();
				addShadow = true;
			}

			if (newShadow) {
				L.DomUtil.addClass(newShadow, classToAdd);
			}
			this._shadow = newShadow;


			if (options.opacity < 1) {
				this._updateOpacity();
			}


			if (addIcon) {
				this.getPane().appendChild(this._icon);
			}
			this._initInteraction();
			if (newShadow && addShadow) {
				this.getPane('shadowPane').appendChild(this._shadow);
			}
		},

		_removeIcon: function () {
			if (this.options.riseOnHover) {
				this.off({
					mouseover: this._bringToFront,
					mouseout: this._resetZIndex
				});
			}

			L.DomUtil.remove(this._icon);
			this.removeInteractiveTarget(this._icon);

			this._icon = null;
		},

		_removeShadow: function () {
			if (this._shadow) {
				L.DomUtil.remove(this._shadow);
			}
			this._shadow = null;
		},

		_setPos: function (pos) {
			L.DomUtil.setPosition(this._icon, pos);

			if (this._shadow) {
				L.DomUtil.setPosition(this._shadow, pos);
			}

			this._zIndex = pos.y + this.options.zIndexOffset;

			this._resetZIndex();
		},

		_updateZIndex: function (offset) {
			this._icon.style.zIndex = this._zIndex + offset;
		},

		_animateZoom: function (opt) {
			var pos = this._map._latLngToNewLayerPoint(this._latlng, opt.zoom, opt.center).round();

			this._setPos(pos);
		},

		_initInteraction: function () {

			if (!this.options.interactive) { return; }

			L.DomUtil.addClass(this._icon, 'leaflet-interactive');

			this.addInteractiveTarget(this._icon);

			if (L.Handler.MarkerDrag) {
				var draggable = this.options.draggable;
				if (this.dragging) {
					draggable = this.dragging.enabled();
					this.dragging.disable();
				}

				this.dragging = new L.Handler.MarkerDrag(this);

				if (draggable) {
					this.dragging.enable();
				}
			}
		},

		// @method setOpacity(opacity: Number): this
		// Changes the opacity of the marker.
		setOpacity: function (opacity) {
			this.options.opacity = opacity;
			if (this._map) {
				this._updateOpacity();
			}

			return this;
		},

		_updateOpacity: function () {
			var opacity = this.options.opacity;

			L.DomUtil.setOpacity(this._icon, opacity);

			if (this._shadow) {
				L.DomUtil.setOpacity(this._shadow, opacity);
			}
		},

		_bringToFront: function () {
			this._updateZIndex(this.options.riseOffset);
		},

		_resetZIndex: function () {
			this._updateZIndex(0);
		}
	});


	// factory L.marker(latlng: LatLng, options? : Marker options)

	// @factory L.marker(latlng: LatLng, options? : Marker options)
	// Instantiates a Marker object given a geographical point and optionally an options object.
	L.marker = function (latlng, options) {
		return new L.Marker(latlng, options);
	};



	/*
	 * @class DivIcon
	 * @aka L.DivIcon
	 * @inherits Icon
	 *
	 * Represents a lightweight icon for markers that uses a simple `<div>`
	 * element instead of an image. Inherits from `Icon` but ignores the `iconUrl` and shadow options.
	 *
	 * @example
	 * ```js
	 * var myIcon = L.divIcon({className: 'my-div-icon'});
	 * // you can set .my-div-icon styles in CSS
	 *
	 * L.marker([50.505, 30.57], {icon: myIcon}).addTo(map);
	 * ```
	 *
	 * By default, it has a 'leaflet-div-icon' CSS class and is styled as a little white square with a shadow.
	 */

	L.DivIcon = L.Icon.extend({
		options: {
			// @section
			// @aka DivIcon options
			iconSize: [12, 12], // also can be set through CSS

			// iconAnchor: (Point),
			// popupAnchor: (Point),

			// @option html: String = ''
			// Custom HTML code to put inside the div element, empty by default.
			html: false,

			// @option bgPos: Point = [0, 0]
			// Optional relative position of the background, in pixels
			bgPos: null,

			className: 'leaflet-div-icon'
		},

		createIcon: function (oldIcon) {
			var div = (oldIcon && oldIcon.tagName === 'DIV') ? oldIcon : document.createElement('div'),
			    options = this.options;

			div.innerHTML = options.html !== false ? options.html : '';

			if (options.bgPos) {
				var bgPos = L.point(options.bgPos);
				div.style.backgroundPosition = (-bgPos.x) + 'px ' + (-bgPos.y) + 'px';
			}
			this._setIconStyles(div, 'icon');

			return div;
		},

		createShadow: function () {
			return null;
		}
	});

	// @factory L.divIcon(options: DivIcon options)
	// Creates a `DivIcon` instance with the given options.
	L.divIcon = function (options) {
		return new L.DivIcon(options);
	};



	/*
	 * @class DivOverlay
	 * @inherits Layer
	 * @aka L.DivOverlay
	 * Base model for L.Popup and L.Tooltip. Inherit from it for custom popup like plugins.
	 */

	// @namespace DivOverlay
	L.DivOverlay = L.Layer.extend({

		// @section
		// @aka DivOverlay options
		options: {
			// @option offset: Point = Point(0, 7)
			// The offset of the popup position. Useful to control the anchor
			// of the popup when opening it on some overlays.
			offset: [0, 7],

			// @option zoomAnimation: Boolean = true
			// Whether to animate the popup on zoom. Disable it if you have
			// problems with Flash content inside popups.
			zoomAnimation: true,

			// @option className: String = ''
			// A custom CSS class name to assign to the popup.
			className: '',

			// @option pane: String = 'popupPane'
			// `Map pane` where the popup will be added.
			pane: 'popupPane'
		},

		initialize: function (options, source) {
			L.setOptions(this, options);

			this._source = source;
		},

		onAdd: function (map) {
			this._zoomAnimated = this._zoomAnimated && this.options.zoomAnimation;

			if (!this._container) {
				this._initLayout();
			}

			if (map._fadeAnimated) {
				L.DomUtil.setOpacity(this._container, 0);
			}

			clearTimeout(this._removeTimeout);
			this.getPane().appendChild(this._container);
			this.update();

			if (map._fadeAnimated) {
				L.DomUtil.setOpacity(this._container, 1);
			}

			this.bringToFront();
		},

		onRemove: function (map) {
			if (map._fadeAnimated) {
				L.DomUtil.setOpacity(this._container, 0);
				this._removeTimeout = setTimeout(L.bind(L.DomUtil.remove, L.DomUtil, this._container), 200);
			} else {
				L.DomUtil.remove(this._container);
			}
		},

		// @namespace Popup
		// @method getLatLng: LatLng
		// Returns the geographical point of popup.
		getLatLng: function () {
			return this._latlng;
		},

		// @method setLatLng(latlng: LatLng): this
		// Sets the geographical point where the popup will open.
		setLatLng: function (latlng) {
			this._latlng = L.latLng(latlng);
			if (this._map) {
				this._updatePosition();
				this._adjustPan();
			}
			return this;
		},

		// @method getContent: String|HTMLElement
		// Returns the content of the popup.
		getContent: function () {
			return this._content;
		},

		// @method setContent(htmlContent: String|HTMLElement|Function): this
		// Sets the HTML content of the popup. If a function is passed the source layer will be passed to the function. The function should return a `String` or `HTMLElement` to be used in the popup.
		setContent: function (content) {
			this._content = content;
			this.update();
			return this;
		},

		// @method getElement: String|HTMLElement
		// Alias for [getContent()](#popup-getcontent)
		getElement: function () {
			return this._container;
		},

		// @method update: null
		// Updates the popup content, layout and position. Useful for updating the popup after something inside changed, e.g. image loaded.
		update: function () {
			if (!this._map) { return; }

			this._container.style.visibility = 'hidden';

			this._updateContent();
			this._updateLayout();
			this._updatePosition();

			this._container.style.visibility = '';

			this._adjustPan();
		},

		getEvents: function () {
			var events = {
				zoom: this._updatePosition,
				viewreset: this._updatePosition
			};

			if (this._zoomAnimated) {
				events.zoomanim = this._animateZoom;
			}
			return events;
		},

		// @method isOpen: Boolean
		// Returns `true` when the popup is visible on the map.
		isOpen: function () {
			return !!this._map && this._map.hasLayer(this);
		},

		// @method bringToFront: this
		// Brings this popup in front of other popups (in the same map pane).
		bringToFront: function () {
			if (this._map) {
				L.DomUtil.toFront(this._container);
			}
			return this;
		},

		// @method bringToBack: this
		// Brings this popup to the back of other popups (in the same map pane).
		bringToBack: function () {
			if (this._map) {
				L.DomUtil.toBack(this._container);
			}
			return this;
		},

		_updateContent: function () {
			if (!this._content) { return; }

			var node = this._contentNode;
			var content = (typeof this._content === 'function') ? this._content(this._source || this) : this._content;

			if (typeof content === 'string') {
				node.innerHTML = content;
			} else {
				while (node.hasChildNodes()) {
					node.removeChild(node.firstChild);
				}
				node.appendChild(content);
			}
			this.fire('contentupdate');
		},

		_updatePosition: function () {
			if (!this._map) { return; }

			var pos = this._map.latLngToLayerPoint(this._latlng),
			    offset = L.point(this.options.offset),
			    anchor = this._getAnchor();

			if (this._zoomAnimated) {
				L.DomUtil.setPosition(this._container, pos.add(anchor));
			} else {
				offset = offset.add(pos).add(anchor);
			}

			var bottom = this._containerBottom = -offset.y,
			    left = this._containerLeft = -Math.round(this._containerWidth / 2) + offset.x;

			// bottom position the popup in case the height of the popup changes (images loading etc)
			this._container.style.bottom = bottom + 'px';
			this._container.style.left = left + 'px';
		},

		_getAnchor: function () {
			return [0, 0];
		}

	});



	/*
	 * @class Popup
	 * @inherits DivOverlay
	 * @aka L.Popup
	 * Used to open popups in certain places of the map. Use [Map.openPopup](#map-openpopup) to
	 * open popups while making sure that only one popup is open at one time
	 * (recommended for usability), or use [Map.addLayer](#map-addlayer) to open as many as you want.
	 *
	 * @example
	 *
	 * If you want to just bind a popup to marker click and then open it, it's really easy:
	 *
	 * ```js
	 * marker.bindPopup(popupContent).openPopup();
	 * ```
	 * Path overlays like polylines also have a `bindPopup` method.
	 * Here's a more complicated way to open a popup on a map:
	 *
	 * ```js
	 * var popup = L.popup()
	 * 	.setLatLng(latlng)
	 * 	.setContent('<p>Hello world!<br />This is a nice popup.</p>')
	 * 	.openOn(map);
	 * ```
	 */


	// @namespace Popup
	L.Popup = L.DivOverlay.extend({

		// @section
		// @aka Popup options
		options: {
			// @option maxWidth: Number = 300
			// Max width of the popup, in pixels.
			maxWidth: 300,

			// @option minWidth: Number = 50
			// Min width of the popup, in pixels.
			minWidth: 50,

			// @option maxHeight: Number = null
			// If set, creates a scrollable container of the given height
			// inside a popup if its content exceeds it.
			maxHeight: null,

			// @option autoPan: Boolean = true
			// Set it to `false` if you don't want the map to do panning animation
			// to fit the opened popup.
			autoPan: true,

			// @option autoPanPaddingTopLeft: Point = null
			// The margin between the popup and the top left corner of the map
			// view after autopanning was performed.
			autoPanPaddingTopLeft: null,

			// @option autoPanPaddingBottomRight: Point = null
			// The margin between the popup and the bottom right corner of the map
			// view after autopanning was performed.
			autoPanPaddingBottomRight: null,

			// @option autoPanPadding: Point = Point(5, 5)
			// Equivalent of setting both top left and bottom right autopan padding to the same value.
			autoPanPadding: [5, 5],

			// @option keepInView: Boolean = false
			// Set it to `true` if you want to prevent users from panning the popup
			// off of the screen while it is open.
			keepInView: false,

			// @option closeButton: Boolean = true
			// Controls the presence of a close button in the popup.
			closeButton: true,

			// @option autoClose: Boolean = true
			// Set it to `false` if you want to override the default behavior of
			// the popup closing when user clicks the map (set globally by
			// the Map's [closePopupOnClick](#map-closepopuponclick) option).
			autoClose: true
		},

		// @namespace Popup
		// @method openOn(map: Map): this
		// Adds the popup to the map and closes the previous one. The same as `map.openPopup(popup)`.
		openOn: function (map) {
			map.openPopup(this);
			return this;
		},

		onAdd: function (map) {
			L.DivOverlay.prototype.onAdd.call(this, map);

			// @namespace Map
			// @section Popup events
			// @event popupopen: PopupEvent
			// Fired when a popup is opened in the map
			map.fire('popupopen', {popup: this});

			if (this._source) {
				// @namespace Layer
				// @section Popup events
				// @event popupopen: PopupEvent
				// Fired when a popup bound to this layer is opened
				this._source.fire('popupopen', {popup: this}, true);
				// For non-path layers, we toggle the popup when clicking
				// again the layer, so prevent the map to reopen it.
				if (!(this._source instanceof L.Path)) {
					this._source.on('preclick', L.DomEvent.stopPropagation);
				}
			}
		},

		onRemove: function (map) {
			L.DivOverlay.prototype.onRemove.call(this, map);

			// @namespace Map
			// @section Popup events
			// @event popupclose: PopupEvent
			// Fired when a popup in the map is closed
			map.fire('popupclose', {popup: this});

			if (this._source) {
				// @namespace Layer
				// @section Popup events
				// @event popupclose: PopupEvent
				// Fired when a popup bound to this layer is closed
				this._source.fire('popupclose', {popup: this}, true);
				if (!(this._source instanceof L.Path)) {
					this._source.off('preclick', L.DomEvent.stopPropagation);
				}
			}
		},

		getEvents: function () {
			var events = L.DivOverlay.prototype.getEvents.call(this);

			if ('closeOnClick' in this.options ? this.options.closeOnClick : this._map.options.closePopupOnClick) {
				events.preclick = this._close;
			}

			if (this.options.keepInView) {
				events.moveend = this._adjustPan;
			}

			return events;
		},

		_close: function () {
			if (this._map) {
				this._map.closePopup(this);
			}
		},

		_initLayout: function () {
			var prefix = 'leaflet-popup',
			    container = this._container = L.DomUtil.create('div',
				prefix + ' ' + (this.options.className || '') +
				' leaflet-zoom-' + (this._zoomAnimated ? 'animated' : 'hide'));

			if (this.options.closeButton) {
				var closeButton = this._closeButton = L.DomUtil.create('a', prefix + '-close-button', container);
				closeButton.href = '#close';
				closeButton.innerHTML = '&#215;';

				L.DomEvent.on(closeButton, 'click', this._onCloseButtonClick, this);
			}

			var wrapper = this._wrapper = L.DomUtil.create('div', prefix + '-content-wrapper', container);
			this._contentNode = L.DomUtil.create('div', prefix + '-content', wrapper);

			L.DomEvent
				.disableClickPropagation(wrapper)
				.disableScrollPropagation(this._contentNode)
				.on(wrapper, 'contextmenu', L.DomEvent.stopPropagation);

			this._tipContainer = L.DomUtil.create('div', prefix + '-tip-container', container);
			this._tip = L.DomUtil.create('div', prefix + '-tip', this._tipContainer);
		},

		_updateLayout: function () {
			var container = this._contentNode,
			    style = container.style;

			style.width = '';
			style.whiteSpace = 'nowrap';

			var width = container.offsetWidth;
			width = Math.min(width, this.options.maxWidth);
			width = Math.max(width, this.options.minWidth);

			style.width = (width + 1) + 'px';
			style.whiteSpace = '';

			style.height = '';

			var height = container.offsetHeight,
			    maxHeight = this.options.maxHeight,
			    scrolledClass = 'leaflet-popup-scrolled';

			if (maxHeight && height > maxHeight) {
				style.height = maxHeight + 'px';
				L.DomUtil.addClass(container, scrolledClass);
			} else {
				L.DomUtil.removeClass(container, scrolledClass);
			}

			this._containerWidth = this._container.offsetWidth;
		},

		_animateZoom: function (e) {
			var pos = this._map._latLngToNewLayerPoint(this._latlng, e.zoom, e.center),
			    anchor = this._getAnchor();
			L.DomUtil.setPosition(this._container, pos.add(anchor));
		},

		_adjustPan: function () {
			if (!this.options.autoPan || (this._map._panAnim && this._map._panAnim._inProgress)) { return; }

			var map = this._map,
			    marginBottom = parseInt(L.DomUtil.getStyle(this._container, 'marginBottom'), 10) || 0,
			    containerHeight = this._container.offsetHeight + marginBottom,
			    containerWidth = this._containerWidth,
			    layerPos = new L.Point(this._containerLeft, -containerHeight - this._containerBottom);

			if (this._zoomAnimated) {
				layerPos._add(L.DomUtil.getPosition(this._container));
			}

			var containerPos = map.layerPointToContainerPoint(layerPos),
			    padding = L.point(this.options.autoPanPadding),
			    paddingTL = L.point(this.options.autoPanPaddingTopLeft || padding),
			    paddingBR = L.point(this.options.autoPanPaddingBottomRight || padding),
			    size = map.getSize(),
			    dx = 0,
			    dy = 0;

			if (containerPos.x + containerWidth + paddingBR.x > size.x) { // right
				dx = containerPos.x + containerWidth - size.x + paddingBR.x;
			}
			if (containerPos.x - dx - paddingTL.x < 0) { // left
				dx = containerPos.x - paddingTL.x;
			}
			if (containerPos.y + containerHeight + paddingBR.y > size.y) { // bottom
				dy = containerPos.y + containerHeight - size.y + paddingBR.y;
			}
			if (containerPos.y - dy - paddingTL.y < 0) { // top
				dy = containerPos.y - paddingTL.y;
			}

			// @namespace Map
			// @section Popup events
			// @event autopanstart: Event
			// Fired when the map starts autopanning when opening a popup.
			if (dx || dy) {
				map
				    .fire('autopanstart')
				    .panBy([dx, dy]);
			}
		},

		_onCloseButtonClick: function (e) {
			this._close();
			L.DomEvent.stop(e);
		},

		_getAnchor: function () {
			// Where should we anchor the popup on the source layer?
			return L.point(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
		}

	});

	// @namespace Popup
	// @factory L.popup(options?: Popup options, source?: Layer)
	// Instantiates a `Popup` object given an optional `options` object that describes its appearance and location and an optional `source` object that is used to tag the popup with a reference to the Layer to which it refers.
	L.popup = function (options, source) {
		return new L.Popup(options, source);
	};


	/* @namespace Map
	 * @section Interaction Options
	 * @option closePopupOnClick: Boolean = true
	 * Set it to `false` if you don't want popups to close when user clicks the map.
	 */
	L.Map.mergeOptions({
		closePopupOnClick: true
	});


	// @namespace Map
	// @section Methods for Layers and Controls
	L.Map.include({
		// @method openPopup(popup: Popup): this
		// Opens the specified popup while closing the previously opened (to make sure only one is opened at one time for usability).
		// @alternative
		// @method openPopup(content: String|HTMLElement, latlng: LatLng, options?: Popup options): this
		// Creates a popup with the specified content and options and opens it in the given point on a map.
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

			if (this._popup && this._popup.options.autoClose) {
				this.closePopup();
			}

			this._popup = popup;
			return this.addLayer(popup);
		},

		// @method closePopup(popup?: Popup): this
		// Closes the popup previously opened with [openPopup](#map-openpopup) (or the given one).
		closePopup: function (popup) {
			if (!popup || popup === this._popup) {
				popup = this._popup;
				this._popup = null;
			}
			if (popup) {
				this.removeLayer(popup);
			}
			return this;
		}
	});



	/*
	 * @namespace Layer
	 * @section Popup methods example
	 *
	 * All layers share a set of methods convenient for binding popups to it.
	 *
	 * ```js
	 * var layer = L.Polygon(latlngs).bindPopup('Hi There!').addTo(map);
	 * layer.openPopup();
	 * layer.closePopup();
	 * ```
	 *
	 * Popups will also be automatically opened when the layer is clicked on and closed when the layer is removed from the map or another popup is opened.
	 */

	// @section Popup methods
	L.Layer.include({

		// @method bindPopup(content: String|HTMLElement|Function|Popup, options?: Popup options): this
		// Binds a popup to the layer with the passed `content` and sets up the
		// neccessary event listeners. If a `Function` is passed it will receive
		// the layer as the first argument and should return a `String` or `HTMLElement`.
		bindPopup: function (content, options) {

			if (content instanceof L.Popup) {
				L.setOptions(content, options);
				this._popup = content;
				content._source = this;
			} else {
				if (!this._popup || options) {
					this._popup = new L.Popup(options, this);
				}
				this._popup.setContent(content);
			}

			if (!this._popupHandlersAdded) {
				this.on({
					click: this._openPopup,
					remove: this.closePopup,
					move: this._movePopup
				});
				this._popupHandlersAdded = true;
			}

			return this;
		},

		// @method unbindPopup(): this
		// Removes the popup previously bound with `bindPopup`.
		unbindPopup: function () {
			if (this._popup) {
				this.off({
					click: this._openPopup,
					remove: this.closePopup,
					move: this._movePopup
				});
				this._popupHandlersAdded = false;
				this._popup = null;
			}
			return this;
		},

		// @method openPopup(latlng?: LatLng): this
		// Opens the bound popup at the specificed `latlng` or at the default popup anchor if no `latlng` is passed.
		openPopup: function (layer, latlng) {
			if (!(layer instanceof L.Layer)) {
				latlng = layer;
				layer = this;
			}

			if (layer instanceof L.FeatureGroup) {
				for (var id in this._layers) {
					layer = this._layers[id];
					break;
				}
			}

			if (!latlng) {
				latlng = layer.getCenter ? layer.getCenter() : layer.getLatLng();
			}

			if (this._popup && this._map) {
				// set popup source to this layer
				this._popup._source = layer;

				// update the popup (content, layout, ect...)
				this._popup.update();

				// open the popup on the map
				this._map.openPopup(this._popup, latlng);
			}

			return this;
		},

		// @method closePopup(): this
		// Closes the popup bound to this layer if it is open.
		closePopup: function () {
			if (this._popup) {
				this._popup._close();
			}
			return this;
		},

		// @method togglePopup(): this
		// Opens or closes the popup bound to this layer depending on its current state.
		togglePopup: function (target) {
			if (this._popup) {
				if (this._popup._map) {
					this.closePopup();
				} else {
					this.openPopup(target);
				}
			}
			return this;
		},

		// @method isPopupOpen(): boolean
		// Returns `true` if the popup bound to this layer is currently open.
		isPopupOpen: function () {
			return this._popup.isOpen();
		},

		// @method setPopupContent(content: String|HTMLElement|Popup): this
		// Sets the content of the popup bound to this layer.
		setPopupContent: function (content) {
			if (this._popup) {
				this._popup.setContent(content);
			}
			return this;
		},

		// @method getPopup(): Popup
		// Returns the popup bound to this layer.
		getPopup: function () {
			return this._popup;
		},

		_openPopup: function (e) {
			var layer = e.layer || e.target;

			if (!this._popup) {
				return;
			}

			if (!this._map) {
				return;
			}

			// prevent map click
			L.DomEvent.stop(e);

			// if this inherits from Path its a vector and we can just
			// open the popup at the new location
			if (layer instanceof L.Path) {
				this.openPopup(e.layer || e.target, e.latlng);
				return;
			}

			// otherwise treat it like a marker and figure out
			// if we should toggle it open/closed
			if (this._map.hasLayer(this._popup) && this._popup._source === layer) {
				this.closePopup();
			} else {
				this.openPopup(layer, e.latlng);
			}
		},

		_movePopup: function (e) {
			this._popup.setLatLng(e.latlng);
		}
	});



	/*
	 * Popup extension to L.Marker, adding popup-related methods.
	 */

	L.Marker.include({
		_getPopupAnchor: function () {
			return this.options.icon.options.popupAnchor || [0, 0];
		}
	});



	/*
	 * @class Tooltip
	 * @inherits DivOverlay
	 * @aka L.Tooltip
	 * Used to display small texts on top of map layers.
	 *
	 * @example
	 *
	 * ```js
	 * marker.bindTooltip("my tooltip text").openTooltip();
	 * ```
	 * Note about tooltip offset. Leaflet takes two options in consideration
	 * for computing tooltip offseting:
	 * - the `offset` Tooltip option: it defaults to [0, 0], and it's specific to one tooltip.
	 *   Add a positive x offset to move the tooltip to the right, and a positive y offset to
	 *   move it to the bottom. Negatives will move to the left and top.
	 * - the `tooltipAnchor` Icon option: this will only be considered for Marker. You
	 *   should adapt this value if you use a custom icon.
	 */


	// @namespace Tooltip
	L.Tooltip = L.DivOverlay.extend({

		// @section
		// @aka Tooltip options
		options: {
			// @option pane: String = 'tooltipPane'
			// `Map pane` where the tooltip will be added.
			pane: 'tooltipPane',

			// @option offset: Point = Point(0, 0)
			// Optional offset of the tooltip position.
			offset: [0, 0],

			// @option direction: String = 'auto'
			// Direction where to open the tooltip. Possible values are: `right`, `left`,
			// `top`, `bottom`, `center`, `auto`.
			// `auto` will dynamicaly switch between `right` and `left` according to the tooltip
			// position on the map.
			direction: 'auto',

			// @option permanent: Boolean = false
			// Whether to open the tooltip permanently or only on mouseover.
			permanent: false,

			// @option sticky: Boolean = false
			// If true, the tooltip will follow the mouse instead of being fixed at the feature center.
			sticky: false,

			// @option interactive: Boolean = false
			// If true, the tooltip will listen to the feature events.
			interactive: false,

			// @option opacity: Number = 0.9
			// Tooltip container opacity.
			opacity: 0.9
		},

		onAdd: function (map) {
			L.DivOverlay.prototype.onAdd.call(this, map);
			this.setOpacity(this.options.opacity);

			// @namespace Map
			// @section Tooltip events
			// @event tooltipopen: TooltipEvent
			// Fired when a tooltip is opened in the map.
			map.fire('tooltipopen', {tooltip: this});

			if (this._source) {
				// @namespace Layer
				// @section Tooltip events
				// @event tooltipopen: TooltipEvent
				// Fired when a tooltip bound to this layer is opened.
				this._source.fire('tooltipopen', {tooltip: this}, true);
			}
		},

		onRemove: function (map) {
			L.DivOverlay.prototype.onRemove.call(this, map);

			// @namespace Map
			// @section Tooltip events
			// @event tooltipclose: TooltipEvent
			// Fired when a tooltip in the map is closed.
			map.fire('tooltipclose', {tooltip: this});

			if (this._source) {
				// @namespace Layer
				// @section Tooltip events
				// @event tooltipclose: TooltipEvent
				// Fired when a tooltip bound to this layer is closed.
				this._source.fire('tooltipclose', {tooltip: this}, true);
			}
		},

		getEvents: function () {
			var events = L.DivOverlay.prototype.getEvents.call(this);

			if (L.Browser.touch && !this.options.permanent) {
				events.preclick = this._close;
			}

			return events;
		},

		_close: function () {
			if (this._map) {
				this._map.closeTooltip(this);
			}
		},

		_initLayout: function () {
			var prefix = 'leaflet-tooltip',
			    className = prefix + ' ' + (this.options.className || '') + ' leaflet-zoom-' + (this._zoomAnimated ? 'animated' : 'hide');

			this._contentNode = this._container = L.DomUtil.create('div', className);
		},

		_updateLayout: function () {},

		_adjustPan: function () {},

		_setPosition: function (pos) {
			var map = this._map,
			    container = this._container,
			    centerPoint = map.latLngToContainerPoint(map.getCenter()),
			    tooltipPoint = map.layerPointToContainerPoint(pos),
			    direction = this.options.direction,
			    tooltipWidth = container.offsetWidth,
			    tooltipHeight = container.offsetHeight,
			    offset = L.point(this.options.offset),
			    anchor = this._getAnchor();

			if (direction === 'top') {
				pos = pos.add(L.point(-tooltipWidth / 2 + offset.x, -tooltipHeight + offset.y + anchor.y));
			} else if (direction === 'bottom') {
				pos = pos.subtract(L.point(tooltipWidth / 2 - offset.x, -offset.y));
			} else if (direction === 'center') {
				pos = pos.subtract(L.point(tooltipWidth / 2 + offset.x, tooltipHeight / 2 - anchor.y + offset.y));
			} else if (direction === 'right' || direction === 'auto' && tooltipPoint.x < centerPoint.x) {
				direction = 'right';
				pos = pos.add([offset.x + anchor.x, anchor.y - tooltipHeight / 2 + offset.y]);
			} else {
				direction = 'left';
				pos = pos.subtract(L.point(tooltipWidth + anchor.x - offset.x, tooltipHeight / 2 - anchor.y - offset.y));
			}

			L.DomUtil.removeClass(container, 'leaflet-tooltip-right');
			L.DomUtil.removeClass(container, 'leaflet-tooltip-left');
			L.DomUtil.removeClass(container, 'leaflet-tooltip-top');
			L.DomUtil.removeClass(container, 'leaflet-tooltip-bottom');
			L.DomUtil.addClass(container, 'leaflet-tooltip-' + direction);
			L.DomUtil.setPosition(container, pos);
		},

		_updatePosition: function () {
			var pos = this._map.latLngToLayerPoint(this._latlng);
			this._setPosition(pos);
		},

		setOpacity: function (opacity) {
			this.options.opacity = opacity;

			if (this._container) {
				L.DomUtil.setOpacity(this._container, opacity);
			}
		},

		_animateZoom: function (e) {
			var pos = this._map._latLngToNewLayerPoint(this._latlng, e.zoom, e.center);
			this._setPosition(pos);
		},

		_getAnchor: function () {
			// Where should we anchor the tooltip on the source layer?
			return L.point(this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]);
		}

	});

	// @namespace Tooltip
	// @factory L.tooltip(options?: Tooltip options, source?: Layer)
	// Instantiates a Tooltip object given an optional `options` object that describes its appearance and location and an optional `source` object that is used to tag the tooltip with a reference to the Layer to which it refers.
	L.tooltip = function (options, source) {
		return new L.Tooltip(options, source);
	};

	// @namespace Map
	// @section Methods for Layers and Controls
	L.Map.include({

		// @method openTooltip(tooltip: Tooltip): this
		// Opens the specified tooltip.
		// @alternative
		// @method openTooltip(content: String|HTMLElement, latlng: LatLng, options?: Tooltip options): this
		// Creates a tooltip with the specified content and options and open it.
		openTooltip: function (tooltip, latlng, options) {
			if (!(tooltip instanceof L.Tooltip)) {
				tooltip = new L.Tooltip(options).setContent(tooltip);
			}

			if (latlng) {
				tooltip.setLatLng(latlng);
			}

			if (this.hasLayer(tooltip)) {
				return this;
			}

			return this.addLayer(tooltip);
		},

		// @method closeTooltip(tooltip?: Tooltip): this
		// Closes the tooltip given as parameter.
		closeTooltip: function (tooltip) {
			if (tooltip) {
				this.removeLayer(tooltip);
			}
			return this;
		}

	});



	/*
	 * @namespace Layer
	 * @section Tooltip methods example
	 *
	 * All layers share a set of methods convenient for binding tooltips to it.
	 *
	 * ```js
	 * var layer = L.Polygon(latlngs).bindTooltip('Hi There!').addTo(map);
	 * layer.openTooltip();
	 * layer.closeTooltip();
	 * ```
	 */

	// @section Tooltip methods
	L.Layer.include({

		// @method bindTooltip(content: String|HTMLElement|Function|Tooltip, options?: Tooltip options): this
		// Binds a tooltip to the layer with the passed `content` and sets up the
		// neccessary event listeners. If a `Function` is passed it will receive
		// the layer as the first argument and should return a `String` or `HTMLElement`.
		bindTooltip: function (content, options) {

			if (content instanceof L.Tooltip) {
				L.setOptions(content, options);
				this._tooltip = content;
				content._source = this;
			} else {
				if (!this._tooltip || options) {
					this._tooltip = L.tooltip(options, this);
				}
				this._tooltip.setContent(content);

			}

			this._initTooltipInteractions();

			if (this._tooltip.options.permanent && this._map && this._map.hasLayer(this)) {
				this.openTooltip();
			}

			return this;
		},

		// @method unbindTooltip(): this
		// Removes the tooltip previously bound with `bindTooltip`.
		unbindTooltip: function () {
			if (this._tooltip) {
				this._initTooltipInteractions(true);
				this.closeTooltip();
				this._tooltip = null;
			}
			return this;
		},

		_initTooltipInteractions: function (remove) {
			if (!remove && this._tooltipHandlersAdded) { return; }
			var onOff = remove ? 'off' : 'on',
			    events = {
				remove: this.closeTooltip,
				move: this._moveTooltip
			    };
			if (!this._tooltip.options.permanent) {
				events.mouseover = this._openTooltip;
				events.mouseout = this.closeTooltip;
				if (this._tooltip.options.sticky) {
					events.mousemove = this._moveTooltip;
				}
				if (L.Browser.touch) {
					events.click = this._openTooltip;
				}
			} else {
				events.add = this._openTooltip;
			}
			this[onOff](events);
			this._tooltipHandlersAdded = !remove;
		},

		// @method openTooltip(latlng?: LatLng): this
		// Opens the bound tooltip at the specificed `latlng` or at the default tooltip anchor if no `latlng` is passed.
		openTooltip: function (layer, latlng) {
			if (!(layer instanceof L.Layer)) {
				latlng = layer;
				layer = this;
			}

			if (layer instanceof L.FeatureGroup) {
				for (var id in this._layers) {
					layer = this._layers[id];
					break;
				}
			}

			if (!latlng) {
				latlng = layer.getCenter ? layer.getCenter() : layer.getLatLng();
			}

			if (this._tooltip && this._map) {

				// set tooltip source to this layer
				this._tooltip._source = layer;

				// update the tooltip (content, layout, ect...)
				this._tooltip.update();

				// open the tooltip on the map
				this._map.openTooltip(this._tooltip, latlng);

				// Tooltip container may not be defined if not permanent and never
				// opened.
				if (this._tooltip.options.interactive && this._tooltip._container) {
					L.DomUtil.addClass(this._tooltip._container, 'leaflet-clickable');
					this.addInteractiveTarget(this._tooltip._container);
				}
			}

			return this;
		},

		// @method closeTooltip(): this
		// Closes the tooltip bound to this layer if it is open.
		closeTooltip: function () {
			if (this._tooltip) {
				this._tooltip._close();
				if (this._tooltip.options.interactive) {
					L.DomUtil.removeClass(this._tooltip._container, 'leaflet-clickable');
					this.removeInteractiveTarget(this._tooltip._container);
				}
			}
			return this;
		},

		// @method toggleTooltip(): this
		// Opens or closes the tooltip bound to this layer depending on its current state.
		toggleTooltip: function (target) {
			if (this._tooltip) {
				if (this._tooltip._map) {
					this.closeTooltip();
				} else {
					this.openTooltip(target);
				}
			}
			return this;
		},

		// @method isTooltipOpen(): boolean
		// Returns `true` if the tooltip bound to this layer is currently open.
		isTooltipOpen: function () {
			return this._tooltip.isOpen();
		},

		// @method setTooltipContent(content: String|HTMLElement|Tooltip): this
		// Sets the content of the tooltip bound to this layer.
		setTooltipContent: function (content) {
			if (this._tooltip) {
				this._tooltip.setContent(content);
			}
			return this;
		},

		// @method getTooltip(): Tooltip
		// Returns the tooltip bound to this layer.
		getTooltip: function () {
			return this._tooltip;
		},

		_openTooltip: function (e) {
			var layer = e.layer || e.target;

			if (!this._tooltip || !this._map) {
				return;
			}
			this.openTooltip(layer, this._tooltip.options.sticky ? e.latlng : undefined);
		},

		_moveTooltip: function (e) {
			var latlng = e.latlng, containerPoint, layerPoint;
			if (this._tooltip.options.sticky && e.originalEvent) {
				containerPoint = this._map.mouseEventToContainerPoint(e.originalEvent);
				layerPoint = this._map.containerPointToLayerPoint(containerPoint);
				latlng = this._map.layerPointToLatLng(layerPoint);
			}
			this._tooltip.setLatLng(latlng);
		}
	});



	/*
	 * Tooltip extension to L.Marker, adding tooltip-related methods.
	 */

	L.Marker.include({
		_getTooltipAnchor: function () {
			return this.options.icon.options.tooltipAnchor || [0, 0];
		}
	});



	/*
	 * @class LayerGroup
	 * @aka L.LayerGroup
	 * @inherits Layer
	 *
	 * Used to group several layers and handle them as one. If you add it to the map,
	 * any layers added or removed from the group will be added/removed on the map as
	 * well. Extends `Layer`.
	 *
	 * @example
	 *
	 * ```js
	 * L.layerGroup([marker1, marker2])
	 * 	.addLayer(polyline)
	 * 	.addTo(map);
	 * ```
	 */

	L.LayerGroup = L.Layer.extend({

		initialize: function (layers) {
			this._layers = {};

			var i, len;

			if (layers) {
				for (i = 0, len = layers.length; i < len; i++) {
					this.addLayer(layers[i]);
				}
			}
		},

		// @method addLayer(layer: Layer): this
		// Adds the given layer to the group.
		addLayer: function (layer) {
			var id = this.getLayerId(layer);

			this._layers[id] = layer;

			if (this._map) {
				this._map.addLayer(layer);
			}

			return this;
		},

		// @method removeLayer(layer: Layer): this
		// Removes the given layer from the group.
		// @alternative
		// @method removeLayer(id: Number): this
		// Removes the layer with the given internal ID from the group.
		removeLayer: function (layer) {
			var id = layer in this._layers ? layer : this.getLayerId(layer);

			if (this._map && this._layers[id]) {
				this._map.removeLayer(this._layers[id]);
			}

			delete this._layers[id];

			return this;
		},

		// @method hasLayer(layer: Layer): Boolean
		// Returns `true` if the given layer is currently added to the group.
		hasLayer: function (layer) {
			return !!layer && (layer in this._layers || this.getLayerId(layer) in this._layers);
		},

		// @method clearLayers(): this
		// Removes all the layers from the group.
		clearLayers: function () {
			for (var i in this._layers) {
				this.removeLayer(this._layers[i]);
			}
			return this;
		},

		// @method invoke(methodName: String, …): this
		// Calls `methodName` on every layer contained in this group, passing any
		// additional parameters. Has no effect if the layers contained do not
		// implement `methodName`.
		invoke: function (methodName) {
			var args = Array.prototype.slice.call(arguments, 1),
			    i, layer;

			for (i in this._layers) {
				layer = this._layers[i];

				if (layer[methodName]) {
					layer[methodName].apply(layer, args);
				}
			}

			return this;
		},

		onAdd: function (map) {
			for (var i in this._layers) {
				map.addLayer(this._layers[i]);
			}
		},

		onRemove: function (map) {
			for (var i in this._layers) {
				map.removeLayer(this._layers[i]);
			}
		},

		// @method eachLayer(fn: Function, context?: Object): this
		// Iterates over the layers of the group, optionally specifying context of the iterator function.
		// ```js
		// group.eachLayer(function (layer) {
		// 	layer.bindPopup('Hello');
		// });
		// ```
		eachLayer: function (method, context) {
			for (var i in this._layers) {
				method.call(context, this._layers[i]);
			}
			return this;
		},

		// @method getLayer(id: Number): Layer
		// Returns the layer with the given internal ID.
		getLayer: function (id) {
			return this._layers[id];
		},

		// @method getLayers(): Layer[]
		// Returns an array of all the layers added to the group.
		getLayers: function () {
			var layers = [];

			for (var i in this._layers) {
				layers.push(this._layers[i]);
			}
			return layers;
		},

		// @method setZIndex(zIndex: Number): this
		// Calls `setZIndex` on every layer contained in this group, passing the z-index.
		setZIndex: function (zIndex) {
			return this.invoke('setZIndex', zIndex);
		},

		// @method getLayerId(layer: Layer): Number
		// Returns the internal ID for a layer
		getLayerId: function (layer) {
			return L.stamp(layer);
		}
	});


	// @factory L.layerGroup(layers: Layer[])
	// Create a layer group, optionally given an initial set of layers.
	L.layerGroup = function (layers) {
		return new L.LayerGroup(layers);
	};



	/*
	 * @class FeatureGroup
	 * @aka L.FeatureGroup
	 * @inherits LayerGroup
	 *
	 * Extended `LayerGroup` that also has mouse events (propagated from members of the group) and a shared bindPopup method.
	 *
	 * @example
	 *
	 * ```js
	 * L.featureGroup([marker1, marker2, polyline])
	 * 	.bindPopup('Hello world!')
	 * 	.on('click', function() { alert('Clicked on a group!'); })
	 * 	.addTo(map);
	 * ```
	 */

	L.FeatureGroup = L.LayerGroup.extend({

		addLayer: function (layer) {
			if (this.hasLayer(layer)) {
				return this;
			}

			layer.addEventParent(this);

			L.LayerGroup.prototype.addLayer.call(this, layer);

			return this.fire('layeradd', {layer: layer});
		},

		removeLayer: function (layer) {
			if (!this.hasLayer(layer)) {
				return this;
			}
			if (layer in this._layers) {
				layer = this._layers[layer];
			}

			layer.removeEventParent(this);

			L.LayerGroup.prototype.removeLayer.call(this, layer);

			return this.fire('layerremove', {layer: layer});
		},

		// @method setStyle(style: Path options): this
		// Sets the given path options to each layer of the group that has a `setStyle` method.
		setStyle: function (style) {
			return this.invoke('setStyle', style);
		},

		// @method bringToFront(): this
		// Brings the layer group to the top of all other layers
		bringToFront: function () {
			return this.invoke('bringToFront');
		},

		// @method bringToBack(): this
		// Brings the layer group to the top of all other layers
		bringToBack: function () {
			return this.invoke('bringToBack');
		},

		// @method getBounds(): LatLngBounds
		// Returns the LatLngBounds of the Feature Group (created from bounds and coordinates of its children).
		getBounds: function () {
			var bounds = new L.LatLngBounds();

			for (var id in this._layers) {
				var layer = this._layers[id];
				bounds.extend(layer.getBounds ? layer.getBounds() : layer.getLatLng());
			}
			return bounds;
		}
	});

	// @factory L.featureGroup(layers: Layer[])
	// Create a feature group, optionally given an initial set of layers.
	L.featureGroup = function (layers) {
		return new L.FeatureGroup(layers);
	};



	/*
	 * @class Renderer
	 * @inherits Layer
	 * @aka L.Renderer
	 *
	 * Base class for vector renderer implementations (`SVG`, `Canvas`). Handles the
	 * DOM container of the renderer, its bounds, and its zoom animation.
	 *
	 * A `Renderer` works as an implicit layer group for all `Path`s - the renderer
	 * itself can be added or removed to the map. All paths use a renderer, which can
	 * be implicit (the map will decide the type of renderer and use it automatically)
	 * or explicit (using the [`renderer`](#path-renderer) option of the path).
	 *
	 * Do not use this class directly, use `SVG` and `Canvas` instead.
	 *
	 */

	L.Renderer = L.Layer.extend({

		// @section
		// @aka Renderer options
		options: {
			// @option padding: Number = 0.1
			// How much to extend the clip area around the map view (relative to its size)
			// e.g. 0.1 would be 10% of map view in each direction
			padding: 0.1
		},

		initialize: function (options) {
			L.setOptions(this, options);
			L.stamp(this);
		},

		onAdd: function () {
			if (!this._container) {
				this._initContainer(); // defined by renderer implementations

				if (this._zoomAnimated) {
					L.DomUtil.addClass(this._container, 'leaflet-zoom-animated');
				}
			}

			this.getPane().appendChild(this._container);
			this._update();
		},

		onRemove: function () {
			L.DomUtil.remove(this._container);
		},

		getEvents: function () {
			var events = {
				viewreset: this._reset,
				zoom: this._onZoom,
				moveend: this._update
			};
			if (this._zoomAnimated) {
				events.zoomanim = this._onAnimZoom;
			}
			return events;
		},

		_onAnimZoom: function (ev) {
			this._updateTransform(ev.center, ev.zoom);
		},

		_onZoom: function () {
			this._updateTransform(this._map.getCenter(), this._map.getZoom());
		},

		_updateTransform: function (center, zoom) {
			var scale = this._map.getZoomScale(zoom, this._zoom),
			    position = L.DomUtil.getPosition(this._container),
			    viewHalf = this._map.getSize().multiplyBy(0.5 + this.options.padding),
			    currentCenterPoint = this._map.project(this._center, zoom),
			    destCenterPoint = this._map.project(center, zoom),
			    centerOffset = destCenterPoint.subtract(currentCenterPoint),

			    topLeftOffset = viewHalf.multiplyBy(-scale).add(position).add(viewHalf).subtract(centerOffset);

			if (L.Browser.any3d) {
				L.DomUtil.setTransform(this._container, topLeftOffset, scale);
			} else {
				L.DomUtil.setPosition(this._container, topLeftOffset);
			}
		},

		_reset: function () {
			this._update();
			this._updateTransform(this._center, this._zoom);
		},

		_update: function () {
			// update pixel bounds of renderer container (for positioning/sizing/clipping later)
			var p = this.options.padding,
			    size = this._map.getSize(),
			    min = this._map.containerPointToLayerPoint(size.multiplyBy(-p)).round();

			this._bounds = new L.Bounds(min, min.add(size.multiplyBy(1 + p * 2)).round());

			this._center = this._map.getCenter();
			this._zoom = this._map.getZoom();
		}
	});


	L.Map.include({
		// @namespace Map; @method getRenderer(layer: Path): Renderer
		// Returns the instance of `Renderer` that should be used to render the given
		// `Path`. It will ensure that the `renderer` options of the map and paths
		// are respected, and that the renderers do exist on the map.
		getRenderer: function (layer) {
			// @namespace Path; @option renderer: Renderer
			// Use this specific instance of `Renderer` for this path. Takes
			// precedence over the map's [default renderer](#map-renderer).
			var renderer = layer.options.renderer || this._getPaneRenderer(layer.options.pane) || this.options.renderer || this._renderer;

			if (!renderer) {
				// @namespace Map; @option preferCanvas: Boolean = false
				// Whether `Path`s should be rendered on a `Canvas` renderer.
				// By default, all `Path`s are rendered in a `SVG` renderer.
				renderer = this._renderer = (this.options.preferCanvas && L.canvas()) || L.svg();
			}

			if (!this.hasLayer(renderer)) {
				this.addLayer(renderer);
			}
			return renderer;
		},

		_getPaneRenderer: function (name) {
			if (name === 'overlayPane' || name === undefined) {
				return false;
			}

			var renderer = this._paneRenderers[name];
			if (renderer === undefined) {
				renderer = (L.SVG && L.svg({pane: name})) || (L.Canvas && L.canvas({pane: name}));
				this._paneRenderers[name] = renderer;
			}
			return renderer;
		}
	});



	/*
	 * @class Path
	 * @aka L.Path
	 * @inherits Interactive layer
	 *
	 * An abstract class that contains options and constants shared between vector
	 * overlays (Polygon, Polyline, Circle). Do not use it directly. Extends `Layer`.
	 */

	L.Path = L.Layer.extend({

		// @section
		// @aka Path options
		options: {
			// @option stroke: Boolean = true
			// Whether to draw stroke along the path. Set it to `false` to disable borders on polygons or circles.
			stroke: true,

			// @option color: String = '#3388ff'
			// Stroke color
			color: '#3388ff',

			// @option weight: Number = 3
			// Stroke width in pixels
			weight: 3,

			// @option opacity: Number = 1.0
			// Stroke opacity
			opacity: 1,

			// @option lineCap: String= 'round'
			// A string that defines [shape to be used at the end](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linecap) of the stroke.
			lineCap: 'round',

			// @option lineJoin: String = 'round'
			// A string that defines [shape to be used at the corners](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linejoin) of the stroke.
			lineJoin: 'round',

			// @option dashArray: String = null
			// A string that defines the stroke [dash pattern](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dasharray). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
			dashArray: null,

			// @option dashOffset: String = null
			// A string that defines the [distance into the dash pattern to start the dash](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dashoffset). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
			dashOffset: null,

			// @option fill: Boolean = depends
			// Whether to fill the path with color. Set it to `false` to disable filling on polygons or circles.
			fill: false,

			// @option fillColor: String = *
			// Fill color. Defaults to the value of the [`color`](#path-color) option
			fillColor: null,

			// @option fillOpacity: Number = 0.2
			// Fill opacity.
			fillOpacity: 0.2,

			// @option fillRule: String = 'evenodd'
			// A string that defines [how the inside of a shape](https://developer.mozilla.org/docs/Web/SVG/Attribute/fill-rule) is determined.
			fillRule: 'evenodd',

			// className: '',

			// Option inherited from "Interactive layer" abstract class
			interactive: true
		},

		beforeAdd: function (map) {
			// Renderer is set here because we need to call renderer.getEvents
			// before this.getEvents.
			this._renderer = map.getRenderer(this);
		},

		onAdd: function () {
			this._renderer._initPath(this);
			this._reset();
			this._renderer._addPath(this);
		},

		onRemove: function () {
			this._renderer._removePath(this);
		},

		getEvents: function () {
			return {
				zoomend: this._project,
				moveend: this._update,
				viewreset: this._reset
			};
		},

		// @method redraw(): this
		// Redraws the layer. Sometimes useful after you changed the coordinates that the path uses.
		redraw: function () {
			if (this._map) {
				this._renderer._updatePath(this);
			}
			return this;
		},

		// @method setStyle(style: Path options): this
		// Changes the appearance of a Path based on the options in the `Path options` object.
		setStyle: function (style) {
			L.setOptions(this, style);
			if (this._renderer) {
				this._renderer._updateStyle(this);
			}
			return this;
		},

		// @method bringToFront(): this
		// Brings the layer to the top of all path layers.
		bringToFront: function () {
			if (this._renderer) {
				this._renderer._bringToFront(this);
			}
			return this;
		},

		// @method bringToBack(): this
		// Brings the layer to the bottom of all path layers.
		bringToBack: function () {
			if (this._renderer) {
				this._renderer._bringToBack(this);
			}
			return this;
		},

		getElement: function () {
			return this._path;
		},

		_reset: function () {
			// defined in children classes
			this._project();
			this._update();
		},

		_clickTolerance: function () {
			// used when doing hit detection for Canvas layers
			return (this.options.stroke ? this.options.weight / 2 : 0) + (L.Browser.touch ? 10 : 0);
		}
	});



	/*
	 * @namespace LineUtil
	 *
	 * Various utility functions for polyine points processing, used by Leaflet internally to make polylines lightning-fast.
	 */

	L.LineUtil = {

		// Simplify polyline with vertex reduction and Douglas-Peucker simplification.
		// Improves rendering performance dramatically by lessening the number of points to draw.

		// @function simplify(points: Point[], tolerance: Number): Point[]
		// Dramatically reduces the number of points in a polyline while retaining
		// its shape and returns a new array of simplified points, using the
		// [Douglas-Peucker algorithm](http://en.wikipedia.org/wiki/Douglas-Peucker_algorithm).
		// Used for a huge performance boost when processing/displaying Leaflet polylines for
		// each zoom level and also reducing visual noise. tolerance affects the amount of
		// simplification (lesser value means higher quality but slower and with more points).
		// Also released as a separated micro-library [Simplify.js](http://mourner.github.com/simplify-js/).
		simplify: function (points, tolerance) {
			if (!tolerance || !points.length) {
				return points.slice();
			}

			var sqTolerance = tolerance * tolerance;

			// stage 1: vertex reduction
			points = this._reducePoints(points, sqTolerance);

			// stage 2: Douglas-Peucker simplification
			points = this._simplifyDP(points, sqTolerance);

			return points;
		},

		// @function pointToSegmentDistance(p: Point, p1: Point, p2: Point): Number
		// Returns the distance between point `p` and segment `p1` to `p2`.
		pointToSegmentDistance:  function (p, p1, p2) {
			return Math.sqrt(this._sqClosestPointOnSegment(p, p1, p2, true));
		},

		// @function closestPointOnSegment(p: Point, p1: Point, p2: Point): Number
		// Returns the closest point from a point `p` on a segment `p1` to `p2`.
		closestPointOnSegment: function (p, p1, p2) {
			return this._sqClosestPointOnSegment(p, p1, p2);
		},

		// Douglas-Peucker simplification, see http://en.wikipedia.org/wiki/Douglas-Peucker_algorithm
		_simplifyDP: function (points, sqTolerance) {

			var len = points.length,
			    ArrayConstructor = typeof Uint8Array !== undefined + '' ? Uint8Array : Array,
			    markers = new ArrayConstructor(len);

			markers[0] = markers[len - 1] = 1;

			this._simplifyDPStep(points, markers, sqTolerance, 0, len - 1);

			var i,
			    newPoints = [];

			for (i = 0; i < len; i++) {
				if (markers[i]) {
					newPoints.push(points[i]);
				}
			}

			return newPoints;
		},

		_simplifyDPStep: function (points, markers, sqTolerance, first, last) {

			var maxSqDist = 0,
			    index, i, sqDist;

			for (i = first + 1; i <= last - 1; i++) {
				sqDist = this._sqClosestPointOnSegment(points[i], points[first], points[last], true);

				if (sqDist > maxSqDist) {
					index = i;
					maxSqDist = sqDist;
				}
			}

			if (maxSqDist > sqTolerance) {
				markers[index] = 1;

				this._simplifyDPStep(points, markers, sqTolerance, first, index);
				this._simplifyDPStep(points, markers, sqTolerance, index, last);
			}
		},

		// reduce points that are too close to each other to a single point
		_reducePoints: function (points, sqTolerance) {
			var reducedPoints = [points[0]];

			for (var i = 1, prev = 0, len = points.length; i < len; i++) {
				if (this._sqDist(points[i], points[prev]) > sqTolerance) {
					reducedPoints.push(points[i]);
					prev = i;
				}
			}
			if (prev < len - 1) {
				reducedPoints.push(points[len - 1]);
			}
			return reducedPoints;
		},


		// @function clipSegment(a: Point, b: Point, bounds: Bounds, useLastCode?: Boolean, round?: Boolean): Point[]|Boolean
		// Clips the segment a to b by rectangular bounds with the
		// [Cohen-Sutherland algorithm](https://en.wikipedia.org/wiki/Cohen%E2%80%93Sutherland_algorithm)
		// (modifying the segment points directly!). Used by Leaflet to only show polyline
		// points that are on the screen or near, increasing performance.
		clipSegment: function (a, b, bounds, useLastCode, round) {
			var codeA = useLastCode ? this._lastCode : this._getBitCode(a, bounds),
			    codeB = this._getBitCode(b, bounds),

			    codeOut, p, newCode;

			// save 2nd code to avoid calculating it on the next segment
			this._lastCode = codeB;

			while (true) {
				// if a,b is inside the clip window (trivial accept)
				if (!(codeA | codeB)) {
					return [a, b];
				}

				// if a,b is outside the clip window (trivial reject)
				if (codeA & codeB) {
					return false;
				}

				// other cases
				codeOut = codeA || codeB;
				p = this._getEdgeIntersection(a, b, codeOut, bounds, round);
				newCode = this._getBitCode(p, bounds);

				if (codeOut === codeA) {
					a = p;
					codeA = newCode;
				} else {
					b = p;
					codeB = newCode;
				}
			}
		},

		_getEdgeIntersection: function (a, b, code, bounds, round) {
			var dx = b.x - a.x,
			    dy = b.y - a.y,
			    min = bounds.min,
			    max = bounds.max,
			    x, y;

			if (code & 8) { // top
				x = a.x + dx * (max.y - a.y) / dy;
				y = max.y;

			} else if (code & 4) { // bottom
				x = a.x + dx * (min.y - a.y) / dy;
				y = min.y;

			} else if (code & 2) { // right
				x = max.x;
				y = a.y + dy * (max.x - a.x) / dx;

			} else if (code & 1) { // left
				x = min.x;
				y = a.y + dy * (min.x - a.x) / dx;
			}

			return new L.Point(x, y, round);
		},

		_getBitCode: function (p, bounds) {
			var code = 0;

			if (p.x < bounds.min.x) { // left
				code |= 1;
			} else if (p.x > bounds.max.x) { // right
				code |= 2;
			}

			if (p.y < bounds.min.y) { // bottom
				code |= 4;
			} else if (p.y > bounds.max.y) { // top
				code |= 8;
			}

			return code;
		},

		// square distance (to avoid unnecessary Math.sqrt calls)
		_sqDist: function (p1, p2) {
			var dx = p2.x - p1.x,
			    dy = p2.y - p1.y;
			return dx * dx + dy * dy;
		},

		// return closest point on segment or distance to that point
		_sqClosestPointOnSegment: function (p, p1, p2, sqDist) {
			var x = p1.x,
			    y = p1.y,
			    dx = p2.x - x,
			    dy = p2.y - y,
			    dot = dx * dx + dy * dy,
			    t;

			if (dot > 0) {
				t = ((p.x - x) * dx + (p.y - y) * dy) / dot;

				if (t > 1) {
					x = p2.x;
					y = p2.y;
				} else if (t > 0) {
					x += dx * t;
					y += dy * t;
				}
			}

			dx = p.x - x;
			dy = p.y - y;

			return sqDist ? dx * dx + dy * dy : new L.Point(x, y);
		}
	};



	/*
	 * @class Polyline
	 * @aka L.Polyline
	 * @inherits Path
	 *
	 * A class for drawing polyline overlays on a map. Extends `Path`.
	 *
	 * @example
	 *
	 * ```js
	 * // create a red polyline from an array of LatLng points
	 * var latlngs = [
	 * 	[-122.68, 45.51],
	 * 	[-122.43, 37.77],
	 * 	[-118.2, 34.04]
	 * ];
	 *
	 * var polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);
	 *
	 * // zoom the map to the polyline
	 * map.fitBounds(polyline.getBounds());
	 * ```
	 *
	 * You can also pass a multi-dimensional array to represent a `MultiPolyline` shape:
	 *
	 * ```js
	 * // create a red polyline from an array of arrays of LatLng points
	 * var latlngs = [
	 * 	[[-122.68, 45.51],
	 * 	 [-122.43, 37.77],
	 * 	 [-118.2, 34.04]],
	 * 	[[-73.91, 40.78],
	 * 	 [-87.62, 41.83],
	 * 	 [-96.72, 32.76]]
	 * ];
	 * ```
	 */

	L.Polyline = L.Path.extend({

		// @section
		// @aka Polyline options
		options: {
			// @option smoothFactor: Number = 1.0
			// How much to simplify the polyline on each zoom level. More means
			// better performance and smoother look, and less means more accurate representation.
			smoothFactor: 1.0,

			// @option noClip: Boolean = false
			// Disable polyline clipping.
			noClip: false
		},

		initialize: function (latlngs, options) {
			L.setOptions(this, options);
			this._setLatLngs(latlngs);
		},

		// @method getLatLngs(): LatLng[]
		// Returns an array of the points in the path, or nested arrays of points in case of multi-polyline.
		getLatLngs: function () {
			return this._latlngs;
		},

		// @method setLatLngs(latlngs: LatLng[]): this
		// Replaces all the points in the polyline with the given array of geographical points.
		setLatLngs: function (latlngs) {
			this._setLatLngs(latlngs);
			return this.redraw();
		},

		// @method isEmpty(): Boolean
		// Returns `true` if the Polyline has no LatLngs.
		isEmpty: function () {
			return !this._latlngs.length;
		},

		closestLayerPoint: function (p) {
			var minDistance = Infinity,
			    minPoint = null,
			    closest = L.LineUtil._sqClosestPointOnSegment,
			    p1, p2;

			for (var j = 0, jLen = this._parts.length; j < jLen; j++) {
				var points = this._parts[j];

				for (var i = 1, len = points.length; i < len; i++) {
					p1 = points[i - 1];
					p2 = points[i];

					var sqDist = closest(p, p1, p2, true);

					if (sqDist < minDistance) {
						minDistance = sqDist;
						minPoint = closest(p, p1, p2);
					}
				}
			}
			if (minPoint) {
				minPoint.distance = Math.sqrt(minDistance);
			}
			return minPoint;
		},

		// @method getCenter(): LatLng
		// Returns the center ([centroid](http://en.wikipedia.org/wiki/Centroid)) of the polyline.
		getCenter: function () {
			var i, halfDist, segDist, dist, p1, p2, ratio,
			    points = this._rings[0],
			    len = points.length;

			if (!len) { return null; }

			// polyline centroid algorithm; only uses the first ring if there are multiple

			for (i = 0, halfDist = 0; i < len - 1; i++) {
				halfDist += points[i].distanceTo(points[i + 1]) / 2;
			}

			// The line is so small in the current view that all points are on the same pixel.
			if (halfDist === 0) {
				return this._map.layerPointToLatLng(points[0]);
			}

			for (i = 0, dist = 0; i < len - 1; i++) {
				p1 = points[i];
				p2 = points[i + 1];
				segDist = p1.distanceTo(p2);
				dist += segDist;

				if (dist > halfDist) {
					ratio = (dist - halfDist) / segDist;
					return this._map.layerPointToLatLng([
						p2.x - ratio * (p2.x - p1.x),
						p2.y - ratio * (p2.y - p1.y)
					]);
				}
			}
		},

		// @method getBounds(): LatLngBounds
		// Returns the `LatLngBounds` of the path.
		getBounds: function () {
			return this._bounds;
		},

		// @method addLatLng(latlng: LatLng, latlngs? LatLng[]): this
		// Adds a given point to the polyline. By default, adds to the first ring of
		// the polyline in case of a multi-polyline, but can be overridden by passing
		// a specific ring as a LatLng array (that you can earlier access with [`getLatLngs`](#polyline-getlatlngs)).
		addLatLng: function (latlng, latlngs) {
			latlngs = latlngs || this._defaultShape();
			latlng = L.latLng(latlng);
			latlngs.push(latlng);
			this._bounds.extend(latlng);
			return this.redraw();
		},

		_setLatLngs: function (latlngs) {
			this._bounds = new L.LatLngBounds();
			this._latlngs = this._convertLatLngs(latlngs);
		},

		_defaultShape: function () {
			return L.Polyline._flat(this._latlngs) ? this._latlngs : this._latlngs[0];
		},

		// recursively convert latlngs input into actual LatLng instances; calculate bounds along the way
		_convertLatLngs: function (latlngs) {
			var result = [],
			    flat = L.Polyline._flat(latlngs);

			for (var i = 0, len = latlngs.length; i < len; i++) {
				if (flat) {
					result[i] = L.latLng(latlngs[i]);
					this._bounds.extend(result[i]);
				} else {
					result[i] = this._convertLatLngs(latlngs[i]);
				}
			}

			return result;
		},

		_project: function () {
			var pxBounds = new L.Bounds();
			this._rings = [];
			this._projectLatlngs(this._latlngs, this._rings, pxBounds);

			var w = this._clickTolerance(),
			    p = new L.Point(w, w);

			if (this._bounds.isValid() && pxBounds.isValid()) {
				pxBounds.min._subtract(p);
				pxBounds.max._add(p);
				this._pxBounds = pxBounds;
			}
		},

		// recursively turns latlngs into a set of rings with projected coordinates
		_projectLatlngs: function (latlngs, result, projectedBounds) {
			var flat = latlngs[0] instanceof L.LatLng,
			    len = latlngs.length,
			    i, ring;

			if (flat) {
				ring = [];
				for (i = 0; i < len; i++) {
					ring[i] = this._map.latLngToLayerPoint(latlngs[i]);
					projectedBounds.extend(ring[i]);
				}
				result.push(ring);
			} else {
				for (i = 0; i < len; i++) {
					this._projectLatlngs(latlngs[i], result, projectedBounds);
				}
			}
		},

		// clip polyline by renderer bounds so that we have less to render for performance
		_clipPoints: function () {
			var bounds = this._renderer._bounds;

			this._parts = [];
			if (!this._pxBounds || !this._pxBounds.intersects(bounds)) {
				return;
			}

			if (this.options.noClip) {
				this._parts = this._rings;
				return;
			}

			var parts = this._parts,
			    i, j, k, len, len2, segment, points;

			for (i = 0, k = 0, len = this._rings.length; i < len; i++) {
				points = this._rings[i];

				for (j = 0, len2 = points.length; j < len2 - 1; j++) {
					segment = L.LineUtil.clipSegment(points[j], points[j + 1], bounds, j, true);

					if (!segment) { continue; }

					parts[k] = parts[k] || [];
					parts[k].push(segment[0]);

					// if segment goes out of screen, or it's the last one, it's the end of the line part
					if ((segment[1] !== points[j + 1]) || (j === len2 - 2)) {
						parts[k].push(segment[1]);
						k++;
					}
				}
			}
		},

		// simplify each clipped part of the polyline for performance
		_simplifyPoints: function () {
			var parts = this._parts,
			    tolerance = this.options.smoothFactor;

			for (var i = 0, len = parts.length; i < len; i++) {
				parts[i] = L.LineUtil.simplify(parts[i], tolerance);
			}
		},

		_update: function () {
			if (!this._map) { return; }

			this._clipPoints();
			this._simplifyPoints();
			this._updatePath();
		},

		_updatePath: function () {
			this._renderer._updatePoly(this);
		}
	});

	// @factory L.polyline(latlngs: LatLng[], options?: Polyline options)
	// Instantiates a polyline object given an array of geographical points and
	// optionally an options object. You can create a `Polyline` object with
	// multiple separate lines (`MultiPolyline`) by passing an array of arrays
	// of geographic points.
	L.polyline = function (latlngs, options) {
		return new L.Polyline(latlngs, options);
	};

	L.Polyline._flat = function (latlngs) {
		// true if it's a flat array of latlngs; false if nested
		return !L.Util.isArray(latlngs[0]) || (typeof latlngs[0][0] !== 'object' && typeof latlngs[0][0] !== 'undefined');
	};



	/*
	 * @namespace PolyUtil
	 * Various utility functions for polygon geometries.
	 */

	L.PolyUtil = {};

	/* @function clipPolygon(points: Point[], bounds: Bounds, round?: Boolean): Point[]
	 * Clips the polygon geometry defined by the given `points` by the given bounds (using the [Sutherland-Hodgeman algorithm](https://en.wikipedia.org/wiki/Sutherland%E2%80%93Hodgman_algorithm)).
	 * Used by Leaflet to only show polygon points that are on the screen or near, increasing
	 * performance. Note that polygon points needs different algorithm for clipping
	 * than polyline, so there's a seperate method for it.
	 */
	L.PolyUtil.clipPolygon = function (points, bounds, round) {
		var clippedPoints,
		    edges = [1, 4, 2, 8],
		    i, j, k,
		    a, b,
		    len, edge, p,
		    lu = L.LineUtil;

		for (i = 0, len = points.length; i < len; i++) {
			points[i]._code = lu._getBitCode(points[i], bounds);
		}

		// for each edge (left, bottom, right, top)
		for (k = 0; k < 4; k++) {
			edge = edges[k];
			clippedPoints = [];

			for (i = 0, len = points.length, j = len - 1; i < len; j = i++) {
				a = points[i];
				b = points[j];

				// if a is inside the clip window
				if (!(a._code & edge)) {
					// if b is outside the clip window (a->b goes out of screen)
					if (b._code & edge) {
						p = lu._getEdgeIntersection(b, a, edge, bounds, round);
						p._code = lu._getBitCode(p, bounds);
						clippedPoints.push(p);
					}
					clippedPoints.push(a);

				// else if b is inside the clip window (a->b enters the screen)
				} else if (!(b._code & edge)) {
					p = lu._getEdgeIntersection(b, a, edge, bounds, round);
					p._code = lu._getBitCode(p, bounds);
					clippedPoints.push(p);
				}
			}
			points = clippedPoints;
		}

		return points;
	};



	/*
	 * @class Polygon
	 * @aka L.Polygon
	 * @inherits Polyline
	 *
	 * A class for drawing polygon overlays on a map. Extends `Polyline`.
	 *
	 * Note that points you pass when creating a polygon shouldn't have an additional last point equal to the first one — it's better to filter out such points.
	 *
	 *
	 * @example
	 *
	 * ```js
	 * // create a red polygon from an array of LatLng points
	 * var latlngs = [[-111.03, 41],[-111.04, 45],[-104.05, 45],[-104.05, 41]];
	 *
	 * var polygon = L.polygon(latlngs, {color: 'red'}).addTo(map);
	 *
	 * // zoom the map to the polygon
	 * map.fitBounds(polygon.getBounds());
	 * ```
	 *
	 * You can also pass an array of arrays of latlngs, with the first array representing the outer shape and the other arrays representing holes in the outer shape:
	 *
	 * ```js
	 * var latlngs = [
	 *   [[-111.03, 41],[-111.04, 45],[-104.05, 45],[-104.05, 41]], // outer ring
	 *   [[-108.58,37.29],[-108.58,40.71],[-102.50,40.71],[-102.50,37.29]] // hole
	 * ];
	 * ```
	 *
	 * Additionally, you can pass a multi-dimensional array to represent a MultiPolygon shape.
	 *
	 * ```js
	 * var latlngs = [
	 *   [ // first polygon
	 *     [[-111.03, 41],[-111.04, 45],[-104.05, 45],[-104.05, 41]], // outer ring
	 *     [[-108.58,37.29],[-108.58,40.71],[-102.50,40.71],[-102.50,37.29]] // hole
	 *   ],
	 *   [ // second polygon
	 *     [[-109.05, 37],[-109.03, 41],[-102.05, 41],[-102.04, 37],[-109.05, 38]]
	 *   ]
	 * ];
	 * ```
	 */

	L.Polygon = L.Polyline.extend({

		options: {
			fill: true
		},

		isEmpty: function () {
			return !this._latlngs.length || !this._latlngs[0].length;
		},

		getCenter: function () {
			var i, j, p1, p2, f, area, x, y, center,
			    points = this._rings[0],
			    len = points.length;

			if (!len) { return null; }

			// polygon centroid algorithm; only uses the first ring if there are multiple

			area = x = y = 0;

			for (i = 0, j = len - 1; i < len; j = i++) {
				p1 = points[i];
				p2 = points[j];

				f = p1.y * p2.x - p2.y * p1.x;
				x += (p1.x + p2.x) * f;
				y += (p1.y + p2.y) * f;
				area += f * 3;
			}

			if (area === 0) {
				// Polygon is so small that all points are on same pixel.
				center = points[0];
			} else {
				center = [x / area, y / area];
			}
			return this._map.layerPointToLatLng(center);
		},

		_convertLatLngs: function (latlngs) {
			var result = L.Polyline.prototype._convertLatLngs.call(this, latlngs),
			    len = result.length;

			// remove last point if it equals first one
			if (len >= 2 && result[0] instanceof L.LatLng && result[0].equals(result[len - 1])) {
				result.pop();
			}
			return result;
		},

		_setLatLngs: function (latlngs) {
			L.Polyline.prototype._setLatLngs.call(this, latlngs);
			if (L.Polyline._flat(this._latlngs)) {
				this._latlngs = [this._latlngs];
			}
		},

		_defaultShape: function () {
			return L.Polyline._flat(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
		},

		_clipPoints: function () {
			// polygons need a different clipping algorithm so we redefine that

			var bounds = this._renderer._bounds,
			    w = this.options.weight,
			    p = new L.Point(w, w);

			// increase clip padding by stroke width to avoid stroke on clip edges
			bounds = new L.Bounds(bounds.min.subtract(p), bounds.max.add(p));

			this._parts = [];
			if (!this._pxBounds || !this._pxBounds.intersects(bounds)) {
				return;
			}

			if (this.options.noClip) {
				this._parts = this._rings;
				return;
			}

			for (var i = 0, len = this._rings.length, clipped; i < len; i++) {
				clipped = L.PolyUtil.clipPolygon(this._rings[i], bounds, true);
				if (clipped.length) {
					this._parts.push(clipped);
				}
			}
		},

		_updatePath: function () {
			this._renderer._updatePoly(this, true);
		}
	});


	// @factory L.polygon(latlngs: LatLng[], options?: Polyline options)
	L.polygon = function (latlngs, options) {
		return new L.Polygon(latlngs, options);
	};



	/*
	 * L.Rectangle extends Polygon and creates a rectangle when passed a LatLngBounds object.
	 */

	/*
	 * @class Rectangle
	 * @aka L.Retangle
	 * @inherits Polygon
	 *
	 * A class for drawing rectangle overlays on a map. Extends `Polygon`.
	 *
	 * @example
	 *
	 * ```js
	 * // define rectangle geographical bounds
	 * var bounds = [[54.559322, -5.767822], [56.1210604, -3.021240]];
	 *
	 * // create an orange rectangle
	 * L.rectangle(bounds, {color: "#ff7800", weight: 1}).addTo(map);
	 *
	 * // zoom the map to the rectangle bounds
	 * map.fitBounds(bounds);
	 * ```
	 *
	 */


	L.Rectangle = L.Polygon.extend({
		initialize: function (latLngBounds, options) {
			L.Polygon.prototype.initialize.call(this, this._boundsToLatLngs(latLngBounds), options);
		},

		// @method setBounds(latLngBounds: LatLngBounds): this
		// Redraws the rectangle with the passed bounds.
		setBounds: function (latLngBounds) {
			return this.setLatLngs(this._boundsToLatLngs(latLngBounds));
		},

		_boundsToLatLngs: function (latLngBounds) {
			latLngBounds = L.latLngBounds(latLngBounds);
			return [
				latLngBounds.getSouthWest(),
				latLngBounds.getNorthWest(),
				latLngBounds.getNorthEast(),
				latLngBounds.getSouthEast()
			];
		}
	});


	// @factory L.rectangle(latLngBounds: LatLngBounds, options?: Polyline options)
	L.rectangle = function (latLngBounds, options) {
		return new L.Rectangle(latLngBounds, options);
	};



	/*
	 * @class CircleMarker
	 * @aka L.CircleMarker
	 * @inherits Path
	 *
	 * A circle of a fixed size with radius specified in pixels. Extends `Path`.
	 */

	L.CircleMarker = L.Path.extend({

		// @section
		// @aka CircleMarker options
		options: {
			fill: true,

			// @option radius: Number = 10
			// Radius of the circle marker, in pixels
			radius: 10
		},

		initialize: function (latlng, options) {
			L.setOptions(this, options);
			this._latlng = L.latLng(latlng);
			this._radius = this.options.radius;
		},

		// @method setLatLng(latLng: LatLng): this
		// Sets the position of a circle marker to a new location.
		setLatLng: function (latlng) {
			this._latlng = L.latLng(latlng);
			this.redraw();
			return this.fire('move', {latlng: this._latlng});
		},

		// @method getLatLng(): LatLng
		// Returns the current geographical position of the circle marker
		getLatLng: function () {
			return this._latlng;
		},

		// @method setRadius(radius: Number): this
		// Sets the radius of a circle marker. Units are in pixels.
		setRadius: function (radius) {
			this.options.radius = this._radius = radius;
			return this.redraw();
		},

		// @method getRadius(): Number
		// Returns the current radius of the circle
		getRadius: function () {
			return this._radius;
		},

		setStyle : function (options) {
			var radius = options && options.radius || this._radius;
			L.Path.prototype.setStyle.call(this, options);
			this.setRadius(radius);
			return this;
		},

		_project: function () {
			this._point = this._map.latLngToLayerPoint(this._latlng);
			this._updateBounds();
		},

		_updateBounds: function () {
			var r = this._radius,
			    r2 = this._radiusY || r,
			    w = this._clickTolerance(),
			    p = [r + w, r2 + w];
			this._pxBounds = new L.Bounds(this._point.subtract(p), this._point.add(p));
		},

		_update: function () {
			if (this._map) {
				this._updatePath();
			}
		},

		_updatePath: function () {
			this._renderer._updateCircle(this);
		},

		_empty: function () {
			return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
		}
	});


	// @factory L.circleMarker(latlng: LatLng, options?: CircleMarker options)
	// Instantiates a circle marker object given a geographical point, and an optional options object.
	L.circleMarker = function (latlng, options) {
		return new L.CircleMarker(latlng, options);
	};



	/*
	 * @class Circle
	 * @aka L.Circle
	 * @inherits CircleMarker
	 *
	 * A class for drawing circle overlays on a map. Extends `CircleMarker`.
	 *
	 * It's an approximation and starts to diverge from a real circle closer to poles (due to projection distortion).
	 *
	 * @example
	 *
	 * ```js
	 * L.circle([50.5, 30.5], 200).addTo(map);
	 * ```
	 */

	L.Circle = L.CircleMarker.extend({

		initialize: function (latlng, options, legacyOptions) {
			if (typeof options === 'number') {
				// Backwards compatibility with 0.7.x factory (latlng, radius, options?)
				options = L.extend({}, legacyOptions, {radius: options});
			}
			L.setOptions(this, options);
			this._latlng = L.latLng(latlng);

			if (isNaN(this.options.radius)) { throw new Error('Circle radius cannot be NaN'); }

			// @section
			// @aka Circle options
			// @option radius: Number; Radius of the circle, in meters.
			this._mRadius = this.options.radius;
		},

		// @method setRadius(radius: Number): this
		// Sets the radius of a circle. Units are in meters.
		setRadius: function (radius) {
			this._mRadius = radius;
			return this.redraw();
		},

		// @method getRadius(): Number
		// Returns the current radius of a circle. Units are in meters.
		getRadius: function () {
			return this._mRadius;
		},

		// @method getBounds(): LatLngBounds
		// Returns the `LatLngBounds` of the path.
		getBounds: function () {
			var half = [this._radius, this._radiusY || this._radius];

			return new L.LatLngBounds(
				this._map.layerPointToLatLng(this._point.subtract(half)),
				this._map.layerPointToLatLng(this._point.add(half)));
		},

		setStyle: L.Path.prototype.setStyle,

		_project: function () {

			var lng = this._latlng.lng,
			    lat = this._latlng.lat,
			    map = this._map,
			    crs = map.options.crs;

			if (crs.distance === L.CRS.Earth.distance) {
				var d = Math.PI / 180,
				    latR = (this._mRadius / L.CRS.Earth.R) / d,
				    top = map.project([lat + latR, lng]),
				    bottom = map.project([lat - latR, lng]),
				    p = top.add(bottom).divideBy(2),
				    lat2 = map.unproject(p).lat,
				    lngR = Math.acos((Math.cos(latR * d) - Math.sin(lat * d) * Math.sin(lat2 * d)) /
				            (Math.cos(lat * d) * Math.cos(lat2 * d))) / d;

				if (isNaN(lngR) || lngR === 0) {
					lngR = latR / Math.cos(Math.PI / 180 * lat); // Fallback for edge case, #2425
				}

				this._point = p.subtract(map.getPixelOrigin());
				this._radius = isNaN(lngR) ? 0 : Math.max(Math.round(p.x - map.project([lat2, lng - lngR]).x), 1);
				this._radiusY = Math.max(Math.round(p.y - top.y), 1);

			} else {
				var latlng2 = crs.unproject(crs.project(this._latlng).subtract([this._mRadius, 0]));

				this._point = map.latLngToLayerPoint(this._latlng);
				this._radius = this._point.x - map.latLngToLayerPoint(latlng2).x;
			}

			this._updateBounds();
		}
	});

	// @factory L.circle(latlng: LatLng, options?: Circle options)
	// Instantiates a circle object given a geographical point, and an options object
	// which contains the circle radius.
	// @alternative
	// @factory L.circle(latlng: LatLng, radius: Number, options?: Circle options)
	// Obsolete way of instantiating a circle, for compatibility with 0.7.x code.
	// Do not use in new applications or plugins.
	L.circle = function (latlng, options, legacyOptions) {
		return new L.Circle(latlng, options, legacyOptions);
	};



	/*
	 * @class SVG
	 * @inherits Renderer
	 * @aka L.SVG
	 *
	 * Allows vector layers to be displayed with [SVG](https://developer.mozilla.org/docs/Web/SVG).
	 * Inherits `Renderer`.
	 *
	 * Due to [technical limitations](http://caniuse.com/#search=svg), SVG is not
	 * available in all web browsers, notably Android 2.x and 3.x.
	 *
	 * Although SVG is not available on IE7 and IE8, these browsers support
	 * [VML](https://en.wikipedia.org/wiki/Vector_Markup_Language)
	 * (a now deprecated technology), and the SVG renderer will fall back to VML in
	 * this case.
	 *
	 * @example
	 *
	 * Use SVG by default for all paths in the map:
	 *
	 * ```js
	 * var map = L.map('map', {
	 * 	renderer: L.svg();
	 * });
	 * ```
	 *
	 * Use a SVG renderer with extra padding for specific vector geometries:
	 *
	 * ```js
	 * var map = L.map('map');
	 * var myRenderer = L.svg({ padding: 0.5 });
	 * var line = L.polyline( coordinates, { renderer: myRenderer } );
	 * var circle = L.circle( center, { renderer: myRenderer } );
	 * ```
	 */

	L.SVG = L.Renderer.extend({

		getEvents: function () {
			var events = L.Renderer.prototype.getEvents.call(this);
			events.zoomstart = this._onZoomStart;
			return events;
		},

		_initContainer: function () {
			this._container = L.SVG.create('svg');

			// makes it possible to click through svg root; we'll reset it back in individual paths
			this._container.setAttribute('pointer-events', 'none');

			this._rootGroup = L.SVG.create('g');
			this._container.appendChild(this._rootGroup);
		},

		_onZoomStart: function () {
			// Drag-then-pinch interactions might mess up the center and zoom.
			// In this case, the easiest way to prevent this is re-do the renderer
			//   bounds and padding when the zooming starts.
			this._update();
		},

		_update: function () {
			if (this._map._animatingZoom && this._bounds) { return; }

			L.Renderer.prototype._update.call(this);

			var b = this._bounds,
			    size = b.getSize(),
			    container = this._container;

			// set size of svg-container if changed
			if (!this._svgSize || !this._svgSize.equals(size)) {
				this._svgSize = size;
				container.setAttribute('width', size.x);
				container.setAttribute('height', size.y);
			}

			// movement: update container viewBox so that we don't have to change coordinates of individual layers
			L.DomUtil.setPosition(container, b.min);
			container.setAttribute('viewBox', [b.min.x, b.min.y, size.x, size.y].join(' '));
		},

		// methods below are called by vector layers implementations

		_initPath: function (layer) {
			var path = layer._path = L.SVG.create('path');

			// @namespace Path
			// @option className: String = null
			// Custom class name set on an element. Only for SVG renderer.
			if (layer.options.className) {
				L.DomUtil.addClass(path, layer.options.className);
			}

			if (layer.options.interactive) {
				L.DomUtil.addClass(path, 'leaflet-interactive');
			}

			this._updateStyle(layer);
		},

		_addPath: function (layer) {
			this._rootGroup.appendChild(layer._path);
			layer.addInteractiveTarget(layer._path);
		},

		_removePath: function (layer) {
			L.DomUtil.remove(layer._path);
			layer.removeInteractiveTarget(layer._path);
		},

		_updatePath: function (layer) {
			layer._project();
			layer._update();
		},

		_updateStyle: function (layer) {
			var path = layer._path,
			    options = layer.options;

			if (!path) { return; }

			if (options.stroke) {
				path.setAttribute('stroke', options.color);
				path.setAttribute('stroke-opacity', options.opacity);
				path.setAttribute('stroke-width', options.weight);
				path.setAttribute('stroke-linecap', options.lineCap);
				path.setAttribute('stroke-linejoin', options.lineJoin);

				if (options.dashArray) {
					path.setAttribute('stroke-dasharray', options.dashArray);
				} else {
					path.removeAttribute('stroke-dasharray');
				}

				if (options.dashOffset) {
					path.setAttribute('stroke-dashoffset', options.dashOffset);
				} else {
					path.removeAttribute('stroke-dashoffset');
				}
			} else {
				path.setAttribute('stroke', 'none');
			}

			if (options.fill) {
				path.setAttribute('fill', options.fillColor || options.color);
				path.setAttribute('fill-opacity', options.fillOpacity);
				path.setAttribute('fill-rule', options.fillRule || 'evenodd');
			} else {
				path.setAttribute('fill', 'none');
			}
		},

		_updatePoly: function (layer, closed) {
			this._setPath(layer, L.SVG.pointsToPath(layer._parts, closed));
		},

		_updateCircle: function (layer) {
			var p = layer._point,
			    r = layer._radius,
			    r2 = layer._radiusY || r,
			    arc = 'a' + r + ',' + r2 + ' 0 1,0 ';

			// drawing a circle with two half-arcs
			var d = layer._empty() ? 'M0 0' :
					'M' + (p.x - r) + ',' + p.y +
					arc + (r * 2) + ',0 ' +
					arc + (-r * 2) + ',0 ';

			this._setPath(layer, d);
		},

		_setPath: function (layer, path) {
			layer._path.setAttribute('d', path);
		},

		// SVG does not have the concept of zIndex so we resort to changing the DOM order of elements
		_bringToFront: function (layer) {
			L.DomUtil.toFront(layer._path);
		},

		_bringToBack: function (layer) {
			L.DomUtil.toBack(layer._path);
		}
	});


	// @namespace SVG; @section
	// There are several static functions which can be called without instantiating L.SVG:
	L.extend(L.SVG, {
		// @function create(name: String): SVGElement
		// Returns a instance of [SVGElement](https://developer.mozilla.org/docs/Web/API/SVGElement),
		// corresponding to the class name passed. For example, using 'line' will return
		// an instance of [SVGLineElement](https://developer.mozilla.org/docs/Web/API/SVGLineElement).
		create: function (name) {
			return document.createElementNS('http://www.w3.org/2000/svg', name);
		},

		// @function pointsToPath(rings: Point[], closed: Boolean): String
		// Generates a SVG path string for multiple rings, with each ring turning
		// into "M..L..L.." instructions
		pointsToPath: function (rings, closed) {
			var str = '',
			    i, j, len, len2, points, p;

			for (i = 0, len = rings.length; i < len; i++) {
				points = rings[i];

				for (j = 0, len2 = points.length; j < len2; j++) {
					p = points[j];
					str += (j ? 'L' : 'M') + p.x + ' ' + p.y;
				}

				// closes the ring for polygons; "x" is VML syntax
				str += closed ? (L.Browser.svg ? 'z' : 'x') : '';
			}

			// SVG complains about empty path strings
			return str || 'M0 0';
		}
	});

	// @namespace Browser; @property svg: Boolean
	// `true` when the browser supports [SVG](https://developer.mozilla.org/docs/Web/SVG).
	L.Browser.svg = !!(document.createElementNS && L.SVG.create('svg').createSVGRect);


	// @namespace SVG
	// @factory L.svg(options?: Renderer options)
	// Creates a SVG renderer with the given options.
	L.svg = function (options) {
		return L.Browser.svg || L.Browser.vml ? new L.SVG(options) : null;
	};



	/*
	 * Thanks to Dmitry Baranovsky and his Raphael library for inspiration!
	 */

	/*
	 * @class SVG
	 *
	 * Although SVG is not available on IE7 and IE8, these browsers support [VML](https://en.wikipedia.org/wiki/Vector_Markup_Language), and the SVG renderer will fall back to VML in this case.
	 *
	 * VML was deprecated in 2012, which means VML functionality exists only for backwards compatibility
	 * with old versions of Internet Explorer.
	 */

	// @namespace Browser; @property vml: Boolean
	// `true` if the browser supports [VML](https://en.wikipedia.org/wiki/Vector_Markup_Language).
	L.Browser.vml = !L.Browser.svg && (function () {
		try {
			var div = document.createElement('div');
			div.innerHTML = '<v:shape adj="1"/>';

			var shape = div.firstChild;
			shape.style.behavior = 'url(#default#VML)';

			return shape && (typeof shape.adj === 'object');

		} catch (e) {
			return false;
		}
	}());

	// redefine some SVG methods to handle VML syntax which is similar but with some differences
	L.SVG.include(!L.Browser.vml ? {} : {

		_initContainer: function () {
			this._container = L.DomUtil.create('div', 'leaflet-vml-container');
		},

		_update: function () {
			if (this._map._animatingZoom) { return; }
			L.Renderer.prototype._update.call(this);
		},

		_initPath: function (layer) {
			var container = layer._container = L.SVG.create('shape');

			L.DomUtil.addClass(container, 'leaflet-vml-shape ' + (this.options.className || ''));

			container.coordsize = '1 1';

			layer._path = L.SVG.create('path');
			container.appendChild(layer._path);

			this._updateStyle(layer);
		},

		_addPath: function (layer) {
			var container = layer._container;
			this._container.appendChild(container);

			if (layer.options.interactive) {
				layer.addInteractiveTarget(container);
			}
		},

		_removePath: function (layer) {
			var container = layer._container;
			L.DomUtil.remove(container);
			layer.removeInteractiveTarget(container);
		},

		_updateStyle: function (layer) {
			var stroke = layer._stroke,
			    fill = layer._fill,
			    options = layer.options,
			    container = layer._container;

			container.stroked = !!options.stroke;
			container.filled = !!options.fill;

			if (options.stroke) {
				if (!stroke) {
					stroke = layer._stroke = L.SVG.create('stroke');
				}
				container.appendChild(stroke);
				stroke.weight = options.weight + 'px';
				stroke.color = options.color;
				stroke.opacity = options.opacity;

				if (options.dashArray) {
					stroke.dashStyle = L.Util.isArray(options.dashArray) ?
					    options.dashArray.join(' ') :
					    options.dashArray.replace(/( *, *)/g, ' ');
				} else {
					stroke.dashStyle = '';
				}
				stroke.endcap = options.lineCap.replace('butt', 'flat');
				stroke.joinstyle = options.lineJoin;

			} else if (stroke) {
				container.removeChild(stroke);
				layer._stroke = null;
			}

			if (options.fill) {
				if (!fill) {
					fill = layer._fill = L.SVG.create('fill');
				}
				container.appendChild(fill);
				fill.color = options.fillColor || options.color;
				fill.opacity = options.fillOpacity;

			} else if (fill) {
				container.removeChild(fill);
				layer._fill = null;
			}
		},

		_updateCircle: function (layer) {
			var p = layer._point.round(),
			    r = Math.round(layer._radius),
			    r2 = Math.round(layer._radiusY || r);

			this._setPath(layer, layer._empty() ? 'M0 0' :
					'AL ' + p.x + ',' + p.y + ' ' + r + ',' + r2 + ' 0,' + (65535 * 360));
		},

		_setPath: function (layer, path) {
			layer._path.v = path;
		},

		_bringToFront: function (layer) {
			L.DomUtil.toFront(layer._container);
		},

		_bringToBack: function (layer) {
			L.DomUtil.toBack(layer._container);
		}
	});

	if (L.Browser.vml) {
		L.SVG.create = (function () {
			try {
				document.namespaces.add('lvml', 'urn:schemas-microsoft-com:vml');
				return function (name) {
					return document.createElement('<lvml:' + name + ' class="lvml">');
				};
			} catch (e) {
				return function (name) {
					return document.createElement('<' + name + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
				};
			}
		})();
	}



	/*
	 * @class Canvas
	 * @inherits Renderer
	 * @aka L.Canvas
	 *
	 * Allows vector layers to be displayed with [`<canvas>`](https://developer.mozilla.org/docs/Web/API/Canvas_API).
	 * Inherits `Renderer`.
	 *
	 * Due to [technical limitations](http://caniuse.com/#search=canvas), Canvas is not
	 * available in all web browsers, notably IE8, and overlapping geometries might
	 * not display properly in some edge cases.
	 *
	 * @example
	 *
	 * Use Canvas by default for all paths in the map:
	 *
	 * ```js
	 * var map = L.map('map', {
	 * 	renderer: L.canvas();
	 * });
	 * ```
	 *
	 * Use a Canvas renderer with extra padding for specific vector geometries:
	 *
	 * ```js
	 * var map = L.map('map');
	 * var myRenderer = L.canvas({ padding: 0.5 });
	 * var line = L.polyline( coordinates, { renderer: myRenderer } );
	 * var circle = L.circle( center, { renderer: myRenderer } );
	 * ```
	 */

	L.Canvas = L.Renderer.extend({

		onAdd: function () {
			L.Renderer.prototype.onAdd.call(this);

			this._layers = this._layers || {};

			// Redraw vectors since canvas is cleared upon removal,
			// in case of removing the renderer itself from the map.
			this._draw();
		},

		_initContainer: function () {
			var container = this._container = document.createElement('canvas');

			L.DomEvent
				.on(container, 'mousemove', L.Util.throttle(this._onMouseMove, 32, this), this)
				.on(container, 'click dblclick mousedown mouseup contextmenu', this._onClick, this)
				.on(container, 'mouseout', this._handleMouseOut, this);

			this._ctx = container.getContext('2d');
		},

		_update: function () {
			if (this._map._animatingZoom && this._bounds) { return; }

			this._drawnLayers = {};

			L.Renderer.prototype._update.call(this);

			var b = this._bounds,
			    container = this._container,
			    size = b.getSize(),
			    m = L.Browser.retina ? 2 : 1;

			L.DomUtil.setPosition(container, b.min);

			// set canvas size (also clearing it); use double size on retina
			container.width = m * size.x;
			container.height = m * size.y;
			container.style.width = size.x + 'px';
			container.style.height = size.y + 'px';

			if (L.Browser.retina) {
				this._ctx.scale(2, 2);
			}

			// translate so we use the same path coordinates after canvas element moves
			this._ctx.translate(-b.min.x, -b.min.y);
		},

		_initPath: function (layer) {
			this._updateDashArray(layer);
			this._layers[L.stamp(layer)] = layer;
		},

		_addPath: L.Util.falseFn,

		_removePath: function (layer) {
			layer._removed = true;
			this._requestRedraw(layer);
		},

		_updatePath: function (layer) {
			this._redrawBounds = layer._pxBounds;
			this._draw(true);
			layer._project();
			layer._update();
			this._draw();
			this._redrawBounds = null;
		},

		_updateStyle: function (layer) {
			this._updateDashArray(layer);
			this._requestRedraw(layer);
		},

		_updateDashArray: function (layer) {
			if (layer.options.dashArray) {
				var parts = layer.options.dashArray.split(','),
				    dashArray = [],
				    i;
				for (i = 0; i < parts.length; i++) {
					dashArray.push(Number(parts[i]));
				}
				layer.options._dashArray = dashArray;
			}
		},

		_requestRedraw: function (layer) {
			if (!this._map) { return; }

			var padding = (layer.options.weight || 0) + 1;
			this._redrawBounds = this._redrawBounds || new L.Bounds();
			this._redrawBounds.extend(layer._pxBounds.min.subtract([padding, padding]));
			this._redrawBounds.extend(layer._pxBounds.max.add([padding, padding]));

			this._redrawRequest = this._redrawRequest || L.Util.requestAnimFrame(this._redraw, this);
		},

		_redraw: function () {
			this._redrawRequest = null;

			this._draw(true); // clear layers in redraw bounds
			this._draw(); // draw layers

			this._redrawBounds = null;
		},

		_draw: function (clear) {
			this._clear = clear;
			var layer, bounds = this._redrawBounds;
			this._ctx.save();
			if (bounds) {
				this._ctx.beginPath();
				this._ctx.rect(bounds.min.x, bounds.min.y, bounds.max.x - bounds.min.x, bounds.max.y - bounds.min.y);
				this._ctx.clip();
			}

			for (var id in this._layers) {
				layer = this._layers[id];
				if (!bounds || (layer._pxBounds && layer._pxBounds.intersects(bounds))) {
					layer._updatePath();
				}
				if (clear && layer._removed) {
					delete layer._removed;
					delete this._layers[id];
				}
			}
			this._ctx.restore();  // Restore state before clipping.
		},

		_updatePoly: function (layer, closed) {

			var i, j, len2, p,
			    parts = layer._parts,
			    len = parts.length,
			    ctx = this._ctx;

			if (!len) { return; }

			this._drawnLayers[layer._leaflet_id] = layer;

			ctx.beginPath();

			if (ctx.setLineDash) {
				ctx.setLineDash(layer.options && layer.options._dashArray || []);
			}

			for (i = 0; i < len; i++) {
				for (j = 0, len2 = parts[i].length; j < len2; j++) {
					p = parts[i][j];
					ctx[j ? 'lineTo' : 'moveTo'](p.x, p.y);
				}
				if (closed) {
					ctx.closePath();
				}
			}

			this._fillStroke(ctx, layer);

			// TODO optimization: 1 fill/stroke for all features with equal style instead of 1 for each feature
		},

		_updateCircle: function (layer) {

			if (layer._empty()) { return; }

			var p = layer._point,
			    ctx = this._ctx,
			    r = layer._radius,
			    s = (layer._radiusY || r) / r;

			this._drawnLayers[layer._leaflet_id] = layer;

			if (s !== 1) {
				ctx.save();
				ctx.scale(1, s);
			}

			ctx.beginPath();
			ctx.arc(p.x, p.y / s, r, 0, Math.PI * 2, false);

			if (s !== 1) {
				ctx.restore();
			}

			this._fillStroke(ctx, layer);
		},

		_fillStroke: function (ctx, layer) {
			var clear = this._clear,
			    options = layer.options;

			ctx.globalCompositeOperation = clear ? 'destination-out' : 'source-over';

			if (options.fill) {
				ctx.globalAlpha = clear ? 1 : options.fillOpacity;
				ctx.fillStyle = options.fillColor || options.color;
				ctx.fill(options.fillRule || 'evenodd');
			}

			if (options.stroke && options.weight !== 0) {
				ctx.globalAlpha = clear ? 1 : options.opacity;

				// if clearing shape, do it with the previously drawn line width
				layer._prevWeight = ctx.lineWidth = clear ? layer._prevWeight + 1 : options.weight;

				ctx.strokeStyle = options.color;
				ctx.lineCap = options.lineCap;
				ctx.lineJoin = options.lineJoin;
				ctx.stroke();
			}
		},

		// Canvas obviously doesn't have mouse events for individual drawn objects,
		// so we emulate that by calculating what's under the mouse on mousemove/click manually

		_onClick: function (e) {
			var point = this._map.mouseEventToLayerPoint(e), layers = [], layer;

			for (var id in this._layers) {
				layer = this._layers[id];
				if (layer.options.interactive && layer._containsPoint(point) && !this._map._draggableMoved(layer)) {
					L.DomEvent._fakeStop(e);
					layers.push(layer);
				}
			}
			if (layers.length)  {
				this._fireEvent(layers, e);
			}
		},

		_onMouseMove: function (e) {
			if (!this._map || this._map.dragging.moving() || this._map._animatingZoom) { return; }

			var point = this._map.mouseEventToLayerPoint(e);
			this._handleMouseOut(e, point);
			this._handleMouseHover(e, point);
		},


		_handleMouseOut: function (e, point) {
			var layer = this._hoveredLayer;
			if (layer && (e.type === 'mouseout' || !layer._containsPoint(point))) {
				// if we're leaving the layer, fire mouseout
				L.DomUtil.removeClass(this._container, 'leaflet-interactive');
				this._fireEvent([layer], e, 'mouseout');
				this._hoveredLayer = null;
			}
		},

		_handleMouseHover: function (e, point) {
			var id, layer;

			for (id in this._drawnLayers) {
				layer = this._drawnLayers[id];
				if (layer.options.interactive && layer._containsPoint(point)) {
					L.DomUtil.addClass(this._container, 'leaflet-interactive'); // change cursor
					this._fireEvent([layer], e, 'mouseover');
					this._hoveredLayer = layer;
				}
			}

			if (this._hoveredLayer) {
				this._fireEvent([this._hoveredLayer], e);
			}
		},

		_fireEvent: function (layers, e, type) {
			this._map._fireDOMEvent(e, type || e.type, layers);
		},

		// TODO _bringToFront & _bringToBack, pretty tricky

		_bringToFront: L.Util.falseFn,
		_bringToBack: L.Util.falseFn
	});

	// @namespace Browser; @property canvas: Boolean
	// `true` when the browser supports [`<canvas>`](https://developer.mozilla.org/docs/Web/API/Canvas_API).
	L.Browser.canvas = (function () {
		return !!document.createElement('canvas').getContext;
	}());

	// @namespace Canvas
	// @factory L.canvas(options?: Renderer options)
	// Creates a Canvas renderer with the given options.
	L.canvas = function (options) {
		return L.Browser.canvas ? new L.Canvas(options) : null;
	};

	L.Polyline.prototype._containsPoint = function (p, closed) {
		var i, j, k, len, len2, part,
		    w = this._clickTolerance();

		if (!this._pxBounds.contains(p)) { return false; }

		// hit detection for polylines
		for (i = 0, len = this._parts.length; i < len; i++) {
			part = this._parts[i];

			for (j = 0, len2 = part.length, k = len2 - 1; j < len2; k = j++) {
				if (!closed && (j === 0)) { continue; }

				if (L.LineUtil.pointToSegmentDistance(p, part[k], part[j]) <= w) {
					return true;
				}
			}
		}
		return false;
	};

	L.Polygon.prototype._containsPoint = function (p) {
		var inside = false,
		    part, p1, p2, i, j, k, len, len2;

		if (!this._pxBounds.contains(p)) { return false; }

		// ray casting algorithm for detecting if point is in polygon
		for (i = 0, len = this._parts.length; i < len; i++) {
			part = this._parts[i];

			for (j = 0, len2 = part.length, k = len2 - 1; j < len2; k = j++) {
				p1 = part[j];
				p2 = part[k];

				if (((p1.y > p.y) !== (p2.y > p.y)) && (p.x < (p2.x - p1.x) * (p.y - p1.y) / (p2.y - p1.y) + p1.x)) {
					inside = !inside;
				}
			}
		}

		// also check if it's on polygon stroke
		return inside || L.Polyline.prototype._containsPoint.call(this, p, true);
	};

	L.CircleMarker.prototype._containsPoint = function (p) {
		return p.distanceTo(this._point) <= this._radius + this._clickTolerance();
	};



	/*
	 * @class GeoJSON
	 * @aka L.GeoJSON
	 * @inherits FeatureGroup
	 *
	 * Represents a GeoJSON object or an array of GeoJSON objects. Allows you to parse
	 * GeoJSON data and display it on the map. Extends `FeatureGroup`.
	 *
	 * @example
	 *
	 * ```js
	 * L.geoJson(data, {
	 * 	style: function (feature) {
	 * 		return {color: feature.properties.color};
	 * 	}
	 * }).bindPopup(function (layer) {
	 * 	return layer.feature.properties.description;
	 * }).addTo(map);
	 * ```
	 */

	L.GeoJSON = L.FeatureGroup.extend({

		/* @section
		 * @aka GeoJSON options
		 *
		 * @option pointToLayer: Function = *
		 * A `Function` defining how GeoJSON points spawn Leaflet layers. It is internally
		 * called when data is added, passing the GeoJSON point feature and its `LatLng`.
		 * The default is to spawn a default `Marker`:
		 * ```js
		 * function(geoJsonPoint, latlng) {
		 * 	return L.marker(latlng);
		 * }
		 * ```
		 *
		 * @option style: Function = *
		 * A `Function` defining the `Path options` for styling GeoJSON lines and polygons,
		 * called internally when data is added.
		 * The default value is to not override any defaults:
		 * ```js
		 * function (geoJsonFeature) {
		 * 	return {}
		 * }
		 * ```
		 *
		 * @option onEachFeature: Function = *
		 * A `Function` that will be called once for each created `Feature`, after it has
		 * been created and styled. Useful for attaching events and popups to features.
		 * The default is to do nothing with the newly created layers:
		 * ```js
		 * function (feature, layer) {}
		 * ```
		 *
		 * @option filter: Function = *
		 * A `Function` that will be used to decide whether to show a feature or not.
		 * The default is to show all features:
		 * ```js
		 * function (geoJsonFeature) {
		 * 	return true;
		 * }
		 * ```
		 *
		 * @option coordsToLatLng: Function = *
		 * A `Function` that will be used for converting GeoJSON coordinates to `LatLng`s.
		 * The default is the `coordsToLatLng` static method.
		 */

		initialize: function (geojson, options) {
			L.setOptions(this, options);

			this._layers = {};

			if (geojson) {
				this.addData(geojson);
			}
		},

		// @function addData( <GeoJSON> data ): Layer
		// Adds a GeoJSON object to the layer.
		addData: function (geojson) {
			var features = L.Util.isArray(geojson) ? geojson : geojson.features,
			    i, len, feature;

			if (features) {
				for (i = 0, len = features.length; i < len; i++) {
					// only add this if geometry or geometries are set and not null
					feature = features[i];
					if (feature.geometries || feature.geometry || feature.features || feature.coordinates) {
						this.addData(feature);
					}
				}
				return this;
			}

			var options = this.options;

			if (options.filter && !options.filter(geojson)) { return this; }

			var layer = L.GeoJSON.geometryToLayer(geojson, options);
			if (!layer) {
				return this;
			}
			layer.feature = L.GeoJSON.asFeature(geojson);

			layer.defaultOptions = layer.options;
			this.resetStyle(layer);

			if (options.onEachFeature) {
				options.onEachFeature(geojson, layer);
			}

			return this.addLayer(layer);
		},

		// @function resetStyle( <Path> layer ): Layer
		// Resets the given vector layer's style to the original GeoJSON style, useful for resetting style after hover events.
		resetStyle: function (layer) {
			// reset any custom styles
			layer.options = L.Util.extend({}, layer.defaultOptions);
			this._setLayerStyle(layer, this.options.style);
			return this;
		},

		// @function setStyle( <Function> style ): Layer
		// Changes styles of GeoJSON vector layers with the given style function.
		setStyle: function (style) {
			return this.eachLayer(function (layer) {
				this._setLayerStyle(layer, style);
			}, this);
		},

		_setLayerStyle: function (layer, style) {
			if (typeof style === 'function') {
				style = style(layer.feature);
			}
			if (layer.setStyle) {
				layer.setStyle(style);
			}
		}
	});

	// @section
	// There are several static functions which can be called without instantiating L.GeoJSON:
	L.extend(L.GeoJSON, {
		// @function geometryToLayer(featureData: Object, options?: GeoJSON options): Layer
		// Creates a `Layer` from a given GeoJSON feature. Can use a custom
		// [`pointToLayer`](#geojson-pointtolayer) and/or [`coordsToLatLng`](#geojson-coordstolatlng)
		// functions if provided as options.
		geometryToLayer: function (geojson, options) {

			var geometry = geojson.type === 'Feature' ? geojson.geometry : geojson,
			    coords = geometry ? geometry.coordinates : null,
			    layers = [],
			    pointToLayer = options && options.pointToLayer,
			    coordsToLatLng = options && options.coordsToLatLng || this.coordsToLatLng,
			    latlng, latlngs, i, len;

			if (!coords && !geometry) {
				return null;
			}

			switch (geometry.type) {
			case 'Point':
				latlng = coordsToLatLng(coords);
				return pointToLayer ? pointToLayer(geojson, latlng) : new L.Marker(latlng);

			case 'MultiPoint':
				for (i = 0, len = coords.length; i < len; i++) {
					latlng = coordsToLatLng(coords[i]);
					layers.push(pointToLayer ? pointToLayer(geojson, latlng) : new L.Marker(latlng));
				}
				return new L.FeatureGroup(layers);

			case 'LineString':
			case 'MultiLineString':
				latlngs = this.coordsToLatLngs(coords, geometry.type === 'LineString' ? 0 : 1, coordsToLatLng);
				return new L.Polyline(latlngs, options);

			case 'Polygon':
			case 'MultiPolygon':
				latlngs = this.coordsToLatLngs(coords, geometry.type === 'Polygon' ? 1 : 2, coordsToLatLng);
				return new L.Polygon(latlngs, options);

			case 'GeometryCollection':
				for (i = 0, len = geometry.geometries.length; i < len; i++) {
					var layer = this.geometryToLayer({
						geometry: geometry.geometries[i],
						type: 'Feature',
						properties: geojson.properties
					}, options);

					if (layer) {
						layers.push(layer);
					}
				}
				return new L.FeatureGroup(layers);

			default:
				throw new Error('Invalid GeoJSON object.');
			}
		},

		// @function coordsToLatLng(coords: Array): LatLng
		// Creates a `LatLng` object from an array of 2 numbers (longitude, latitude)
		// or 3 numbers (longitude, latitude, altitude) used in GeoJSON for points.
		coordsToLatLng: function (coords) {
			return new L.LatLng(coords[1], coords[0], coords[2]);
		},

		// @function coordsToLatLngs(coords: Array, levelsDeep?: Number, coordsToLatLng?: Function): Array
		// Creates a multidimensional array of `LatLng`s from a GeoJSON coordinates array.
		// `levelsDeep` specifies the nesting level (0 is for an array of points, 1 for an array of arrays of points, etc., 0 by default).
		// Can use a custom [`coordsToLatLng`](#geojson-coordstolatlng) function.
		coordsToLatLngs: function (coords, levelsDeep, coordsToLatLng) {
			var latlngs = [];

			for (var i = 0, len = coords.length, latlng; i < len; i++) {
				latlng = levelsDeep ?
				        this.coordsToLatLngs(coords[i], levelsDeep - 1, coordsToLatLng) :
				        (coordsToLatLng || this.coordsToLatLng)(coords[i]);

				latlngs.push(latlng);
			}

			return latlngs;
		},

		// @function latLngToCoords(latlng: LatLng): Array
		// Reverse of [`coordsToLatLng`](#geojson-coordstolatlng)
		latLngToCoords: function (latlng) {
			return latlng.alt !== undefined ?
					[latlng.lng, latlng.lat, latlng.alt] :
					[latlng.lng, latlng.lat];
		},

		// @function latLngsToCoords(latlngs: Array, levelsDeep?: Number, closed?: Boolean): Array
		// Reverse of [`coordsToLatLngs`](#geojson-coordstolatlngs)
		// `closed` determines whether the first point should be appended to the end of the array to close the feature, only used when `levelsDeep` is 0. False by default.
		latLngsToCoords: function (latlngs, levelsDeep, closed) {
			var coords = [];

			for (var i = 0, len = latlngs.length; i < len; i++) {
				coords.push(levelsDeep ?
					L.GeoJSON.latLngsToCoords(latlngs[i], levelsDeep - 1, closed) :
					L.GeoJSON.latLngToCoords(latlngs[i]));
			}

			if (!levelsDeep && closed) {
				coords.push(coords[0]);
			}

			return coords;
		},

		getFeature: function (layer, newGeometry) {
			return layer.feature ?
					L.extend({}, layer.feature, {geometry: newGeometry}) :
					L.GeoJSON.asFeature(newGeometry);
		},

		// @function asFeature(geojson: Object): Object
		// Normalize GeoJSON geometries/features into GeoJSON features.
		asFeature: function (geojson) {
			if (geojson.type === 'Feature') {
				return geojson;
			}

			return {
				type: 'Feature',
				properties: {},
				geometry: geojson
			};
		}
	});

	var PointToGeoJSON = {
		toGeoJSON: function () {
			return L.GeoJSON.getFeature(this, {
				type: 'Point',
				coordinates: L.GeoJSON.latLngToCoords(this.getLatLng())
			});
		}
	};

	L.Marker.include(PointToGeoJSON);

	// @namespace CircleMarker
	// @method toGeoJSON(): Object
	// Returns a [`GeoJSON`](http://en.wikipedia.org/wiki/GeoJSON) representation of the circle marker (as a GeoJSON `Point` Feature).
	L.Circle.include(PointToGeoJSON);
	L.CircleMarker.include(PointToGeoJSON);


	// @namespace Polyline
	// @method toGeoJSON(): Object
	// Returns a [`GeoJSON`](http://en.wikipedia.org/wiki/GeoJSON) representation of the polyline (as a GeoJSON `LineString` or `MultiLineString` Feature).
	L.Polyline.prototype.toGeoJSON = function () {
		var multi = !L.Polyline._flat(this._latlngs);

		var coords = L.GeoJSON.latLngsToCoords(this._latlngs, multi ? 1 : 0);

		return L.GeoJSON.getFeature(this, {
			type: (multi ? 'Multi' : '') + 'LineString',
			coordinates: coords
		});
	};

	// @namespace Polygon
	// @method toGeoJSON(): Object
	// Returns a [`GeoJSON`](http://en.wikipedia.org/wiki/GeoJSON) representation of the polygon (as a GeoJSON `Polygon` or `MultiPolygon` Feature).
	L.Polygon.prototype.toGeoJSON = function () {
		var holes = !L.Polyline._flat(this._latlngs),
		    multi = holes && !L.Polyline._flat(this._latlngs[0]);

		var coords = L.GeoJSON.latLngsToCoords(this._latlngs, multi ? 2 : holes ? 1 : 0, true);

		if (!holes) {
			coords = [coords];
		}

		return L.GeoJSON.getFeature(this, {
			type: (multi ? 'Multi' : '') + 'Polygon',
			coordinates: coords
		});
	};


	// @namespace LayerGroup
	L.LayerGroup.include({
		toMultiPoint: function () {
			var coords = [];

			this.eachLayer(function (layer) {
				coords.push(layer.toGeoJSON().geometry.coordinates);
			});

			return L.GeoJSON.getFeature(this, {
				type: 'MultiPoint',
				coordinates: coords
			});
		},

		// @method toGeoJSON(): Object
		// Returns a [`GeoJSON`](http://en.wikipedia.org/wiki/GeoJSON) representation of the layer group (as a GeoJSON `GeometryCollection`).
		toGeoJSON: function () {

			var type = this.feature && this.feature.geometry && this.feature.geometry.type;

			if (type === 'MultiPoint') {
				return this.toMultiPoint();
			}

			var isGeometryCollection = type === 'GeometryCollection',
			    jsons = [];

			this.eachLayer(function (layer) {
				if (layer.toGeoJSON) {
					var json = layer.toGeoJSON();
					jsons.push(isGeometryCollection ? json.geometry : L.GeoJSON.asFeature(json));
				}
			});

			if (isGeometryCollection) {
				return L.GeoJSON.getFeature(this, {
					geometries: jsons,
					type: 'GeometryCollection'
				});
			}

			return {
				type: 'FeatureCollection',
				features: jsons
			};
		}
	});

	// @namespace GeoJSON
	// @factory L.geoJSON(geojson?: Object, options?: GeoJSON options)
	// Creates a GeoJSON layer. Optionally accepts an object in
	// [GeoJSON format](http://geojson.org/geojson-spec.html) to display on the map
	// (you can alternatively add it later with `addData` method) and an `options` object.
	L.geoJSON = function (geojson, options) {
		return new L.GeoJSON(geojson, options);
	};
	// Backward compatibility.
	L.geoJson = L.geoJSON;



	/*
	 * @namespace DomEvent
	 * Utility functions to work with the [DOM events](https://developer.mozilla.org/docs/Web/API/Event), used by Leaflet internally.
	 */

	// Inspired by John Resig, Dean Edwards and YUI addEvent implementations.



	var eventsKey = '_leaflet_events';

	L.DomEvent = {

		// @function on(el: HTMLElement, types: String, fn: Function, context?: Object): this
		// Adds a listener function (`fn`) to a particular DOM event type of the
		// element `el`. You can optionally specify the context of the listener
		// (object the `this` keyword will point to). You can also pass several
		// space-separated types (e.g. `'click dblclick'`).

		// @alternative
		// @function on(el: HTMLElement, eventMap: Object, context?: Object): this
		// Adds a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
		on: function (obj, types, fn, context) {

			if (typeof types === 'object') {
				for (var type in types) {
					this._on(obj, type, types[type], fn);
				}
			} else {
				types = L.Util.splitWords(types);

				for (var i = 0, len = types.length; i < len; i++) {
					this._on(obj, types[i], fn, context);
				}
			}

			return this;
		},

		// @function off(el: HTMLElement, types: String, fn: Function, context?: Object): this
		// Removes a previously added listener function. If no function is specified,
		// it will remove all the listeners of that particular DOM event from the element.
		// Note that if you passed a custom context to on, you must pass the same
		// context to `off` in order to remove the listener.

		// @alternative
		// @function off(el: HTMLElement, eventMap: Object, context?: Object): this
		// Removes a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
		off: function (obj, types, fn, context) {

			if (typeof types === 'object') {
				for (var type in types) {
					this._off(obj, type, types[type], fn);
				}
			} else {
				types = L.Util.splitWords(types);

				for (var i = 0, len = types.length; i < len; i++) {
					this._off(obj, types[i], fn, context);
				}
			}

			return this;
		},

		_on: function (obj, type, fn, context) {
			var id = type + L.stamp(fn) + (context ? '_' + L.stamp(context) : '');

			if (obj[eventsKey] && obj[eventsKey][id]) { return this; }

			var handler = function (e) {
				return fn.call(context || obj, e || window.event);
			};

			var originalHandler = handler;

			if (L.Browser.pointer && type.indexOf('touch') === 0) {
				this.addPointerListener(obj, type, handler, id);

			} else if (L.Browser.touch && (type === 'dblclick') && this.addDoubleTapListener) {
				this.addDoubleTapListener(obj, handler, id);

			} else if ('addEventListener' in obj) {

				if (type === 'mousewheel') {
					obj.addEventListener('onwheel' in obj ? 'wheel' : 'mousewheel', handler, false);

				} else if ((type === 'mouseenter') || (type === 'mouseleave')) {
					handler = function (e) {
						e = e || window.event;
						if (L.DomEvent._isExternalTarget(obj, e)) {
							originalHandler(e);
						}
					};
					obj.addEventListener(type === 'mouseenter' ? 'mouseover' : 'mouseout', handler, false);

				} else {
					if (type === 'click' && L.Browser.android) {
						handler = function (e) {
							return L.DomEvent._filterClick(e, originalHandler);
						};
					}
					obj.addEventListener(type, handler, false);
				}

			} else if ('attachEvent' in obj) {
				obj.attachEvent('on' + type, handler);
			}

			obj[eventsKey] = obj[eventsKey] || {};
			obj[eventsKey][id] = handler;

			return this;
		},

		_off: function (obj, type, fn, context) {

			var id = type + L.stamp(fn) + (context ? '_' + L.stamp(context) : ''),
			    handler = obj[eventsKey] && obj[eventsKey][id];

			if (!handler) { return this; }

			if (L.Browser.pointer && type.indexOf('touch') === 0) {
				this.removePointerListener(obj, type, id);

			} else if (L.Browser.touch && (type === 'dblclick') && this.removeDoubleTapListener) {
				this.removeDoubleTapListener(obj, id);

			} else if ('removeEventListener' in obj) {

				if (type === 'mousewheel') {
					obj.removeEventListener('onwheel' in obj ? 'wheel' : 'mousewheel', handler, false);

				} else {
					obj.removeEventListener(
						type === 'mouseenter' ? 'mouseover' :
						type === 'mouseleave' ? 'mouseout' : type, handler, false);
				}

			} else if ('detachEvent' in obj) {
				obj.detachEvent('on' + type, handler);
			}

			obj[eventsKey][id] = null;

			return this;
		},

		// @function stopPropagation(ev: DOMEvent): this
		// Stop the given event from propagation to parent elements. Used inside the listener functions:
		// ```js
		// L.DomEvent.on(div, 'click', function (ev) {
		// 	L.DomEvent.stopPropagation(ev);
		// });
		// ```
		stopPropagation: function (e) {

			if (e.stopPropagation) {
				e.stopPropagation();
			} else if (e.originalEvent) {  // In case of Leaflet event.
				e.originalEvent._stopped = true;
			} else {
				e.cancelBubble = true;
			}
			L.DomEvent._skipped(e);

			return this;
		},

		// @function disableScrollPropagation(el: HTMLElement): this
		// Adds `stopPropagation` to the element's `'mousewheel'` events (plus browser variants).
		disableScrollPropagation: function (el) {
			return L.DomEvent.on(el, 'mousewheel', L.DomEvent.stopPropagation);
		},

		// @function disableClickPropagation(el: HTMLElement): this
		// Adds `stopPropagation` to the element's `'click'`, `'doubleclick'`,
		// `'mousedown'` and `'touchstart'` events (plus browser variants).
		disableClickPropagation: function (el) {
			var stop = L.DomEvent.stopPropagation;

			L.DomEvent.on(el, L.Draggable.START.join(' '), stop);

			return L.DomEvent.on(el, {
				click: L.DomEvent._fakeStop,
				dblclick: stop
			});
		},

		// @function preventDefault(ev: DOMEvent): this
		// Prevents the default action of the DOM Event `ev` from happening (such as
		// following a link in the href of the a element, or doing a POST request
		// with page reload when a `<form>` is submitted).
		// Use it inside listener functions.
		preventDefault: function (e) {

			if (e.preventDefault) {
				e.preventDefault();
			} else {
				e.returnValue = false;
			}
			return this;
		},

		// @function stop(ev): this
		// Does `stopPropagation` and `preventDefault` at the same time.
		stop: function (e) {
			return L.DomEvent
				.preventDefault(e)
				.stopPropagation(e);
		},

		// @function getMousePosition(ev: DOMEvent, container?: HTMLElement): Point
		// Gets normalized mouse position from a DOM event relative to the
		// `container` or to the whole page if not specified.
		getMousePosition: function (e, container) {
			if (!container) {
				return new L.Point(e.clientX, e.clientY);
			}

			var rect = container.getBoundingClientRect();

			return new L.Point(
				e.clientX - rect.left - container.clientLeft,
				e.clientY - rect.top - container.clientTop);
		},

		// Chrome on Win scrolls double the pixels as in other platforms (see #4538),
		// and Firefox scrolls device pixels, not CSS pixels
		_wheelPxFactor: (L.Browser.win && L.Browser.chrome) ? 2 :
		                L.Browser.gecko ? window.devicePixelRatio :
		                1,

		// @function getWheelDelta(ev: DOMEvent): Number
		// Gets normalized wheel delta from a mousewheel DOM event, in vertical
		// pixels scrolled (negative if scrolling down).
		// Events from pointing devices without precise scrolling are mapped to
		// a best guess of 60 pixels.
		getWheelDelta: function (e) {
			return (L.Browser.edge) ? e.wheelDeltaY / 2 : // Don't trust window-geometry-based delta
			       (e.deltaY && e.deltaMode === 0) ? -e.deltaY / L.DomEvent._wheelPxFactor : // Pixels
			       (e.deltaY && e.deltaMode === 1) ? -e.deltaY * 20 : // Lines
			       (e.deltaY && e.deltaMode === 2) ? -e.deltaY * 60 : // Pages
			       (e.deltaX || e.deltaZ) ? 0 :	// Skip horizontal/depth wheel events
			       e.wheelDelta ? (e.wheelDeltaY || e.wheelDelta) / 2 : // Legacy IE pixels
			       (e.detail && Math.abs(e.detail) < 32765) ? -e.detail * 20 : // Legacy Moz lines
			       e.detail ? e.detail / -32765 * 60 : // Legacy Moz pages
			       0;
		},

		_skipEvents: {},

		_fakeStop: function (e) {
			// fakes stopPropagation by setting a special event flag, checked/reset with L.DomEvent._skipped(e)
			L.DomEvent._skipEvents[e.type] = true;
		},

		_skipped: function (e) {
			var skipped = this._skipEvents[e.type];
			// reset when checking, as it's only used in map container and propagates outside of the map
			this._skipEvents[e.type] = false;
			return skipped;
		},

		// check if element really left/entered the event target (for mouseenter/mouseleave)
		_isExternalTarget: function (el, e) {

			var related = e.relatedTarget;

			if (!related) { return true; }

			try {
				while (related && (related !== el)) {
					related = related.parentNode;
				}
			} catch (err) {
				return false;
			}
			return (related !== el);
		},

		// this is a horrible workaround for a bug in Android where a single touch triggers two click events
		_filterClick: function (e, handler) {
			var timeStamp = (e.timeStamp || (e.originalEvent && e.originalEvent.timeStamp)),
			    elapsed = L.DomEvent._lastClick && (timeStamp - L.DomEvent._lastClick);

			// are they closer together than 500ms yet more than 100ms?
			// Android typically triggers them ~300ms apart while multiple listeners
			// on the same event should be triggered far faster;
			// or check if click is simulated on the element, and if it is, reject any non-simulated events

			if ((elapsed && elapsed > 100 && elapsed < 500) || (e.target._simulatedClick && !e._simulated)) {
				L.DomEvent.stop(e);
				return;
			}
			L.DomEvent._lastClick = timeStamp;

			handler(e);
		}
	};

	// @function addListener(…): this
	// Alias to [`L.DomEvent.on`](#domevent-on)
	L.DomEvent.addListener = L.DomEvent.on;

	// @function removeListener(…): this
	// Alias to [`L.DomEvent.off`](#domevent-off)
	L.DomEvent.removeListener = L.DomEvent.off;



	/*
	 * @class Draggable
	 * @aka L.Draggable
	 * @inherits Evented
	 *
	 * A class for making DOM elements draggable (including touch support).
	 * Used internally for map and marker dragging. Only works for elements
	 * that were positioned with [`L.DomUtil.setPosition`](#domutil-setposition).
	 *
	 * @example
	 * ```js
	 * var draggable = new L.Draggable(elementToDrag);
	 * draggable.enable();
	 * ```
	 */

	L.Draggable = L.Evented.extend({

		options: {
			// @option clickTolerance: Number = 3
			// The max number of pixels a user can shift the mouse pointer during a click
			// for it to be considered a valid click (as opposed to a mouse drag).
			clickTolerance: 3
		},

		statics: {
			START: L.Browser.touch ? ['touchstart', 'mousedown'] : ['mousedown'],
			END: {
				mousedown: 'mouseup',
				touchstart: 'touchend',
				pointerdown: 'touchend',
				MSPointerDown: 'touchend'
			},
			MOVE: {
				mousedown: 'mousemove',
				touchstart: 'touchmove',
				pointerdown: 'touchmove',
				MSPointerDown: 'touchmove'
			}
		},

		// @constructor L.Draggable(el: HTMLElement, dragHandle?: HTMLElement, preventOutline: Boolean)
		// Creates a `Draggable` object for moving `el` when you start dragging the `dragHandle` element (equals `el` itself by default).
		initialize: function (element, dragStartTarget, preventOutline) {
			this._element = element;
			this._dragStartTarget = dragStartTarget || element;
			this._preventOutline = preventOutline;
		},

		// @method enable()
		// Enables the dragging ability
		enable: function () {
			if (this._enabled) { return; }

			L.DomEvent.on(this._dragStartTarget, L.Draggable.START.join(' '), this._onDown, this);

			this._enabled = true;
		},

		// @method disable()
		// Disables the dragging ability
		disable: function () {
			if (!this._enabled) { return; }

			L.DomEvent.off(this._dragStartTarget, L.Draggable.START.join(' '), this._onDown, this);

			this._enabled = false;
			this._moved = false;
		},

		_onDown: function (e) {
			// Ignore simulated events, since we handle both touch and
			// mouse explicitly; otherwise we risk getting duplicates of
			// touch events, see #4315.
			// Also ignore the event if disabled; this happens in IE11
			// under some circumstances, see #3666.
			if (e._simulated || !this._enabled) { return; }

			this._moved = false;

			if (L.DomUtil.hasClass(this._element, 'leaflet-zoom-anim')) { return; }

			if (L.Draggable._dragging || e.shiftKey || ((e.which !== 1) && (e.button !== 1) && !e.touches) || !this._enabled) { return; }
			L.Draggable._dragging = true;  // Prevent dragging multiple objects at once.

			if (this._preventOutline) {
				L.DomUtil.preventOutline(this._element);
			}

			L.DomUtil.disableImageDrag();
			L.DomUtil.disableTextSelection();

			if (this._moving) { return; }

			// @event down: Event
			// Fired when a drag is about to start.
			this.fire('down');

			var first = e.touches ? e.touches[0] : e;

			this._startPoint = new L.Point(first.clientX, first.clientY);

			L.DomEvent
				.on(document, L.Draggable.MOVE[e.type], this._onMove, this)
				.on(document, L.Draggable.END[e.type], this._onUp, this);
		},

		_onMove: function (e) {
			// Ignore simulated events, since we handle both touch and
			// mouse explicitly; otherwise we risk getting duplicates of
			// touch events, see #4315.
			// Also ignore the event if disabled; this happens in IE11
			// under some circumstances, see #3666.
			if (e._simulated || !this._enabled) { return; }

			if (e.touches && e.touches.length > 1) {
				this._moved = true;
				return;
			}

			var first = (e.touches && e.touches.length === 1 ? e.touches[0] : e),
			    newPoint = new L.Point(first.clientX, first.clientY),
			    offset = newPoint.subtract(this._startPoint);

			if (!offset.x && !offset.y) { return; }
			if (Math.abs(offset.x) + Math.abs(offset.y) < this.options.clickTolerance) { return; }

			L.DomEvent.preventDefault(e);

			if (!this._moved) {
				// @event dragstart: Event
				// Fired when a drag starts
				this.fire('dragstart');

				this._moved = true;
				this._startPos = L.DomUtil.getPosition(this._element).subtract(offset);

				L.DomUtil.addClass(document.body, 'leaflet-dragging');

				this._lastTarget = e.target || e.srcElement;
				// IE and Edge do not give the <use> element, so fetch it
				// if necessary
				if ((window.SVGElementInstance) && (this._lastTarget instanceof SVGElementInstance)) {
					this._lastTarget = this._lastTarget.correspondingUseElement;
				}
				L.DomUtil.addClass(this._lastTarget, 'leaflet-drag-target');
			}

			this._newPos = this._startPos.add(offset);
			this._moving = true;

			L.Util.cancelAnimFrame(this._animRequest);
			this._lastEvent = e;
			this._animRequest = L.Util.requestAnimFrame(this._updatePosition, this, true);
		},

		_updatePosition: function () {
			var e = {originalEvent: this._lastEvent};

			// @event predrag: Event
			// Fired continuously during dragging *before* each corresponding
			// update of the element's position.
			this.fire('predrag', e);
			L.DomUtil.setPosition(this._element, this._newPos);

			// @event drag: Event
			// Fired continuously during dragging.
			this.fire('drag', e);
		},

		_onUp: function (e) {
			// Ignore simulated events, since we handle both touch and
			// mouse explicitly; otherwise we risk getting duplicates of
			// touch events, see #4315.
			// Also ignore the event if disabled; this happens in IE11
			// under some circumstances, see #3666.
			if (e._simulated || !this._enabled) { return; }

			L.DomUtil.removeClass(document.body, 'leaflet-dragging');

			if (this._lastTarget) {
				L.DomUtil.removeClass(this._lastTarget, 'leaflet-drag-target');
				this._lastTarget = null;
			}

			for (var i in L.Draggable.MOVE) {
				L.DomEvent
					.off(document, L.Draggable.MOVE[i], this._onMove, this)
					.off(document, L.Draggable.END[i], this._onUp, this);
			}

			L.DomUtil.enableImageDrag();
			L.DomUtil.enableTextSelection();

			if (this._moved && this._moving) {
				// ensure drag is not fired after dragend
				L.Util.cancelAnimFrame(this._animRequest);

				// @event dragend: DragEndEvent
				// Fired when the drag ends.
				this.fire('dragend', {
					distance: this._newPos.distanceTo(this._startPos)
				});
			}

			this._moving = false;
			L.Draggable._dragging = false;
		}
	});



	/*
		L.Handler is a base class for handler classes that are used internally to inject
		interaction features like dragging to classes like Map and Marker.
	*/

	// @class Handler
	// @aka L.Handler
	// Abstract class for map interaction handlers

	L.Handler = L.Class.extend({
		initialize: function (map) {
			this._map = map;
		},

		// @method enable(): this
		// Enables the handler
		enable: function () {
			if (this._enabled) { return this; }

			this._enabled = true;
			this.addHooks();
			return this;
		},

		// @method disable(): this
		// Disables the handler
		disable: function () {
			if (!this._enabled) { return this; }

			this._enabled = false;
			this.removeHooks();
			return this;
		},

		// @method enabled(): Boolean
		// Returns `true` if the handler is enabled
		enabled: function () {
			return !!this._enabled;
		}

		// @section Extension methods
		// Classes inheriting from `Handler` must implement the two following methods:
		// @method addHooks()
		// Called when the handler is enabled, should add event hooks.
		// @method removeHooks()
		// Called when the handler is disabled, should remove the event hooks added previously.
	});



	/*
	 * L.Handler.MapDrag is used to make the map draggable (with panning inertia), enabled by default.
	 */

	// @namespace Map
	// @section Interaction Options
	L.Map.mergeOptions({
		// @option dragging: Boolean = true
		// Whether the map be draggable with mouse/touch or not.
		dragging: true,

		// @section Panning Inertia Options
		// @option inertia: Boolean = *
		// If enabled, panning of the map will have an inertia effect where
		// the map builds momentum while dragging and continues moving in
		// the same direction for some time. Feels especially nice on touch
		// devices. Enabled by default unless running on old Android devices.
		inertia: !L.Browser.android23,

		// @option inertiaDeceleration: Number = 3000
		// The rate with which the inertial movement slows down, in pixels/second².
		inertiaDeceleration: 3400, // px/s^2

		// @option inertiaMaxSpeed: Number = Infinity
		// Max speed of the inertial movement, in pixels/second.
		inertiaMaxSpeed: Infinity, // px/s

		// @option easeLinearity: Number = 0.2
		easeLinearity: 0.2,

		// TODO refactor, move to CRS
		// @option worldCopyJump: Boolean = false
		// With this option enabled, the map tracks when you pan to another "copy"
		// of the world and seamlessly jumps to the original one so that all overlays
		// like markers and vector layers are still visible.
		worldCopyJump: false,

		// @option maxBoundsViscosity: Number = 0.0
		// If `maxBounds` is set, this option will control how solid the bounds
		// are when dragging the map around. The default value of `0.0` allows the
		// user to drag outside the bounds at normal speed, higher values will
		// slow down map dragging outside bounds, and `1.0` makes the bounds fully
		// solid, preventing the user from dragging outside the bounds.
		maxBoundsViscosity: 0.0
	});

	L.Map.Drag = L.Handler.extend({
		addHooks: function () {
			if (!this._draggable) {
				var map = this._map;

				this._draggable = new L.Draggable(map._mapPane, map._container);

				this._draggable.on({
					down: this._onDown,
					dragstart: this._onDragStart,
					drag: this._onDrag,
					dragend: this._onDragEnd
				}, this);

				this._draggable.on('predrag', this._onPreDragLimit, this);
				if (map.options.worldCopyJump) {
					this._draggable.on('predrag', this._onPreDragWrap, this);
					map.on('zoomend', this._onZoomEnd, this);

					map.whenReady(this._onZoomEnd, this);
				}
			}
			L.DomUtil.addClass(this._map._container, 'leaflet-grab leaflet-touch-drag');
			this._draggable.enable();
			this._positions = [];
			this._times = [];
		},

		removeHooks: function () {
			L.DomUtil.removeClass(this._map._container, 'leaflet-grab');
			L.DomUtil.removeClass(this._map._container, 'leaflet-touch-drag');
			this._draggable.disable();
		},

		moved: function () {
			return this._draggable && this._draggable._moved;
		},

		moving: function () {
			return this._draggable && this._draggable._moving;
		},

		_onDown: function () {
			this._map._stop();
		},

		_onDragStart: function () {
			var map = this._map;

			if (this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
				var bounds = L.latLngBounds(this._map.options.maxBounds);

				this._offsetLimit = L.bounds(
					this._map.latLngToContainerPoint(bounds.getNorthWest()).multiplyBy(-1),
					this._map.latLngToContainerPoint(bounds.getSouthEast()).multiplyBy(-1)
						.add(this._map.getSize()));

				this._viscosity = Math.min(1.0, Math.max(0.0, this._map.options.maxBoundsViscosity));
			} else {
				this._offsetLimit = null;
			}

			map
			    .fire('movestart')
			    .fire('dragstart');

			if (map.options.inertia) {
				this._positions = [];
				this._times = [];
			}
		},

		_onDrag: function (e) {
			if (this._map.options.inertia) {
				var time = this._lastTime = +new Date(),
				    pos = this._lastPos = this._draggable._absPos || this._draggable._newPos;

				this._positions.push(pos);
				this._times.push(time);

				if (time - this._times[0] > 50) {
					this._positions.shift();
					this._times.shift();
				}
			}

			this._map
			    .fire('move', e)
			    .fire('drag', e);
		},

		_onZoomEnd: function () {
			var pxCenter = this._map.getSize().divideBy(2),
			    pxWorldCenter = this._map.latLngToLayerPoint([0, 0]);

			this._initialWorldOffset = pxWorldCenter.subtract(pxCenter).x;
			this._worldWidth = this._map.getPixelWorldBounds().getSize().x;
		},

		_viscousLimit: function (value, threshold) {
			return value - (value - threshold) * this._viscosity;
		},

		_onPreDragLimit: function () {
			if (!this._viscosity || !this._offsetLimit) { return; }

			var offset = this._draggable._newPos.subtract(this._draggable._startPos);

			var limit = this._offsetLimit;
			if (offset.x < limit.min.x) { offset.x = this._viscousLimit(offset.x, limit.min.x); }
			if (offset.y < limit.min.y) { offset.y = this._viscousLimit(offset.y, limit.min.y); }
			if (offset.x > limit.max.x) { offset.x = this._viscousLimit(offset.x, limit.max.x); }
			if (offset.y > limit.max.y) { offset.y = this._viscousLimit(offset.y, limit.max.y); }

			this._draggable._newPos = this._draggable._startPos.add(offset);
		},

		_onPreDragWrap: function () {
			// TODO refactor to be able to adjust map pane position after zoom
			var worldWidth = this._worldWidth,
			    halfWidth = Math.round(worldWidth / 2),
			    dx = this._initialWorldOffset,
			    x = this._draggable._newPos.x,
			    newX1 = (x - halfWidth + dx) % worldWidth + halfWidth - dx,
			    newX2 = (x + halfWidth + dx) % worldWidth - halfWidth - dx,
			    newX = Math.abs(newX1 + dx) < Math.abs(newX2 + dx) ? newX1 : newX2;

			this._draggable._absPos = this._draggable._newPos.clone();
			this._draggable._newPos.x = newX;
		},

		_onDragEnd: function (e) {
			var map = this._map,
			    options = map.options,

			    noInertia = !options.inertia || this._times.length < 2;

			map.fire('dragend', e);

			if (noInertia) {
				map.fire('moveend');

			} else {

				var direction = this._lastPos.subtract(this._positions[0]),
				    duration = (this._lastTime - this._times[0]) / 1000,
				    ease = options.easeLinearity,

				    speedVector = direction.multiplyBy(ease / duration),
				    speed = speedVector.distanceTo([0, 0]),

				    limitedSpeed = Math.min(options.inertiaMaxSpeed, speed),
				    limitedSpeedVector = speedVector.multiplyBy(limitedSpeed / speed),

				    decelerationDuration = limitedSpeed / (options.inertiaDeceleration * ease),
				    offset = limitedSpeedVector.multiplyBy(-decelerationDuration / 2).round();

				if (!offset.x && !offset.y) {
					map.fire('moveend');

				} else {
					offset = map._limitOffset(offset, map.options.maxBounds);

					L.Util.requestAnimFrame(function () {
						map.panBy(offset, {
							duration: decelerationDuration,
							easeLinearity: ease,
							noMoveStart: true,
							animate: true
						});
					});
				}
			}
		}
	});

	// @section Handlers
	// @property dragging: Handler
	// Map dragging handler (by both mouse and touch).
	L.Map.addInitHook('addHandler', 'dragging', L.Map.Drag);



	/*
	 * L.Handler.DoubleClickZoom is used to handle double-click zoom on the map, enabled by default.
	 */

	// @namespace Map
	// @section Interaction Options

	L.Map.mergeOptions({
		// @option doubleClickZoom: Boolean|String = true
		// Whether the map can be zoomed in by double clicking on it and
		// zoomed out by double clicking while holding shift. If passed
		// `'center'`, double-click zoom will zoom to the center of the
		//  view regardless of where the mouse was.
		doubleClickZoom: true
	});

	L.Map.DoubleClickZoom = L.Handler.extend({
		addHooks: function () {
			this._map.on('dblclick', this._onDoubleClick, this);
		},

		removeHooks: function () {
			this._map.off('dblclick', this._onDoubleClick, this);
		},

		_onDoubleClick: function (e) {
			var map = this._map,
			    oldZoom = map.getZoom(),
			    delta = map.options.zoomDelta,
			    zoom = e.originalEvent.shiftKey ? oldZoom - delta : oldZoom + delta;

			if (map.options.doubleClickZoom === 'center') {
				map.setZoom(zoom);
			} else {
				map.setZoomAround(e.containerPoint, zoom);
			}
		}
	});

	// @section Handlers
	//
	// Map properties include interaction handlers that allow you to control
	// interaction behavior in runtime, enabling or disabling certain features such
	// as dragging or touch zoom (see `Handler` methods). For example:
	//
	// ```js
	// map.doubleClickZoom.disable();
	// ```
	//
	// @property doubleClickZoom: Handler
	// Double click zoom handler.
	L.Map.addInitHook('addHandler', 'doubleClickZoom', L.Map.DoubleClickZoom);



	/*
	 * L.Handler.ScrollWheelZoom is used by L.Map to enable mouse scroll wheel zoom on the map.
	 */

	// @namespace Map
	// @section Interaction Options
	L.Map.mergeOptions({
		// @section Mousewheel options
		// @option scrollWheelZoom: Boolean|String = true
		// Whether the map can be zoomed by using the mouse wheel. If passed `'center'`,
		// it will zoom to the center of the view regardless of where the mouse was.
		scrollWheelZoom: true,

		// @option wheelDebounceTime: Number = 40
		// Limits the rate at which a wheel can fire (in milliseconds). By default
		// user can't zoom via wheel more often than once per 40 ms.
		wheelDebounceTime: 40,

		// @option wheelPxPerZoomLevel: Number = 60
		// How many scroll pixels (as reported by [L.DomEvent.getWheelDelta](#domevent-getwheeldelta))
		// mean a change of one full zoom level. Smaller values will make wheel-zooming
		// faster (and vice versa).
		wheelPxPerZoomLevel: 60
	});

	L.Map.ScrollWheelZoom = L.Handler.extend({
		addHooks: function () {
			L.DomEvent.on(this._map._container, 'mousewheel', this._onWheelScroll, this);

			this._delta = 0;
		},

		removeHooks: function () {
			L.DomEvent.off(this._map._container, 'mousewheel', this._onWheelScroll, this);
		},

		_onWheelScroll: function (e) {
			var delta = L.DomEvent.getWheelDelta(e);

			var debounce = this._map.options.wheelDebounceTime;

			this._delta += delta;
			this._lastMousePos = this._map.mouseEventToContainerPoint(e);

			if (!this._startTime) {
				this._startTime = +new Date();
			}

			var left = Math.max(debounce - (+new Date() - this._startTime), 0);

			clearTimeout(this._timer);
			this._timer = setTimeout(L.bind(this._performZoom, this), left);

			L.DomEvent.stop(e);
		},

		_performZoom: function () {
			var map = this._map,
			    zoom = map.getZoom(),
			    snap = this._map.options.zoomSnap || 0;

			map._stop(); // stop panning and fly animations if any

			// map the delta with a sigmoid function to -4..4 range leaning on -1..1
			var d2 = this._delta / (this._map.options.wheelPxPerZoomLevel * 4),
			    d3 = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(d2)))) / Math.LN2,
			    d4 = snap ? Math.ceil(d3 / snap) * snap : d3,
			    delta = map._limitZoom(zoom + (this._delta > 0 ? d4 : -d4)) - zoom;

			this._delta = 0;
			this._startTime = null;

			if (!delta) { return; }

			if (map.options.scrollWheelZoom === 'center') {
				map.setZoom(zoom + delta);
			} else {
				map.setZoomAround(this._lastMousePos, zoom + delta);
			}
		}
	});

	// @section Handlers
	// @property scrollWheelZoom: Handler
	// Scroll wheel zoom handler.
	L.Map.addInitHook('addHandler', 'scrollWheelZoom', L.Map.ScrollWheelZoom);



	/*
	 * Extends the event handling code with double tap support for mobile browsers.
	 */

	L.extend(L.DomEvent, {

		_touchstart: L.Browser.msPointer ? 'MSPointerDown' : L.Browser.pointer ? 'pointerdown' : 'touchstart',
		_touchend: L.Browser.msPointer ? 'MSPointerUp' : L.Browser.pointer ? 'pointerup' : 'touchend',

		// inspired by Zepto touch code by Thomas Fuchs
		addDoubleTapListener: function (obj, handler, id) {
			var last, touch,
			    doubleTap = false,
			    delay = 250;

			function onTouchStart(e) {
				var count;

				if (L.Browser.pointer) {
					count = L.DomEvent._pointersCount;
				} else {
					count = e.touches.length;
				}

				if (count > 1) { return; }

				var now = Date.now(),
				    delta = now - (last || now);

				touch = e.touches ? e.touches[0] : e;
				doubleTap = (delta > 0 && delta <= delay);
				last = now;
			}

			function onTouchEnd() {
				if (doubleTap && !touch.cancelBubble) {
					if (L.Browser.pointer) {
						// work around .type being readonly with MSPointer* events
						var newTouch = {},
						    prop, i;

						for (i in touch) {
							prop = touch[i];
							newTouch[i] = prop && prop.bind ? prop.bind(touch) : prop;
						}
						touch = newTouch;
					}
					touch.type = 'dblclick';
					handler(touch);
					last = null;
				}
			}

			var pre = '_leaflet_',
			    touchstart = this._touchstart,
			    touchend = this._touchend;

			obj[pre + touchstart + id] = onTouchStart;
			obj[pre + touchend + id] = onTouchEnd;
			obj[pre + 'dblclick' + id] = handler;

			obj.addEventListener(touchstart, onTouchStart, false);
			obj.addEventListener(touchend, onTouchEnd, false);

			// On some platforms (notably, chrome on win10 + touchscreen + mouse),
			// the browser doesn't fire touchend/pointerup events but does fire
			// native dblclicks. See #4127.
			if (!L.Browser.edge) {
				obj.addEventListener('dblclick', handler, false);
			}

			return this;
		},

		removeDoubleTapListener: function (obj, id) {
			var pre = '_leaflet_',
			    touchstart = obj[pre + this._touchstart + id],
			    touchend = obj[pre + this._touchend + id],
			    dblclick = obj[pre + 'dblclick' + id];

			obj.removeEventListener(this._touchstart, touchstart, false);
			obj.removeEventListener(this._touchend, touchend, false);
			if (!L.Browser.edge) {
				obj.removeEventListener('dblclick', dblclick, false);
			}

			return this;
		}
	});



	/*
	 * Extends L.DomEvent to provide touch support for Internet Explorer and Windows-based devices.
	 */

	L.extend(L.DomEvent, {

		POINTER_DOWN:   L.Browser.msPointer ? 'MSPointerDown'   : 'pointerdown',
		POINTER_MOVE:   L.Browser.msPointer ? 'MSPointerMove'   : 'pointermove',
		POINTER_UP:     L.Browser.msPointer ? 'MSPointerUp'     : 'pointerup',
		POINTER_CANCEL: L.Browser.msPointer ? 'MSPointerCancel' : 'pointercancel',
		TAG_WHITE_LIST: ['INPUT', 'SELECT', 'OPTION'],

		_pointers: {},
		_pointersCount: 0,

		// Provides a touch events wrapper for (ms)pointer events.
		// ref http://www.w3.org/TR/pointerevents/ https://www.w3.org/Bugs/Public/show_bug.cgi?id=22890

		addPointerListener: function (obj, type, handler, id) {

			if (type === 'touchstart') {
				this._addPointerStart(obj, handler, id);

			} else if (type === 'touchmove') {
				this._addPointerMove(obj, handler, id);

			} else if (type === 'touchend') {
				this._addPointerEnd(obj, handler, id);
			}

			return this;
		},

		removePointerListener: function (obj, type, id) {
			var handler = obj['_leaflet_' + type + id];

			if (type === 'touchstart') {
				obj.removeEventListener(this.POINTER_DOWN, handler, false);

			} else if (type === 'touchmove') {
				obj.removeEventListener(this.POINTER_MOVE, handler, false);

			} else if (type === 'touchend') {
				obj.removeEventListener(this.POINTER_UP, handler, false);
				obj.removeEventListener(this.POINTER_CANCEL, handler, false);
			}

			return this;
		},

		_addPointerStart: function (obj, handler, id) {
			var onDown = L.bind(function (e) {
				if (e.pointerType !== 'mouse' && e.pointerType !== e.MSPOINTER_TYPE_MOUSE) {
					// In IE11, some touch events needs to fire for form controls, or
					// the controls will stop working. We keep a whitelist of tag names that
					// need these events. For other target tags, we prevent default on the event.
					if (this.TAG_WHITE_LIST.indexOf(e.target.tagName) < 0) {
						L.DomEvent.preventDefault(e);
					} else {
						return;
					}
				}

				this._handlePointer(e, handler);
			}, this);

			obj['_leaflet_touchstart' + id] = onDown;
			obj.addEventListener(this.POINTER_DOWN, onDown, false);

			// need to keep track of what pointers and how many are active to provide e.touches emulation
			if (!this._pointerDocListener) {
				var pointerUp = L.bind(this._globalPointerUp, this);

				// we listen documentElement as any drags that end by moving the touch off the screen get fired there
				document.documentElement.addEventListener(this.POINTER_DOWN, L.bind(this._globalPointerDown, this), true);
				document.documentElement.addEventListener(this.POINTER_MOVE, L.bind(this._globalPointerMove, this), true);
				document.documentElement.addEventListener(this.POINTER_UP, pointerUp, true);
				document.documentElement.addEventListener(this.POINTER_CANCEL, pointerUp, true);

				this._pointerDocListener = true;
			}
		},

		_globalPointerDown: function (e) {
			this._pointers[e.pointerId] = e;
			this._pointersCount++;
		},

		_globalPointerMove: function (e) {
			if (this._pointers[e.pointerId]) {
				this._pointers[e.pointerId] = e;
			}
		},

		_globalPointerUp: function (e) {
			delete this._pointers[e.pointerId];
			this._pointersCount--;
		},

		_handlePointer: function (e, handler) {
			e.touches = [];
			for (var i in this._pointers) {
				e.touches.push(this._pointers[i]);
			}
			e.changedTouches = [e];

			handler(e);
		},

		_addPointerMove: function (obj, handler, id) {
			var onMove = L.bind(function (e) {
				// don't fire touch moves when mouse isn't down
				if ((e.pointerType === e.MSPOINTER_TYPE_MOUSE || e.pointerType === 'mouse') && e.buttons === 0) { return; }

				this._handlePointer(e, handler);
			}, this);

			obj['_leaflet_touchmove' + id] = onMove;
			obj.addEventListener(this.POINTER_MOVE, onMove, false);
		},

		_addPointerEnd: function (obj, handler, id) {
			var onUp = L.bind(function (e) {
				this._handlePointer(e, handler);
			}, this);

			obj['_leaflet_touchend' + id] = onUp;
			obj.addEventListener(this.POINTER_UP, onUp, false);
			obj.addEventListener(this.POINTER_CANCEL, onUp, false);
		}
	});



	/*
	 * L.Handler.TouchZoom is used by L.Map to add pinch zoom on supported mobile browsers.
	 */

	// @namespace Map
	// @section Interaction Options
	L.Map.mergeOptions({
		// @section Touch interaction options
		// @option touchZoom: Boolean|String = *
		// Whether the map can be zoomed by touch-dragging with two fingers. If
		// passed `'center'`, it will zoom to the center of the view regardless of
		// where the touch events (fingers) were. Enabled for touch-capable web
		// browsers except for old Androids.
		touchZoom: L.Browser.touch && !L.Browser.android23,

		// @option bounceAtZoomLimits: Boolean = true
		// Set it to false if you don't want the map to zoom beyond min/max zoom
		// and then bounce back when pinch-zooming.
		bounceAtZoomLimits: true
	});

	L.Map.TouchZoom = L.Handler.extend({
		addHooks: function () {
			L.DomUtil.addClass(this._map._container, 'leaflet-touch-zoom');
			L.DomEvent.on(this._map._container, 'touchstart', this._onTouchStart, this);
		},

		removeHooks: function () {
			L.DomUtil.removeClass(this._map._container, 'leaflet-touch-zoom');
			L.DomEvent.off(this._map._container, 'touchstart', this._onTouchStart, this);
		},

		_onTouchStart: function (e) {
			var map = this._map;
			if (!e.touches || e.touches.length !== 2 || map._animatingZoom || this._zooming) { return; }

			var p1 = map.mouseEventToContainerPoint(e.touches[0]),
			    p2 = map.mouseEventToContainerPoint(e.touches[1]);

			this._centerPoint = map.getSize()._divideBy(2);
			this._startLatLng = map.containerPointToLatLng(this._centerPoint);
			if (map.options.touchZoom !== 'center') {
				this._pinchStartLatLng = map.containerPointToLatLng(p1.add(p2)._divideBy(2));
			}

			this._startDist = p1.distanceTo(p2);
			this._startZoom = map.getZoom();

			this._moved = false;
			this._zooming = true;

			map._stop();

			L.DomEvent
			    .on(document, 'touchmove', this._onTouchMove, this)
			    .on(document, 'touchend', this._onTouchEnd, this);

			L.DomEvent.preventDefault(e);
		},

		_onTouchMove: function (e) {
			if (!e.touches || e.touches.length !== 2 || !this._zooming) { return; }

			var map = this._map,
			    p1 = map.mouseEventToContainerPoint(e.touches[0]),
			    p2 = map.mouseEventToContainerPoint(e.touches[1]),
			    scale = p1.distanceTo(p2) / this._startDist;


			this._zoom = map.getScaleZoom(scale, this._startZoom);

			if (!map.options.bounceAtZoomLimits && (
				(this._zoom < map.getMinZoom() && scale < 1) ||
				(this._zoom > map.getMaxZoom() && scale > 1))) {
				this._zoom = map._limitZoom(this._zoom);
			}

			if (map.options.touchZoom === 'center') {
				this._center = this._startLatLng;
				if (scale === 1) { return; }
			} else {
				// Get delta from pinch to center, so centerLatLng is delta applied to initial pinchLatLng
				var delta = p1._add(p2)._divideBy(2)._subtract(this._centerPoint);
				if (scale === 1 && delta.x === 0 && delta.y === 0) { return; }
				this._center = map.unproject(map.project(this._pinchStartLatLng, this._zoom).subtract(delta), this._zoom);
			}

			if (!this._moved) {
				map._moveStart(true);
				this._moved = true;
			}

			L.Util.cancelAnimFrame(this._animRequest);

			var moveFn = L.bind(map._move, map, this._center, this._zoom, {pinch: true, round: false});
			this._animRequest = L.Util.requestAnimFrame(moveFn, this, true);

			L.DomEvent.preventDefault(e);
		},

		_onTouchEnd: function () {
			if (!this._moved || !this._zooming) {
				this._zooming = false;
				return;
			}

			this._zooming = false;
			L.Util.cancelAnimFrame(this._animRequest);

			L.DomEvent
			    .off(document, 'touchmove', this._onTouchMove)
			    .off(document, 'touchend', this._onTouchEnd);

			// Pinch updates GridLayers' levels only when zoomSnap is off, so zoomSnap becomes noUpdate.
			if (this._map.options.zoomAnimation) {
				this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), true, this._map.options.zoomSnap);
			} else {
				this._map._resetView(this._center, this._map._limitZoom(this._zoom));
			}
		}
	});

	// @section Handlers
	// @property touchZoom: Handler
	// Touch zoom handler.
	L.Map.addInitHook('addHandler', 'touchZoom', L.Map.TouchZoom);



	/*
	 * L.Map.Tap is used to enable mobile hacks like quick taps and long hold.
	 */

	// @namespace Map
	// @section Interaction Options
	L.Map.mergeOptions({
		// @section Touch interaction options
		// @option tap: Boolean = true
		// Enables mobile hacks for supporting instant taps (fixing 200ms click
		// delay on iOS/Android) and touch holds (fired as `contextmenu` events).
		tap: true,

		// @option tapTolerance: Number = 15
		// The max number of pixels a user can shift his finger during touch
		// for it to be considered a valid tap.
		tapTolerance: 15
	});

	L.Map.Tap = L.Handler.extend({
		addHooks: function () {
			L.DomEvent.on(this._map._container, 'touchstart', this._onDown, this);
		},

		removeHooks: function () {
			L.DomEvent.off(this._map._container, 'touchstart', this._onDown, this);
		},

		_onDown: function (e) {
			if (!e.touches) { return; }

			L.DomEvent.preventDefault(e);

			this._fireClick = true;

			// don't simulate click or track longpress if more than 1 touch
			if (e.touches.length > 1) {
				this._fireClick = false;
				clearTimeout(this._holdTimeout);
				return;
			}

			var first = e.touches[0],
			    el = first.target;

			this._startPos = this._newPos = new L.Point(first.clientX, first.clientY);

			// if touching a link, highlight it
			if (el.tagName && el.tagName.toLowerCase() === 'a') {
				L.DomUtil.addClass(el, 'leaflet-active');
			}

			// simulate long hold but setting a timeout
			this._holdTimeout = setTimeout(L.bind(function () {
				if (this._isTapValid()) {
					this._fireClick = false;
					this._onUp();
					this._simulateEvent('contextmenu', first);
				}
			}, this), 1000);

			this._simulateEvent('mousedown', first);

			L.DomEvent.on(document, {
				touchmove: this._onMove,
				touchend: this._onUp
			}, this);
		},

		_onUp: function (e) {
			clearTimeout(this._holdTimeout);

			L.DomEvent.off(document, {
				touchmove: this._onMove,
				touchend: this._onUp
			}, this);

			if (this._fireClick && e && e.changedTouches) {

				var first = e.changedTouches[0],
				    el = first.target;

				if (el && el.tagName && el.tagName.toLowerCase() === 'a') {
					L.DomUtil.removeClass(el, 'leaflet-active');
				}

				this._simulateEvent('mouseup', first);

				// simulate click if the touch didn't move too much
				if (this._isTapValid()) {
					this._simulateEvent('click', first);
				}
			}
		},

		_isTapValid: function () {
			return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
		},

		_onMove: function (e) {
			var first = e.touches[0];
			this._newPos = new L.Point(first.clientX, first.clientY);
			this._simulateEvent('mousemove', first);
		},

		_simulateEvent: function (type, e) {
			var simulatedEvent = document.createEvent('MouseEvents');

			simulatedEvent._simulated = true;
			e.target._simulatedClick = true;

			simulatedEvent.initMouseEvent(
			        type, true, true, window, 1,
			        e.screenX, e.screenY,
			        e.clientX, e.clientY,
			        false, false, false, false, 0, null);

			e.target.dispatchEvent(simulatedEvent);
		}
	});

	// @section Handlers
	// @property tap: Handler
	// Mobile touch hacks (quick tap and touch hold) handler.
	if (L.Browser.touch && !L.Browser.pointer) {
		L.Map.addInitHook('addHandler', 'tap', L.Map.Tap);
	}



	/*
	 * L.Handler.BoxZoom is used to add shift-drag zoom interaction to the map
	 * (zoom to a selected bounding box), enabled by default.
	 */

	// @namespace Map
	// @section Interaction Options
	L.Map.mergeOptions({
		// @option boxZoom: Boolean = true
		// Whether the map can be zoomed to a rectangular area specified by
		// dragging the mouse while pressing the shift key.
		boxZoom: true
	});

	L.Map.BoxZoom = L.Handler.extend({
		initialize: function (map) {
			this._map = map;
			this._container = map._container;
			this._pane = map._panes.overlayPane;
		},

		addHooks: function () {
			L.DomEvent.on(this._container, 'mousedown', this._onMouseDown, this);
		},

		removeHooks: function () {
			L.DomEvent.off(this._container, 'mousedown', this._onMouseDown, this);
		},

		moved: function () {
			return this._moved;
		},

		_resetState: function () {
			this._moved = false;
		},

		_onMouseDown: function (e) {
			if (!e.shiftKey || ((e.which !== 1) && (e.button !== 1))) { return false; }

			this._resetState();

			L.DomUtil.disableTextSelection();
			L.DomUtil.disableImageDrag();

			this._startPoint = this._map.mouseEventToContainerPoint(e);

			L.DomEvent.on(document, {
				contextmenu: L.DomEvent.stop,
				mousemove: this._onMouseMove,
				mouseup: this._onMouseUp,
				keydown: this._onKeyDown
			}, this);
		},

		_onMouseMove: function (e) {
			if (!this._moved) {
				this._moved = true;

				this._box = L.DomUtil.create('div', 'leaflet-zoom-box', this._container);
				L.DomUtil.addClass(this._container, 'leaflet-crosshair');

				this._map.fire('boxzoomstart');
			}

			this._point = this._map.mouseEventToContainerPoint(e);

			var bounds = new L.Bounds(this._point, this._startPoint),
			    size = bounds.getSize();

			L.DomUtil.setPosition(this._box, bounds.min);

			this._box.style.width  = size.x + 'px';
			this._box.style.height = size.y + 'px';
		},

		_finish: function () {
			if (this._moved) {
				L.DomUtil.remove(this._box);
				L.DomUtil.removeClass(this._container, 'leaflet-crosshair');
			}

			L.DomUtil.enableTextSelection();
			L.DomUtil.enableImageDrag();

			L.DomEvent.off(document, {
				contextmenu: L.DomEvent.stop,
				mousemove: this._onMouseMove,
				mouseup: this._onMouseUp,
				keydown: this._onKeyDown
			}, this);
		},

		_onMouseUp: function (e) {
			if ((e.which !== 1) && (e.button !== 1)) { return; }

			this._finish();

			if (!this._moved) { return; }
			// Postpone to next JS tick so internal click event handling
			// still see it as "moved".
			setTimeout(L.bind(this._resetState, this), 0);

			var bounds = new L.LatLngBounds(
			        this._map.containerPointToLatLng(this._startPoint),
			        this._map.containerPointToLatLng(this._point));

			this._map
				.fitBounds(bounds)
				.fire('boxzoomend', {boxZoomBounds: bounds});
		},

		_onKeyDown: function (e) {
			if (e.keyCode === 27) {
				this._finish();
			}
		}
	});

	// @section Handlers
	// @property boxZoom: Handler
	// Box (shift-drag with mouse) zoom handler.
	L.Map.addInitHook('addHandler', 'boxZoom', L.Map.BoxZoom);



	/*
	 * L.Map.Keyboard is handling keyboard interaction with the map, enabled by default.
	 */

	// @namespace Map
	// @section Keyboard Navigation Options
	L.Map.mergeOptions({
		// @option keyboard: Boolean = true
		// Makes the map focusable and allows users to navigate the map with keyboard
		// arrows and `+`/`-` keys.
		keyboard: true,

		// @option keyboardPanDelta: Number = 80
		// Amount of pixels to pan when pressing an arrow key.
		keyboardPanDelta: 80
	});

	L.Map.Keyboard = L.Handler.extend({

		keyCodes: {
			left:    [37],
			right:   [39],
			down:    [40],
			up:      [38],
			zoomIn:  [187, 107, 61, 171],
			zoomOut: [189, 109, 54, 173]
		},

		initialize: function (map) {
			this._map = map;

			this._setPanDelta(map.options.keyboardPanDelta);
			this._setZoomDelta(map.options.zoomDelta);
		},

		addHooks: function () {
			var container = this._map._container;

			// make the container focusable by tabbing
			if (container.tabIndex <= 0) {
				container.tabIndex = '0';
			}

			L.DomEvent.on(container, {
				focus: this._onFocus,
				blur: this._onBlur,
				mousedown: this._onMouseDown
			}, this);

			this._map.on({
				focus: this._addHooks,
				blur: this._removeHooks
			}, this);
		},

		removeHooks: function () {
			this._removeHooks();

			L.DomEvent.off(this._map._container, {
				focus: this._onFocus,
				blur: this._onBlur,
				mousedown: this._onMouseDown
			}, this);

			this._map.off({
				focus: this._addHooks,
				blur: this._removeHooks
			}, this);
		},

		_onMouseDown: function () {
			if (this._focused) { return; }

			var body = document.body,
			    docEl = document.documentElement,
			    top = body.scrollTop || docEl.scrollTop,
			    left = body.scrollLeft || docEl.scrollLeft;

			this._map._container.focus();

			window.scrollTo(left, top);
		},

		_onFocus: function () {
			this._focused = true;
			this._map.fire('focus');
		},

		_onBlur: function () {
			this._focused = false;
			this._map.fire('blur');
		},

		_setPanDelta: function (panDelta) {
			var keys = this._panKeys = {},
			    codes = this.keyCodes,
			    i, len;

			for (i = 0, len = codes.left.length; i < len; i++) {
				keys[codes.left[i]] = [-1 * panDelta, 0];
			}
			for (i = 0, len = codes.right.length; i < len; i++) {
				keys[codes.right[i]] = [panDelta, 0];
			}
			for (i = 0, len = codes.down.length; i < len; i++) {
				keys[codes.down[i]] = [0, panDelta];
			}
			for (i = 0, len = codes.up.length; i < len; i++) {
				keys[codes.up[i]] = [0, -1 * panDelta];
			}
		},

		_setZoomDelta: function (zoomDelta) {
			var keys = this._zoomKeys = {},
			    codes = this.keyCodes,
			    i, len;

			for (i = 0, len = codes.zoomIn.length; i < len; i++) {
				keys[codes.zoomIn[i]] = zoomDelta;
			}
			for (i = 0, len = codes.zoomOut.length; i < len; i++) {
				keys[codes.zoomOut[i]] = -zoomDelta;
			}
		},

		_addHooks: function () {
			L.DomEvent.on(document, 'keydown', this._onKeyDown, this);
		},

		_removeHooks: function () {
			L.DomEvent.off(document, 'keydown', this._onKeyDown, this);
		},

		_onKeyDown: function (e) {
			if (e.altKey || e.ctrlKey || e.metaKey) { return; }

			var key = e.keyCode,
			    map = this._map,
			    offset;

			if (key in this._panKeys) {

				if (map._panAnim && map._panAnim._inProgress) { return; }

				offset = this._panKeys[key];
				if (e.shiftKey) {
					offset = L.point(offset).multiplyBy(3);
				}

				map.panBy(offset);

				if (map.options.maxBounds) {
					map.panInsideBounds(map.options.maxBounds);
				}

			} else if (key in this._zoomKeys) {
				map.setZoom(map.getZoom() + (e.shiftKey ? 3 : 1) * this._zoomKeys[key]);

			} else if (key === 27) {
				map.closePopup();

			} else {
				return;
			}

			L.DomEvent.stop(e);
		}
	});

	// @section Handlers
	// @section Handlers
	// @property keyboard: Handler
	// Keyboard navigation handler.
	L.Map.addInitHook('addHandler', 'keyboard', L.Map.Keyboard);



	/*
	 * L.Handler.MarkerDrag is used internally by L.Marker to make the markers draggable.
	 */


	/* @namespace Marker
	 * @section Interaction handlers
	 *
	 * Interaction handlers are properties of a marker instance that allow you to control interaction behavior in runtime, enabling or disabling certain features such as dragging (see `Handler` methods). Example:
	 *
	 * ```js
	 * marker.dragging.disable();
	 * ```
	 *
	 * @property dragging: Handler
	 * Marker dragging handler (by both mouse and touch).
	 */

	L.Handler.MarkerDrag = L.Handler.extend({
		initialize: function (marker) {
			this._marker = marker;
		},

		addHooks: function () {
			var icon = this._marker._icon;

			if (!this._draggable) {
				this._draggable = new L.Draggable(icon, icon, true);
			}

			this._draggable.on({
				dragstart: this._onDragStart,
				drag: this._onDrag,
				dragend: this._onDragEnd
			}, this).enable();

			L.DomUtil.addClass(icon, 'leaflet-marker-draggable');
		},

		removeHooks: function () {
			this._draggable.off({
				dragstart: this._onDragStart,
				drag: this._onDrag,
				dragend: this._onDragEnd
			}, this).disable();

			if (this._marker._icon) {
				L.DomUtil.removeClass(this._marker._icon, 'leaflet-marker-draggable');
			}
		},

		moved: function () {
			return this._draggable && this._draggable._moved;
		},

		_onDragStart: function () {
			// @section Dragging events
			// @event dragstart: Event
			// Fired when the user starts dragging the marker.

			// @event movestart: Event
			// Fired when the marker starts moving (because of dragging).

			this._oldLatLng = this._marker.getLatLng();
			this._marker
			    .closePopup()
			    .fire('movestart')
			    .fire('dragstart');
		},

		_onDrag: function (e) {
			var marker = this._marker,
			    shadow = marker._shadow,
			    iconPos = L.DomUtil.getPosition(marker._icon),
			    latlng = marker._map.layerPointToLatLng(iconPos);

			// update shadow position
			if (shadow) {
				L.DomUtil.setPosition(shadow, iconPos);
			}

			marker._latlng = latlng;
			e.latlng = latlng;
			e.oldLatLng = this._oldLatLng;

			// @event drag: Event
			// Fired repeatedly while the user drags the marker.
			marker
			    .fire('move', e)
			    .fire('drag', e);
		},

		_onDragEnd: function (e) {
			// @event dragend: DragEndEvent
			// Fired when the user stops dragging the marker.

			// @event moveend: Event
			// Fired when the marker stops moving (because of dragging).
			delete this._oldLatLng;
			this._marker
			    .fire('moveend')
			    .fire('dragend', e);
		}
	});



	/*
	 * @class Control
	 * @aka L.Control
	 *
	 * L.Control is a base class for implementing map controls. Handles positioning.
	 * All other controls extend from this class.
	 */

	L.Control = L.Class.extend({
		// @section
		// @aka Control options
		options: {
			// @option position: String = 'topright'
			// The position of the control (one of the map corners). Possible values are `'topleft'`,
			// `'topright'`, `'bottomleft'` or `'bottomright'`
			position: 'topright'
		},

		initialize: function (options) {
			L.setOptions(this, options);
		},

		/* @section
		 * Classes extending L.Control will inherit the following methods:
		 *
		 * @method getPosition: string
		 * Returns the position of the control.
		 */
		getPosition: function () {
			return this.options.position;
		},

		// @method setPosition(position: string): this
		// Sets the position of the control.
		setPosition: function (position) {
			var map = this._map;

			if (map) {
				map.removeControl(this);
			}

			this.options.position = position;

			if (map) {
				map.addControl(this);
			}

			return this;
		},

		// @method getContainer: HTMLElement
		// Returns the HTMLElement that contains the control.
		getContainer: function () {
			return this._container;
		},

		// @method addTo(map: Map): this
		// Adds the control to the given map.
		addTo: function (map) {
			this.remove();
			this._map = map;

			var container = this._container = this.onAdd(map),
			    pos = this.getPosition(),
			    corner = map._controlCorners[pos];

			L.DomUtil.addClass(container, 'leaflet-control');

			if (pos.indexOf('bottom') !== -1) {
				corner.insertBefore(container, corner.firstChild);
			} else {
				corner.appendChild(container);
			}

			return this;
		},

		// @method remove: this
		// Removes the control from the map it is currently active on.
		remove: function () {
			if (!this._map) {
				return this;
			}

			L.DomUtil.remove(this._container);

			if (this.onRemove) {
				this.onRemove(this._map);
			}

			this._map = null;

			return this;
		},

		_refocusOnMap: function (e) {
			// if map exists and event is not a keyboard event
			if (this._map && e && e.screenX > 0 && e.screenY > 0) {
				this._map.getContainer().focus();
			}
		}
	});

	L.control = function (options) {
		return new L.Control(options);
	};

	/* @section Extension methods
	 * @uninheritable
	 *
	 * Every control should extend from `L.Control` and (re-)implement the following methods.
	 *
	 * @method onAdd(map: Map): HTMLElement
	 * Should return the container DOM element for the control and add listeners on relevant map events. Called on [`control.addTo(map)`](#control-addTo).
	 *
	 * @method onRemove(map: Map)
	 * Optional method. Should contain all clean up code that removes the listeners previously added in [`onAdd`](#control-onadd). Called on [`control.remove()`](#control-remove).
	 */

	/* @namespace Map
	 * @section Methods for Layers and Controls
	 */
	L.Map.include({
		// @method addControl(control: Control): this
		// Adds the given control to the map
		addControl: function (control) {
			control.addTo(this);
			return this;
		},

		// @method removeControl(control: Control): this
		// Removes the given control from the map
		removeControl: function (control) {
			control.remove();
			return this;
		},

		_initControlPos: function () {
			var corners = this._controlCorners = {},
			    l = 'leaflet-',
			    container = this._controlContainer =
			            L.DomUtil.create('div', l + 'control-container', this._container);

			function createCorner(vSide, hSide) {
				var className = l + vSide + ' ' + l + hSide;

				corners[vSide + hSide] = L.DomUtil.create('div', className, container);
			}

			createCorner('top', 'left');
			createCorner('top', 'right');
			createCorner('bottom', 'left');
			createCorner('bottom', 'right');
		},

		_clearControlPos: function () {
			L.DomUtil.remove(this._controlContainer);
		}
	});



	/*
	 * @class Control.Zoom
	 * @aka L.Control.Zoom
	 * @inherits Control
	 *
	 * A basic zoom control with two buttons (zoom in and zoom out). It is put on the map by default unless you set its [`zoomControl` option](#map-zoomcontrol) to `false`. Extends `Control`.
	 */

	L.Control.Zoom = L.Control.extend({
		// @section
		// @aka Control.Zoom options
		options: {
			position: 'topleft',

			// @option zoomInText: String = '+'
			// The text set on the 'zoom in' button.
			zoomInText: '+',

			// @option zoomInTitle: String = 'Zoom in'
			// The title set on the 'zoom in' button.
			zoomInTitle: 'Zoom in',

			// @option zoomOutText: String = '-'
			// The text set on the 'zoom out' button.
			zoomOutText: '-',

			// @option zoomOutTitle: String = 'Zoom out'
			// The title set on the 'zoom out' button.
			zoomOutTitle: 'Zoom out'
		},

		onAdd: function (map) {
			var zoomName = 'leaflet-control-zoom',
			    container = L.DomUtil.create('div', zoomName + ' leaflet-bar'),
			    options = this.options;

			this._zoomInButton  = this._createButton(options.zoomInText, options.zoomInTitle,
			        zoomName + '-in',  container, this._zoomIn);
			this._zoomOutButton = this._createButton(options.zoomOutText, options.zoomOutTitle,
			        zoomName + '-out', container, this._zoomOut);

			this._updateDisabled();
			map.on('zoomend zoomlevelschange', this._updateDisabled, this);

			return container;
		},

		onRemove: function (map) {
			map.off('zoomend zoomlevelschange', this._updateDisabled, this);
		},

		disable: function () {
			this._disabled = true;
			this._updateDisabled();
			return this;
		},

		enable: function () {
			this._disabled = false;
			this._updateDisabled();
			return this;
		},

		_zoomIn: function (e) {
			if (!this._disabled && this._map._zoom < this._map.getMaxZoom()) {
				this._map.zoomIn(this._map.options.zoomDelta * (e.shiftKey ? 3 : 1));
			}
		},

		_zoomOut: function (e) {
			if (!this._disabled && this._map._zoom > this._map.getMinZoom()) {
				this._map.zoomOut(this._map.options.zoomDelta * (e.shiftKey ? 3 : 1));
			}
		},

		_createButton: function (html, title, className, container, fn) {
			var link = L.DomUtil.create('a', className, container);
			link.innerHTML = html;
			link.href = '#';
			link.title = title;

			L.DomEvent
			    .on(link, 'mousedown dblclick', L.DomEvent.stopPropagation)
			    .on(link, 'click', L.DomEvent.stop)
			    .on(link, 'click', fn, this)
			    .on(link, 'click', this._refocusOnMap, this);

			return link;
		},

		_updateDisabled: function () {
			var map = this._map,
			    className = 'leaflet-disabled';

			L.DomUtil.removeClass(this._zoomInButton, className);
			L.DomUtil.removeClass(this._zoomOutButton, className);

			if (this._disabled || map._zoom === map.getMinZoom()) {
				L.DomUtil.addClass(this._zoomOutButton, className);
			}
			if (this._disabled || map._zoom === map.getMaxZoom()) {
				L.DomUtil.addClass(this._zoomInButton, className);
			}
		}
	});

	// @namespace Map
	// @section Control options
	// @option zoomControl: Boolean = true
	// Whether a [zoom control](#control-zoom) is added to the map by default.
	L.Map.mergeOptions({
		zoomControl: true
	});

	L.Map.addInitHook(function () {
		if (this.options.zoomControl) {
			this.zoomControl = new L.Control.Zoom();
			this.addControl(this.zoomControl);
		}
	});

	// @namespace Control.Zoom
	// @factory L.control.zoom(options: Control.Zoom options)
	// Creates a zoom control
	L.control.zoom = function (options) {
		return new L.Control.Zoom(options);
	};



	/*
	 * @class Control.Attribution
	 * @aka L.Control.Attribution
	 * @inherits Control
	 *
	 * The attribution control allows you to display attribution data in a small text box on a map. It is put on the map by default unless you set its [`attributionControl` option](#map-attributioncontrol) to `false`, and it fetches attribution texts from layers with the [`getAttribution` method](#layer-getattribution) automatically. Extends Control.
	 */

	L.Control.Attribution = L.Control.extend({
		// @section
		// @aka Control.Attribution options
		options: {
			position: 'bottomright',

			// @option prefix: String = 'Leaflet'
			// The HTML text shown before the attributions. Pass `false` to disable.
			prefix: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
		},

		initialize: function (options) {
			L.setOptions(this, options);

			this._attributions = {};
		},

		onAdd: function (map) {
			map.attributionControl = this;
			this._container = L.DomUtil.create('div', 'leaflet-control-attribution');
			if (L.DomEvent) {
				L.DomEvent.disableClickPropagation(this._container);
			}

			// TODO ugly, refactor
			for (var i in map._layers) {
				if (map._layers[i].getAttribution) {
					this.addAttribution(map._layers[i].getAttribution());
				}
			}

			this._update();

			return this._container;
		},

		// @method setPrefix(prefix: String): this
		// Sets the text before the attributions.
		setPrefix: function (prefix) {
			this.options.prefix = prefix;
			this._update();
			return this;
		},

		// @method addAttribution(text: String): this
		// Adds an attribution text (e.g. `'Vector data &copy; Mapbox'`).
		addAttribution: function (text) {
			if (!text) { return this; }

			if (!this._attributions[text]) {
				this._attributions[text] = 0;
			}
			this._attributions[text]++;

			this._update();

			return this;
		},

		// @method removeAttribution(text: String): this
		// Removes an attribution text.
		removeAttribution: function (text) {
			if (!text) { return this; }

			if (this._attributions[text]) {
				this._attributions[text]--;
				this._update();
			}

			return this;
		},

		_update: function () {
			if (!this._map) { return; }

			var attribs = [];

			for (var i in this._attributions) {
				if (this._attributions[i]) {
					attribs.push(i);
				}
			}

			var prefixAndAttribs = [];

			if (this.options.prefix) {
				prefixAndAttribs.push(this.options.prefix);
			}
			if (attribs.length) {
				prefixAndAttribs.push(attribs.join(', '));
			}

			this._container.innerHTML = prefixAndAttribs.join(' | ');
		}
	});

	// @namespace Map
	// @section Control options
	// @option attributionControl: Boolean = true
	// Whether a [attribution control](#control-attribution) is added to the map by default.
	L.Map.mergeOptions({
		attributionControl: true
	});

	L.Map.addInitHook(function () {
		if (this.options.attributionControl) {
			new L.Control.Attribution().addTo(this);
		}
	});

	// @namespace Control.Attribution
	// @factory L.control.attribution(options: Control.Attribution options)
	// Creates an attribution control.
	L.control.attribution = function (options) {
		return new L.Control.Attribution(options);
	};



	/*
	 * @class Control.Scale
	 * @aka L.Control.Scale
	 * @inherits Control
	 *
	 * A simple scale control that shows the scale of the current center of screen in metric (m/km) and imperial (mi/ft) systems. Extends `Control`.
	 *
	 * @example
	 *
	 * ```js
	 * L.control.scale().addTo(map);
	 * ```
	 */

	L.Control.Scale = L.Control.extend({
		// @section
		// @aka Control.Scale options
		options: {
			position: 'bottomleft',

			// @option maxWidth: Number = 100
			// Maximum width of the control in pixels. The width is set dynamically to show round values (e.g. 100, 200, 500).
			maxWidth: 100,

			// @option metric: Boolean = True
			// Whether to show the metric scale line (m/km).
			metric: true,

			// @option imperial: Boolean = True
			// Whether to show the imperial scale line (mi/ft).
			imperial: true

			// @option updateWhenIdle: Boolean = false
			// If `true`, the control is updated on [`moveend`](#map-moveend), otherwise it's always up-to-date (updated on [`move`](#map-move)).
		},

		onAdd: function (map) {
			var className = 'leaflet-control-scale',
			    container = L.DomUtil.create('div', className),
			    options = this.options;

			this._addScales(options, className + '-line', container);

			map.on(options.updateWhenIdle ? 'moveend' : 'move', this._update, this);
			map.whenReady(this._update, this);

			return container;
		},

		onRemove: function (map) {
			map.off(this.options.updateWhenIdle ? 'moveend' : 'move', this._update, this);
		},

		_addScales: function (options, className, container) {
			if (options.metric) {
				this._mScale = L.DomUtil.create('div', className, container);
			}
			if (options.imperial) {
				this._iScale = L.DomUtil.create('div', className, container);
			}
		},

		_update: function () {
			var map = this._map,
			    y = map.getSize().y / 2;

			var maxMeters = map.distance(
					map.containerPointToLatLng([0, y]),
					map.containerPointToLatLng([this.options.maxWidth, y]));

			this._updateScales(maxMeters);
		},

		_updateScales: function (maxMeters) {
			if (this.options.metric && maxMeters) {
				this._updateMetric(maxMeters);
			}
			if (this.options.imperial && maxMeters) {
				this._updateImperial(maxMeters);
			}
		},

		_updateMetric: function (maxMeters) {
			var meters = this._getRoundNum(maxMeters),
			    label = meters < 1000 ? meters + ' m' : (meters / 1000) + ' km';

			this._updateScale(this._mScale, label, meters / maxMeters);
		},

		_updateImperial: function (maxMeters) {
			var maxFeet = maxMeters * 3.2808399,
			    maxMiles, miles, feet;

			if (maxFeet > 5280) {
				maxMiles = maxFeet / 5280;
				miles = this._getRoundNum(maxMiles);
				this._updateScale(this._iScale, miles + ' mi', miles / maxMiles);

			} else {
				feet = this._getRoundNum(maxFeet);
				this._updateScale(this._iScale, feet + ' ft', feet / maxFeet);
			}
		},

		_updateScale: function (scale, text, ratio) {
			scale.style.width = Math.round(this.options.maxWidth * ratio) + 'px';
			scale.innerHTML = text;
		},

		_getRoundNum: function (num) {
			var pow10 = Math.pow(10, (Math.floor(num) + '').length - 1),
			    d = num / pow10;

			d = d >= 10 ? 10 :
			    d >= 5 ? 5 :
			    d >= 3 ? 3 :
			    d >= 2 ? 2 : 1;

			return pow10 * d;
		}
	});


	// @factory L.control.scale(options?: Control.Scale options)
	// Creates an scale control with the given options.
	L.control.scale = function (options) {
		return new L.Control.Scale(options);
	};



	/*
	 * @class Control.Layers
	 * @aka L.Control.Layers
	 * @inherits Control
	 *
	 * The layers control gives users the ability to switch between different base layers and switch overlays on/off (check out the [detailed example](http://leafletjs.com/examples/layers-control.html)). Extends `Control`.
	 *
	 * @example
	 *
	 * ```js
	 * var baseLayers = {
	 * 	"Mapbox": mapbox,
	 * 	"OpenStreetMap": osm
	 * };
	 *
	 * var overlays = {
	 * 	"Marker": marker,
	 * 	"Roads": roadsLayer
	 * };
	 *
	 * L.control.layers(baseLayers, overlays).addTo(map);
	 * ```
	 *
	 * The `baseLayers` and `overlays` parameters are object literals with layer names as keys and `Layer` objects as values:
	 *
	 * ```js
	 * {
	 *     "<someName1>": layer1,
	 *     "<someName2>": layer2
	 * }
	 * ```
	 *
	 * The layer names can contain HTML, which allows you to add additional styling to the items:
	 *
	 * ```js
	 * {"<img src='my-layer-icon' /> <span class='my-layer-item'>My Layer</span>": myLayer}
	 * ```
	 */


	L.Control.Layers = L.Control.extend({
		// @section
		// @aka Control.Layers options
		options: {
			// @option collapsed: Boolean = true
			// If `true`, the control will be collapsed into an icon and expanded on mouse hover or touch.
			collapsed: true,
			position: 'topright',

			// @option autoZIndex: Boolean = true
			// If `true`, the control will assign zIndexes in increasing order to all of its layers so that the order is preserved when switching them on/off.
			autoZIndex: true,

			// @option hideSingleBase: Boolean = false
			// If `true`, the base layers in the control will be hidden when there is only one.
			hideSingleBase: false
		},

		initialize: function (baseLayers, overlays, options) {
			L.setOptions(this, options);

			this._layers = [];
			this._lastZIndex = 0;
			this._handlingClick = false;

			for (var i in baseLayers) {
				this._addLayer(baseLayers[i], i);
			}

			for (i in overlays) {
				this._addLayer(overlays[i], i, true);
			}
		},

		onAdd: function (map) {
			this._initLayout();
			this._update();

			this._map = map;
			map.on('zoomend', this._checkDisabledLayers, this);

			return this._container;
		},

		onRemove: function () {
			this._map.off('zoomend', this._checkDisabledLayers, this);

			for (var i = 0; i < this._layers.length; i++) {
				this._layers[i].layer.off('add remove', this._onLayerChange, this);
			}
		},

		// @method addBaseLayer(layer: Layer, name: String): this
		// Adds a base layer (radio button entry) with the given name to the control.
		addBaseLayer: function (layer, name) {
			this._addLayer(layer, name);
			return (this._map) ? this._update() : this;
		},

		// @method addOverlay(layer: Layer, name: String): this
		// Adds an overlay (checkbox entry) with the given name to the control.
		addOverlay: function (layer, name) {
			this._addLayer(layer, name, true);
			return (this._map) ? this._update() : this;
		},

		// @method removeLayer(layer: Layer): this
		// Remove the given layer from the control.
		removeLayer: function (layer) {
			layer.off('add remove', this._onLayerChange, this);

			var obj = this._getLayer(L.stamp(layer));
			if (obj) {
				this._layers.splice(this._layers.indexOf(obj), 1);
			}
			return (this._map) ? this._update() : this;
		},

		// @method expand(): this
		// Expand the control container if collapsed.
		expand: function () {
			L.DomUtil.addClass(this._container, 'leaflet-control-layers-expanded');
			this._form.style.height = null;
			var acceptableHeight = this._map.getSize().y - (this._container.offsetTop + 50);
			if (acceptableHeight < this._form.clientHeight) {
				L.DomUtil.addClass(this._form, 'leaflet-control-layers-scrollbar');
				this._form.style.height = acceptableHeight + 'px';
			} else {
				L.DomUtil.removeClass(this._form, 'leaflet-control-layers-scrollbar');
			}
			this._checkDisabledLayers();
			return this;
		},

		// @method collapse(): this
		// Collapse the control container if expanded.
		collapse: function () {
			L.DomUtil.removeClass(this._container, 'leaflet-control-layers-expanded');
			return this;
		},

		_initLayout: function () {
			var className = 'leaflet-control-layers',
			    container = this._container = L.DomUtil.create('div', className);

			// makes this work on IE touch devices by stopping it from firing a mouseout event when the touch is released
			container.setAttribute('aria-haspopup', true);

			L.DomEvent.disableClickPropagation(container);
			if (!L.Browser.touch) {
				L.DomEvent.disableScrollPropagation(container);
			}

			var form = this._form = L.DomUtil.create('form', className + '-list');

			if (this.options.collapsed) {
				if (!L.Browser.android) {
					L.DomEvent.on(container, {
						mouseenter: this.expand,
						mouseleave: this.collapse
					}, this);
				}

				var link = this._layersLink = L.DomUtil.create('a', className + '-toggle', container);
				link.href = '#';
				link.title = 'Layers';

				if (L.Browser.touch) {
					L.DomEvent
					    .on(link, 'click', L.DomEvent.stop)
					    .on(link, 'click', this.expand, this);
				} else {
					L.DomEvent.on(link, 'focus', this.expand, this);
				}

				// work around for Firefox Android issue https://github.com/Leaflet/Leaflet/issues/2033
				L.DomEvent.on(form, 'click', function () {
					setTimeout(L.bind(this._onInputClick, this), 0);
				}, this);

				this._map.on('click', this.collapse, this);
				// TODO keyboard accessibility
			} else {
				this.expand();
			}

			this._baseLayersList = L.DomUtil.create('div', className + '-base', form);
			this._separator = L.DomUtil.create('div', className + '-separator', form);
			this._overlaysList = L.DomUtil.create('div', className + '-overlays', form);

			container.appendChild(form);
		},

		_getLayer: function (id) {
			for (var i = 0; i < this._layers.length; i++) {

				if (this._layers[i] && L.stamp(this._layers[i].layer) === id) {
					return this._layers[i];
				}
			}
		},

		_addLayer: function (layer, name, overlay) {
			layer.on('add remove', this._onLayerChange, this);

			this._layers.push({
				layer: layer,
				name: name,
				overlay: overlay
			});

			if (this.options.autoZIndex && layer.setZIndex) {
				this._lastZIndex++;
				layer.setZIndex(this._lastZIndex);
			}
		},

		_update: function () {
			if (!this._container) { return this; }

			L.DomUtil.empty(this._baseLayersList);
			L.DomUtil.empty(this._overlaysList);

			var baseLayersPresent, overlaysPresent, i, obj, baseLayersCount = 0;

			for (i = 0; i < this._layers.length; i++) {
				obj = this._layers[i];
				this._addItem(obj);
				overlaysPresent = overlaysPresent || obj.overlay;
				baseLayersPresent = baseLayersPresent || !obj.overlay;
				baseLayersCount += !obj.overlay ? 1 : 0;
			}

			// Hide base layers section if there's only one layer.
			if (this.options.hideSingleBase) {
				baseLayersPresent = baseLayersPresent && baseLayersCount > 1;
				this._baseLayersList.style.display = baseLayersPresent ? '' : 'none';
			}

			this._separator.style.display = overlaysPresent && baseLayersPresent ? '' : 'none';

			return this;
		},

		_onLayerChange: function (e) {
			if (!this._handlingClick) {
				this._update();
			}

			var obj = this._getLayer(L.stamp(e.target));

			// @namespace Map
			// @section Layer events
			// @event baselayerchange: LayersControlEvent
			// Fired when the base layer is changed through the [layer control](#control-layers).
			// @event overlayadd: LayersControlEvent
			// Fired when an overlay is selected through the [layer control](#control-layers).
			// @event overlayremove: LayersControlEvent
			// Fired when an overlay is deselected through the [layer control](#control-layers).
			// @namespace Control.Layers
			var type = obj.overlay ?
				(e.type === 'add' ? 'overlayadd' : 'overlayremove') :
				(e.type === 'add' ? 'baselayerchange' : null);

			if (type) {
				this._map.fire(type, obj);
			}
		},

		// IE7 bugs out if you create a radio dynamically, so you have to do it this hacky way (see http://bit.ly/PqYLBe)
		_createRadioElement: function (name, checked) {

			var radioHtml = '<input type="radio" class="leaflet-control-layers-selector" name="' +
					name + '"' + (checked ? ' checked="checked"' : '') + '/>';

			var radioFragment = document.createElement('div');
			radioFragment.innerHTML = radioHtml;

			return radioFragment.firstChild;
		},

		_addItem: function (obj) {
			var label = document.createElement('label'),
			    checked = this._map.hasLayer(obj.layer),
			    input;

			if (obj.overlay) {
				input = document.createElement('input');
				input.type = 'checkbox';
				input.className = 'leaflet-control-layers-selector';
				input.defaultChecked = checked;
			} else {
				input = this._createRadioElement('leaflet-base-layers', checked);
			}

			input.layerId = L.stamp(obj.layer);

			L.DomEvent.on(input, 'click', this._onInputClick, this);

			var name = document.createElement('span');
			name.innerHTML = ' ' + obj.name;

			// Helps from preventing layer control flicker when checkboxes are disabled
			// https://github.com/Leaflet/Leaflet/issues/2771
			var holder = document.createElement('div');

			label.appendChild(holder);
			holder.appendChild(input);
			holder.appendChild(name);

			var container = obj.overlay ? this._overlaysList : this._baseLayersList;
			container.appendChild(label);

			this._checkDisabledLayers();
			return label;
		},

		_onInputClick: function () {
			var inputs = this._form.getElementsByTagName('input'),
			    input, layer, hasLayer;
			var addedLayers = [],
			    removedLayers = [];

			this._handlingClick = true;

			for (var i = inputs.length - 1; i >= 0; i--) {
				input = inputs[i];
				layer = this._getLayer(input.layerId).layer;
				hasLayer = this._map.hasLayer(layer);

				if (input.checked && !hasLayer) {
					addedLayers.push(layer);

				} else if (!input.checked && hasLayer) {
					removedLayers.push(layer);
				}
			}

			// Bugfix issue 2318: Should remove all old layers before readding new ones
			for (i = 0; i < removedLayers.length; i++) {
				this._map.removeLayer(removedLayers[i]);
			}
			for (i = 0; i < addedLayers.length; i++) {
				this._map.addLayer(addedLayers[i]);
			}

			this._handlingClick = false;

			this._refocusOnMap();
		},

		_checkDisabledLayers: function () {
			var inputs = this._form.getElementsByTagName('input'),
			    input,
			    layer,
			    zoom = this._map.getZoom();

			for (var i = inputs.length - 1; i >= 0; i--) {
				input = inputs[i];
				layer = this._getLayer(input.layerId).layer;
				input.disabled = (layer.options.minZoom !== undefined && zoom < layer.options.minZoom) ||
				                 (layer.options.maxZoom !== undefined && zoom > layer.options.maxZoom);

			}
		},

		_expand: function () {
			// Backward compatibility, remove me in 1.1.
			return this.expand();
		},

		_collapse: function () {
			// Backward compatibility, remove me in 1.1.
			return this.collapse();
		}

	});


	// @factory L.control.layers(baselayers?: Object, overlays?: Object, options?: Control.Layers options)
	// Creates an attribution control with the given layers. Base layers will be switched with radio buttons, while overlays will be switched with checkboxes. Note that all base layers should be passed in the base layers object, but only one should be added to the map during map instantiation.
	L.control.layers = function (baseLayers, overlays, options) {
		return new L.Control.Layers(baseLayers, overlays, options);
	};



	/*
	 * @class PosAnimation
	 * @aka L.PosAnimation
	 * @inherits Evented
	 * Used internally for panning animations, utilizing CSS3 Transitions for modern browsers and a timer fallback for IE6-9.
	 *
	 * @example
	 * ```js
	 * var fx = new L.PosAnimation();
	 * fx.run(el, [300, 500], 0.5);
	 * ```
	 *
	 * @constructor L.PosAnimation()
	 * Creates a `PosAnimation` object.
	 *
	 */

	L.PosAnimation = L.Evented.extend({

		// @method run(el: HTMLElement, newPos: Point, duration?: Number, easeLinearity?: Number)
		// Run an animation of a given element to a new position, optionally setting
		// duration in seconds (`0.25` by default) and easing linearity factor (3rd
		// argument of the [cubic bezier curve](http://cubic-bezier.com/#0,0,.5,1),
		// `0.5` by default).
		run: function (el, newPos, duration, easeLinearity) {
			this.stop();

			this._el = el;
			this._inProgress = true;
			this._duration = duration || 0.25;
			this._easeOutPower = 1 / Math.max(easeLinearity || 0.5, 0.2);

			this._startPos = L.DomUtil.getPosition(el);
			this._offset = newPos.subtract(this._startPos);
			this._startTime = +new Date();

			// @event start: Event
			// Fired when the animation starts
			this.fire('start');

			this._animate();
		},

		// @method stop()
		// Stops the animation (if currently running).
		stop: function () {
			if (!this._inProgress) { return; }

			this._step(true);
			this._complete();
		},

		_animate: function () {
			// animation loop
			this._animId = L.Util.requestAnimFrame(this._animate, this);
			this._step();
		},

		_step: function (round) {
			var elapsed = (+new Date()) - this._startTime,
			    duration = this._duration * 1000;

			if (elapsed < duration) {
				this._runFrame(this._easeOut(elapsed / duration), round);
			} else {
				this._runFrame(1);
				this._complete();
			}
		},

		_runFrame: function (progress, round) {
			var pos = this._startPos.add(this._offset.multiplyBy(progress));
			if (round) {
				pos._round();
			}
			L.DomUtil.setPosition(this._el, pos);

			// @event step: Event
			// Fired continuously during the animation.
			this.fire('step');
		},

		_complete: function () {
			L.Util.cancelAnimFrame(this._animId);

			this._inProgress = false;
			// @event end: Event
			// Fired when the animation ends.
			this.fire('end');
		},

		_easeOut: function (t) {
			return 1 - Math.pow(1 - t, this._easeOutPower);
		}
	});



	/*
	 * Extends L.Map to handle panning animations.
	 */

	L.Map.include({

		setView: function (center, zoom, options) {

			zoom = zoom === undefined ? this._zoom : this._limitZoom(zoom);
			center = this._limitCenter(L.latLng(center), zoom, this.options.maxBounds);
			options = options || {};

			this._stop();

			if (this._loaded && !options.reset && options !== true) {

				if (options.animate !== undefined) {
					options.zoom = L.extend({animate: options.animate}, options.zoom);
					options.pan = L.extend({animate: options.animate, duration: options.duration}, options.pan);
				}

				// try animating pan or zoom
				var moved = (this._zoom !== zoom) ?
					this._tryAnimatedZoom && this._tryAnimatedZoom(center, zoom, options.zoom) :
					this._tryAnimatedPan(center, options.pan);

				if (moved) {
					// prevent resize handler call, the view will refresh after animation anyway
					clearTimeout(this._sizeTimer);
					return this;
				}
			}

			// animation didn't start, just reset the map view
			this._resetView(center, zoom);

			return this;
		},

		panBy: function (offset, options) {
			offset = L.point(offset).round();
			options = options || {};

			if (!offset.x && !offset.y) {
				return this.fire('moveend');
			}
			// If we pan too far, Chrome gets issues with tiles
			// and makes them disappear or appear in the wrong place (slightly offset) #2602
			if (options.animate !== true && !this.getSize().contains(offset)) {
				this._resetView(this.unproject(this.project(this.getCenter()).add(offset)), this.getZoom());
				return this;
			}

			if (!this._panAnim) {
				this._panAnim = new L.PosAnimation();

				this._panAnim.on({
					'step': this._onPanTransitionStep,
					'end': this._onPanTransitionEnd
				}, this);
			}

			// don't fire movestart if animating inertia
			if (!options.noMoveStart) {
				this.fire('movestart');
			}

			// animate pan unless animate: false specified
			if (options.animate !== false) {
				L.DomUtil.addClass(this._mapPane, 'leaflet-pan-anim');

				var newPos = this._getMapPanePos().subtract(offset).round();
				this._panAnim.run(this._mapPane, newPos, options.duration || 0.25, options.easeLinearity);
			} else {
				this._rawPanBy(offset);
				this.fire('move').fire('moveend');
			}

			return this;
		},

		_onPanTransitionStep: function () {
			this.fire('move');
		},

		_onPanTransitionEnd: function () {
			L.DomUtil.removeClass(this._mapPane, 'leaflet-pan-anim');
			this.fire('moveend');
		},

		_tryAnimatedPan: function (center, options) {
			// difference between the new and current centers in pixels
			var offset = this._getCenterOffset(center)._floor();

			// don't animate too far unless animate: true specified in options
			if ((options && options.animate) !== true && !this.getSize().contains(offset)) { return false; }

			this.panBy(offset, options);

			return true;
		}
	});



	/*
	 * Extends L.Map to handle zoom animations.
	 */

	// @namespace Map
	// @section Animation Options
	L.Map.mergeOptions({
		// @option zoomAnimation: Boolean = true
		// Whether the map zoom animation is enabled. By default it's enabled
		// in all browsers that support CSS3 Transitions except Android.
		zoomAnimation: true,

		// @option zoomAnimationThreshold: Number = 4
		// Won't animate zoom if the zoom difference exceeds this value.
		zoomAnimationThreshold: 4
	});

	var zoomAnimated = L.DomUtil.TRANSITION && L.Browser.any3d && !L.Browser.mobileOpera;

	if (zoomAnimated) {

		L.Map.addInitHook(function () {
			// don't animate on browsers without hardware-accelerated transitions or old Android/Opera
			this._zoomAnimated = this.options.zoomAnimation;

			// zoom transitions run with the same duration for all layers, so if one of transitionend events
			// happens after starting zoom animation (propagating to the map pane), we know that it ended globally
			if (this._zoomAnimated) {

				this._createAnimProxy();

				L.DomEvent.on(this._proxy, L.DomUtil.TRANSITION_END, this._catchTransitionEnd, this);
			}
		});
	}

	L.Map.include(!zoomAnimated ? {} : {

		_createAnimProxy: function () {

			var proxy = this._proxy = L.DomUtil.create('div', 'leaflet-proxy leaflet-zoom-animated');
			this._panes.mapPane.appendChild(proxy);

			this.on('zoomanim', function (e) {
				var prop = L.DomUtil.TRANSFORM,
				    transform = proxy.style[prop];

				L.DomUtil.setTransform(proxy, this.project(e.center, e.zoom), this.getZoomScale(e.zoom, 1));

				// workaround for case when transform is the same and so transitionend event is not fired
				if (transform === proxy.style[prop] && this._animatingZoom) {
					this._onZoomTransitionEnd();
				}
			}, this);

			this.on('load moveend', function () {
				var c = this.getCenter(),
				    z = this.getZoom();
				L.DomUtil.setTransform(proxy, this.project(c, z), this.getZoomScale(z, 1));
			}, this);
		},

		_catchTransitionEnd: function (e) {
			if (this._animatingZoom && e.propertyName.indexOf('transform') >= 0) {
				this._onZoomTransitionEnd();
			}
		},

		_nothingToAnimate: function () {
			return !this._container.getElementsByClassName('leaflet-zoom-animated').length;
		},

		_tryAnimatedZoom: function (center, zoom, options) {

			if (this._animatingZoom) { return true; }

			options = options || {};

			// don't animate if disabled, not supported or zoom difference is too large
			if (!this._zoomAnimated || options.animate === false || this._nothingToAnimate() ||
			        Math.abs(zoom - this._zoom) > this.options.zoomAnimationThreshold) { return false; }

			// offset is the pixel coords of the zoom origin relative to the current center
			var scale = this.getZoomScale(zoom),
			    offset = this._getCenterOffset(center)._divideBy(1 - 1 / scale);

			// don't animate if the zoom origin isn't within one screen from the current center, unless forced
			if (options.animate !== true && !this.getSize().contains(offset)) { return false; }

			L.Util.requestAnimFrame(function () {
				this
				    ._moveStart(true)
				    ._animateZoom(center, zoom, true);
			}, this);

			return true;
		},

		_animateZoom: function (center, zoom, startAnim, noUpdate) {
			if (startAnim) {
				this._animatingZoom = true;

				// remember what center/zoom to set after animation
				this._animateToCenter = center;
				this._animateToZoom = zoom;

				L.DomUtil.addClass(this._mapPane, 'leaflet-zoom-anim');
			}

			// @event zoomanim: ZoomAnimEvent
			// Fired on every frame of a zoom animation
			this.fire('zoomanim', {
				center: center,
				zoom: zoom,
				noUpdate: noUpdate
			});

			// Work around webkit not firing 'transitionend', see https://github.com/Leaflet/Leaflet/issues/3689, 2693
			setTimeout(L.bind(this._onZoomTransitionEnd, this), 250);
		},

		_onZoomTransitionEnd: function () {
			if (!this._animatingZoom) { return; }

			L.DomUtil.removeClass(this._mapPane, 'leaflet-zoom-anim');

			this._animatingZoom = false;

			this._move(this._animateToCenter, this._animateToZoom);

			// This anim frame should prevent an obscure iOS webkit tile loading race condition.
			L.Util.requestAnimFrame(function () {
				this._moveEnd(true);
			}, this);
		}
	});



	// @namespace Map
	// @section Methods for modifying map state
	L.Map.include({

		// @method flyTo(latlng: LatLng, zoom?: Number, options?: Zoom/Pan options): this
		// Sets the view of the map (geographical center and zoom) performing a smooth
		// pan-zoom animation.
		flyTo: function (targetCenter, targetZoom, options) {

			options = options || {};
			if (options.animate === false || !L.Browser.any3d) {
				return this.setView(targetCenter, targetZoom, options);
			}

			this._stop();

			var from = this.project(this.getCenter()),
			    to = this.project(targetCenter),
			    size = this.getSize(),
			    startZoom = this._zoom;

			targetCenter = L.latLng(targetCenter);
			targetZoom = targetZoom === undefined ? startZoom : targetZoom;

			var w0 = Math.max(size.x, size.y),
			    w1 = w0 * this.getZoomScale(startZoom, targetZoom),
			    u1 = (to.distanceTo(from)) || 1,
			    rho = 1.42,
			    rho2 = rho * rho;

			function r(i) {
				var s1 = i ? -1 : 1,
				    s2 = i ? w1 : w0,
				    t1 = w1 * w1 - w0 * w0 + s1 * rho2 * rho2 * u1 * u1,
				    b1 = 2 * s2 * rho2 * u1,
				    b = t1 / b1,
				    sq = Math.sqrt(b * b + 1) - b;

				    // workaround for floating point precision bug when sq = 0, log = -Infinite,
				    // thus triggering an infinite loop in flyTo
				    var log = sq < 0.000000001 ? -18 : Math.log(sq);

				return log;
			}

			function sinh(n) { return (Math.exp(n) - Math.exp(-n)) / 2; }
			function cosh(n) { return (Math.exp(n) + Math.exp(-n)) / 2; }
			function tanh(n) { return sinh(n) / cosh(n); }

			var r0 = r(0);

			function w(s) { return w0 * (cosh(r0) / cosh(r0 + rho * s)); }
			function u(s) { return w0 * (cosh(r0) * tanh(r0 + rho * s) - sinh(r0)) / rho2; }

			function easeOut(t) { return 1 - Math.pow(1 - t, 1.5); }

			var start = Date.now(),
			    S = (r(1) - r0) / rho,
			    duration = options.duration ? 1000 * options.duration : 1000 * S * 0.8;

			function frame() {
				var t = (Date.now() - start) / duration,
				    s = easeOut(t) * S;

				if (t <= 1) {
					this._flyToFrame = L.Util.requestAnimFrame(frame, this);

					this._move(
						this.unproject(from.add(to.subtract(from).multiplyBy(u(s) / u1)), startZoom),
						this.getScaleZoom(w0 / w(s), startZoom),
						{flyTo: true});

				} else {
					this
						._move(targetCenter, targetZoom)
						._moveEnd(true);
				}
			}

			this._moveStart(true);

			frame.call(this);
			return this;
		},

		// @method flyToBounds(bounds: LatLngBounds, options?: fitBounds options): this
		// Sets the view of the map with a smooth animation like [`flyTo`](#map-flyto),
		// but takes a bounds parameter like [`fitBounds`](#map-fitbounds).
		flyToBounds: function (bounds, options) {
			var target = this._getBoundsCenterZoom(bounds, options);
			return this.flyTo(target.center, target.zoom, options);
		}
	});



	/*
	 * Provides L.Map with convenient shortcuts for using browser geolocation features.
	 */

	// @namespace Map

	L.Map.include({
		// @section Geolocation methods
		_defaultLocateOptions: {
			timeout: 10000,
			watch: false
			// setView: false
			// maxZoom: <Number>
			// maximumAge: 0
			// enableHighAccuracy: false
		},

		// @method locate(options?: Locate options): this
		// Tries to locate the user using the Geolocation API, firing a [`locationfound`](#map-locationfound)
		// event with location data on success or a [`locationerror`](#map-locationerror) event on failure,
		// and optionally sets the map view to the user's location with respect to
		// detection accuracy (or to the world view if geolocation failed).
		// Note that, if your page doesn't use HTTPS, this method will fail in
		// modern browsers ([Chrome 50 and newer](https://sites.google.com/a/chromium.org/dev/Home/chromium-security/deprecating-powerful-features-on-insecure-origins))
		// See `Locate options` for more details.
		locate: function (options) {

			options = this._locateOptions = L.extend({}, this._defaultLocateOptions, options);

			if (!('geolocation' in navigator)) {
				this._handleGeolocationError({
					code: 0,
					message: 'Geolocation not supported.'
				});
				return this;
			}

			var onResponse = L.bind(this._handleGeolocationResponse, this),
			    onError = L.bind(this._handleGeolocationError, this);

			if (options.watch) {
				this._locationWatchId =
				        navigator.geolocation.watchPosition(onResponse, onError, options);
			} else {
				navigator.geolocation.getCurrentPosition(onResponse, onError, options);
			}
			return this;
		},

		// @method stopLocate(): this
		// Stops watching location previously initiated by `map.locate({watch: true})`
		// and aborts resetting the map view if map.locate was called with
		// `{setView: true}`.
		stopLocate: function () {
			if (navigator.geolocation && navigator.geolocation.clearWatch) {
				navigator.geolocation.clearWatch(this._locationWatchId);
			}
			if (this._locateOptions) {
				this._locateOptions.setView = false;
			}
			return this;
		},

		_handleGeolocationError: function (error) {
			var c = error.code,
			    message = error.message ||
			            (c === 1 ? 'permission denied' :
			            (c === 2 ? 'position unavailable' : 'timeout'));

			if (this._locateOptions.setView && !this._loaded) {
				this.fitWorld();
			}

			// @section Location events
			// @event locationerror: ErrorEvent
			// Fired when geolocation (using the [`locate`](#map-locate) method) failed.
			this.fire('locationerror', {
				code: c,
				message: 'Geolocation error: ' + message + '.'
			});
		},

		_handleGeolocationResponse: function (pos) {
			var lat = pos.coords.latitude,
			    lng = pos.coords.longitude,
			    latlng = new L.LatLng(lat, lng),
			    bounds = latlng.toBounds(pos.coords.accuracy),
			    options = this._locateOptions;

			if (options.setView) {
				var zoom = this.getBoundsZoom(bounds);
				this.setView(latlng, options.maxZoom ? Math.min(zoom, options.maxZoom) : zoom);
			}

			var data = {
				latlng: latlng,
				bounds: bounds,
				timestamp: pos.timestamp
			};

			for (var i in pos.coords) {
				if (typeof pos.coords[i] === 'number') {
					data[i] = pos.coords[i];
				}
			}

			// @event locationfound: LocationEvent
			// Fired when geolocation (using the [`locate`](#map-locate) method)
			// went successfully.
			this.fire('locationfound', data);
		}
	});



	}(window, document));
	//# sourceMappingURL=leaflet-src.map

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var L = __webpack_require__(3);

	/*
	  Leaflet.AwesomeMarkers, a plugin that adds colorful iconic markers for Leaflet, based on the Font Awesome icons
	  (c) 2012-2013, Lennard Voogdt

	  http://leafletjs.com
	  https://github.com/lvoogdt
	*/

	/*global L*/

	(function (window, document, undefined) {
	    "use strict";
	    /*
	     * Leaflet.AwesomeMarkers assumes that you have already included the Leaflet library.
	     */

	    L.AwesomeMarkers = {};

	    L.AwesomeMarkers.version = '2.0.1';

	    L.AwesomeMarkers.Icon = L.Icon.extend({
	        options: {
	            iconSize: [35, 45],
	            iconAnchor:   [17, 42],
	            popupAnchor: [1, -32],
	            shadowAnchor: [10, 12],
	            shadowSize: [36, 16],
	            className: 'awesome-marker',
	            prefix: 'glyphicon',
	            spinClass: 'fa-spin',
	            extraClasses: '',
	            icon: 'home',
	            markerColor: 'blue',
	            iconColor: 'white'
	        },

	        initialize: function (options) {
	            options = L.Util.setOptions(this, options);
	        },

	        createIcon: function () {
	            var div = document.createElement('div'),
	                options = this.options;

	            if (options.icon) {
	                div.innerHTML = this._createInner();
	            }

	            if (options.bgPos) {
	                div.style.backgroundPosition =
	                    (-options.bgPos.x) + 'px ' + (-options.bgPos.y) + 'px';
	            }

	            this._setIconStyles(div, 'icon-' + options.markerColor);
	            return div;
	        },

	        _createInner: function() {
	            var iconClass, iconSpinClass = "", iconColorClass = "", iconColorStyle = "", options = this.options;

	            if(options.icon.slice(0,options.prefix.length+1) === options.prefix + "-") {
	                iconClass = options.icon;
	            } else {
	                iconClass = options.prefix + "-" + options.icon;
	            }

	            if(options.spin && typeof options.spinClass === "string") {
	                iconSpinClass = options.spinClass;
	            }

	            if(options.iconColor) {
	                //if(options.iconColor === 'white' || options.iconColor === 'black') {
	                //    iconColorClass = "icon-" + options.iconColor;
	                //} else {
	                //    iconColorStyle = "style='color: " + options.iconColor + "' ";
	                //}
	                iconColorStyle = "style='color: " + options.iconColor + "' ";
	            }

	            return "<i " + iconColorStyle + "class='" + options.extraClasses + " " + options.prefix + " " + iconClass + " " + iconSpinClass + " " + iconColorClass + "'></i>";
	        },

	        _setIconStyles: function (img, name) {
	            var options = this.options,
	                size = L.point(options[name === 'shadow' ? 'shadowSize' : 'iconSize']),
	                anchor;

	            if (name === 'shadow') {
	                anchor = L.point(options.shadowAnchor || options.iconAnchor);
	            } else {
	                anchor = L.point(options.iconAnchor);
	            }

	            if (!anchor && size) {
	                anchor = size.divideBy(2, true);
	            }

	            img.className = 'awesome-marker-' + name + ' ' + options.className;

	            if (anchor) {
	                img.style.marginLeft = (-anchor.x) + 'px';
	                img.style.marginTop  = (-anchor.y) + 'px';
	            }

	            if (size) {
	                img.style.width  = size.x + 'px';
	                img.style.height = size.y + 'px';
	            }
	        },

	        createShadow: function () {
	            var div = document.createElement('div');

	            this._setIconStyles(div, 'shadow');
	            return div;
	      }
	    });
	        
	    L.AwesomeMarkers.icon = function (options) {
	        return new L.AwesomeMarkers.Icon(options);
	    };

	}(this, document));






/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var L = __webpack_require__(3);

	/*
	 Leaflet.markercluster, Provides Beautiful Animated Marker Clustering functionality for Leaflet, a JS library for interactive maps.
	 https://github.com/Leaflet/Leaflet.markercluster
	 (c) 2012-2013, Dave Leaver, smartrak
	*/
	(function (window, document, undefined) {/*
	 * L.MarkerClusterGroup extends L.FeatureGroup by clustering the markers contained within
	 */

	L.MarkerClusterGroup = L.FeatureGroup.extend({

		options: {
			maxClusterRadius: 80, //A cluster will cover at most this many pixels from its center
			iconCreateFunction: null,

			spiderfyOnMaxZoom: true,
			showCoverageOnHover: true,
			zoomToBoundsOnClick: true,
			singleMarkerMode: false,

	        maxSpiderfySize: 100,

			disableClusteringAtZoom: null,

			// Setting this to false prevents the removal of any clusters outside of the viewpoint, which
			// is the default behaviour for performance reasons.
			removeOutsideVisibleBounds: true,

			// Set to false to disable all animations (zoom and spiderfy).
			// If false, option animateAddingMarkers below has no effect.
			// If L.DomUtil.TRANSITION is falsy, this option has no effect.
			animate: true,

			//Whether to animate adding markers after adding the MarkerClusterGroup to the map
			// If you are adding individual markers set to true, if adding bulk markers leave false for massive performance gains.
			animateAddingMarkers: false,

			//Increase to increase the distance away that spiderfied markers appear from the center
			spiderfyDistanceMultiplier: 1,

			// Make it possible to specify a polyline options on a spider leg
			spiderLegPolylineOptions: { weight: 1.5, color: '#222', opacity: 0.5 },

			// When bulk adding layers, adds markers in chunks. Means addLayers may not add all the layers in the call, others will be loaded during setTimeouts
			chunkedLoading: false,
			chunkInterval: 200, // process markers for a maximum of ~ n milliseconds (then trigger the chunkProgress callback)
			chunkDelay: 50, // at the end of each interval, give n milliseconds back to system/browser
			chunkProgress: null, // progress callback: function(processed, total, elapsed) (e.g. for a progress indicator)

			//Options to pass to the L.Polygon constructor
			polygonOptions: {}
		},

		initialize: function (options) {
			L.Util.setOptions(this, options);
			if (!this.options.iconCreateFunction) {
				this.options.iconCreateFunction = this._defaultIconCreateFunction;
			}

			this._featureGroup = L.featureGroup();
			this._featureGroup.addEventParent(this);

			this._nonPointGroup = L.featureGroup();
			this._nonPointGroup.addEventParent(this);

			this._inZoomAnimation = 0;
			this._needsClustering = [];
			this._needsRemoving = []; //Markers removed while we aren't on the map need to be kept track of
			//The bounds of the currently shown area (from _getExpandedVisibleBounds) Updated on zoom/move
			this._currentShownBounds = null;

			this._queue = [];

			// Hook the appropriate animation methods.
			var animate = L.DomUtil.TRANSITION && this.options.animate;
			L.extend(this, animate ? this._withAnimation : this._noAnimation);
			// Remember which MarkerCluster class to instantiate (animated or not).
			this._markerCluster = animate ? L.MarkerCluster : L.MarkerClusterNonAnimated;
		},

		addLayer: function (layer) {

			if (layer instanceof L.LayerGroup) {
				return this.addLayers([layer]);
			}

			//Don't cluster non point data
			if (!layer.getLatLng) {
				this._nonPointGroup.addLayer(layer);
				return this;
			}

			if (!this._map) {
				this._needsClustering.push(layer);
				return this;
			}

			if (this.hasLayer(layer)) {
				return this;
			}


			//If we have already clustered we'll need to add this one to a cluster

			if (this._unspiderfy) {
				this._unspiderfy();
			}

			this._addLayer(layer, this._maxZoom);

			// Refresh bounds and weighted positions.
			this._topClusterLevel._recalculateBounds();

			//Work out what is visible
			var visibleLayer = layer,
				currentZoom = this._map.getZoom();
			if (layer.__parent) {
				while (visibleLayer.__parent._zoom >= currentZoom) {
					visibleLayer = visibleLayer.__parent;
				}
			}

			if (this._currentShownBounds.contains(visibleLayer.getLatLng())) {
				if (this.options.animateAddingMarkers) {
					this._animationAddLayer(layer, visibleLayer);
				} else {
					this._animationAddLayerNonAnimated(layer, visibleLayer);
				}
			}
			return this;
		},

		removeLayer: function (layer) {

			if (layer instanceof L.LayerGroup) {
				return this.removeLayers([layer]);
			}

			//Non point layers
			if (!layer.getLatLng) {
				this._nonPointGroup.removeLayer(layer);
				return this;
			}

			if (!this._map) {
				if (!this._arraySplice(this._needsClustering, layer) && this.hasLayer(layer)) {
					this._needsRemoving.push(layer);
				}
				return this;
			}

			if (!layer.__parent) {
				return this;
			}

			if (this._unspiderfy) {
				this._unspiderfy();
				this._unspiderfyLayer(layer);
			}

			//Remove the marker from clusters
			this._removeLayer(layer, true);

			// Refresh bounds and weighted positions.
			this._topClusterLevel._recalculateBounds();

			layer.off('move', this._childMarkerMoved, this);

			if (this._featureGroup.hasLayer(layer)) {
				this._featureGroup.removeLayer(layer);
				if (layer.clusterShow) {
					layer.clusterShow();
				}
			}

			return this;
		},

		//Takes an array of markers and adds them in bulk
		addLayers: function (layersArray) {
			if (!L.Util.isArray(layersArray)) {
				return this.addLayer(layersArray);
			}

			var fg = this._featureGroup,
			    npg = this._nonPointGroup,
			    chunked = this.options.chunkedLoading,
			    chunkInterval = this.options.chunkInterval,
			    chunkProgress = this.options.chunkProgress,
			    l = layersArray.length,
			    offset = 0,
			    originalArray = true,
			    m;

			if (this._map) {
				var started = (new Date()).getTime();
				var process = L.bind(function () {
					var start = (new Date()).getTime();
					for (; offset < l; offset++) {
						if (chunked && offset % 200 === 0) {
							// every couple hundred markers, instrument the time elapsed since processing started:
							var elapsed = (new Date()).getTime() - start;
							if (elapsed > chunkInterval) {
								break; // been working too hard, time to take a break :-)
							}
						}

						m = layersArray[offset];

						// Group of layers, append children to layersArray and skip.
						// Side effects:
						// - Total increases, so chunkProgress ratio jumps backward.
						// - Groups are not included in this group, only their non-group child layers (hasLayer).
						// Changing array length while looping does not affect performance in current browsers:
						// http://jsperf.com/for-loop-changing-length/6
						if (m instanceof L.LayerGroup) {
							if (originalArray) {
								layersArray = layersArray.slice();
								originalArray = false;
							}
							this._extractNonGroupLayers(m, layersArray);
							l = layersArray.length;
							continue;
						}

						//Not point data, can't be clustered
						if (!m.getLatLng) {
							npg.addLayer(m);
							continue;
						}

						if (this.hasLayer(m)) {
							continue;
						}

						this._addLayer(m, this._maxZoom);

						//If we just made a cluster of size 2 then we need to remove the other marker from the map (if it is) or we never will
						if (m.__parent) {
							if (m.__parent.getChildCount() === 2) {
								var markers = m.__parent.getAllChildMarkers(),
								    otherMarker = markers[0] === m ? markers[1] : markers[0];
								fg.removeLayer(otherMarker);
							}
						}
					}

					if (chunkProgress) {
						// report progress and time elapsed:
						chunkProgress(offset, l, (new Date()).getTime() - started);
					}

					// Completed processing all markers.
					if (offset === l) {

						// Refresh bounds and weighted positions.
						this._topClusterLevel._recalculateBounds();

						//Update the icons of all those visible clusters that were affected
						this._featureGroup.eachLayer(function (c) {
							if (c instanceof L.MarkerCluster && c._iconNeedsUpdate) {
								c._updateIcon();
							}
						});

						this._topClusterLevel._recursivelyAddChildrenToMap(null, this._zoom, this._currentShownBounds);
					} else {
						setTimeout(process, this.options.chunkDelay);
					}
				}, this);

				process();
			} else {
				var needsClustering = this._needsClustering;

				for (; offset < l; offset++) {
					m = layersArray[offset];

					// Group of layers, append children to layersArray and skip.
					if (m instanceof L.LayerGroup) {
						if (originalArray) {
							layersArray = layersArray.slice();
							originalArray = false;
						}
						this._extractNonGroupLayers(m, layersArray);
						l = layersArray.length;
						continue;
					}

					//Not point data, can't be clustered
					if (!m.getLatLng) {
						npg.addLayer(m);
						continue;
					}

					if (this.hasLayer(m)) {
						continue;
					}

					needsClustering.push(m);
				}
			}
			return this;
		},

		//Takes an array of markers and removes them in bulk
		removeLayers: function (layersArray) {
			var i, m,
			    l = layersArray.length,
			    fg = this._featureGroup,
			    npg = this._nonPointGroup,
			    originalArray = true;

			if (!this._map) {
				for (i = 0; i < l; i++) {
					m = layersArray[i];

					// Group of layers, append children to layersArray and skip.
					if (m instanceof L.LayerGroup) {
						if (originalArray) {
							layersArray = layersArray.slice();
							originalArray = false;
						}
						this._extractNonGroupLayers(m, layersArray);
						l = layersArray.length;
						continue;
					}

					this._arraySplice(this._needsClustering, m);
					npg.removeLayer(m);
					if (this.hasLayer(m)) {
						this._needsRemoving.push(m);
					}
				}
				return this;
			}

			if (this._unspiderfy) {
				this._unspiderfy();

				// Work on a copy of the array, so that next loop is not affected.
				var layersArray2 = layersArray.slice(),
				    l2 = l;
				for (i = 0; i < l2; i++) {
					m = layersArray2[i];

					// Group of layers, append children to layersArray and skip.
					if (m instanceof L.LayerGroup) {
						this._extractNonGroupLayers(m, layersArray2);
						l2 = layersArray2.length;
						continue;
					}

					this._unspiderfyLayer(m);
				}
			}

			for (i = 0; i < l; i++) {
				m = layersArray[i];

				// Group of layers, append children to layersArray and skip.
				if (m instanceof L.LayerGroup) {
					if (originalArray) {
						layersArray = layersArray.slice();
						originalArray = false;
					}
					this._extractNonGroupLayers(m, layersArray);
					l = layersArray.length;
					continue;
				}

				if (!m.__parent) {
					npg.removeLayer(m);
					continue;
				}

				this._removeLayer(m, true, true);

				if (fg.hasLayer(m)) {
					fg.removeLayer(m);
					if (m.clusterShow) {
						m.clusterShow();
					}
				}
			}

			// Refresh bounds and weighted positions.
			this._topClusterLevel._recalculateBounds();

			//Fix up the clusters and markers on the map
			this._topClusterLevel._recursivelyAddChildrenToMap(null, this._zoom, this._currentShownBounds);

			fg.eachLayer(function (c) {
				if (c instanceof L.MarkerCluster) {
					c._updateIcon();
				}
			});

			return this;
		},

		//Removes all layers from the MarkerClusterGroup
		clearLayers: function () {
			//Need our own special implementation as the LayerGroup one doesn't work for us

			//If we aren't on the map (yet), blow away the markers we know of
			if (!this._map) {
				this._needsClustering = [];
				delete this._gridClusters;
				delete this._gridUnclustered;
			}

			if (this._noanimationUnspiderfy) {
				this._noanimationUnspiderfy();
			}

			//Remove all the visible layers
			this._featureGroup.clearLayers();
			this._nonPointGroup.clearLayers();

			this.eachLayer(function (marker) {
				marker.off('move', this._childMarkerMoved, this);
				delete marker.__parent;
			});

			if (this._map) {
				//Reset _topClusterLevel and the DistanceGrids
				this._generateInitialClusters();
			}

			return this;
		},

		//Override FeatureGroup.getBounds as it doesn't work
		getBounds: function () {
			var bounds = new L.LatLngBounds();

			if (this._topClusterLevel) {
				bounds.extend(this._topClusterLevel._bounds);
			}

			for (var i = this._needsClustering.length - 1; i >= 0; i--) {
				bounds.extend(this._needsClustering[i].getLatLng());
			}

			bounds.extend(this._nonPointGroup.getBounds());

			return bounds;
		},

		//Overrides LayerGroup.eachLayer
		eachLayer: function (method, context) {
			var markers = this._needsClustering.slice(),
				needsRemoving = this._needsRemoving,
				i;

			if (this._topClusterLevel) {
				this._topClusterLevel.getAllChildMarkers(markers);
			}

			for (i = markers.length - 1; i >= 0; i--) {
				if (needsRemoving.indexOf(markers[i]) === -1) {
					method.call(context, markers[i]);
				}
			}

			this._nonPointGroup.eachLayer(method, context);
		},

		//Overrides LayerGroup.getLayers
		getLayers: function () {
			var layers = [];
			this.eachLayer(function (l) {
				layers.push(l);
			});
			return layers;
		},

		//Overrides LayerGroup.getLayer, WARNING: Really bad performance
		getLayer: function (id) {
			var result = null;
			
			id = parseInt(id, 10);

			this.eachLayer(function (l) {
				if (L.stamp(l) === id) {
					result = l;
				}
			});

			return result;
		},

		//Returns true if the given layer is in this MarkerClusterGroup
		hasLayer: function (layer) {
			if (!layer) {
				return false;
			}

			var i, anArray = this._needsClustering;

			for (i = anArray.length - 1; i >= 0; i--) {
				if (anArray[i] === layer) {
					return true;
				}
			}

			anArray = this._needsRemoving;
			for (i = anArray.length - 1; i >= 0; i--) {
				if (anArray[i] === layer) {
					return false;
				}
			}

			return !!(layer.__parent && layer.__parent._group === this) || this._nonPointGroup.hasLayer(layer);
		},

		//Zoom down to show the given layer (spiderfying if necessary) then calls the callback
		zoomToShowLayer: function (layer, callback) {
			
			if (typeof callback !== 'function') {
				callback = function () {};
			}

			var showMarker = function () {
				if ((layer._icon || layer.__parent._icon) && !this._inZoomAnimation) {
					this._map.off('moveend', showMarker, this);
					this.off('animationend', showMarker, this);

					if (layer._icon) {
						callback();
					} else if (layer.__parent._icon) {
						this.once('spiderfied', callback, this);
						layer.__parent.spiderfy();
					}
				}
			};

			if (layer._icon && this._map.getBounds().contains(layer.getLatLng())) {
				//Layer is visible ond on screen, immediate return
				callback();
			} else if (layer.__parent._zoom < this._map.getZoom()) {
				//Layer should be visible at this zoom level. It must not be on screen so just pan over to it
				this._map.on('moveend', showMarker, this);
				this._map.panTo(layer.getLatLng());
			} else {
				var moveStart = function () {
					this._map.off('movestart', moveStart, this);
					moveStart = null;
				};

				this._map.on('movestart', moveStart, this);
				this._map.on('moveend', showMarker, this);
				this.on('animationend', showMarker, this);
				layer.__parent.zoomToBounds();

				if (moveStart) {
					//Never started moving, must already be there, probably need clustering however
					showMarker.call(this);
				}
			}
		},

		//Overrides FeatureGroup.onAdd
		onAdd: function (map) {
			this._map = map;
			var i, l, layer;

			if (!isFinite(this._map.getMaxZoom())) {
				throw "Map has no maxZoom specified";
			}

			this._featureGroup.addTo(map);
			this._nonPointGroup.addTo(map);

			if (!this._gridClusters) {
				this._generateInitialClusters();
			}

			this._maxLat = map.options.crs.projection.MAX_LATITUDE;

			for (i = 0, l = this._needsRemoving.length; i < l; i++) {
				layer = this._needsRemoving[i];
				this._removeLayer(layer, true);
			}
			this._needsRemoving = [];

			//Remember the current zoom level and bounds
			this._zoom = this._map.getZoom();
			this._currentShownBounds = this._getExpandedVisibleBounds();

			this._map.on('zoomend', this._zoomEnd, this);
			this._map.on('moveend', this._moveEnd, this);

			if (this._spiderfierOnAdd) { //TODO FIXME: Not sure how to have spiderfier add something on here nicely
				this._spiderfierOnAdd();
			}

			this._bindEvents();

			//Actually add our markers to the map:
			l = this._needsClustering;
			this._needsClustering = [];
			this.addLayers(l);
		},

		//Overrides FeatureGroup.onRemove
		onRemove: function (map) {
			map.off('zoomend', this._zoomEnd, this);
			map.off('moveend', this._moveEnd, this);

			this._unbindEvents();

			//In case we are in a cluster animation
			this._map._mapPane.className = this._map._mapPane.className.replace(' leaflet-cluster-anim', '');

			if (this._spiderfierOnRemove) { //TODO FIXME: Not sure how to have spiderfier add something on here nicely
				this._spiderfierOnRemove();
			}

			delete this._maxLat;

			//Clean up all the layers we added to the map
			this._hideCoverage();
			this._featureGroup.remove();
			this._nonPointGroup.remove();

			this._featureGroup.clearLayers();

			this._map = null;
		},

		getVisibleParent: function (marker) {
			var vMarker = marker;
			while (vMarker && !vMarker._icon) {
				vMarker = vMarker.__parent;
			}
			return vMarker || null;
		},

		//Remove the given object from the given array
		_arraySplice: function (anArray, obj) {
			for (var i = anArray.length - 1; i >= 0; i--) {
				if (anArray[i] === obj) {
					anArray.splice(i, 1);
					return true;
				}
			}
		},

		/**
		 * Removes a marker from all _gridUnclustered zoom levels, starting at the supplied zoom.
		 * @param marker to be removed from _gridUnclustered.
		 * @param z integer bottom start zoom level (included)
		 * @private
		 */
		_removeFromGridUnclustered: function (marker, z) {
			var map             = this._map,
			    gridUnclustered = this._gridUnclustered;

			for (; z >= 0; z--) {
				if (!gridUnclustered[z].removeObject(marker, map.project(marker.getLatLng(), z))) {
					break;
				}
			}
		},

		_childMarkerMoved: function (e) {
			if (!this._ignoreMove) {
				e.target._latlng = e.oldLatLng;
				this.removeLayer(e.target);

				e.target._latlng = e.latlng;
				this.addLayer(e.target);
			}
		},

		//Internal function for removing a marker from everything.
		//dontUpdateMap: set to true if you will handle updating the map manually (for bulk functions)
		_removeLayer: function (marker, removeFromDistanceGrid, dontUpdateMap) {
			var gridClusters = this._gridClusters,
				gridUnclustered = this._gridUnclustered,
				fg = this._featureGroup,
				map = this._map;

			//Remove the marker from distance clusters it might be in
			if (removeFromDistanceGrid) {
				this._removeFromGridUnclustered(marker, this._maxZoom);
			}

			//Work our way up the clusters removing them as we go if required
			var cluster = marker.__parent,
				markers = cluster._markers,
				otherMarker;

			//Remove the marker from the immediate parents marker list
			this._arraySplice(markers, marker);

			while (cluster) {
				cluster._childCount--;
				cluster._boundsNeedUpdate = true;

				if (cluster._zoom < 0) {
					//Top level, do nothing
					break;
				} else if (removeFromDistanceGrid && cluster._childCount <= 1) { //Cluster no longer required
					//We need to push the other marker up to the parent
					otherMarker = cluster._markers[0] === marker ? cluster._markers[1] : cluster._markers[0];

					//Update distance grid
					gridClusters[cluster._zoom].removeObject(cluster, map.project(cluster._cLatLng, cluster._zoom));
					gridUnclustered[cluster._zoom].addObject(otherMarker, map.project(otherMarker.getLatLng(), cluster._zoom));

					//Move otherMarker up to parent
					this._arraySplice(cluster.__parent._childClusters, cluster);
					cluster.__parent._markers.push(otherMarker);
					otherMarker.__parent = cluster.__parent;

					if (cluster._icon) {
						//Cluster is currently on the map, need to put the marker on the map instead
						fg.removeLayer(cluster);
						if (!dontUpdateMap) {
							fg.addLayer(otherMarker);
						}
					}
				} else {
					if (!dontUpdateMap || !cluster._icon) {
						cluster._updateIcon();
					}
				}

				cluster = cluster.__parent;
			}

			delete marker.__parent;
		},

		_isOrIsParent: function (el, oel) {
			while (oel) {
				if (el === oel) {
					return true;
				}
				oel = oel.parentNode;
			}
			return false;
		},

		//Override L.Evented.fire
		fire: function (type, data, propagate) {
			if (data && data.layer instanceof L.MarkerCluster) {
				//Prevent multiple clustermouseover/off events if the icon is made up of stacked divs (Doesn't work in ie <= 8, no relatedTarget)
				if (data.originalEvent && this._isOrIsParent(data.layer._icon, data.originalEvent.relatedTarget)) {
					return;
				}
				type = 'cluster' + type;
			}

			L.FeatureGroup.prototype.fire.call(this, type, data, propagate);
		},

		//Override L.Evented.listens
		listens: function (type, propagate) {
			return L.FeatureGroup.prototype.listens.call(this, type, propagate) || L.FeatureGroup.prototype.listens.call(this, 'cluster' + type, propagate);
		},

		//Default functionality
		_defaultIconCreateFunction: function (cluster) {
			var childCount = cluster.getChildCount();

			var c = ' marker-cluster-';
			if (childCount < 10) {
				c += 'small';
			} else if (childCount < 100) {
				c += 'medium';
			} else {
				c += 'large';
			}

			return new L.DivIcon({ html: '<div><span>' + childCount + '</span></div>', className: 'marker-cluster' + c, iconSize: new L.Point(40, 40) });
		},

		_bindEvents: function () {
			var map = this._map,
			    spiderfyOnMaxZoom = this.options.spiderfyOnMaxZoom,
			    showCoverageOnHover = this.options.showCoverageOnHover,
			    zoomToBoundsOnClick = this.options.zoomToBoundsOnClick;

			//Zoom on cluster click or spiderfy if we are at the lowest level
			if (spiderfyOnMaxZoom || zoomToBoundsOnClick) {
				this.on('clusterclick', this._zoomOrSpiderfy, this);
			}

			//Show convex hull (boundary) polygon on mouse over
			if (showCoverageOnHover) {
				this.on('clustermouseover', this._showCoverage, this);
				this.on('clustermouseout', this._hideCoverage, this);
				map.on('zoomend', this._hideCoverage, this);
			}
		},

		_zoomOrSpiderfy: function (e) {
			var cluster = e.layer,
			    bottomCluster = cluster;

			while (bottomCluster._childClusters.length === 1) {
				bottomCluster = bottomCluster._childClusters[0];
			}

			if (bottomCluster._zoom === this._maxZoom && bottomCluster._childCount === cluster._childCount) {
				// All child markers are contained in a single cluster from this._maxZoom to this cluster.
				if (this.options.spiderfyOnMaxZoom) {
					cluster.spiderfy();
				}
			} else if (this.options.zoomToBoundsOnClick) {
				cluster.zoomToBounds();
			}

			// Focus the map again for keyboard users.
			if (e.originalEvent && e.originalEvent.keyCode === 13) {
				this._map._container.focus();
			}
		},

		_showCoverage: function (e) {
			var map = this._map;
			if (this._inZoomAnimation) {
				return;
			}
			if (this._shownPolygon) {
				map.removeLayer(this._shownPolygon);
			}
			if (e.layer.getChildCount() > 2 && e.layer !== this._spiderfied) {
				this._shownPolygon = new L.Polygon(e.layer.getConvexHull(), this.options.polygonOptions);
				map.addLayer(this._shownPolygon);
			}
		},

		_hideCoverage: function () {
			if (this._shownPolygon) {
				this._map.removeLayer(this._shownPolygon);
				this._shownPolygon = null;
			}
		},

		_unbindEvents: function () {
			var spiderfyOnMaxZoom = this.options.spiderfyOnMaxZoom,
				showCoverageOnHover = this.options.showCoverageOnHover,
				zoomToBoundsOnClick = this.options.zoomToBoundsOnClick,
				map = this._map;

			if (spiderfyOnMaxZoom || zoomToBoundsOnClick) {
				this.off('clusterclick', this._zoomOrSpiderfy, this);
			}
			if (showCoverageOnHover) {
				this.off('clustermouseover', this._showCoverage, this);
				this.off('clustermouseout', this._hideCoverage, this);
				map.off('zoomend', this._hideCoverage, this);
			}
		},

		_zoomEnd: function () {
			if (!this._map) { //May have been removed from the map by a zoomEnd handler
				return;
			}
			this._mergeSplitClusters();

			this._zoom = Math.round(this._map._zoom);
			this._currentShownBounds = this._getExpandedVisibleBounds();
		},

		_moveEnd: function () {
			if (this._inZoomAnimation) {
				return;
			}

			var newBounds = this._getExpandedVisibleBounds();

			this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, this._zoom, newBounds);
			this._topClusterLevel._recursivelyAddChildrenToMap(null, Math.round(this._map._zoom), newBounds);

			this._currentShownBounds = newBounds;
			return;
		},

		_generateInitialClusters: function () {
			var maxZoom = this._map.getMaxZoom(),
				radius = this.options.maxClusterRadius,
				radiusFn = radius;
		
			//If we just set maxClusterRadius to a single number, we need to create
			//a simple function to return that number. Otherwise, we just have to
			//use the function we've passed in.
			if (typeof radius !== "function") {
				radiusFn = function () { return radius; };
			}

			if (this.options.disableClusteringAtZoom) {
				maxZoom = this.options.disableClusteringAtZoom - 1;
			}
			this._maxZoom = maxZoom;
			this._gridClusters = {};
			this._gridUnclustered = {};
		
			//Set up DistanceGrids for each zoom
			for (var zoom = maxZoom; zoom >= 0; zoom--) {
				this._gridClusters[zoom] = new L.DistanceGrid(radiusFn(zoom));
				this._gridUnclustered[zoom] = new L.DistanceGrid(radiusFn(zoom));
			}

			// Instantiate the appropriate L.MarkerCluster class (animated or not).
			this._topClusterLevel = new this._markerCluster(this, -1);
		},

		//Zoom: Zoom to start adding at (Pass this._maxZoom to start at the bottom)
		_addLayer: function (layer, zoom) {
			var gridClusters = this._gridClusters,
			    gridUnclustered = this._gridUnclustered,
			    markerPoint, z;

			if (this.options.singleMarkerMode) {
				this._overrideMarkerIcon(layer);
			}

			layer.on('move', this._childMarkerMoved, this);

			//Find the lowest zoom level to slot this one in
			for (; zoom >= 0; zoom--) {
				markerPoint = this._map.project(layer.getLatLng(), zoom); // calculate pixel position

				//Try find a cluster close by
				var closest = gridClusters[zoom].getNearObject(markerPoint);
				if (closest) {
					closest._addChild(layer);
					layer.__parent = closest;
					return;
				}

				//Try find a marker close by to form a new cluster with
				closest = gridUnclustered[zoom].getNearObject(markerPoint);
				if (closest) {
					var parent = closest.__parent;
					if (parent) {
						this._removeLayer(closest, false);
					}

					//Create new cluster with these 2 in it

					var newCluster = new this._markerCluster(this, zoom, closest, layer);
					gridClusters[zoom].addObject(newCluster, this._map.project(newCluster._cLatLng, zoom));
					closest.__parent = newCluster;
					layer.__parent = newCluster;

					//First create any new intermediate parent clusters that don't exist
					var lastParent = newCluster;
					for (z = zoom - 1; z > parent._zoom; z--) {
						lastParent = new this._markerCluster(this, z, lastParent);
						gridClusters[z].addObject(lastParent, this._map.project(closest.getLatLng(), z));
					}
					parent._addChild(lastParent);

					//Remove closest from this zoom level and any above that it is in, replace with newCluster
					this._removeFromGridUnclustered(closest, zoom);

					return;
				}

				//Didn't manage to cluster in at this zoom, record us as a marker here and continue upwards
				gridUnclustered[zoom].addObject(layer, markerPoint);
			}

			//Didn't get in anything, add us to the top
			this._topClusterLevel._addChild(layer);
			layer.__parent = this._topClusterLevel;
			return;
		},

		//Enqueue code to fire after the marker expand/contract has happened
		_enqueue: function (fn) {
			this._queue.push(fn);
			if (!this._queueTimeout) {
				this._queueTimeout = setTimeout(L.bind(this._processQueue, this), 300);
			}
		},
		_processQueue: function () {
			for (var i = 0; i < this._queue.length; i++) {
				this._queue[i].call(this);
			}
			this._queue.length = 0;
			clearTimeout(this._queueTimeout);
			this._queueTimeout = null;
		},

		//Merge and split any existing clusters that are too big or small
		_mergeSplitClusters: function () {
			var mapZoom = Math.round(this._map._zoom);

			//In case we are starting to split before the animation finished
			this._processQueue();

			if (this._zoom < mapZoom && this._currentShownBounds.intersects(this._getExpandedVisibleBounds())) { //Zoom in, split
				this._animationStart();
				//Remove clusters now off screen
				this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, this._zoom, this._getExpandedVisibleBounds());

				this._animationZoomIn(this._zoom, mapZoom);

			} else if (this._zoom > mapZoom) { //Zoom out, merge
				this._animationStart();

				this._animationZoomOut(this._zoom, mapZoom);
			} else {
				this._moveEnd();
			}
		},

		//Gets the maps visible bounds expanded in each direction by the size of the screen (so the user cannot see an area we do not cover in one pan)
		_getExpandedVisibleBounds: function () {
			if (!this.options.removeOutsideVisibleBounds) {
				return this._mapBoundsInfinite;
			} else if (L.Browser.mobile) {
				return this._checkBoundsMaxLat(this._map.getBounds());
			}

			return this._checkBoundsMaxLat(this._map.getBounds().pad(1)); // Padding expands the bounds by its own dimensions but scaled with the given factor.
		},

		/**
		 * Expands the latitude to Infinity (or -Infinity) if the input bounds reach the map projection maximum defined latitude
		 * (in the case of Web/Spherical Mercator, it is 85.0511287798 / see https://en.wikipedia.org/wiki/Web_Mercator#Formulas).
		 * Otherwise, the removeOutsideVisibleBounds option will remove markers beyond that limit, whereas the same markers without
		 * this option (or outside MCG) will have their position floored (ceiled) by the projection and rendered at that limit,
		 * making the user think that MCG "eats" them and never displays them again.
		 * @param bounds L.LatLngBounds
		 * @returns {L.LatLngBounds}
		 * @private
		 */
		_checkBoundsMaxLat: function (bounds) {
			var maxLat = this._maxLat;

			if (maxLat !== undefined) {
				if (bounds.getNorth() >= maxLat) {
					bounds._northEast.lat = Infinity;
				}
				if (bounds.getSouth() <= -maxLat) {
					bounds._southWest.lat = -Infinity;
				}
			}

			return bounds;
		},

		//Shared animation code
		_animationAddLayerNonAnimated: function (layer, newCluster) {
			if (newCluster === layer) {
				this._featureGroup.addLayer(layer);
			} else if (newCluster._childCount === 2) {
				newCluster._addToMap();

				var markers = newCluster.getAllChildMarkers();
				this._featureGroup.removeLayer(markers[0]);
				this._featureGroup.removeLayer(markers[1]);
			} else {
				newCluster._updateIcon();
			}
		},

		/**
		 * Extracts individual (i.e. non-group) layers from a Layer Group.
		 * @param group to extract layers from.
		 * @param output {Array} in which to store the extracted layers.
		 * @returns {*|Array}
		 * @private
		 */
		_extractNonGroupLayers: function (group, output) {
			var layers = group.getLayers(),
			    i = 0,
			    layer;

			output = output || [];

			for (; i < layers.length; i++) {
				layer = layers[i];

				if (layer instanceof L.LayerGroup) {
					this._extractNonGroupLayers(layer, output);
					continue;
				}

				output.push(layer);
			}

			return output;
		},

		/**
		 * Implements the singleMarkerMode option.
		 * @param layer Marker to re-style using the Clusters iconCreateFunction.
		 * @returns {L.Icon} The newly created icon.
		 * @private
		 */
		_overrideMarkerIcon: function (layer) {
			var icon = layer.options.icon = this.options.iconCreateFunction({
				getChildCount: function () {
					return 1;
				},
				getAllChildMarkers: function () {
					return [layer];
				}
			});

			return icon;
		}
	});

	// Constant bounds used in case option "removeOutsideVisibleBounds" is set to false.
	L.MarkerClusterGroup.include({
		_mapBoundsInfinite: new L.LatLngBounds(new L.LatLng(-Infinity, -Infinity), new L.LatLng(Infinity, Infinity))
	});

	L.MarkerClusterGroup.include({
		_noAnimation: {
			//Non Animated versions of everything
			_animationStart: function () {
				//Do nothing...
			},
			_animationZoomIn: function (previousZoomLevel, newZoomLevel) {
				this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, previousZoomLevel);
				this._topClusterLevel._recursivelyAddChildrenToMap(null, newZoomLevel, this._getExpandedVisibleBounds());

				//We didn't actually animate, but we use this event to mean "clustering animations have finished"
				this.fire('animationend');
			},
			_animationZoomOut: function (previousZoomLevel, newZoomLevel) {
				this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, previousZoomLevel);
				this._topClusterLevel._recursivelyAddChildrenToMap(null, newZoomLevel, this._getExpandedVisibleBounds());

				//We didn't actually animate, but we use this event to mean "clustering animations have finished"
				this.fire('animationend');
			},
			_animationAddLayer: function (layer, newCluster) {
				this._animationAddLayerNonAnimated(layer, newCluster);
			}
		},

		_withAnimation: {
			//Animated versions here
			_animationStart: function () {
				this._map._mapPane.className += ' leaflet-cluster-anim';
				this._inZoomAnimation++;
			},

			_animationZoomIn: function (previousZoomLevel, newZoomLevel) {
				var bounds = this._getExpandedVisibleBounds(),
				    fg     = this._featureGroup,
				    i;

				this._ignoreMove = true;

				//Add all children of current clusters to map and remove those clusters from map
				this._topClusterLevel._recursively(bounds, previousZoomLevel, 0, function (c) {
					var startPos = c._latlng,
					    markers  = c._markers,
					    m;

					if (!bounds.contains(startPos)) {
						startPos = null;
					}

					if (c._isSingleParent() && previousZoomLevel + 1 === newZoomLevel) { //Immediately add the new child and remove us
						fg.removeLayer(c);
						c._recursivelyAddChildrenToMap(null, newZoomLevel, bounds);
					} else {
						//Fade out old cluster
						c.clusterHide();
						c._recursivelyAddChildrenToMap(startPos, newZoomLevel, bounds);
					}

					//Remove all markers that aren't visible any more
					//TODO: Do we actually need to do this on the higher levels too?
					for (i = markers.length - 1; i >= 0; i--) {
						m = markers[i];
						if (!bounds.contains(m._latlng)) {
							fg.removeLayer(m);
						}
					}

				});

				this._forceLayout();

				//Update opacities
				this._topClusterLevel._recursivelyBecomeVisible(bounds, newZoomLevel);
				//TODO Maybe? Update markers in _recursivelyBecomeVisible
				fg.eachLayer(function (n) {
					if (!(n instanceof L.MarkerCluster) && n._icon) {
						n.clusterShow();
					}
				});

				//update the positions of the just added clusters/markers
				this._topClusterLevel._recursively(bounds, previousZoomLevel, newZoomLevel, function (c) {
					c._recursivelyRestoreChildPositions(newZoomLevel);
				});

				this._ignoreMove = false;

				//Remove the old clusters and close the zoom animation
				this._enqueue(function () {
					//update the positions of the just added clusters/markers
					this._topClusterLevel._recursively(bounds, previousZoomLevel, 0, function (c) {
						fg.removeLayer(c);
						c.clusterShow();
					});

					this._animationEnd();
				});
			},

			_animationZoomOut: function (previousZoomLevel, newZoomLevel) {
				this._animationZoomOutSingle(this._topClusterLevel, previousZoomLevel - 1, newZoomLevel);

				//Need to add markers for those that weren't on the map before but are now
				this._topClusterLevel._recursivelyAddChildrenToMap(null, newZoomLevel, this._getExpandedVisibleBounds());
				//Remove markers that were on the map before but won't be now
				this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, previousZoomLevel, this._getExpandedVisibleBounds());
			},

			_animationAddLayer: function (layer, newCluster) {
				var me = this,
				    fg = this._featureGroup;

				fg.addLayer(layer);
				if (newCluster !== layer) {
					if (newCluster._childCount > 2) { //Was already a cluster

						newCluster._updateIcon();
						this._forceLayout();
						this._animationStart();

						layer._setPos(this._map.latLngToLayerPoint(newCluster.getLatLng()));
						layer.clusterHide();

						this._enqueue(function () {
							fg.removeLayer(layer);
							layer.clusterShow();

							me._animationEnd();
						});

					} else { //Just became a cluster
						this._forceLayout();

						me._animationStart();
						me._animationZoomOutSingle(newCluster, this._map.getMaxZoom(), this._map.getZoom());
					}
				}
			}
		},

		// Private methods for animated versions.
		_animationZoomOutSingle: function (cluster, previousZoomLevel, newZoomLevel) {
			var bounds = this._getExpandedVisibleBounds();

			//Animate all of the markers in the clusters to move to their cluster center point
			cluster._recursivelyAnimateChildrenInAndAddSelfToMap(bounds, previousZoomLevel + 1, newZoomLevel);

			var me = this;

			//Update the opacity (If we immediately set it they won't animate)
			this._forceLayout();
			cluster._recursivelyBecomeVisible(bounds, newZoomLevel);

			//TODO: Maybe use the transition timing stuff to make this more reliable
			//When the animations are done, tidy up
			this._enqueue(function () {

				//This cluster stopped being a cluster before the timeout fired
				if (cluster._childCount === 1) {
					var m = cluster._markers[0];
					//If we were in a cluster animation at the time then the opacity and position of our child could be wrong now, so fix it
					this._ignoreMove = true;
					m.setLatLng(m.getLatLng());
					this._ignoreMove = false;
					if (m.clusterShow) {
						m.clusterShow();
					}
				} else {
					cluster._recursively(bounds, newZoomLevel, 0, function (c) {
						c._recursivelyRemoveChildrenFromMap(bounds, previousZoomLevel + 1);
					});
				}
				me._animationEnd();
			});
		},

		_animationEnd: function () {
			if (this._map) {
				this._map._mapPane.className = this._map._mapPane.className.replace(' leaflet-cluster-anim', '');
			}
			this._inZoomAnimation--;
			this.fire('animationend');
		},

		//Force a browser layout of stuff in the map
		// Should apply the current opacity and location to all elements so we can update them again for an animation
		_forceLayout: function () {
			//In my testing this works, infact offsetWidth of any element seems to work.
			//Could loop all this._layers and do this for each _icon if it stops working

			L.Util.falseFn(document.body.offsetWidth);
		}
	});

	L.markerClusterGroup = function (options) {
		return new L.MarkerClusterGroup(options);
	};


	L.MarkerCluster = L.Marker.extend({
		initialize: function (group, zoom, a, b) {
			L.Marker.prototype.initialize.call(this, a ? (a._cLatLng || a.getLatLng()) : new L.LatLng(0, 0), { icon: this });


			this._group = group;
			this._zoom = zoom;

			this._markers = [];
			this._childClusters = [];
			this._childCount = 0;
			this._iconNeedsUpdate = true;
			this._boundsNeedUpdate = true;

			this._bounds = new L.LatLngBounds();

			if (a) {
				this._addChild(a);
			}
			if (b) {
				this._addChild(b);
			}
		},

		//Recursively retrieve all child markers of this cluster
		getAllChildMarkers: function (storageArray) {
			storageArray = storageArray || [];

			for (var i = this._childClusters.length - 1; i >= 0; i--) {
				this._childClusters[i].getAllChildMarkers(storageArray);
			}

			for (var j = this._markers.length - 1; j >= 0; j--) {
				storageArray.push(this._markers[j]);
			}

			return storageArray;
		},

		//Returns the count of how many child markers we have
		getChildCount: function () {
			return this._childCount;
		},

		//Zoom to the minimum of showing all of the child markers, or the extents of this cluster
		zoomToBounds: function () {
			var childClusters = this._childClusters.slice(),
				map = this._group._map,
				boundsZoom = map.getBoundsZoom(this._bounds),
				zoom = this._zoom + 1,
				mapZoom = map.getZoom(),
				i;

			//calculate how far we need to zoom down to see all of the markers
			while (childClusters.length > 0 && boundsZoom > zoom) {
				zoom++;
				var newClusters = [];
				for (i = 0; i < childClusters.length; i++) {
					newClusters = newClusters.concat(childClusters[i]._childClusters);
				}
				childClusters = newClusters;
			}

			if (boundsZoom > zoom) {
				this._group._map.setView(this._latlng, zoom);
			} else if (boundsZoom <= mapZoom) { //If fitBounds wouldn't zoom us down, zoom us down instead
				this._group._map.setView(this._latlng, mapZoom + 1);
			} else {
				this._group._map.fitBounds(this._bounds);
			}
		},

		getBounds: function () {
			var bounds = new L.LatLngBounds();
			bounds.extend(this._bounds);
			return bounds;
		},

		_updateIcon: function () {
			this._iconNeedsUpdate = true;
			if (this._icon) {
				this.setIcon(this);
			}
		},

		//Cludge for Icon, we pretend to be an icon for performance
		createIcon: function () {
			if (this._iconNeedsUpdate) {
				this._iconObj = this._group.options.iconCreateFunction(this);
				this._iconNeedsUpdate = false;
			}
			return this._iconObj.createIcon();
		},
		createShadow: function () {
			return this._iconObj.createShadow();
		},


		_addChild: function (new1, isNotificationFromChild) {

			this._iconNeedsUpdate = true;

			this._boundsNeedUpdate = true;
			this._setClusterCenter(new1);

			if (new1 instanceof L.MarkerCluster) {
				if (!isNotificationFromChild) {
					this._childClusters.push(new1);
					new1.__parent = this;
				}
				this._childCount += new1._childCount;
			} else {
				if (!isNotificationFromChild) {
					this._markers.push(new1);
				}
				this._childCount++;
			}

			if (this.__parent) {
				this.__parent._addChild(new1, true);
			}
		},

		/**
		 * Makes sure the cluster center is set. If not, uses the child center if it is a cluster, or the marker position.
		 * @param child L.MarkerCluster|L.Marker that will be used as cluster center if not defined yet.
		 * @private
		 */
		_setClusterCenter: function (child) {
			if (!this._cLatLng) {
				// when clustering, take position of the first point as the cluster center
				this._cLatLng = child._cLatLng || child._latlng;
			}
		},

		/**
		 * Assigns impossible bounding values so that the next extend entirely determines the new bounds.
		 * This method avoids having to trash the previous L.LatLngBounds object and to create a new one, which is much slower for this class.
		 * As long as the bounds are not extended, most other methods would probably fail, as they would with bounds initialized but not extended.
		 * @private
		 */
		_resetBounds: function () {
			var bounds = this._bounds;

			if (bounds._southWest) {
				bounds._southWest.lat = Infinity;
				bounds._southWest.lng = Infinity;
			}
			if (bounds._northEast) {
				bounds._northEast.lat = -Infinity;
				bounds._northEast.lng = -Infinity;
			}
		},

		_recalculateBounds: function () {
			var markers = this._markers,
			    childClusters = this._childClusters,
			    latSum = 0,
			    lngSum = 0,
			    totalCount = this._childCount,
			    i, child, childLatLng, childCount;

			// Case where all markers are removed from the map and we are left with just an empty _topClusterLevel.
			if (totalCount === 0) {
				return;
			}

			// Reset rather than creating a new object, for performance.
			this._resetBounds();

			// Child markers.
			for (i = 0; i < markers.length; i++) {
				childLatLng = markers[i]._latlng;

				this._bounds.extend(childLatLng);

				latSum += childLatLng.lat;
				lngSum += childLatLng.lng;
			}

			// Child clusters.
			for (i = 0; i < childClusters.length; i++) {
				child = childClusters[i];

				// Re-compute child bounds and weighted position first if necessary.
				if (child._boundsNeedUpdate) {
					child._recalculateBounds();
				}

				this._bounds.extend(child._bounds);

				childLatLng = child._wLatLng;
				childCount = child._childCount;

				latSum += childLatLng.lat * childCount;
				lngSum += childLatLng.lng * childCount;
			}

			this._latlng = this._wLatLng = new L.LatLng(latSum / totalCount, lngSum / totalCount);

			// Reset dirty flag.
			this._boundsNeedUpdate = false;
		},

		//Set our markers position as given and add it to the map
		_addToMap: function (startPos) {
			if (startPos) {
				this._backupLatlng = this._latlng;
				this.setLatLng(startPos);
			}
			this._group._featureGroup.addLayer(this);
		},

		_recursivelyAnimateChildrenIn: function (bounds, center, maxZoom) {
			this._recursively(bounds, 0, maxZoom - 1,
				function (c) {
					var markers = c._markers,
						i, m;
					for (i = markers.length - 1; i >= 0; i--) {
						m = markers[i];

						//Only do it if the icon is still on the map
						if (m._icon) {
							m._setPos(center);
							m.clusterHide();
						}
					}
				},
				function (c) {
					var childClusters = c._childClusters,
						j, cm;
					for (j = childClusters.length - 1; j >= 0; j--) {
						cm = childClusters[j];
						if (cm._icon) {
							cm._setPos(center);
							cm.clusterHide();
						}
					}
				}
			);
		},

		_recursivelyAnimateChildrenInAndAddSelfToMap: function (bounds, previousZoomLevel, newZoomLevel) {
			this._recursively(bounds, newZoomLevel, 0,
				function (c) {
					c._recursivelyAnimateChildrenIn(bounds, c._group._map.latLngToLayerPoint(c.getLatLng()).round(), previousZoomLevel);

					//TODO: depthToAnimateIn affects _isSingleParent, if there is a multizoom we may/may not be.
					//As a hack we only do a animation free zoom on a single level zoom, if someone does multiple levels then we always animate
					if (c._isSingleParent() && previousZoomLevel - 1 === newZoomLevel) {
						c.clusterShow();
						c._recursivelyRemoveChildrenFromMap(bounds, previousZoomLevel); //Immediately remove our children as we are replacing them. TODO previousBounds not bounds
					} else {
						c.clusterHide();
					}

					c._addToMap();
				}
			);
		},

		_recursivelyBecomeVisible: function (bounds, zoomLevel) {
			this._recursively(bounds, 0, zoomLevel, null, function (c) {
				c.clusterShow();
			});
		},

		_recursivelyAddChildrenToMap: function (startPos, zoomLevel, bounds) {
			this._recursively(bounds, -1, zoomLevel,
				function (c) {
					if (zoomLevel === c._zoom) {
						return;
					}

					//Add our child markers at startPos (so they can be animated out)
					for (var i = c._markers.length - 1; i >= 0; i--) {
						var nm = c._markers[i];

						if (!bounds.contains(nm._latlng)) {
							continue;
						}

						if (startPos) {
							nm._backupLatlng = nm.getLatLng();

							nm.setLatLng(startPos);
							if (nm.clusterHide) {
								nm.clusterHide();
							}
						}

						c._group._featureGroup.addLayer(nm);
					}
				},
				function (c) {
					c._addToMap(startPos);
				}
			);
		},

		_recursivelyRestoreChildPositions: function (zoomLevel) {
			//Fix positions of child markers
			for (var i = this._markers.length - 1; i >= 0; i--) {
				var nm = this._markers[i];
				if (nm._backupLatlng) {
					nm.setLatLng(nm._backupLatlng);
					delete nm._backupLatlng;
				}
			}

			if (zoomLevel - 1 === this._zoom) {
				//Reposition child clusters
				for (var j = this._childClusters.length - 1; j >= 0; j--) {
					this._childClusters[j]._restorePosition();
				}
			} else {
				for (var k = this._childClusters.length - 1; k >= 0; k--) {
					this._childClusters[k]._recursivelyRestoreChildPositions(zoomLevel);
				}
			}
		},

		_restorePosition: function () {
			if (this._backupLatlng) {
				this.setLatLng(this._backupLatlng);
				delete this._backupLatlng;
			}
		},

		//exceptBounds: If set, don't remove any markers/clusters in it
		_recursivelyRemoveChildrenFromMap: function (previousBounds, zoomLevel, exceptBounds) {
			var m, i;
			this._recursively(previousBounds, -1, zoomLevel - 1,
				function (c) {
					//Remove markers at every level
					for (i = c._markers.length - 1; i >= 0; i--) {
						m = c._markers[i];
						if (!exceptBounds || !exceptBounds.contains(m._latlng)) {
							c._group._featureGroup.removeLayer(m);
							if (m.clusterShow) {
								m.clusterShow();
							}
						}
					}
				},
				function (c) {
					//Remove child clusters at just the bottom level
					for (i = c._childClusters.length - 1; i >= 0; i--) {
						m = c._childClusters[i];
						if (!exceptBounds || !exceptBounds.contains(m._latlng)) {
							c._group._featureGroup.removeLayer(m);
							if (m.clusterShow) {
								m.clusterShow();
							}
						}
					}
				}
			);
		},

		//Run the given functions recursively to this and child clusters
		// boundsToApplyTo: a L.LatLngBounds representing the bounds of what clusters to recurse in to
		// zoomLevelToStart: zoom level to start running functions (inclusive)
		// zoomLevelToStop: zoom level to stop running functions (inclusive)
		// runAtEveryLevel: function that takes an L.MarkerCluster as an argument that should be applied on every level
		// runAtBottomLevel: function that takes an L.MarkerCluster as an argument that should be applied at only the bottom level
		_recursively: function (boundsToApplyTo, zoomLevelToStart, zoomLevelToStop, runAtEveryLevel, runAtBottomLevel) {
			var childClusters = this._childClusters,
			    zoom = this._zoom,
			    i, c;

			if (zoomLevelToStart > zoom) { //Still going down to required depth, just recurse to child clusters
				for (i = childClusters.length - 1; i >= 0; i--) {
					c = childClusters[i];
					if (boundsToApplyTo.intersects(c._bounds)) {
						c._recursively(boundsToApplyTo, zoomLevelToStart, zoomLevelToStop, runAtEveryLevel, runAtBottomLevel);
					}
				}
			} else { //In required depth

				if (runAtEveryLevel) {
					runAtEveryLevel(this);
				}
				if (runAtBottomLevel && this._zoom === zoomLevelToStop) {
					runAtBottomLevel(this);
				}

				//TODO: This loop is almost the same as above
				if (zoomLevelToStop > zoom) {
					for (i = childClusters.length - 1; i >= 0; i--) {
						c = childClusters[i];
						if (boundsToApplyTo.intersects(c._bounds)) {
							c._recursively(boundsToApplyTo, zoomLevelToStart, zoomLevelToStop, runAtEveryLevel, runAtBottomLevel);
						}
					}
				}
			}
		},

		//Returns true if we are the parent of only one cluster and that cluster is the same as us
		_isSingleParent: function () {
			//Don't need to check this._markers as the rest won't work if there are any
			return this._childClusters.length > 0 && this._childClusters[0]._childCount === this._childCount;
		}
	});



	/*
	* Extends L.Marker to include two extra methods: clusterHide and clusterShow.
	* 
	* They work as setOpacity(0) and setOpacity(1) respectively, but
	* they will remember the marker's opacity when hiding and showing it again.
	* 
	*/


	L.Marker.include({
		
		clusterHide: function () {
			this.options.opacityWhenUnclustered = this.options.opacity || 1;
			return this.setOpacity(0);
		},
		
		clusterShow: function () {
			var ret = this.setOpacity(this.options.opacity || this.options.opacityWhenUnclustered);
			delete this.options.opacityWhenUnclustered;
			return ret;
		}
		
	});





	L.DistanceGrid = function (cellSize) {
		this._cellSize = cellSize;
		this._sqCellSize = cellSize * cellSize;
		this._grid = {};
		this._objectPoint = { };
	};

	L.DistanceGrid.prototype = {

		addObject: function (obj, point) {
			var x = this._getCoord(point.x),
			    y = this._getCoord(point.y),
			    grid = this._grid,
			    row = grid[y] = grid[y] || {},
			    cell = row[x] = row[x] || [],
			    stamp = L.Util.stamp(obj);

			this._objectPoint[stamp] = point;

			cell.push(obj);
		},

		updateObject: function (obj, point) {
			this.removeObject(obj);
			this.addObject(obj, point);
		},

		//Returns true if the object was found
		removeObject: function (obj, point) {
			var x = this._getCoord(point.x),
			    y = this._getCoord(point.y),
			    grid = this._grid,
			    row = grid[y] = grid[y] || {},
			    cell = row[x] = row[x] || [],
			    i, len;

			delete this._objectPoint[L.Util.stamp(obj)];

			for (i = 0, len = cell.length; i < len; i++) {
				if (cell[i] === obj) {

					cell.splice(i, 1);

					if (len === 1) {
						delete row[x];
					}

					return true;
				}
			}

		},

		eachObject: function (fn, context) {
			var i, j, k, len, row, cell, removed,
			    grid = this._grid;

			for (i in grid) {
				row = grid[i];

				for (j in row) {
					cell = row[j];

					for (k = 0, len = cell.length; k < len; k++) {
						removed = fn.call(context, cell[k]);
						if (removed) {
							k--;
							len--;
						}
					}
				}
			}
		},

		getNearObject: function (point) {
			var x = this._getCoord(point.x),
			    y = this._getCoord(point.y),
			    i, j, k, row, cell, len, obj, dist,
			    objectPoint = this._objectPoint,
			    closestDistSq = this._sqCellSize,
			    closest = null;

			for (i = y - 1; i <= y + 1; i++) {
				row = this._grid[i];
				if (row) {

					for (j = x - 1; j <= x + 1; j++) {
						cell = row[j];
						if (cell) {

							for (k = 0, len = cell.length; k < len; k++) {
								obj = cell[k];
								dist = this._sqDist(objectPoint[L.Util.stamp(obj)], point);
								if (dist < closestDistSq) {
									closestDistSq = dist;
									closest = obj;
								}
							}
						}
					}
				}
			}
			return closest;
		},

		_getCoord: function (x) {
			return Math.floor(x / this._cellSize);
		},

		_sqDist: function (p, p2) {
			var dx = p2.x - p.x,
			    dy = p2.y - p.y;
			return dx * dx + dy * dy;
		}
	};


	/* Copyright (c) 2012 the authors listed at the following URL, and/or
	the authors of referenced articles or incorporated external code:
	http://en.literateprograms.org/Quickhull_(Javascript)?action=history&offset=20120410175256

	Permission is hereby granted, free of charge, to any person obtaining
	a copy of this software and associated documentation files (the
	"Software"), to deal in the Software without restriction, including
	without limitation the rights to use, copy, modify, merge, publish,
	distribute, sublicense, and/or sell copies of the Software, and to
	permit persons to whom the Software is furnished to do so, subject to
	the following conditions:

	The above copyright notice and this permission notice shall be
	included in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
	EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
	IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
	CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
	TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
	SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

	Retrieved from: http://en.literateprograms.org/Quickhull_(Javascript)?oldid=18434
	*/

	(function () {
		L.QuickHull = {

			/*
			 * @param {Object} cpt a point to be measured from the baseline
			 * @param {Array} bl the baseline, as represented by a two-element
			 *   array of latlng objects.
			 * @returns {Number} an approximate distance measure
			 */
			getDistant: function (cpt, bl) {
				var vY = bl[1].lat - bl[0].lat,
					vX = bl[0].lng - bl[1].lng;
				return (vX * (cpt.lat - bl[0].lat) + vY * (cpt.lng - bl[0].lng));
			},

			/*
			 * @param {Array} baseLine a two-element array of latlng objects
			 *   representing the baseline to project from
			 * @param {Array} latLngs an array of latlng objects
			 * @returns {Object} the maximum point and all new points to stay
			 *   in consideration for the hull.
			 */
			findMostDistantPointFromBaseLine: function (baseLine, latLngs) {
				var maxD = 0,
					maxPt = null,
					newPoints = [],
					i, pt, d;

				for (i = latLngs.length - 1; i >= 0; i--) {
					pt = latLngs[i];
					d = this.getDistant(pt, baseLine);

					if (d > 0) {
						newPoints.push(pt);
					} else {
						continue;
					}

					if (d > maxD) {
						maxD = d;
						maxPt = pt;
					}
				}

				return { maxPoint: maxPt, newPoints: newPoints };
			},


			/*
			 * Given a baseline, compute the convex hull of latLngs as an array
			 * of latLngs.
			 *
			 * @param {Array} latLngs
			 * @returns {Array}
			 */
			buildConvexHull: function (baseLine, latLngs) {
				var convexHullBaseLines = [],
					t = this.findMostDistantPointFromBaseLine(baseLine, latLngs);

				if (t.maxPoint) { // if there is still a point "outside" the base line
					convexHullBaseLines =
						convexHullBaseLines.concat(
							this.buildConvexHull([baseLine[0], t.maxPoint], t.newPoints)
						);
					convexHullBaseLines =
						convexHullBaseLines.concat(
							this.buildConvexHull([t.maxPoint, baseLine[1]], t.newPoints)
						);
					return convexHullBaseLines;
				} else {  // if there is no more point "outside" the base line, the current base line is part of the convex hull
					return [baseLine[0]];
				}
			},

			/*
			 * Given an array of latlngs, compute a convex hull as an array
			 * of latlngs
			 *
			 * @param {Array} latLngs
			 * @returns {Array}
			 */
			getConvexHull: function (latLngs) {
				// find first baseline
				var maxLat = false, minLat = false,
					maxLng = false, minLng = false,
					maxLatPt = null, minLatPt = null,
					maxLngPt = null, minLngPt = null,
					maxPt = null, minPt = null,
					i;

				for (i = latLngs.length - 1; i >= 0; i--) {
					var pt = latLngs[i];
					if (maxLat === false || pt.lat > maxLat) {
						maxLatPt = pt;
						maxLat = pt.lat;
					}
					if (minLat === false || pt.lat < minLat) {
						minLatPt = pt;
						minLat = pt.lat;
					}
					if (maxLng === false || pt.lng > maxLng) {
						maxLngPt = pt;
						maxLng = pt.lng;
					}
					if (minLng === false || pt.lng < minLng) {
						minLngPt = pt;
						minLng = pt.lng;
					}
				}
				
				if (minLat !== maxLat) {
					minPt = minLatPt;
					maxPt = maxLatPt;
				} else {
					minPt = minLngPt;
					maxPt = maxLngPt;
				}

				var ch = [].concat(this.buildConvexHull([minPt, maxPt], latLngs),
									this.buildConvexHull([maxPt, minPt], latLngs));
				return ch;
			}
		};
	}());

	L.MarkerCluster.include({
		getConvexHull: function () {
			var childMarkers = this.getAllChildMarkers(),
				points = [],
				p, i;

			for (i = childMarkers.length - 1; i >= 0; i--) {
				p = childMarkers[i].getLatLng();
				points.push(p);
			}

			return L.QuickHull.getConvexHull(points);
		}
	});


	//This code is 100% based on https://github.com/jawj/OverlappingMarkerSpiderfier-Leaflet
	//Huge thanks to jawj for implementing it first to make my job easy :-)

	L.MarkerCluster.include({

		_2PI: Math.PI * 2,
		_circleFootSeparation: 25, //related to circumference of circle
		_circleStartAngle: Math.PI / 6,

		_spiralFootSeparation:  28, //related to size of spiral (experiment!)
		_spiralLengthStart: 11,
		_spiralLengthFactor: 5,

		_circleSpiralSwitchover: 9, //show spiral instead of circle from this marker count upwards.
									// 0 -> always spiral; Infinity -> always circle

		spiderfy: function () {
			if (this._group._spiderfied === this || this._group._inZoomAnimation) {
				return;
			}

			var childMarkers = this.getAllChildMarkers(),
				group = this._group,
				map = group._map,
				center = map.latLngToLayerPoint(this._latlng),
				positions;

	        if (childMarkers.length > this._group.options.maxSpiderfySize) {
	            alert("Cluster has " + childMarkers.length + " points which exceeds cluster warning size of " + this._group.options.maxSpiderfySize + ". Cluster will not be expanded.");
	            return;
	        }

			this._group._unspiderfy();
			this._group._spiderfied = this;

			//TODO Maybe: childMarkers order by distance to center

			if (childMarkers.length >= this._circleSpiralSwitchover) {
				positions = this._generatePointsSpiral(childMarkers.length, center);
			} else {
				center.y += 10; // Otherwise circles look wrong => hack for standard blue icon, renders differently for other icons.
				positions = this._generatePointsCircle(childMarkers.length, center);
			}

			this._animationSpiderfy(childMarkers, positions);
		},

		unspiderfy: function (zoomDetails) {
			/// <param Name="zoomDetails">Argument from zoomanim if being called in a zoom animation or null otherwise</param>
			if (this._group._inZoomAnimation) {
				return;
			}
			this._animationUnspiderfy(zoomDetails);

			this._group._spiderfied = null;
		},

		_generatePointsCircle: function (count, centerPt) {
			var circumference = this._group.options.spiderfyDistanceMultiplier * this._circleFootSeparation * (2 + count),
				legLength = circumference / this._2PI,  //radius from circumference
				angleStep = this._2PI / count,
				res = [],
				i, angle;

			res.length = count;

			for (i = count - 1; i >= 0; i--) {
				angle = this._circleStartAngle + i * angleStep;
				res[i] = new L.Point(centerPt.x + legLength * Math.cos(angle), centerPt.y + legLength * Math.sin(angle))._round();
			}

			return res;
		},

		_generatePointsSpiral: function (count, centerPt) {
			var spiderfyDistanceMultiplier = this._group.options.spiderfyDistanceMultiplier,
				legLength = spiderfyDistanceMultiplier * this._spiralLengthStart,
				separation = spiderfyDistanceMultiplier * this._spiralFootSeparation,
				lengthFactor = spiderfyDistanceMultiplier * this._spiralLengthFactor * this._2PI,
				angle = 0,
				res = [],
				i;

			res.length = count;

			// Higher index, closer position to cluster center.
			for (i = count - 1; i >= 0; i--) {
				angle += separation / legLength + i * 0.0005;
				res[i] = new L.Point(centerPt.x + legLength * Math.cos(angle), centerPt.y + legLength * Math.sin(angle))._round();
				legLength += lengthFactor / angle;
			}
			return res;
		},

		_noanimationUnspiderfy: function () {
			var group = this._group,
				map = group._map,
				fg = group._featureGroup,
				childMarkers = this.getAllChildMarkers(),
				m, i;

			group._ignoreMove = true;

			this.setOpacity(1);
			for (i = childMarkers.length - 1; i >= 0; i--) {
				m = childMarkers[i];

				fg.removeLayer(m);

				if (m._preSpiderfyLatlng) {
					m.setLatLng(m._preSpiderfyLatlng);
					delete m._preSpiderfyLatlng;
				}
				if (m.setZIndexOffset) {
					m.setZIndexOffset(0);
				}

				if (m._spiderLeg) {
					map.removeLayer(m._spiderLeg);
					delete m._spiderLeg;
				}
			}

			group.fire('unspiderfied', {
				cluster: this,
				markers: childMarkers
			});
			group._ignoreMove = false;
			group._spiderfied = null;
		}
	});

	//Non Animated versions of everything
	L.MarkerClusterNonAnimated = L.MarkerCluster.extend({
		_animationSpiderfy: function (childMarkers, positions) {
			var group = this._group,
				map = group._map,
				fg = group._featureGroup,
				legOptions = this._group.options.spiderLegPolylineOptions,
				i, m, leg, newPos;

			group._ignoreMove = true;

			// Traverse in ascending order to make sure that inner circleMarkers are on top of further legs. Normal markers are re-ordered by newPosition.
			// The reverse order trick no longer improves performance on modern browsers.
			for (i = 0; i < childMarkers.length; i++) {
				newPos = map.layerPointToLatLng(positions[i]);
				m = childMarkers[i];

				// Add the leg before the marker, so that in case the latter is a circleMarker, the leg is behind it.
				leg = new L.Polyline([this._latlng, newPos], legOptions);
				map.addLayer(leg);
				m._spiderLeg = leg;

				// Now add the marker.
				m._preSpiderfyLatlng = m._latlng;
				m.setLatLng(newPos);
				if (m.setZIndexOffset) {
					m.setZIndexOffset(1000000); //Make these appear on top of EVERYTHING
				}

				fg.addLayer(m);
			}
			this.setOpacity(0.3);

			group._ignoreMove = false;
			group.fire('spiderfied', {
				cluster: this,
				markers: childMarkers
			});
		},

		_animationUnspiderfy: function () {
			this._noanimationUnspiderfy();
		}
	});

	//Animated versions here
	L.MarkerCluster.include({

		_animationSpiderfy: function (childMarkers, positions) {
			var me = this,
				group = this._group,
				map = group._map,
				fg = group._featureGroup,
				thisLayerLatLng = this._latlng,
				thisLayerPos = map.latLngToLayerPoint(thisLayerLatLng),
				svg = L.Path.SVG,
				legOptions = L.extend({}, this._group.options.spiderLegPolylineOptions), // Copy the options so that we can modify them for animation.
				finalLegOpacity = legOptions.opacity,
				i, m, leg, legPath, legLength, newPos;

			if (finalLegOpacity === undefined) {
				finalLegOpacity = L.MarkerClusterGroup.prototype.options.spiderLegPolylineOptions.opacity;
			}

			if (svg) {
				// If the initial opacity of the spider leg is not 0 then it appears before the animation starts.
				legOptions.opacity = 0;

				// Add the class for CSS transitions.
				legOptions.className = (legOptions.className || '') + ' leaflet-cluster-spider-leg';
			} else {
				// Make sure we have a defined opacity.
				legOptions.opacity = finalLegOpacity;
			}

			group._ignoreMove = true;

			// Add markers and spider legs to map, hidden at our center point.
			// Traverse in ascending order to make sure that inner circleMarkers are on top of further legs. Normal markers are re-ordered by newPosition.
			// The reverse order trick no longer improves performance on modern browsers.
			for (i = 0; i < childMarkers.length; i++) {
				m = childMarkers[i];

				newPos = map.layerPointToLatLng(positions[i]);

				// Add the leg before the marker, so that in case the latter is a circleMarker, the leg is behind it.
				leg = new L.Polyline([thisLayerLatLng, newPos], legOptions);
				map.addLayer(leg);
				m._spiderLeg = leg;

				// Explanations: https://jakearchibald.com/2013/animated-line-drawing-svg/
				// In our case the transition property is declared in the CSS file.
				if (svg) {
					legPath = leg._path;
					legLength = legPath.getTotalLength() + 0.1; // Need a small extra length to avoid remaining dot in Firefox.
					legPath.style.strokeDasharray = legLength; // Just 1 length is enough, it will be duplicated.
					legPath.style.strokeDashoffset = legLength;
				}

				// If it is a marker, add it now and we'll animate it out
				if (m.setZIndexOffset) {
					m.setZIndexOffset(1000000); // Make normal markers appear on top of EVERYTHING
				}
				if (m.clusterHide) {
					m.clusterHide();
				}
				
				// Vectors just get immediately added
				fg.addLayer(m);

				if (m._setPos) {
					m._setPos(thisLayerPos);
				}
			}

			group._forceLayout();
			group._animationStart();

			// Reveal markers and spider legs.
			for (i = childMarkers.length - 1; i >= 0; i--) {
				newPos = map.layerPointToLatLng(positions[i]);
				m = childMarkers[i];

				//Move marker to new position
				m._preSpiderfyLatlng = m._latlng;
				m.setLatLng(newPos);
				
				if (m.clusterShow) {
					m.clusterShow();
				}

				// Animate leg (animation is actually delegated to CSS transition).
				if (svg) {
					leg = m._spiderLeg;
					legPath = leg._path;
					legPath.style.strokeDashoffset = 0;
					//legPath.style.strokeOpacity = finalLegOpacity;
					leg.setStyle({opacity: finalLegOpacity});
				}
			}
			this.setOpacity(0.3);

			group._ignoreMove = false;

			setTimeout(function () {
				group._animationEnd();
				group.fire('spiderfied', {
					cluster: me,
					markers: childMarkers
				});
			}, 200);
		},

		_animationUnspiderfy: function (zoomDetails) {
			var me = this,
				group = this._group,
				map = group._map,
				fg = group._featureGroup,
				thisLayerPos = zoomDetails ? map._latLngToNewLayerPoint(this._latlng, zoomDetails.zoom, zoomDetails.center) : map.latLngToLayerPoint(this._latlng),
				childMarkers = this.getAllChildMarkers(),
				svg = L.Path.SVG,
				m, i, leg, legPath, legLength, nonAnimatable;

			group._ignoreMove = true;
			group._animationStart();

			//Make us visible and bring the child markers back in
			this.setOpacity(1);
			for (i = childMarkers.length - 1; i >= 0; i--) {
				m = childMarkers[i];

				//Marker was added to us after we were spiderfied
				if (!m._preSpiderfyLatlng) {
					continue;
				}

				//Fix up the location to the real one
				m.setLatLng(m._preSpiderfyLatlng);
				delete m._preSpiderfyLatlng;

				//Hack override the location to be our center
				nonAnimatable = true;
				if (m._setPos) {
					m._setPos(thisLayerPos);
					nonAnimatable = false;
				}
				if (m.clusterHide) {
					m.clusterHide();
					nonAnimatable = false;
				}
				if (nonAnimatable) {
					fg.removeLayer(m);
				}

				// Animate the spider leg back in (animation is actually delegated to CSS transition).
				if (svg) {
					leg = m._spiderLeg;
					legPath = leg._path;
					legLength = legPath.getTotalLength() + 0.1;
					legPath.style.strokeDashoffset = legLength;
					leg.setStyle({opacity: 0});
				}
			}

			group._ignoreMove = false;

			setTimeout(function () {
				//If we have only <= one child left then that marker will be shown on the map so don't remove it!
				var stillThereChildCount = 0;
				for (i = childMarkers.length - 1; i >= 0; i--) {
					m = childMarkers[i];
					if (m._spiderLeg) {
						stillThereChildCount++;
					}
				}


				for (i = childMarkers.length - 1; i >= 0; i--) {
					m = childMarkers[i];

					if (!m._spiderLeg) { //Has already been unspiderfied
						continue;
					}

					if (m.clusterShow) {
						m.clusterShow();
					}
					if (m.setZIndexOffset) {
						m.setZIndexOffset(0);
					}

					if (stillThereChildCount > 1) {
						fg.removeLayer(m);
					}

					map.removeLayer(m._spiderLeg);
					delete m._spiderLeg;
				}
				group._animationEnd();
				group.fire('unspiderfied', {
					cluster: me,
					markers: childMarkers
				});
			}, 200);
		}
	});


	L.MarkerClusterGroup.include({
		//The MarkerCluster currently spiderfied (if any)
		_spiderfied: null,

		unspiderfy: function () {
			this._unspiderfy.apply(this, arguments);
		},

		_spiderfierOnAdd: function () {
			this._map.on('click', this._unspiderfyWrapper, this);

			if (this._map.options.zoomAnimation) {
				this._map.on('zoomstart', this._unspiderfyZoomStart, this);
			}
			//Browsers without zoomAnimation or a big zoom don't fire zoomstart
			this._map.on('zoomend', this._noanimationUnspiderfy, this);

			if (!L.Browser.touch) {
				this._map.getRenderer(this);
				//Needs to happen in the pageload, not after, or animations don't work in webkit
				//  http://stackoverflow.com/questions/8455200/svg-animate-with-dynamically-added-elements
				//Disable on touch browsers as the animation messes up on a touch zoom and isn't very noticable
			}
		},

		_spiderfierOnRemove: function () {
			this._map.off('click', this._unspiderfyWrapper, this);
			this._map.off('zoomstart', this._unspiderfyZoomStart, this);
			this._map.off('zoomanim', this._unspiderfyZoomAnim, this);
			this._map.off('zoomend', this._noanimationUnspiderfy, this);

			//Ensure that markers are back where they should be
			// Use no animation to avoid a sticky leaflet-cluster-anim class on mapPane
			this._noanimationUnspiderfy();
		},

		//On zoom start we add a zoomanim handler so that we are guaranteed to be last (after markers are animated)
		//This means we can define the animation they do rather than Markers doing an animation to their actual location
		_unspiderfyZoomStart: function () {
			if (!this._map) { //May have been removed from the map by a zoomEnd handler
				return;
			}

			this._map.on('zoomanim', this._unspiderfyZoomAnim, this);
		},

		_unspiderfyZoomAnim: function (zoomDetails) {
			//Wait until the first zoomanim after the user has finished touch-zooming before running the animation
			if (L.DomUtil.hasClass(this._map._mapPane, 'leaflet-touching')) {
				return;
			}

			this._map.off('zoomanim', this._unspiderfyZoomAnim, this);
			this._unspiderfy(zoomDetails);
		},

		_unspiderfyWrapper: function () {
			/// <summary>_unspiderfy but passes no arguments</summary>
			this._unspiderfy();
		},

		_unspiderfy: function (zoomDetails) {
			if (this._spiderfied) {
				this._spiderfied.unspiderfy(zoomDetails);
			}
		},

		_noanimationUnspiderfy: function () {
			if (this._spiderfied) {
				this._spiderfied._noanimationUnspiderfy();
			}
		},

		//If the given layer is currently being spiderfied then we unspiderfy it so it isn't on the map anymore etc
		_unspiderfyLayer: function (layer) {
			if (layer._spiderLeg) {
				this._featureGroup.removeLayer(layer);

				if (layer.clusterShow) {
					layer.clusterShow();
				}
					//Position will be fixed up immediately in _animationUnspiderfy
				if (layer.setZIndexOffset) {
					layer.setZIndexOffset(0);
				}

				this._map.removeLayer(layer._spiderLeg);
				delete layer._spiderLeg;
			}
		}
	});


	/**
	 * Adds 1 public method to MCG and 1 to L.Marker to facilitate changing
	 * markers' icon options and refreshing their icon and their parent clusters
	 * accordingly (case where their iconCreateFunction uses data of childMarkers
	 * to make up the cluster icon).
	 */


	L.MarkerClusterGroup.include({
		/**
		 * Updates the icon of all clusters which are parents of the given marker(s).
		 * In singleMarkerMode, also updates the given marker(s) icon.
		 * @param layers L.MarkerClusterGroup|L.LayerGroup|Array(L.Marker)|Map(L.Marker)|
		 * L.MarkerCluster|L.Marker (optional) list of markers (or single marker) whose parent
		 * clusters need to be updated. If not provided, retrieves all child markers of this.
		 * @returns {L.MarkerClusterGroup}
		 */
		refreshClusters: function (layers) {
			if (!layers) {
				layers = this._topClusterLevel.getAllChildMarkers();
			} else if (layers instanceof L.MarkerClusterGroup) {
				layers = layers._topClusterLevel.getAllChildMarkers();
			} else if (layers instanceof L.LayerGroup) {
				layers = layers._layers;
			} else if (layers instanceof L.MarkerCluster) {
				layers = layers.getAllChildMarkers();
			} else if (layers instanceof L.Marker) {
				layers = [layers];
			} // else: must be an Array(L.Marker)|Map(L.Marker)
			this._flagParentsIconsNeedUpdate(layers);
			this._refreshClustersIcons();

			// In case of singleMarkerMode, also re-draw the markers.
			if (this.options.singleMarkerMode) {
				this._refreshSingleMarkerModeMarkers(layers);
			}

			return this;
		},

		/**
		 * Simply flags all parent clusters of the given markers as having a "dirty" icon.
		 * @param layers Array(L.Marker)|Map(L.Marker) list of markers.
		 * @private
		 */
		_flagParentsIconsNeedUpdate: function (layers) {
			var id, parent;

			// Assumes layers is an Array or an Object whose prototype is non-enumerable.
			for (id in layers) {
				// Flag parent clusters' icon as "dirty", all the way up.
				// Dumb process that flags multiple times upper parents, but still
				// much more efficient than trying to be smart and make short lists,
				// at least in the case of a hierarchy following a power law:
				// http://jsperf.com/flag-nodes-in-power-hierarchy/2
				parent = layers[id].__parent;
				while (parent) {
					parent._iconNeedsUpdate = true;
					parent = parent.__parent;
				}
			}
		},

		/**
		 * Refreshes the icon of all "dirty" visible clusters.
		 * Non-visible "dirty" clusters will be updated when they are added to the map.
		 * @private
		 */
		_refreshClustersIcons: function () {
			this._featureGroup.eachLayer(function (c) {
				if (c instanceof L.MarkerCluster && c._iconNeedsUpdate) {
					c._updateIcon();
				}
			});
		},

		/**
		 * Re-draws the icon of the supplied markers.
		 * To be used in singleMarkerMode only.
		 * @param layers Array(L.Marker)|Map(L.Marker) list of markers.
		 * @private
		 */
		_refreshSingleMarkerModeMarkers: function (layers) {
			var id, layer;

			for (id in layers) {
				layer = layers[id];

				// Make sure we do not override markers that do not belong to THIS group.
				if (this.hasLayer(layer)) {
					// Need to re-create the icon first, then re-draw the marker.
					layer.setIcon(this._overrideMarkerIcon(layer));
				}
			}
		}
	});

	L.Marker.include({
		/**
		 * Updates the given options in the marker's icon and refreshes the marker.
		 * @param options map object of icon options.
		 * @param directlyRefreshClusters boolean (optional) true to trigger
		 * MCG.refreshClustersOf() right away with this single marker.
		 * @returns {L.Marker}
		 */
		refreshIconOptions: function (options, directlyRefreshClusters) {
			var icon = this.options.icon;

			L.setOptions(icon, options);

			this.setIcon(icon);

			// Shortcut to refresh the associated MCG clusters right away.
			// To be used when refreshing a single marker.
			// Otherwise, better use MCG.refreshClusters() once at the end with
			// the list of modified markers.
			if (directlyRefreshClusters && this.__parent) {
				this.__parent._group.refreshClusters(this);
			}

			return this;
		}
	});


	}(window, document));



/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	/**
	 * Leaflet.FeatureGroup.SubGroup 1.0.0 (44a6572)
	 * Creates a Feature Group that adds its child layers into a parent group when added to a map (e.g. through L.Control.Layers).
	 * (c) 2015-2016 Boris Seang
	 * BSD 2-Clause "Simplified" License
	 */
	(function (root, factory) {
	    if (typeof define === "function" && define.amd) {
	        define(["leaflet"], function (L) {
	            return (root.L.FeatureGroup.SubGroup = factory(L));
	        });
	    } else if (typeof module === "object" && module.exports) {
	        module.exports = factory(__webpack_require__(3));
	    } else {
	        root.L.FeatureGroup.SubGroup = factory(root.L);
	    }
	}(this, function (L) {

	var FG = L.FeatureGroup,
	    FGproto = FG.prototype,
	    LG = L.LayerGroup;


	var SubGroup = FG.extend({

	    statics: {
	        version: "1.0.0"
	    },

	    /**
	     * Instantiates a SubGroup.
	     * @param parentGroup (L.LayerGroup) (optional)
	     * @param layersArray (L.Layer[]) (optional)
	     */
	    initialize: function (parentGroup, layersArray) {
	        FGproto.initialize.call(this, layersArray);

	        this.setParentGroup(parentGroup);
	    },

	    /**
	     * Changes the parent group into which child markers are added to /
	     * removed from.
	     * @param parentGroup (L.LayerGroup)
	     * @returns {SubGroup} this
	     */
	    setParentGroup: function (parentGroup) {
	        var pgInstanceOfLG = parentGroup instanceof LG;

	        this._parentGroup = parentGroup;

	        // onAdd
	        this.onAdd =
	            pgInstanceOfLG ?
	                (
	                    typeof parentGroup.addLayers === "function" ?
	                        this._onAddToGroupBatch :
	                        this._onAddToGroup
	                ) :
	                this._onAddToMap;

	        // onRemove
	        this.onRemove =
	            pgInstanceOfLG ?
	                (
	                    typeof parentGroup.removeLayers === "function" ?
	                        this._onRemoveFromGroupBatch :
	                        this._onRemoveFromGroup
	                ) :
	                this._onRemoveFromMap;

	        // addLayer
	        this.addLayer = pgInstanceOfLG ?
	            this._addLayerToGroup :
	            this._addLayerToMap;

	        // removeLayer
	        this.removeLayer = pgInstanceOfLG ?
	            this._removeLayerFromGroup :
	            this._removeLayerFromMap;

	        return this;
	    },

	    /**
	     * Removes the current sub-group from map before changing the parent
	     * group. Re-adds the sub-group to map if it was before changing.
	     * @param parentGroup (L.LayerGroup)
	     * @returns {SubGroup} this
	     */
	    setParentGroupSafe: function (parentGroup) {
	        var map = this._map;

	        if (map) {
	            map.removeLayer(this);
	        }

	        this.setParentGroup(parentGroup);

	        if (map) {
	            map.addLayer(this);
	        }

	        return this;
	    },

	    /**
	     * Returns the current parent group.
	     * @returns {*}
	     */
	    getParentGroup: function () {
	        return this._parentGroup;
	    },


	    // For parent groups with batch methods (addLayers and removeLayers)
	    // like MarkerCluster.
	    _onAddToGroupBatch: function (map) {
	        var layersArray = this.getLayers();

	        this._map = map;
	        this._parentGroup.addLayers(layersArray);
	    },

	    _onRemoveFromGroupBatch: function () {
	        var layersArray = this.getLayers();

	        this._parentGroup.removeLayers(layersArray);
	        this._map = null;
	    },


	    // For other parent layer groups.
	    _onAddToGroup: function (map) {
	        var parentGroup = this._parentGroup;

	        this._map = map;
	        this.eachLayer(parentGroup.addLayer, parentGroup);
	    },

	    _onRemoveFromGroup: function () {
	        var parentGroup = this._parentGroup;

	        this.eachLayer(parentGroup.removeLayer, parentGroup);
	        this._map = null;
	    },


	    // Defaults to standard FeatureGroup behaviour when parent group is not
	    // specified or is not a type of LayerGroup.
	    _onAddToMap: FGproto.onAdd,
	    _onRemoveFromMap: FGproto.onRemove,


	    _addLayerToGroup: function (layer) {
	        if (this.hasLayer(layer)) {
	            return this;
	        }

	        layer.addEventParent(this);

	        var id = this.getLayerId(layer);

	        this._layers[id] = layer;

	        if (this._map) {
	            // Add to parent group instead of directly to map.
	            this._parentGroup.addLayer(layer);
	        }

	        return this.fire("layeradd", {layer: layer});
	    },

	    _removeLayerFromGroup: function (layer) {
	        if (!this.hasLayer(layer)) {
	            return this;
	        }
	        if (layer in this._layers) {
	            layer = this._layers[layer];
	        }

	                    layer.removeEventParent(this);

	        var id = layer in this._layers ? layer : this.getLayerId(layer);

	        if (this._map && this._layers[id]) {
	            // Remove from parent group instead of directly from map.
	            this._parentGroup.removeLayer(id);
	        }

	        delete this._layers[id];

	        return this.fire("layerremove", {layer: layer});
	    },

	    // Defaults to standard FeatureGroup behaviour when parent group is not
	    // specified or is not a type of LayerGroup.
	    _addLayerToMap: FGproto.addLayer,
	    _removeLayerFromMap: FGproto.removeLayer

	});



	// Supply with a factory for consistency with Leaflet.
	L.featureGroup.subGroup = function (parentGroup, options) {
	    //return new FG.SubGroup(parentGroup, options);
	    return new SubGroup(parentGroup, options);
	};



	    return SubGroup; // Must be the same identifier as in src!

	}));



/***/ }
/******/ ])});;