import React, { useRef, useState, useEffect } from 'react';
import '../components/css/Services.css'
import icon from '../Assets/icon-social.png'
import icontwo from '../Assets/Exclude.png'
import iconthree from '../Assets/three.png'
import iconfour from '../Assets/Union.png'
import arrow from '../Assets/icon.png'
import clients from '../Assets/clients.png'
import clientsone from '../Assets/clients-logos.png'
import clientsmobile from '../Assets/one.png'
import founder from '../Assets/Founder-main.png'
import work0 from '../Assets/workk.png'
import work2 from '../Assets/work2.png'
import work3 from '../Assets/work3.png'
import work4 from '../Assets/work4.png'
import work5 from '../Assets/work5.png'
import work6 from '../Assets/work6.png'
import foundermobile from '../Assets/Mobile-Founderr.png'
import logo from '../Assets/LogoWhite.png'
import down from '../Assets/Down.svg'
import { Link } from 'react-router-dom'
import arrows from '../Assets/arrow.svg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import vedio from '.././Assets/vedio.mp4'
import vediomob from '.././Assets/mob.mp4'
import CountUp from 'react-countup';
import disha from '../Assets/Web/disha.png';
import lady from '../Assets/Web/lady.png';
import organic from '../Assets/Web/organic.png';
import popees from '../Assets/Web/popees.png';
import truth from '../Assets/Web/truth.png';
import wild from '../Assets/Web/wildtree.png';
import one from '../Assets/works/one.png';
import six from '../Assets/works/six.png';
import sone from '../Assets/Seo/1.png';
import stwo from '../Assets/Seo/2.png';
import sthree from '../Assets/Seo/3.png';
import sfour from '../Assets/Seo/4.png';
import sfive from '../Assets/Seo/5.png';
import mone from '../Assets/Perfomance/1.png';
import mfive from '../Assets/Perfomance/5.png';
import smone from '../Assets/SocialMedia/1.png';
import smtwo from '../Assets/SocialMedia/2.png';
import smthree from '../Assets/SocialMedia/3.png';
import rightarrow from '../Assets/rgtarrow.svg';
import leftarrow from '../Assets/btnarrow.svg';



