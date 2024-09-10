import React from 'react'
import { Link } from 'react-router-dom'
import blog from './../Assets/blog.jpg'
import blogone from './../Assets/blogone.png'
import '../components/css/Blog.css'
const Blogs = () => {
	return (
    <div className='blogs-page'>
			<div className="container-main">
				<div className="header-service-common">
					<h2 className='header-page-name-small'>Blogs</h2>
					<h2 className='header-page-name-common'>Our clients are everything to us; so are we to them.</h2>
				</div>
				<div className="brand-details">
					<div className="row">
						<div className="col-lg-6">
							<div className="brand-divs">
								<img src={blog} className='blog-image' alt="" />
							</div>
						</div>
						<div className="col-lg-6">
							<div className="brand-divs">
								<h2 className='blog-heading-full-width'>Insights and Inspiration: Your Guide to Creative Excellence</h2>
								<div className="date-time-blog">
									<h4>Events  4 min read</h4>
									<h4>January 25, 2024</h4>
								</div>
								<p className='brand-sub-titles'>At Haris&Co., we understand that your brand is more than just a logo or a tagline—it's the essence of your business, the story you tell, and the promise you make to your customers. Our branding services are designed to uncover and articulate your unique identity, ensuring that every touchpoint resonates with your target audience. From initial brand strategy and research to crafting a compelling visual identity, we work closely with you to build a brand that is authentic, memorable, and impactful.</p>
								
							</div>
						</div>
					</div>
				</div>
				<div className="blogs">
					<div className="row">
						<div className="col-lg-3">
							<div className="blog-main">
								<img src={blogone} className='blog-box' alt="" />
								<div className="date-time-blog">
									<h6>Events  4 min read</h6>
									<h6>January 25, 2024</h6>
								</div>
								<p className='blog-sub'>Lorem Ipsum is simply dummy text of printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>
							</div>
						</div>
						<div className="col-lg-3">
							<div className="blog-main">
								<img src={blogone} className='blog-box' alt="" />
								<div className="date-time-blog">
									<h6>Events  4 min read</h6>
									<h6>January 25, 2024</h6>
								</div>
								<p className='blog-sub'>Lorem Ipsum is simply dummy text of printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>
							</div>
						</div>
						<div className="col-lg-3">
							<div className="blog-main">
								<img src={blogone} className='blog-box' alt="" />
								<div className="date-time-blog">
									<h6>Events  4 min read</h6>
									<h6>January 25, 2024</h6>
								</div>
								<p className='blog-sub'>Lorem Ipsum is simply dummy text of printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>
							</div>
						</div>
						<div className="col-lg-3">
							<div className="blog-main">
								<img src={blogone} className='blog-box' alt="" />
								<div className="date-time-blog">
									<h6>Events  4 min read</h6>
									<h6>January 25, 2024</h6>
								</div>
								<p className='blog-sub'>Lorem Ipsum is simply dummy text of printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>
							</div>
						</div>
						<div className="col-lg-3">
							<div className="blog-main">
								<img src={blogone} className='blog-box' alt="" />
								<div className="date-time-blog">
									<h6>Events  4 min read</h6>
									<h6>January 25, 2024</h6>
								</div>
								<p className='blog-sub'>Lorem Ipsum is simply dummy text of printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>
							</div>
						</div>
						<div className="col-lg-3">
							<div className="blog-main">
								<img src={blogone} className='blog-box' alt="" />
								<div className="date-time-blog">
									<h6>Events  4 min read</h6>
									<h6>January 25, 2024</h6>
								</div>
								<p className='blog-sub'>Lorem Ipsum is simply dummy text of printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>
							</div>
						</div>
						<div className="col-lg-3">
							<div className="blog-main">
								<img src={blogone} className='blog-box' alt="" />
								<div className="date-time-blog">
									<h6>Events  4 min read</h6>
									<h6>January 25, 2024</h6>
								</div>
								<p className='blog-sub'>Lorem Ipsum is simply dummy text of printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>
							</div>
						</div>
						<div className="col-lg-3">
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
			</div>
    </div>
	)
}

export default Blogs;