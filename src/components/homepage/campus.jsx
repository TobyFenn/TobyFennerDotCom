import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/campus.css";

const Campus = () => {
	return (
		<div className="campus">
			<Card
				icon={faBriefcase}
				title="Campus"
				body={
					<div className="campus-body">
						<div className="work">
							<img
								src="./usc.jpg"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">CS Course Producer</div>
							<div className="work-subtitle">
								C++ Programming
							</div>
							<div className="work-duration">Present</div>
						</div>

						<div className="work">
							<img
								src="./annenberg.jpg"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Annenberg Media</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">5 mo</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Campus;
