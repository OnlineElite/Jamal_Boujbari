import React from 'react'
import {projects} from './ProjectsInfo'
import '../Styles/Projects.css'
function Projects(){

    return(
        <div id='projects'>
            <h2 className='text-center'>My Projects</h2>
            <div className='container px-5'>
                {projects.map((proj, idx)=>(
                    <div className='cart' key={idx}>
                        <div className='cart_head'>
                            <img src= {proj.image} alt='project'/>
                        </div>
                        <div className='cart_body'>
                            <div className='desc'>
                                <p className='title'> {proj.title} </p>
                                <hr/>
                                <div className='desc'> {proj.description} </div>
                            </div>
                            <div className='cartFooter'>
                                <p><span>Tech used:</span>
                                {proj.techUsed}
                                </p>
                                <div className='buttons'>
                                    <a href= {proj.liveLink} rel='noreferrer' target='_blank'>
                                        <button className='btn live'>See Live</button>
                                    </a>
                                    <a href= {proj.codeLink} rel="noreferrer" target='_blank'>
                                        <button className='btn'>Source Code</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects;