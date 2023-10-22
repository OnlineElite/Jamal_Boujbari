import React from 'react'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from './Header'
import About from './About'
import Skills from './Skills'
import Projects from '../components/Projects'
import Contact from './Contact'
import '../Styles/Portfolio.css'
function Portfolio(){

    return(
        <div id='portfolio'>
            <Header/>
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
        </div>
    )
}

export default Portfolio;