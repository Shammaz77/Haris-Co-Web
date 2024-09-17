import React from 'react'
import { Link } from 'react-router-dom'
import workimage from '../../Assets/work.png'
import work from '../../Assets/similiar-works.png'
import '../../components/css/Works.css'
const WorkOne = () => {
	return (
		<div className='work-page'>
			<div className="container-main">
				<div className="header-service-common">
					<h2 className='header-page-name-small'>works</h2>
					<h2 className='header-page-name-common'>Discover Our Full Suite of Creative and Digital Services</h2>
				</div>
				<div className="brand-details">
					<div className="row">
						<div className="col-lg-12">
							<div className="work-image">
								<img src={workimage} className='work-image' alt="" />
							</div>
						</div>
						<div className="col-lg-6">
							<div className="brand-divs">
								<h3 className='brand-titles '>Our Work: Transforming Ideas into Impactful Brands</h3>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="brand-divs">
								<p className='brand-sub-titles'>At Haris&Co., we understand that your brand is more than just a logo or a tagline—it's the essence of your business, the story you tell, and the promise you make to your customers. Our branding services are designed to uncover and articulate your unique identity, ensuring that every touchpoint resonates with your target audience. From initial brand strategy and research to crafting a compelling visual identity, we work closely with you to build a brand that is authentic, memorable, and impactful.</p>
								<p className='brand-sub-titles'>Our team of branding experts combines creativity with strategic insight to develop a brand that not only stands out in the marketplace but also drives long-term growth. Whether you're launching a new brand or revitalizing an existing one, we deliver solutions that align with your business goals and reflect your core values. At Haris&Co., we don't just create brands—we build experiences that connect with people on a deeper level and leave a lasting impression.</p>
							</div>
						</div>
					</div>
				</div>
				<div className="similiar-works">
					<div className="row">
						<div className="col-lg-12">
							<div className="career-heading-div">
								<h2 className='why-work-title'>Similar works</h2>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="similar-div">
								<img src={work} className='similar-image' alt="work image" />
								<div className="similar-contents">
									<h4 className='similiar-title'>Our Work: Transforming Ideas into Impactful Brands</h4>
									<p className='similiar-sub'>At Haris&Co., we pride ourselves on delivering creative solutions that drive real results. Explore our diverse portfolio of successful projects, where strategy meets innovation to create meaningful brand experiences that resonate with audiences and elevate businesses.</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="similar-div">
								<img src={work} className='similar-image' alt="work image" />
								<div className="similar-contents">
									<h4 className='similiar-title'>Our Work: Transforming Ideas into Impactful Brands</h4>
									<p className='similiar-sub'>At Haris&Co., we pride ourselves on delivering creative solutions that drive real results. Explore our diverse portfolio of successful projects, where strategy meets innovation to create meaningful brand experiences that resonate with audiences and elevate businesses.</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="similar-div">
								<img src={work} className='similar-image' alt="work image" />
								<div className="similar-contents">
									<h4 className='similiar-title'>Our Work: Transforming Ideas into Impactful Brands</h4>
									<p className='similiar-sub'>At Haris&Co., we pride ourselves on delivering creative solutions that drive real results. Explore our diverse portfolio of successful projects, where strategy meets innovation to create meaningful brand experiences that resonate with audiences and elevate businesses.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default WorkOne