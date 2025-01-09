import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import axios from "axios";

// Fix default icon paths so Leaflet markers appear correctly with Vite
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: new URL(
    "leaflet/dist/images/marker-icon-2x.png",
    import.meta.url
  ).href,
  iconUrl: new URL("leaflet/dist/images/marker-icon.png", import.meta.url).href,
  shadowUrl: new URL("leaflet/dist/images/marker-shadow.png", import.meta.url)
    .href,
});

const MapView = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    // Fetch tourist places from backend
    const fetchPlaces = async () => {
      try {
        const response = await axios.get("/api/tourist-places");
        console.log("API Response:", response.data);
        setPlaces(response.data);
      } catch (error) {
        console.error("Error fetching tourist places:", error);
      }
    };
    fetchPlaces();
  }, []);

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <MapContainer
        center={[20, 0]}
        zoom={2}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {places.map((place, index) => (
          <Marker key={index} position={[place.latitude, place.longitude]}>
            <Popup>
              <strong>{place.name}</strong>
              <br />
              {place.description}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapView;
