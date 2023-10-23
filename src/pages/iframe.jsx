import React, { useEffect } from "react";
import NavBar from "../components/common/navBar";
import "./styles/iframe.css";

const Iframe = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <div className="page-content">
        <NavBar active="iframe" />
        <div className="content-wrapper" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            
            {/* Main content inside a red box */}
            <div style={{ border: '2px solid red', padding: '20px', boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.2)' }}>
                Main Content - This is the main frame content.
            </div>

            {/* iFrame label */}
            <div style={{ fontWeight: 'bold', marginTop: '20px' }}>
                This is an iFrame:
            </div>

            <iframe 
               src="https://httpstat.us/404" 
               title="404 iframe" 
               style={{ width: '300px', height: '200px', marginTop: '20px', border: '2px solid red' }} 
               onLoad={() => console.log('iframe loaded')}
               onError={() => console.log('iframe encountered an error')}>
            </iframe>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Iframe;
