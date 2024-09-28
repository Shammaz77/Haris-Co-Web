import React, { useState, useEffect } from 'react';
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
import arrowhover from '../Assets/DigitalMarketing/arrow.svg'
import case1 from '../Assets/DigitalMarketing/case1.png'
import case2 from '../Assets/DigitalMarketing/case2.png'
import case3 from '../Assets/DigitalMarketing/case3.png'
import clock from '../Assets/DigitalMarketing/clock.png'
import review from '../Assets/DigitalMarketing/rev.png'
import userimg from '../Assets/DigitalMarketing/user.png'
import call from '../Assets/DigitalMarketing/Call.svg'
import Email from '../Assets/DigitalMarketing/Email.svg'
import Address from '../Assets/DigitalMarketing/Address.svg'



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


	const [activeTab, setActiveTab] = useState('Performance Marketing');

	// Tab click handler
	const handleTabClick = (tab) => {
		setActiveTab(tab);
	};



	const reviews = [
		{
			title: 'Lorem Ipsum',
			subtitle: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”',
			username: 'Lorem',
			userdesignation: 'Lorem Ipsum',
			userimg: userimg, // Replace with actual image path
		},
		{
			title: 'Dolor Sit Amet',
			subtitle: '“Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”',
			username: 'Dolor',
			userdesignation: 'Dolor Sit Amet',
			userimg: userimg, // Replace with actual image path
		},
		// Add more reviews as needed
	];
	const [currentIndex, setCurrentIndex] = useState(0);
	const [fadeClass, setFadeClass] = useState('dgfade-in');

	useEffect(() => {
		const interval = setInterval(() => {
			setFadeClass('dgfade-out');
			setTimeout(() => {
				setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
				setFadeClass('dgfade-in');
			}, 500); // Transition duration
		}, 5000); // Change review every 5 seconds

		return () => clearInterval(interval);
	}, []);



	return (
		<div className='digitalmarketing-page font-page'>
			<div className="navbar-full-dg">
				<div className="container-main">
					<div className="navbar-dg">
						<div className="logo-dg">
							<img src={logo} className='logo-dg-nav' alt="" />
						</div>
						<div className="itemss-dg">
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
							</div>
						</div>
					</div>
				</div>
				<div className="headlines-main-dvv-dg">
					<Slider {...settingsHeadlines}>
						<div className="featured-img-dv-main">
							<img src={feature} className='dg-feature-img' alt="" />
							<img src={arrowhover} className='hover-arrow-main-dg' alt="" />
						</div>
						<div className="featured-img-dv-main">
							<img src={feature} className='dg-feature-img' alt="" />
							<img src={arrowhover} className='hover-arrow-main-dg' alt="" />
						</div>
						<div className="featured-img-dv-main">
							<img src={feature} className='dg-feature-img' alt="" />
							<img src={arrowhover} className='hover-arrow-main-dg' alt="" />
						</div>
						<div className="featured-img-dv-main">
							<img src={feature} className='dg-feature-img' alt="" />
							<img src={arrowhover} className='hover-arrow-main-dg' alt="" />
						</div>
						<div className="featured-img-dv-main">
							<img src={feature} className='dg-feature-img' alt="" />
							<img src={arrowhover} className='hover-arrow-main-dg' alt="" />
						</div>
						<div className="featured-img-dv-main">
							<img src={feature} className='dg-feature-img' alt="" />
							<img src={arrowhover} className='hover-arrow-main-dg' alt="" />
						</div>
					</Slider>
				</div>
				{/* discuss  */}
				<div className="discuss-dg-main">
					<div className="container-main">
						<div className="row">
							<div className="col-lg-12">
								<div className="lets-discuss-main-dg">
									<div className="half-dg-discss">
										<h3 className='discuss-title-dg'>Let's Discuss How We Can Grow Your Business</h3>
									</div>
									<div className="righthalf-dg-discss">
										<Link to='/' className='btn-proposal-dg'>Consult Us</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* case study  */}
				<div className="casestudy-main-div-dg">
					<div className="container-main">
						<div className="row">
							<div className="col-lg-12">
								<div className="div-box-case-study-main">
									<h3 className="title-casestudy-dg-main">Our Case Studies</h3>
									<p className="sub-title-casestudy-dg-main">Read in detail about our stories of victories.</p>

									{/* Tabs */}
									<div className="items-services-case-study-dg">
										<p
											className={`items-dg ${activeTab === 'Performance Marketing' ? 'active-dg-item' : ''}`}
											onClick={() => handleTabClick('Performance Marketing')}
										>
											Performance Marketing
										</p>
										<p
											className={`items-dg ${activeTab === 'SEO' ? 'active-dg-item' : ''}`}
											onClick={() => handleTabClick('SEO')}
										>
											SEO
										</p>
										<p
											className={`items-dg ${activeTab === 'PR & Communication' ? 'active-dg-item' : ''}`}
											onClick={() => handleTabClick('PR & Communication')}
										>
											PR & Communication
										</p>
										<p
											className={`items-dg ${activeTab === 'Social Media' ? 'active-dg-item' : ''}`}
											onClick={() => handleTabClick('Social Media')}
										>
											Social Media
										</p>
									</div>
								</div>
							</div>

							{/* Conditional rendering based on activeTab */}
							{activeTab === 'Performance Marketing' && (
								<div className='row'>
									<div className="col-lg-6">
										<div className="casestudy-card-dg height-dg">
											<img src={case1} className='casestudy-img-box' alt="Performance Marketing" />
											<div className="details-case-dv-dv">
												<h4 className="heading-casestudy-service-dg">From 0 to ₹6 Million Revenue per month (4+ ROAS)</h4>
												<div className="time-date-dg">
													<img src={clock} className='clock-icon-dg' alt="Clock Icon" />
													<p className="text-of-time">March 8, 2024</p>
												</div>
												<p className="description-service-dg">Explore how we transformed Bluetyga into a revenue-generating company from scratch.</p>
											</div>
										</div>
									</div>
									<div className="col-lg-6">
										<div className="casestudy-card-dg">
											<div className="sub-full-dv-dg">
												<div className="img-box-dgg">
													<img src={case2} className='casestudy-img-box' alt="" />
												</div>
												<div className="details-case-dv-dv">
													<h4 className='heading-casestudy-service-dg-sub'>Generated a Massive ₹10 Million in 6 Months	</h4>
													<div className="time-date-dg">
														<img src={clock} className='clock-icon-dg' alt="" />
														<p className='text-of-time'>March 8, 2024</p>
													</div>
													<p className='description-service-dg grey-clr-fg'>Dive in to learn how we improved the online sales rate of Walkaroo - one of India's leading footwear brands.</p>
												</div>
											</div>
										</div>
										<div className="casestudy-card-dg">
											<div className="sub-full-dv-dg">
												<div className="img-box-dgg">
													<img src={case3} className='casestudy-img-box' alt="" />
												</div>
												<div className="details-case-dv-dv">
													<h4 className='heading-casestudy-service-dg-sub'>Generated a Massive ₹10 Million in 6 Months	</h4>
													<div className="time-date-dg">
														<img src={clock} className='clock-icon-dg' alt="" />
														<p className='text-of-time'>March 8, 2024</p>
													</div>
													<p className='description-service-dg grey-clr-fg'>Dive in to learn how we improved the online sales rate of Walkaroo - one of India's leading footwear brands.</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							)}
							{activeTab === 'SEO' && (
								<div className='row'>
									<div className="col-lg-6">
										<div className="casestudy-card-dg height-dg">
											<img src={case1} className='casestudy-img-box' alt="Performance Marketing" />
											<div className="details-case-dv-dv">
												<h4 className="heading-casestudy-service-dg">From 0 to ₹6 Million Revenue per month (4+ ROAS)</h4>
												<div className="time-date-dg">
													<img src={clock} className='clock-icon-dg' alt="Clock Icon" />
													<p className="text-of-time">March 8, 2024</p>
												</div>
												<p className="description-service-dg">Explore how we transformed Bluetyga into a revenue-generating company from scratch.</p>
											</div>
										</div>
									</div>
									<div className="col-lg-6">
										<div className="casestudy-card-dg">
											<div className="sub-full-dv-dg">
												<div className="img-box-dgg">
													<img src={case2} className='casestudy-img-box' alt="" />
												</div>
												<div className="details-case-dv-dv">
													<h4 className='heading-casestudy-service-dg-sub'>Generated a Massive ₹10 Million in 6 Months	</h4>
													<div className="time-date-dg">
														<img src={clock} className='clock-icon-dg' alt="" />
														<p className='text-of-time'>March 8, 2024</p>
													</div>
													<p className='description-service-dg grey-clr-fg'>Dive in to learn how we improved the online sales rate of Walkaroo - one of India's leading footwear brands.</p>
												</div>
											</div>
										</div>
										<div className="casestudy-card-dg">
											<div className="sub-full-dv-dg">
												<div className="img-box-dgg">
													<img src={case2} className='casestudy-img-box' alt="" />
												</div>
												<div className="details-case-dv-dv">
													<h4 className='heading-casestudy-service-dg-sub'>Generated a Massive ₹10 Million in 6 Months	</h4>
													<div className="time-date-dg">
														<img src={clock} className='clock-icon-dg' alt="" />
														<p className='text-of-time'>March 8, 2024</p>
													</div>
													<p className='description-service-dg grey-clr-fg'>Dive in to learn how we improved the online sales rate of Walkaroo - one of India's leading footwear brands.</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							)}

							{activeTab === 'PR & Communication' && (
								<div className='row'>
									<div className="col-lg-6">
										<div className="casestudy-card-dg height-dg">
											<img src={case1} className='casestudy-img-box' alt="Performance Marketing" />
											<div className="details-case-dv-dv">
												<h4 className="heading-casestudy-service-dg">From 0 to ₹6 Million Revenue per month (4+ ROAS)</h4>
												<div className="time-date-dg">
													<img src={clock} className='clock-icon-dg' alt="Clock Icon" />
													<p className="text-of-time">March 8, 2024</p>
												</div>
												<p className="description-service-dg">Explore how we transformed Bluetyga into a revenue-generating company from scratch.</p>
											</div>
										</div>
									</div>
									<div className="col-lg-6">
										<div className="casestudy-card-dg">
											<div className="sub-full-dv-dg">
												<div className="img-box-dgg">
													<img src={case2} className='casestudy-img-box' alt="" />
												</div>
												<div className="details-case-dv-dv">
													<h4 className='heading-casestudy-service-dg-sub'>Generated a Massive ₹10 Million in 6 Months	</h4>
													<div className="time-date-dg">
														<img src={clock} className='clock-icon-dg' alt="" />
														<p className='text-of-time'>March 8, 2024</p>
													</div>
													<p className='description-service-dg grey-clr-fg'>Dive in to learn how we improved the online sales rate of Walkaroo - one of India's leading footwear brands.</p>
												</div>
											</div>
										</div>
										<div className="casestudy-card-dg">
											<div className="sub-full-dv-dg">
												<div className="img-box-dgg">
													<img src={case2} className='casestudy-img-box' alt="" />
												</div>
												<div className="details-case-dv-dv">
													<h4 className='heading-casestudy-service-dg-sub'>Generated a Massive ₹10 Million in 6 Months	</h4>
													<div className="time-date-dg">
														<img src={clock} className='clock-icon-dg' alt="" />
														<p className='text-of-time'>March 8, 2024</p>
													</div>
													<p className='description-service-dg grey-clr-fg'>Dive in to learn how we improved the online sales rate of Walkaroo - one of India's leading footwear brands.</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							)}

							{activeTab === 'Social Media' && (
								<div className='row'>
									<div className="col-lg-6">
										<div className="casestudy-card-dg height-dg">
											<img src={case1} className='casestudy-img-box' alt="Performance Marketing" />
											<div className="details-case-dv-dv">
												<h4 className="heading-casestudy-service-dg">1From 0 to ₹6 Million Revenue per month (4+ ROAS)</h4>
												<div className="time-date-dg">
													<img src={clock} className='clock-icon-dg' alt="Clock Icon" />
													<p className="text-of-time">March 8, 2024</p>
												</div>
												<p className="description-service-dg">Explore how we transformed Bluetyga into a revenue-generating company from scratch.</p>
											</div>
										</div>
									</div>
									<div className="col-lg-6">
										<div className="casestudy-card-dg">
											<div className="sub-full-dv-dg">
												<div className="img-box-dgg">
													<img src={case2} className='casestudy-img-box' alt="" />
												</div>
												<div className="details-case-dv-dv">
													<h4 className='heading-casestudy-service-dg-sub'>Generated a Massive ₹10 Million in 6 Months	</h4>
													<div className="time-date-dg">
														<img src={clock} className='clock-icon-dg' alt="" />
														<p className='text-of-time'>March 8, 2024</p>
													</div>
													<p className='description-service-dg grey-clr-fg'>Dive in to learn how we improved the online sales rate of Walkaroo - one of India's leading footwear brands.</p>
												</div>
											</div>
										</div>
										<div className="casestudy-card-dg">
											<div className="sub-full-dv-dg">
												<div className="img-box-dgg">
													<img src={case2} className='casestudy-img-box' alt="" />
												</div>
												<div className="details-case-dv-dv">
													<h4 className='heading-casestudy-service-dg-sub'>Generated a Massive ₹10 Million in 6 Months	</h4>
													<div className="time-date-dg">
														<img src={clock} className='clock-icon-dg' alt="" />
														<p className='text-of-time'>March 8, 2024</p>
													</div>
													<p className='description-service-dg grey-clr-fg'>Dive in to learn how we improved the online sales rate of Walkaroo - one of India's leading footwear brands.</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							)}
						</div>
						<div className="row">
							<div className="col-lg-12">
								<div className="button-view-more-dg">
									<Link to='/' className='btn-proposal-dg'>View More</Link>
								</div>
							</div>
						</div>

					</div>
				</div>
				<div className="clients-reviews">
					<div className="container-main">
						<div className="row">
							<div className="col-lg-5">
								<div className="clients-reviews-box-dg">
									<h3 className='clients-text-dg'>Client Reviews</h3>
									<p className='clients-sub-text-dg'>Here is what our clients have to say about our service</p>
									<img src={review} className='review-icon-dg' alt="" />
								</div>
							</div>
							<div className="col-lg-7">
								<div className="reviews-section-box-dg">
									<div className={`review-content ${fadeClass}`}>
										<h3 className='rev-title-main-dg'>{reviews[currentIndex].title}</h3>
										<p className='rev-sub-title-main-dg'>{reviews[currentIndex].subtitle}</p>
										<div className="reviewr-details-dg">
											<img src={reviews[currentIndex].userimg} className='userimage-main-dg' alt={reviews[currentIndex].username} />
											<div className="details-name-review-dg">
												<h4 className='user-namee-dg'>{reviews[currentIndex].username}</h4>
												<p className='user-desg-dg'>{reviews[currentIndex].userdesignation}</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* chat-section */}
			<div className="chat-section-digital">
				<div className="container-main">
					<div className="row">
						<div className="col-lg-6">
							<div className="chat-inner-box-dv-dg">
								<h3 className='lets-chat-title-dg'>Let's Have a Chat</h3>
								<p className='lets-chat-sub-title-dg'>Give us a call or email us to learn more about our services. Need a face-to-face discussion? Feel free to visit us. </p>
								<div className="address-details-div">
									<div className="half-full-icon-svg">
										<div className="half-address-svg">
											<img src={call} className='half-icon-img' alt="" />
										</div>
										<div className="half-address-svg">
											<img src={Email} className='half-icon-img' alt="" />
										</div>
									</div>
									<img src={Address} className='half-icon-img-full' alt="" />
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
