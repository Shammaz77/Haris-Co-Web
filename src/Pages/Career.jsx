import React from 'react'
import '../components/css/Career.css'
import { Link } from 'react-router-dom'
import arrow from '.././Assets/arrow.svg'

const Career = () => {
	return (
		<div className='career-page'>
			<div className="container-main">
				<div className="header-service-common">
					<h2 className='header-page-name-small'>Careers</h2>
					<h2 className='header-page-name-common'>Discover Our Full Suite of Creative and Digital Services</h2>
				</div>
				<div className="brand-details">
					<div className="row">
						<div className="col-lg-12">
							<div className="expertise-heading-div">
								<h2 className='why-work-title'>Why work with us ?</h2>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="career-inner-div">
								<div className="count-career">
									<h3 className='count-number-career'>01.</h3>
								</div>
								<div className="content-career">
									<h3 className='main-titile-career'>Collaborative and Creative Environment</h3>
									<div className="underline-dv"></div>
									<p className='sub-titile-career'>Crafting a roadmap that defines your brand’s purpose, positioning, and long-term vision.</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="career-inner-div">
								<div className="count-career">
									<h3 className='count-number-career'>02.</h3>
								</div>
								<div className="content-career">
									<h3 className='main-titile-career'>Opportunities for Growth and Development</h3>
									<div className="underline-dv"></div>
									<p className='sub-titile-career'>Crafting a roadmap that defines your brand’s purpose, positioning, and long-term vision.</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="career-inner-div">
								<div className="count-career">
									<h3 className='count-number-career'>03.</h3>
								</div>
								<div className="content-career">
									<h3 className='main-titile-career'>Impactful Work with Leading Brands</h3>
									<div className="underline-dv"></div>
									<p className='sub-titile-career'>Crafting a roadmap that defines your brand’s purpose, positioning, and long-term vision.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="career-vacancies">
					<div className="row">
						<div className="col-lg-12">
							<div className="career-heading-div">
								<h2 className='why-work-title'>Similar Openings</h2>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="vancancy-div">
								<div className="designation-dv">
									<h3 className='designation-name'>Graphic Designer</h3>
									<h4 className='work-type'>Remote</h4>
								</div>
								<p className='work-location'>Kozhikode, Kerala</p>
								<div className="career-btn-dv">
									<Link to='/' className='btn enquire-btn'>Apply <img src={arrow} className='arrow-icon' alt="arrow icon" /></Link>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="vancancy-div">
								<div className="designation-dv">
									<h3 className='designation-name'>Video Editor</h3>
									<h4 className='work-type'>Remote</h4>
								</div>
								<p className='work-location'>Kozhikode, Kerala</p>
								<div className="career-btn-dv">
									<Link to='/' className='btn enquire-btn'>Apply <img src={arrow} className='arrow-icon' alt="arrow icon" /></Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Career;