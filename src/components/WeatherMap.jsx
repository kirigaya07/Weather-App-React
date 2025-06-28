import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Custom marker icon
const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

export default function WeatherMap({ lat, lon, city }) {
  if (!lat || !lon) return null;
  return (
    <div className="w-full max-w-2xl mx-auto rounded-lg overflow-hidden shadow-lg border border-gray-700">
      <MapContainer
        center={[lat, lon]}
        zoom={10}
        scrollWheelZoom={false}
        style={{ height: "350px", width: "100%" }}
        className="z-0"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
        />
        <Marker position={[lat, lon]} icon={markerIcon}>
          <Popup>
            {city ? <span className="font-bold">{city}</span> : "Location"}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
