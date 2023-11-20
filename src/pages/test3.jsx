import React, { useEffect } from 'react';
import NavBar from '../components/common/navBar';
import './styles/iframe.css';

const Test3 = () => {
  useEffect(() => {
    document.title = '404 Page Not Found Error'; // Set the tab title
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <div className='page-content'>
        <NavBar active='test3' />
        <div className='content-wrapper' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          
          {/* 404 Error Content */}
          <div style={{ border: '2px solid red', padding: '20px', textAlign: 'center', boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.2)' }}>
            <h1 style={{ fontSize: '48px', color: 'red' }}>404</h1>
            <p style={{ fontSize: '24px' }}>Page Not Found Error</p>
            <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
            <a href="/" style={{ textDecoration: 'none', color: 'blue' }}>Go to Homepage</a>
          </div>

        </div>
      </div>
    </React.Fragment>
  );
};

export default Test3;
