import React from 'react';
import {Popup} from 'react-leaflet';
import './Header.css';

const MarkerPopup = (props) => {
  const { name, description } = props.data;

  return  (<Popup>
    <div className='popup-title'>{name}</div>
    <div className='popup-text'>{description}</div>
  </Popup>);
};

export default MarkerPopup;