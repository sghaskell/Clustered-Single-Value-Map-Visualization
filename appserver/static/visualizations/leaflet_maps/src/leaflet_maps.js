define([
            'jquery',
            'underscore',
            'leaflet',
            'vizapi/SplunkVisualizationBase',
            'vizapi/SplunkVisualizationUtils',
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
        'http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png': '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
    }
        
    return SplunkVisualizationBase.extend({
        maxResults: 0,
        icons: [],
        tileLayer: null,

        initialize: function() {
            SplunkVisualizationBase.prototype.initialize.apply(this, arguments);
            this.$el = $(this.el);
            var icon = L.icon({
                    iconUrl: '/static/app/leaflet_maps_app/visualizations/leaflet_maps/contrib/images/marker-icon.png',
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                    popupAnchor: [0, -45],
                    shadowUrl: '/static/app/leaflet_maps_app/visualizations/leaflet_maps/contrib/images/marker-shadow.png',
                    shadowSize: [41, 41],
                    shadowAnchor: [12, 41],
                });
            this.icons.push(icon);
            this.isInitializedDom = false;
        },
  
        // Search data params
        getInitialDataParams: function() {
            return ({
                outputMode: SplunkVisualizationBase.ROW_MAJOR_OUTPUT_MODE,
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
            var dataRows = data.rows;

            // check for data
            if (!dataRows || dataRows.length === 0 || dataRows[0].length === 0) {
                return this;
            }

            // get configs
            var cluster     = config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.cluster'] || "true",
                animate     = config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.animate'] || "true",
                singleMarkerMode = config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.singleMarkerMode'] || "false",
                maxClusterRadius = parseInt(config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.maxClusterRadius']) || 80,
                mapTile     = SplunkVisualizationUtils.makeSafeUrl(config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.mapTile']) || 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                mapCenterZoom = parseInt(config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.mapCenterZoom']) || 6,
                mapCenterLat = parseFloat(config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.mapCenterLat']) || 39.50,
                mapCenterLon = parseFloat(config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.mapCenterLon']) || -98.35,
                minZoom     = parseInt(config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.minZoom']) || 1,
                maxZoom     = parseInt(config['display.visualizations.custom.leaflet_maps_app.leaflet_maps.maxZoom']) || 19

            if (!this.isInitializedDom) {
            	var map = this.map = L.map(this.el).setView([mapCenterLat, mapCenterLon], mapCenterZoom);
            	$(this.el).height('100%').width('100%');
				this.tileLayer = L.tileLayer(mapTile, {
                    attribution: ATTRIBUTIONS[mapTile],
                    minZoom: minZoom,
                    maxZoom: maxZoom
				});
                this.map.addLayer(this.tileLayer);   


	            this.layerGroup = new L.LayerGroup().addTo(map);
                this.markers = new L.MarkerClusterGroup({ 
                    chunkedLoading: true,
                    maxClusterRadius: maxClusterRadius,
                    singleMarkerMode: (singleMarkerMode === 'true'),
                    animate: (animate === 'true')
                });
                this.markerList = [];
                this.chunk = 50000;
                this.offset = 0;
				this.isInitializedDom = true;         
                this.clearMap = false;
            } 

            // Reset Tile If Changed
            if(this.tileLayer._url != mapTile) {
                this.tileLayer.setUrl(mapTile);
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
                if (cluster === 'true') {
                    var marker = L.marker([userData[0], userData[1]], {icon: this.icons[0], title: "<b>"+userData[2]+"</b>"});
                    marker.bindPopup(userData[2]);
                    this.markerList.push(marker);
                } else {
                    L.marker([userData[0], userData[1]], {icon: this.icons[0], title: "<b>"+userData[2]+"</b>"}).addTo(layerGroup).bindPopup(userData[0]);
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
