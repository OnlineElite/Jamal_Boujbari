import React from 'react'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import proj1 from '../images/img1.png'
import proj2 from '../images/img2.png'
import proj3 from '../images/port8.png'
import proj4 from '../images/port7.png'
import proj5 from '../images/port11.png'
import proj6 from '../images/port6.png'
import '../Styles/Projects.css'
function Projects(){
    const projects = [
        {
            image : proj1,
            title : 'TechWave | Online Store with admin dashboard',
            description : `An e-commerce website that allows you to add the products to the cart, to favorite items, filter products 
                        , with inventory management system that allows you to controle the store.`,
            techUsed :  `HTML5, CSS3, Bootstrap, JavaScript, ReactJS, Redux, NodeJS, API's, PostgreSQL.`,
            liveLink : 'https://inventory-management-system-seven.vercel.app/',
            codeLink : 'https://github.com/OnlineElite/Inventory_Management_System'
        },
        {
            image : proj2,
            title : 'TechWave | Online Store with admin dashboard',
            description : `An online store where you can filter products by category and brands, add to cart, add to favories 
                        and showing products details.`,
            techUsed :  `HTML5, CSS3, Bootstrap, JavaScript, ReactJS, Redux, NodeJS, API's, PostgreSQL.`,
            liveLink : 'https://inventory-management-system-seven.vercel.app/',
            codeLink : 'https://github.com/OnlineElite/Inventory_Management_System'
        },
        {
            image : proj3,
            title : 'TechWave | Online Store with admin dashboard',
            description : `An online store where you can filter products by category and brands, add to cart, add to favories 
                        and showing products details, with admin dashbord that shows, edite, update and delete product, users, brands and categories.`,
            techUsed :  `HTML5, CSS3, Bootstrap, JavaScript, ReactJS, Redux, NodeJS, API's, PostgreSQL.`,
            liveLink : 'https://inventory-management-system-seven.vercel.app/',
            codeLink : 'https://github.com/OnlineElite/Inventory_Management_System'
        },
        {
            image : proj4,
            title : 'TechWave | Online Store with admin dashboard',
            description : `An online store where you can filter products by category and brands, add to cart, add to favories 
                        and showing products details, with admin dashbord that shows, edite, update and delete product, users, brands and categories.`,
            techUsed :  `HTML5, CSS3, Bootstrap, JavaScript, ReactJS, Redux, NodeJS, API's, PostgreSQL.`,
            liveLink : 'https://inventory-management-system-seven.vercel.app/',
            codeLink : 'https://github.com/OnlineElite/Inventory_Management_System'
        },
        {
            image : proj5,
            title : 'TechWave | Online Store with admin dashboard',
            description : `An online store where you can filter products by category and brands, add to cart, add to favories 
                        and showing products details, with admin dashbord that shows, edite, update and delete product, users, brands and categories.`,
            techUsed :  `HTML5, CSS3, Bootstrap, JavaScript, ReactJS, Redux, NodeJS, API's, PostgreSQL.`,
            liveLink : 'https://inventory-management-system-seven.vercel.app/',
            codeLink : 'https://github.com/OnlineElite/Inventory_Management_System'
        },
        {
            image : proj6,
            title : 'TechWave | Online Store with admin dashboard',
            description : `An online store where you can filter products by category and brands, add to cart, add to favories 
                        and showing products details, with admin dashbord that shows, edite, update and delete product, users, brands and categories.`,
            techUsed :  `HTML5, CSS3, Bootstrap, JavaScript, ReactJS, Redux, NodeJS, API's, PostgreSQL.`,
            liveLink : 'https://inventory-management-system-seven.vercel.app/',
            codeLink : 'https://github.com/OnlineElite/Inventory_Management_System'
        }
    ]

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
                            <p className='title'> {proj.title} </p>
                            <hr/>
                            <div className='desc'> {proj.description} </div>
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
                ))}

               {/* <div className='row'>
                    <div className=' col-md-4 col-sm-12'>
                        <div className='card'>
                            <div className='cart_head'>
                                <img src= {proj1} alt='project'/>
                            </div>
                            <div className='cart_body'>
                               <p className='title'>Project Title</p>
                               <hr/>
                               <p>project description</p>
                               <p><span>Tech used:</span>
                                HTML5, CSS3, Javascript,...
                               </p>
                                <div className='buttons'>
                                    <button className='btn live'>See Live</button>
                                    <button className='btn'>Source Code</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' col-md-4 col-sm-12'>
                        <div className='card'>
                            <div className='cart_head'>
                                <img src= {proj2} alt='project'/>
                            </div>
                            <div className='cart_body'>
                               <p className='title'>Project Title</p>
                               <hr/>
                               <p>project description</p>
                               <p><span>Tech used:</span>
                                HTML5, CSS3, Javascript,...
                               </p>
                                <div className='buttons'>
                                    <button className='btn live'>See Live</button>
                                    <button className='btn'>Source Code</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' col-md-4 col-sm-12'>
                        <div className='card'>
                            <div className='cart_head'>
                                <img src= {proj3} alt='project'/>
                            </div>
                            <div className='cart_body'>
                               <p className='title'>Project Title</p>
                               <hr/>
                               <p>project description</p>
                               <p><span>Tech used:</span>
                                HTML5, CSS3, Javascript,...
                               </p>
                                <div className='buttons'>
                                    <button className='btn live'>See Live</button>
                                    <button className='btn'>Source Code</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className=' col-md-4 col-sm-12'>
                        <div className='card'>
                            <div className='cart_head'>
                                <img src= {proj4} alt='project'/>
                            </div>
                            <div className='cart_body'>
                               <p className='title'>Project Title</p>
                               <hr/>
                               <p>project description</p>
                               <p><span>Tech used:</span>
                                HTML5, CSS3, Javascript,...
                               </p>
                                <div className='buttons'>
                                    <button className='btn live'>See Live</button>
                                    <button className='btn'>Source Code</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' col-md-4 col-sm-12'>
                        <div className='card'>
                            <div className='cart_head'>
                                <img src= {proj5} alt='project'/>
                            </div>
                            <div className='cart_body'>
                               <p className='title'>Project Title</p>
                               <hr/>
                               <p>project description</p>
                               <p><span>Tech used:</span>
                                HTML5, CSS3, Javascript,...
                               </p>
                                <div className='buttons'>
                                    <button className='btn live'>See Live</button>
                                    <button className='btn'>Source Code</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' col-md-4 col-sm-12'>
                        <div className='card'>
                            <div className='cart_head'>
                                <img src= {proj6} alt='project'/>
                            </div>
                            <div className='cart_body'>
                               <p className='title'>Project Title</p>
                               <hr/>
                               <p>project description</p>
                               <p><span>Tech used:</span>
                                HTML5, CSS3, Javascript,...
                               </p>
                                <div className='buttons'>
                                    <button className='btn live'>See Live</button>
                                    <button className='btn'>Source Code</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>*/}
            </div>
        </div>
    )
}

export default Projects;