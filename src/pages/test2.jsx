import React, { useState, useEffect } from "react";
import NavBar from "../components/common/navBar";
import "./styles/iframe.css";

const Test2 = () => {
  const [isDelayed, setIsDelayed] = useState(true);

  useEffect(() => {
    // Simulate a 10-second delay before rendering
    const delay = 10000; // 10 seconds in milliseconds
    const timer = setTimeout(() => {
      setIsDelayed(false); // Set isDelayed to false after the delay
    }, delay);

    // Clean up the timer if the component unmounts
    return () => {
      clearTimeout(timer);
    };
  }, []); //

  return (
    <React.Fragment>
      {isDelayed ? (
        // Display nothing while delaying
        null
      ) : (
        // After the delay, render the entire page
        <div className="page-content">
          <NavBar active="test2" />
          <div className="content-wrapper" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div style={{ border: '2px solid red', padding: '20px', boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.2)' }}>
              Test page: Timeout
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Test2;
