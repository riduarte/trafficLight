import React from "react";
import { useState, useEffect } from "react";
import { TrafficLight } from "./trafficLight";

export const Vista = () => {
	return (
		<div className="d-flex justify-content-center">
			<div className="content rounded ">
				<TrafficLight color=" red " />
				<TrafficLight color=" yellow " />
				<TrafficLight color=" green " />
			</div>
		</div>
	);
};
