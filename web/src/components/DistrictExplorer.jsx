// import React, { useState } from 'react';
// import { MapPin, Camera, Waves, Mountain, Trees, ChevronDown, Filter } from 'lucide-react';
// import { districtData } from '../assets/assets';

// const DistrictExplorer = () => {
//   const [selectedDistrict, setSelectedDistrict] = useState('');
//   const [proximityFilter, setProximityFilter] = useState(false);
//   const [maxDistance, setMaxDistance] = useState(25);
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const filteredActivities = selectedDistrict && districtData[selectedDistrict] 
//     ? districtData[selectedDistrict].activities.filter(activity => 
//         !proximityFilter || activity.distance <= maxDistance
//       )
//     : [];

//   const getActivityIcon = (type) => {
//     switch(type) {
//       case 'waterfall': return <Waves className="text-blue-500" size={20} />;
//       case 'heritage': return <Mountain className="text-purple-500" size={20} />;
//       case 'wildlife': return <Trees className="text-green-500" size={20} />;
//       case 'attraction': return <Camera className="text-orange-500" size={20} />;
//       default: return <MapPin className="text-gray-500" size={20} />;
//     }
//   };

//   return (
//     <div className="pt-20 min-h-screen bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 py-16">
//         <div className="text-center mb-12">
//           <h1 className="text-5xl font-bold text-gray-800 mb-4">Explore Districts</h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Discover activities and attractions in all 24 districts of Jharkhand
//           </p>
//         </div>

//         {/* Filters */}
//         <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {/* District Dropdown */}
//             <div className="relative">
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Select District
//               </label>
//               <div className="relative">
//                 <button
//                   onClick={() => setDropdownOpen(!dropdownOpen)}
//                   className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-left  flex justify-between items-center"
//                 >
//                   <span className={selectedDistrict ? 'text-gray-900' : 'text-gray-500'}>
//                     {selectedDistrict || 'Choose a district...'}
//                   </span>
//                   <ChevronDown size={20} />
//                 </button>
                
//                 {dropdownOpen && (
//                   <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
//                     {Object.keys(districtData).map((district) => (
//                       <button
//                         key={district}
//                         onClick={() => {
//                           setSelectedDistrict(district);
//                           setDropdownOpen(false);
//                         }}
//                         className="w-full text-left px-4 py-2 hover:bg-blue-50 focus:bg-blue-50"
//                       >
//                         {district}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Proximity Filter */}
//             <div>
//               <label className="flex items-center space-x-3 mt-7">
//                 <input
//                   type="checkbox"
//                   checked={proximityFilter}
//                   onChange={(e) => setProximityFilter(e.target.checked)}
//                   className="w-5 h-5 text-green-600 rounded focus:ring-green-500"
//                 />
//                 <span className="text-gray-700">Within {maxDistance} km radius</span>
//               </label>
//             </div>

//             {/* Distance Slider */}
//             {proximityFilter && (
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Maximum Distance: {maxDistance} km
//                 </label>
//                 <input
//                   type="range"
//                   min="5"
//                   max="50"
//                   value={maxDistance}
//                   onChange={(e) => setMaxDistance(parseInt(e.target.value))}
//                   className="w-full"
//                 />
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Activities Grid */}
//         {selectedDistrict && (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {filteredActivities.map((activity, index) => (
//               <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
//                 <div className="p-6">
//                   <div className="flex items-start justify-between mb-4">
                    
//                     <div className="flex items-center space-x-3">
//                       {getActivityIcon(activity.type)}
//                       <h3 className="text-xl font-bold text-gray-800">{activity.name}</h3>
//                     </div>
//                     <div className="flex items-center text-sm text-gray-500">
//                       <MapPin size={16} className="mr-1" />
//                       {activity.distance} km
//                     </div>
//                   </div>

//                   {activity.height && (
//                     <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm inline-block mb-3">
//                       Height: {activity.height}
//                     </div>
//                   )}

//                   {activity.area && (
//                     <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm inline-block mb-3">
//                       Area: {activity.area}
//                     </div>
//                   )}

//                   {activity.significance && (
//                     <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm inline-block mb-3">
//                       {activity.significance}
//                     </div>
//                   )}

//                   <p className="text-gray-600 text-sm mb-4">{activity.description}</p>

