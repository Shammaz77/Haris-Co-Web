import React from 'react'
import '../components/css/Services.css'
import icon from '../Assets/icon-social.png'
import icontwo from '../Assets/Exclude.png'
import iconthree from '../Assets/three.png'
import iconfour from '../Assets/Union.png'
import arrow from '../Assets/icon.png'
import serviceimage from '../Assets/work-image.png'
import blogone from './../Assets/blogone.png'
import serviceimage2 from '../Assets/work-image.png'
import clients from '../Assets/clients.png'
import clientsone from '../Assets/clients-logos.png'
import clientsmobile from '../Assets/one.png'
import founder from '../Assets/Founder-main.png'
import work0 from '../Assets/workk.png'
import work2 from '../Assets/work2.png'
import work3 from '../Assets/work3.png'
import work4 from '../Assets/work4.png'
import work5 from '../Assets/work5.png'
import work6 from '../Assets/work6.png'
import foundermobile from '../Assets/Mobile-Founderr.png'
import logo from '../Assets/LogoWhite.png'
import down from '../Assets/Down.svg'
import { Link } from 'react-router-dom'
import arrows from '../Assets/arrow.svg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import vedio from '.././Assets/vedio.mp4'
import CountUp from 'react-countup';
import ptwo from '../Assets/Production/2.png';

