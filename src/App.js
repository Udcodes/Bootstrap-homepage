import React, { Fragment } from 'react';
import Banner from './components/Banner';
import LatestSection from './components/Main/LatestSection';
import PopularSection from './components/Main/PopularSection';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <Fragment>
      <NavBar />
      <Banner />
      <LatestSection />
      <PopularSection />
    </Fragment>
  );
};

export default App;
