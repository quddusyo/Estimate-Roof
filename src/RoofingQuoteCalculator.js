import React, { useState } from 'react';

const RoofingQuoteCalculator = () => {
  const [squareFeet, setSquareFeet] = useState('');
  const [damageLevel, setDamageLevel] = useState('none');
  const [services, setServices] = useState({
    gutter: false,
    shingles: false,
    moss: false,
  });
  const [quote, setQuote] = useState(null);

  const handleCheckboxChange = (service) => {
    setServices({ ...services, [service]: !services[service] });
  };

  const calculateQuote = () => {
    const sqft = parseFloat(squareFeet);
    if (!sqft || sqft <= 0) {
      alert("Please enter a valid square footage.");
      return;
    }

    let baseCost = sqft * 4;

    let damageCost = 0;
    switch (damageLevel) {
      case 'minor':
        damageCost = 500;
        break;
      case 'moderate':
        damageCost = 1000;
        break;
      case 'severe':
        damageCost = 2000;
        break;
      default:
        damageCost = 0;
    }

    let serviceCost = 0;
    if (services.gutter) serviceCost += 150;
    if (services.shingles) serviceCost += 700;
    if (services.moss) serviceCost += 300;

    const total = (baseCost + damageCost + serviceCost).toFixed(2);
    setQuote(total);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>🏠 Roofing Quote Calculator</h2>
      <label>
        Roof Size (sq. ft):
        <input
          type="number"
          value={squareFeet}
          onChange={(e) => setSquareFeet(e.target.value)}
        />
      </label>

      <label>
        Damage Level:
        <select value={damageLevel} onChange={(e) => setDamageLevel(e.target.value)}>
          <option value="none">None</option>
          <option value="minor">Minor (+$500)</option>
          <option value="moderate">Moderate (+$1,000)</option>
          <option value="severe">Severe (+$2,000)</option>
        </select>
      </label>

      <fieldset style={styles.checkboxGroup}>
        <legend>Additional Services:</legend>
        <label>
          <input
            type="checkbox"
            checked={services.gutter}
            onChange={() => handleCheckboxChange('gutter')}
          />
          Gutter Cleaning (+$150)
        </label>
        <label>
          <input
            type="checkbox"
            checked={services.shingles}
            onChange={() => handleCheckboxChange('shingles')}
          />
          Shingle Replacement (+$700)
        </label>
        <label>
          <input
            type="checkbox"
            checked={services.moss}
            onChange={() => handleCheckboxChange('moss')}
          />
          Moss Removal (+$300)
        </label>
      </fieldset>

      <button onClick={calculateQuote}>Calculate Quote</button>

      {quote && (
        <div style={styles.result}>
          <strong>Estimated Quote: </strong>${quote}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '24px',
    backgroundColor: '#f8f8f8',
    borderRadius: '12px',
    maxWidth: '500px',
    margin: '40px auto',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  title: {
    textAlign: 'center',
    marginBottom: '12px',
  },
  checkboxGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    paddingLeft: '10px',
  },
  result: {
    marginTop: '20px',
    padding: '12px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    textAlign: 'center',
    border: '1px solid #ccc',
  },
};

export default RoofingQuoteCalculator;
