# React-Native-Education-Path-App

**Introduction:
**
The provided code presents a React Native application designed to assist in locating educational institutions within a specified area. It incorporates features such as mapping, marker display, and user input for searching specific locations.

**Overview:
**
The application utilizes React Native along with several external libraries like react-native-maps and expo-brightness. It displays a scrollable view containing a map interface, input field for specifying the location title, and buttons for actions such as displaying locations, resetting markers, and showing specific markers.

**Features:
**
Map Display: The primary feature is the integration of the MapView component from react-native-maps, allowing users to view a map with markers representing educational institutions.

Markers: Markers on the map represent educational institutions. Initially, three markers are loaded, but the application allows for filtering and displaying specific markers based on user input.

User Interaction: Users can interact with the application by entering the title of an educational institution in the input field. Upon pressing the "Show Marker" button, the map updates to display only the marker(s) matching the entered title.

Button Actions: The application provides two buttons for user actions: "Show Locations" and "Reset." "Show Locations" displays all markers currently loaded in the application, while "Reset" clears the map and input field.

**Functionality:
**
Brightness Control: The code includes a side effect utilizing useEffect to request and set system brightness using the expo-brightness library. It ensures the brightness is set to maximum when the application is launched.

Marker Filtering: The handleShowMarker function filters the markers based on the entered title, displaying only the matching marker(s) on the map.

**Styling:
**
The application applies basic styling using StyleSheet to ensure visual consistency and responsiveness across different screen sizes.
