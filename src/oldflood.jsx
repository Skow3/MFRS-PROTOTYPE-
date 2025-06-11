import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Navbar from './Navbar';
import Footer from './Footer';


const FloodMap = () => {
  useEffect(() => {
    const map = L.map('map').setView([24.8170, 93.9368], 12);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);

    const imphalArea = [
      [24.85, 93.85],
      [24.85, 94.0], 
      [24.75, 94.0], 
      [24.75, 93.85],
    ];

    L.polygon(imphalArea, {
      color: '#FF0000', 
      fillColor: '#FF0000',
      fillOpacity: 0.35, 
    }).addTo(map);

    L.marker([24.8170, 93.9368])
      .addTo(map)
      .bindPopup('Imphal, Manipur')
      .openPopup();

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className="bg-gray-200 min-h-screen">
      <Navbar /> {/* Add the Navbar here */}
      <h1 className="text-3xl font-bold text-center pt-16">Live Flood Map</h1>
      <div className="p-4">
        <div id="map" style={{ width: '100%', height: '500px' }}></div>
      </div>
      <Footer />
    </div>
  );
};

export default FloodMap;