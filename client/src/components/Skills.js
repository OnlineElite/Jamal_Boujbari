import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../Styles/Skills.css'
function Skills(){

    return(
        <div id='skills'>
            <h2 className='text-center'>My Skills</h2>
            <div className='container px-5'>
                <div className='row'>
                    <div className=' col-md-4 col-sm-12'>
                        <div className='card'>
                            <div className='cart_head'>
                                <FontAwesomeIcon className='icons' icon="fa-brands fa-html5" />
                                <span>Front End</span>
                            </div>
                            <div className='cart_body'>
                                <div>
                                    <p>HTML5</p>
                                    <p>CSS3</p>
                                    <p>Bootstrap</p>
                                    <p>Javascript</p>
                                    <p>ReactJS</p>
                                    <p>Redux</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' col-md-4 col-sm-12'>
                        <div className='card'>
                            <div className='cart_head'>
                                <FontAwesomeIcon className='icons' icon="fa-sopd fa-code" />
                                <span>Back End</span>  
                            </div>
                            <div className='cart_body'>
                                <div>
                                    <p>NodeJS</p>
                                    <p>ExpressJS</p>
                                    <p>PostgreSQL</p>
                                    <p>Javascript</p>
                                    <p>APIs</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' col-md-4 col-sm-12'>
                        <div className='card'>
                            <div className='cart_head'>
                                <FontAwesomeIcon className='icons' icon="fa-sopd fa-sitemap" />
                                <span>Other</span>
                            </div>
                            <div className='cart_body'>
                                <div>
                                    <p>Git</p>
                                    <p>GitHub</p>
                                    <p>VS Code</p>
                                    <p>Trello</p>
                                    <p>Vercel</p>
                                    <p>Render</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;