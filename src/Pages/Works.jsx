import React from 'react'
import { Link } from 'react-router-dom'
import work from '../Assets/similiar-works.png'
const Works = () => {
	return (
		<div className='career-page'>
			<div className="container-main">
				<div className="header-service-common">
					<h2 className='header-page-name-small'>works</h2>
					<h2 className='header-page-name-common'>Discover Our Full Suite of Creative and Digital Services</h2>
				</div>
				<div className="row">
					<div className="col-lg-12">
						<div className="tabs-main">
							<h3 className='tab-text-active'>Branding</h3>
							<h3 className='tab-text'>SEO</h3>
							<h3 className='tab-text'>Social Media</h3>
							<h3 className='tab-text'>Production</h3>
							<h3 className='tab-text'>Creative</h3>
							<h3 className='tab-text'>Web development & UI/UX</h3>
							<h3 className='tab-text'>Digital PR</h3>
						</div>
					</div>
				</div>
				<div className="brand-details">
					<div className="row">
						<div className="col-lg-6">
							<div className="brand-divs">
								<h3 className='brand-titles '>Our Creative Portfolio: A Showcase of Innovative Solutions, Transforming Brands and Delivering Impactful Results Across Industries</h3>
							</div>
						</div>
						<div className="col-lg-6">

						</div>
					</div>
					<div className="row top-space">
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

export default Works;