const Home = () => {


	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		pauseOnHover: true,
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2,
					initialSlide: 2
				}
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},

			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	}


	var settingsOne = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		pauseOnHover: true,
		arrows: true,
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 2,
					initialSlide: 2,
					arrows: false,
				}
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},

			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 2,
					initialSlide: 2,
					arrows: false,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
				}
			}
		]
	}



	return (
		<div className='home-page font-h'>
			<div className="vedio-section">
			<video src={vedio} className="vedio-home" autoPlay loop muted playsInline></video>
			</div>
			<div className="fearless">
				<div className="container-main">
					<div className="row align-items-center">
						<div className="col-lg-4">
							<div className="fearless-main">
								<h2 className='fearless-title'>Fearless</h2>
							</div>
						</div>
						<div className="col-lg-6 col-md-7">
							<div className="fearless-main">
								<img src={logo} className='badge-logo' alt="logo" />
							</div>
						</div>
						<div className="col-lg-2 col-md-5">
							<div className="fearless-mains">
								<img src={down} className='scroll-icon' alt="icon" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container-main">
				<div className="services-section">
					<div className="header-service-common">
						<h2 className='header-page-name-small'>Services</h2>
						<h2 className='header-page-name-common'>Go Beyond the Ordinary with Our Creative and Digital Services</h2>
					</div>
				</div>
				<div className="services-div">
					<Slider {...settings}>
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

						<Link to='/pr'>
							<div className="services-box bluish-purple">
								<img src={icon} className='icon-service' alt="icon" />
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

						<Link to='/web'>
							<div className="services-box light-blue">
								<img src={iconfour} className='icon-service ' alt="icon" />
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

						<Link to='/seo'>
							<div className="services-box sunglow">
								<img src={icontwo} className='icon-service' alt="icon" />
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
						<Link to='/branding'>
							<div className="services-box mint-green">
								<img src={iconthree} className='icon-service' alt="icon" />
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



					</Slider>
				</div>
			</div>
			<div className="black-bg-service">
				<div className="container-main">
					<div className="header-service-common">
						<h2 className='header-page-name-small'>Works</h2>
						<h2 className='header-page-name-common'>Explore our work where creativity made a difference.</h2>
					</div>
					<div className="main-slidersss">
						<Slider {...settingsOne}>
						<div className="home-work-service hover-effect">
								<img src={ptwo} className='service-image-work' alt="service image" />
								<div className="work-details-right">
									<h2 className='work-number-text-color'>01.</h2>
									<p className='sub-text-work-hide'>At Haris&Co., we understand that your brand is more</p>
									<p className='sub-text-work'>At Haris&Co., we understand that your brand is more than just a logo or a tagline—it's the essence of your business, the story you tell, and the promise you make to your customers. Our branding services are designed to uncover and articulate your unique identity, ensuring that every touchpoint resonates with your target audience. From initial brand strategy and research to crafting a compelling visual identity, we work closely with you to build a brand that is authentic, memorable, and impactful. </p>
								</div>
							</div>
							<div className="home-work-service hover-effect">
								<img src={work0} className='service-image-work' alt="service image" />
								<div className="work-details-right">
									<h2 className='work-number-text-color'>01.</h2>
									<p className='sub-text-work-hide'>At Haris&Co., we understand that your brand is more</p>
									<p className='sub-text-work'>At Haris&Co., we understand that your brand is more than just a logo or a tagline—it's the essence of your business, the story you tell, and the promise you make to your customers. Our branding services are designed to uncover and articulate your unique identity, ensuring that every touchpoint resonates with your target audience. From initial brand strategy and research to crafting a compelling visual identity, we work closely with you to build a brand that is authentic, memorable, and impactful. </p>
								</div>
							</div>

							<div className="home-work-service hover-effect">
								<img src={work2} className='service-image-work' alt="service image" />
								<div className="work-details">
									<h2 className='work-number-text'>02.</h2>
									<p className='sub-text-work-hide'>At Haris&Co., we understand that your brand is more</p>
									<p className='sub-text-work'>At Haris&Co., we understand that your brand is more than just a logo or a tagline—it's the essence of your business, the story you tell, and the promise you make to your customers. Our branding services are designed to uncover and articulate your unique identity, ensuring that every </p>
								</div>
							</div>
							<div className="home-work-service hover-effect">
								<img src={work3} className='service-image-work' alt="service image" />
								<div className="work-details-right">
									<h2 className='work-number-text-color'>03.</h2>
									<p className='sub-text-work-hide'>At Haris&Co., we understand that your brand is more</p>
									<p className='sub-text-work'>At Haris&Co., we understand that your brand is more than just a logo or a tagline—it's the essence of your business, the story you tell, and the promise you make to your customers. Our branding services are designed to uncover and articulate your unique identity, ensuring that every touchpoint resonates with your target audience. From initial brand strategy and research to crafting a compelling visual identity, we work closely with you to build a brand that is authentic, memorable, and impactful. </p>
								</div>
							</div>
							<div className="home-work-service hover-effect">
								<img src={work4} className='service-image-work' alt="service image" />
								<div className="work-details">
									<h2 className='work-number-text'>04.</h2>
									<p className='sub-text-work-hide'>At Haris&Co., we understand that your brand is more</p>
									<p className='sub-text-work'>At Haris&Co., we understand that your brand is more than just a logo or a tagline—it's the essence of your business, the story you tell, and the promise you make to your customers. Our branding services are designed to uncover and articulate your unique identity, ensuring that every </p>
								</div>
							</div>
							<div className="home-work-service hover-effect">
								<img src={work5} className='service-image-work' alt="service image" />
								<div className="work-details-right">
									<h2 className='work-number-text-color'>05.</h2>
									<p className='sub-text-work-hide'>At Haris&Co., we understand that your brand is more</p>
									<p className='sub-text-work'>At Haris&Co., we understand that your brand is more than just a logo or a tagline—it's the essence of your business, the story you tell, and the promise you make to your customers. Our branding services are designed to uncover and articulate your unique identity, ensuring that every touchpoint resonates with your target audience. From initial brand strategy and research to crafting a compelling visual identity, we work closely with you to build a brand that is authentic, memorable, and impactful. </p>
								</div>
							</div>
							<div className="home-work-service hover-effect">
								<img src={work6} className='service-image-work' alt="service image" />
								<div className="work-details-right">
									<h2 className='work-number-text-color'>06.</h2>
									<p className='sub-text-work-hide'>At Haris&Co., we understand that your brand is more</p>
									<p className='sub-text-work'>At Haris&Co., we understand that your brand is more than just a logo or a tagline—it's the essence of your business, the story you tell, and the promise you make to your customers. Our branding services are designed to uncover and articulate your unique identity, ensuring that every touchpoint resonates with your target audience. From initial brand strategy and research to crafting a compelling visual identity, we work closely with you to build a brand that is authentic, memorable, and impactful. </p>
								</div>
							</div>
						</Slider>
					</div>
				</div>
			</div>
			<div className="clients-section-home">
				<div className="container-main">
					<div className="header-service-common">
						<h2 className='header-page-name-small'>Clients</h2>
						<h2 className='header-page-name-common'>We are not just an agency; We are your Partners in Growth.</h2>
					</div>
					<div className="row">
						<div className="col-lg-12 mobile-hide-slider">
							<div className="clients-image-main">
								<img src={clients} className='client-imagee' alt="" />
							</div>
						</div>
						<div className="col-lg-12 mobile-hide-slider">
							<div className="clients-image-main">
								<img src={clientsone} className='client-imagee' alt="" />
							</div>
						</div>
						<div className="col-lg-12 mobile-show-slider">
							<div className="clients-image-main">
								<img src={clientsmobile} className='client-imagee' alt="" />
							</div>
						</div>
						<div className="col-lg-12">
							<div className="btn-dvd">
								<div className="enquiry-btn-dv">
									<Link to='/clients' className='btn enquire-btn'>View More <img src={arrows} className='arrow-icon' alt="arrow icon" /></Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="about-harisandco">
				<div className="container-main">
					<div className="col-lg-12">
						<div className="about-content">
							<h3 className='about-text'>At <span>Haris&Co</span>, we are passionate about creativity, innovation, and delivering exceptional results for our clients. As a full-service creative agency, we specialize in crafting unique strategies that bring brands to life through marketing, branding, designing, SEO, UI/UX, and development.</h3>
							<div className="view-story">
								<div className="enquiry-btn-dv">
									<Link to='/about' className='btn enquire-btn'>View Story <img src={arrow} className='arrow-icon' alt="arrow icon" /></Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="counter-home">
				<div className="container-main">
					<div className="row">
						<div className="col-lg-4 col-md-4">
							<div className="counter-section">
								<h2 className='count-number'>
									<CountUp end={500} duration={4} suffix="+" />
								</h2>
								<h4 className='count-text'>Clients</h4>
							</div>
						</div>
						<div className="col-lg-4 col-md-4">
							<div className="counter-section">
								<h2 className='count-number'>
									<CountUp end={1000} duration={9} suffix="+" />
								</h2>
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
			</div>
			<div className="founder-section">
				<img src={founder} className='founder-main-image' alt="" />
				<img src={foundermobile} className='founder-main-image-mobile' alt="" />
			</div>
			{/* <div className="blogs-main">
				<div className="container-main">
					<div className="header-service-common">
						<h2 className='header-page-name-small'>Blogs</h2>
						<h2 className='header-page-name-common'>We let you in on the best ways to get on top of the game</h2>
					</div>
					<div className="row">
						<div className="col-lg-3 col-md-6">
							<div className="blog-main">
								<img src={blogone} className='blog-box' alt="" />
								<div className="date-time-blog">
									<h6>Events  4 min read</h6>
									<h6>January 25, 2024</h6>
								</div>
								<p className='blog-sub'>Lorem Ipsum is simply dummy text of printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="blog-main">
								<img src={blogone} className='blog-box' alt="" />
								<div className="date-time-blog">
									<h6>Events  4 min read</h6>
									<h6>January 25, 2024</h6>
								</div>
								<p className='blog-sub'>Lorem Ipsum is simply dummy text of printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="blog-main">
								<img src={blogone} className='blog-box' alt="" />
								<div className="date-time-blog">
									<h6>Events  4 min read</h6>
									<h6>January 25, 2024</h6>
								</div>
								<p className='blog-sub'>Lorem Ipsum is simply dummy text of printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="blog-main">
								<img src={blogone} className='blog-box' alt="" />
								<div className="date-time-blog">
									<h6>Events  4 min read</h6>
									<h6>January 25, 2024</h6>
								</div>
								<p className='blog-sub'>Lorem Ipsum is simply dummy text of printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>
							</div>
						</div>
					</div>
				</div>
			</div> */}
		</div>
	)
}
export default Home;