"use client";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import React from 'react';

// Fix default icon issue in Next.js/Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: typeof window !== 'undefined' && require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: typeof window !== 'undefined' && require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: typeof window !== 'undefined' && require('leaflet/dist/images/marker-shadow.png'),
});

export default function ParkingMap() {
  return (
    <div className="w-full h-96 rounded-lg overflow-hidden shadow-md my-4">
      <MapContainer center={[28.6139, 77.2090]} zoom={13} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* Example marker */}
        <Marker position={[28.6139, 77.2090]}>
          <Popup>
            Example Parking Lot<br /> New Delhi
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}