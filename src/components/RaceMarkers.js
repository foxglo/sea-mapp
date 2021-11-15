import React, { Fragment } from 'react'
import {Marker} from 'react-leaflet';
import {RaceMarkerIcon} from './RaceMarkerIcon';
import MarkerPopup from './MarkerPopup';
import './Header.css';

const RaceMarkers = (props) => {
  const { marks } = props;

  const markers = marks.map((mark, index) => (
    <Marker className="markerSize" key={index} position={mark.geometry} icon={RaceMarkerIcon(mark.shortname)} >
      <MarkerPopup data={mark}/>
    </Marker>
  ));

  return <Fragment>{markers}</Fragment>
};

export default RaceMarkers;