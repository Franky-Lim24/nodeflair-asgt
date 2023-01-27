import React from 'react';
import './style.css';

const Rounded = ({ data, isBig }) => {
	return (
		<>
			{isBig ? (
				<div className="rounded" style={{ height: '90vh' }}></div>
			) : (
				<div className="rounded" style={{ cursor: 'pointer' }}>
					<div className="row">
						<img
							src="https://nodeflair.com/companies/2314.png"
							className="sml-image"
						/>
						<div className="tags">
							<div className="specialisation">Solutions</div>
						</div>
						<div className="company">
							<p className="company-name">
								<span>Ingram Micro</span>
								<span>&nbsp;3.7 ★</span>
							</p>
							<h2 className="job">Solution Architect, IaaS</h2>
						</div>
					</div>
					<div className="row">
						<div className="time">1 day ago</div>
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
							&nbsp;Singapore
						</div>
					</div>
					<hr className="divider" />
				</div>
			)}
		</>
	);
};

export default Rounded;
