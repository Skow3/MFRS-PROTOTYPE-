import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';


const WarningPage = () => {
  // List of rivers in Manipur prone to flooding
  const rivers = [
    { name: 'Imphal River', currentLevel: (Math.random() * 10).toFixed(2) },
    { name: 'Iril River', currentLevel: (Math.random() * 10).toFixed(2) },
    { name: 'Thoubal River', currentLevel: (Math.random() * 10).toFixed(2) },
    { name: 'Sekmai River', currentLevel: (Math.random() * 10).toFixed(2) },
    { name: 'Wangjing River', currentLevel: (Math.random() * 10).toFixed(2) },
    { name: 'Khuga River', currentLevel: (Math.random() * 10).toFixed(2) },
    { name: 'Chakpi River', currentLevel: (Math.random() * 10).toFixed(2) },
    { name: 'Nambul River', currentLevel: (Math.random() * 10).toFixed(2) },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8 pt-16">
        <h1 className="text-3xl font-bold text-center mb-8">Flood Warning System</h1>

        <div className="bg-blue-100 p-6 rounded-lg mb-8">
          <p className="text-lg text-gray-700">
            The water levels displayed below are measured using <strong>Remote Sensing Data</strong>.
            These levels are updated in real-time to provide accurate flood warnings.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">River Water Levels (in meters)</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">River Name</th>
                  <th className="py-2 px-4 border-b">Current Water Level</th>
                  <th className="py-2 px-4 border-b">Status</th>
                </tr>
              </thead>
              <tbody>
                {rivers.map((river, index) => {
                  const status = river.currentLevel > 5 ? 'High Risk' : river.currentLevel > 3 ? 'Moderate Risk' : 'Low Risk';
                  return (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="py-2 px-4 border-b">{river.name}</td>
                      <td className="py-2 px-4 border-b">{river.currentLevel} m</td>
                      <td className="py-2 px-4 border-b">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            status === 'High Risk'
                              ? 'bg-red-100 text-red-700'
                              : status === 'Moderate Risk'
                              ? 'bg-yellow-100 text-yellow-700'
                              : 'bg-green-100 text-green-700'
                          }`}
                        >
                          {status}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">WHAT IS THE METHOD OF REMOTE SENSING DATA?</h2>
          <p className="text-lg text-gray-600">
          There are various computer programs that allow the viewing and processing data from remote sensing systems such as PCI.Geomatic’s Image Handler. The PCI program is able to read the LANDSAT 5 data, and it then converts these data to its own format for processing and manipulation. The suites of PCI programs are also used by many governmental and private organizations to process digital spatial data.
          PCI’s Image Handler can display LANDSAT 5 images in 8-bit unsigned integer, 16-bit signed integer, 16-bit unsigned integer and 32-bit floating-point real image channels. The 8-bit data format is designated as 8U and this format is most often used for air and satellite imagery (PCI Enterprises, 1998, pp. 22,27). The spectral range of each LANDSAT 5 TM band that is set to the 8-bit format is converted to 256 possible gray levels starting at 0 and ending at 255. The levels are numbered by row and column. Each of these pixels represents a particular light reflectance characteristic of the feature (or features) it represents on the earth’s surface. Depending on the size of an object on the earth’s surface, it is possible that a LANDSAT 5 TM pixel may be representing more than one ground or water feature and this can affect the reliability of the reflectance value of the pixel.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WarningPage;