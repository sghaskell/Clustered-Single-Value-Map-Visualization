#Credits
### Included Open Source Software
##### [Leaflet Maps](http://leafletjs.com/)
##### [Leaflet Markercluster Plugin](https://github.com/Leaflet/Leaflet.markercluster)
##### [Leaflet Awesome Markers Plugin](https://www.npmjs.com/package/drmonty-leaflet-awesome-markers)
##### [Leaflet.FeatureGroup.SubGroup](https://github.com/ghybs/Leaflet.FeatureGroup.SubGroup)
##### [togeojson](https://github.com/mapbox/togeojson)
##### [JSZip](https://stuk.github.io/jszip/)
##### [JSZipUtils](http://stuk.github.io/jszip-utils/)
##### [Jquery](https://jquery.com/)
##### [Underscore.js](http://underscorejs.org/)
##### [Webpack](https://webpack.github.io/)

Big thanks to [Damien Dallimore](https://splunkbase.splunk.com/apps/#/page/1/search/damien%2520dallimore/order/relevance) and **Andrew Stein** for all the feature requests and extensive testing.

# Compatibility
This app only works with **Splunk 6.4** as it relies on the new [Custom Visualization API](http://docs.splunk.com/Documentation/Splunk/latest/AdvancedDev/CustomVizDevOverview).

# Usage
### Fields must be named exactly as labled here. The app is keyed off of field names and not field order.
`base_search | table latitude, longitude [ description | title | icon | markerColor | iconColor | prefix | extraClasses ]`

# Required Fields
**latitude** - Latitude Coordinates
**longitude** - Longitude Coordinates
# Optional Fields
**descirption** - Desciption that is displayed in a pop-up when then marker is clicked on the map. You can get creative with this field. Combine a bunch of other fields or lookups using eval to make the description full of detail. **This field supports HTML**.
**layerDescription** - Description that is added next to the icon in the layer control legend. **this field supports HTML**

# Style Markers And Icons Dynamically Through SPL
### Feature Description
Version 1.1 introduces new features to dynamically style map markers and add icons via SPL. Create fields using [eval](http://docs.splunk.com/Documentation/Splunk/6.4.0/SearchReference/CommonEvalFunctions) to define colors for the marker or use an icon from [Font Awesome](http://fortawesome.github.io/Font-Awesome/icons/) or [ionicons](http://ionicons.com/). If you find the color set of icons too limiting, feel free to override the map marker icon with a map icon from Font Awesome and style it with any hex color or RGB value.
### Available Fields and Values
**title** - Icon mouse hover over description.
**icon** - Icon displayed in map marker - Any icon from [Font Awesome](http://fortawesome.github.io/Font-Awesome/icons/) or [ionicons](http://ionicons.com/). **Default** circle
**markerColor** - Color of map marker - red, darkred, lightred, orange, beige, green, darkgreen, lightgreen, blue, darkblue, lightblue, purple, darkpurple, pink, cadetblue, white, gray, lightgray, black. **Default** blue
**iconColor** - Color of icon - Any [CSS color name](https://www.vogatek.com/html-tutorials/cssref/css_colornames.asp.html), [Hex or RGB value](http://www.w3schools.com/colors/colors_picker.asp). **Default** white.
**prefix** - 'fa' for Font Awesome or 'ion' for ionicons. **Default** 'fa'
**extraClasses** - Any extra CSS classes you wish to add for styling. Here are some [additional classes](http://fortawesome.github.io/Font-Awesome/examples/) you can use with Font Awesome to change the styling.

# Layer Controls
Version 1.3.6 introduces a few feature that groups marker/icon styles into their own layer. A layer control widget (enabled by default, but optionally hidden) is presented in the upper right hand corner that displays a legend for each icon class with a checkbox to toggle visbility of the markers on the map. This control works for both clustered and single value visualizations. Use the optional **layerDescription** field to add description text next to each icon in the layer control legend.

# Overlays
Version 1.3.7 introduces a new feature that allows you to add custom overlays to the map. The first release implements a KML or KMZ overlay feature. If you have existing KML/KMZ files that define features (polyline, polygons, whatever) you can now leverage them to overlay these features on the map.

#### Usage

##### KML/KMZ Overlay
Copy any KML or KMZ files into the following directory

```$SPLUNK_HOME/etc/apps/leaflet_maps_app/appserver/static/visualizations/leaflet_maps/contrib/kml```

If you use a deployer (search head clustering) or a deployment server to manage your search heads, unarchive the app and place your KML files into the above directory and then re-compress the app for distribution. 

Click 'Format' and selct the 'Overlays' tab. Enter a comma separated list of filenames that you uploaded to the above directory.

```file1.kml,file2.kmz```

The files will be asynchronously loaded when the map is rendered.

# Search Examples
### Basic plot of latitude and longitude
`index=chicago_crime | fillnull | table latitude, longitude`

### Plot with latitude, longitude and description
`index=chicago_crime | fillnull | eval description = "<b>".description."</b>" | table latitude, longitude, description`

### Plot with custom marker color and icons
`index=chicago_crime | fillnull | eval description = "<b>".description."</b>" | eval markerColor = case(like(description, "%HARASSMENT BY TELEPHONE%"), "red", like(description, "%RECKLESS CONDUCT%"), "green", 1=1, "blue"), icon=case(like(description, "%HARASSMENT BY TELEPHONE%"), "exclamation", like(description, "%RECKLESS CONDUCT%"), "check-circle", 1=1, "circle") | table latitude, longitude, description, markerColor, icon`

### Plot overriding custom marker with map icons from Font Awesome
`index=chicago_crime | fillnull | eval description = "<b>".description."</b>" | eval markerColor = case(like(description, "%HARASSMENT BY TELEPHONE%"), "red", like(description, "%RECKLESS CONDUCT%"), "green", 1=1, "blue"), icon=case(like(description, "%HARASSMENT BY TELEPHONE%"), "map-marker", like(description, "%RECKLESS CONDUCT%"), "map-pin", 1=1, "circle"), iconColor=case(like(description, "%HARASSMENT BY TELEPHONE%"), "#374D13", like(description, "%RECKLESS CONDUCT%"), "rgb(0,255,255)", 1=1, "white") | table latitude, longitude, description, markerColor, icon, iconColor` 

# Formatting Options
### Map
###### Map Tile
Select one of six available map tiles
###### Map Tile Override
Use your own map tile URL and override defaults. Example: http://a.tiles.wmflabs.org/hikebike/{z}/{x}/{y}.png. Find more tiles [here](http://wiki.openstreetmap.org/wiki/Tiles)
###### Map Attribution Override
Use your own attribution. - **Requires browser Refresh**
###### Scroll Wheel Zoom
Enable or disable scroll wheel zoom.
###### Full Screen Mode
Enable or disable full screen mode. Map takes up all available space in browser and adjust to resize. - **Requires browser Refresh**
###### Default Height
Initial Height Of Map (Default: 600)
###### Map Zoom
Initial Zoom for map (Default: 6)
###### Center Lat
Initial Center Latitiude (Default: 39.50)
###### Center Lon
Initial Center Longitude (Default: -98.35)
###### Min Zoom
Minimum zoom for tile layer. Does not affect map zoom. (Default: 1)
###### Max Zoom
Maximum zoom for tile layer. Does not affect map zoom. (Default: 19)

### Clustering
###### Enable Clustering
Disable clustering and plot all markers. WARNING - This comes at a significant performance penalty for large datasets. - **Requires browser Refresh**
###### Show All Popups
Display all popups on page load. Only works with clustering disabled. - **Requires browser Refresh**
###### Allow Multiple Popups
Allow multiple popups to dispaly on screen without closing previous. Will disappear at higher zoom levels with clustering enabled. Enabled by default when showing all popups. - **Requires browser Refresh**
###### Animate
Animate cluster separation on zoom - **Requires browser Refresh**
###### Single Marker Mode 
Re-style single marker icon to marker cluster style (round) - **Requires browser Refresh**
###### Max Cluster Radius
A cluster will cover at most this many pixels from its center (Default: 80) - **Requires browser Refresh**
###### Cluster Warning Size
Display an alert warning that the cluster exceeds threshold at max-zoom and do not show underlying markers. Browser may hang and die if a single point exceeds a very large number.(Default: 100) - **Requires browser refresh**
###### Distance Multiplier
Increase to increase the distance away that markers appear from the center when expanded at max zoom. (Default: 1) - **Requires browser refresh**

### Cluster Colors
#### Cluster color changes require browser refresh
###### Range One Background
(Default: #B5E28C)
###### Range One Foreground
(Default: #6ECC39)
###### Range two thereshold
Number at which cluster group two starts
###### Range Two Background
(Default: #F1D357)
###### Range Two Foreground
(Default: #F0C20C)
###### Range three threshold
Number at which cluster group three starts
###### Range Three Background
(Default: #FD9C73)
###### Range Three Foreground
(Default: #F18017)
