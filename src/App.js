import React from 'react';
import RoofingQuoteCalculator from './Components/RoofingQuoteCalculator';
import Disclaimer from './Components/Disclaimer';
import Footer from './Components/Footer';
import Nav from './Components/Nav';

function App() {
  return (
    <div style={styles.appContainer}>
      <Nav />
      <Disclaimer />
      <RoofingQuoteCalculator />
      <Footer />
    </div>
  );
}

const styles = {
  appContainer: {
    maxWidth: '720px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Segoe UI, sans-serif',
  },
};

export default App;