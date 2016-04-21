# Compatibility
This app only works with **Splunk 6.4** as it relies on the new [Custom Visualization API](http://docs.splunk.com/Documentation/Splunk/latest/AdvancedDev/CustomVizDevOverview).

# Usage
`base_search | table latitude, longitude [ description | title | icon | markerColor | iconColor | prefix | extraClasses ]`

# Required Fields
**latitude** - Latitude Coordinates
**longitude** - Longitude Coordinates
# Optional Fields
**descirption** - Desciption that is displayed in a pop-up when then marker is clicked on the map. You can get creative with this field. Combine a bunch of other fields or lookups using eval to make the description full of detail. **This field supports HTML**.

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

### Tiles
###### Map Tile
Select one of six available map tiles
###### Map Tile Override
Use your own map tile URL and override defaults. Example: http://a.tiles.wmflabs.org/hikebike/{z}/{x}/{y}.png. Find more tiles [here](http://wiki.openstreetmap.org/wiki/Tiles)
###### Map Attribution Override
Use your own attribution. - **Requires browser Refresh**
###### Scroll Wheel Zoom
Enable or disable scroll wheel zoom. - **Requires browser Refresh**
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
