import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "bootstrap/dist/css/bootstrap.min.css";
import imag from '../images/img7.png'
import {Link} from 'react-router-dom'
import CV_English from '../images/CV_English.pdf'
import CV_French from '../images/CV_French.pdf'
import '../Styles/Header.css'
function Header(){

    return(
        <div id='header' >
            <div className='content'>
                <nav>
                    <span className="navbar-brand" >Jamal</span>
                    <ul>
                        <a className='link' href='#about'> <li> About Me </li>  </a>
                        <a className='link' href='#skills'> <li> Skills </li>  </a>  
                        <a className='link' href='#projects'> <li> Projects </li>  </a>  
                        <a className='link' href='#contact'> <li> Contact Me </li>  </a>  
                        <a className='link' href='/summary'> <li> Summary</li>  </a>  
                        <i className="bi bi-facebook"></i>
                    </ul>
                </nav>
                <div className='details'>
                    <div className='section1'>
                        <h1>Hi I'm Jamal</h1>
                        <h3>Full Stack Web Developer</h3>
                        <p>I'm a quick learner and a team player, and I'm confident that 
                            I can be a valuable assist to any web development team.
                        </p>
                        <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#jamal">
                            Download CV
                        </button>
                    </div>
                    <div className='section2'>
                        <img src={imag} alt='portfolio'/>
                    </div>
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
                </div>
            </div>
            {/*-- Modal --*/}
            <div className=" jamalCvModal modal fade" id="jamal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                            <button className='btn btn-success'> In French </button>
                            </Link>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger text-white" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;