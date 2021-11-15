import L from 'leaflet';
import './Header.css';

export const RaceMarkerIcon = (name) => {
  let html = `<div>${name}</div>`;
  return  L.divIcon({ className: 'markerIcon  ball', html});
};
