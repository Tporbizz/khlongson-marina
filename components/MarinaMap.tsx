"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, CircleMarker, Polyline } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MARINA } from "@/lib/constants";

// Fix Leaflet's default marker icon paths under bundlers (Webpack/Turbopack)
const FixDefaultIcon = () => {
  useEffect(() => {
    type Patched = typeof L.Icon.Default.prototype & { _getIconUrl?: unknown };
    delete (L.Icon.Default.prototype as Patched)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
      iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
      shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    });
  }, []);
  return null;
};

const marinaIcon = L.divIcon({
  className: "marina-pin",
  html: `<div style="
    width:34px;height:34px;border-radius:50% 50% 50% 0;
    transform:rotate(-45deg);
    background:#0C3550;border:3px solid #D4AF87;
    box-shadow:0 6px 20px rgba(12,53,80,.45);
    display:grid;place-items:center;">
    <span style="
      transform:rotate(45deg);
      width:10px;height:10px;border-radius:50%;background:#D4AF87;"></span>
  </div>`,
  iconSize: [34, 34],
  iconAnchor: [17, 34],
  popupAnchor: [0, -32],
});

// Points of interest
const POIS: Array<{
  id: string;
  name: string;
  description: string;
  coords: [number, number];
  color: string;
}> = [
  {
    id: "marina",
    name: MARINA.name,
    description: "10 alongside berths · 10-rai secure parking",
    coords: [MARINA.coords.lat, MARINA.coords.lng],
    color: "#D4AF87",
  },
  {
    id: "khlongson-beach",
    name: "Khlong Son Beach",
    description: "15-min drive · long quiet beach",
    coords: [7.5469, 99.2856],
    color: "#4A7043",
  },
  {
    id: "koh-muk",
    name: "Koh Muk · Emerald Cave",
    description: "45-min by boat · the iconic sea cave",
    coords: [7.3556, 99.2956],
    color: "#0C3550",
  },
  {
    id: "koh-kradan",
    name: "Koh Kradan",
    description: "Reef snorkelling, voted top island in Asia",
    coords: [7.3, 99.245],
    color: "#0C3550",
  },
  {
    id: "koh-ngai",
    name: "Koh Ngai",
    description: "White-sand fringe and clear lagoons",
    coords: [7.396, 99.2],
    color: "#0C3550",
  },
  {
    id: "krabi-airport",
    name: "Krabi Int'l Airport",
    description: "40-min transfer · all major carriers",
    coords: [8.099, 98.987],
    color: "#A5B4C0",
  },
  {
    id: "trang-airport",
    name: "Trang Airport",
    description: "40-min transfer · domestic flights",
    coords: [7.508, 99.616],
    color: "#A5B4C0",
  },
];

export default function MarinaMap() {
  // River channel — illustrative path from open sea to marina
  const channel: [number, number][] = [
    [7.5419, 99.2812],
    [7.5489, 99.2891],
    [7.5547, 99.299],
    [7.5598, 99.306],
    [MARINA.coords.lat, MARINA.coords.lng],
  ];

  return (
    <div className="h-full w-full">
      <MapContainer
        center={[MARINA.coords.lat, MARINA.coords.lng]}
        zoom={11}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <FixDefaultIcon />
        <TileLayer
          attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Polyline
          positions={channel}
          pathOptions={{ color: "#D4AF87", weight: 3, dashArray: "6 6", opacity: 0.85 }}
        />

        {POIS.map((p) =>
          p.id === "marina" ? (
            <Marker key={p.id} position={p.coords} icon={marinaIcon}>
              <Popup>
                <div style={{ fontFamily: "var(--font-body)", minWidth: 180 }}>
                  <strong style={{ color: "#0C3550", fontSize: 14 }}>{p.name}</strong>
                  <p style={{ margin: "4px 0 0", fontSize: 12, color: "#0C3550AA" }}>
                    {p.description}
                  </p>
                  <p style={{ margin: "8px 0 0", fontSize: 11, color: "#0C3550AA" }}>
                    {p.coords[0].toFixed(4)}°N, {p.coords[1].toFixed(4)}°E
                  </p>
                </div>
              </Popup>
            </Marker>
          ) : (
            <CircleMarker
              key={p.id}
              center={p.coords}
              radius={8}
              pathOptions={{
                color: "#fff",
                weight: 2,
                fillColor: p.color,
                fillOpacity: 0.95,
              }}
            >
              <Popup>
                <div style={{ fontFamily: "var(--font-body)", minWidth: 160 }}>
                  <strong style={{ color: "#0C3550", fontSize: 13 }}>{p.name}</strong>
                  <p style={{ margin: "3px 0 0", fontSize: 12, color: "#0C3550AA" }}>
                    {p.description}
                  </p>
                </div>
              </Popup>
            </CircleMarker>
          )
        )}
      </MapContainer>
    </div>
  );
}
