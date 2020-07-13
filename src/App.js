import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import InfoBlock from './components/InfoBlock/InfoBlock';
import ImageBlock from './components/ImageBlock/ImageBlock';

import './App.css';

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <InfoBlock />
        <ImageBlock />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
