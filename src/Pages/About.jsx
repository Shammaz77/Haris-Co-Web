import React from 'react'
import { Link } from 'react-router-dom'
import arrow from '.././Assets/arrow.svg'
import banner from '.././Assets/aboutbanner.png'
import '../components/css/About.css'
import Slider from "react-slick";
import adarsh from '.././Assets/Adarsh.png'
import amna from '.././Assets/Amna (1).png'
import haris from '.././Assets/Hariskka.png'
import nabhan from '.././Assets/Nabhan.png'
import ragin from '.././Assets/Ragin.png'
import saheel from '.././Assets/Saheel.png'
import hadi from '.././Assets/Hadi.png'
import nab from '.././Assets/Nab.png'
import rizwan from '.././Assets/Rizwan.png'
import nizwa from '.././Assets/Nizwa.png'

import nabhand from '.././Assets/NabbD.png'
import arjund from '.././Assets/ArjunD.png'
import nihal from '.././Assets/NihalD.png'
import yogid from '.././Assets/YogiD.png'
import adarshd from '.././Assets/AdarshD.png'
import vishnud from '.././Assets/VishnuD.png'
import azar from '.././Assets/azar.png'






import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const About = () => {

	var settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		pauseOnHover: true,
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 2,
					initialSlide: 2
				}
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},

			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			}
		]
	};

	return (
		<div className='about-page font-h'>
			<div className="container-main">
				<div className="header-service-common">
					<h2 className='header-page-name-small'>About Us</h2>
					<h2 className='header-page-name-common'>Powering up brands with the power of marketing, design, and tech</h2>
				</div>
				<div className="brand-details">
					<div className="row">
						<div className="col-lg-6">
							<div className="brand-divs">
								<h3 className='brand-titles '>About Haris&Co: Where Creativity Meets Strategy, Transforming Brands </h3>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="brand-divs">
								<p className='brand-sub-titles'>Haris&Co. is an integrated marketing solutions provider which began it’s journey in 2020. What started as a small initiative with a team of just six people has beaten the odds and has grown to a brand that delivers the unexceptional.
									Today, we are a proud collective of 100+ professionals proving their expertise in 8 solutions to skyrocket your brand.
									At our core, we believe in creating a space that fosters creativity, growth, and lasting relationships with our clients. Our diverse clientele boasts names from start-ups to established industry names.
									At Haris&Co. we believe in and encourage the change-maker in you.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="col-lg-12">
				<div className="about-banner-dv">
					<img src={banner} className='about-banner-img' alt="Banner" />
				</div>
			</div>
			<div className="team-div">
				<div className="col-lg-12">
					<div className="heading-team">
						<h4 className='team-title'>Our Team</h4>
						<h3 className='meet-team'>Meet the minds shaping an <br /> industry.</h3>
					</div>
				</div>
				<div className="slider-team-main">
					<Slider {...settings}>
						<div className='team-div show1'>
							<img src={adarsh} className='image-team' alt="Team" />
							<div className="member-details">
								<h3 className='name'>Aadarsh MS</h3>
								{/* <h4 className='designation'>Founder</h4> */}
							</div>
						</div>
						<div className='team-div show2'>
							<img src={ragin} className='image-team' alt="Team" />
							<div className="member-details">
								<h3 className='name'>Ragin  Raj</h3>
								{/* <h4 className='designation'>Founder</h4> */}
							</div>
						</div>
						<div className='team-div show3'>
							<img src={haris} className='image-team' alt="Team" />
							<div className="member-details">
								<h3 className='name'>Haris <br /> Aboobacker</h3>
								<h4 className='designation'>Founder</h4>
							</div>
						</div>
						<div className='team-div show4'>
							<img src={saheel} className='image-team' alt="Team" />
							<div className="member-details">
								<h3 className='name'> Ibrahim <br /> Saheel </h3>
								{/* <h4 className='designation'>Founder</h4> */}
							</div>
						</div>
						<div className='team-div show5'>
							<img src={amna} className='image-team' alt="Team" />
							<div className="member-details">
								<h3 className='name'>Amna Iqbal</h3>
								{/* <h4 className='designation'>Founder</h4> */}
							</div>
						</div>



						<div className='team-div show6'>
							<img src={hadi} className='image-team' alt="Team" />
							<div className="member-details">
								<h3 className='name'>Hadi <br /> Fathima <br /> Farooque								</h3>
								{/* <h4 className='designation'>Founder</h4> */}
							</div>
						</div>
						<div className='team-div show7'>
							<img src={nab} className='image-team' alt="Team" />
							<div className="member-details">
								<h3 className='name'>Abu <br /> Nabhan</h3>
								{/* <h4 className='designation'>Chief of Branding</h4> */}
							</div>
						</div>
						{/* <div className='team-div show8'>
							<img src={rizwan} className='image-team' alt="Team" />
							<div className="member-details">
								<h3 className='name'>Haris <br /> Aboobacker</h3>
								<h4 className='designation'>Founder</h4>
							</div>
						</div> */}
						<div className='team-div show9'>
							<img src={nizwa} className='image-team' alt="Team" />
							<div className="member-details">
								<h3 className='name'>Nizwa  iqbal</h3>
								{/* <h4 className='designation'>Founder</h4> */}
							</div>
						</div>
					</Slider>
				</div>
			</div>
			<div className="border-line"></div>
			<div className="team-div">
				<div className="col-lg-12">
					<div className="heading-team">
						<h4 className='team-title'>Our Department Heads	</h4>
						<h3 className='meet-team'>Meet the minds shaping an <br /> industry.</h3>
					</div>
				</div>
				<div className="slider-team-main mainx">
					<div className="container-main">
					<Slider {...settings}>
						<div className='team-div show1'>
							<img src={nabhand} className='image-team-dept' alt="Team" />
							<div className="member-details-departments">
								<h3 className='name'> Abu Nabhan</h3>
								<h4 className='designation'>Chief of Branding</h4>
							</div>
						</div>
						<div className='team-div show2'>
							<img src={arjund} className='image-team-dept' alt="Team" />
							<div className="member-details-departments">
								<h3 className='name'>Arjun P</h3>
								<h4 className='designation'>Chief of Web Development</h4>
							</div>
						</div>
						<div className='team-div show3'>
							<img src={nihal} className='image-team-dept' alt="Team" />
							<div className="member-details-departments">
								<h3 className='name'>Nihal Zubair</h3>
								<h4 className='designation'>Chief of Creative</h4>
							</div>
						</div>
						<div className='team-div show4'>
							<img src={yogid} className='image-team-dept' alt="Team" />
							<div className="member-details-departments">
								<h3 className='name'>Yogi</h3>
								<h4 className='designation'>Chief of Influence Marketing</h4>
							</div>
						</div>
						<div className='team-div show5'>
							<img src={adarshd} className='image-team-dept' alt="Team" />
							<div className="member-details-departments">
								<h3 className='name'>Adarsh MS</h3>
								<h4 className='designation'>Chief of Performance Marketing</h4>
							</div>
						</div>
						<div className='team-div show6'>
							<img src={vishnud} className='image-team-dept' alt="Team" />
							<div className="member-details-departments">
								<h3 className='name'>Vishnu KP</h3>
								<h4 className='designation'>Chief of Production</h4>
							</div>
						</div>
						<div className='team-div show6'>
							<img src={azar} className='image-team-dept' alt="Team" />
							<div className="member-details-departments">
								<h3 className='name'> Mohamed Azaruddin</h3>
								<h4 className='designation'>Chief of Brand Solution</h4>
							</div>
						</div>
					</Slider>
					</div>
				</div>
			</div>
		</div>
	)
}
export default About