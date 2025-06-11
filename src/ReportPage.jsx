import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';


const ReportPage = () => {
  const floodReports = [
    {
      year: 2024,
      devastationLevel: 'Severe',
      problemsFaced: ['Flooded homes', 'Crop damage', 'Road blockages','Power Outage','Landslides'],
      placesAffected: ['Imphal West', 'Thoubal', 'Bishnupur','churachandrapur'],
      peopleDisplaced: 20000,
      rainfallAmount: '500 mm',
    },
    {
        year: 2022,
        devastationLevel: 'High',
        problemsFaced: ['Flooded homes', 'Crop damage', 'Road blockages'],
        placesAffected: ['Imphal West', 'Thoubal', 'Bishnupur'],
        peopleDisplaced: 5000,
        rainfallAmount: '350 mm',
      },
    {
      year: 2021,
      devastationLevel: 'Moderate',
      problemsFaced: ['Waterlogging', 'Power outages'],
      placesAffected: ['Imphal East', 'Churachandpur'],
      peopleDisplaced: 3000,
      rainfallAmount: '280 mm',
    },
    {
      year: 2020,
      devastationLevel: 'Severe',
      problemsFaced: ['Flooded hospitals', 'Bridge collapse'],
      placesAffected: ['Imphal West', 'Senapati', 'Ukhrul'],
      peopleDisplaced: 8000,
      rainfallAmount: '420 mm',
    },
    {
      year: 2019,
      devastationLevel: 'Low',
      problemsFaced: ['Minor flooding', 'Traffic disruptions'],
      placesAffected: ['Thoubal', 'Chandel'],
      peopleDisplaced: 1000,
      rainfallAmount: '200 mm',
    },
    {
    year: 2018,
    devastationLevel: 'High',
    problemsFaced: ['Flooded homes', 'Crop damage', 'Road blockages'],
    placesAffected: ['Imphal West', 'Thoubal', 'Bishnupur'],
    peopleDisplaced: 6000,
    rainfallAmount: '370 mm',
    },
    {
    year: 2017,
    devastationLevel: 'Severe',
    problemsFaced: ['Flooded homes', 'Landslides', 'Power Outage'],
    placesAffected: ['Imphal West', 'Senapati', 'Tamenglong'],
    peopleDisplaced: 9000,
    rainfallAmount: '450 mm',
    },
    {
    year: 2016,
    devastationLevel: 'Moderate',
    problemsFaced: ['Waterlogging', 'Traffic disruptions'],
    placesAffected: ['Imphal East', 'Churachandpur'],
    peopleDisplaced: 3000,
    rainfallAmount: '300 mm',
    },
    {
    year: 2015,
    devastationLevel: 'High',
    problemsFaced: ['Flooded roads', 'Power outages', 'Crop damage'],
    placesAffected: ['Bishnupur', 'Thoubal', 'Ukhrul'],
    peopleDisplaced: 7000,
    rainfallAmount: '410 mm',
    },
    {
    year: 2014,
    devastationLevel: 'Severe',
    problemsFaced: ['Landslides', 'Bridge collapse'],
    placesAffected: ['Tamenglong', 'Senapati', 'Chandel'],
    peopleDisplaced: 8500,
    rainfallAmount: '480 mm',
    },
    {
    year: 2013,
    devastationLevel: 'Low',
    problemsFaced: ['Minor flooding', 'Traffic disruptions'],
    placesAffected: ['Imphal West', 'Thoubal'],
    peopleDisplaced: 2000,
    rainfallAmount: '210 mm',
    },
    {
    year: 2012,
    devastationLevel: 'Moderate',
    problemsFaced: ['Flooded homes', 'Crop damage'],
    placesAffected: ['Imphal East', 'Bishnupur'],
    peopleDisplaced: 4000,
    rainfallAmount: '310 mm',
    },
    {
    year: 2011,
    devastationLevel: 'High',
    problemsFaced: ['Flooded hospitals', 'Power outage'],
    placesAffected: ['Thoubal', 'Senapati'],
    peopleDisplaced: 7500,
    rainfallAmount: '390 mm',
    },
    {
    year: 2010,
    devastationLevel: 'Severe',
    problemsFaced: ['Bridge collapse', 'Road blockages'],
    placesAffected: ['Churachandpur', 'Tamenglong'],
    peopleDisplaced: 9500,
    rainfallAmount: '460 mm',
    },
    {
    year: 2009,
    devastationLevel: 'Low',
    problemsFaced: ['Minor flooding', 'Traffic congestion'],
    placesAffected: ['Imphal West', 'Thoubal'],
    peopleDisplaced: 1500,
    rainfallAmount: '190 mm',
    },
    {
    year: 2008,
    devastationLevel: 'Moderate',
    problemsFaced: ['Flooded homes', 'Waterlogging'],
    placesAffected: ['Bishnupur', 'Ukhrul'],
    peopleDisplaced: 3500,
    rainfallAmount: '280 mm',
    },
    {
    year: 2007,
    devastationLevel: 'Severe',
    problemsFaced: ['Landslides', 'Power outages'],
    placesAffected: ['Senapati', 'Tamenglong'],
    peopleDisplaced: 8700,
    rainfallAmount: '470 mm',
    },
    {
    year: 2006,
    devastationLevel: 'High',
    problemsFaced: ['Flooded roads', 'Bridge collapse'],
    placesAffected: ['Imphal West', 'Thoubal'],
    peopleDisplaced: 6000,
    rainfallAmount: '380 mm',
    },
    {
    year: 2005,
    devastationLevel: 'Moderate',
    problemsFaced: ['Traffic disruptions', 'Waterlogging'],
    placesAffected: ['Bishnupur', 'Chandel'],
    peopleDisplaced: 2500,
    rainfallAmount: '260 mm',
    },
    {
    year: 2004,
    devastationLevel: 'Severe',
    problemsFaced: ['Flooded homes', 'Road blockages'],
    placesAffected: ['Churachandpur', 'Tamenglong'],
    peopleDisplaced: 9200,
    rainfallAmount: '490 mm',
    },
    {
    year: 2003,
    devastationLevel: 'High',
    problemsFaced: ['Crop damage', 'Power outages'],
    placesAffected: ['Imphal East', 'Ukhrul'],
    peopleDisplaced: 5500,
    rainfallAmount: '340 mm',
    },
    {
    year: 2002,
    devastationLevel: 'Low',
    problemsFaced: ['Minor flooding', 'Traffic congestion'],
    placesAffected: ['Imphal West', 'Thoubal'],
    peopleDisplaced: 1300,
    rainfallAmount: '180 mm',
    },
    {
    year: 2001,
    devastationLevel: 'Moderate',
    problemsFaced: ['Flooded hospitals', 'Waterlogging'],
    placesAffected: ['Bishnupur', 'Senapati'],
    peopleDisplaced: 3700,
    rainfallAmount: '290 mm',
    },
    {
    year: 2000,
    devastationLevel: 'Severe',
    problemsFaced: ['Bridge collapse', 'Landslides'],
    placesAffected: ['Tamenglong', 'Chandel'],
    peopleDisplaced: 9800,
    rainfallAmount: '500 mm',
    },
    {
    year: 1999,
    devastationLevel: 'High',
    problemsFaced: ['Flooded roads', 'Power outages'],
    placesAffected: ['Imphal East', 'Ukhrul'],
    peopleDisplaced: 5600,
    rainfallAmount: '350 mm',
    },
    {
    year: 1998,
    devastationLevel: 'Moderate',
    problemsFaced: ['Waterlogging', 'Traffic congestion'],
    placesAffected: ['Thoubal', 'Bishnupur'],
    peopleDisplaced: 2700,
    rainfallAmount: '250 mm',
    },
    {
    year: 1997,
    devastationLevel: 'Severe',
    problemsFaced: ['Landslides', 'Power outages'],
    placesAffected: ['Tamenglong', 'Senapati'],
    peopleDisplaced: 8700,
    rainfallAmount: '470 mm',
    },
    {
    year: 1996,
    devastationLevel: 'High',
    problemsFaced: ['Flooded homes', 'Bridge collapse'],
    placesAffected: ['Imphal West', 'Thoubal'],
    peopleDisplaced: 6500,
    rainfallAmount: '360 mm',
    },
    {
    year: 1995,
    devastationLevel: 'Moderate',
    problemsFaced: ['Traffic disruptions', 'Waterlogging'],
    placesAffected: ['Bishnupur', 'Chandel'],
    peopleDisplaced: 3000,
    rainfallAmount: '270 mm',
    },
    {
    year: 1994,
    devastationLevel: 'Low',
    problemsFaced: ['Minor flooding', 'Traffic congestion'],
    placesAffected: ['Imphal West', 'Ukhrul'],
    peopleDisplaced: 1200,
    rainfallAmount: '170 mm',
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8 pt-16">
        <h1 className="text-3xl font-bold text-center mb-8">Historical Flood Reports for Manipur</h1>

        {/* Flood Reports Table */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">Year</th>
                  <th className="py-2 px-4 border-b">Devastation Level</th>
                  <th className="py-2 px-4 border-b">Problems Faced</th>
                  <th className="py-2 px-4 border-b">Places Affected</th>
                  <th className="py-2 px-4 border-b">People Displaced</th>
                  <th className="py-2 px-4 border-b">Rainfall Amount</th>
                </tr>
              </thead>
              <tbody>
                {floodReports.map((report, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-2 px-4 border-b">{report.year}</td>
                    <td className="py-2 px-4 border-b">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          report.devastationLevel === 'High'
                            ? 'bg-red-100 text-red-700'
                            : report.devastationLevel === 'Severe'
                            ? 'bg-purple-100 text-purple-700'
                            : report.devastationLevel === 'Moderate'
                            ? 'bg-yellow-100 text-yellow-700'
                            : 'bg-green-100 text-green-700'
                        }`}
                      >
                        {report.devastationLevel}
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b">
                      <ul className="list-disc list-inside">
                        {report.problemsFaced.map((problem, i) => (
                          <li key={i}>{problem}</li>
                        ))}
                      </ul>
                    </td>
                    <td className="py-2 px-4 border-b">
                      <ul className="list-disc list-inside">
                        {report.placesAffected.map((place, i) => (
                          <li key={i}>{place}</li>
                        ))}
                      </ul>
                    </td>
                    <td className="py-2 px-4 border-b">{report.peopleDisplaced.toLocaleString()}</td>
                    <td className="py-2 px-4 border-b">{report.rainfallAmount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Understanding Flood Impact</h2>
          <p className="text-lg text-gray-600">
            Historical flood data helps us understand the patterns and impacts of floods in Manipur.
            This information is crucial for better disaster preparedness and response in the future.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ReportPage;