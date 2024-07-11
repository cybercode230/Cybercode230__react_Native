import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const DeliveryScreen = () => {
  const [region, setRegion] = useState({
    latitude: -1.957876, // Latitude for Kigali
    longitude: 30.112735, // Longitude for Kigali
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    // Fetch delivery location data and update the region if needed
    // Example: setRegion({ latitude: newLat, longitude: newLon, latitudeDelta: 0.0922, longitudeDelta: 0.0421 });
  }, []);

  const handleLocationSelect = (data, details) => {
    // Extract the location details from 'details' object and update 'region'
    const { lat, lng } = details.geometry.location;
    setRegion({
      latitude: lat,
      longitude: lng,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <GooglePlacesAutocomplete
          placeholder="Search"
          onPress={handleLocationSelect}
          fetchDetails={true}
          styles={{
            textInput: styles.searchBar,
            container: styles.autocompleteContainer,
            listView: styles.listView,
          }}
          query={{
            key: "YOUR_GOOGLE_PLACES_API_KEY",
            language: "en", // language of the results
          }}
        />
      </View>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          region={region}>
          <Marker
            coordinate={{
              latitude: region.latitude,
              longitude: region.longitude,
            }}
            title={"Delivery Location"}
            description={"Description of the delivery location"}
          />
        </MapView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    position: "absolute",
    top: 10,
    left: 10,
    right: 10,
    zIndex: 1,
  },
  searchBar: {
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#f07e4e",
    backgroundColor:"transparent",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  autocompleteContainer: {
    flex: 1,
  },
  listView: {
    borderWidth: 1,
    borderColor: "#DDD",
    backgroundColor: "#FFF",
    marginHorizontal: 10,
  },
  mapContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default DeliveryScreen;
