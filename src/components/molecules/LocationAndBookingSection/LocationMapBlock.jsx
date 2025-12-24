import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// --- Бордовий маркер ---
const BordeauxMarker = new L.Icon({
  iconUrl:
    "data:image/svg+xml;charset=UTF-8," +
    encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="48" viewBox="0 0 32 48">
        <path fill="#703938" d="
          M16 0
          C7 0 0 7 0 16
          C0 28 16 48 16 48
          C16 48 32 28 32 16
          C32 7 25 0 16 0Z
        "/>
        <circle cx="16" cy="16" r="7" fill="#F3D9D8"/>
      </svg>
    `),
  iconSize: [32, 48],
  iconAnchor: [16, 48],
});

export default function LocationMapBlock() {
  const locations = [
    {
      pos: [48.62002396964969, 22.294109224624957],
      title: "Центр",
      address: "Івана Чендея 7А",
    },
    {
      pos: [48.603829473698035, 22.269413154578764],
      title: "Новий Район",
      address: "Легоцького 80, ЖК Parkland",
    },
  ];

  return (
    <div className="w-full h-[260.6232px] sm:h-[360px] lg:h-[500px] rounded-[50px] overflow-hidden">
      <MapContainer
        center={[48.612, 22.282]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {locations.map((loc, i) => (
          <Marker key={i} position={loc.pos} icon={BordeauxMarker}>
            <Popup>
              <b>{loc.title}</b> <br />
              {loc.address}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}