//                   <div className="flex items-center justify-between">
//                     <span className={`px-3 py-1 rounded-full text-sm ${
//                       activity.type === 'waterfall' ? 'bg-blue-100 text-blue-800' :
//                       activity.type === 'heritage' ? 'bg-purple-100 text-purple-800' :
//                       activity.type === 'wildlife' ? 'bg-green-100 text-green-800' :
//                       'bg-orange-100 text-orange-800'
//                     }`}>
//                       {activity.type.charAt(0).toUpperCase() + activity.type.slice(1)}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//         {selectedDistrict && filteredActivities.length === 0 && (
//           <div className="text-center py-12">
//             <Filter className="mx-auto text-gray-400 mb-4" size={48} />
//             <h3 className="text-xl font-semibold text-gray-600 mb-2">No activities found</h3>
//             <p className="text-gray-500">Try adjusting your distance filter or select a different district.</p>
//           </div>
//         )}

//         {!selectedDistrict && (
//           <div className="text-center py-12">
//             <MapPin className="mx-auto text-gray-400 mb-4" size={48} />
//             <h3 className="text-xl font-semibold text-gray-600 mb-2">Select a District</h3>
//             <p className="text-gray-500">Choose a district from the dropdown to explore its activities and attractions.</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default DistrictExplorer;

// Enhanced DistrictExplorer.jsx - With Images

// import React, { useState } from 'react';
// import { MapPin, Camera, Waves, Mountain, Trees, ChevronDown, Filter } from 'lucide-react';
// import { districtData } from '../assets/assets';

// const DistrictExplorer = () => {
//   const [selectedDistrict, setSelectedDistrict] = useState('');
//   const [proximityFilter, setProximityFilter] = useState(false);
//   const [maxDistance, setMaxDistance] = useState(25);
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const filteredActivities = selectedDistrict && districtData[selectedDistrict] 
//     ? districtData[selectedDistrict].activities.filter(activity => 
//         !proximityFilter || activity.distance <= maxDistance
//       )
//     : [];

//   const getActivityIcon = (type) => {
//     switch(type) {
//       case 'waterfall': return <Waves className="text-blue-500" size={20} />;
//       case 'heritage': return <Mountain className="text-purple-500" size={20} />;
//       case 'wildlife': return <Trees className="text-green-500" size={20} />;
//       case 'attraction': return <Camera className="text-orange-500" size={20} />;
//       default: return <MapPin className="text-gray-500" size={20} />;
//     }
//   };

//   // Default placeholder image function
//   const getDefaultImage = (type) => {
//     switch(type) {
//       case 'waterfall': 
//         return 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
//       case 'heritage': 
//         return 'https://images.unsplash.com/photo-1582632205149-b6e5eebbf1b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
//       case 'wildlife': 
//         return 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
//       case 'attraction': 
//         return 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
//       default: 
//         return 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
//     }
//   };

//   return (
//     <div className="pt-20 min-h-screen bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 py-16">
//         <div className="text-center mb-12">
//           <h1 className="text-5xl font-bold text-gray-800 mb-4">Explore Districts</h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Discover activities and attractions in all 24 districts of Jharkhand
//           </p>
//         </div>

//         {/* Filters */}
//         <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {/* District Dropdown */}
//             <div className="relative">
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Select District
//               </label>
//               <div className="relative">
//                 <button
//                   onClick={() => setDropdownOpen(!dropdownOpen)}
//                   className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-left flex justify-between items-center hover:border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
//                 >
//                   <span className={selectedDistrict ? 'text-gray-900' : 'text-gray-500'}>
//                     {selectedDistrict || 'Choose a district...'}
//                   </span>
//                   <ChevronDown 
//                     size={20} 
//                     className={`transform transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
//                   />
//                 </button>
                
//                 {dropdownOpen && (
//                   <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
//                     {Object.keys(districtData).map((district) => (
//                       <button
//                         key={district}
//                         onClick={() => {
//                           setSelectedDistrict(district);
//                           setDropdownOpen(false);
//                         }}
//                         className="w-full text-left px-4 py-2 hover:bg-blue-50 focus:bg-blue-50 border-b border-gray-100 last:border-b-0 transition-colors"
//                       >
//                         {district}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Proximity Filter */}
//             <div>
//               <label className="flex items-center space-x-3 mt-7">
//                 <input
//                   type="checkbox"
//                   checked={proximityFilter}
//                   onChange={(e) => setProximityFilter(e.target.checked)}
//                   className="w-5 h-5 text-green-600 rounded focus:ring-green-500"
//                 />
//                 <span className="text-gray-700">Within {maxDistance} km radius</span>
//               </label>
//             </div>

