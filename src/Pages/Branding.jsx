import React from 'react'
import { Link } from 'react-router-dom'
import '../components/css/Branding.css'
import arrow from '.././Assets/arrow.svg'

const Branding = () => {
  return (
    <div className='services-page'>
			<div className="container-main">
				<div className="header-service">
					<h2 className='header-page-name'>Branding</h2>
					<p className='page-path'>Home. Service. <span>Branding</span> </p>
				</div>
				<div className="brand-details">
					<div className="row">
						<div className="col-lg-6">
							<div className="brand-divs">
								<h3 className='brand-titles '>Expert Branding Services: Creating Distinctive Identities That Connect, Captivate, and Elevate Your Business Presence.</h3>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="brand-divs">
								<p className='brand-sub-titles'>At Haris&Co., we understand that your brand is more than just a logo or a tagline—it's the essence of your business, the story you tell, and the promise you make to your customers. Our branding services are designed to uncover and articulate your unique identity, ensuring that every touchpoint resonates with your target audience. From initial brand strategy and research to crafting a compelling visual identity, we work closely with you to build a brand that is authentic, memorable, and impactful.</p>
								<p className='brand-sub-titles'>Our team of branding experts combines creativity with strategic insight to develop a brand that not only stands out in the marketplace but also drives long-term growth. Whether you're launching a new brand or revitalizing an existing one, we deliver solutions that align with your business goals and reflect your core values. At Haris&Co., we don't just create brands—we build experiences that connect with people on a deeper level and leave a lasting impression.</p>
								<div className="enquiry-btn-dv">
									<Link to='/' className='btn enquire-btn'>Enquire Now <img src={arrow} className='arrow-icon' alt="arrow icon" /></Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="expertise">
				<div className="container-main">
					<div className="row">
						<div className="col-lg-12">
							<div className="expertise-heading-div">
								<h2 className='expertise-heading'>Field of Expertise</h2>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="expertise-inner-div">
								<div className="count-expertise">
									<h3 className='count-number'>01.</h3>
								</div>
								<div className="content-expertise">
									<h3 className='main-titile-experise'>Brand Strategy Development</h3>
									<p className='sub-titile-experise'>Crafting a roadmap that defines your brand’s purpose, positioning, and long-term vision.</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="expertise-inner-div">
								<div className="count-expertise">
									<h3 className='count-number'>01.</h3>
								</div>
								<div className="content-expertise">
									<h3 className='main-titile-experise'>Visual Identity Design</h3>
									<p className='sub-titile-experise'>Crafting a roadmap that defines your brand’s purpose, positioning, and long-term vision.</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="expertise-inner-div">
								<div className="count-expertise">
									<h3 className='count-number'>01.</h3>
								</div>
								<div className="content-expertise">
									<h3 className='main-titile-experise'>Brand Messaging and Voice</h3>
									<p className='sub-titile-experise'>Crafting a roadmap that defines your brand’s purpose, positioning, and long-term vision.</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="expertise-inner-div">
								<div className="count-expertise">
									<h3 className='count-number'>03.</h3>
								</div>
								<div className="content-expertise">
									<h3 className='main-titile-experise'>Brand Guidelines</h3>
									<p className='sub-titile-experise'>Crafting a roadmap that defines your brand’s purpose, positioning, and long-term vision.</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="expertise-inner-div">
								<div className="count-expertise">
									<h3 className='count-number'>05.</h3>
								</div>
								<div className="content-expertise">
									<h3 className='main-titile-experise'>Market Research and Analysis</h3>
									<p className='sub-titile-experise'>Crafting a roadmap that defines your brand’s purpose, positioning, and long-term vision.</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="expertise-inner-div">
								<div className="count-expertise">
									<h3 className='count-number'>06.</h3>
								</div>
								<div className="content-expertise">
									<h3 className='main-titile-experise'>Packaging and Collateral Design</h3>
									<p className='sub-titile-experise'>Crafting a roadmap that defines your brand’s purpose, positioning, and long-term vision.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
    </div>
  )
}
export default Branding;