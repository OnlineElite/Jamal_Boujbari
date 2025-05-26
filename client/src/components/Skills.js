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
                                <FontAwesomeIcon icon="fa-solid fa-file-code" style={{color: "#fbfcfe",}} />
                                <span>Front End</span>
                            </div>
                            <div className='cart_body'>
                                <div className='w-100'>
                                    <p><FontAwesomeIcon icon="fa-brands fa-html5 m-3" style={{color: "#ffffff", marginRight: "5px"}}/> HTML5</p>
                                    <p><FontAwesomeIcon icon="fa-brands fa-css3" style={{color: "#ffffff",marginRight: "5px"}} />CSS3</p>
                                    <p><FontAwesomeIcon icon="fa-brands fa-bootstrap" style={{color: "#ffffff",marginRight: "5px"}} />Bootstrap</p>
                                    <p><FontAwesomeIcon icon="fa-brands fa-js" style={{color: "#ffffff",marginRight: "5px"}} />Javascript</p>
                                    <p><FontAwesomeIcon icon="fa-brands fa-react" style={{color: "#ffffff",marginRight: "5px"}} />ReactJS</p>
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
                                <div className='w-100'>
                                    <p><FontAwesomeIcon icon="fa-brands fa-node-js" style={{color: "#ffffff",marginRight: "5px"}} />NodeJS</p>
                                    <p>ExpressJS</p>
                                    <p>APIs</p>
                                    <p>PostgreSQL</p>
                                    <p>MySQL</p>
                                    <p>SQL Server</p>
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
                                <div className='w-100'>
                                    <p><FontAwesomeIcon icon="fa-brands fa-git-alt" style={{color: "#ffffff",marginRight: "5px"}} />Git</p>
                                    <p><FontAwesomeIcon icon="fa-brands fa-github" style={{color: "#ffffff",marginRight: "5px"}} />GitHub</p>
                                    <p>Render</p>
                                    <p>Vercel</p>
                                    <p>Firebase</p>                                   
                                    <p><FontAwesomeIcon icon="fa-brands fa-jira" style={{color: "#ffffff",marginRight: "5px"}} />Jira</p>
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