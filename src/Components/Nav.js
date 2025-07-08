import React from 'react';
import logo from '../Assets/ERC_logo.png';

const Nav = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.innerContainer}>
        <a href="/" style={styles.link}>
          <div style={styles.title}>
            <img src={logo} alt="Estimate Roof Calculator" style={styles.logo} />
          </div>
        </a>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '120px',
    backgroundColor: '#ffffff',
    zIndex: 9999,
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    alignItems: 'center',
    padding: '0 24px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  innerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
  },
  link: {
    textDecoration: 'none',
    color: '#000000',
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    height: '80px',
    width: 'auto',
  },
};

export default Nav;

