import React, { useEffect } from "react";
import NavBar from "../components/common/navBar";
import "./styles/privacy.css";

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <div className="page-content">
        <NavBar active="privacy" />
        <div className="content-wrapper" style={{ paddingTop: '50px' }}>
          <h2>Privacy Policy for FABLE Access Chrome Extension</h2>
          <p><strong>Effective Date:</strong> 10.22.2023</p>
          <p>I prioritize your privacy. This Privacy Policy outlines the types of information our extension might collect, and how I use, share, and secure that information. By using FABLE Access Chrome Extension, you agree to the terms and conditions of this Privacy Policy.</p>
          
          <h3>1. Information Collection</h3>
          <ul>
            <li><strong>Usage Data:</strong> FABLE Access Chrome Extension collects metrics related to website performance, including but not limited to Time To First Byte (TTFB), page load time, and the status code of a loaded web page.</li>
            <li><strong>Website URLs:</strong> FABLE Access Chrome Extension collects the URLs of the websites where it detects potential issues, for the sole purpose of reporting and analyzing the performance metrics.</li>
          </ul>
          
          <h3>2. Use of Collected Data</h3>
          <p>I use the collected data solely for the purpose of:</p>
          <ul>
            <li>Identifying potential broken links or web pages.</li>
            <li>Enhancing the user experience by providing timely alerts and metrics.</li>
            <li>Continuous improvement of FABLE Access Chrome Extension.</li>
          </ul>
          <p>I don't use the collected data for targeted advertising or any other purpose not explicitly mentioned in this policy.</p>
          
          <h3>3. Sharing of Data</h3>
          <p>I don't share, sell, or disclose the collected data with any third parties. All data is processed locally on your device, and none of it is transmitted to any servers or any external entity.</p>

          <h3>4. Security</h3>
          <p>Security is a top priority. While no online service or extension can guarantee complete security, I implement stringent measures to protect your data against unauthorized access, modification, or destruction.</p>
          
          <h3>5. Updates to this Privacy Policy</h3>
          <p>I might occasionally update this Privacy Policy. Any changes will be reflected on this page, and I'll update the "Effective Date" at the top. I recommend you review this policy periodically for any updates.</p>

          <h3>6. Consent</h3>
          <p>By using FABLE Access Chrome Extension, you hereby consent to this Privacy Policy and agree to its terms.</p>
          
          <h3>7. Contact Me</h3>
          <p>For any questions or clarifications regarding this Privacy Policy, please contact me at:</p>
          <p>tfenner@usc.edu</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Privacy;
