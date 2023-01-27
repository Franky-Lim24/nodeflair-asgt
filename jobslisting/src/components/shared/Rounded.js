import React from 'react';
import Skills from './Skills';
import './style.css';

const Rounded = ({ isBig, data, chosen, selected }) => {
	return (
		<>
			{isBig ? (
				<div className="rounded" style={{ height: '90vh' }}>
					<div className="row">
						<img src={data.image} className="sml-image" />
						<div className="tags">
							<div className="specialisation">{data.tag}</div>
						</div>
						<div className="company">
							<p className="company-name">
								<span>{data.name}</span>
								<span>&nbsp;{data.star} ★</span>
							</p>
							<h2 className="job">{data.job}</h2>
						</div>
					</div>
				</div>
			) : (
				<div
					className="rounded"
					style={{
						cursor: 'pointer',
						border: selected === data ? '3px solid #1fc76a' : 'none',
					}}
					onClick={() => {
						chosen(data);
					}}
				>
					<div className="row">
						<img src={data.image} className="sml-image" />
						<div className="tags">
							<div className="specialisation">{data.tag}</div>
						</div>
						<div className="company">
							<p className="company-name">
								<span>{data.name}</span>
								<span>&nbsp;{data.star} ★</span>
							</p>
							<h2 className="job">{data.job}</h2>
						</div>
					</div>
					<div className="row">
						<div className="time">{data.time} ago</div>
						<div className="location">
							<svg
								aria-hidden="true"
								focusable="false"
								data-prefix="fas"
								data-icon="map-marker-alt"
								class="svg-inline"
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 384 512"
							>
								<path
									fill="currentColor"
									d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
								></path>
							</svg>
							&nbsp;{data.location}
						</div>
					</div>
					<hr className="divider" />
					<div className="information">
						{data.skills.map((skill, index) => (
							<Skills key={index} skill={skill} />
						))}
					</div>
				</div>
			)}
		</>
	);
};

export default Rounded;
