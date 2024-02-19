import React, { useState, useEffect } from 'react';
import { ScrollView,View, Text, StyleSheet, Button, TextInput } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Brightness from 'expo-brightness';
//"StAuth10244: I Seo James, 000872976 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else."

export default function App() {
  useEffect(() => {
    (async () => {
      const { status } = await Brightness.requestPermissionsAsync();
      if (status === 'granted') {
        Brightness.setSystemBrightnessAsync(1);
      }
    })();
  }, []);

  const initialMarkers = [
    {
      key: 1,
      latlng: { latitude: 43.2387, longitude: -79.8881 },
      description: 'Mohawk College',
      title: 'Mohawk College is ranked as the #1 college in Hamilton',
    },
    {
      key: 2,
      latlng: { latitude: 43.2524, longitude: -79.8712 },
      title: 'Metropolitan College',
      description: 'Metropolitan College is a college in Hamilton',
    },
    {
      key: 3,
      latlng: { latitude: 43.2609, longitude: -79.9192 },
      title: 'McMaster University',
      description: 'McMaster University is ranked in the top 10 universities in Canada',
    },
  ];

  const [markers, setMarkers] = useState(initialMarkers);
  const [showMarkers, setShowMarkers] = useState(true);
  const [inputTitle, setInputTitle] = useState('');

  const handleShowLocations = () => {
    setShowMarkers(true);
  };

  const handleReset = () => {
    setShowMarkers(false);
    setInputTitle('');
  };

  const handleShowMarker = () => {
    const filteredMarkers = initialMarkers.filter(
      (marker) => marker.title.toLowerCase() === inputTitle.toLowerCase()
    );
    setMarkers(filteredMarkers);
    setShowMarkers(true);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={{ textAlign: 'center', fontSize: 20 }}>Find your child the correct path of Education</Text>
      <MapView
        style={{ height: 500, width: 400 }}
        initialRegion={{
          latitude: 43.2387,
          longitude: -79.8881,
          latitudeDelta: 0.0003,
          longitudeDelta: 0.0891,
        }}
      >
        {showMarkers &&
          markers.map((marker) => (
            <Marker
              key={marker.key}
              coordinate={marker.latlng}
              title={marker.title}
              description={marker.description}
            />
          ))}
      </MapView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter title"
          onChangeText={(text) => setInputTitle(text)}
          value={inputTitle}
        />
        <Button title="Show Marker" onPress={handleShowMarker} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Show Locations" onPress={handleShowLocations} />
        <Button title="Reset" onPress={handleReset} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    flex: 1,
    marginRight: 10,
    paddingLeft: 10,
  },
});
