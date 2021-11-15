import React, { Component } from 'react';
import { MapContainer, TileLayer , Circle, Tooltip} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import data from '../assets/data';
import Markers from './RaceMarkers';
//import { Tooltip } from 'leaflet';
//import { Tooltip } from 'leaflet';

class MapView extends Component {
  options = {
    enableHighAccuracy: true,
    timeout: Infinity,
    maximumAge: 0
  };
  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.startWatch, this.error, this.options);
    //  navigator.geolocation.watchPosition(this.success, this.error, this.options);
      } else {
      alert("Sorry Not available!");
      }
  }

  success(pos) {
    var crd = pos.coords;
    console.log(crd);
    this.setState({myLocation: crd});
    console.log('Your current position is a watch position');
  }

  startWatch(pos) {
    var crd = pos.coords;
    console.log(crd);
   if(crd && crd.latitude) {
    this.setState({myLocation: crd});
   } else {
     return;
   }
    console.log('Your current position is a get position');
   navigator.geolocation.watchPosition(this.success, this.error, this.options); 
  }
  
 error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  constructor(props) {
    super(props);
   
    this.state = {
      
   currentLocation: { lat: 53.45444, lng: -6.057222 },
      zoom: 12,
      myLocation: null,
     accuracy: ""
    }
    this.startWatch = this.startWatch.bind(this);
   this.success = this.success.bind(this);
 
   
  }
  render() {
   
    const { currentLocation, zoom } = this.state;
    return (
      <MapContainer center={currentLocation} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />        <Markers marks={data.marks}/>
     {this.state.myLocation?
        <Circle center={[this.state.myLocation.latitude, this.state.myLocation.longitude]} radius={40} pathOptions={{ fillColor: 'blue' }} >
         <Tooltip>Accuracy is around {this.state.myLocation.accuracy} meters</Tooltip>
         </Circle>
        : ""}
      </MapContainer>
    );
  }
}
export default MapView;