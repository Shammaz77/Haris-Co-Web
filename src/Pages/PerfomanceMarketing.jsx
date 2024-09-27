import React from 'react'
import { Link } from 'react-router-dom'
import '../components/css/Branding.css'
import arrow from '.././Assets/arrow.svg'
import mone from '../Assets/Perfomance/1.png';
import mtwo from '../Assets/Perfomance/2.png';
import mthree from '../Assets/Perfomance/3.png';
import mfour from '../Assets/Perfomance/4.png';
import mfive from '../Assets/Perfomance/5.png';
import msix from '../Assets/Perfomance/6.png';
const PerfomanceMarketing = () => {
	return (
		<div className='services-page font-h'>
			<div className="container-main">
				<div className="header-service">
					<h2 className='header-page-name'>Perfomance Marketing</h2>
					<p className='page-path'>Home. Service. <span>Perfomance Marketing</span> </p>
				</div>
				<div className="brand-details">
					<div className="row">
						<div className="col-lg-6">
							<div className="brand-divs">
								<h3 className='brand-titles '>Experience the power of omnichannel marketing and tangible results with Haris&Co. ! </h3>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="brand-divs">
								<p className='brand-sub-titles'>We develop strategies that align with your goals and choose the most effective channels for their execution. Our experts then closely monitor the results to make data-driven adjustments. We use advanced tools to track key performance indicators (KPIs), which helps us improve your campaigns.</p>
								<p className='brand-sub-titles'>Our strategies are tailored to your brand to increase visibility and drive results. We use insights to optimize the campaigns to make sure that your brand reaches the right audience at the right time.

									Our team is dedicated to driving measurable results through targeted campaigns and data-driven strategies.

									We focus on the KPIs so that we can maximize your ROI.
									Our performance marketing strategies help you get the best out of your digital investment and deliver greater ROI and results.
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
                <img src={mfive} className='similar-image' alt="SEO work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>1.  Skyrocketing sales with Walkaroo!</h4>
                  <p className='similiar-sub'>We helped Walkaroo, one of India’s popular footwear brands, scale their revenue to ₹10M+ in just 6 months!</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={mone} className='similar-image' alt="SEO work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>2.  Scaling revenue to ₹ 2M+ !</h4>
                  <p className='similiar-sub'>We teamed with Skin Bae, a leading skincare brand offering Korean skincare, to scale their revenue and increase ROAS by 4 times!</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={mtwo} className='similar-image' alt="SEO work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>3.  Increasing ROAS for care n cure.</h4>
                  <p className='similiar-sub'>Explore how we helped Qatar-based online pharmacy, Care n Cure increase their ROAS. </p>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={mthree} className='similar-image' alt="SEO work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>SEO: Boosting Visibility</h4>
                  <p className='similiar-sub'>Explore how we enhance visibility with our SEO strategies.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={mfour} className='similar-image' alt="SEO work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>SEO: Boosting Visibility</h4>
                  <p className='similiar-sub'>Explore how we enhance visibility with our SEO strategies.</p>
                </div>
              </div>
            </div> */}
            <div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={msix} className='similar-image' alt="SEO work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>4. Achieving new milestones with Sika Car Services!</h4>
                  <p className='similiar-sub'>We teamed up with Qatar based Sika Car Services, a car service company to scale their revenue and increase their online presence!</p>
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
export default PerfomanceMarketing;