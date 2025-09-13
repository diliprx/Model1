// import React, { useState } from 'react';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import DistrictExplorer from './components/DistrictExplorer';
// import Gallery from './components/Gallery';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

// const JharkhandTourismApp = () => {
//   const [currentPage, setCurrentPage] = useState('home');
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const renderCurrentPage = () => {
//     switch (currentPage) {
//       case 'home':
//         return <Home />;
//       case 'districts':
//         return <DistrictExplorer />;
//       case 'gallery':
//         return <Gallery />;
//       case 'contact':
//         return <Contact />;
//       default:
//         return <Home />;
//     }
//   };

//   return (
//     <div className="min-h-screen">
//       <Navbar 
//         currentPage={currentPage}
//         setCurrentPage={setCurrentPage}
//         mobileMenuOpen={mobileMenuOpen}
//         setMobileMenuOpen={setMobileMenuOpen}
//       />
//       {renderCurrentPage()}
//       <Footer setCurrentPage={setCurrentPage} />
//     </div>
//   );
// };

// export default JharkhandTourismApp;
import { useState } from 'react';
import Contact from './components/Contact';
import Districts from './components/District';
import DistrictExplorer from './components/DistrictExplorer';
import Footer from './components/Footer';
import ForestCover from './components/ForestCover';
import Gallery from './components/Gallery';
import Home from './components/Home';
import Languages from './components/Language';
import Navbar from './components/Navbar';
import TribalCommunities from './components/TribalCommunities';
const JharkhandTourismApp = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'districts':
        return <DistrictExplorer />;
      case 'gallery':
        return <Gallery />;
      case 'contact':
        return <Contact />;
      // QuickStats sub-pages
      case 'districts-detail':
        return <Districts setCurrentPage={setCurrentPage} />;
      case 'forest-cover':
        return <ForestCover setCurrentPage={setCurrentPage} />;
      case 'tribal-communities':
        return <TribalCommunities setCurrentPage={setCurrentPage} />;
      case 'languages':
        return <Languages setCurrentPage={setCurrentPage} />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen">
              <a href="https://dillip-kumar.vercel.app/" className="md:flex hidden h-[38px] items-center justify-center text-[16px] px-5 absolute right-[1%] bg-blue-300 top-10 rounded-lg z-150">🗺️ Map</a>
      <Navbar 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {renderCurrentPage()}
      <Footer setCurrentPage={setCurrentPage} />
  
    </div>
  );
};

export default JharkhandTourismApp;