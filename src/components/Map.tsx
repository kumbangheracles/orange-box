"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Location from "../assets/icons/location.svg";
import L from "leaflet";
const customIcon = L.icon({
  iconUrl: Location,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});
export default function Map() {
  const position: [number, number] = [-6.2, 106.816666];

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={customIcon}>
        <Popup>Halo, ini Jakarta!</Popup>
      </Marker>
    </MapContainer>
  );
}
