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
                            {/*<div id="carouselExample" className="carousel slide w-100 h-100">
                                <div className="carousel-inner">  
                                    <div className="carousel-item">
                                        <img src= {proj.image} alt='project'/>
                                    </div>
                                    <div className="carousel-item">
                                        <img src= {proj.image2} alt='project'/>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>*/}
                            <img src= {proj.image} alt='project'/>
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