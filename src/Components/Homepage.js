import React, { Component } from "react";
import Navbar from "./Navbar";

import "../Styles/Homepage.css";

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
									Create awesome digital experiences <br />
									quickly, easily, and securely
								</h2>

								<div class='col-md-12 d-flex justify-content-center fs-4 p-4'>
									Foundational technology for your digital platform
								</div>
								<h2 class='display-2 p-4 fs-5'>
									Digital experiences delivered as apps, workflows, and
									automations require powerful cloud native infrastructure to do
									the heavy lifting. Our products help you focus on the business
									requirements and leave the complexities to us. Build your
									digital platform using our API Management, Integration and IAM
									products that are available to run yourself, in a private
									cloud or as a SaaS, or just subscribe to our Internal
									Developer Platform as a Service and get coding today.
								</h2>
							</div>

							<div class='col-md-6'>
								<img
									src='https://wso2.cachefly.net/wso2/sites/all/2023/images/hero-image-ashjuly-2023.webp'
									alt=''
									srcset=''
									class='img-fluid'
									style={{}}
								/>
							</div>
							<div className='container'>
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
							</div>
						</div>
					</div>
				</div>
				<div class='container-xxl'>
					<div class='bg-dark bg-gradient p-5 mt-5'>
						<h3 class='text-white align-justify'>
							Our growing software company caters to a diverse range of
							customers, including 700+ direct clients, 5000+ Original Equipment
							Manufacturer (OEM) partners, and over 25,000 open-source customers
							across 90+ countries.
						</h3>
						<div class='d-flex justify-content-center'>
							<img
								src='https://th.bing.com/th/id/R.efcd9bfe34ebb06b229c8e49b2d0dacc?rik=VXPDoJ4%2fAtByIw&riu=http%3a%2f%2fwww.crystalconsultants.in%2fwp-content%2fuploads%2f2012%2f03%2fclient-list2.jpg&ehk=rDUFJPTHpI9nMgNAW1FVnUOHgCgUTTT1wnpBudwjAys%3d&risl=&pid=ImgRaw&r=0'
								srcset=''
								class='img-fluid pt-5'
							/>
						</div>
					</div>
				</div>
				<div className='container'>
					<h2 class='text-center pt-5 pb-5 fs-1' style={{ color: "#0D6EFD" }}>
						API Management
					</h2>
					<div className='hstack gap-5'>
						<div className='col'>
							100% open source enterprise-grade API management solution
							deployable on any infrastructure. With full lifecycle API
							management and an API gateway, manage services as APIs, discover
							and consume through a developer portal, apply security & policies
							on APIs, and monitor them for business insights.
						</div>
						<div class='hstack' style={{ height: "100px" }}>
							<div class='vr'></div>
						</div>
						<div className='col'>
							Fully SaaS enterprise-grade API-first development and management.
							Create, deploy, run, and manage APIs, API proxies and services
							with a fully fledged control plane that controls SaaS or
							private-cloud API gateways.
						</div>
					</div>
				</div>
				<div className='container'>
					<h2 class='text-center pt-5 pb-5 fs-1' style={{ color: "#0D6EFD" }}>
						Integration
					</h2>
					<div className='hstack gap-3'>
						<div>
							100% open source enterprise-grade API management solution
							deployable on any infrastructure. With full lifecycle API
							management and an API gateway, manage services as APIs, discover
							and consume through a developer portal, apply security & policies
							on APIs, and monitor them for business insights.
						</div>
						<div class='hstack' style={{ height: "200px" }}>
							<div class='vr'></div>
						</div>
						<div>
							Fully SaaS enterprise-grade API-first development and management.
							Create, deploy, run, and manage APIs, API proxies and services
							with a fully fledged control plane that controls SaaS or
							private-cloud API gateways.
						</div>
						<div class='hstack' style={{ height: "200px" }}>
							<div class='vr'></div>
						</div>
						<div>
							100% open source enterprise-grade API management solution
							deployable on any infrastructure. With full lifecycle API
							management and an API gateway, manage services as APIs, discover
							and consume through a developer portal, apply security & policies
							on APIs, and monitor them for business insights.
						</div>
					</div>
				</div>
				<div className='container'>
					<h2 class='text-center pt-5 pb-5 fs-1' style={{ color: "#0D6EFD" }}>
						Identity & Access Management
					</h2>
					<div className='hstack gap-3'>
						<div>
							100% open source enterprise-grade API management solution
							deployable on any infrastructure. With full lifecycle API
							management and an API gateway, manage services as APIs, discover
							and consume through a developer portal, apply security & policies
							on APIs, and monitor them for business insights.
						</div>
						<div class='hstack' style={{ height: "200px" }}>
							<div class='vr'></div>
						</div>
						<div>
							Fully SaaS enterprise-grade API-first development and management.
							Create, deploy, run, and manage APIs, API proxies and services
							with a fully fledged control plane that controls SaaS or
							private-cloud API gateways.
						</div>
						<div class='hstack' style={{ height: "200px" }}>
							<div class='vr'></div>
						</div>
						<div>
							100% open source enterprise-grade API management solution
							deployable on any infrastructure. With full lifecycle API
							management and an API gateway, manage services as APIs, discover
							and consume through a developer portal, apply security & policies
							on APIs, and monitor them for business insights.
						</div>
					</div>
				</div>
				<div class='container'>
					<div class='row row-cols-1 row-cols-md-3 g-4 pt-5'>
						<div class='col'>
							<div class='card h-100'>
								<div class='card-body'>
									<h5 class='card-title text-center pt-4 pb-4'>
										Customer Review 1
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
									<h5 class='card-title text-center pt-4 pb-4'>
										Customer Review 2
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
									<h5 class='card-title text-center pt-4 pb-4'>
										Customer Review 3
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

				<footer class='text-center text-lg-start bg-light text-muted pt-5'>
					<section class='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
						<div class='me-5 d-none d-lg-block'>
							<span>Get connected with us on social networks:</span>
						</div>

						<div>
							<a href='' class='me-4 text-reset'>
								<i class='fab fa-facebook-f'></i>
							</a>
							<a href='' class='me-4 text-reset'>
								<i class='fab fa-twitter'></i>
							</a>
							<a href='' class='me-4 text-reset'>
								<i class='fab fa-google'></i>
							</a>
							<a href='' class='me-4 text-reset'>
								<i class='fab fa-instagram'></i>
							</a>
							<a href='' class='me-4 text-reset'>
								<i class='fab fa-linkedin'></i>
							</a>
							<a href='' class='me-4 text-reset'>
								<i class='fab fa-github'></i>
							</a>
						</div>
					</section>

					<section class=''>
						<div class='container text-center text-md-start mt-5'>
							<div class='row mt-3'>
								<div class='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
									<h6 class='text-uppercase fw-bold mb-4'>
										<i class='fas fa-gem me-3'></i>Company name
									</h6>
									<p>
										Here you can use rows and columns to organize your footer
										content. Lorem ipsum dolor sit amet, consectetur adipisicing
										elit.
									</p>
								</div>

								<div class='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
									<h6 class='text-uppercase fw-bold mb-4'>Products</h6>
									<p>
										<a href='#!' class='text-reset'>
											Angular
										</a>
									</p>
									<p>
										<a href='#!' class='text-reset'>
											React
										</a>
									</p>
									<p>
										<a href='#!' class='text-reset'>
											Vue
										</a>
									</p>
									<p>
										<a href='#!' class='text-reset'>
											Laravel
										</a>
									</p>
								</div>

								<div class='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
									<h6 class='text-uppercase fw-bold mb-4'>Useful links</h6>
									<p>
										<a href='#!' class='text-reset'>
											Pricing
										</a>
									</p>
									<p>
										<a href='#!' class='text-reset'>
											Settings
										</a>
									</p>
									<p>
										<a href='#!' class='text-reset'>
											Orders
										</a>
									</p>
									<p>
										<a href='#!' class='text-reset'>
											Help
										</a>
									</p>
								</div>

								<div class='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
									<h6 class='text-uppercase fw-bold mb-4'>Contact</h6>
									<p>
										<i class='fas fa-home me-3'></i> New York, NY 10012, US
									</p>
									<p>
										<i class='fas fa-envelope me-3'></i>
										info@example.com
									</p>
									<p>
										<i class='fas fa-phone me-3'></i> + 01 234 567 88
									</p>
									<p>
										<i class='fas fa-print me-3'></i> + 01 234 567 89
									</p>
								</div>
							</div>
						</div>
					</section>

					<div
						class='text-center p-4'
						style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
						© 2021 Copyright:
						<a class='text-reset fw-bold' href='https://mdbootstrap.com/'>
							MDBootstrap.com
						</a>
					</div>
				</footer>
			</div>
		);
	}
}
