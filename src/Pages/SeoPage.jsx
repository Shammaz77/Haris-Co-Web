import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import '../components/css/Digital.css';
import '../components/css/Seo.css';	
import { Link } from 'react-router-dom';
import logo from '../Assets/navlogo.png'
import founder from '../Assets/DigitalMarketing/founderhero.png'
import clients from '../Assets/DigitalMarketing/SeoPage/clientsseo1.svg'
import clients2 from '../Assets/DigitalMarketing/SeoPage/clientsseo2.svg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logos from '../Assets/DigitalMarketing/SeoPage/seo1 1.png'
import logo2 from '../Assets/DigitalMarketing/SeoPage/technical-support1 1.png'
import logo3 from '../Assets/DigitalMarketing/SeoPage/uiux-icon.png'
import logo4 from '../Assets/DigitalMarketing/SeoPage/off-page.png'
import logo5 from '../Assets/DigitalMarketing/SeoPage/cro-icon.png'
import logo55 from '../Assets/DigitalMarketing/SeoPage/content-icon.png'
import o1 from '../Assets/DigitalMarketing/SeoPage/on page.png'
import arrowhover from '../Assets/DigitalMarketing/arrow.svg'
import clock from '../Assets/DigitalMarketing/clock.png'
import review from '../Assets/DigitalMarketing/rev.png'
import userimg from '../Assets/DigitalMarketing/SeoPage/sahil.svg'
import linkedin from '../Assets/DigitalMarketing/linkedin.svg'
import facebook from '../Assets/DigitalMarketing/facebook.svg'
import instagram from '../Assets/DigitalMarketing/instagram.svg'
import twitter from '../Assets/DigitalMarketing/twitter.svg'
import footerlogo from '../Assets/DigitalMarketing/footer-logo.svg'
import google from '../Assets/DigitalMarketing/google.png'
import callfooter from '../Assets/DigitalMarketing/callfooter.svg'
import emailfooter from '../Assets/DigitalMarketing/emailfooter.svg'
import locationf from '../Assets/DigitalMarketing/locationf.svg'
import team2 from '../Assets/DigitalMarketing/SeoPage/off page.png'
import team3 from '../Assets/DigitalMarketing/SeoPage/technical seo.png'
import team4 from '../Assets/DigitalMarketing/SeoPage/ui-ux-illu.png'
import team5 from '../Assets/DigitalMarketing/SeoPage/c.png'
import team6 from '../Assets/DigitalMarketing/SeoPage/content.png'
import s1 from '../Assets/DigitalMarketing/SeoPage/kairali new case 1.svg'
import s2 from '../Assets/DigitalMarketing/SeoPage/seo casestudy bosq 1.svg'
import s3 from '../Assets/DigitalMarketing/SeoPage/seo casestudy skinbae 1.svg'
import arroww from '../Assets/DigitalMarketing/arroww.svg'
import cl1 from '../Assets/DigitalMarketing/SeoPage/seo1.svg'
import cl2 from '../Assets/DigitalMarketing/SeoPage/seo2.svg'
import cl3 from '../Assets/DigitalMarketing/SeoPage/seo3.svg'
import cl4 from '../Assets/DigitalMarketing/SeoPage/seo4.svg'
import cl5 from '../Assets/DigitalMarketing/SeoPage/seo5.svg'
import cl6 from '../Assets/DigitalMarketing/SeoPage/seo6.svg'
import cl7 from '../Assets/DigitalMarketing/SeoPage/seo7.svg'
import p from '../Assets/DigitalMarketing/p.png'
import k from '../Assets/DigitalMarketing/kevin.png'
import l from '../Assets/DigitalMarketing/l.png'
import m from '../Assets/DigitalMarketing/m.png'
import hero from '../Assets/SeoCompony/hero-image.png'
import seoteam from '../Assets/SeoCompony/SeoTeam.png'
import believeimg from '../Assets/DigitalMarketing/SeoPage/beieve.svg'

