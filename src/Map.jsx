import {
    MapContainer,
    TileLayer,
    Marker,
    Popup
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import "leaflet-defaulticon-compatibility";

import { Header } from './components/Header'
import style from './App.module.css'

export function Map() {
    const coordenates = [-25.42492367653241, -49.27241371414609]
    return (
        <>
            <div>
                <Header />
            </div>

            <div className={style.wrapPage}>
                <h2>Map</h2>
                <p>Senai localization</p>
                <div>
                    <MapContainer center={coordenates} zoom={13} scrollWheelZoom={false} style={{ width: "100%", height: "500px" }}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={coordenates}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </>
    );
}