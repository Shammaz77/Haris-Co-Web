import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import '../components/css/Digital.css';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { CSSTransition } from 'react-transition-group';
import logo from '../Assets/navlogo.png'
import founder from '../Assets/DigitalMarketing/copy.png'
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
import linkedin from '../Assets/DigitalMarketing/linkedin.svg'
import facebook from '../Assets/DigitalMarketing/facebook.svg'
import instagram from '../Assets/DigitalMarketing/instagram.svg'
import twitter from '../Assets/DigitalMarketing/twitter.svg'
import footerlogo from '../Assets/DigitalMarketing/footer-logo.svg'
import google from '../Assets/DigitalMarketing/google.png'
import callfooter from '../Assets/DigitalMarketing/callfooter.svg'
import emailfooter from '../Assets/DigitalMarketing/emailfooter.svg'
import locationf from '../Assets/DigitalMarketing/locationf.svg'
import b from '../Assets/DigitalMarketing/b.png'
import f1 from '../Assets/DigitalMarketing/f1.png'
import f2 from '../Assets/DigitalMarketing/f2.webp'
import f3 from '../Assets/DigitalMarketing/f3.webp'
import f4 from '../Assets/DigitalMarketing/f4.webp'
import team2 from '../Assets/DigitalMarketing/pt.webp'
import team3 from '../Assets/DigitalMarketing/socialt.webp'
import team4 from '../Assets/DigitalMarketing/webt.webp'
import team5 from '../Assets/DigitalMarketing/bt.webp'
import s1 from '../Assets/DigitalMarketing/seoc.webp'
import s2 from '../Assets/DigitalMarketing/seoc2.webp'
import s3 from '../Assets/DigitalMarketing/seoc3.webp'
import p1 from '../Assets/DigitalMarketing/p1.webp'
import p2 from '../Assets/DigitalMarketing/p2.webp'
import p3 from '../Assets/DigitalMarketing/p3.webp'
import sm1 from '../Assets/DigitalMarketing/sm1.webp'
import sm2 from '../Assets/DigitalMarketing/sm2.webp'
import sm3 from '../Assets/DigitalMarketing/sm3.webp'
import br1 from '../Assets/DigitalMarketing/br1.webp'
import br2 from '../Assets/DigitalMarketing/br2.webp'
import br3 from '../Assets/DigitalMarketing/br3.webp'
import cr1 from '../Assets/DigitalMarketing/cr1.webp'
import cr2 from '../Assets/DigitalMarketing/cr2.webp'
import cr3 from '../Assets/DigitalMarketing/cr3.webp'
import w1 from '../Assets/DigitalMarketing/w1.webp'
import w2 from '../Assets/DigitalMarketing/w2.webp'
import w3 from '../Assets/DigitalMarketing/w3.webp'
import aw3 from '../Assets/DigitalMarketing/aw3.webp'
import aw2 from '../Assets/DigitalMarketing/aw2.webp'
import arroww from '../Assets/DigitalMarketing/arroww.svg'
import cl1 from '../Assets/DigitalMarketing/mobile-clients.svg'
import cl2 from '../Assets/DigitalMarketing/mobile-clients2.svg'
import cl3 from '../Assets/DigitalMarketing/mobile-clients3.svg'
import s11 from '../Assets/DigitalMarketing/s11.svg'
import p from '../Assets/DigitalMarketing/p.png'
import l from '../Assets/DigitalMarketing/l.png'
import m from '../Assets/DigitalMarketing/m.png'
import k from '../Assets/DigitalMarketing/kevin.png'
import s from '../Assets/DigitalMarketing/siva.png'
import j from '../Assets/DigitalMarketing/jasim.png'
import sw from '../Assets/DigitalMarketing/sw.png'


import { Container } from 'react-bootstrap';

import Accordion from 'react-bootstrap/Accordion';

