import React from 'react'
import { Link } from 'react-router-dom'
import '../components/css/Branding.css'
import arrow from '.././Assets/arrow.svg'
import one from '../Assets/works/one.png';
import two from '../Assets/works/two.png';
import three from '../Assets/works/three.png';
import four from '../Assets/works/four.png';
import five from '../Assets/works/five.png';
import six from '../Assets/works/six.png';
const Creative = () => {
	return (
		<div className='services-page font-h'>
			<div className="container-main">
				<div className="header-service">
					<h2 className='header-page-name'>Creative</h2>
					<p className='page-path'>Home. Service. <span>Creative</span> </p>
				</div>
				<div className="brand-details">
					<div className="row">
						<div className="col-lg-6">
							<div className="brand-divs">
								<h3 className='brand-titles '>We bring the extra to the ordinary at Haris&Co. </h3>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="brand-divs">
								<p className='brand-sub-titles'>We focus on bringing your brand story to life by crafting a cohesive brand experience that communicates your values and essence to your audience.

									When we get the blueprint of your brand that clearly defines who you are as a brand, our creative team refines those values to effectively bring out the brand’s unique selling points.
									From stunning visuals to captivating content, our creative minds create content designed to reflect your brand identity to your audience.
								</p>
								<p className='brand-sub-titles'>From unforgettable logos to griping copies, we help define your brand to your audience.

									Our creative minds at Haris & Co. help craft captivating and never-before-seen ideas for your brand to drive exceptional results.
								</p>
								<div className="enquiry-btn-dv">
									<Link to='/contact' className='btn enquire-btn'>Enquire Now <img src={arrow} className='arrow-icon' alt="arrow icon" /></Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="works-details">
				<div className="container-main">
					<div className="row">
						<div className="col-lg-4 col-md-6">
							<div className="similar-div">
								<img src={one} className='similar-image' alt="SEO work" />
								<div className="similar-contents">
									<h4 className='similiar-title'>SEO: Boosting Visibility</h4>
									<p className='similiar-sub'>Explore how we enhance visibility with our SEO strategies.</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="similar-div">
								<img src={two} className='similar-image' alt="SEO work" />
								<div className="similar-contents">
									<h4 className='similiar-title'>SEO: Boosting Visibility</h4>
									<p className='similiar-sub'>Explore how we enhance visibility with our SEO strategies.</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="similar-div">
								<img src={three} className='similar-image' alt="SEO work" />
								<div className="similar-contents">
									<h4 className='similiar-title'>SEO: Boosting Visibility</h4>
									<p className='similiar-sub'>Explore how we enhance visibility with our SEO strategies.</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="similar-div">
								<img src={four} className='similar-image' alt="SEO work" />
								<div className="similar-contents">
									<h4 className='similiar-title'>SEO: Boosting Visibility</h4>
									<p className='similiar-sub'>Explore how we enhance visibility with our SEO strategies.</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="similar-div">
								<img src={five} className='similar-image' alt="SEO work" />
								<div className="similar-contents">
									<h4 className='similiar-title'>SEO: Boosting Visibility</h4>
									<p className='similiar-sub'>Explore how we enhance visibility with our SEO strategies.</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="similar-div">
								<img src={six} className='similar-image' alt="SEO work" />
								<div className="similar-contents">
									<h4 className='similiar-title'>SEO: Boosting Visibility</h4>
									<p className='similiar-sub'>Explore how we enhance visibility with our SEO strategies.</p>
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
									<h3 className='count-numbers'>01.</h3>
								</div>
								<div className="content-expertise">
									<h3 className='main-titile-experise'>Field Of Expertise</h3>
									<p className='sub-titile-experise'>Strategies that skyrocket your brand’s success and growth.</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="expertise-inner-div">
								<div className="count-expertise">
									<h3 className='count-numbers'>01.</h3>
								</div>
								<div className="content-expertise">
									<h3 className='main-titile-experise'>Visual Identity Design</h3>
									<p className='sub-titile-experise'>Crafting unique brand identities and designs for the exceptional in your brand.</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="expertise-inner-div">
								<div className="count-expertise">
									<h3 className='count-numbers'>01.</h3>
								</div>
								<div className="content-expertise">
									<h3 className='main-titile-experise'>Brand Messaging and Voice</h3>
									<p className='sub-titile-experise'>Tell your brand story through your brand’s true voice and message.</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="expertise-inner-div">
								<div className="count-expertise">
									<h3 className='count-numbers'>03.</h3>
								</div>
								<div className="content-expertise">
									<h3 className='main-titile-experise'>Brand Guidelines</h3>
									<p className='sub-titile-experise'>Stay true to your brand with a consistent voice and messages with our brand guidelines crafted uniquely for you.</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="expertise-inner-div">
								<div className="count-expertise">
									<h3 className='count-numbers'>05.</h3>
								</div>
								<div className="content-expertise">
									<h3 className='main-titile-experise'>Market Research and Analysis</h3>
									<p className='sub-titile-experise'>Stay ahead of the competition with our comprehensive market research and analysis services</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="expertise-inner-div">
								<div className="count-expertise">
									<h3 className='count-numbers'>06.</h3>
								</div>
								<div className="content-expertise">
									<h3 className='main-titile-experise'>Packaging and Collateral Design</h3>
									<p className='sub-titile-experise'>Packaging and collateral designs that speak your brand and leave a lasting impression</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Creative;