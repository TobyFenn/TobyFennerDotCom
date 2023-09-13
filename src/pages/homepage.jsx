import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import SentenceCycler from "../components/common/sentencecycler";
import Works from "../components/homepage/works";
import Research from "../components/homepage/research";
import Campus from "../components/homepage/campus";
import AllProjects from "../components/projects/allProjects";
import INFO from "../data/user";
import SEO from "../data/seo";
import "./styles/homepage.css";

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentSEO = SEO.find((item) => item.page === "home");

	const logoStyle = {
		display: "flex",
		position: "relative",
		top: "auto",
		zIndex: 999,
		border: "1px solid white",
		borderRadius: "0",
		// boxShadow:"0px 4px 10px rgba(0, 0, 0, 0.25)",
	};

  return (
    <React.Fragment>
      <Helmet>
        <title>{INFO.main.title}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords.join(", ")} />
      </Helmet>

      <div className="page-content">
        <NavBar active="home" />
        <div className="content-wrapper">
          <div className="homepage-logo-container">
          </div>

          <div className="homepage-container">
            <div className="homepage-first-area">
              <div className="homepage-first-area-left-side">
				<div className="titlelogo">
				<div className="logo" style={logoStyle}>
							<Logo width={150} link={false} />
						</div>
                <div className="title homepage-title">
                  {INFO.homepage.title}
                </div>
				</div>
                <div className="subtitle homepage-subtitle">
                  {INFO.homepage.description}
                </div>

                <div className="homepage-socials">
                  <a href={INFO.socials.linkedin} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="homepage-social-icon"
                    />
                  </a>
                  <a href={INFO.socials.github} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="homepage-social-icon"
                    />
                  </a>
                  <a href={INFO.socials.instagram} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="homepage-social-icon"
                    />
                  </a>
                  <a href={`mailto:${INFO.main.email}`} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="homepage-social-icon"
                    />
                  </a>
                </div>
              </div>

			  <div className="homepage-first-area-right-side">
                <SentenceCycler />
              </div>

            </div>

            <div className="homepage-after-title">
              <div className="homepage-works">
                <Works />
              </div>
              <div className="homepage-research">
                <Research />
              </div>
              <div className="homepage-campus">
                <Campus />
              </div>
            </div>

            <div className="homepage-projects">
              <AllProjects />
            </div>

            <div className="page-footer">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Homepage;
