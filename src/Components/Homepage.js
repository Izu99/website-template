import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Slideshow from "./Slideshow";

import "../Styles/Homepage.css";

import mobile from "../images/mobile.png";
import web from "../images/web.png";
import desktop from "../images/desktop.png";
import docker from "../images/docker.png";
import ui from "../images/ui.png";
import ecommerce from "../images/ecommerce.png";
import cyber from "../images/cyber.png";
import data from "../images/data.png";
import network from "../images/network.png";

export default class Homepage extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<div class='col-md-12'>
					<div class='container-fluid pt-5'>
						<div class='row align-center mg-4'>
							<div class='col-md-6'>
								<h2 class='display-5 p-4 fw-light'>
									Create awesome digital experiences quickly, easily, and
									securely
								</h2>
								<div class='col-md-12 d-flex justify-content-center fs-4 p-4'>
									Empowering Innovation Through Elegant Software Solutions
								</div>
								<h2 class='display-2 p-4 fs-5'>
									Unlocking Limitless Digital Experiences: From Dynamic Apps to Seamless Workflows, and Stunning Animations – All Enhanced by the Power of Cloud-Native Infrastructure. Embrace our Suite of Products to Liberate Your Focus on Business Needs, while we Tackle the Technical Complexities. Whether You Opt for API Mastery, Integration Prowess, or IAM Excellence, our Solutions Adapt: Run Privately, Soar in the Cloud, or Embrace SaaS. Alternatively, Dive into our Developer's Oasis – Your Personal Platform-as-a-Service, Accelerating Your Coding Odyssey Today
								</h2>
							</div>

							<div class='col-md-6'>
								<img
									src='https://rubyhaus.com/wp-content/uploads/2018/10/solutions-640x640.png'
									alt=''
									srcset=''
									class='img-fluid'
									style={{width: '75%'}}
								/>
							</div>
							{/* <div className='container'>
								<div className='buttons d-flex justify-content-between align-items-center'>
									<button
										class='btn btn-lg m-2 px-4 py-2 w-100'
										style={{ backgroundColor: "#0AA2C0" }}>
										button
									</button>
									<button
										class='btn btn-lg m-2 px-4 py-2 w-100'
										style={{ backgroundColor: "#0AA2C0" }}>
										button
									</button>
									<button
										class='btn btn-lg m-2 px-4 py-2 w-100'
										style={{ backgroundColor: "#0AA2C0" }}>
										button
									</button>
									<button
										class='btn btn-lg m-2 px-4 py-2 w-100'
										style={{ backgroundColor: "#0AA2C0" }}>
										button
									</button>
								</div>
							</div> */}
						</div>
					</div>
				</div>
				<div class='container-xxl bg-dark'>
					<div className="row p-5">
						<Slideshow />
					</div>
				</div>

				<div className='container mt-5' id='services'>
					<div className='row'>
						<div class='card-group mt-4'>
							<div
								class='card me-2 ms-2'
								style={{
 									border: "1px solid #eeeeee" 
								}}>
								<img
									src={mobile}
									class='card-img-top mx-auto mt-4 mb-2'
									alt='...'
									style={{ width: "60px" }}
								/>
								<div class='card-body'>
									<h5 class='card-title text-center'>Mobile App Development</h5>
									<p
										class='card-text text-center mt-4 mb-5'
										style={{ fontSize: "16px" }}>
										Our expert team of mobile app developers crafts innovative
										and user-friendly applications for iOS and Android
										platforms. Whether you need a business app, a gaming
										application, or a utility tool, we have the expertise to
										deliver top-notch solutions tailored to your requirements.
									</p>
								</div>
							</div>
							<div
								class='card me-2 ms-2'
								style={{
 									border: "1px solid #eeeeee" 
								}}>
								<img
									src={web}
									class='card-img-top mx-auto mt-4 mb-2'
									alt='...'
									style={{ width: "60px" }}
								/>
								<div class='card-body'>
									<h5 class='card-title text-center'>
										Web Application Development
									</h5>
									<p
										class='card-text text-center mt-4 mb-5'
										style={{ fontSize: "16px" }}>
										From simple websites to complex web applications, we design
										and develop dynamic, interactive, and scalable solutions.
										Our web development services encompass the latest
										technologies and frameworks to create responsive and
										engaging user experiences.
									</p>
								</div>
							</div>
							<div
								class='card me-2 ms-2'
								style={{
 									border: "1px solid #eeeeee" 
								}}>
								<img
									src={desktop}
									class='card-img-top mx-auto mt-4 mb-2'
									alt='...'
									style={{ width: "60px" }}
								/>
								<div class='card-body'>
									<h5 class='card-title text-center'>
										Desktop Application Development
									</h5>
									<p
										class='card-text text-center mt-4 mb-5'
										style={{ fontSize: "16px" }}>
										Embrace the power of desktop applications customized to
										enhance your business processes and productivity. Our
										proficient developers build robust and efficient desktop
										applications that run seamlessly across various operating
										systems.
									</p>
								</div>
							</div>
						</div>
						<div class='card-group mt-4'>
							<div
								class='card me-2 ms-2'
								style={{
 									border: "1px solid #eeeeee" 
								}}>
								<img
									src={docker}
									class='card-img-top mx-auto mt-4 mb-2'
									alt='...'
									style={{ width: "60px" }}
								/>
								<div class='card-body'>
									<h5 class='card-title text-center'>DevOps Solutions</h5>
									<p
										class='card-text text-center mt-4 mb-5'
										style={{ fontSize: "16px" }}>
										Stay ahead in the fast-paced digital landscape with our
										DevOps services. We integrate development and operations,
										streamlining your software delivery process, enhancing
										collaboration, and ensuring continuous deployment for a
										faster time-to-market.
									</p>
								</div>
							</div>
							<div
								class='card me-2 ms-2'
								style={{
 									border: "1px solid #eeeeee" 
								}}>
								<img
									src={ui}
									class='card-img-top mx-auto mt-4 mb-2'
									alt='...'
									style={{ width: "60px" }}
								/>
								<div class='card-body'>
									<h5 class='card-title text-center'>UI/UX Design</h5>
									<p
										class='card-text text-center mt-4 mb-5'
										style={{ fontSize: "16px" }}>
										Enhancing user experiences through intuitive and visually
										appealing designs. Our expert designers create interfaces
										that delight and engage your users, ensuring seamless
										navigation and interaction with your applications.
									</p>
								</div>
							</div>
							<div
								class='card me-2 ms-2'
								style={{
 									border: "1px solid #eeeeee" 
								}}>
								<img
									src={ecommerce}
									class='card-img-top mx-auto mt-4 mb-2'
									alt='...'
									style={{ width: "60px" }}
								/>
								<div class='card-body'>
									<h5 class='card-title text-center'>
										E-commerce Store Development
									</h5>
									<p
										class='card-text text-center mt-4 mb-5'
										style={{ fontSize: "16px" }}>
										Unlock your business's online potential with our bespoke
										e-commerce solutions. We design secure and user-friendly
										online stores that provide a seamless shopping experience,
										increasing your conversion rates and maximizing your
										revenue.
									</p>
								</div>
							</div>
						</div>
						<div class='card-group mt-4'>
							<div
								class='card me-2 ms-2'
								style={{
 									border: "1px solid #eeeeee" 
								}}>
								<img
									src={cyber}
									class='card-img-top mx-auto mt-4 mb-2'
									alt='...'
									style={{ width: "60px" }}
								/>
								<div class='card-body'>
									<h5 class='card-title text-center'>Cybersecurity</h5>
									<p
										class='card-text text-center mt-4 mb-5'
										style={{ fontSize: "16px" }}>
										Safeguarding your digital assets from evolving threats. Our
										cybersecurity experts implement robust measures to protect
										your applications and data, conducting thorough assessments,
										implementing encryption, and ensuring compliance with
										industry standards.
									</p>
								</div>
							</div>
							<div
								class='card me-2 ms-2'
								style={{
 									border: "1px solid #eeeeee" 
								}}>
								<img
									src={data}
									class='card-img-top mx-auto mt-4 mb-2'
									alt='...'
									style={{ width: "60px" }}
								/>
								<div class='card-body'>
									<h5 class='card-title text-center'>Data Science</h5>
									<p
										class='card-text text-center mt-4 mb-5'
										style={{ fontSize: "16px" }}>
										Leveraging the power of data for informed decision-making.
										Our data scientists analyze and interpret your data,
										providing valuable insights, predictive modeling, and
										data-driven solutions to drive business growth.
									</p>
								</div>
							</div>
							<div
								class='card me-2 ms-2'
								style={{
 									border: "1px solid #eeeeee" 
								}}>
								<img
									src={network}
									class='card-img-top mx-auto mt-4 mb-2'
									alt='...'
									style={{ width: "60px" }}
								/>
								<div class='card-body'>
									<h5 class='card-title text-center'>Network Services</h5>
									<p
										class='card-text text-center mt-4 mb-5'
										style={{ fontSize: "16px" }}>
										Building and optimizing your digital infrastructure. Our
										network experts design, implement, and manage secure and
										efficient network solutions to ensure smooth communication
										and data flow across your organization.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class='container'>
					<div class='row row-cols-1 row-cols-md-3 g-4 pt-5'>
						<div class='col'>
							<div class='card h-100'>
								<div class='card-body'>
									<h5 class='card-title text-center text-center pt-4 pb-4'>
										Customer Review
									</h5>
									<p class='card-text'>
										"We were in dire need of a modern and engaging website for
										our company's landing page. Thanks to your software
										development team, we now have a stunning and user-friendly
										website that has significantly improved our online presence.
										The attention to detail and quick turnaround time were
										impressive. Highly recommended!"
									</p>
								</div>
							</div>
						</div>
						<div class='col'>
							<div class='card h-100'>
								<div class='card-body'>
									<h5 class='card-title text-center text-center pt-4 pb-4'>
										Customer Review
									</h5>
									<p class='card-text'>
										"Your team developed an outstanding desktop app for employee
										management, and it has revolutionized the way we handle HR
										tasks. The app's intuitive interface and comprehensive
										features have streamlined our HR processes, saving us
										valuable time and effort. The support and training provided
										were top-notch, making the transition smooth. Thank you for
										creating such a valuable tool!"
									</p>
								</div>
							</div>
						</div>
						<div class='col'>
							<div class='card h-100'>
								<div class='card-body'>
									<h5 class='card-title text-center text-center pt-4 pb-4'>
										Customer Review
									</h5>
									<p class='card-text'>
										"We approached your company to build a mobile app for
										Android to manage our hotel operations, and we couldn't be
										happier with the results. The app's functionality, design,
										and seamless performance have exceeded our expectations. It
										has made hotel management efficient and convenient, enabling
										us to provide better service to our guests. Your team's
										expertise and dedication are commendable. We look forward to
										collaborating on future projects."
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='container' style={{width: '60%', marginTop: '4rem'}}>
					<div className="row">
					<form id='contactForm mx-auto' >
						<div class='mb-3'>
							<label class='form-label' for='name'>
								Name
							</label>
							<input
								class='form-control'
								id='name'
								type='text'
								placeholder='Name'
							/>
						</div>

						<div class='mb-3'>
							<label class='form-label' for='emailAddress'>
								Email Address
							</label>
							<input
								class='form-control'
								id='emailAddress'
								type='email'
								placeholder='Email Address'
							/>
						</div>

						<div>
							<label class='form-label' for='message'>
								Message
							</label>
							<textarea
								class='form-control'
								id='message'
								type='text'
								placeholder='Message'
								style={{height: '10rem'}}
							/>
						</div>

						<div class='d-grid'>
							<button class='btn btn-primary btn-lg mt-4' type='submit'>
								Submit
							</button>
						</div>
					</form>
					</div>					
				</div>
				<Footer />
			</div>
		);
	}
}
