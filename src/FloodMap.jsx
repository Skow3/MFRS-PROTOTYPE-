
import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Navbar from './Navbar';
import Footer from './Footer';

const citiesInManipur = {
  Imphal: [24.8170, 93.9368],
  Thoubal: [24.6300, 94.0100],
  Bishnupur: [24.6200, 93.7500],
  Churachandpur: [24.3330, 93.6660],
  Senapati: [25.2700, 94.0160]
};

const FloodMap = () => {
  const [selectedCity, setSelectedCity] = useState('Imphal');

  useEffect(() => {
    const map = L.map('map').setView(citiesInManipur[selectedCity], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);

    const cityCoords = citiesInManipur[selectedCity];
    const geofenceArea = [
      [cityCoords[0] + 0.05, cityCoords[1] - 0.05],
      [cityCoords[0] + 0.05, cityCoords[1] + 0.05],
      [cityCoords[0] - 0.05, cityCoords[1] + 0.05],
      [cityCoords[0] - 0.05, cityCoords[1] - 0.05],
    ];

    L.polygon(geofenceArea, {
      color: '#FF0000',
      fillColor: '#FF0000',
      fillOpacity: 0.35,
    }).addTo(map);

    L.marker(cityCoords).addTo(map).bindPopup(`${selectedCity}, Manipur`).openPopup();

    return () => {
      map.remove();
    };
  }, [selectedCity]);

  return (
    <div className="bg-gray-200 min-h-screen">
      <Navbar />
      <h1 className="text-3xl font-bold text-center pt-16">Live Flood Map</h1>
      <div className="p-4 text-center">
        <label className="mr-2 font-bold">Select a city:</label>
        <select
          className="p-2 border rounded"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          {Object.keys(citiesInManipur).map((city) => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
      </div>
      <div className="p-4">
        <div id="map" style={{ width: '100%', height: '500px' }}></div>
      </div>
      <Footer />
    </div>
  );
};

export default FloodMap;