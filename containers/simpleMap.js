import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MapView } from 'expo';
export default class AnimatedMarkers extends React.Component {
    render() {
        return (
            <MapView
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
        )
    }
}