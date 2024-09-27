import React from 'react'
import { Link } from 'react-router-dom'
import arrow from '.././Assets/arrow.svg'
const Contact = () => {
	return (
		<div className='contact-page font-h'>
			<div className="container-main">
				<div className="header-service-common">
					<h2 className='header-page-name-small'>	Contact us</h2>
					<h2 className='header-page-name-common'>Let's Create Something Amazing Together</h2>
				</div>
				<div className="contact-box">
					<div className="row">
						<div className="col-lg-6">
							<div className="contact-inner-div">
								<h4 className='quote-text'>Get a Quote</h4>
								<div className="contact-page-forms">
									<form id="myForm" action="https://api.web3forms.com/submit" method="POST">
										<input type="hidden" name="access_key" value="f94f2cd3-c0a3-494b-a2d4-ca767a1fd557" />
										<div class="row">
											<div class="col-lg-6">
												<div class="form-group">
													<label for="firstName">First Name</label>
													<input type="text" name="First Name" class="form-control" id="firstName" />
												</div>
											</div>
											<div class="col-lg-6">
												<div class="form-group">
													<label for="lastName">Last Name</label>
													<input type="text" name="Last Name" class="form-control" id="lastName" />
												</div>
											</div>
											<div class="col-lg-6">
												<div class="form-group">
													<label for="email">Email</label>
													<input type="email" name="Email" class="form-control" id="email" />
												</div>
											</div>
											<div class="col-lg-6">
												<div class="form-group">
													<label for="phone">Phone</label>
													<input type="number" name="Phone" class="form-control" id="phone" />
												</div>
											</div>
										</div>
										<div class="form-group">
											<label for="message">Message</label>
											<textarea class="form-control" name="Message" id="message" rows="3"></textarea>
										</div>

										<button class="submit-button-form-apply btn" type="submit">Submit</button>
									</form>
									<div class="thank-you-message" id="thankYouMessage">
										Thank you for your submission!
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="contact-inner-div">
								<h4 className='quote-text'>Our Locations</h4>
								<p><span>Address:</span>  4, 6QGR+7PW WING Avenue, Panniyankara, Kozhikode, Kerala 673003</p>
								<p><span>Phone:</span>080757 72921</p>
								<div className="map-main">
									<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.4842961959225!2d75.78925767424488!3d11.22574075074702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6592e5bc6ffbb%3A0xbd15f0508abb882b!2sHaris%26Co!5e0!3m2!1sen!2sin!4v1727087708417!5m2!1sen!2sin" width="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact;