//             {/* Distance Slider */}
//             {proximityFilter && (
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Maximum Distance: {maxDistance} km
//                 </label>
//                 <input
//                   type="range"
//                   min="5"
//                   max="50"
//                   value={maxDistance}
//                   onChange={(e) => setMaxDistance(parseInt(e.target.value))}
//                   className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
//                 />
//                 <div className="flex justify-between text-xs text-gray-500 mt-1">
//                   <span>5km</span>
//                   <span>50km</span>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Activities Grid */}
//         {selectedDistrict && (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {filteredActivities.map((activity, index) => (
//               <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
//                 {/* Image Section */}
//                 <div className="relative h-48 overflow-hidden">
//                   <img 
//                     src={activity.image || getDefaultImage(activity.type)}
//                     alt={activity.name}
//                     className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
//                     onError={(e) => {
//                       // Fallback to default image if the activity image fails to load
//                       e.target.src = getDefaultImage(activity.type);
//                     }}
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
//                   {/* Activity Type Badge */}
//                   <div className="absolute top-4 left-4">
//                     <span className={`px-3 py-1 rounded-full text-sm font-medium ${
//                       activity.type === 'waterfall' ? 'bg-blue-500 text-white' :
//                       activity.type === 'heritage' ? 'bg-purple-500 text-white' :
//                       activity.type === 'wildlife' ? 'bg-green-500 text-white' :
//                       'bg-orange-500 text-white'
//                     }`}>
//                       {activity.type.charAt(0).toUpperCase() + activity.type.slice(1)}
//                     </span>
//                   </div>
                  
//                   {/* Distance Badge */}
//                   <div className="absolute top-4 right-4">
//                     <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-800 flex items-center">
//                       <MapPin size={14} className="mr-1" />
//                       {activity.distance} km
//                     </div>
//                   </div>
//                 </div>

//                 {/* Content Section */}
//                 <div className="p-6">
//                   <div className="flex items-start justify-between mb-4">
//                     <div className="flex items-center space-x-3">
//                       {getActivityIcon(activity.type)}
//                       <h3 className="text-xl font-bold text-gray-800">{activity.name}</h3>
//                     </div>
//                   </div>

