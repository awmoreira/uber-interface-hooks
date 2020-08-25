import React from 'react';
import MapViewDirections from 'react-native-maps-directions';

// import { Container } from './styles';

export default function Directions({destination, origin, onReady}) {
  return (
    <MapViewDirections
      destination={destination}
      origin={origin}
      onReady={onReady}
      apikey="AIzaSy6NoXrdidG54afid6yUgucvGi_60"
      strokeWidth={3}
      strokeColor="#000"
    />
  );
}
