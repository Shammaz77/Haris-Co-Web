import '../components/css/Career.css'
import { Link } from 'react-router-dom'
import arrow from '.././Assets/arrow.svg'
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
const Career = () => {

	const [show, setShow] = useState(false);

	// Functions to open/close modal
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);



	return (
		<div className='career-page font-h'>
			<div className="container-main">
				<div className="header-service-common">
					<h2 className='header-page-name-small'>Careers</h2>
					<h2 className='header-page-name-common'> Join us and become a part of a new digital marketing age.</h2>
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
									<p className='sub-titile-career'>Become a part of a community that fosters a supportive space that ignites creativity.</p>
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
									<p className='sub-titile-career'>Join our exceptional team, where you will collaborate and learn with skilled professionals to catapult your growth.</p>
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
									<p className='sub-titile-career'>Our track record speaks for itself. Get a chance to partner with top names in the industry.</p>
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
									<h3 className='designation-name'>Performance Marketer									</h3>
									<h4 className='work-type'>Remote</h4>
								</div>
								<p className='work-location'>Kozhikode, Kerala</p>
								<div className="career-btn-dv">
									<Button className='btn enquire-btn career-btns' onClick={handleShow}>
										Apply <img src={arrow} className='arrow-icon' alt="arrow icon" />
									</Button>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="vancancy-div">
								<div className="designation-dv">
									<h3 className='designation-name'>Copy Writer									</h3>
									<h4 className='work-type'>Remote</h4>
								</div>
								<p className='work-location'>Kozhikode, Kerala</p>
								<div className="career-btn-dv">
									<Button className='btn enquire-btn career-btns' onClick={handleShow}>
										Apply <img src={arrow} className='arrow-icon' alt="arrow icon" />
									</Button>
								</div>
							</div>
						</div>
						{/* <div className="col-lg-4">
							<div className="vancancy-div">
								<div className="designation-dv">
									<h3 className='designation-name'>Copy Writer									</h3>
									<h4 className='work-type'>Remote</h4>
								</div>
								<p className='work-location'>Kozhikode, Kerala</p>
								<div className="career-btn-dv">
									<Button className='btn enquire-btn career-btns' onClick={handleShow}>
										Apply <img src={arrow} className='arrow-icon' alt="arrow icon" />
									</Button>
								</div>
							</div>
						</div> */}
						<div className="col-lg-4">
							<div className="vancancy-div">
								<div className="designation-dv">
									<h3 className='designation-name'>Project Manager									</h3>
									<h4 className='work-type'>Remote</h4>
								</div>
								<p className='work-location'>Kozhikode, Kerala</p>
								<div className="career-btn-dv">
									<Button className='btn enquire-btn career-btns' onClick={handleShow}>
										Apply <img src={arrow} className='arrow-icon' alt="arrow icon" />
									</Button>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="vancancy-div">
								<div className="designation-dv">
									<h3 className='designation-name'>Social Media Manager	</h3>
									<h4 className='work-type'>Remote</h4>
								</div>
								<p className='work-location'>Kozhikode, Kerala</p>
								<div className="career-btn-dv">
									<Button className='btn enquire-btn career-btns' onClick={handleShow}>
										Apply <img src={arrow} className='arrow-icon' alt="arrow icon" />
									</Button>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="vancancy-div">
								<div className="designation-dv">
									<h3 className='designation-name'>Content Writer									</h3>
									<h4 className='work-type'>Remote</h4>
								</div>
								<p className='work-location'>Kozhikode, Kerala</p>
								<div className="career-btn-dv">
									<Button className='btn enquire-btn career-btns' onClick={handleShow}>
										Apply <img src={arrow} className='arrow-icon' alt="arrow icon" />
									</Button>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="vancancy-div">
								<div className="designation-dv">
									<h3 className='designation-name'>Business Development Executive	</h3>
									<h4 className='work-type'>Remote</h4>
								</div>
								<p className='work-location'>Kozhikode, Kerala</p>
								<div className="career-btn-dv">
									<Button className='btn enquire-btn career-btns' onClick={handleShow}>
										Apply <img src={arrow} className='arrow-icon' alt="arrow icon" />
									</Button>
								</div>
							</div>
						</div>
					</div>
					<Modal show={show} className='main-career-form' onHide={handleClose} centered>
						<Modal.Header closeButton>
							<Modal.Title className='apply-postion-text'>Join Our Team</Modal.Title>
						</Modal.Header>
						<Modal.Body className='form-career'>
							<Form action="https://api.web3forms.com/submit" method="POST">
							<input type="hidden" name="access_key" value="364519ea-0c9e-43dc-8c72-b4869e61ada7"/>
								<Form.Group controlId="formName" className='form-input-dv'>
									<Form.Label>Name</Form.Label>
									<Form.Control type="text" name='Name' placeholder="Enter your name" />
								</Form.Group>

								<Form.Group controlId="formNumber" className='form-input-dv'>
									<Form.Label>Phone Number</Form.Label>
									<Form.Control type="text" name='Number' placeholder="Enter your phone number" />
								</Form.Group>

								<Form.Group controlId="formNumber" className='form-input-dv'>
									<Form.Label>Email</Form.Label>
									<Form.Control type="email" name='Email' placeholder="Enter your Email" />
								</Form.Group>

								<Form.Select className='form-controll' name='Position' aria-label="Default select example">
									<option>Select Position</option>
									<option value="1">Performance Marketer</option>
									<option value="2">Copy Writer</option>
									<option value="3">Project Manager</option>
									<option value="4">Social Media Manager									</option>
									<option value="5">Content Writer									</option>
									<option value="6">Business Development Executive									</option>

								</Form.Select>
								<input type="hidden" name="redirect" target="_blank" value="/about"/>
								<button class="submit-button-form-apply btn" type="submit">SUBMIT</button>
							</Form>
						</Modal.Body>
					</Modal>
				</div>
			</div>
		</div>
	)
}
export default Career;