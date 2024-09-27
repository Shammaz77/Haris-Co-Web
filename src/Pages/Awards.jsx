import React from 'react'
import '../components/css/Awards.css'
import awardimage from '../Assets/Award.png'
import award1 from '../Assets/image 32.png'
import award2 from '../Assets/aw2.png'
import award3 from '../Assets/aw.png'
import w from '../Assets/w.png'
import b from '../Assets/b.png'

const Awards = () => {
	return (
		<div className='career-page font-h'>
			<div className="container-main">
				<div className="header-service-common">
					<h2 className='header-page-name-small'>Awards</h2>
					<h2 className='header-page-name-common'>Discover Our Full Suite of Creative and Digital Services</h2>
				</div>
				<div className="brand-details">
					<div className="row">
						<div className="col-lg-6">
							<div className="awards-main-box">
								<div className="awwards-box">
									<div className="count-awards">
										<h3 className='awards-count-text'>01.</h3>
									</div>
									<div className="name-awards">
										<h2 className='awards-name-text'>Afaqs! startup <br /> brands Silver </h2>
										<img src={awardimage} className='award-image-img' alt="" />
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="awards-details-main">
								<p className='sub-textawards'>Our Valentine’s Day Campaign for  Haris&Co. was widely loved and received the silver award from afaqs! for the category ‘Best Use of Video on Social Media’</p>
								<img src={b} className='iconnnn' alt="" />
							</div>
						</div>
					</div>
				</div>
				<div className="black-bg top-space-awards">
					<div className="row">
						<div className="col-lg-6">
							<div className="awards-main-box">
								<div className="awwards-box">
									<div className="count-awards">
										<h3 className='awards-count-text'>02.</h3>
									</div>
									<div className="name-awards">
										<h2 className='awards-name-text'>Afaqs! startup <br /> brands Silver </h2>
										<img src={awardimage} className='award-image-img' alt="" />
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="awards-details-main">
								<p className='sub-textawards'>The Mother’s Day Campaign we made for Craftise, a crafting materials supplier, gained love from the audience, bagging a silver award for ‘Best Branded Content’.</p>
								<img src={w} className='iconnnn' alt="" />
							</div>
						</div>
					</div>
				</div>
				<div className="brand-details">
					<div className="row">
						<div className="col-lg-6">
							<div className="awards-main-box">
								<div className="awwards-box">
									<div className="count-awards">
										<h3 className='awards-count-text'>03.</h3>
									</div>
									<div className="name-awards">
										<h2 className='awards-name-text'>Afaqs! startup <br /> brands Silver </h2>
										<img src={awardimage} className='award-image-img' alt="" />
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="awards-details-main">
								<p className='sub-textawards'>Our Women’s Day Campaign for Femisafe, a supplier of women’s hygiene products, won the silver award for ‘Best Moment Marketing’.</p>
								<img src={b} className='iconnnn' alt="" />
							</div>
						</div>
					</div>
				</div>
				
				<div className="black-bg top-space-awards">
					<div className="row">
						<div className="col-lg-6">
							<div className="awards-main-box">
								<div className="awwards-box">
									<div className="count-awards">
										<h3 className='awards-count-text'>04.</h3>
									</div>
									<div className="name-awards">
										<h2 className='awards-name-text'>Pepper Awards -    <br /> Silver </h2>
										<img src={award1} className='award-image-img sccc' alt="" />
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="awards-details-main">
								<p className='sub-textawards'>We bagged the silver award at the Pepper Awards, one of the prestigious awards in South India. We received this milestone achievement for the campaign we delivered for Femisafe.</p>
								<img src={w} className='iconnnn' alt="" />
							</div>
						</div>
					</div>
				</div>
				<div className="brand-details">
					<div className="row">
						<div className="col-lg-6">
							<div className="awards-main-box">
								<div className="awwards-box">
									<div className="count-awards">
										<h3 className='awards-count-text'>05.</h3>
									</div>
									<div className="name-awards">
										<h2 className='awards-name-text'>Brand Storyz 
										  <br />- Bronze </h2>
										<img src={award3} className='award-image-img' alt="" />
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="awards-details-main">
								<p className='sub-textawards'>Our campaign for Kiddiebus, an English learning platform for kids, that generated 7000+ leads cemented a bronze award by afaqs! for the ‘Best Lead Generation Campaign’.
								</p>
								<img src={b} className='iconnnn' alt="" />

							</div>
						</div>
					</div>
				</div>
				<div className="black-bg top-space-awards">
					<div className="row">
						<div className="col-lg-6">
							<div className="awards-main-box">
								<div className="awwards-box">
									<div className="count-awards">
										<h3 className='awards-count-text'>06.</h3>
									</div>
									<div className="name-awards">
										<h2 className='awards-name-text'>Afaqs! Startup Brands       <br />- Bronze</h2>
										<img src={award2} className='award-image-img' alt="" />
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="awards-details-main">
								<p className='sub-textawards'>The execution and the strong message of the Femisafe Women’s Day campaign were so good that we also bagged the bronze award for ‘Best Social Media Campaign’.</p>
								<img src={w} className='iconnnn' alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Awards