import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import '../components/css/Digital.css';
import '../components/css/Seo.css';
import { Link } from 'react-router-dom';
import logo from '../Assets/navlogo.png'
import founder from '../Assets/DigitalMarketing/founderhero.png'
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
import hero from '../Assets/SeoCompony/hero-image.png'
import seoteam from '../Assets/SeoCompony/SeoTeam.png'
import believeimg from '../Assets/SeoCompony/believe-image.png'
import freebox from '../Assets/SeoCompony/free.png'





import { Container } from 'react-bootstrap';

import Accordion from 'react-bootstrap/Accordion';

const SeoAbudhabi = () => {

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
			userimg: userimg,
		},
		{
			title: 'This is great ! ',
			subtitle: 'The professionalism, attention to detail, and the quality of service you have demonstrated have been instrumental in our success. It is a pleasure to work with this team that consistently goes above and beyond expectations,Thank you the exceptional work. We look forward to continuing our partnership and achieving even better results.',
			username: 'Kevin Mohan',
			userdesignation: 'Marketing Head of Katara limousine',
			userimg: userimg,
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
					<title>ROI-focused SEO Company in Abu Dhabi | Haris&Co</title>
					<meta name="description" content="We are an SEO company in Abu Dhabi that prioritises lead generation over ranks, and website visitors." />
					<link rel="canonical" href="https://harisand.co/ae/seo-company-in-abudhabi" />
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
						<div className="home-wrapper-dg">
							<h4 className='sub-title-wrapper-seo'>Best ROI-focused SEO Company in Abu Dhabi							</h4>
							<h1 className='title-wrapper-dg'>Rank. Reach. Revenue</h1>
							<h4 className='sub-title-wrapper-seos'>99% of SEO companies in Abu Dhabi give you ranks. Just 1% brings you revenue-inspiring results. We fall in the second category.							</h4>
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
									<h4 className='servc-text-seo'>8 M+</h4>
									<p className='servc-sub-text-dg'>Total Website  <br /> Clicks</p>
								</div>
								<div className="srvc-one-seo border-dg leftspacee">
									<h4 className='servc-text-seo'>10,000+</h4>
									<p className='servc-sub-text-dg'>Top 10 Keywords <br /> on Google</p>
								</div>
								<div className="srvc-one-seo leftspacee">
									<h4 className='servc-text-seo'>50, 000+ </h4>
									<p className='servc-sub-text-dg'>Leads    <br /> Generated</p>
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
										<p className='servc-sub-text-dg'> Clients</p>
									</div>
									<div className="srvc-one-dg-mobil-show  right-padding">
										<h4 className='servc-text-dg'>1000+</h4>
										<p className='servc-sub-text-dg'> Projects</p>
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



			<div className="seo-company-div-main">
				<div className="container-main">
					<div className="row">
						<div className="col-lg-7">
							<h2 className='seo-company-text-title'>The SEO Company That </h2>
							<h2 className='seo-company-text-title'>Drives Leads, Sales and </h2>
							<h2 className='seo-company-text-title'>Revenue for Your Business</h2>
						</div>
						<div className="col-lg-5">
							<div className="inner-box-seocompany">
								<p className='sub-title-seo-company'>As a result-oriented SEO agency in Abu Dhabi, we help you rise to the forefront of the search results and bring more sales-qualified visitors to your website. The best part is that we have dedicated experts for everything SEO.
								</p>
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
									<Link to='/contact' className='btn-proposal-dg'>View More <img src={arroww} className='arrow-icon-white-btn' alt="Icon" /></Link>
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
									<Link to='/contact' className='btn-proposal-dg-no-bg'>Check Out Our Case Studies<img src={arroww} className='arrow-icon-white-btn' alt="Icon" /></Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>











			<div className="white-section-dg">
				<div className="get-a-free-main">
					<div className="container-main">
						<div className="row">
							<div className="col-lg-12">
								<div className="free-box-div">
									<h2 className='free-title-main-seo'>Get a Free SEO Audit & Proposal</h2>
									<p className='free-subtitle-main-seo'>Get an overview of your website’s SEO performance and a proposal
									</p>
									<p className='free-subtitle-main-seo bottom-space-s'> including our detailed SEO plan. </p>
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
				</div>
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
			<div className="chat-section-digital">
				<div className="container-main">
					<div className="row">
						<div className="col-lg-6">
							<div className="chat-inner-box-dv-dg">
								<h3 className='lets-chat-title-dg'>Let's Have a Chat</h3>
								<p className='lets-chat-sub-title-dg'>Give us a call or email us to learn more about our digital marketing services in AbuDhabi. Need a face-to-face discussion? Feel free to visit us. 	</p>
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
										<Accordion.Header>What is SEO?</Accordion.Header>
										<Accordion.Body>
											SEO is the technique by which you can make your website appear on top of the search engine results when someone makes a search. Consequently, this can lead to an increase in website visitors and lead generation.
										</Accordion.Body>
									</Accordion.Item>

									<Accordion.Item eventKey="1">
										<Accordion.Header>Why is SEO important for my business?
										</Accordion.Header>
										<Accordion.Body>
											DataReportal's study states that nearly 50% of internet users use search engines to learn more about brands. So, being there on the top when they search is truly important. They can potentially become your next customer.
										</Accordion.Body>
									</Accordion.Item>

									<Accordion.Item eventKey="2">
										<Accordion.Header> How long does SEO take to show results?</Accordion.Header>
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
										<Accordion.Header> How can my website speed affect SEO?
										</Accordion.Header>
										<Accordion.Body>
											Basically, when your website is slow to load, the visitor will bounce off. This can increase the bounce rate, which is something Google doesn't encourage.

											Hence, this can affect your SEO efforts adversely. This is the reason why we do Technical SEO and sort every technical issue at the initial stage of our SEO projects.
										</Accordion.Body>
									</Accordion.Item>


									<Accordion.Item eventKey="5">
										<Accordion.Header> Why should I hire an SEO agency in Abu Dhabi? Can’t I do it myself?	</Accordion.Header>
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
						<h2 className='hd'>An SEO Company in Abu Dhabi That Focus on Boosting Revenue
						</h2>
						<p className='txt'>Ranks and traffic are good but what matters the most is generating leads and boosting revenue. </p>

						<p className='txt'>
As an ROI-focused SEO agency in Abu Dhabi, we formulate strategies based on your specific audience and industry. We combine in-depth keyword research,  strategic on-page optimisation, well-thought-out content strategy and effective link building to get your website noticed by the right people.
</p>

						<p className='txt'>Though we excel in boosting website traffic, we mainly focus on generating sales-qualified leads for your website through SEO. In other words, you rank for keywords that matter to your business from a sales perspective.</p>
						<p className='txt'>Stop waiting for customers to find you. Get our best SEO services in Abu Dhabi and generate leads.						</p>

					</div>
					<div className='headcontent'>
						<h2 className='twohd'>Why You Should Invest in Our SEO</h2>

						<ul>
							<li>
							Reach more interested customers: We bring people who are already searching for what you offer. They're high-quality leads compared to those seeing a random ad.

							</li>
							<li>
							Boost website traffic: As an SEO company in Abu Dhabi, we help your website rank higher in search results, meaning more people will find you naturally.</li>

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
										<h2 className='threehd'>A Streamlined SEO Company in Abu Dhabi
										</h2>
										<p className='txt'>
										Most of our projects pan out successfully because we have a clear plan. We know what we are doing right from the beginning. Here is what our process looks like</p>
										<ul>
											<li>
											Brand Understanding
											: This is where we understand your brand from top to bottom including your goals, target audience, and unique selling propositions (USP).
											</li>
											<li>
											Industry & Competitor Research
											: We study your industry, analyse your competitors' SEO strategies, and identify potential opportunities for your website.
											</li>
											<li>
											Website Audit :We conduct a comprehensive technical audit of your website to identify any SEO roadblocks and areas for improvement.
											</li>
											<li>
											Keyword Research: We research relevant keywords with high search volume and low competition to attract qualified traffic.</li>
											<li>
											Creating the SEO Plan
											: Based on our findings, we craft a customised SEO plan outlining specific strategies, timelines, and deliverables.
											</li>
											<li>
											Executing the Plan
											: We implement the SEO plan, including on-page optimisation, off-page activities, content creation, link building, and technical SEO improvements.	</li>
										
											<li>
											Tracking the Results
											: We closely monitor website traffic, keyword rankings, and other key metrics to measure progress
											</li>
											<li>
											Reporting to the Client
											: We provide regular reports with clear visualisations, keeping you informed of the campaign's performance.
											</li>
											<li>
											Tweaking the Plan
											: SEO is an ongoing process. We continuously analyse data and adjust the plan as needed to optimise for search engine algorithms.
											</li>
											<li>
											Maintaining the Results
											: We focus on long-term SEO strategies to ensure your website maintains its high ranking and organic visibility.
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
export default SeoAbudhabi;	