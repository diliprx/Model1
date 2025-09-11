// import React from 'react';
// import { Waves, Mountain, Trees, Camera } from 'lucide-react';
// import HeroSlider from './HeroSlider';
// import { categoriesData, images } from '../assets/assets';
// import QuickStats from './QuickStats';

// const Home = () => {
//   const getCategoryIcon = (iconName) => {
//     const iconProps = { size: 24, className: "mb-2" };
//     switch(iconName) {
//       case 'Waves': return <Waves {...iconProps} />;
//       case 'Mountain': return <Mountain {...iconProps} />;
//       case 'Trees': return <Trees {...iconProps} />;
//       case 'Camera': return <Camera {...iconProps} />;
//       default: return null;
//     }
//   };

//   return (
//     <div>
//       <HeroSlider />
      
//       {/* Quick Info Section */}
//       {/* <div className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
//             {quickStats.map((stat, index) => (
//               <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
//                 <div className={`text-3xl font-bold text-${stat.color} mb-2`}>{stat.number}</div>
//                 <div className="text-gray-600">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div> */}
//       <QuickStats />

//       {/* Featured Categories */}
//       <div className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4">
//           <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
//             Explore by Category
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {categoriesData.map((category, index) => (
//               <div key={index} className="group cursor-pointer">
//                 <div className="relative overflow-hidden rounded-lg">
//                   <img 
//                     src={category.image}
//                     alt={category.title}
//                     className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
//                   <div className="absolute bottom-4 left-4 text-white">
//                     {getCategoryIcon(category.icon)}
//                     <h3 className="text-xl font-bold mb-1">{category.title}</h3>
//                     <p className="text-sm opacity-90">{category.subtitle}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React from 'react';
import { Waves, Mountain, Trees, Camera } from 'lucide-react';
import HeroSlider from './HeroSlider';
import { categoriesData } from '../assets/assets';
import QuickStats from './QuickStats';

const Home = ({ setCurrentPage }) => {
  const getCategoryIcon = (iconName) => {
    const iconProps = { size: 24, className: "mb-2" };
    switch(iconName) {
      case 'Waves': return <Waves {...iconProps} />;
      case 'Mountain': return <Mountain {...iconProps} />;
      case 'Trees': return <Trees {...iconProps} />;
      case 'Camera': return <Camera {...iconProps} />;
      default: return null;
    }
  };

  return (
    <div>
      <HeroSlider />
      
      {/* Quick Stats Section with Navigation */}
      <QuickStats setCurrentPage={setCurrentPage} />

      {/* Featured Categories */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Explore by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categoriesData.map((category, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src={category.image}
                    alt={category.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    {getCategoryIcon(category.icon)}
                    <h3 className="text-xl font-bold mb-1">{category.title}</h3>
                    <p className="text-sm opacity-90">{category.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;