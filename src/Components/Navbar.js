import React, { Component } from "react";
import "../Styles/Navbar.css";
import img1 from "../images/logo.jpg";

export default class Navbar extends Component {
	render() {
		return (
			// <body class="p-3 m-0 border-0 bd-example m-0 border-0">    
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
      <div class="container-fluid">
      <img src={img1} className="rounded me-5" alt="" srcset="" style={{width: ' 45px'}}/>
        <a class="navbar-brand" href="#">Cleaver Project</a>        
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse show" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className='nav-item me-5'>
								<a className='nav-link' href='/'>
									Home
								</a>
							</li>
							<li className='nav-item me-5'>
								<a className='nav-link' href='/about'>
									About
								</a>
							</li>
							<li className='nav-item me-5'>
								<a className='nav-link' href='#services'>
									Services
								</a>
							</li>
							<li className='nav-item me-5'>
								<a className='nav-link' href='/contact'>
									Contact
								</a>
							</li>
							<li className='nav-item me-5'>
								<a className='nav-link' href='/faq'>
									FAQ
								</a>
							</li>
          </ul>
        </div>
      </div>
    </nav>
		);
	}
}
