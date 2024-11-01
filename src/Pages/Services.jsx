import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import icon from '../Assets/icon-social.png'
import icontwo from '../Assets/Exclude.png'
import iconthree from '../Assets/three.png'
import iconfour from '../Assets/Union.png'
import arrow from '../Assets/icon.png'

import seoc from '../Assets/seoc.png'
import brandingc from '../Assets/brandingc.png'
import prc from '../Assets/prc.png'
import webc from '../Assets/webc.png'
import { Link } from 'react-router-dom';
const Services = () => {

	return (
		<div className='services-page font-h'>
			<div className="container-main">
				<div className="services-div">
					<div className="services-section">
						<div className="header-service-common">
							<h2 className='header-page-name-small'>Services</h2>
							<h2 className='header-page-name-common'>Go Beyond the Ordinary with Our Creative and Digital Services</h2>
						</div>
					</div>
					<div className="brand-details">
						<div className="row side">
							<div className="col-lg-10">
								<div className="brand-divs">
									<h3 className='brand-titles '>Every innovation that happens here is out of a quest to get better at what we are already doing. We deliver ideas that make a difference, create experiences that transform lives and build ecosystems that foster progress.</h3>
								</div>
							</div>

							<div className="col-lg-4 col-md-4">
								<div className="counter-section">
									<h2 className='count-number'>500+</h2>
									<h4 className='count-text'>Clients</h4>
								</div>
							</div>
							<div className="col-lg-4 col-md-4">
								<div className="counter-section">
									<h2 className='count-number'>1000+</h2>
									<h4 className='count-text'>Projects Done</h4>
								</div>
							</div>
							<div className="col-lg-4 col-md-4	">
								<div className="counter-section">
									<h2 className='count-number'>4.9</h2>
									<h4 className='count-text'>Rated on Google</h4>
								</div>
							</div>

						</div>
					</div>
					<div className="row">
						<div className="col-lg-3">
							<Link to='/socialmedia'>
								<div className="services-box bluish-purple">
									<img src={icon} className='icon-service' alt="icon" />
									<div className="service-details-dv">
										<h5 className='service-number'>01.</h5>
										<h3 className='service-name'>Social Media <img src={arrow} className='rotate-icon' alt="icon" /> </h3>
										<div className="hover-div">
											<div className="border-hover"></div>
											<p>See the difference with us! Our strategic and creative social media content and campaigns help you better connect with your audience.</p>
										</div>
									</div>
								</div>
							</Link>
						</div>
						<div className="col-lg-3">
							<Link to='/perfomance'>
								<div className="services-box sunglow">
									<img src={icontwo} className='icon-service' alt="icon" />
									<div className="service-details-dv">
										<h5 className='service-number'>02.</h5>
										<h3 className='service-name'>Performance <br /> Marketing <img src={arrow} className='rotate-icon' alt="icon" /></h3>
										<div className="hover-div">
											<div className="border-hover"></div>
											<p>See the difference with us! Our strategic and creative social media content and campaigns help you better connect with your audience.</p>
										</div>
									</div>
								</div>
							</Link>
						</div>
						<div className="col-lg-3">
							<Link to='/production'>
								<div className="services-box mint-green">
									<img src={iconthree} className='icon-service' alt="icon" />
									<div className="service-details-dv">
										<h5 className='service-number'>03.</h5>
										<h3 className='service-name'>Production <img src={arrow} className='rotate-icon' alt="icon" /></h3>
										<div className="hover-div">
											<div className="border-hover"></div>
											<p>From concept to creation, our production team delivers visually stunning and captivating content for your brand.</p>
										</div>
									</div>
								</div>
							</Link>
						</div>
						<div className="col-lg-3">
							<Link to='/creative'>
								<div className="services-box light-blue">
									<img src={iconfour} className='icon-service ' alt="icon" />
									<div className="service-details-dv">
										<h5 className='service-number'>04.</h5>
										<h3 className='service-name'>Creative <img src={arrow} className='rotate-icon' alt="icon" /></h3>
										<div className="hover-div">
											<div className="border-hover"></div>
											<p>Our creative minds at Haris & Co. help craft captivating and never-before-seen ideas for your brand to drive exceptional results.</p>
										</div>
									</div>
								</div>
							</Link>
						</div>
						<div className="col-lg-3">
							<Link to='/pr'>
								<div className="services-box bluish-purple">
									<img src={prc} className='icon-service' alt="icon" />
									<div className="service-details-dv">
										<h5 className='service-number'>05.</h5>
										<h3 className='service-name'>Digital <br /> PR & Communication <img src={arrow} className='rotate-icon' alt="icon" /> </h3>
										<div className="hover-div">
											<div className="border-hover"></div>
											<p>Our creative minds at Haris & Co. help craft captivating and never-before-seen ideas for your brand to drive exceptional results.</p>
										</div>
									</div>
								</div>
							</Link>
						</div>
						<div className="col-lg-3">
							<Link to='/web'>
								<div className="services-box light-blue">
									<img src={webc} className='icon-service ' alt="icon" />
									<div className="service-details-dv">
										<h5 className='service-number'>06.</h5>
										<h3 className='service-name'>Web <br /> development & UI/UX <img src={arrow} className='rotate-icon' alt="icon" /></h3>
										<div className="hover-div">
											<div className="border-hover"></div>
											<p>Make your mark with a visually captivating and engaging web design. Our UI/UX experts deliver designs that are functionally superior and drive traffic.</p>
										</div>
									</div>
								</div>
							</Link>
						</div>
						<div className="col-lg-3">
							<Link to='/seo'>
								<div className="services-box sunglow">
									<img src={seoc} className='icon-service' alt="icon" />
									<div className="service-details-dv">
										<h5 className='service-number'>07.</h5>
										<h3 className='service-name'>SEO <img src={arrow} className='rotate-icon' alt="icon" /></h3>
										<div className="hover-div">
											<div className="border-hover"></div>
											<p>Stay on top with our strategic SEO solutions. Our tailored strategies help you dominate results and drive organic traffic.</p>
										</div>
									</div>
								</div>
							</Link>
						</div>
						<div className="col-lg-3">
							<Link to='/branding'>
								<div className="services-box mint-green">
									<img src={brandingc} className='icon-service' alt="icon" />
									<div className="service-details-dv">
										<h5 className='service-number'>08.</h5>
										<h3 className='service-name'>Branding <img src={arrow} className='rotate-icon' alt="icon" /></h3>
										<div className="hover-div">
											<div className="border-hover"></div>
											<p>Speak your truth with our branding solutions. We help tell a brand story that resonates, captivates, and converts. </p>
										</div>
									</div>
								</div>
							</Link>
						</div>
					</div>

				</div>
			</div>
		</div>
	)
}

export default Services