import React from 'react'
import { Link } from 'react-router-dom'
import '../components/css/Branding.css'
import arrow from '.././Assets/arrow.svg'
import a from '../Assets/Branding/a.png';
import haida from '../Assets/Branding/haida.png';
import ice from '../Assets/Branding/ice.png';
import pink from '../Assets/Branding/pink.png';
import reel from '../Assets/Branding/reel.png';
import work from '../Assets/similiar-works.png';

const Branding = () => {
	return (
		<div className='services-page font-h'>
			<div className="container-main">
				<div className="header-service">
					<h2 className='header-page-name'>Branding</h2>
					<p className='page-path'>Home. Service. <span>Branding</span> </p>
				</div>
				<div className="brand-details">
					<div className="row">
						<div className="col-lg-6">
							<div className="brand-divs">
								<h3 className='brand-titles '>We turn your brand into a success story at Haris&Co.</h3>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="brand-divs">
								<p className='brand-sub-titles'>Our branding solutions bring out the ‘why’ in your brand to your audience. Our solutions are designed to develop a strong brand narrative by defining your unique voice.

									Our solutions focus on highlighting your brand through storytelling and strategies by incorporating stunning visual elements like logos, color palettes, brand guidelines, and typography.</p>
								<p className='brand-sub-titles'>We are committed to becoming your partners in your journey and are with you from brand integration to constant refining of your brand strategy. Our branding solutions are an ongoing process that helps you foster positive and lasting relationships with your customers.

									We believe in creating authentic, memorable, and stand-out branding stories that help drive growth and communication with your target audience.

									Speak your truth with our branding solutions. We help tell a brand story that resonates, captivates, and converts.
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
                <img src={work} className='similar-image' alt="Branding work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>Branding: Transforming Ideas into Impactful Brands</h4>
                  <p className='similiar-sub'>At Haris&Co., we pride ourselves on delivering creative solutions for branding.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={haida} className='similar-image' alt="Branding work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>Branding: Transforming Ideas into Impactful Brands</h4>
                  <p className='similiar-sub'>At Haris&Co., we pride ourselves on delivering creative solutions for branding.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={ice} className='similar-image' alt="Branding work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>Branding: Transforming Ideas into Impactful Brands</h4>
                  <p className='similiar-sub'>At Haris&Co., we pride ourselves on delivering creative solutions for branding.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={pink} className='similar-image' alt="Branding work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>Branding: Transforming Ideas into Impactful Brands</h4>
                  <p className='similiar-sub'>At Haris&Co., we pride ourselves on delivering creative solutions for branding.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={reel} className='similar-image' alt="Branding work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>Branding: Transforming Ideas into Impactful Brands</h4>
                  <p className='similiar-sub'>At Haris&Co., we pride ourselves on delivering creative solutions for branding.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={a} className='similar-image' alt="Branding work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>Branding: Transforming Ideas into Impactful Brands</h4>
                  <p className='similiar-sub'>At Haris&Co., we pride ourselves on delivering creative solutions for branding.</p>
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
export default Branding;