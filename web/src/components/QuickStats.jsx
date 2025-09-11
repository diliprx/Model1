// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { quickStats } from '../assets/assets';

// const QuickStats = () => {
//   const navigate = useNavigate();

//   const handleStatClick = (route) => {
//     navigate(route);
//   };

//   return (
//     <div className="py-16 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
//           {quickStats.map((stat, index) => (
//             <div 
//               key={index} 
//               className="bg-white p-6 rounded-lg shadow-lg cursor-pointer transform transition-transform hover:scale-105 hover:shadow-xl"
//               onClick={() => handleStatClick(stat.route)}
//             >
//               <div className={`text-3xl font-bold text-${stat.color} mb-2`}>{stat.number}</div>
//               <div className="text-gray-600">{stat.label}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QuickStats;

import React from 'react';

const QuickStats = ({ setCurrentPage }) => {
  const quickStats = [
    { 
      number: '24', 
      label: 'Districts', 
      color: 'orange-600',
      page: 'districts-detail',
      description: 'Administrative divisions'
    },
    { 
      number: '29%', 
      label: 'Forest Cover', 
      color: 'green-600',
      page: 'forest-cover',
      description: 'Protected natural areas'
    },
    { 
      number: '32', 
      label: 'Tribal Communities', 
      color: 'blue-600',
      page: 'tribal-communities',
      description: 'Indigenous groups'
    },
    { 
      number: '15+', 
      label: 'Languages', 
      color: 'purple-600',
      page: 'languages',
      description: 'Native languages spoken'
    }
  ];

  const handleStatClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {quickStats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
              onClick={() => handleStatClick(stat.page)}
            >
              <div className={`text-3xl font-bold text-${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                {stat.number}
              </div>
              <div className="text-gray-800 font-semibold text-lg mb-1">
                {stat.label}
              </div>
              <div className="text-gray-500 text-sm">
                {stat.description}
              </div>
              <div className={`w-0 h-0.5 bg-${stat.color} group-hover:w-full transition-all duration-300 mx-auto mt-3`}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickStats;