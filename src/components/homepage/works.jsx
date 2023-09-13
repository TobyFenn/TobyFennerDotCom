import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Industry"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./genies.jpg"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Genies</div>
							<div className="work-subtitle">
								Software Engineer Intern
							</div>
							<div className="work-duration">Present</div>
						</div>

						<div className="work">
							<img
								src="./hoodtechlogo.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Hood Tech</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">7 mo</div>
						</div>

						<div className="work">
							<img
								src="./ortop.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">ORTOP</div>
							<div className="work-subtitle">
								Development Intern
							</div>
							<div className="work-duration">4 mo</div>
						</div>

						<div className="work">
							<img
								src="./sierra.jpg"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Sierra Olympic</div>
							<div className="work-subtitle">
								Engineering Intern
							</div>
							<div className="work-duration">2 mo</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
