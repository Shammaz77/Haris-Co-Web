import React, { useState } from 'react';
import '../components/css/Digital.css';
import { Link } from 'react-router-dom';
import logo from '../Assets/navlogo.png'
import founder from '../Assets/DigitalMarketing/FOUNDER.png'
import clients from '../Assets/DigitalMarketing/Clients.svg'
import clients2 from '../Assets/DigitalMarketing/clients-pending.svg'
import amna from '../Assets/DigitalMarketing/amna.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import award1 from '../Assets/DigitalMarketing/startup award.png'
import award3 from '../Assets/DigitalMarketing/brand storyz.png'
import award2 from '../Assets/DigitalMarketing/pepper award.png'
import logos from '../Assets/DigitalMarketing/logo1.png'
import logo2 from '../Assets/DigitalMarketing/logo2.png'
import logo3 from '../Assets/DigitalMarketing/logo3.png'
import logo4 from '../Assets/DigitalMarketing/logo4.png'
import logo5 from '../Assets/DigitalMarketing/logo5.png'
import o1 from '../Assets/DigitalMarketing/1.png'
import feature from '../Assets/DigitalMarketing/feature.png'






const DigitalMarketing = () => {

	const [isSecondImageVisible, setIsSecondImageVisible] = useState(false);

	const toggleImageVisibility = () => {
		setIsSecondImageVisible(prevState => !prevState);
	};


	// State to track the currently selected service
	const [selectedService, setSelectedService] = useState('SEO');

	// Function to get the image based on the selected service
	const getTeamImage = () => {
		switch (selectedService) {
			case 'SEO':
				return o1;
			case 'Performance Marketing':
				return award2;
			case 'Social Media':
				return award3;
			case 'Web Development':
				return award1;
			case 'Branding':
				return award2;
			default:
				return award3;
		}
	};

	const services = [
		{ name: 'SEO', logo: logos, description: '1To appear on top of Google search results and get more website visitors, leads and revenue.' },
		{ name: 'Performance Marketing', logo: logo2, description: '2To appear on top of Google search results and get more website visitors, leads and revenue.' },
		{ name: 'Social Media', logo: logo3, description: '3To appear on top of Google search results and get more website visitors, leads and revenue.' },
		{ name: 'Web Development', logo: logo4, description: '4To appear on top of Google search results and get more website visitors, leads and revenue.' },
		{ name: 'Branding', logo: logo5, description: '5To appear on top of Google search results and get more website visitors, leads and revenue.' },
	];


	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		pauseOnHover: true,
		centerMode: true,  // Enables centering
		centerPadding: '0',  // Makes sure the slide is fully visible
	};


	var settingsHeadlines = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		pauseOnHover: true,
		centerMode: true,  // Enables centering
		centerPadding: '0',  // Makes sure the slide is fully visible
	};






	return (
		<div className='digitalmarketing-page font-page'>
			<div className="navbar-full-dg">
				<div className="container-main">
					<div className="navbar-dg">
						<div className="logo-dg">
							<img src={logo} className='logo-dg-nav' alt="" />
						</div>
						<div className="items-dg">
							<ul>
								<li><Link to='/'>Home</Link></li>
								<li><Link to='/'>Services</Link></li>
								<li><Link to='/'>Culture</Link></li>
								<li><Link to='/'>Case Studies</Link></li>
								<li><Link to='/'>Contact Us</Link></li>
							</ul>
						</div>
						<div className="buttons-dg">
							<Link to='/' className='btn-proposal-dg'>GET A PROPOSAL</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="container-main home-wrapper-section-dg">
				<div className="row">
					<div className="col-lg-7">
						<div className="home-wrapper-dg">
							<h1 className='title-wrapper-dg'>An <span>Award-winning</span> Digital Marketing Agency in Kerala</h1>
							<h4 className='sub-title-wrapper-dg'>A digital marketing company that’s on the course of powering up brands <br /> with the power of marketing, design and tech. </h4>
							<div className="buttons-dv-dg">
								<Link to='/' className='btn-proposal-dg'>GET A PROPOSAL</Link>
								<Link to='/' className='btn-proposal-dg-no-bg'>Consult with Us</Link>
							</div>
							<div className="services-count-dg">
								<div className="srvc-one-dg border-dg">
									<h4 className='servc-text-dg'>600M+</h4>
									<p className='servc-sub-text-dg'>Revenue <br /> Generated</p>
								</div>
								<div className="srvc-one-dg border-dg">
									<h4 className='servc-text-dg'>150+</h4>
									<p className='servc-sub-text-dg'> Clients</p>
								</div>
								<div className="srvc-one-dg border-dg">
									<h4 className='servc-text-dg'>1000+</h4>
									<p className='servc-sub-text-dg'> Projects</p>
								</div>
								<div className="srvc-one-dg">
									<h4 className='servc-text-dg'>05</h4>
									<p className='servc-sub-text-dg'>National-level  <br /> Awards</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-5">
						<div className="founder-image-dg">
							<img src={founder} className='founder-img-dg' alt="" />
						</div>
					</div>
				</div>
			</div>
			{/* clients section  */}
			<div className="clients-dg">
				<div className="container-main">
					<div className="row">
						<div className="col-lg-12 position-main-clients-dg">
							{/* First image is always visible */}
							<div className="clients-section-main-dg">
								<img src={clients} className='clients-class-img' alt="Clients" />

								{/* Conditionally render the second image with smooth transition */}
								<img
									src={clients2}
									className={`clients-class-img second-image ${isSecondImageVisible ? 'visible' : ''}`}
									alt="Clients"
								/>
							</div>

							{/* Text and View All/View Less button */}
							<p className="view-all-main">
								Brands that believe in us. Brands that have gone the extra mile with us.{' '}
								<span className='view-all-dg' onClick={toggleImageVisibility} style={{ cursor: 'pointer' }}>
									{isSecondImageVisible ? 'View Less' : 'View All'}
								</span>
							</p>
						</div>
					</div>
				</div>
			</div>
			{/* fearless section  */}
			<div className="fearless-main-dg">
				<div className="container-main">
					<div className="row">
						<div className="col-lg-8">
							<div className="inner-fearless-dg">
								<h3 className='fearles-title-dg'>Fearless & Authentic Digital Marketing Since Birth.</h3>
								<p className='fearless-sub-dg'>We've come a long way ever since we started our journey in 2020 as a digital marketing agency in kerala with just 6 members and a handful of clients. Today, we're 100+ members strong, organised into 8 departments, with a huge (and satisfied) clientele. The work culture, results and innovation are at the core of who we are.</p>
								<div className="buttons-dg-fearless">
									<Link to='/' className='btn-proposal-dg'>Learn More About Us</Link>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="about-count-dg">
								<div className="yaer-dg">
									<h3 className='number-txt-dgg'>2020 </h3>
									<p className='sub-title-dgg'>Established Year</p>
								</div>
								<div className="yaer-dg">
									<h3 className='number-txt-dgg'>100+ </h3>
									<p className='sub-title-dgg'>Employees</p>
								</div>
								<div className="yaer-dg">
									<h3 className='number-txt-dgg'>08 </h3>
									<p className='sub-title-dgg'>Departments</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="wall-of-fame-dg">
				<div className="container-main">
					<div className="row">
						<div className="col-lg-8">
							<div className="fame-inner-dg">
								<h3 className='fame-title-dg'>The Wall of Fame</h3>
								<p className='awards-sub-dg'>Our awards and recognitions</p>
								<div className="awards-images-dg">
									<Slider {...settings}>
										<div className="award-image-dg">
											<img src={award1} className='award-img-pc' alt="" />
											<p className="award-subtext-dg">Pepper Awards -</p> {/* Subtext */}
										</div>
										<div className="award-image-dg">
											<img src={award2} className='award-img-pc' alt="" />
											<p className="award-subtext-dg">Pepper Awards -</p> {/* Subtext */}
										</div>
										<div className="award-image-dg">
											<img src={award3} className='award-img-pc' alt="" />
											<p className="award-subtext-dg">Pepper Awards -</p> {/* Subtext */}
										</div>
										<div className="award-image-dg">
											<img src={award1} className='award-img-pc' alt="" />
											<p className="award-subtext-dg">Best Single Online Video</p> {/* Subtext */}
										</div>
										<div className="award-image-dg">
											<img src={award2} className='award-img-pc' alt="" />
											<p className="award-subtext-dg">Best Single Online Video</p> {/* Subtext */}
										</div>
										<div className="award-image-dg">
											<img src={award3} className='award-img-pc' alt="" />
											<p className="award-subtext-dg">Best Single Online Video</p> {/* Subtext */}
										</div>
									</Slider>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="fame-inner-dg-right">
								<img src={amna} className='amna-img-dg' alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* what we  */}
			<div className="what-we-dg">
				<div className="container-main">
					<div className="row">
						<div className="col-lg-12">
							<div className="what-we-do-dg">
								<h3 className='what-we-text-dgg'>What We Have for You</h3>
								<div className="main-srvcs-team-dg">
									<div className="left-services-main-dg">
										{services.map((service) => (
											<div
												key={service.name}
												className="srvc-name-dg-dv"
												onClick={() => setSelectedService(service.name)}
											>
												<img src={service.logo} className='icon-servc-dg' alt={service.name} />
												<div className="srvcs-details-text-dv">
													<h4 className='title-srvc-dg'>{service.name}</h4>
													{/* Conditionally render the description based on the selected service */}
													{selectedService === service.name && (
														<p className='sub-title-srvc-dg'>{service.description}</p>
													)}
												</div>
											</div>
										))}
									</div>

									<div className="right-services-main-dg">
										{/* Display the team image based on selected service */}
										<img src={getTeamImage()} className='team-img-dg' alt={`${selectedService} Team`} />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="white-section-dg">
				<div className="container-main">
					<div className="row">
						<div className="col-lg-12">
							<div className="headlines-main-dv-dg">
								<h3 className='headline-title-dg'>Making Headlines</h3>
								<p className='headline-subtitle-dg'>To get featured in multiple news articles gives us immense joy</p>
									<div className="headlines-main-dvv-dg">
										<Slider {...settingsHeadlines}>
											<div className="featured-img-dv-main">
												<img src={feature} className='dg-feature-img' alt="" />
											</div>
											<div className="featured-img-dv-main">
												<img src={feature} className='dg-feature-img' alt="" />
											</div>
											<div className="featured-img-dv-main">
												<img src={feature} className='dg-feature-img' alt="" />
											</div>
											<div className="featured-img-dv-main">
												<img src={feature} className='dg-feature-img' alt="" />
											</div>
											<div className="featured-img-dv-main">
												<img src={feature} className='dg-feature-img' alt="" />
											</div>
											<div className="featured-img-dv-main">
												<img src={feature} className='dg-feature-img' alt="" />
											</div>
										</Slider>
									</div>
							</div>
						</div>
					</div>
				</div>
			</div>


		</div>
	)
}

export default DigitalMarketing;	
