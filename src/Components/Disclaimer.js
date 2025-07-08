import React from 'react';

const Disclaimer = () => {
  return (
    <section style={styles.disclaimerBox && styles.mainContent}>
      <h3 style={styles.disclaimerTitle}> Disclaimer</h3>
      <p style={styles.disclaimerText}>
        This calculator uses built-in pricing estimates such as <strong>$4 per square foot</strong>,
        fixed service rates, and a simplified formula to help generate approximate roofing quotes.
        These numbers are intended as placeholders only.
      </p>
      <p style={styles.disclaimerText}>
        You can easily customize the pricing model and service logic in the source code to fit your
        specific business needs — whether it's roofing, HVAC, flooring, landscaping, or other
        service-based industries.
      </p>
      <p style={styles.disclaimerText}>
        For accurate assessments, please consult a certified professional.
      </p>
    </section>
  );
};

const styles = {
  mainContent: {
    marginTop: '120px',
    padding: '20px',
  },
  disclaimerBox: {
    backgroundColor: '#fff7e6',
    border: '1px solid #ffe58f',
    borderRadius: '12px',
    padding: '20px',
    marginBottom: '32px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
    fontFamily: 'Segoe UI, sans-serif',
  },
  disclaimerTitle: {
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '8px',
    color: '#ad6800',
  },
  disclaimerText: {
    fontSize: '14px',
    color: '#614700',
    lineHeight: '1.6',
    margin: '6px 0',
  },
};

export default Disclaimer;