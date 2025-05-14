import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "bootstrap/dist/css/bootstrap.min.css";
import imag from '../images/img7.png'
import {Link} from 'react-router-dom'
import CV_English from '../images/CV_English110525.pdf'
import CV_French from '../images/CV_French.pdf'
import '../Styles/Header.css'
function Header(){

    return(
        <div id='header' >
            <div className='content'>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"><span className="navbar-brand" >Jamal</span></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <a className='link' href='#about'> <li> About Me </li>  </a>
                                <a className='link' href='#skills'> <li> Skills </li>  </a>
                                <a className='link' href='#projects'> <li> Projects </li>  </a>
                                <a className='link' href='#contact'> <li> Contact Me </li>  </a>
                                {/*<a className='link' href='/summary'> <li> Summary</li> </a> */}
                                <i className="bi bi-facebook"></i>
                            </ul>   
                        </div>
                    </div>
                </nav>
                
                <div className='details'>
                    <div className='social'>
                        <a href='https://linkedin.com/in/jamal-boujbari-937121212' rel='noreferrer' target='_blank'>
                            <FontAwesomeIcon className='icon' icon="fa-brands fa-linkedin" />
                        </a>
                        <a href='https://github.com/OnlineElite' rel='noreferrer' target='_blank'>
                            <FontAwesomeIcon className='icon' icon="fa-brands fa-github" />
                        </a>
                        <a href='https://t.me/JML_Elite' rel="noreferrer" target='_blank'>
                            <FontAwesomeIcon className='icon' icon="fa-brands fa-telegram" />
                        </a>
                    </div>
                    <div className='row my-3'>
                        <div className=' left col-12 col-sm-12 col-md-6 col-lg-6'>
                            <div className='section1'>
                                <h1>Hi I'm Jamal Boujbari</h1>
                                <h3>Full Stack Web Developer</h3>
                                <p>I'm a quick learner and a team player, and I'm confident that 
                                    I can be a valuable assist to any web development team.
                                </p>
                               {/* <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#jamal">
                                    Download CV
                                </button> */}
                                <div className='Butt'>
                                    <Link to={CV_English}
                                    download="Jamal_Boujbari_CV"
                                    target="_blank"
                                    rel="noreferrer"
                                    >
                                        <button type="button" className="btn" /*</Link>data-bs-toggle="modal" data-bs-target="#jamal"*/ >
                                            Download CV
                                        </button>
                                    </Link>
                                    <button  type="button" className='btn' data-bs-toggle="modal" data-bs-target="#pitch">View Elevator Pitch</button>
                                </div>
                            </div>
                        </div>
                        <div className=' right col-12 col-sm-12 col-md-6 col-lg-6'>
                            <div className='section2 d-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block'>
                                <img src={imag} alt='portfolio'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*-- Modal 1--*/}
            <div className=" jamalCvModal modal fade" id="pitch" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5 fw-bold fs-5 text-white text-center w-100 " id="exampleModalLabel">Elevator Pitch</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body ">
                            <p>
                                Hello! I'm Jamal Boujbari, a Full Stack Web Developer and Product Owner based in Casablanca.<br/>

                                With a background in physics and energy sciences, I transitioned into tech by completing a full-stack development 
                                program at Developers Institute. Today, I work as an IT Project Manager and Technical Product Owner , where I bridge
                                the gap between development teams and business needs to deliver impactful digital products.<br/>

                                My core strengths include:<br/>

                                <ul>
                                    <li>Full Stack Development (React, Node.js, PostgreSQL)</li>
                                    <li>Agile Product Management</li>
                                    <li>Cross-functional Team Collaboration</li>
                                </ul>
                                What sets me apart is my ability to combine technical expertise with a product-oriented mindset. 
                                I understand both how developers think and what stakeholders expect — and I thrive at turning ideas into scalable, 
                                user-focused solutions.<br/>

                                Whether it’s streamlining internal processes or launching customer-facing tools, I help teams build modern, 
                                high-quality web applications efficiently while staying aligned with business goals.<br/>

                                If you're looking for a developer who can also act as a technical product owner, or need support building 
                                robust digital products, I’d love to connect and explore how we can collaborate.<br/><br/>
                        
                                Thank you!
                            </p>
                        </div>
                      
                    </div>
                </div>
            </div>
            {/*-- Modal 2--*/}
            {/*<div className=" jamalCvModal modal fade" id="jamal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-sm">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5 text-white" id="exampleModalLabel">Choose cv language</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body ">
                            <Link to={CV_English}
                                download="Jamal_Boujbari_CV_English"
                                target="_blank"
                                rel="noreferrer"
                            >
                            <button className='btn btn-primary mx-2'> In English</button>
                            </Link>
                            <Link to={CV_French}
                                download="Jamal_Boujbari_CV_French"
                                target="_blank"
                                rel="noreferrer"
                            >
                            <button className='btn text-white btn-primary'> In French </button>
                            </Link>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger text-white" data-bs-dismiss="modal">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>*/}
        </div>
    )
}

export default Header;