import React, { useEffect } from "react";
import NavBar from "../components/common/navBar";
import "./styles/iframe.css";

const Test10 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <div className="page-content">
        <NavBar active="test10" />
        <div className="content-wrapper" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            
            {/* Main content inside a red box */}
            <div style={{ border: '2px solid red', padding: '20px', boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.2)' }}>
                Test page 1: xxx
            </div>

        </div>
      </div>
    </React.Fragment>
  );
};

export default Test10;