const AgencySharjah = () => {

	const [isSecondImageVisible, setIsSecondImageVisible] = useState(false);

	const toggleImageVisibility = () => {
		setIsSecondImageVisible(prevState => !prevState);
	};



	const [selectedService, setSelectedService] = useState('SEO');

	const getTeamImage = () => {
		switch (selectedService) {
			case 'SEO':
				return o1;
			case 'Performance Marketing':
				return team2;
			case 'Social Media':
				return team3;
			case 'Web Development':
				return team4;
			case 'Branding':
				return team5;
			default:
				return award3;
		}
	};

	const services = [
		{ name: 'SEO', logo: logos, description: 'To appear on top of Google search results and get more website visitors, leads and revenue.' },
		{ name: 'Performance Marketing', logo: logo4, description: 'To gain measurable results that drive conversions and maximise your ROI with Digital Ads.' },
		{ name: 'Social Media', logo: logo2, description: 'To build brand awareness, retain customers, and generate more leads on Social Media.' },
		{ name: 'Web Development', logo: logo3, description: 'For a website that combines engaging UI, scroll-stopping content and user-friendliness. .' },
		{ name: 'Branding', logo: logo5, description: 'To help you change the face of your brand, set a new standard and stand out from the crowd. ' },
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
		centerMode: true,
		centerPadding: '0',
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 3,
					arrows: false,
				}
			},
		]
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
		centerMode: true,
		centerPadding: '0',
	};

	var settingsHeadlinesOne = {
		className: "center",
		centerMode: true,
		autoplay: true,
		autoplaySpeed: 1000,
		infinite: true,
		centerPadding: "30%",
		slidesToShow: 1,
		speed: 500,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					centerPadding: "15%",
				},
			},
		],
	};

	var clientsSlider = {
		dots: false,
		arrows: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		pauseOnHover: true,
		centerMode: true,
		centerPadding: '0',
	};

	var settingsWhatwedo = {
		dots: false,
		arrows: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		pauseOnHover: true,
		centerMode: true,
		centerPadding: '0',
	};

	const [activeTab, setActiveTab] = useState('Performance Marketing');

	const handleTabClick = (tab) => {
		setActiveTab(tab);
	};


	const reviews = [
		{
			title: 'Natya hit the great milestone',
			subtitle: 'We achieved 10 lakh revenue in the last month. Really happy to work with Haris aboobacker, Adarsh and team, really happy to work with you dear. We should fly together more heights,Thankfully',
			username: 'Kalamandalam Sivaprasad',
			userdesignation: 'Founder of Natya Arts Learning App',
			userimg: s,
		},
		{
			title: 'This is great ! ',
			subtitle: 'The professionalism, attention to detail, and the quality of service you have demonstrated have been instrumental in our success. It is a pleasure to work with this team that consistently goes above and beyond expectations,Thank you the exceptional work. We look forward to continuing our partnership and achieving even better results.',
			username: 'Kevin Mohan',
			userdesignation: 'Marketing Head of Katara limousine',
			userimg: k,
		},
		{
			title: 'Hi team,',
			subtitle: 'Last 2 days we collected almost 2 lakhs from admission and we are spending just 15k per day,Great work team Haris&Co',
			username: 'Shijas',
			userdesignation: 'SkillBuss',
			userimg: userimg,
		},
		{
			title: 'I’m in aww struck love with your creative team,',
			subtitle: 'Kudos and keep the great good work up..I can see a rising stars soon to get hit for awards..Just merge and look forward for adding a spark of innovation and you are there my friends.',
			username: 'Swetha',
			userdesignation: 'Care n Cure',
			userimg: sw,
		},

	];
	const [currentIndex, setCurrentIndex] = useState(0);
	const [fadeClass, setFadeClass] = useState('dgfade-in');

	useEffect(() => {
		const interval = setInterval(() => {
			setFadeClass('dgfade-out');
			setTimeout(() => {
				setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
				setFadeClass('dgfade-in');
			}, 500);
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	const [showFullContent, setShowFullContent] = useState(false);

	const handleReadMoreClick = () => {
		setShowFullContent(!showFullContent);
	};


	const [activeIndex, setActiveIndex] = useState(0);
	const images = [founder, aw2, aw3];

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
		}, 3000);
		return () => clearInterval(interval);
	}, [images.length]);





	return (

		<div className='digitalmarketing-page font-page'>
			<div className="navbar-full-dg">
				<Helmet>
					<title>ROI-focused Digital Marketing Agency in Sharjah | Haris&Co</title>
					<meta name="description" content="Haris&Co. is an award-winning digital marketing agency in Sharjah that considers revenue generation first, and everything else second." />
					<link rel="canonical" href="https://harisand.co/ae/digital-marketing-agency-in-sharjah" />
				</Helmet>
				<div className="container-main">
					<div className="navbar-dg">
						<div className="logo-dg">
							<Link to='/'><img src={logo} className='logo-dg-nav' alt="Logo" /></Link>
						</div>
						<div className="itemss-dg">
							<ul>
								<li><Link to='/'>Home</Link></li>
								<li><Link to='/services'>Services</Link></li>
								{/* <li><Link to='/'>Culture</Link></li> */}
								<li><Link to='/works'>Case Studies</Link></li>
								<li><Link to='/career'>Career</Link></li>
								<li><Link to='/contact'>Contact Us</Link></li>
							</ul>
						</div>
						<div className="buttons-dg comn-main">
							<ScrollLink to="chatsection" smooth={true} duration={100} className='btn-proposal-dg'>
								GET A PROPOSAL <img src={arroww} className='arrow-icon-white-btn' alt="Icon" />
							</ScrollLink>
						</div>
					</div>
				</div>
			</div>
			<div className="container-main home-wrapper-section-dg">
				<div className="row">
					<div className="col-lg-7 ">
						<div className="home-wrapper-dg">
							<h1 className='title-wrapper-dg hide-mob-title'>An <span>Award-winning</span> Digital <br /> Marketing Agency in Sharjah</h1>
							<h2 className='title-wrapper-dg mob-title'>An <span>Award-winning</span> Digital  Marketing Agency in Sharjah</h2>
							<h4 className='sub-title-wrapper-dgs hide-mob-title'>A digital marketing company that’s on the course of powering </h4>
							<h4 className='sub-title-wrapper-dg hide-mob-title'>up brands with the power of marketing, design and tech. </h4>
							<h4 className='sub-title-wrapper-dg mob-title'>A digital marketing company that’s on the course of powering  up brands with the power of marketing, design and tech. </h4>


					
					
					
							<div className="buttons-dv-dg">
								<div className="comn-main">
									<ScrollLink to="chatsection" smooth={true} duration={500} className='btn-proposal-dg'>
										GET A PROPOSAL <img src={arroww} className='arrow-icon-white-btn' alt="Icon" />
									</ScrollLink>
								</div>
								
							</div>
							<div className="services-count-dg">
								<div className="srvc-one-dg border-dg">
									<h4 className='servc-text-dg'>600M+</h4>
									<p className='servc-sub-text-dg'>Revenue <br /> Generated</p>
								</div>
								<div className="srvc-one-dg border-dg">
									<h4 className='servc-text-dg'>150+</h4>
									<p className='servc-sub-text-dg'>Clients</p>
								</div>
								<div className="srvc-one-dg border-dg">
									<h4 className='servc-text-dg'>1000+</h4>
									<p className='servc-sub-text-dg'>Projects</p>
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
							{images.map((img, index) => (
								<img
									key={index}
									src={img}
									className={`founder-img-dg ${index === activeIndex ? 'active' : ''}`}
									alt=""
								/>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className="container-main hide-desktop">
				<div className="row">
					<div className="col-lg-12">
						<div className="row">
							<div className="services-count-dg-mobile-show">
								<div className="row-show-mobile">
									<div className="srvc-one-dg-mobil-show border-dgr">
										<h4 className='servc-text-dg'>600M+</h4>
										<p className='servc-sub-text-dg'>Revenue <br /> Generated</p>
									</div>
									<div className="srvc-one-dg-mobil-show right-padding">
										<h4 className='servc-text-dg'>05</h4>
										<p className='servc-sub-text-dg'>National-level  <br /> Awards</p>
									</div>
								</div>
								<div className="row-show-mobile">
									<div className="srvc-one-dg-mobil-show border-dgr">
										<h4 className='servc-text-dg'>150+</h4>
										<p className='servc-sub-text-dg'>Clients</p>
									</div>
									<div className="srvc-one-dg-mobil-show  right-padding">
										<h4 className='servc-text-dg'>1000+</h4>
										<p className='servc-sub-text-dg'>Projects</p>
									</div>
								</div>
							</div>
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


			<div className="mobile-clietns-section-slider">
				<div className="container-main">
					<div className="row">
						<div className="col-lg-12">
							<div className="inner-box-clients-section">
								<p className="view-all-main-slider">
									Brands that believe in us. Brands that have gone the extra mile with us.{' '}
								</p>
								<Slider {...clientsSlider}>
									<div className="image-slietnts-sliders">
										<img src={cl1} className='sliderimageclients' alt="Clients" />
									</div>
									<div className="image-slietnts-sliders">
										<img src={cl2} className='sliderimageclients' alt="Clients" />
									</div>
									<div className="image-slietnts-sliders">
										<img src={cl3} className='sliderimageclients' alt="Clients" />
									</div>
									<div className="image-slietnts-sliders">
										<img src={cl1} className='sliderimageclients' alt="Clients" />
									</div>
									<div className="image-slietnts-sliders">
										<img src={cl2} className='sliderimageclients' alt="Clients" />
									</div>
								</Slider>
							</div>
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
								<p className='fearless-sub-dg'>We are a Digital Marketing agency in Sharjah that provides everything Digital Marketing to let your brand multiply revenue and conquer the competition. We started operating in India in 2020 serving top brands over the years. Having analysed the GCC landscape, we have expanded to Sharjah with our committed team and a broad portfolio that explains our capability.										</p>
								<div className="buttons-dg-fearless comn-main hide-mob-btn">
									<Link to='/about' className='btn-proposal-dg'>Learn More About Us <img src={arroww} className='arrow-icon-white-btn' alt="Icon" /></Link>
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
									<h3 className='number-txt-dgg'>150+ </h3>
									<p className='sub-title-dgg'>Employees</p>
								</div>
								<div className="yaer-dg">
									<h3 className='number-txt-dgg'>08 </h3>
									<p className='sub-title-dgg'>Departments</p>
								</div>
							</div>
							<div className="buttons-dg-fearless comn-main no-showww full-width">
								<Link to='/about' className='btn-proposal-dg full-width text-center'>Learn More About Us <img src={arroww} className='arrow-icon-white-btn' alt="Icon" /></Link>
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
											<img src={award1} className='award-img-pc' alt="Awards" />
											<p className="award-subtext-dg">afaqs! Startup Brands Award <span className='hidemobilename'> - Best Use of Video on Social Media</span>
											</p> {/* Subtext */}
										</div>
										<div className="award-image-dg">
											<img src={award2} className='award-img-pc' alt="Awards" />
											<p className="award-subtext-dg"> Pepper Awards  <span className='hidemobilename'>- Best Single Online Video</span> </p> {/* Subtext */}
										</div>
										<div className="award-image-dg">
											<img src={award3} className='award-img-pc' alt="Awards" />
											<p className="award-subtext-dg">afaqs! Brand Storyz Award  <span className='hidemobilename'>- Best Lead Generation Campaign</span> </p> {/* Subtext */}
										</div>
										<div className="award-image-dg">
											<img src={award1} className='award-img-pc' alt="Awards" />
											<p className="award-subtext-dg">afaqs! Startup Brands Award   <span className='hidemobilename'> - Best Branded Content</span>
											</p> {/* Subtext */}
										</div>
										<div className="award-image-dg">
											<img src={b} className='award-img-pc' alt="Awards" />
											<p className="award-subtext-dg">afaqs! Startup Brands Award   <span className='hidemobilename'> - Best Social Media Campaign</span></p> {/* Subtext */}
										</div>
										<div className="award-image-dg">
											<img src={award3} className='award-img-pc' alt="Awards" />
											<p className="award-subtext-dg">afaqs! Startup Brands Award    <span className='hidemobilename'>  - Best Moment Marketing</span></p> {/* Subtext */}
										</div>
									</Slider>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="fame-inner-dg-right">
								<img src={amna} className='amna-img-dg' alt="Award" />
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
								<div className="comn-main">
									<Link to='/services' className='btn-proposal-dg'>View More <img src={arroww} className='arrow-icon-white-btn' alt="Icon" /></Link>
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>







			<div className="what-we-do-mobile-slider">
				<div className="container-main">
					<div className="row">
						<div className="col-lg-12">
							<div className="headline-dv-what">
								<h3>What We Have for You</h3>
							</div>
						</div>
						<div className="col-lg-12">
							<div className="slider-item-mobile-what-we">
								<Slider {...settingsWhatwedo}>
									<div className="items-what-we-do-main">
										<img src={s11} className='main-image-whatwedo' alt="Services" />
										<h3>SEO</h3>
										<p>To appear on top of Google search results and get more website visitors, leads and revenue.</p>
										<div className="btn-view-more-dv">
											<Link to='/contact' className='btn-proposal-dg'>View More <img src={arroww} className='arrow-icon-white-btn' alt="Arrow" /></Link>
										</div>
									</div>
									<div className="items-what-we-do-main">
										<img src={team2} className='main-image-whatwedo' alt="Services" />
										<h3>Performance Marketing</h3>
										<p>To gain measurable results that drive conversions and maximise your ROI with Digital Ads.</p>
										<div className="btn-view-more-dv">
											<Link to='/contact' className='btn-proposal-dg'>View More <img src={arroww} className='arrow-icon-white-btn' alt="Arrow" /></Link>
										</div>
									</div>
									<div className="items-what-we-do-main">
										<img src={team3} className='main-image-whatwedo' alt="Services" />
										<h3>Social Media</h3>
										<p>To build brand awareness, retain customers, and generate more leads on Social Media.</p>
										<div className="btn-view-more-dv">
											<Link to='/contact' className='btn-proposal-dg'>View More <img src={arroww} className='arrow-icon-white-btn' alt="Arrow" /></Link>
										</div>
									</div>
									<div className="items-what-we-do-main">
										<img src={team4} className='main-image-whatwedo' alt="Services" />
										<h3>Web Development</h3>
										<p>For a website that combines engaging UI, scroll-stopping content and user-friendliness.</p>
										<div className="btn-view-more-dv">
											<Link to='/contact' className='btn-proposal-dg'>View More <img src={arroww} className='arrow-icon-white-btn' alt="Arrow" /></Link>
										</div>
									</div>
									<div className="items-what-we-do-main">
										<img src={team5} className='main-image-whatwedo' alt="Services" />
										<h3>Branding</h3>
										<p>To help you change the face of your brand, set a new standard and stand out from the crowd.</p>
										<div className="btn-view-more-dv">
											<Link to='/contact' className='btn-proposal-dg'>View More <img src={arroww} className='arrow-icon-white-btn' alt="Arrow" /></Link>
										</div>
									</div>
								</Slider>
							</div>
						</div>
					</div>
				</div>
			</div>




			<div className="white-section-dg">
				{/* <div className="container-main">
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
					<Slider {...settingsHeadlinesOne}>
						<div className="featured-img-dv-main">
							<div className="main-dv-for-img">
								<img src={f1} className='dg-feature-img' alt="Featured Image" />
								<div className="bgcolor-dg"></div>
								<img src={arrowhover} className='hover-arrow-main-dg' alt="Arrow" />
							</div>
						</div>
						<div className="featured-img-dv-main">
							<div className="main-dv-for-img">
								<img src={f2} className='dg-feature-img' alt="Featured Image" />
								<div className="bgcolor-dg"></div>
								<img src={arrowhover} className='hover-arrow-main-dg' alt="Arrow" />
							</div>
						</div>
						<div className="featured-img-dv-main">
							<div className="main-dv-for-img">
								<img src={f3} className='dg-feature-img' alt="Featured Image" />
								<div className="bgcolor-dg"></div>
								<img src={arrowhover} className='hover-arrow-main-dg' alt="Arrow" />
							</div>
						</div>
						<div className="featured-img-dv-main">
							<div className="main-dv-for-img">
								<img src={f4} className='dg-feature-img' alt="Featured Image" />
								<div className="bgcolor-dg"></div>
								<img src={arrowhover} className='hover-arrow-main-dg' alt="Arrow" />
							</div>
						</div>
					</Slider>
				</div> */}
				{/* discuss  */}
				<div className="discuss-dg-main">
					<div className="container-main">
						<div className="row">
							<div className="col-lg-12">
								<div className="lets-discuss-main-dg">
									<div className="half-dg-discss">
										<h3 className='discuss-title-dg'>Let's Discuss How We Can Grow </h3>
										<h3 className='discuss-title-dg'> Your Business</h3>

									</div>
									<div className="righthalf-dg-discss comn-main">
										<Link
											to="#"
											className='btn-proposal-dg'
											onClick={() => window.location.href = 'https://wa.me/918075040330'}
										>
											Consult Us <img src={arroww} className='arrow-icon-white-btn' alt="Icon" />
										</Link>									</div>
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
										<p
											className={`items-dg ${activeTab === 'Branding' ? 'active-dg-item' : ''}`}
											onClick={() => handleTabClick('Branding')}
										>
											Branding
										</p>
										<p
											className={`items-dg ${activeTab === 'Creative Strategy' ? 'active-dg-item' : ''}`}
											onClick={() => handleTabClick('Creative Strategy')}
										>
											Creative Strategy
										</p>

										<p
											className={`items-dg ${activeTab === 'Web Development' ? 'active-dg-item' : ''}`}
											onClick={() => handleTabClick('Web Development')}
										>
											Web Development
										</p>
									</div>
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
											<h4 className="heading-casestudy-service-dg">From 0 to ₹6 Million Revenue per month (4+ ROAS)												</h4>
											<div className="time-date-dg">
												<img src={clock} className='clock-icon-dg' alt="Clock Icon" />
												<p className="text-of-time">March 8, 2024</p>
											</div>
											<p className="description-service-dg">Explore how we transformed Bluetyga into a revenue-generating company from scratch. 												</p>
										</div>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="casestudy-card-dg">
										<div className="sub-full-dv-dg">
											<div className="img-box-dgg">
												<img src={case2} className='casestudy-img-box' alt="CaseStudy" />
											</div>
											<div className="details-case-dv-dv">
												<h4 className='heading-casestudy-service-dg-sub'>Generated a Massive ₹10 Million in 6 Months	</h4>
												<div className="time-date-dg">
													<img src={clock} className='clock-icon-dg' alt="Icon" />
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
												<h4 className='heading-casestudy-service-dg-sub'> Boosted the Sales by 2x in Just 1 Month!
												</h4>
												<div className="time-date-dg">
													<img src={clock} className='clock-icon-dg' alt="" />
													<p className='text-of-time'>March 8, 2024</p>
												</div>
												<p className='description-service-dg grey-clr-fg'>Here is the detailed story of how we helped Strabo hurdle the challenges and increase their revenue. </p>
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
										<img src={s1} className='casestudy-img-box' alt="Performance Marketing" />
										<div className="details-case-dv-dv">
											<h4 className="heading-casestudy-service-dg"> Website Visits Shot From 1K to a Massive 2 Lakhs+												</h4>
											<div className="time-date-dg">
												<img src={clock} className='clock-icon-dg' alt="Clock Icon" />
												<p className="text-of-time">March 8, 2024</p>
											</div>
											<p className="description-service-dg">Read in detail the challenges Kairali TMT faced, what we did to address them and the results they achieved.
											</p>
										</div>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="casestudy-card-dg">
										<div className="sub-full-dv-dg">
											<div className="img-box-dgg">
												<img src={s2} className='casestudy-img-box' alt="" />
											</div>
											<div className="details-case-dv-dv">
												<h4 className='heading-casestudy-service-dg-sub'>Generated 500+ Sales-qualified Leads in Just 6 Months
												</h4>
												<div className="time-date-dg">
													<img src={clock} className='clock-icon-dg' alt="" />
													<p className='text-of-time'>March 8, 2024</p>
												</div>
												<p className='description-service-dg grey-clr-fg'>Explore how we helped BOSQ increase organic lead generation and website visits.
												</p>
											</div>
										</div>
									</div>
									<div className="casestudy-card-dg">
										<div className="sub-full-dv-dg">
											<div className="img-box-dgg">
												<img src={s3} className='casestudy-img-box' alt="" />
											</div>
											<div className="details-case-dv-dv">
												<h4 className='heading-casestudy-service-dg-sub'>Ranked a Skin Care Brand Above Giants Like Nykaa, Amazon, and Macaron</h4>
												<div className="time-date-dg">
													<img src={clock} className='clock-icon-dg' alt="" />
													<p className='text-of-time'>March 8, 2024</p>
												</div>
												<p className='description-service-dg grey-clr-fg'>Read in detail the strategy we implemented to make Skin Bae stand out on Google.
												</p>
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
										<img src={p1} className='casestudy-img-box' alt="Performance Marketing" />
										<div className="details-case-dv-dv">
											<h4 className="heading-casestudy-service-dg">1 Campaign -  1.8 Million Views and 157000+ Likes!

											</h4>
											<div className="time-date-dg">
												<img src={clock} className='clock-icon-dg' alt="Clock Icon" />
												<p className="text-of-time">March 8, 2024</p>
											</div>
											<p className="description-service-dg">This campaign's case study shows how enormous the results can be with influencer marketing.
											</p>
										</div>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="casestudy-card-dg">
										<div className="sub-full-dv-dg">
											<div className="img-box-dgg">
												<img src={p3} className='casestudy-img-box' alt="" />
											</div>
											<div className="details-case-dv-dv">
												<h4 className='heading-casestudy-service-dg-sub'>Garnered 6M Views for JBL’s Vishu Campaign
												</h4>
												<div className="time-date-dg">
													<img src={clock} className='clock-icon-dg' alt="" />
													<p className='text-of-time'>March 8, 2024</p>
												</div>
												<p className='description-service-dg grey-clr-fg'>This case study about the Vishu campaign for JBL shows the power of influencer marketing.
												</p>
											</div>
										</div>
									</div>
									<div className="casestudy-card-dg">
										<div className="sub-full-dv-dg">
											<div className="img-box-dgg">
												<img src={p2} className='casestudy-img-box' alt="" />
											</div>
											<div className="details-case-dv-dv">
												<h4 className='heading-casestudy-service-dg-sub'>Influencer Campaign Brought 364K+ Views for Reliance Trends
												</h4>
												<div className="time-date-dg">
													<img src={clock} className='clock-icon-dg' alt="" />
													<p className='text-of-time'>March 8, 2024</p>
												</div>
												<p className='description-service-dg grey-clr-fg'>Learn how we ideated a perfect campaign for Reliance Trends and drove 1000s of views.</p>
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
										<img src={sm1} className='casestudy-img-box' alt="Performance Marketing" />
										<div className="details-case-dv-dv">
											<h4 className="heading-casestudy-service-dg"> Hit 41K Views for Reels Within 5 Days</h4>
											<div className="time-date-dg">
												<img src={clock} className='clock-icon-dg' alt="Clock Icon" />
												<p className="text-of-time">March 8, 2024</p>
											</div>
											<p className="description-service-dg">See how the inauguration campaign of Care n Cure drove brand awareness.
											</p>
										</div>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="casestudy-card-dg">
										<div className="sub-full-dv-dg">
											<div className="img-box-dgg">
												<img src={sm2} className='casestudy-img-box' alt="" />
											</div>
											<div className="details-case-dv-dv">
												<h4 className='heading-casestudy-service-dg-sub'>17,000 to 59,900 Followers in Just 60 Days
												</h4>
												<div className="time-date-dg">
													<img src={clock} className='clock-icon-dg' alt="" />
													<p className='text-of-time'>March 8, 2024</p>
												</div>
												<p className='description-service-dg grey-clr-fg'>Learn the way KiddieBus cracked the followers-winning formula with our strategy.
												</p>
											</div>
										</div>
									</div>
									<div className="casestudy-card-dg">
										<div className="sub-full-dv-dg">
											<div className="img-box-dgg">
												<img src={sm3} className='casestudy-img-box' alt="" />
											</div>
											<div className="details-case-dv-dv">
												<h4 className='heading-casestudy-service-dg-sub'>100,000 Impressions and 100,000 Engagements Within One Week
												</h4>
												<div className="time-date-dg">
													<img src={clock} className='clock-icon-dg' alt="" />
													<p className='text-of-time'>March 8, 2024</p>
												</div>
												<p className='description-service-dg grey-clr-fg'>Here is how Care n Cure found a way with us to skyrocket their impressions and engagements.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						)}

						{activeTab === 'Branding' && (
							<div className='row'>
								<div className="col-lg-6">
									<div className="casestudy-card-dg height-dg">
										<img src={br1} className='casestudy-img-box' alt="Performance Marketing" />
										<div className="details-case-dv-dv">
											<h4 className="heading-casestudy-service-dg">Automate My Biz
											</h4>
											<div className="time-date-dg">
												<img src={clock} className='clock-icon-dg' alt="Clock Icon" />
												<p className="text-of-time">March 8, 2024</p>
											</div>
											<p className="description-service-dg">Logo, Website UI, ID Card design, and Banners. We gave them all to create a face.

											</p>
										</div>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="casestudy-card-dg">
										<div className="sub-full-dv-dg">
											<div className="img-box-dgg">
												<img src={br2} className='casestudy-img-box' alt="" />
											</div>
											<div className="details-case-dv-dv">
												<h4 className='heading-casestudy-service-dg-sub'>Quarter Plate
												</h4>
												<div className="time-date-dg">
													<img src={clock} className='clock-icon-dg' alt="" />
													<p className='text-of-time'>March 8, 2024</p>
												</div>
												<p className='description-service-dg grey-clr-fg'>Witness what our branding team ideated and developed for this restaurant.
												</p>
											</div>
										</div>
									</div>
									<div className="casestudy-card-dg">
										<div className="sub-full-dv-dg">
											<div className="img-box-dgg">
												<img src={br3} className='casestudy-img-box' alt="" />
											</div>
											<div className="details-case-dv-dv">
												<h4 className='heading-casestudy-service-dg-sub'>Heal Bev

												</h4>
												<div className="time-date-dg">
													<img src={clock} className='clock-icon-dg' alt="" />
													<p className='text-of-time'>March 8, 2024</p>
												</div>
												<p className='description-service-dg grey-clr-fg'>Explore everything we developed from an elegant logo to an eye-catching package design for this beverage brand.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						)}

						{activeTab === 'Creative Strategy' && (
							<div className='row'>
								<div className="col-lg-6">
									<div className="casestudy-card-dg height-dg">
										<img src={cr1} className='casestudy-img-box' alt="Performance Marketing" />
										<div className="details-case-dv-dv">
											<h4 className="heading-casestudy-service-dg">Scaled Revenue by 110%+ in Just 4 Months

											</h4>
											<div className="time-date-dg">
												<img src={clock} className='clock-icon-dg' alt="Clock Icon" />
												<p className="text-of-time">March 8, 2024</p>
											</div>
											<p className="description-service-dg">Learn how we scaled Skin Bae - a Korean skincare brand, from 900,000 to 20,00,000
											</p>
										</div>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="casestudy-card-dg">
										<div className="sub-full-dv-dg">
											<div className="img-box-dgg">
												<img src={cr2} className='casestudy-img-box' alt="" />
											</div>
											<div className="details-case-dv-dv">
												<h4 className='heading-casestudy-service-dg-sub'>Fetched 147 Registrations for a Workshop in Just 14 Days
												</h4>
												<div className="time-date-dg">
													<img src={clock} className='clock-icon-dg' alt="" />
													<p className='text-of-time'>March 8, 2024</p>
												</div>
												<p className='description-service-dg grey-clr-fg'>This case study shows how Million Dots found their lead generation campaign successful.
												</p>
											</div>
										</div>
									</div>
									<div className="casestudy-card-dg">
										<div className="sub-full-dv-dg">
											<div className="img-box-dgg">
												<img src={cr3} className='casestudy-img-box' alt="" />
											</div>
											<div className="details-case-dv-dv">
												<h4 className='heading-casestudy-service-dg-sub'>1 Video - 3+ ROAS & 380,000+ Impressions

												</h4>
												<div className="time-date-dg">
													<img src={clock} className='clock-icon-dg' alt="" />
													<p className='text-of-time'>March 8, 2024</p>
												</div>
												<p className='description-service-dg grey-clr-fg'>Learn how creativity paved the way for Blue Tyga to increase sales and brand awareness.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						)}

						{activeTab === 'Web Development' && (
							<div className='row'>
								<div className="col-lg-6">
									<div className="casestudy-card-dg height-dg">
										<img src={w1} className='casestudy-img-box' alt="Performance Marketing" />
										<div className="details-case-dv-dv">
											<h4 className="heading-casestudy-service-dg">Redesigned an E-commerce Store
											</h4>												<div className="time-date-dg">
												<img src={clock} className='clock-icon-dg' alt="Clock Icon" />
												<p className="text-of-time">March 8, 2024</p>
											</div>
											<p className="description-service-dg">Take a look into Popees’ (a leading Kidswear brand) brand new website.
											</p>
										</div>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="casestudy-card-dg">
										<div className="sub-full-dv-dg">
											<div className="img-box-dgg">
												<img src={w2} className='casestudy-img-box' alt="" />
											</div>
											<div className="details-case-dv-dv">
												<h4 className='heading-casestudy-service-dg-sub'>Gave a New Look for Walkaroo’s Store
												</h4>
												<div className="time-date-dg">
													<img src={clock} className='clock-icon-dg' alt="" />
													<p className='text-of-time'>March 8, 2024</p>
												</div>
												<p className='description-service-dg grey-clr-fg'>See how the redesigned Ecommerce website we developed for Walkaroo brought them leads.
												</p>
											</div>
										</div>
									</div>
									<div className="casestudy-card-dg">
										<div className="sub-full-dv-dg">
											<div className="img-box-dgg">
												<img src={w3} className='casestudy-img-box' alt="" />
											</div>
											<div className="details-case-dv-dv">
												<h4 className='heading-casestudy-service-dg-sub'>A Complete Revamp
												</h4>
												<div className="time-date-dg">
													<img src={clock} className='clock-icon-dg' alt="" />
													<p className='text-of-time'>March 8, 2024</p>
												</div>
												<p className='description-service-dg grey-clr-fg'>We gave Nassguard's website a completely new look.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						)}
						<div className="row">
							<div className="col-lg-12">
								<div className="center-dv-btn-box">
									<div className="button-view-more-dg comn-main ">
										<Link to='/works' className='btn-proposal-dg'>View More <img src={arroww} className='arrow-icon-white-btn' alt="" /></Link>
									</div>
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
			<div className="chat-section-digital" id='chatsection'>	
				<div className="container-main">
					<div className="row">
						<div className="col-lg-6">
							<div className="chat-inner-box-dv-dg">
								<h3 className='lets-chat-title-dg'>Let's Have a Chat</h3>
								<p className='lets-chat-sub-title-dg'>Give us a call or email us to learn more about our digital marketing services in Sharjah. Need a face-to-face discussion? Feel free to visit us. 	</p>
								<div className="address-details-div">
									<div className="half-full-icon-svg">
										<div className="half-address-svg">
											<img src={p} className='half-icon-imge' alt="" />
											<div className="brdr-chat">
												<p className='chat-section-item'>For More Enquires</p>
												<Link className='atag-link'>+971 55 490 8107</Link>
											</div>
										</div>
										<div className="half-address-svg">
											<img src={m} className='half-icon-imge' alt="" /> 
											<div className="brdr-chat">
												<p className='chat-section-item'>Email Us At</p>
												<Link className='atag-link'>haris@harisand.co</Link>
											</div>
										</div>
									</div>
									<div className="full-contents-dg">
										<img src={l} className='half-icon-imge rttt' alt="" />
										<div className="brdr-chat">
											<p className='chat-section-item'>Abdulla Kamber Business Center, Room No 103, First Floor,  Abu Baker Al Siddique St, Deira - Dubai
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6 pos-main">
							<div className="get-call-back-dg-pink">
								<h4 className='get-call-back-text-dg'>Get a Callback</h4>
								<div className='border-white-line'></div>
								<form id="myForm" className='form-get-call-back-dg' action="https://api.web3forms.com/submit" method="POST">
									<input type="hidden" name="access_key" value="f94f2cd3-c0a3-494b-a2d4-ca767a1fd557" />
									<div className="row">
										<div className="col-lg-6">
											<div class="form-group">
												<label for="exampleInputEmail1">Full Name</label>
												<input type="text" name='Full Name' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
											</div>
										</div>
										<div className="col-lg-6">
											<div class="form-group">
												<label for="exampleInputEmail1">Company/Organization*</label>
												<input type="text" name='Company/Organization*' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
											</div>
										</div>
										<div className="col-lg-6">
											<div class="form-group">
												<label for="exampleInputEmail1">Phone*</label>
												<input type="number" name='Company/Organization*' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
											</div>
										</div>
										<div className="col-lg-6">
											<div class="form-group">
												<label for="exampleInputEmail1">Company email*</label>
												<input type="email" name='Company email*' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
											</div>
										</div>
										<div className="col-lg-12">
											<div class="form-group">
												<label for="exampleInputEmail1">Message*</label>
												<textarea type="text" name='Message*' class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
											</div>
										</div>
										<div className="col-lg-12">
											<div className="buttons-social-media comn-main flx-spabtw">
												<button class="btn-proposal-dg btn font-noraml" type="submit"> Submit Now <img src={arroww} className='arrow-icon-white-btn' alt="" /></button>
												<div className="icons-social-media-dg">
												<Link to='https://www.linkedin.com/company/harisand-co/mycompany/verification/'>	<img src={facebook} className='icones-social-media-dg-img' alt="" /></Link>
													<Link to='https://www.facebook.com/harisandconsulting'> <img src={instagram} className='icones-social-media-dg-img' alt="" />  </Link>
													<Link to='https://www.instagram.com/harisand.co/?hl=en'><img src={twitter} className='icones-social-media-dg-img' alt="" />  </Link>
													<Link to='https://x.com/harisand_co'><img src={linkedin} className='icones-social-media-dg-img right-no' alt="" /></Link>
												</div>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* map section  */}
			<div className="map-section-dg-main">
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14431.96499292783!2d55.31342625617982!3d25.270879844095365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5daecba2846d%3A0xbe655d3f8333934!2sHARIS%26CO.%20ACADEMY%20DUBAI!5e0!3m2!1sen!2sin!4v1729926197228!5m2!1sen!2sin" width="100" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
			</div>
			{/* faq secton  */}
			<div className="faq-section-dg">
				<div className="container-main">
					<div className="row">
						<div className="col-lg-12">
							<div className="faq-section-div-box-dg">
								<h2 className='title-text-faq-dg'>FAQs</h2>
							</div>
						</div>
						<div className="col-lg-12">
							<div className="faq-drop-down-main">
								<Accordion defaultActiveKey="0" flush>

									<Accordion.Item eventKey="0">
										<Accordion.Header> Do you provide digital marketing for D2C businesses in Sharjah, UAE?
										</Accordion.Header>
										<Accordion.Body>
											Of course, we have various clients from the D2C sector that have driven successful results with us. We also provide our digital marketing services in Sharjah to B2B and B2C companies as well. Contact us to learn how we can help your business thrive.
										</Accordion.Body>
									</Accordion.Item>

									<Accordion.Item eventKey="1">
										<Accordion.Header>Where are your clients from?										</Accordion.Header>
										<Accordion.Body>
											Most of our clients are based in the UAE, Saudi and India. Our clientele also has businesses from Bahrain, Qatar, Kuwait and Oman as well. We’ve been serving UAE-based since our commencement. In fact, a few of our first clients were from the UAE.
										</Accordion.Body>
									</Accordion.Item>

									<Accordion.Item eventKey="2">
										<Accordion.Header>  How do I know if my digital marketing campaigns are successful?
										</Accordion.Header>
										<Accordion.Body>
											Website traffic, lead generation, conversions (sales), engagement on social media, and return on investment (ROI) are some common metrics you can check to measure success. However, with Haris&Co., you need not worry about this part. We sent detailed reports periodically to help you get an outline of how our marketing efforts are panning out.
										</Accordion.Body>
									</Accordion.Item>

									<Accordion.Item eventKey="3">
										<Accordion.Header> What digital marketing technique would be the best for my business?
										</Accordion.Header>
										<Accordion.Body>
											There is no definite answer for this. The mode of marketing depends on the type of your business, your industry, your current brand awareness and your business goals.
											In some instances, just Social Media should suffice. In some cases, you will have to integrate Performance Marketing as well to boost the results. It’s better to consult with us before so that we can provide the right recommendations.

										</Accordion.Body>
									</Accordion.Item>

									<Accordion.Item eventKey="4">
										<Accordion.Header> Will there be instant results?
										</Accordion.Header>
										<Accordion.Body>
											Some aspects of digital marketing, like performance marketing (digital ads), may deliver relatively quick results. However, SEO and content marketing take time to build authority and organic traffic. We'll set realistic expectations and track your progress towards your goals.
										</Accordion.Body>
									</Accordion.Item>


									<Accordion.Item eventKey="5">
										<Accordion.Header>  What industries do you serve?
										</Accordion.Header>
										<Accordion.Body>
											Over the years, we have worked with brands from the following industries:

											Architecture,
											Automobile,
											Construction,
											Consultancy,
											Ed-tech,
											FMCG,
											Footwear,
											Furniture,
											Healthcare,
											Hotel,
											Jewellery,
											Kidswear,
											Landscaping,
											Logistics,
											Packaging,
											Petroleum,
											Pharmaceutical,
											Plywood,
											SaaS,
											Skincare,
											Technology,
											and more…



										</Accordion.Body>
									</Accordion.Item>

									<Accordion.Item eventKey="6">
										<Accordion.Header> Is Digital Marketing in demand in Sharjah?
										</Accordion.Header>
										<Accordion.Body>
											Indeed, Digital Marketing is highly sought-after in Sharjah due to the increased number of internet users, social media and search engines. Here are some statistics from DataReportal that show the significance of Digital Marketing in Sharjah:


											<ul>
												<li>9.5 million individuals use the internet in the UAE												</li>
												<li>96% of internet users own a smartphone</li>
												<li>95% of the internet users use social media</li>
												<li>On average, people spend 8 hours and 11 minutes daily on the internet												</li>
												<li>Social media and search engines are top-visited sites with 99% of the internet users visiting the former and 88% visiting the latter. </li>
												<li>51% of internet users use Social networks to research brands and products												</li>
												<li>64% of internet users purchase a product each week</li>
												<li>Search engines (33% of users) and social media (34% of users) are the top sources of brand discovery. 												</li>
											</ul>


										</Accordion.Body>
									</Accordion.Item>

									<Accordion.Item eventKey="7">
										<Accordion.Header> Is it worth paying for Digital Marketing in Sharjah?
										</Accordion.Header>
										<Accordion.Body>
											The digital landscape of Sharjah is thriving with 9.5 million internet users. With many companies already investing in Digital Marketing, it’s a must to pay for Digital Marketing in Sharjah to stay ahead of the competition.
										</Accordion.Body>
									</Accordion.Item>

									<Accordion.Item eventKey="8">
										<Accordion.Header>  Is it worth hiring a Digital Marketing agency in Sharjah?
										</Accordion.Header>
										<Accordion.Body>
											Yes! To get the best out of your Digital Marketing efforts, you need strategies backed by data and proper market study. And for that, you need experts. When you hire a Digital Marketing agency like Haris&Co., you get a team that has proven experience and expertise in the field.

										</Accordion.Body>
									</Accordion.Item>

								</Accordion>
							</div>
						</div>
					</div>
				</div>
			</div>


			<div className='seocontent'>
				<Container>
					<div className='headcontent'>
						<h2 className='hd'>Best Digital Marketing Agency in Sharjah Focused on Revenue Generation						</h2>
						<p className='txt'>Likes, shares, traffic and all are great. But, what matters for a business is revenue, right? Well, that’s what our strategies also focus on. The Digital marketing services in Sharjah we offer at Haris&Co. may be the same other digital marketing companies in Sharjah offer, but the key difference is our approach where our tactics are optimised with a laser focus on boosting your return on investment.
						</p>

						<p className='txt'>Thus far, we have driven more than ₹600 Million for our clients including top brands such as Visa Guy, Walkaroo, Skin Bae, BOSQ, Afyun Plywood, Femisafe, Milliondots, Algate, Francis Alukkas and many more.
						</p>
					</div>
					<div className='headcontent'>
						<h2 className='twohd'>Why Opt for Us As Your Digital Marketing Company in Sharjah
						</h2>

						<ul>
							<li>
								A Compelling Portfolio: Our works and results explain what we are and what we are capable of. Regardless of the type, size or industry, we have lent a hand to businesses to grow to the next level without data-oriented digital marketing strategies. Check out the portfolio to see the results for yourself.

							</li>
							<li>
								Experienced Team: Our team is comprised of passionate and experienced digital marketing experts. We stay ahead of the curve with the latest trends and technologies to ensure your campaigns are innovative and effective.

							</li>

							{showFullContent ? (
								<>
									<li>
										ROI-focused Approach: As one of the best digital marketing agencies in Sharjah we believe in transparency and accountability. That's why we focus on measurable results that directly impact your bottom line. We'll work closely with you to define your goals and develop a customised strategy that delivers a strong ROI.

									</li>
									<li>
										Client-Centric:  We take the time to understand your unique business needs and target audience. This ensures our campaigns are tailored to resonate with your ideal customers and achieve your specific goals.

									</li>
									<li>
										Data-Driven Decisions: We are not fans of guesswork. Every decision we make is backed by data and analytics, allowing us to constantly optimise your campaigns for maximum impact.

									</li>
									<li>
										Long-Term Partnerships: We believe in building long-term partnerships with our clients. We're here to help you achieve sustainable growth, not just a quick fix.
									</li>
									<p className='txt'>So, when you choose Haris&Co as your digital marketing agency in Sharjah, you're gaining a trusted partner dedicated to driving real revenue for your business. Sounds awesome, right?
									</p>
									<div className='headcontent  headcontent-sub'>
										<h2 className='threehd'>Bagging Awards On the Way
										</h2>
										<p className='txt'>Haris&co. isn't just another digital marketing agency in Sharjah, UAE. We do everything passionately, be it SEO activities, Social Media campaigns or Performance Marketing campaigns. Over the years, we have delivered a shedload of projects to our clients and we have won awards for our work. Here is the list of awards we have won thus far:

										</p>
										<ul>
											<li>
												1. afaqs! Startup Brands Award - Best Use of Video on Social Media
											</li>
											<li>
												2. afaqs! Startup Brands Award - Best Branded Content

											</li>
											<li>
												3. afaqs! Startup Brands Award - Best Moment Marketing

											</li>
											<li>
												4. afaqs! Startup Brands Award - Best Social Media Campaign

											</li>
											<li>
												5. Pepper Awards - Best Single Online Video

											</li>
											<li>
												6. afaqs! Brand Storyz Award - Best Lead Generation Campaign

											</li>
										</ul>
									</div>
								</>
							) : (
								<button onClick={handleReadMoreClick} className='readmore-btn'>Read More</button>
							)}
						</ul>


					</div>

				</Container>
			</div>

			<div className="footer-main-dg-page">
				<div className="container-main">
					<div className="row">
						<div className="col-lg-3">
							<div className="footer-box-dg-main">
								<img src={footerlogo} className='footer-logo-img-dg' alt="Logo Footer" />
								<img src={google} className='google-logo' alt="Icons" />
								<div className="icons-social-media-dg-footer">
									<img src={instagram} className='icones-social-media-dg-imgs' alt="Icons" />
									<img src={twitter} className='icones-social-media-dg-imgs' alt="Icons" />
									<img src={facebook} className='icones-social-media-dg-imgs' alt="Icons" />
									<img src={linkedin} className='icones-social-media-dg-imgs right-no' alt="Icons" />
								</div>
							</div>
						</div>
						<div className="col-lg-3">
							<div className="footer-box-dg-main">
								<h3 className='text-menu-item-footer'>Menu</h3>
								<ul>
									<li><Link to='/'>Home</Link></li>
									<li><Link to='/'>Services</Link></li>
									<li><Link to='/'>Culture</Link></li>
									<li><Link to='/'>Case Studies</Link></li>
									<li><Link to='/'>Contacts</Link></li>
								</ul>
							</div>
						</div>
						<div className="col-lg-3">
							<div className="footer-box-dg-main">
								<h3 className='text-menu-item-footer'>Important Links</h3>
								<ul>
									<li><Link to='/'>Case Studies</Link></li>
									<li><Link to='/'>SEO</Link></li>
									<li><Link to='/'>E-commerce Marketing</Link></li>
									<li><Link to='/'>Lead Generation</Link></li>
									<li><Link to='/'>Social Media Marketing</Link></li>
								</ul>
							</div>
						</div>
						<div className="col-lg-3">
							<div className="footer-box-dg-main flx-link">
								<h3 className='text-menu-item-footer'>Get In Touch</h3>
								<ul className='footer-icondnd'>
									<li><Link to='/'>
										<img src={callfooter} className='footer-item-box-img-icon-dg' alt="Icons" />
										+971 55 490 8107
									</Link>
									</li>

									<li><Link to='/'>
										<img src={emailfooter} className='footer-item-box-img-icon-dg' alt="Icons" />
										haris@harisand.co
									</Link>
									</li>
									<li><Link to='/' className='flex-linkk'>
										<img src={locationf} className='footer-item-box-img-icon-dg' alt="Icons" />
										Abdulla Kamber Business Center, Room No 103, First Floor,  Abu Baker Al Siddique St, Deira - Dubai</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-12">
							<div className="footer-main-copy-right">
								<img src={google} className='google-logo hide-footer-mob topmargin' alt="" />
								<div className="icons-social-media-dg-footer hide-footer-mob">
									<img src={instagram} className='icones-social-media-dg-imgs' alt="Icons" />
									<img src={twitter} className='icones-social-media-dg-imgs' alt="Icons" />
									<img src={facebook} className='icones-social-media-dg-imgs' alt="Icons" />
									<img src={linkedin} className='icones-social-media-dg-imgs right-no' alt="Icons" />
								</div>
								<p className='text-copy-dg'>Copyrights © 2024 by Team Haris&Co.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default AgencySharjah;	