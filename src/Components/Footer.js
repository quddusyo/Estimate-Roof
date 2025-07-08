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
    position: 'relative',
    width: '100vw',
    backgroundColor: '#292626',
    color: '#a2a2a2',
    padding: '0px 0',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    fontSize: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
    marginLeft: 0,
    alignSelf: 'stretch', // Make sure flexbox allows full width
    marginLeft: 'calc(-50vw + 50%)', // a trick to offset centering in flexbox if needed
    backgroundColor: '#292626',
    color: '#a2a2a2',
    padding: '20px 0',
    boxSizing: 'border-box',
  },
  content: {
    width: '100%',  // fill full width
    maxWidth: 'none', // no max width
    padding: '0',     // remove padding
    boxSizing: 'border-box',
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

