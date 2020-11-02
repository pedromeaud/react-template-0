import React from 'react';
import '../../App.css';
import Cards from '../Card/Cards';
import DeveloperSection from '../DeveloperSection/DeveloperSection';
import Footer from '../Footer/Footer';

function Home() {
  return (
    <>
      <DeveloperSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
