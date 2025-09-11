import React from 'react';
import { MapPin, Users, Building2, Calendar } from 'lucide-react';

const Districts = () => {
  const districtsData = [
    {
      name: "Kohima",
      population: "267,988",
      headquarters: "Kohima",
      established: "1957",
      area: "1,207 km²",
      description: "The capital district known for its rich history and the Battle of Kohima.",
      image: "/api/placeholder/300/200"
    },
    {
      name: "Dimapur",
      population: "378,811",
      headquarters: "Dimapur",
      established: "1997",
      area: "927 km²",
      description: "The commercial hub and gateway to Nagaland.",
      image: "/api/placeholder/300/200"
    },
    {
      name: "Mokokchung",
      population: "193,171",
      headquarters: "Mokokchung",
      established: "1957",
      area: "1,615 km²",
      description: "Known as the cultural center of the Ao Naga tribe.",
      image: "/api/placeholder/300/200"
    },
    {
      name: "Tuensang",
      population: "196,596",
      headquarters: "Tuensang",
      established: "1957",
      area: "4,228 km²",
      description: "The largest district by area, home to multiple tribal communities.",
      image: "/api/placeholder/300/200"
    },
    {
      name: "Mon",
      population: "250,260",
      headquarters: "Mon",
      established: "1973",
      area: "1,786 km²",
      description: "Known for the Konyak tribe and traditional headhunting culture.",
      image: "/api/placeholder/300/200"
    },
    {
      name: "Wokha",
      population: "166,239",
      headquarters: "Wokha",
      established: "1973",
      area: "1,628 km²",
      description: "Home to the Lotha tribe and Mount Tiyi.",
      image: "/api/placeholder/300/200"
    }
  ];

  return (
    <div className=" bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r h-[420px] from-orange-600 to-orange-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Back Button */}
          {/* <button 
            onClick={() => setCurrentPage('home')}
            className="mb-6 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-colors duration-300 flex items-center gap-2"
          >
            ← Back to Home
          </button> */}
          <div className="text-center ">
            <h1 className="text-5xl pt-[140px] font-bold mb-4">24 Districts of Jharkhand</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Discover the diverse districts that make up the beautiful state of Nagaland, 
              each with its unique culture, traditions, and natural beauty.
            </p>
          </div>
        </div>
      </div>

      {/* Districts Grid */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {districtsData.map((district, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={district.image}
                  alt={district.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{district.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{district.description}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-gray-700">
                      <Users size={16} className="mr-2 text-orange-600" />
                      <span>Population: {district.population}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Building2 size={16} className="mr-2 text-orange-600" />
                      <span>HQ: {district.headquarters}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <MapPin size={16} className="mr-2 text-orange-600" />
                      <span>Area: {district.area}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Calendar size={16} className="mr-2 text-orange-600" />
                      <span>Established: {district.established}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Show More Button */}
          <div className="text-center mt-12">
            <button  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
              View All Districts
            </button>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">District Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-orange-600 mb-2">24</div>
              <div className="text-gray-600">Total Districts</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-orange-600 mb-2">16,579</div>
              <div className="text-gray-600">Total Area (km²)</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-orange-600 mb-2">1.98M</div>
              <div className="text-gray-600">Total Population</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-orange-600 mb-2">16</div>
              <div className="text-gray-600">Major Tribes</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Districts;