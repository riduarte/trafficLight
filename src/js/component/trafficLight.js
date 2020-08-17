import React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

export const TrafficLight = props => {
	const [brillo, ChangeLigth] = useState("");

	function encender() {
		if (brillo == "") {
			ChangeLigth(" brillo");
		} else if (brillo == " brillo") {
			ChangeLigth("");
		}
	}

	return (
		<div
			onClick={() => {
				encender();
			}}
			className={"m-auto rounded light " + brillo + props.color}
		/>
	);
};
TrafficLight.propTypes = {
	color: PropTypes.string
};
