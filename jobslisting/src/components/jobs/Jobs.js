import React from 'react';
import Rounded from '../shared/Rounded';
import './Jobs.css';

const Jobs = () => {
	return (
		<div className="container">
			<div className="left">
				<Rounded />
				<Rounded />
				<Rounded />
			</div>
			<div className="right">
				<Rounded isBig={true} />
			</div>
		</div>
	);
};

export default Jobs;