const Home = () => {


	var settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		pauseOnHover: true,
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2,
					initialSlide: 2
				}
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
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
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	}


	var settingsOne = {
		dots: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		pauseOnHover: true,
		arrows: true,
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 2,
					initialSlide: 2,
					arrows: false,
				}
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},

			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 2,
					initialSlide: 2,
					arrows: false,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
				}
			}
		]
	}

	const sliderRef = useRef(null);



	// const words = ["Fearless", "Authentic", "Markerting"];
	// const [currentWordIndex, setCurrentWordIndex] = useState(0);
	// const [charIndex, setCharIndex] = useState(0);
	// const [isErasing, setIsErasing] = useState(false);
	// const [text, setText] = useState('');
	// const typingSpeed = 150; // Speed of typing in milliseconds
	// const erasingSpeed = 100; // Speed of erasing
	// const newWordDelay = 1000; // Delay before starting to type a new word

	// useEffect(() => {
	//   const handleTyping = () => {
	//     if (!isErasing && charIndex < words[currentWordIndex].length) {
	//       setText((prev) => prev + words[currentWordIndex].charAt(charIndex));
	//       setCharIndex(charIndex + 1);
	//     } else if (isErasing && charIndex > 0) {
	//       setText((prev) => prev.substring(0, prev.length - 1));
	//       setCharIndex(charIndex - 1);
	//     } else if (isErasing && charIndex === 0) {
	//       setIsErasing(false);
	//       setCurrentWordIndex((prev) => (prev + 1) % words.length);
	//     } else if (!isErasing && charIndex === words[currentWordIndex].length) {
	//       setTimeout(() => setIsErasing(true), newWordDelay);
	//     }
	//   };

	//   const typingTimeout = setTimeout(handleTyping, isErasing ? erasingSpeed : typingSpeed);
	//   return () => clearTimeout(typingTimeout);
	// }, [charIndex, isErasing, words, currentWordIndex]);
	const [currentWord, setCurrentWord] = useState(0);

	// Array of words to flip through
	const words = ['Fearless', 'Authentic', 'Marketing'];

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentWord(prevWord => (prevWord + 1) % words.length);
		}, 3000); // Change word every 3 seconds

		return () => clearInterval(interval);
	}, []);





	return (
		<div className='home-page font-h'>
			<div className="vedio-section">
				<video src={vedio} className="vedio-home" autoPlay loop muted playsInline></video>
				<video src={vediomob} className="vedio-mob" autoPlay loop muted playsInline></video>
			</div>
			<div className="fearless">
				<div className="container-main">
					<div className="row align-items-center">
						<div className="col-lg-4">	
							<div className="fearless-main">
								<h2 className={`fearless-title flip-animate ${currentWord !== 0 ? 'flip-active' : ''}`}>
									<span data-hover={words[(currentWord + 1) % words.length]}>{words[currentWord]}</span>
								</h2>
							</div>
						</div>
						<div className="col-lg-6 col-md-7">
							<div className="fearless-main">
								<img src={logo} className='badge-logo' alt="logo" />
							</div>
						</div>
						<div className="col-lg-2 col-md-5">
							<div className="fearless-mains">
								<img src={down} className='scroll-icon' alt="icon" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container-main">
				<div className="services-section">
					<div className="header-service-common">
						<h2 className='header-page-name-small'>Services</h2>
						<h2 className='header-page-name-common'>Go Beyond the Ordinary with Our Creative and Digital Services</h2>
					</div>
				</div>
				<div className="services-div">
					<Slider ref={sliderRef} {...settings}>
						<Link to='/socialmedia'>
							<div className="services-box bluish-purple">
								<img src={icon} className='icon-service' alt="icon" />
								<div className="service-details-dv">
									<h5 className='service-number'>01.</h5>
									<h3 className='service-name'>Social Media <img src={arrow} className='rotate-icon' alt="icon" /> </h3>
									<div className="hover-div">
										<div className="border-hover"></div>
										<p>See the difference with us! Our strategic and creative social media content and campaigns help you better connect with your audience.</p>
									</div>
								</div>
							</div>
						</Link>
						<Link to='/perfomance'>
							<div className="services-box sunglow">
								<img src={icontwo} className='icon-service' alt="icon" />
								<div className="service-details-dv">
									<h5 className='service-number'>02.</h5>
									<h3 className='service-name'>Performance <br /> Marketing <img src={arrow} className='rotate-icon' alt="icon" /></h3>
									<div className="hover-div">
										<div className="border-hover"></div>
										<p>See the difference with us! Our strategic and creative social media content and campaigns help you better connect with your audience.</p>
									</div>
								</div>
							</div>
						</Link>
						<Link to='/production'>
							<div className="services-box mint-green">
								<img src={iconthree} className='icon-service' alt="icon" />
								<div className="service-details-dv">
									<h5 className='service-number'>03.</h5>
									<h3 className='service-name'>Production <img src={arrow} className='rotate-icon' alt="icon" /></h3>
									<div className="hover-div">
										<div className="border-hover"></div>
										<p>From concept to creation, our production team delivers visually stunning and captivating content for your brand.</p>
									</div>
								</div>
							</div>
						</Link>
						<Link to='/creative'>
							<div className="services-box light-blue">
								<img src={iconfour} className='icon-service ' alt="icon" />
								<div className="service-details-dv">
									<h5 className='service-number'>04.</h5>
									<h3 className='service-name'>Creative <img src={arrow} className='rotate-icon' alt="icon" /></h3>
									<div className="hover-div">
										<div className="border-hover"></div>
										<p>Our creative minds at Haris & Co. help craft captivating and never-before-seen ideas for your brand to drive exceptional results.</p>
									</div>
								</div>
							</div>
						</Link>

						<Link to='/pr'>
							<div className="services-box bluish-purple">
								<img src={icon} className='icon-service' alt="icon" />
								<div className="service-details-dv">
									<h5 className='service-number'>05.</h5>
									<h3 className='service-name'>Digital <br /> PR & Communication <img src={arrow} className='rotate-icon' alt="icon" /> </h3>
									<div className="hover-div">
										<div className="border-hover"></div>
										<p>Our creative minds at Haris & Co. help craft captivating and never-before-seen ideas for your brand to drive exceptional results.</p>
									</div>
								</div>
							</div>
						</Link>

						<Link to='/web'>
							<div className="services-box light-blue">
								<img src={iconfour} className='icon-service ' alt="icon" />
								<div className="service-details-dv">
									<h5 className='service-number'>06.</h5>
									<h3 className='service-name'>Web <br /> development & UI/UX <img src={arrow} className='rotate-icon' alt="icon" /></h3>
									<div className="hover-div">
										<div className="border-hover"></div>
										<p>Make your mark with a visually captivating and engaging web design. Our UI/UX experts deliver designs that are functionally superior and drive traffic.</p>
									</div>
								</div>
							</div>
						</Link>

						<Link to='/seo'>
							<div className="services-box sunglow">
								<img src={icontwo} className='icon-service' alt="icon" />
								<div className="service-details-dv">
									<h5 className='service-number'>07.</h5>
									<h3 className='service-name'>SEO <img src={arrow} className='rotate-icon' alt="icon" /></h3>
									<div className="hover-div">
										<div className="border-hover"></div>
										<p>Stay on top with our strategic SEO solutions. Our tailored strategies help you dominate results and drive organic traffic.</p>
									</div>
								</div>
							</div>
						</Link>
						<Link to='/branding'>
							<div className="services-box mint-green">
								<img src={iconthree} className='icon-service' alt="icon" />
								<div className="service-details-dv">
									<h5 className='service-number'>08.</h5>
									<h3 className='service-name'>Branding <img src={arrow} className='rotate-icon' alt="icon" /></h3>
									<div className="hover-div">
										<div className="border-hover"></div>
										<p>Speak your truth with our branding solutions. We help tell a brand story that resonates, captivates, and converts. </p>
									</div>
								</div>
							</div>
						</Link>



					</Slider>
					<div className="control-button-slider">
						<img
							src={leftarrow}
							className='arrow-btn-imgs'
							alt="Left Arrow"
							onClick={() => sliderRef.current.slickPrev()} // Trigger slickPrev on click
						/>
						<img
							src={rightarrow}
							className='arrow-btn-imgs rpsace'
							alt="Right Arrow"
							onClick={() => sliderRef.current.slickNext()} // Trigger slickNext on click
						/>
					</div>
				</div>
			</div>
			<div className="black-bg-service">
				<div className="container-main">
					<div className="header-service-common">
						<h2 className='header-page-name-small'>Works</h2>
						<h2 className='header-page-name-common'>Explore our work where creativity made a difference.</h2>
					</div>
					<div className="main-slidersss">
						<Slider {...settingsOne}>
							{/* <div className="home-work-service hover-effect">
								<img src={ptwo} className='service-image-work' alt="service image" />
								<div className="work-details-right">
									<h2 className='work-number-text-color'>01.</h2>
									<p className='sub-text-work-hide'>At Haris&Co., we understand that your brand is more</p>
									<p className='sub-text-work'>At Haris&Co., we understand that your brand is more than just a logo or a tagline—it's the essence of your business, the story you tell, and the promise you make to your customers. Our branding services are designed to uncover and articulate your unique identity, ensuring that every touchpoint resonates with your target audience. From initial brand strategy and research to crafting a compelling visual identity, we work closely with you to build a brand that is authentic, memorable, and impactful. </p>
								</div>
							</div> */}
							<div className="home-work-service hover-effect">
								<img src={six} className='service-image-work' alt="service image" />
								<div className="work-details-right">
									<h2 className='work-number-text-color'>1.</h2>
									<p className='sub-text-work-hide'> Collaborating with TCS</p>
									<p className='sub-text-work'>We partnered up with Tata Consultancy Services (TCS) for the design and copy for their TCS Sustainathon 2024.</p>
								</div>
							</div>
							<div className="home-work-service hover-effect">
								<img src={mfive} className='service-image-work' alt="service image" />
								<div className="work-details-right">
									<h2 className='work-number-text-color'>2.</h2>
									<p className='sub-text-work-hide'> Skyrocketing sales with Walkaroo!</p>
									<p className='sub-text-work'>We helped Walkaroo, one of India’s popular footwear brands, scale their revenue to ₹10M+ in just 6 months!</p>
								</div>
							</div>
							<div className="home-work-service hover-effect">
								<img src={popees} className='service-image-work' alt="service image" />
								<div className="work-details-right">
									<h2 className='work-number-text-color'>03.</h2>
									<p className='sub-text-work-hide'> Revamping Popees</p>
									<p className='sub-text-work'>We partnered with one of Kerala’s best known brands, Popees to boost their online presence and brand visibility</p>
								</div>
							</div>
							<div className="home-work-service hover-effect">
								<img src={truth} className='service-image-work' alt="service image" />
								<div className="work-details">
									<h2 className='work-number-text'>04.</h2>
									<p className='sub-text-work-hide'>Vamping up Truthcare Pharmacy.</p>
									<p className='sub-text-work'>Our web development and UI/UX services helped give Truthcare Pharmacy a new and improved online presence.</p>
								</div>
							</div>
							<div className="home-work-service hover-effect">
								<img src={one} className='service-image-work' alt="service image" />
								<div className="work-details">
									<h2 className='work-number-text'>05.</h2>
									<p className='sub-text-work-hide'>Partnering with Kairali TMT</p>
									<p className='sub-text-work'>See how we partnered up with South India’s most popular steel company, Kairali TMT for an ad. </p>
								</div>
							</div>




							<div className="home-work-service hover-effect">
								<img src={sfour} className='service-image-work' alt="service image" />
								<div className="work-details-right">
									<h2 className='work-number-text-color'>06.</h2>
									<p className='sub-text-work-hide'> Launching Kairali TMT Online</p>
									<p className='sub-text-work'>We partnered with one of South India’s biggest steel brands to increase their online presence. Explore how we helped drive organic traffic from 1k to 2 lakh+! </p>
								</div>
							</div>
							<div className="home-work-service hover-effect">
								<img src={disha} className='service-image-work' alt="service image" />
								<div className="work-details-right">
									<h2 className='work-number-text-color'>07.</h2>
									<p className='sub-text-work-hide'> Styling an online presence for Disha Creationz!</p>
									<p className='sub-text-work'>We collaborated with Disha Creationz, a clothing brand to increase their brand visibility and engagement.</p>
								</div>
							</div>
							<div className="home-work-service hover-effect">
								<img src={organic} className='service-image-work' alt="service image" />
								<div className="work-details-right">
									<h2 className='work-number-text-color'>08.</h2>
									<p className='sub-text-work-hide'> Choosing healthy and organic with Organic Habits</p>
									<p className='sub-text-work'>We helped organic and health-oriented company, Organic Habits to establish their online presence. </p>
								</div>
							</div>

							<div className="home-work-service hover-effect">
								<img src={sthree} className='service-image-work' alt="service image" />
								<div className="work-details">
									<h2 className='work-number-text'>09.</h2>
									<p className='sub-text-work-hide'>SEO expertise that drives results!</p>
									<p className='sub-text-work'>Discover how our SEO experts generated 1M+ revenue within 10 months for BOSQ, a premium workspace solutions brand! Our strategies delivered organic 500+ sales-quality leads. </p>
								</div>
							</div>



							<div className="home-work-service hover-effect">
								<img src={work0} className='service-image-work' alt="service image" />
								<div className="work-details-right">
									<h2 className='work-number-text-color'>10.</h2>
									<p className='sub-text-work-hide'>Redefining brand stories.</p>
									<p className='sub-text-work'>We helped create a unique and authentic branding for the new eatery, Calicut Parivar Restaurant.</p>
								</div>
							</div>

							<div className="home-work-service hover-effect">
								<img src={work2} className='service-image-work' alt="service image" />
								<div className="work-details">
									<h2 className='work-number-text'>11.</h2>
									<p className='sub-text-work-hide'>Crafting the soul of the brand.</p>
									<p className='sub-text-work'>We helped Dubai-based brand, Automate My Biz craft their brand story that speaks their truth </p>
								</div>
							</div>
							<div className="home-work-service hover-effect">
								<img src={work3} className='service-image-work' alt="service image" />
								<div className="work-details-right">
									<h2 className='work-number-text-color'>12.</h2>
									<p className='sub-text-work-hide'>Branding for a change.</p>
									<p className='sub-text-work'>We helped a healthy food manufacturing unit to define their brand with our branding services. </p>
								</div>
							</div>
							<div className="home-work-service hover-effect">
								<img src={work4} className='service-image-work' alt="service image" />
								<div className="work-details">
									<h2 className='work-number-text'>13.</h2>
									<p className='sub-text-work-hide'>Beyond conventions with Foodies Bay.</p>
									<p className='sub-text-work'>Our branding services helped craft a stunning brand identity for a multi cuisine restaurant in Dubai. </p>
								</div>
							</div>
							<div className="home-work-service hover-effect">
								<img src={work5} className='service-image-work' alt="service image" />
								{/* <div className="work-details-right">
									<h2 className='work-number-text-color'>05.</h2>
									<p className='sub-text-work-hide'>At Haris&Co., we understand that your brand is more</p>
									<p className='sub-text-work'>At Haris&Co., we understand that your brand is more than just a logo or a tagline—it's the essence of your business, the story you tell, and the promise you make to your customers. Our branding services are designed to uncover and articulate your unique identity, ensuring that every touchpoint resonates with your target audience. From initial brand strategy and research to crafting a compelling visual identity, we work closely with you to build a brand that is authentic, memorable, and impactful. </p>
								</div> */}
							</div>
							<div className="home-work-service hover-effect">
								<img src={work6} className='service-image-work' alt="service image" />
								<div className="work-details">
									<h2 className='work-number-text-color'>14.</h2>
									<p className='sub-text-work-hide'>1.  Brand stories that speak unique.</p>
									<p className='sub-text-work'>From brand story to visual concepts, we helped create a new voice and brand identity for Healbev, a new beverage company.</p>
								</div>
							</div>



							<div className="home-work-service hover-effect">
								<img src={lady} className='service-image-work' alt="service image" />
								<div className="work-details">
									<h2 className='work-number-text'>15.</h2>
									<p className='sub-text-work-hide'>Baking with Lady Loafella!</p>
									<p className='sub-text-work'>Explore how we enhance visibility with our SEO strategies.</p>
								</div>
							</div>





							<div className="home-work-service hover-effect">
								<img src={wild} className='service-image-work' alt="service image" />
								<div className="work-details">
									<h2 className='work-number-text'>16.</h2>
									<p className='sub-text-work-hide'>Serving the goodness of nuts with Wild Tree.</p>
									<p className='sub-text-work'>We vamped up the online presence of Wild Tree, a UAE-based food company dealing in nuts and snacks.</p>
								</div>
							</div>





							<div className="home-work-service hover-effect">
								<img src={sfive} className='service-image-work' alt="service image" />
								<div className="work-details">
									<h2 className='work-number-text'>17.</h2>
									<p className='sub-text-work-hide'>Strategies that put you on top.</p>
									<p className='sub-text-work'>We helped Skin Bae, a brand that sells premium and authentic Korean skincare products, rank higher than industry leaders like Amazon, Nykaa, and more. </p>
								</div>
							</div>


							<div className="home-work-service hover-effect">
								<img src={sone} className='service-image-work' alt="service image" />
								<div className="work-details-right">
									<h2 className='work-number-text-color'>18.</h2>
									<p className='sub-text-work-hide'> SEO strategies that rank you on the first page!</p>
									<p className='sub-text-work'>Our SEO strategies made a difference for Abu Dhabi-based home care provider Infinity Care. Our strategies reduced bounce rates and generated 200+ leads in just 2 months! </p>
								</div>
							</div>





							<div className="home-work-service hover-effect">
								<img src={stwo} className='service-image-work' alt="service image" />
								<div className="work-details-right">
									<h2 className='work-number-text-color'>19.</h2>
									<p className='sub-text-work-hide'>200+ leads in 2 months!</p>
									<p className='sub-text-work'>Our SEO strategies made a difference for Abu Dhabi-based home care provider Infinity Care. Our strategies reduced bounce rates and generated 200+ leads in just 2 months!</p>
								</div>
							</div>
							<div className="home-work-service hover-effect">
								<img src={smone} className='service-image-work' alt="service image" />
								<div className="work-details">
									<h2 className='work-number-text'>20.</h2>
									<p className='sub-text-work-hide'>Scroll-stopping Design Creatives!</p>
									<p className='sub-text-work'>We crafted unique and captivating design creatives for Organic Habits, an organic and health-oriented food company, and Care n Cure, an online pharmacy.  </p>
								</div>
							</div>





							<div className="home-work-service hover-effect">
								<img src={smtwo} className='service-image-work' alt="service image" />
								<div className="work-details-right">
									<h2 className='work-number-text-color'>21.</h2>
									<p className='sub-text-work-hide'> A community of 50+ happy clients!</p>
									<p className='sub-text-work'>Explore how we delivered show-stopping creative solutions to over 50+ clients from multiple industries.</p>
								</div>
							</div>
							<div className="home-work-service hover-effect">
								<img src={smthree} className='service-image-work' alt="service image" />
								<div className="work-details">
									<h2 className='work-number-text'>22.</h2>
									<p className='sub-text-work-hide'>Campaigning for change with Femisafe.</p>
									<p className='sub-text-work'>Our captivating and strong campaigns for Femisafe for Women’s Day were dearly loved and recognized!</p>
								</div>
							</div>



							<div className="home-work-service hover-effect">
								<img src={mone} className='service-image-work' alt="service image" />
								<div className="work-details">
									<h2 className='work-number-text'>23.</h2>
									<p className='sub-text-work-hide'>Scaling revenue to ₹ 2M+ !</p>
									<p className='sub-text-work'>We teamed with Skin Bae, a leading skincare brand offering Korean skincare, to scale their revenue and increase ROAS by 4 times! </p>
								</div>
							</div>









						</Slider>
					</div>
				</div>
			</div>
			<div className="clients-section-home">
				<div className="container-main">
					<div className="header-service-common">
						<h2 className='header-page-name-small'>Clients</h2>
						<h2 className='header-page-name-common'>We are not just an agency; We are your Partners in Growth.</h2>
					</div>
					<div className="row">
						<div className="col-lg-12 mobile-hide-slider">
							<div className="clients-image-main">
								<img src={clients} className='client-imagee' alt="Clients" />
							</div>
						</div>
						<div className="col-lg-12 mobile-hide-slider">
							<div className="clients-image-main">
								<img src={clientsone} className='client-imagee' alt="Clients" />
							</div>
						</div>
						<div className="col-lg-12 mobile-show-slider">
							<div className="clients-image-main">
								<img src={clientsmobile} className='client-imageee' alt="Clients" />
							</div>
						</div>
						<div className="col-lg-12">
							<div className="btn-dvd">
								<div className="enquiry-btn-dv">
									<Link to='/clients' className='btn enquire-btn'>View More <img src={arrows} className='arrow-icon' alt="arrow icon" /></Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="about-harisandco">
				<div className="container-main">
					<div className="col-lg-12">
						<div className="about-content">
							<h3 className='about-text'>At <span>Haris&Co</span>, we are passionate about creativity, innovation, and delivering exceptional results for our clients. As a full-service creative agency, we specialize in crafting unique strategies that bring brands to life through marketing, branding, designing, SEO, UI/UX, and development.</h3>
							<div className="view-story">
								<div className="enquiry-btn-dv">
									<Link to='/about' className='btn enquire-btn'>View Story <img src={arrow} className='arrow-icon' alt="arrow icon" /></Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="counter-home">
				<div className="container-main">
					<div className="row">
						<div className="col-lg-4 col-md-4">
							<div className="counter-section">
								<h2 className='count-number'>
									<CountUp end={500} duration={4} suffix="+" />
								</h2>
								<h4 className='count-text'>Clients</h4>
							</div>
						</div>
						<div className="col-lg-4 col-md-4">
							<div className="counter-section">
								<h2 className='count-number'>
									<CountUp end={1000} duration={9} suffix="+" />
								</h2>
								<h4 className='count-text'>Projects Done</h4>
							</div>
						</div>
						<div className="col-lg-4 col-md-4	">
							<div className="counter-section">
								<h2 className='count-number'>4.9</h2>
								<h4 className='count-text'>Rated on Google</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="founder-section">
				<img src={founder} className='founder-main-image' alt="FounderImage" />
				<img src={foundermobile} className='founder-main-image-mobile' alt="FounderImage" />
			</div>
			{/* <div className="blogs-main">
				<div className="container-main">
					<div className="header-service-common">
						<h2 className='header-page-name-small'>Blogs</h2>
						<h2 className='header-page-name-common'>We let you in on the best ways to get on top of the game</h2>
					</div>
					<div className="row">
						<div className="col-lg-3 col-md-6">
							<div className="blog-main">
								<img src={blogone} className='blog-box' alt="" />
								<div className="date-time-blog">
									<h6>Events  4 min read</h6>
									<h6>January 25, 2024</h6>
								</div>
								<p className='blog-sub'>Lorem Ipsum is simply dummy text of printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="blog-main">
								<img src={blogone} className='blog-box' alt="" />
								<div className="date-time-blog">
									<h6>Events  4 min read</h6>
									<h6>January 25, 2024</h6>
								</div>
								<p className='blog-sub'>Lorem Ipsum is simply dummy text of printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="blog-main">
								<img src={blogone} className='blog-box' alt="" />
								<div className="date-time-blog">
									<h6>Events  4 min read</h6>
									<h6>January 25, 2024</h6>
								</div>
								<p className='blog-sub'>Lorem Ipsum is simply dummy text of printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="blog-main">
								<img src={blogone} className='blog-box' alt="" />
								<div className="date-time-blog">
									<h6>Events  4 min read</h6>
									<h6>January 25, 2024</h6>
								</div>
								<p className='blog-sub'>Lorem Ipsum is simply dummy text of printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>
							</div>
						</div>
					</div>
				</div>
			</div> */}
		</div>
	)
}
export default Home;