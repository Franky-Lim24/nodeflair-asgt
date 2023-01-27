import React from 'react';
import Rounded from '../shared/Rounded';
import './Jobs.css';
import data from '../../static/data.json';

const Jobs = () => {
	return (
		<div className="container">
			<div className="left">
				{data.map((item, index) => {
					return <Rounded key={index} data={item} isBig={false} />;
				})}
			</div>
			<div className="right">
				<Rounded isBig={true} />
			</div>
		</div>
	);
};

export default Jobs;
