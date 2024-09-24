import React from 'react'
import { Link } from 'react-router-dom'
import '../components/css/Branding.css'
import arrow from '.././Assets/arrow.svg'

const SocialMedia = () => {
	return (
		<div className='services-page'>
			<div className="container-main">
				<div className="header-service">
					<h2 className='header-page-name'>Social Media</h2>
					<p className='page-path'>Home. Service. <span>Social Media</span> </p>
				</div>
				<div className="brand-details">
					<div className="row">
						<div className="col-lg-6">
							<div className="brand-divs">
								<h3 className='brand-titles '>See the difference with us! <br /> We at Haris&Co. help you stay on top of the algorithm with tailored strategies and campaigns. </h3>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="brand-divs">
								<p className='brand-sub-titles'>We don’t go in blindly to make your brand seen.
We conduct a thorough analysis of your existing strategies and what works best for your industry.
Based on this, we put together out-of-the-box ideas and concepts that help your brand to speak your message clearly and directly to your audience. 

</p>
								<p className='brand-sub-titles'>Our ideas and strategies evolve with the ever changing social media landscape and thrive on delivering tangible results. But our services don’t just stop there. We help you build a strong online community by actively engaging with your followers.
Our strategic and creative social media content and campaigns help you better connect with your audience.

Are you ready to see how social media helps your brand? Join our community.
</p>
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
export default SocialMedia;









