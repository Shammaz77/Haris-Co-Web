import React from 'react'
import { Link } from 'react-router-dom'
import '../components/css/Branding.css'
import arrow from '.././Assets/arrow.svg'
import disha from '../Assets/Web/disha.png';
import lady from '../Assets/Web/lady.png';
import organic from '../Assets/Web/organic.png';
import popees from '../Assets/Web/popees.png';
import truth from '../Assets/Web/truth.png';
import wild from '../Assets/Web/wildtree.png';
const Web = () => {
	return (
		<div className='services-page font-h'>
			<div className="container-main">
				<div className="header-service">
					<h2 className='header-page-name'>Web Development UI/UX</h2>
					<p className='page-path'>Home. Service. <span>Web Development UI/UX</span> </p>
				</div>
				<div className="brand-details">
					<div className="row">
						<div className="col-lg-6">
							<div className="brand-divs">
								<h3 className='brand-titles '>We at Haris&Co. revolutionize your internet presence with stunning web designs. </h3>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="brand-divs">
								<p className='brand-sub-titles'>We handle everything from concept creation to deployment and monitoring to ensure a seamless experience. We craft functional interfaces that are aligned with your goals and objectives. We are meticulous in what we do and constantly monitor the website for optimized performance and usability.</p>
								<p className='brand-sub-titles'>We understand that your website is a bridge that connects your audience to yours, and so we make this a personalized experience that converts.  We incorporate attention-grabbing layouts that are functional and reflective of your unique brand identity.

									Our web designs are visual feats optimized for user interaction and search engine performance to drive traffic, generate leads, and achieve your goals.
								</p>
								<p className='brand-sub-titles'>Make your mark with a visually captivating and engaging web design. Our UI/UX experts deliver designs that are functionally superior and drive traffic.
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
								<img src={popees} className='similar-image' alt="SEO work" />
								<div className="similar-contents">
									<h4 className='similiar-title'>1. Revamping Popees</h4>
									<p className='similiar-sub'>We partnered with one of Kerala’s best known brands, Popees to boost their online presence and brand visibility</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="similar-div">
								<img src={truth} className='similar-image' alt="SEO work" />
								<div className="similar-contents">
									<h4 className='similiar-title'>2. Vamping up Truthcare Pharmacy.</h4>
									<p className='similiar-sub'>Our web development and UI/UX services helped give Truthcare Pharmacy a new and improved online presence.</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="similar-div">
								<img src={organic} className='similar-image' alt="SEO work" />
								<div className="similar-contents">
									<h4 className='similiar-title'>3. Making gifting special with Keva Box
									</h4>
									<p className='similiar-sub'>We teamed up with Keva Box, a jewelry brand, to boost their online presence and drive results with a new and improved website.</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="similar-div">
								<img src={wild} className='similar-image' alt="SEO work" />
								<div className="similar-contents">
									<h4 className='similiar-title'>4. Serving the goodness of nuts with Wild Tree.</h4>
									<p className='similiar-sub'>We vamped up the online presence of Wild Tree, a UAE-based food company dealing in nuts and snacks.</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="similar-div">
								<img src={lady} className='similar-image' alt="SEO work" />
								<div className="similar-contents">
									<h4 className='similiar-title'>5. Baking with Lady Loafella!</h4>
									<p className='similiar-sub'>Explore how we enhance visibility with our SEO strategies.</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="similar-div">
								<img src={disha} className='similar-image' alt="SEO work" />
								<div className="similar-contents">
									<h4 className='similiar-title'>6. Styling an online presence for Disha Creationz!</h4>
									<p className='similiar-sub'>We collaborated with Disha Creationz, a clothing brand to increase their brand visibility and engagement.</p>
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
export default Web;









