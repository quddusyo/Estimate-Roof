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
      <h2 style={styles.title}>Estimate Roof Calculator Sample</h2>
      <div style={styles.section}>
        <label style={styles.label}>
          Roof Size (sq. ft):
          <input
            type="number"
            placeholder="e.g. 2000"
            value={squareFeet}
            onChange={(e) => setSquareFeet(e.target.value)}
            style={styles.input}
          />
        </label>

        <label style={styles.label}>
          Damage Level:
          <select
            value={damageLevel}
            onChange={(e) => setDamageLevel(e.target.value)}
            style={styles.select}
          >
            <option value="none">None</option>
            <option value="minor">Minor (+$500)</option>
            <option value="moderate">Moderate (+$1,000)</option>
            <option value="severe">Severe (+$2,000)</option>
          </select>
        </label>
      </div>

      <div style={styles.section}>
        <p style={styles.subheading}>Additional Services:</p>
        <div style={styles.checkboxGroup}>
          <label style={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={services.gutter}
              onChange={() => handleCheckboxChange('gutter')}
            />
            Gutter Cleaning (+$150)
          </label>
          <label style={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={services.shingles}
              onChange={() => handleCheckboxChange('shingles')}
            />
            Shingle Replacement (+$700)
          </label>
          <label style={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={services.moss}
              onChange={() => handleCheckboxChange('moss')}
            />
            Moss Removal (+$300)
          </label>
        </div>
      </div>

      <button onClick={calculateQuote} style={styles.button}>
        Calculate Quote
      </button>

      {quote && (
        <div style={styles.result}>
          <strong>Estimated Quote:</strong>
          <p style={styles.quoteValue}>${quote}</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '32px',
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    maxWidth: '540px',
    margin: '50px auto',
    boxShadow: '0 12px 30px rgba(0,0,0,0.08)',
    fontFamily: 'Segoe UI, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  title: {
    fontSize: '24px',
    textAlign: 'center',
    marginBottom: '10px',
    color: '#333',
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '14px',
    color: '#555',
  },
  input: {
    marginTop: '6px',
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  select: {
    marginTop: '6px',
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  subheading: {
    fontWeight: '600',
    fontSize: '15px',
    color: '#444',
    marginBottom: '6px',
  },
  checkboxGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    paddingLeft: '4px',
  },
  checkboxLabel: {
    fontSize: '14px',
    color: '#444',
  },
  button: {
    padding: '12px 20px',
    fontSize: '16px',
    backgroundColor: '#2c7be5',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  result: {
    backgroundColor: '#f3f8ff',
    padding: '16px',
    borderRadius: '10px',
    textAlign: 'center',
    marginTop: '10px',
    border: '1px solid #cce0ff',
  },
  quoteValue: {
    fontSize: '20px',
    color: '#1d4ed8',
    marginTop: '6px',
    fontWeight: 'bold',
  },
};

export default RoofingQuoteCalculator;