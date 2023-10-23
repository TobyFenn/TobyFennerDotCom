import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import NavBar from "../components/common/navBar";
import INFO from "../data/user";
import SEO from "../data/seo";
import "./styles/bonus.css";

const Bonus = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentSEO = SEO.find((item) => item.page === "bonus");

  const linkData = [
    ['HTTP404', 'HTTP410', 'HTTP400', 'HTTP403', 'HTTP500'],
    ['DNSNXDOMAIN', 'DNSSERVFAIL', 'DNSREFUSED', 'DNSNOTIMP', 'DNSNXRRSET'],
    ['iframe', '404', 'Link3.3', 'Link3.4', 'Link3.5'],
    ['Link4.1', 'Link4.2', 'Link4.3', 'Link4.4', 'Link4.5'],
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>{`Bonus | ${INFO.main.title}`}</title>
        <meta name="description" content={currentSEO.description} />
        <meta
          name="keywords"
          content={currentSEO.keywords.join(", ")}
        />
      </Helmet>

      <div className="page-content">
        <NavBar active="bonus" />
        <div className="content-wrapper">
          <div className="link-container">
            {linkData.map((column, i) => (
              <div key={i} className="column">
                {column.map((link, j) => (
                  <a 
                    key={j} 
                    href={
                          link === "iframe" ? "/iframe" :
                          link === "404" ? "/404" :
                          "https://www.google.com"
                    }
                    target={
                          link === "iframe" || link === "404" ? "_self" :
                          "_blank"
                    }
                    rel="noopener noreferrer"
                  >
                    {link}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Bonus;
