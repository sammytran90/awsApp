import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react-native'; // or 'aws-amplify-react-native';
import { MapView } from 'expo';
// import AnimatedMarkers from './containers/simpleMap';
// Amplify.configure(awsconfig);
const latV = 37;
const longV = -122;
var colorArray = ['#4f74af', '#8d2bce', '#0f8421', '#84360f', '#0dadbf'];
const markerArray = new Array(1000).fill(0).map((v, i) => {
  return {
    title: 'test' + i,
    latitude: latV + Math.random(),
    longitude: longV - Math.random(),
    pinColor: colorArray[Math.floor(Math.random() * 5)]
  }
});
export default function App() {
  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
      {
        markerArray.map(v => {
          return <MapView.Marker coordinate={{ latitude: v.latitude, longitude: v.longitude }} title={v.title} pinColor={v.pinColor} />
        })
      }
    </MapView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// export default withAuthenticator(App, true);