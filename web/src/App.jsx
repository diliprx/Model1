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

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import DistrictExplorer from './components/DistrictExplorer';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Districts from './components/District';
import ForestCover from './components/ForestCover';
import TribalCommunities from './components/TribalCommunities';
import Languages from './components/Language';

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