//                   {/* Attribute Badges */}
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {activity.height && (
//                       <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
//                         Height: {activity.height}
//                       </div>
//                     )}

//                     {activity.area && (
//                       <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
//                         Area: {activity.area}
//                       </div>
//                     )}

//                     {activity.significance && (
//                       <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
//                         {activity.significance}
//                       </div>
//                     )}
//                   </div>

//                   <p className="text-gray-600 text-sm mb-4 line-clamp-3">{activity.description}</p>

//                   {/* View Details Button */}
//                   <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2">
//                     <Camera size={16} />
//                     <span>View Details</span>
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Empty States */}
//         {selectedDistrict && filteredActivities.length === 0 && (
//           <div className="text-center py-12">
//             <Filter className="mx-auto text-gray-400 mb-4" size={48} />
//             <h3 className="text-xl font-semibold text-gray-600 mb-2">No activities found</h3>
//             <p className="text-gray-500">Try adjusting your distance filter or select a different district.</p>
//           </div>
//         )}

//         {!selectedDistrict && (
//           <div className="text-center py-12">
//             <MapPin className="mx-auto text-gray-400 mb-4" size={48} />
//             <h3 className="text-xl font-semibold text-gray-600 mb-2">Select a District</h3>
//             <p className="text-gray-500">Choose a district from the dropdown to explore its activities and attractions.</p>
//           </div>
//         )}
//       </div>

//       {/* Custom CSS for slider */}
//       <style jsx>{`
//         .slider::-webkit-slider-thumb {
//           appearance: none;
//           height: 20px;
//           width: 20px;
//           border-radius: 50%;
//           background: #10b981;
//           cursor: pointer;
//         }
//         .slider::-moz-range-thumb {
//           height: 20px;
//           width: 20px;
//           border-radius: 50%;
//           background: #10b981;
//           cursor: pointer;
//           border: none;
//         }
//         .line-clamp-3 {
//           display: -webkit-box;
//           -webkit-line-clamp: 3;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default DistrictExplorer;

import React, { useState } from 'react';
import { MapPin, Camera, Waves, Mountain, Trees, ChevronDown, Filter, ArrowLeft, Clock, Star, MapIcon } from 'lucide-react';
import { districtData } from '../assets/assets';

const DistrictExplorer = () => {
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [proximityFilter, setProximityFilter] = useState(false);
  const [maxDistance, setMaxDistance] = useState(25);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const filteredActivities = selectedDistrict && districtData[selectedDistrict] 
    ? districtData[selectedDistrict].activities.filter(activity => 
        !proximityFilter || activity.distance <= maxDistance
      )
    : [];

  const getActivityIcon = (type) => {
    switch(type) {
      case 'waterfall': return <Waves className="text-blue-500" size={20} />;
      case 'heritage': return <Mountain className="text-purple-500" size={20} />;
      case 'wildlife': return <Trees className="text-green-500" size={20} />;
      case 'attraction': return <Camera className="text-orange-500" size={20} />;
      default: return <MapPin className="text-gray-500" size={20} />;
    }
  };

  // Default placeholder image function
  const getDefaultImage = (type) => {
    switch(type) {
      case 'waterfall': 
        return 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
      case 'heritage': 
        return 'https://images.unsplash.com/photo-1582632205149-b6e5eebbf1b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
      case 'wildlife': 
        return 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
      case 'attraction': 
        return 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
      default: 
        return 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
    }
  };

  const handleViewDetails = (activity) => {
    setSelectedActivity(activity);
  };

  const handleBackToList = () => {
    setSelectedActivity(null);
  };

  // Detail View Component
  if (selectedActivity) {
    return (
      <div className="pt-20 min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Back Button */}
          <button
            onClick={handleBackToList}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="font-medium">Back to {selectedDistrict} Activities</span>
          </button>

          {/* Detail Content */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            {/* Header Section */}
            <div className="relative h-96 overflow-hidden">
              <img 
                src={selectedActivity.image || getDefaultImage(selectedActivity.type)}
                alt={selectedActivity.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = getDefaultImage(selectedActivity.type);
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              
              {/* Title Overlay */}
              <div className="absolute bottom-8 left-8 text-white">
                <div className="flex items-center space-x-3 mb-2">
                  {getActivityIcon(selectedActivity.type)}
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    selectedActivity.type === 'waterfall' ? 'bg-blue-500' :
                    selectedActivity.type === 'heritage' ? 'bg-purple-500' :
                    selectedActivity.type === 'wildlife' ? 'bg-green-500' :
                    'bg-orange-500'
                  }`}>
                    {selectedActivity.type.charAt(0).toUpperCase() + selectedActivity.type.slice(1)}
                  </span>
                </div>
                <h1 className="text-4xl font-bold mb-2">{selectedActivity.name}</h1>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <MapPin size={16} />
                    <span>{selectedActivity.distance} km from {selectedDistrict}</span>
                  </div>
                  {selectedActivity.bestTime && (
                    <div className="flex items-center space-x-1">
                      <Clock size={16} />
                      <span>Best: {selectedActivity.bestTime}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Description */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">About</h2>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {selectedActivity.fullDescription || selectedActivity.description}
                  </p>
                </div>

                {/* Activities */}
                {selectedActivity.activities && (
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Things to Do</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedActivity.activities.map((activity, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                        >
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Facilities */}
                {selectedActivity.facilities && (
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Facilities Available</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedActivity.facilities.map((facility, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Star size={16} className="text-green-500" />
                          <span className="text-gray-600">{facility}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Quick Info */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Quick Info</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Distance</span>
                      <span className="font-medium">{selectedActivity.distance} km</span>
                    </div>
                    
                    {selectedActivity.height && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Height</span>
                        <span className="font-medium">{selectedActivity.height}</span>
                      </div>
                    )}

                    {selectedActivity.area && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Area</span>
                        <span className="font-medium">{selectedActivity.area}</span>
                      </div>
                    )}

                    {selectedActivity.significance && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Significance</span>
                        <span className="font-medium">{selectedActivity.significance}</span>
                      </div>
                    )}

                    {selectedActivity.bestTime && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Best Time</span>
                        <span className="font-medium">{selectedActivity.bestTime}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Location Card */}
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <MapIcon size={24} />
                    <h3 className="text-lg font-semibold">Location</h3>
                  </div>
                  <p className="text-blue-100 mb-4">
                    Located in {selectedDistrict} district, {selectedActivity.distance} km from the city center.
                  </p>
                  <button className="w-full bg-white text-blue-600 py-2 px-4 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                    Get Directions
                  </button>
                </div>

                {/* Visit Tips */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-yellow-800 mb-3">Visit Tips</h3>
                  <ul className="text-yellow-700 text-sm space-y-2">
                    <li>• Carry water and snacks for the journey</li>
                    <li>• Best visited during {selectedActivity.bestTime || 'favorable weather'}</li>
                    <li>• Wear comfortable walking shoes</li>
                    <li>• Respect local customs and environment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main List View Component
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Explore Districts</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover activities and attractions in all 24 districts of Jharkhand
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* District Dropdown */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select District
              </label>
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-left flex justify-between items-center hover:border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                >
                  <span className={selectedDistrict ? 'text-gray-900' : 'text-gray-500'}>
                    {selectedDistrict || 'Choose a district...'}
                  </span>
                  <ChevronDown 
                    size={20} 
                    className={`transform transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                
                {dropdownOpen && (
                  <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                    {Object.keys(districtData).map((district) => (
                      <button
                        key={district}
                        onClick={() => {
                          setSelectedDistrict(district);
                          setDropdownOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 hover:bg-blue-50 focus:bg-blue-50 border-b border-gray-100 last:border-b-0 transition-colors"
                      >
                        {district}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Proximity Filter */}
            <div>
              <label className="flex items-center space-x-3 mt-7">
                <input
                  type="checkbox"
                  checked={proximityFilter}
                  onChange={(e) => setProximityFilter(e.target.checked)}
                  className="w-5 h-5 text-green-600 rounded focus:ring-green-500"
                />
                <span className="text-gray-700">Within {maxDistance} km radius</span>
              </label>
            </div>

            {/* Distance Slider */}
            {proximityFilter && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Maximum Distance: {maxDistance} km
                </label>
                <input
                  type="range"
                  min="5"
                  max="50"
                  value={maxDistance}
                  onChange={(e) => setMaxDistance(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>5km</span>
                  <span>50km</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Activities Grid */}
        {selectedDistrict && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredActivities.map((activity, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={activity.image || getDefaultImage(activity.type)}
                    alt={activity.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    onError={(e) => {
                      // Fallback to default image if the activity image fails to load
                      e.target.src = getDefaultImage(activity.type);
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Activity Type Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      activity.type === 'waterfall' ? 'bg-blue-500 text-white' :
                      activity.type === 'heritage' ? 'bg-purple-500 text-white' :
                      activity.type === 'wildlife' ? 'bg-green-500 text-white' :
                      'bg-orange-500 text-white'
                    }`}>
                      {activity.type.charAt(0).toUpperCase() + activity.type.slice(1)}
                    </span>
                  </div>
                  
                  {/* Distance Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-800 flex items-center">
                      <MapPin size={14} className="mr-1" />
                      {activity.distance} km
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      {getActivityIcon(activity.type)}
                      <h3 className="text-xl font-bold text-gray-800">{activity.name}</h3>
                    </div>
                  </div>

                  {/* Attribute Badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {activity.height && (
                      <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        Height: {activity.height}
                      </div>
                    )}

                    {activity.area && (
                      <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        Area: {activity.area}
                      </div>
                    )}

                    {activity.significance && (
                      <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                        {activity.significance}
                      </div>
                    )}
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{activity.description}</p>

                  {/* View Details Button */}
                  <button 
                    onClick={() => handleViewDetails(activity)}
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Camera size={16} />
                    <span>View Details</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty States */}
        {selectedDistrict && filteredActivities.length === 0 && (
          <div className="text-center py-12">
            <Filter className="mx-auto text-gray-400 mb-4" size={48} />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No activities found</h3>
            <p className="text-gray-500">Try adjusting your distance filter or select a different district.</p>
          </div>
        )}

        {!selectedDistrict && (
          <div className="text-center py-12">
            <MapPin className="mx-auto text-gray-400 mb-4" size={48} />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">Select a District</h3>
            <p className="text-gray-500">Choose a district from the dropdown to explore its activities and attractions.</p>
          </div>
        )}
      </div>

      {/* Custom CSS for slider */}
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #10b981;
          cursor: pointer;
        }
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #10b981;
          cursor: pointer;
          border: none;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default DistrictExplorer;