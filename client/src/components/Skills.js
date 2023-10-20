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
                                <ul>
                                    <li>HTML5</li>
                                    <li>CSS3</li>
                                    <li>Bootstrap</li>
                                    <li>Javascript</li>
                                    <li>ReactJS</li>
                                    <li>Redux</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className=' col-md-4 col-sm-12'>
                        <div className='card'>
                            <div className='cart_head'>
                                <FontAwesomeIcon className='icons' icon="fa-solid fa-code" />
                                <span>Back End</span>  
                            </div>
                            <div className='cart_body'>
                                <ul>
                                    <li>NodeJS</li>
                                    <li>ExpressJS</li>
                                    <li>PostgreSQL</li>
                                    <li>Javascript</li>
                                    <li>APIs</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className=' col-md-4 col-sm-12'>
                        <div className='card'>
                            <div className='cart_head'>
                                <FontAwesomeIcon className='icons' icon="fa-solid fa-sitemap" />
                                <span>Other</span>
                            </div>
                            <div className='cart_body'>
                                <ul>
                                    <li>Git</li>
                                    <li>GitHub</li>
                                    <li>VS Code</li>
                                    <li>Vercel</li>
                                    <li>Render</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;