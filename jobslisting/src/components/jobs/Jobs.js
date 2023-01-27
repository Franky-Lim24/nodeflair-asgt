import React, { useState } from 'react';
import Rounded from '../shared/Rounded';
import './Jobs.css';
import data from '../../static/data.json';

const Jobs = () => {
	const [selected, setSelected] = useState(data[0]);

	const handleClick = (item) => {
		setSelected(item);
	};
	return (
		<div className="container">
			<div className="left">
				{data.map((item, index) => {
					return (
						<Rounded
							key={index}
							data={item}
							isBig={false}
							chosen={handleClick}
							selected={selected}
						/>
					);
				})}
			</div>
			<div className="right">
				<Rounded isBig={true} data={selected} />
			</div>
		</div>
	);
};

export default Jobs;
