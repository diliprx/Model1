import React from 'react';
import { Trees, Leaf, Mountain, Bird } from 'lucide-react';

const ForestCover = () => {
  const forestTypes = [
    {
      name: "Tropical Evergreen Forests",
      coverage: "45%",
      altitude: "Below 1,000m",
      characteristics: "Dense canopy, high biodiversity, year-round green",
      species: ["Dipterocarpus", "Mesua", "Michelia"],
      image: "/api/placeholder/300/200"
    },
    {
      name: "Subtropical Forests",
      coverage: "30%",
      altitude: "1,000-2,000m",
      characteristics: "Mixed deciduous and evergreen, moderate rainfall",
      species: ["Oak", "Magnolia", "Rhododendron"],
      image: "/api/placeholder/300/200"
    },
    {
      name: "Temperate Forests",
      coverage: "15%",
      altitude: "2,000-3,000m",
      characteristics: "Coniferous trees, cooler climate, seasonal changes",
      species: ["Pine", "Fir", "Spruce"],
      image: "/api/placeholder/300/200"
    },
    {
      name: "Alpine Forests",
      coverage: "10%",
      altitude: "Above 3,000m",
      characteristics: "Stunted growth, hardy species, extreme weather",
      species: ["Juniper", "Birch", "Alpine shrubs"],
      image: "/api/placeholder/300/200"
    }
  ];

  const wildlifeData = [
    {
      name: "Hoolock Gibbon",
      status: "Endangered",
      habitat: "Canopy of tropical forests",
      icon: "🐒"
    },
    {
      name: "Asian Elephant",
      status: "Vulnerable", 
      habitat: "Forest corridors and grasslands",
      icon: "🐘"
    },
    {
      name: "Clouded Leopard",
      status: "Vulnerable",
      habitat: "Dense tropical forests",
      icon: "🐆"
    },
    {
      name: "Great Hornbill",
      status: "Near Threatened",
      habitat: "Tall trees in dense forests",
      icon: "🦅"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r h-[420px] from-green-600 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Back Button */}
          {/* <button 
            onClick={() => setCurrentPage('home')}
            className="mb-6 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-colors duration-300 flex items-center gap-2"
          >
            ← Back to Home
          </button> */}
          <div className="text-center">
            <h1 className="text-5xl pt-[140px] font-bold mb-4">29% Forest Cover</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Nagaland boasts one of the highest forest covers in India, preserving biodiversity 
              and supporting indigenous communities through sustainable forest management.
            </p>
          </div>
        </div>
      </div>

      {/* Forest Statistics */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Forest Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 bg-green-50 rounded-lg">
              <Trees className="mx-auto mb-4 text-green-600" size={40} />
              <div className="text-3xl font-bold text-green-600 mb-2">4,851</div>
              <div className="text-gray-600">km² Forest Area</div>
            </div>
            <div className="p-6 bg-green-50 rounded-lg">
              <Leaf className="mx-auto mb-4 text-green-600" size={40} />
              <div className="text-3xl font-bold text-green-600 mb-2">29%</div>
              <div className="text-gray-600">Total Coverage</div>
            </div>
            <div className="p-6 bg-green-50 rounded-lg">
              <Mountain className="mx-auto mb-4 text-green-600" size={40} />
              <div className="text-3xl font-bold text-green-600 mb-2">85%</div>
              <div className="text-gray-600">Hilly Terrain</div>
            </div>
            <div className="p-6 bg-green-50 rounded-lg">
              <Bird className="mx-auto mb-4 text-green-600" size={40} />
              <div className="text-3xl font-bold text-green-600 mb-2">490+</div>
              <div className="text-gray-600">Bird Species</div>
            </div>
          </div>
        </div>
      </div>

      {/* Forest Types */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Forest Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {forestTypes.map((forest, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={forest.image}
                  alt={forest.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-800">{forest.name}</h3>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {forest.coverage}
                    </span>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-semibold text-gray-700">Altitude: </span>
                      <span className="text-gray-600">{forest.altitude}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Characteristics: </span>
                      <span className="text-gray-600">{forest.characteristics}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Key Species: </span>
                      <span className="text-gray-600">{forest.species.join(", ")}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wildlife Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Forest Wildlife</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {wildlifeData.map((animal, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors duration-300">
                <div className="text-4xl mb-4">{animal.icon}</div>
                <h3 className="font-bold text-gray-800 mb-2">{animal.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{animal.habitat}</p>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                  animal.status === 'Endangered' ? 'bg-red-100 text-red-800' :
                  animal.status === 'Vulnerable' ? 'bg-orange-100 text-orange-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {animal.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Conservation Efforts */}
      <div className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Conservation Efforts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4 text-green-700">Community Forest Management</h3>
              <p className="text-gray-600">Local communities actively participate in forest conservation through traditional practices and modern techniques.</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4 text-green-700">Protected Areas</h3>
              <p className="text-gray-600">Multiple wildlife sanctuaries and national parks protect critical habitats and endangered species.</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4 text-green-700">Sustainable Harvesting</h3>
              <p className="text-gray-600">Controlled harvesting practices ensure forest resources are used sustainably for future generations.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForestCover;