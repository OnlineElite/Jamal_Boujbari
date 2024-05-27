import React from 'react'
import {projects} from './ProjectsInfo'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import '../Styles/Projects.css'

function Projects(){

    return(
        <div id='projects'>
            <h2 className='text-center'>My Projects</h2>
            <div className='container px-5'>
                {projects.map((proj, idx)=>(
                    <div className='cart ' key={idx}>
                        <div className='cart_head'>
                            <Fade className='slider w-100 h-100 '>
                                {proj.image.map((slideImage, index)=> (
                                    <div key={index} className='w-100 h-100' >
                                        <div className='divStyle w-100 h-100'>
                                            <img src= {slideImage} alt='slideImg'/> 
                                        </div>
                                    </div>
                                ))} 
                            </Fade>
                            <div className='cercleRight'></div>
                            <div className='cercleLeft'></div>
                        </div>
                        <div className='cart_body'>
                            <div className='desc'>
                                <p className='title'> {proj.title} </p>
                                <hr/>
                                <div className='desc'> {proj.description} </div>
                            </div>
                            <div className='cartFooter'>
                                <p><span>Tech used:</span>{proj.techUsed}</p>
                                {proj.admin_account!== ''?
                                <p><span>Admin email:</span>{proj.admin_account.email}  <span>password:</span>{proj.admin_account.pass} </p> : ''
                                }
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