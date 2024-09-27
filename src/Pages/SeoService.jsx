import React from 'react'
import { Link } from 'react-router-dom'
import '../components/css/Branding.css'
import arrow from '.././Assets/arrow.svg'
import sone from '../Assets/Seo/1.png';
import stwo from '../Assets/Seo/2.png';
import sthree from '../Assets/Seo/3.png';
import sfour from '../Assets/Seo/4.png';
import sfive from '../Assets/Seo/5.png';
const SeoService = () => {
	return (
		<div className='services-page font-h'>
			<div className="container-main">
				<div className="header-service">
					<h2 className='header-page-name'>SEO</h2>
					<p className='page-path'>Home. Service. <span>SEO</span> </p>
				</div>
				<div className="brand-details">
					<div className="row">
						<div className="col-lg-6">
							<div className="brand-divs">
								<h3 className='brand-titles '>We help you rank higher, convert more, and grow exponentially.</h3>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="brand-divs">
								<p className='brand-sub-titles'>Even though ranking higher on SERPs might seem daunting, we at Haris&Co. craft strategies to help boost your ranking. We incorporate strategies like keyword research, on-page optimization, and technical SEO and develop high-quality and creative content optimized for SEO.</p>
								<p className='brand-sub-titles'>We don’t just apply any proven strategies but carefully analyze your website and your brand to find out what works best for you. Our SEO experts craft strategies that are aligned with your brand and goals. </p>
								<p className='brand-sub-titles'>Here at Haris&Co., we are addicted to delivering measurable results that attract organic traffic, improve your brand identity, and drive conversions.

									Stay on top with our strategic SEO solutions. Our tailored strategies help you dominate results and drive organic traffic.
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
                <img src={sfour} className='similar-image' alt="SEO work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>1. Launching Kairali TMT Online</h4>
                  <p className='similiar-sub'>We partnered with one of South India’s biggest steel brands to increase their online presence. Explore how we helped drive organic traffic from 1k to 2 lakh+! </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={sfive} className='similar-image' alt="SEO work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>2.  Strategies that put you on top.</h4>
                  <p className='similiar-sub'>We helped Skin Bae, a brand that sells premium and authentic Korean skincare products, rank higher than industry leaders like Amazon, Nykaa, and more. </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={sone} className='similar-image' alt="SEO work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>  3. SEO strategies that rank you on the first page!</h4>
                  <p className='similiar-sub'>Our SEO strategies made a difference for Abu Dhabi-based home care provider Infinity Care. Our strategies reduced bounce rates and generated 200+ leads in just 2 months!</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={sthree} className='similar-image' alt="SEO work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>4. SEO expertise that drives results!</h4>
                  <p className='similiar-sub'>Discover how our SEO experts generated 1M+ revenue within 10 months for BOSQ, a premium workspace solutions brand! Our strategies delivered organic 500+ sales-quality leads.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="similar-div">
                <img src={stwo} className='similar-image' alt="SEO work" />
                <div className="similar-contents">
                  <h4 className='similiar-title'>5. 200+ leads in 2 months!</h4>
                  <p className='similiar-sub'>Our SEO strategies made a difference for Abu Dhabi-based home care provider Infinity Care. Our strategies reduced bounce rates and generated 200+ leads in just 2 months!</p>
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
export default SeoService;









