import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/research.css";

const Research = () => {
	return (
		<div className="research">
			<Card
				icon={faBriefcase}
				title="Research"
				body={
					<div className="research-body">
						<div className="work">
							<img
								src="./nsl.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Networked Sys. Laboratory</div>
							<div className="work-subtitle">
								Research Fellow
							</div>
							<div className="work-duration">Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Research;
