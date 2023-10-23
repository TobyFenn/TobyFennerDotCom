import React, { useEffect } from "react";
import NavBar from "../components/common/navBar";
import "./styles/redirect1.css";

const Redirect1 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <div className="page-content">
        <NavBar active="redirect1" />
        <div className="content-wrapper" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div>one</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Redirect1;
