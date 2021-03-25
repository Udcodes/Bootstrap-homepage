import React from 'react';
import { Container } from 'react-bootstrap';
import Banner from './components/Banner';
import Footer from './components/Footer';
import LatestThemeSection from './components/Main/LatestThemeSection';
import PopularThemeSection from './components/Main/PopularThemeSection';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Banner />
        <LatestThemeSection />
        <PopularThemeSection />
        <Footer />
      </Container>
    </>
  );
};

export default App;
