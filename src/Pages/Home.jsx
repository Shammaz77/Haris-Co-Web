import React from 'react'
import '../components/css/Services.css'
import icon from '../Assets/icon-social.png'
import icontwo from '../Assets/Exclude.png'
import iconthree from '../Assets/three.png'
import iconfour from '../Assets/Union.png'
import arrow from '../Assets/icon.png'
import serviceimage from  '../Assets/work-image.png'
import blogone from './../Assets/blogone.png'
import serviceimage2 from '../Assets/work-image.png'
import clients from '../Assets/clients.png'
import clientsone from '../Assets/clients-logos.png'
import clientsmobile from '../Assets/one.png'
import clientsmobiles from '../Assets/two.png'
import founder from '../Assets/Founder-main.png'
import foundermobile from '../Assets/Mobile-Founder.png'
import logo from '../Assets/LogoWhite.png'
import down from '../Assets/Down.svg'
import { Link } from 'react-router-dom'
import arrows from '../Assets/arrow.svg'
const Home = () => {
	return (
		<div className='home-page'>
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
								<img src={logo}  className='badge-logo' alt="logo" />
							</div>
						</div>
						<div className="col-lg-2 col-md-5">
							<div className="fearless-mains">
								<img src={down}  className='scroll-icon' alt="icon" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container-main">
				<div className="services-section">
					<div className="header-service-common">
						<h2 className='header-page-name-small'>Services</h2>
						<h2 className='header-page-name-common'>Discover Our Full Suite of Creative and Digital Services</h2>
					</div>
				</div>
				<div className="services-div">
					<div className="row">
						<div className="col-lg-3 col-md-6">
							<div className="services-box bluish-purple">
								<img src={icon} className='icon-service' alt="icon" />
								<div className="service-details-dv">
									<h5 className='service-number'>01.</h5>
									<h3 className='service-name'>Social Media <img src={arrow} className='rotate-icon' alt="icon" /> </h3>
									<div className="hover-div">
										<div className="border-hover"></div>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni quibusdam minus similique. Dignissimos voluptatum expedita mollitia. Aliquam, assumenda?</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="services-box sunglow">
								<img src={icontwo} className='icon-service' alt="icon" />
								<div className="service-details-dv">
									<h5 className='service-number'>02.</h5>
									<h3 className='service-name'>Performance Marketing <img src={arrow} className='rotate-icon' alt="icon" /></h3>
									<div className="hover-div">
										<div className="border-hover"></div>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni quibusdam minus similique. Dignissimos voluptatum expedita mollitia. Aliquam, assumenda?</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="services-box mint-green">
								<img src={iconthree} className='icon-service' alt="icon" />
								<div className="service-details-dv">
									<h5 className='service-number'>03.</h5>
									<h3 className='service-name'>Production <img src={arrow} className='rotate-icon' alt="icon" /></h3>
									<div className="hover-div">
										<div className="border-hover"></div>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni quibusdam minus similique. Dignissimos voluptatum expedita mollitia. Aliquam, assumenda?</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="services-box light-blue">
								<img src={iconfour} className='icon-service ' alt="icon" />
								<div className="service-details-dv">
									<h5 className='service-number'>04.</h5>
									<h3 className='service-name'>Creative <img src={arrow} className='rotate-icon' alt="icon" /></h3>
									<div className="hover-div">
										<div className="border-hover"></div>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni quibusdam minus similique. Dignissimos voluptatum expedita mollitia. Aliquam, assumenda?</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="black-bg-service">
				<div className="container-main">
					<div className="header-service-common">
						<h2 className='header-page-name-small'>Works</h2>
						<h2 className='header-page-name-common'>Discover Our Full Suite of Creative and Digital Services</h2>
					</div>
					<div className="row">
						<div className="col-lg-6 col-md-6">
							<div className="home-work-service hover-effect">
								<img src={serviceimage} className='service-image-work' alt="service image" />
								<div className="work-details-right">
									<h2 className='work-number-text-color'>01.</h2>
									<p className='sub-text-work-hide'>At Haris&Co., we understand that your brand is more</p>
									<p className='sub-text-work'>At Haris&Co., we understand that your brand is more than just a logo or a tagline—it's the essence of your business, the story you tell, and the promise you make to your customers. Our branding services are designed to uncover and articulate your unique identity, ensuring that every touchpoint resonates with your target audience. From initial brand strategy and research to crafting a compelling visual identity, we work closely with you to build a brand that is authentic, memorable, and impactful. </p>
								</div>
							</div>
						</div>
						<div className="col-lg-6 col-md-6">
							<div className="home-work-service hover-effect">
								<img src={serviceimage2} className='service-image-work' alt="service image" />
								<div className="work-details">
									<h2 className='work-number-text'>02.</h2>
									<p className='sub-text-work-hide'>At Haris&Co., we understand that your brand is more</p>
									<p className='sub-text-work'>At Haris&Co., we understand that your brand is more than just a logo or a tagline—it's the essence of your business, the story you tell, and the promise you make to your customers. Our branding services are designed to uncover and articulate your unique identity, ensuring that every </p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="clients-section-home">
				<div className="container-main">
					<div className="header-service-common">
						<h2 className='header-page-name-small'>Clients</h2>
						<h2 className='header-page-name-common'>Our clients are everything	to us; so are we to them.</h2>
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
									<Link to='/' className='btn enquire-btn'>View More <img src={arrows} className='arrow-icon' alt="arrow icon" /></Link>
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
							<h3 className='about-text'>At <span>Haris&Co</span>., we are passionate about creativity, innovation, and delivering exceptional results for our clients. As a full-service creative agency, we specialize in crafting unique strategies that bring brands to life through marketing, branding, designing, SEO, UI/UX, and development.</h3>
							<div className="view-story">
								<div className="enquiry-btn-dv">
									<Link to='/' className='btn enquire-btn'>View Story <img src={arrow} className='arrow-icon' alt="arrow icon" /></Link>
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
			</div>
			<div className="founder-section">
				<img src={founder} className='founder-main-image' alt="" />
				<img src={foundermobile} className='founder-main-image-mobile' alt="" />
			</div>
			<div className="blogs-main">
				<div className="container-main">
					<div className="header-service-common">
						<h2 className='header-page-name-small'>Blogs</h2>
						<h2 className='header-page-name-common'>Our clients are everything to us; so are we to them.</h2>
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
			</div>
		</div>
	)
}
export default Home;