import React from 'react'
import { Link } from 'react-router-dom'
import '../components/css/Branding.css'
import arrow from '.././Assets/arrow.svg'
import done from '../Assets/PR/1.png';
import dtwo from '../Assets/PR/2.png';
import dthree from '../Assets/PR/3.png';
import dfour from '../Assets/PR/4.png';
import dfive from '../Assets/PR/5.png';
import dsix from '../Assets/PR/6.png';

const PRCommunication = () => {
	return (
		<div className='services-page font-h'>
			<div className="container-main">
				<div className="header-service">
					<h2 className='header-page-name'>Digital PR & Communication</h2>
					<p className='page-path'>Home. Service. <span>Digital PR & Communication</span> </p>
				</div>
				<div className="brand-details">
					<div className="row">
						<div className="col-lg-6">
							<div className="brand-divs">
								<h3 className='brand-titles '>We help you build relationships that matter.</h3>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="brand-divs">
								<p className='brand-sub-titles'>We at Haris&Co. have a performance-driven approach to craft compelling and impressive brand stories. We strategically plan our plan of action by meticulously analyzing your objectives and target audience.  </p>
								<p className='brand-sub-titles'>We craft engaging and attention-grabbing multimedia content that resonates and appeals to your target audience. All of our content would be SEO optimized to amplify your brand reach. </p>
								<p className='brand-sub-titles'>Our services include effective media outreach, relationship-building, crisis communication, and rapid communication. Our expert team also closely monitors KPIs and provides regular reports with actionable insights.

									Amplify your brand’s voice and forge lasting connections with our Digital PR & Communication Services.</p>
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
                <img src={dfour} className='similar-image' alt="SEO work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>1. Onam with Aditya Birla Capital</h4>
                  <p className='similiar-sub'>We partnered up with Aditya Birla Capital to create an Onam campaign in collaboration with actress and influencer Devika Sanjay!</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={dfive} className='similar-image' alt="SEO work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>2. 20+ Creators for Francis Alukkas</h4>
                  <p className='similiar-sub'>We partnered with one of South India’s most popular jewellery brands to increase their brand awareness. With 2.1+ M views and 5M+ engagements, we create campaigns that foster meaningful relationships.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={dsix} className='similar-image' alt="SEO work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>3. Partnering with Swiggy Instamart</h4>
                  <p className='similiar-sub'>We teamed up with Swiggy Instamart, popular instant delivery choice, for an influencer campaign in Chennai and Coimbatore.</p>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={done} className='similar-image' alt="SEO work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>SEO: Boosting Visibility</h4>
                  <p className='similiar-sub'>Explore how we enhance visibility with our SEO strategies.</p>
                </div>
              </div>
            </div> */}
            <div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={dtwo} className='similar-image' alt="SEO work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>4. Creating the Buzz for MyG Kannur.</h4>
                  <p className='similiar-sub'>Our influencer campaign for the launch of MyG Kannur created all the buzz with 5M+ engagements online! </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={dthree} className='similar-image' alt="SEO work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>5. Enjoying the festivities with Reliance!</h4>
                  <p className='similiar-sub'>We partnered with Reliance Trends and Smart Bazaar and made the festival time even more brighter! With 2M+ views and 5M+ engagements, we do it like no other.</p>
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
export default PRCommunication;









