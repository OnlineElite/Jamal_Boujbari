import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import jamal from '../images/img7.png'
import '../Styles/Sidebar.css'
function Sidebar(){
    const techSkills = [
        { name : 'HTML5', range : 95 },
        { name : 'CSS3', range : 95 },
        { name : 'Bootstrap', range : 95 },
        { name : 'JavaScript', range : 85 },
        { name : 'ReactJS', range : 52 },
        { name : 'Redux', range : 93 },
        { name : 'NodeJS', range : 49 },
        { name : 'ExpressJS', range : 60 },
        { name : 'PostgreSQL', range : 50 },
        { name : 'Git/GitHub', range : 80}
    ]

    useEffect(()=>{
        techSkills.forEach((val) => {
            const techlang = document.getElementById('techlang')
                const techname = document.createElement('div')
                techname.classList.add('techname')
                    const langNmae = document.createElement('p')
                    langNmae.textContent = val.name;
                techname.appendChild(langNmae)
                    const outer = document.createElement('div')
                    outer.classList.add('outer')
                        const inner = document.createElement('div')
                        inner.classList.add('inner')
                        inner.style.width = val.range+"%";
                    outer.appendChild(inner)
                techname.appendChild(outer)
            techlang.appendChild(techname)
        })
    },[])
    
    return(
        <div id="sidebar">
            <div className="photoCover"><div className="cercle"><img src= {jamal} alt="name"/></div></div>
                <h2>PERSONAL INFORMATION</h2>
                <p className="contact"><FontAwesomeIcon className='icons' icon="fa-solid fa-envelope"/> jamalboujbari@gmail.com</p>
                <p className="contact"><FontAwesomeIcon className='icons' icon="fa-solid fa-phone"/> +212 639 411 280</p>
                <p className="contact"><FontAwesomeIcon className='icons' icon="fa-solid fa-cake-candles"/> 15/10/1997</p>
                <p className="contact"><FontAwesomeIcon className='icons' icon="fa-solid fa-location-dot"/> Casablanca -Morocco</p>
                <p className="contact"><FontAwesomeIcon className='icons' icon="fa-solid fa-ring"/> Single</p>
                <p className="contact"><FontAwesomeIcon className='icons' icon="fa-solid fa-car"/> Driving license type B</p>

                <h2>LANGUAGES</h2>
                <div className="lags">
                    <div className="nameStar">
                        <p>Arabic</p>
                        <p>
                            <FontAwesomeIcon className='icons' icon=" fa-solid fa-star"/>
                            <FontAwesomeIcon className='icons' icon=" fa-solid fa-star"/>
                            <FontAwesomeIcon className='icons' icon=" fa-solid fa-star"/>
                            <FontAwesomeIcon className='icons' icon=" fa-solid fa-star"/>
                            <FontAwesomeIcon className='icons' icon=" fa-solid fa-star"/>
                        </p>
                    </div>
                    <div className="nameStar">
                        <p>Tamazight</p>
                        <p>
                            <FontAwesomeIcon className='icons' icon=" fa-solid fa-star"/>
                            <FontAwesomeIcon className='icons' icon=" fa-solid fa-star"/>
                            <FontAwesomeIcon className='icons' icon=" fa-solid fa-star"/>
                            <FontAwesomeIcon className='icons' icon=" fa-solid fa-star"/>
                            <FontAwesomeIcon className='icons' icon=" fa-solid fa-star"/>
                        </p>
                    </div>
                    <div className="nameStar">
                        <p>French</p>
                        <p>
                            <FontAwesomeIcon className='icons' icon=" fa-solid fa-star"/>
                            <FontAwesomeIcon className='icons' icon=" fa-solid fa-star"/>
                            <FontAwesomeIcon className='icons' icon=" fa-solid fa-star"/>
                        </p>
                    </div>
                    <div className="nameStar">
                        <p>English</p>
                        <p>
                            <FontAwesomeIcon className='icons' icon=" fa-solid fa-star"/>
                            <FontAwesomeIcon className='icons' icon=" fa-solid fa-star"/>
                            <FontAwesomeIcon className='icons' icon=" fa-solid fa-star"/>
                        </p>
                    </div>
                </div>

                <h2>TECH SKILLS</h2>
                <div id="techlang"></div>

                <h2>HOBBIES</h2>
                <div id="hobbies">
                    <p><FontAwesomeIcon className='icons' icon=" fa-solid fa-globe"/> Internet browsing</p>
                    <p><FontAwesomeIcon className='icons' icon=" fa-laptop-code"/> Programming</p>
                    <p><FontAwesomeIcon className='icons' icon=" fa-solid fa-plane"/> Travel</p>
                    <p><FontAwesomeIcon className='icons' icon=" fa-solid fa-person-running"/> Sports</p>
                </div>
        </div>
    )
}

export default Sidebar;