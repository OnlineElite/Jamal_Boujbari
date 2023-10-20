import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import {Link} from 'react-router-dom'
import '../Styles/Header.css'
import imag from '../images/img7.png'
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
                        <a className='link' href='/summary'> <li> Summary </li>  </a>  
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
                        <button className='btn'>Download CV</button>
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
        </div>
    )
}

export default Header;