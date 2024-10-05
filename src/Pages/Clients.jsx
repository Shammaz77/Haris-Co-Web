import React from 'react'
import clients from '../Assets/Clients-full.png'
import clientsmobile from '../Assets/fl.png'
const Clients = () => {
	return (
		<div className='container-main font-h'>
			<div className="header-service-common">
				<h2 className='header-page-name-small'>Clients</h2>
				<h2 className='header-page-name-common'>Our clients are everything	to us; so are we to them.</h2>
			</div>
			<div className="col-lg-12 mobile-hide-slider">
				<div className="clients-image-main">
					<img src={clients} className='client-imagee' alt="Clients" />
				</div>
			</div>
			<div className="col-lg-12 mobile-show-slider">
				<div className="clients-image-main">
					<img src={clientsmobile} className='client-imagee' alt="Clients" />
				</div>
			</div>
		</div>
	)
}

export default Clients	