import { Container } from 'react-bootstrap';

import Accordion from 'react-bootstrap/Accordion';

const SeoPage = () => {

	const [isSecondImageVisible, setIsSecondImageVisible] = useState(false);

	const toggleImageVisibility = () => {
		setIsSecondImageVisible(prevState => !prevState);
	};



	const [selectedService, setSelectedService] = useState('On-Page SEO');


	const getTeamImage = () => {
		switch (selectedService) {
			case 'On-Page SEO':
				return o1;
			case 'Off-Page SEO':
				return team2;
			case 'Technical SEO':
				return team3;
			case 'UI/UX Design':
				return team4;
			case 'Conversion Rate Optimisation':
				return team5;
			case 'Content Development':
				return team6;
			default:
				return o1;
		}
	};

	const services = [
		{ name: 'On-Page SEO', logo: logos, description: 'Our team expertly shortlists the right keywords, optimises the URLs, corrects the title tags, and optimises other elements on the website to tidy up in total.' },
		{ name: 'Off-Page SEO', logo: logo4, description: 'We post blogs on PR sites, list on directories, list on business listing sites and more to build your website reputation online.' },
		{ name: 'Technical SEO', logo: logo2, description: 'Our specialists audit & sort technical aspects of your website such as the load speed, security, server performance, website architecture and more to ensure optimal performance. ' },
		{ name: 'UI/UX Design', logo: logo3, description: 'For a website that combines engaging UI, scroll-stopping content and user-friendliness. .' },
		{ name: 'Conversion Rate Optimisation', logo: logo5, description: 'To help you change the face of your brand, set a new standard and stand out from the crowd. ' },
		{ name: 'Content Development', logo: logo55, description: 'To help you change the face of your brand, set a new standard and stand out from the crowd. ' },
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
			title: 'This is great ! ',
			subtitle: 'The professionalism, attention to detail, and the quality of service you have demonstrated have been instrumental in our success. It is a pleasure to work with this team that consistently goes above and beyond expectations,Thank you the exceptional work. We look forward to continuing our partnership and achieving even better results.',
			username: 'Kevin Mohan',
			userdesignation: 'Marketing Head of Katara limousine',
			userimg: k,
		},
		{
			title: '',
			subtitle: 'Recently, most of them were quality leads. This month, we received lot of leads. The sales team was appreciating. Few were really good orders.',
			username: 'Mohammed Sahil',
			userdesignation: 'Marketing Head of Afyun Plywood',
			userimg: userimg,
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






	return (

		<div className='digitalmarketing-page font-page'>
			<div className="navbar-full-dg">
				<Helmet>
					<title>Revenue Focused Digital Marketing Agency in Kerala | Haris&Co</title>
					<meta name="description" content="Grow your business with the best digital marketing agency in Kerala. We, at Haris&Co.offer all the essential digital marketing services to boost your business revenue." />
					<link rel="canonical" href="https://harisand.co/seo-company-in-kerala" />
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
							<Link to='/contact' className='btn-proposal-dg'>  GET A PROPOSAL <img src={arroww} className='arrow-icon-white-btn' alt="Icon" /></Link>
						</div>
					</div>
				</div>
			</div>
			<div className="container-main home-wrapper-section-dg">
				<div className="row">
					<div className="col-lg-7 ">
						<div className="home-wrapper-seo">
							<h4 className='sub-title-wrapper-seo'>A Rapidly Growing SEO Company in Kerala</h4>
							<h1 className='title-wrapper-dg seo-wrapper'>Rank. Reach. Revenue</h1>
							<h4 className='sub-title-wrapper-seos'>A digital marketing company that’s on the course of powering up brands <br /> with the power of marketing, design and tech. </h4>
							<div className="buttons-dv-seo">
								<div className="comn-main">
									<Link to='/contact' className='btn-proposal-dg'>GET A PROPOSAL <img src={arroww} className='arrow-icon-white-btn' alt="Icon" /></Link>
								</div>
								<div className="comn-main">
									<Link to='/contact' className='btn-proposal-dg-no-bg'>View Our Results<img src={arroww} className='arrow-icon-white-btn' alt="Icon" /></Link>
								</div>
							</div>
							<div className="services-count-seo">
								<div className="srvc-one-seo border-dg">
									<h4 className='servc-text-seo'>10,000+</h4>
									<p className='servc-sub-text-dg'>Top 10 Keywords  <br /> on Google</p>
								</div>
								<div className="srvc-one-seo border-dg leftspacee">
									<h4 className='servc-text-seo'>50,000+</	h4>
									<p className='servc-sub-text-dg'>Leads <br /> Generated</p>
								</div>
								<div className="srvc-one-seo leftspacee">
									<h4 className='servc-text-seo'>8 M+ </h4>
									<p className='servc-sub-text-dg'>Total Website   <br /> Clicks</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-5">
						<div className="founder-image-dg">
							<img src={hero} className='hero-img-seo' alt="" />
						</div>
					</div>
				</div>
			</div>
			<div className="container-main hide-desktop">
				<div className="row">
					<div className="col-lg-12">
						<div className="row">
							<div className="services-count-dg-mobile-show seo-mobile-showw">
								<div className="row-show-mobile">
									<div className="srvc-one-dg-mobil-show border-dgr">
										<h4 className='servc-text-dg'>10,000+</h4>
										<p className='servc-sub-text-dg'>Top 10 Keywords <br /> on Google</p>
									</div>
									<div className="srvc-one-dg-mobil-show right-padding">
										<h4 className='servc-text-dg'>50,000+										</h4>
										<p className='servc-sub-text-dg'>Leads  <br /> Generated</p>
									</div>
								</div>
								<div className="row-show-mobile">
									<div className="srvc-one-dg-mobil-show-last ">
										<h4 className='servc-text-dg'>8 M+										</h4>
										<p className='servc-sub-text-dg'>Total Website<br /> Clicks</p>
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
								<p className="view-all-main-slider seo-top-viw-all">
									Brands that believe in us. Brands that have gone the extra mile with us.{' '}
								</p>
								<Slider {...clientsSlider}>
									<div className="image-slietnts-sliders">
										<img src={cl1} className='sliderimageclients seo-clients-image-logos' alt="Clients" />
										<img src={cl2} className='sliderimageclients seo-clients-image-logos' alt="Clients" />
									</div>
									<div className="image-slietnts-sliders">
										<img src={cl3} className='sliderimageclients seo-clients-image-logos' alt="Clients" />
										<img src={cl4} className='sliderimageclients seo-clients-image-logos' alt="Clients" />
									</div>
									<div className="image-slietnts-sliders">
										<img src={cl5} className='sliderimageclients seo-clients-image-logos' alt="Clients" />
										<img src={cl6} className='sliderimageclients seo-clients-image-logos' alt="Clients" />
									</div>
									<div className="image-slietnts-sliders">
										<img src={cl7} className='sliderimageclients seo-clients-image-logos' alt="Clients" />
									</div>
								</Slider>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="seo-company-div-main">
				<div className="container-main">
					<div className="row">
						<div className="col-lg-7">
							<div className="hide-mobile-seo">
								<h2 className='seo-company-text-title'>The SEO Company That </h2>
								<h2 className='seo-company-text-title'>Drives Leads, Sales and </h2>
								<h2 className='seo-company-text-title'>Revenue for Your Business</h2>
							</div>
						</div>
						<div className="col-lg-7 show-mobile-seo">
							<div className="show-mobile-seo">
								<h2 className='seo-company-text-title'>The SEO Company  </h2>
								<h2 className='seo-company-text-title'>That Drives Leads, </h2>
								<h2 className='seo-company-text-title'>Sales and Revenue</h2>
								<h2 className='seo-company-text-title'>for Your Business</h2>
							</div>
						</div>
						<div className="col-lg-5">
							<div className="inner-box-seocompany">
								<p className='sub-title-seo-company'>As a result-oriented SEO company in Kerala, we help you rise to the forefront of the search results and bring more sales-qualified visitors to your website. The best part is we have dedicated experts for everything SEO.</p>
							</div>
						</div>
						<div className="col-lg-12">
							<div className="team-banner-div-seo">
								<img src={seoteam} className='team-banner-img-seo' alt="" />
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
								<h3 className='what-we-text-dgg'>Our SEO Toolkit</h3>
								<div className="main-srvcs-team-dg">
									<div className="left-services-main-dg">
										{services.map((service) => (
											<div
												key={service.name}
												className="srvc-name-dg-dv"
												onClick={() => setSelectedService(service.name)}
											>
												<img src={service.logo} className='icon-servc-seo' alt={service.name} />
												<div className="srvcs-details-text-dv">
													<h4 className='title-srvc-seeo'>{service.name}</h4>

												</div>
											</div>
										))}
									</div>

									<div className="right-services-main-dg">
										{/* Display the team image based on selected service */}
										<img src={getTeamImage()} className='team-img-dg' alt={`${selectedService} Team`} />

										{services.map((service) => (
											// Conditionally render the description based on the selected service
											selectedService === service.name && (
												<p key={service.name} className='sub-title-srvc-seo'>{service.description}</p>
											)
										))}
									</div>
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
										<img src={o1} className='main-image-whatwedo' alt="Services" />
										<h3 className='title-seo-items'>On-Page SEO										</h3>
										<p>Our team expertly shortlists the right keywords, optimises the URLs, corrects the title tags, and optimises other elements on the website to tidy up in total. 										</p>
										<div className="btn-view-more-dv">
											<Link to='/contact' className='btn-proposal-dg'>View More <img src={arroww} className='arrow-icon-white-btn' alt="Arrow" /></Link>
										</div>
									</div>
									<div className="items-what-we-do-main">
										<img src={team2} className='main-image-whatwedo' alt="Services" />
										<h3 className='title-seo-items'>Off-Page SEO</h3>
										<p>We post blogs on PR sites, list on directories, list on business listing sites and more to build your website's reputation online.										</p>
										<div className="btn-view-more-dv">
											<Link to='/contact' className='btn-proposal-dg'>View More <img src={arroww} className='arrow-icon-white-btn' alt="Arrow" /></Link>
										</div>
									</div>
									<div className="items-what-we-do-main">
										<img src={team3} className='main-image-whatwedo' alt="Services" />
										<h3 className='title-seo-items'>Technical SEO										</h3>
										<p>Our specialists audit & sort technical aspects of your website such as the load speed, security, server performance, website architecture and more to ensure optimal performance. 										</p>
										<div className="btn-view-more-dv">
											<Link to='/contact' className='btn-proposal-dg'>View More <img src={arroww} className='arrow-icon-white-btn' alt="Arrow" /></Link>
										</div>
									</div>
									<div className="items-what-we-do-main">
										<img src={team4} className='main-image-whatwedo' alt="Services" />
										<h3 className='title-seo-items'>UI/UX Design										</h3>
										<p>Following a detailed analysis, our design team develops fonts, colours and layouts to make your website attractive and easy to navigate										</p>
										<div className="btn-view-more-dv">
											<Link to='/contact' className='btn-proposal-dg'>View More <img src={arroww} className='arrow-icon-white-btn' alt="Arrow" /></Link>
										</div>
									</div>
									<div className="items-what-we-do-main">
										<img src={team5} className='main-image-whatwedo' alt="Services" />
										<h3 className='title-seo-items'>Conversion Rate Optimisation										</h3>
										<p>Our CRO experts examine the UI/UX, identifying the gaps and optimising the elements to increase the chance of converting visitors to customers.
										</p>
										<div className="btn-view-more-dv">
											<Link to='/contact' className='btn-proposal-dg'>View More <img src={arroww} className='arrow-icon-white-btn' alt="Arrow" /></Link>
										</div>
									</div>
									<div className="items-what-we-do-main">
										<img src={team6} className='main-image-whatwedo' alt="Services" />
										<h3 className='title-seo-items'>Content Development										</h3>
										<p>Our content team creates awesome content that informs, entertains, engages and ultimately converts your visitors to customers.
										</p>
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
			<div className="believeus-main">
				<div className="container-main">
					<div className="row">
						<div className="col-lg-12">
							<div className="beieve-us-dv">
								<h2 className='believe-titile-text'>Don't Believe Us? </h2>
								<h2 className='believe-sub-titile-text'>You Can Believe Our Results</h2>
							</div>
						</div>
						<div className="col-lg-12">
							<div className="img-belive">
								<img src={believeimg} className='imgbelieve' alt="" />
							</div>
						</div>
						<div className="col-lg-12">
							<div className="button-dv-main-seo-belive">
								<div className="comn-main">
									<Link to='/works' className='btn-proposal-dg-no-bg'>Check Out Our Case Studies<img src={arroww} className='arrow-icon-white-btn' alt="Icon" /></Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="white-section-seo seo-white-section">
				<div className="get-a-free-main">
					<div className="container-main">
						<div className="row">
							<div className="col-lg-12">
								<div className="free-box-div">
									<h2 className='free-title-main-seo'>Get a Free SEO Audit & Proposal</h2>
									<p className='free-subtitle-main-seo'>Get an overview of your website’s SEO performance and a proposal </p>
									<p className='free-subtitle-main-seo bottom-space-s'> including our detailed SEO plan. </p>
									
								<form className='form-seo-report'>
									<div class="form-group">
										<input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Name"/>
									</div>
									<div class="form-group">
										<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
									</div>
									<div class="form-group">
										<input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Website"/>
									</div>
								</form>
									
									
									
									<div className="form-button">
										<div className="buttons-dg comn-main">
											<button class="btn-proposal-dg btn font-noraml" type="submit"> Get it <img src={arroww} className='arrow-icon-white-btn' alt="" /></button>
										</div>
									</div>
								</div>
							
							</div>
						</div>
					</div>
				</div>

				{/* case study  */}
				<div className="casestudy-main-div-seo">
					<div className="container-main">
						<div className="row">
							<div className="col-lg-12">
								<div className="div-box-case-study-main">
									<h3 className="title-casestudy-dg-main">Our Case Studies</h3>
									<p className="sub-title-casestudy-dg-main">Read in detail about our stories of victories.</p>


								</div>
							</div>
						</div>

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
				<div className="clients-reviews-seo">
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
											<img src={p} className='half-icon-imge' alt="" />
											<div className="brdr-chat">
												<p className='chat-section-item'>For More Enquires</p>
												<Link className='atag-link'>+91 8075 040 330</Link>
											</div>
										</div>
										<div className="half-address-svg">
											<img src={m} className='half-icon-imge' alt="" />
											<div className="brdr-chat">
												<p className='chat-section-item'>Email Us At</p>
												<Link className='atag-link'>bd@harisand.co</Link>
											</div>
										</div>
									</div>
									<div className="full-contents-dg">
										<img src={l} className='half-icon-imge' alt="" />
										<div className="brdr-chat">
											<p className='chat-section-item'>2nd floor, 4 WING Avenue ,Panniyankara, 673003  Kozhikode, Kerala</p>
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
													<Link to='https://www.facebook.com/harisandconsulting'>	<img src={facebook} className='icones-social-media-dg-img' alt="" /></Link>
													<Link to='https://www.instagram.com/harisand.co/?hl=en'><img src={instagram} className='icones-social-media-dg-img' alt="" /></Link>
													<Link to='https://x.com/harisand_co'><img src={twitter} className='icones-social-media-dg-img' alt="" /></Link>
													<Link to='https://www.linkedin.com/company/harisand-co/mycompany/verification/'><img src={linkedin} className='icones-social-media-dg-img right-no' alt="" /></Link>
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
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.4842961959225!2d75.78925767424488!3d11.22574075074702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6592e5bc6ffbb%3A0xbd15f0508abb882b!2sHaris%26Co!5e0!3m2!1sen!2sin!4v1727755974041!5m2!1sen!2sin" width="100" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
										<Accordion.Header>What is SEO?
										</Accordion.Header>
										<Accordion.Body>
											SEO is the technique by which you can make your website appear on top of the search engine results when someone makes a search. Consequently, this can lead to an increase in website visitors and lead generation.
										</Accordion.Body>
									</Accordion.Item>

									<Accordion.Item eventKey="1">
										<Accordion.Header>Why is SEO important for my business?										</Accordion.Header>
										<Accordion.Body>
											DataReportal's study states that nearly 50% of internet users use search engines to learn more about brands. So, being there on the top when they search is truly important. They can potentially become your next customer.
										</Accordion.Body>
									</Accordion.Item>

									<Accordion.Item eventKey="2">
										<Accordion.Header> How long does SEO take to show results?										</Accordion.Header>
										<Accordion.Body>
											SEO is an ongoing and organic process, but you can expect to see initial results within 3-6 months with consistent effort. Long-term SEO strategy yields sustainable results.</Accordion.Body>
									</Accordion.Item>

									<Accordion.Item eventKey="3">
										<Accordion.Header>  How will you measure the success of your SEO strategy?
										</Accordion.Header>
										<Accordion.Body>
											We use tools like Google Search Console, SEMrush and Ubersuggest to track website traffic keyword ranking, leads generated, and conversions.
											Apart from that, we use tools like Microsoft Clarity and Hotjar to analyse how the users are scrolling through your website, where they are clicking and how much content they are reading. This helps us to tweak the UX and the content if required.
										</Accordion.Body>
									</Accordion.Item>

									<Accordion.Item eventKey="4">
										<Accordion.Header>How can my website speed affect SEO?
										</Accordion.Header>
										<Accordion.Body>
											Basically, when your website is slow to load, the visitor will bounce off. This can increase the bounce rate, which is something Google doesn't encourage.

											Hence, this can affect your SEO efforts adversely. This is the reason why we do Technical SEO and sort every technical issue at the initial stage of our SEO projects.
										</Accordion.Body>
									</Accordion.Item>


									<Accordion.Item eventKey="5">
										<Accordion.Header>Why should I hire an SEO agency? Can’t I do it myself?
										</Accordion.Header>
										<Accordion.Body>
											You can certainly do SEO yourself, but it's like managing your own investments – time-consuming and requiring constant learning.

											However, when you have an expert SEO company that stays on top of the latest algorithms, you can worry less about the SEO part and concentrate more on your business.


										</Accordion.Body>
									</Accordion.Item>

									<Accordion.Item eventKey="6">
										<Accordion.Header>How will you maintain the results?
										</Accordion.Header>
										<Accordion.Body>
											SEO is an ongoing process. Once you stop it, you can lose your ranks. Hence, in order to maintain the results, we consistently keep our work rolling and tweak the strategies to make good results great over time.

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
						<h2 className='hd'>An SEO Company in Kerala That Brings You Real Results

						</h2>
						<p className='txt'>Forget generic strategies and cookie-cutter campaigns. As a well-established SEO company in Kerala, we craft individualised plans that target your specific audience and industry. We don't just boost website traffic (though we excel at that too); we focus on attracting qualified visitors who are ready to convert into paying customers.</p>

						<p className='txt'>Imagine your website ranking high on search results for keywords that matter to your business. That's the power of our data-driven SEO approach. We combine in-depth keyword research, strategic on-page optimisation, and effective link building to get your website noticed by the right people.
						</p>

						<p className='txt'>Stop waiting for customers to find you. Get our SEO service in Kerala and get your website ranking high and your business booming.
						</p>
					</div>
					<div className='headcontent'>
						<h2 className='twohd'>Why You Should Invest in Our SEO
						</h2>

						<ul>
							<li>
								Reach more interested customers: We bring people who are already searching for what you offer. They're high-quality leads compared to those seeing a random ad.</li>
							<li>
								Boost website traffic: As an SEO company in Kerala, we help your website rank higher in search results, meaning more people will find you naturally.
							</li>

							{showFullContent ? (
								<>
									<li>
										Improve brand awareness: Higher rankings and organic traffic lead to more brand recognition and establish you as an authority.
									</li>
									<li>
										Get a better return on investment: Our SEO is a cost-effective way to generate leads and sales since our strategy ultimately focuses on bringing you better ROI.
									</li>
									<li>
										Long-term benefits: Unlike ads, SEO results are long-lasting. Once you rank well, you'll continue to see traffic for months or even years and we will make sure by tweaking the strategies if needed.
									</li>

									<div className='headcontent  headcontent-sub'>
										<h2 className='threehd'>Bagging Awards On the Way
										</h2>
										<p className='txt'>The SEO Company in Kerala With a Professional Process
										</p>
										<ul>
											<p className='txtbld'>1. Brand Understanding											</p>
											<p className='txt'>Our SEO team start by getting to know your brand, its goals, target audience, and unique selling proposition (USP).											</p>

											<p className='txtbld'>2. Industry & Competitor Research
											</p>
											<p className='txt'>We study your industry, analyse your competitors' SEO strategies, and identify potential opportunities for your website.
											</p>

											<p className='txtbld'>3. Website Audit											</p>
											<p className='txt'>We conduct a comprehensive technical audit of your website to identify any SEO roadblocks and areas for improvement.</p>

											<p className='txtbld'>4. Keyword Research								</p>
											<p className='txt'>We research relevant keywords with high search volume and low competition to attract qualified traffic.			</p>

											<p className='txtbld'>5. Creating the SEO Plan											</p>
											<p className='txt'>Based on our findings, we craft a customised SEO plan outlining specific strategies, timelines, and deliverables.	</p>

											<p className='txtbld'>6. Executing the Plan											</p>
											<p className='txt'>We implement the SEO plan, including on-page optimisation, off-page activities, content creation, link building, and technical SEO improvements.											</p>

											<p className='txtbld'>7. Tracking the Results											</p>
											<p className='txt'>We closely monitor website traffic, keyword rankings, and other key metrics to measure progress.
											</p>

											<p className='txtbld'>8. Reporting to the Client
											</p>
											<p className='txt'>We provide regular reports with clear visualisations, keeping you informed of the campaign's performance.
											</p>

											<p className='txtbld'>9. Tweaking the Plan											</p>
											<p className='txt'>SEO is an ongoing process. We continuously analyse data and adjust the plan as needed to optimise for search engine algorithms.</p>

											<p className='txtbld'>10. Maintaining the Results											</p>
											<p className='txt'>We focus on long-term SEO strategies to ensure your website maintains its high ranking and organic visibility.
											</p>


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
										+91 8075 040 330
									</Link>
									</li>

									<li><Link to='/'>
										<img src={emailfooter} className='footer-item-box-img-icon-dg' alt="Icons" />
										bd@harisand.co
									</Link>
									</li>
									<li><Link to='/' className='flex-linkk'>
										<img src={locationf} className='footer-item-box-img-icon-dg' alt="Icons" />
										2nd floor, 4 WING Avenue ,Panniyankara, 673003 Kozhikode, Kerala</Link>
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
export default SeoPage;	