import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const ControlPanelPage = () => {
  const unsafeRegions = [
    { name: 'Imphal West', reason: 'Severe flooding' },
    { name: 'Thoubal', reason: 'Roads submerged' },
    { name: 'Bishnupur', reason: 'High water levels' },
    { name: 'Churachandpur', reason: 'Landslide risk' },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8 pt-16">
        <h1 className="text-3xl font-bold text-center mb-8">Control Panel</h1>

        <div className="text-center mb-8">
          <button
            className="bg-red-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition"
            onClick={() => alert('NDRF is on the way! Please stay safe.')}
          >
            Request Help
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Unsafe Regions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {unsafeRegions.map((region, index) => (
              <div key={index} className="bg-red-100 p-4 rounded-lg">
                <h3 className="text-xl font-bold text-red-700">{region.name}</h3>
                <p className="text-gray-700">{region.reason}</p>
              </div>
            ))}
          </div>
        </div>
        <hr className="border-t-2 border-gray-300 my-4 pt-3" />
        <div className="mt-8 text-center">
          <h2 className="text-5xl font-bold mb-4">Floods: Do’s & Don’ts</h2>
        </div>
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold mb-4">What to do before a flood</h2>
          <p className="text-lg text-gray-600">
          To prepare for a flood, you should:

Avoid building in flood prone areas unless you elevate and reinforce your home.
Elevate the furnace, water heater, and electric panel if susceptible to flooding.
Install "Check Valves" in sewer traps to prevent floodwater from backing up into the drains of your home.
Contact community officials to find out if they are planning to construct barriers (levees, beams and floodwalls) to stop floodwater from entering the homes in your area.
Seal the walls in your basement with waterproofing compounds to avoid seepage.

          </p>
        </div>
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold mb-4">If a flood is likely to hit  your area, you should:</h2>
          <p className="text-lg text-gray-600">
          Listen to the radio or television for information.
    Be aware that flash flooding can occur. If there is any possibility of a flash flood, move immediately to higher ground. Do not wait for instructions to move.
    Be aware of streams, drainage channels, canyons, and other areas known to flood suddenly. Flash floods can occur in these areas with or without such typical warnings as rain clouds or heavy rain.

          </p>
        </div>
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold mb-4">If you must prepare to evacuate, you should:</h2>
          <p className="text-lg text-gray-600">
          Secure your home. If you have time, bring in outdoor furniture. Move essential items to an upper floor.
    Turn off utilities at the main switches or valves if instructed to do so. Disconnect electrical appliances. Do not touch electrical equipment if you are wet or standing in water.

          </p>
        </div>
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold mb-4">If you have to leave your home, remember these evacuation tips:</h2>
          <p className="text-lg text-gray-600">
          Do not walk through moving water. Six inches of moving water can make you fall. If you have to walk in water, walk where the water is not moving. Use a stick to check the firmness of the ground in front of you.
    Do not drive into flooded areas. If floodwaters rise around your car, abandon the car and move to higher ground if you can do so safely. You and the vehicle can be quickly swept away.
          </p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ControlPanelPage;