import React from 'react'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from './Header'
import About from './About'
import Skills from './Skills'
import Projects from '../components/Projects'
import '../Styles/Portfolio.css'
function Portfolio(){

    return(
        <div id='portfolio'>
            <Header/>
            <About/>
            <Skills/>
            <Projects/>
        </div>
    )
}

export default Portfolio;