import React, { useState } from "react";

export default function PlasticEnclosure() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="max-w-4xl mx-auto pt-20 pb-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Plastic Enclosure Specifications</h1>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center items-center">
          <img
            src="/images/plasticenc2.png"
            alt="Plastic Enclosure"
            className="rounded-lg shadow-lg w-full h-[400px] object-contain transition-transform duration-300 hover:scale-105 cursor-pointer"
            onClick={() => setShowPopup(true)}
          />
        </div>
        {/* Specification Section */}
        <div className="md:w-1/2">
          <h2 className="text-xl font-semibold mb-2">MOULDED MATERIAL</h2>
          <ul className="mb-4 text-gray-700 list-disc ml-6">
            <li><strong>A HOUSING:</strong> ABS</li>
            <li><strong>B TERMINAL COVER:</strong> ABS</li>
            <li><strong>C MOUNTING CLIP:</strong> DELRIN / MS</li>
          </ul>
          <h2 className="text-xl font-semibold mb-2">SPECIFICATION</h2>
          <ul className="mb-4 text-gray-700 list-disc ml-6">
            <li>SCREWS: (Combihead with Captivated Binder Washer) Steel / Ni-Plated</li>
            <li>TERMINALS: Brass / Tin-Plated</li>
            <li>HEX. NUTS: Steel / Ni-Plated</li>
          </ul>
          <h2 className="text-xl font-semibold mb-2">ELECTRICAL (Terminal Cover)</h2>
          <ul className="mb-4 text-gray-700 list-disc ml-6">
            <li>Voltage Breakdown: &gt;2500 volts AC</li>
            <li>Insulation: &gt;100 meg. ohms</li>
            <li>Current: 15 Amps</li>
          </ul>
          <h2 className="text-xl font-semibold mb-2">OPERATING TEMPERATURE</h2>
          <p className="mb-4 text-gray-700">60°C (MAX)</p>
          <h2 className="text-xl font-semibold mb-2">IP CLASSIFICATION</h2>
          <ul className="mb-4 text-gray-700 list-disc ml-6">
            <li>Housing: IP 40</li>
            <li>Terminal Cover: IP 10</li>
          </ul>
        </div>
      </div>

      {/* Product Details Table */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Product Details</h2>
        <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border-b text-left">Code</th>
              <th className="py-2 px-4 border-b text-left">Terminals</th>
              <th className="py-2 px-4 border-b text-left">Dimensions</th>
              <th className="py-2 px-4 border-b text-left">Label Size</th>
              <th className="py-2 px-4 border-b text-left">Weight</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">ED.7060</td>
              <td className="py-2 px-4 border-b">6+6</td>
              <td className="py-2 px-4 border-b">70-60-112</td>
              <td className="py-2 px-4 border-b">54 x 45 mm</td>
            
              <td className="py-2 px-4 border-b">115 gms.</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 shadow-lg max-w-xl w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-600 text-2xl font-bold"
              onClick={() => setShowPopup(false)}
            >
              &times;
            </button>
            <img
              src="/images/plasticenc2.png"
              alt="Plastic Enclosure Large"
              className="w-full h-[500px] object-contain rounded"
            />
          </div>
        </div>
      )}
    </div>
  );
}