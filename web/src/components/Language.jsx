import React from 'react';
import { MessageCircle, BookOpen, Globe, Users } from 'lucide-react';
import { languageGroups} from '../assets/assets';

const Languages = () => {
//   const languageGroups = [
//     {
//       name: "Angami-Pochuri",
//       languages: ["Angami", "Chokri", "Kheza", "Pochuri"],
//       speakers: "15%",
//       regions: ["Kohima", "Phek", "Dimapur"],
//       description: "One of the major language groups with rich literary traditions.",
//       image: "/api/placeholder/300/200"
//     },
//     {
//       name: "Ao",
//       languages: ["Ao", "Lotha", "Sangtam"],
//       speakers: "12%",
//       regions: ["Mokokchung", "Wokha", "Tuensang"],
//       description: "Known for early adoption of written script and literature development.",
//       image: "/api/placeholder/300/200"
//     },
//     {
//       name: "Konyak",
//       languages: ["Konyak", "Chang", "Phom"],
//       speakers: "18%",
//       regions: ["Mon", "Tuensang", "Longleng"],
//       description: "Diverse group with multiple dialects and rich oral traditions.",
//       image: "/api/placeholder/300/200"
//     },
//     {
//       name: "Zeme",
//       languages: ["Zeme", "Liangmai", "Rongmei"],
//       speakers: "8%",
//       regions: ["Peren", "Tamenglong"],
//       description: "Tibeto-Burman languages with unique grammatical structures.",
//       image: "/api/placeholder/300/200"
//     },
//     {
//       name: "Kukish",
//       languages: ["Thadou", "Paite", "Vaiphei"],
//       speakers: "7%",
//       regions: ["Chandel", "Churachandpur"],
//       description: "Part of the larger Kuki-Chin language family.",
//       image: "/api/placeholder/300/200"
//     },
//     {
//       name: "Tangkhul",
//       languages: ["Tangkhul", "Maram", "Poumai"],
//       speakers: "10%",
//       regions: ["Ukhrul", "Senapati", "Noney"],
//       description: "Naga languages with complex tone systems and rich folklore.",
//       image: "/api/placeholder/300/200"
//     }
//   ];

  const languageStats = [
    {
      title: "Major Languages",
      count: "15+",
      description: "Officially recognized tribal languages",
      icon: <MessageCircle className="text-purple-600" size={24} />
    },
    {
      title: "Dialects",
      count: "60+",
      description: "Various dialects and sub-dialects",
      icon: <Globe className="text-purple-600" size={24} />
    },
    {
      title: "Scripts",
      count: "3",
      description: "Roman, Devanagari, and traditional scripts",
      icon: <BookOpen className="text-purple-600" size={24} />
    },
    {
      title: "Language Families",
      count: "2",
      description: "Sino-Tibetan and Austroasiatic families",
      icon: <Users className="text-purple-600" size={24} />
    }
  ];

  const educationLanguages = [
    {
      language: "English",
      status: "Official & Medium of Instruction",
      usage: "Government, Education, Business",
      level: "State-wide"
    },
    {
      language: "Hindi",
      status: "Associate Official",
      usage: "Inter-state Communication",
      level: "Administrative"
    },
    {
      language: "Nagamese",
      status: "Lingua Franca",
      usage: "Inter-tribal Communication",
      level: "Common"
    },
    {
      language: "Tribal Languages",
      status: "Heritage Languages",
      usage: "Cultural & Religious Practices",
      level: "Community"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Back Button */}
          {/* <button 
            onClick={() => setCurrentPage('home')}
            className="mb-6 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-colors duration-300 flex items-center gap-2"
          >
            ← Back to Home
          </button> */}
          <div className="text-center">
            <h1 className="text-5xl pt-[140px] font-bold mb-4">15+ Languages</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Jharkhand is a culturally vibrant state known for its rich tribal heritage, 
                with 32 recognized tribal communities speaking diverse languages such as 
                Mundari, Ho, Santhali, Kurukh, Kharia, and Nagpuri, reflecting its deep 
                linguistic and cultural diversity.
           </p>
          </div>
        </div>
      </div>

      {/* Language Statistics */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Language Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {languageStats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-purple-50 rounded-lg">
                <div className="mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-purple-600 mb-2">{stat.count}</div>
                <div className="font-semibold text-gray-800 mb-2">{stat.title}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Language Groups */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Major Language Groups</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {languageGroups.map((group, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={group.image}
                  alt={group.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-800">{group.name}</h3>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {group.speakers}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm">{group.description}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-semibold text-gray-700">Languages: </span>
                      <span className="text-gray-600">{group.languages.join(", ")}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Regions: </span>
                      <span className="text-gray-600">{group.regions.join(", ")}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Language Usage */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Language Usage in Jharkhand</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {educationLanguages.map((lang, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-300">
                <h3 className="text-lg font-bold text-gray-800 mb-3">{lang.language}</h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-semibold text-purple-700">Status: </span>
                    <span className="text-gray-600">{lang.status}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-purple-700">Usage: </span>
                    <span className="text-gray-600">{lang.usage}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-purple-700">Level: </span>
                    <span className="text-gray-600">{lang.level}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Language Preservation */}
      <div className="py-16 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Language Preservation Efforts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-purple-700">Documentation Projects</h3>
              <p className="text-gray-600">Linguistic scholars and communities work together to document endangered languages and create dictionaries.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-purple-700">Mother Tongue Education</h3>
              <p className="text-gray-600">Schools incorporate tribal languages in early education to strengthen linguistic foundations.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-purple-700">Digital Archives</h3>
              <p className="text-gray-600">Creating digital repositories of oral literature, songs, and folklore in native languages.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Challenges & Future */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Challenges & Future</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-red-600">Challenges</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-bold text-gray-800 mb-2">Language Shift</h4>
                  <p className="text-gray-600 text-sm">Younger generations increasingly using English and Hindi over tribal languages.</p>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-bold text-gray-800 mb-2">Limited Documentation</h4>
                  <p className="text-gray-600 text-sm">Many dialects lack comprehensive written records or standardized scripts.</p>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-bold text-gray-800 mb-2">Educational Gap</h4>
                  <p className="text-gray-600 text-sm">Limited availability of educational materials in tribal languages.</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-green-600">Future Initiatives</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-bold text-gray-800 mb-2">Technology Integration</h4>
                  <p className="text-gray-600 text-sm">Developing apps and digital tools for language learning and preservation.</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-bold text-gray-800 mb-2">Community Programs</h4>
                  <p className="text-gray-600 text-sm">Strengthening community-based language transmission programs.</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-bold text-gray-800 mb-2">Academic Research</h4>
                  <p className="text-gray-600 text-sm">Increasing linguistic research and collaboration with international institutions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-gradient-to-r from-purple-600 to-purple-800 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Preserving Our Linguistic Heritage</h2>
          <p className="text-lg opacity-90 mb-8">
            Every language carries the wisdom of generations. Join us in celebrating and preserving 
            the linguistic diversity that makes Nagaland unique.
          </p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
            Learn More About Language Preservation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Languages;