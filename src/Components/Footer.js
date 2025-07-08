import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.content}>
        <p style={styles.text}>
          2025 &copy; Copyright <strong>ESTIMATE ROOF CALCULATOR</strong> Sample. All Rights Reserved.
        </p>
        <p style={styles.subText}>
          Powered by <strong>FeGate</strong>.
        </p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#292626',
    color: '#a2a2a2',
    height: '85px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 10px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    fontSize: '16px',
    position: 'relative',
    minWidth: '100vw,'
  },
  content: {
    textAlign: 'center',
  },
  text: {
    margin: 0,
  },
  subText: {
    margin: 0,
    fontSize: '12px',
    marginTop: '6px',
  },
};

export default Footer;
