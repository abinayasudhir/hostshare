import React, { useState } from "react";
import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";
import json from "../data/listings.json";
import { FaSearch } from "react-icons/fa";
import Card from "./listing/Card";

// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

const icon = L.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png",
});

type Props = {
  center?: number[];
  data?: any;
  locationValue?: string;
  fullHeight?: boolean;
  cities?: any[];
};

function Map({ center, fullHeight, cities = [], data }: Props) {

  const [close, setClose] = useState(false);

  return (
    <MapContainer
      center={(center as L.LatLngExpression) || [29, -103.61599]}
      zoom={center ? 4 : 2}
      scrollWheelZoom={false}
      className={`${fullHeight ? "h-screen" : "h-[35vh]"} rounded-lg ${
        fullHeight ? "sticky top-28 left-0" : ""
      }`}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {cities.length > 0 ? (
        cities.map((d: any, index: number) => (
          <Marker
            position={
              [d?.info?.location?.lat, d?.info?.location?.long] as L.LatLngExpression
            }
            icon={icon}
          >
            {!close && (
              <Popup closeButton={false}>
                <Card
                  key={d.ref}
                  data={d}
                  handleClose={() => {
                    setClose(true);
                    setTimeout(() => {
                      setClose(false);
                    }, 1000);
                  }}
                />
              </Popup>
            )}
          </Marker>
        ))
      ) : (
        <Marker position={center as L.LatLngExpression} icon={icon}>
          {!close && data && (
            <Popup closeButton={false}>
              <Card
                data={data}
                handleClose={() => {
                  setClose(true);
                  setTimeout(() => {
                    setClose(false);
                  }, 1000);
                }}
              />
            </Popup>
          )}
        </Marker>
      )}
    </MapContainer>
  );
}

export default Map;
