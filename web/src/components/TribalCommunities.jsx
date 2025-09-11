import React from 'react';
import { Users, Home, Music, Palette } from 'lucide-react';

const TribalCommunities = () => {
  const majorTribes = [
    {
      name: "Angami",
      population: "12%",
      districts: ["Kohima", "Dimapur"],
      festivals: ["Sekrenyi"],
      specialties: ["Terraced cultivation", "Handicrafts"],
      description: "Known for their agricultural expertise and the famous Hornbill Festival.",
      image: "/api/placeholder/300/200"
    },
    {
      name: "Ao",
      population: "11%", 
      districts: ["Mokokchung"],
      festivals: ["Moatsu"],
      specialties: ["Education", "Literature"],
      description: "First tribe to embrace modern education and Christianity in Nagaland.",
      image: "/api/placeholder/300/200"
    },
    {
      name: "Konyak",
      population: "10%",
      districts: ["Mon"],
      festivals: ["Aoleang"],
      specialties: ["Traditional tattoos", "Woodcarving"],
      description: "Known for their rich traditions and skilled craftsmanship.",
      image: "/api/placeholder/300/200"
    },
    {
      name: "Lotha",
      population: "8%",
      districts: ["Wokha"],
      festivals: ["Tokhu Emong"],
      specialties: ["Weaving", "Folk songs"],
      description: "Famous for their colorful shawls and vibrant cultural expressions.",
      image: "/api/placeholder/300/200"
    },
    {
      name: "Sema",
      population: "8%",
      districts: ["Zunheboto"],
      festivals: ["Tuluni"],
      specialties: ["Traditional medicine", "Pottery"],
      description: "Known for their knowledge of herbal medicine and pottery skills.",
      image: "/api/placeholder/300/200"
    },
    {
      name: "Chang",
      population: "7%",
      districts: ["Tuensang"],
      festivals: ["Naknyulem"],
      specialties: ["Traditional brewing", "Basketry"],
      description: "Skilled in traditional brewing and intricate basket weaving.",
      image: "/api/placeholder/300/200"
    }
  ];

  const culturalElements = [
    {
      title: "Traditional Architecture",
      description: "Morungs (dormitories) and traditional houses built with local materials",
      icon: <Home className="text-blue-600" size={24} />
    },
    {
      title: "Folk Music & Dance",
      description: "Rich tradition of folk songs and dances for various ceremonies",
      icon: <Music className="text-blue-600" size={24} />
    },
    {
      title: "Handicrafts",
      description: "Intricate weaving, wood carving, and traditional jewelry making",
      icon: <Palette className="text-blue-600" size={24} />
    },
    {
      title: "Oral Traditions",
      description: "Rich folklore, myths, and legends passed down through generations",
      icon: <Users className="text-blue-600" size={24} />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Back Button */}
          {/* <button 
            onClick={() => setCurrentPage('home')}
            className="mb-6 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-colors duration-300 flex items-center gap-2"
          >
            ← Back to Home
          </button> */}
          <div className="text-center">
            <h1 className="text-5xl pt-[120px] font-bold mb-4">32 Tribal Communities</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Nagaland is home to diverse tribal communities, each with unique traditions, 
              languages, and cultural practices that form the rich tapestry of Naga heritage.
            </p>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Tribal Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 bg-blue-50 rounded-lg">
              <Users className="mx-auto mb-4 text-blue-600" size={40} />
              <div className="text-3xl font-bold text-blue-600 mb-2">32</div>
              <div className="text-gray-600">Tribal Communities</div>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-gray-600">Tribal Population</div>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">16</div>
              <div className="text-gray-600">Major Tribes</div>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">30+</div>
              <div className="text-gray-600">Dialects</div>
            </div>
          </div>
        </div>
      </div>

      {/* Major Tribes Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Major Tribal Communities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {majorTribes.map((tribe, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={tribe.image}
                  alt={tribe.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-800">{tribe.name}</h3>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {tribe.population}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm">{tribe.description}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-semibold text-gray-700">Districts: </span>
                      <span className="text-gray-600">{tribe.districts.join(", ")}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Festivals: </span>
                      <span className="text-gray-600">{tribe.festivals.join(", ")}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Known for: </span>
                      <span className="text-gray-600">{tribe.specialties.join(", ")}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cultural Elements */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Cultural Heritage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {culturalElements.map((element, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                <div className="mb-4">{element.icon}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">{element.title}</h3>
                <p className="text-gray-600 text-sm">{element.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Traditional Practices */}
      <div className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Traditional Practices</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-blue-700">Jhum Cultivation</h3>
              <p className="text-gray-600">Traditional shifting cultivation practiced sustainably by most tribes, rotating crops to maintain soil fertility.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-blue-700">Village Councils</h3>
              <p className="text-gray-600">Democratic governance through traditional village councils that resolve disputes and maintain social order.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-blue-700">Feast of Merit</h3>
              <p className="text-gray-600">Ceremonial feasts that demonstrate social status and strengthen community bonds across different tribes.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Challenges & Preservation */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Cultural Preservation</h2>
          <p className="text-lg text-gray-600 mb-8">
            While modernization brings new opportunities, Nagaland's tribal communities work tirelessly 
            to preserve their ancient traditions, languages, and cultural practices for future generations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-700">Preservation Efforts</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Cultural festivals and celebrations</li>
                <li>• Traditional craft workshops</li>
                <li>• Language documentation projects</li>
                <li>• Youth cultural programs</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-700">Modern Adaptations</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Integration with modern education</li>
                <li>• Tourism and cultural exchange</li>
                <li>• Digital documentation</li>
                <li>• Sustainable development practices</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TribalCommunities;