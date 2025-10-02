import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function MapView() {
  return (
    <MapContainer
      center={[12.9716, 77.5946]}
      zoom={13}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[12.9716, 77.5946]}>
        <Popup>Example Marker in Bangalore 🚩</Popup>
      </Marker>
    </MapContainer>
  );
}
