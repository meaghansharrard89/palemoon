import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS
import L from "leaflet";

const myIcon = L.icon({
  iconUrl: "https://i.ibb.co/ydq66Gx/Untitled-design-3.png",
  iconSize: [32, 38],
  iconAnchor: [12.5, 41],
  popupAnchor: [0, -41],
});

const Map = () => {
  return (
    <MapContainer
      center={[40.865493, -124.0867349]}
      zoom={13}
      style={{ height: "500px", width: "100%" }}
      scrollWheelZoom={false} // Disable scroll wheel zooming
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[40.865493, -124.0867349]} icon={myIcon}>
        <Popup>Pale Moon Brewing</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
