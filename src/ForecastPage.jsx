import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';


const ForecastPage = () => {
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = '73ef04a13a65405a9e3120452252602';
  const CITY = 'Imphal';

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        const response = await axios.get(
          `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${CITY}&days=14`
        );
        setForecastData(response.data.forecast.forecastday);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchForecast();
  }, [API_KEY, CITY]);

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8 pt-16">
        <h1 className="text-3xl font-bold text-center mb-8">14-Day Weather Forecast for Manipur</h1>

        {/* Special Block for Rainfall */}
        <div className="bg-blue-100 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Rainfall Overview</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
            {forecastData.map((day, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                <p className="text-lg font-medium">
                  {new Date(day.date).toLocaleDateString()}
                </p>
                <p className="text-gray-600">Rain: {day.day.totalprecip_mm} mm</p>
              </div>
            ))}
          </div>
        </div>

        {/* General Weather Forecast */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Detailed Forecast</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">Date</th>
                  <th className="py-2 px-4 border-b">Max Temp (°C)</th>
                  <th className="py-2 px-4 border-b">Min Temp (°C)</th>
                  <th className="py-2 px-4 border-b">Condition</th>
                  <th className="py-2 px-4 border-b">Rain (mm)</th>
                </tr>
              </thead>
              <tbody>
                {forecastData.map((day, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-2 px-4 border-b">
                      {new Date(day.date).toLocaleDateString()}
                    </td>
                    <td className="py-2 px-4 border-b">{day.day.maxtemp_c}°C</td>
                    <td className="py-2 px-4 border-b">{day.day.mintemp_c}°C</td>
                    <td className="py-2 px-4 border-b">
                      <div className="flex items-center">
                        <img
                          src={`https:${day.day.condition.icon}`}
                          alt={day.day.condition.text}
                          className="w-8 h-8 mr-2"
                        />
                        <span>{day.day.condition.text}</span>
                      </div>
                    </td>
                    <td className="py-2 px-4 border-b">{day.day.totalprecip_mm} mm</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ForecastPage;