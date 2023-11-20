import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import NavBar from "../components/common/navBar";
import INFO from "../data/user";
import SEO from "../data/seo";
import "./styles/bonus.css";

const Bonus = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentSEO = SEO.find((item) => item.page === "bonus");

  // Define the number of links and columns
  const numLinks = 10;
  const numColumns = 5;

  // Calculate the number of rows needed
  const numRows = Math.ceil(numLinks / numColumns);

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
            {Array.from({ length: numRows }, (_, rowIndex) => (
              <div key={rowIndex} className="row">
                {Array.from({ length: numColumns }, (_, colIndex) => {
                  const linkIndex = rowIndex * numColumns + colIndex + 1;
                  if (linkIndex <= numLinks) {
                    return (
                      <Link
                        key={linkIndex}
                        to={`/test${linkIndex}`}
                      >
                        -TEST {linkIndex}-
                      </Link>
                    );
                  }
                  return null;
                })}
              </div>
            ))}

            <div className="row">
              <Link to="/notfound">Notfound</Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Bonus;
