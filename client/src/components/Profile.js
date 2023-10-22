import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../Styles/Profile.css'
function Profile(){

    return(
        <div id='profile'>
            <div className="head">
                <div className="fullname">
                    <h1 data-text="JAMALBOUJBARI">JAMALBOUJBARI</h1>
                </div>
                <div className="icon">
                    <a href="https://github.com/OnlineElite" target="_blank" rel='noreferrer'>
                        <FontAwesomeIcon className='icons' icon="fa-brands fa-github"/>
                    </a>
                    <a href="https://linkedin.com/in/jamal-boujbari-937121212" target="_blank" rel='noreferrer'>
                        <FontAwesomeIcon className='icons' icon="fa-brands fa-linkedin"/>
                    </a>
                    <a href='https://t.me/JML_Elite' rel="noreferrer" target='_blank'>
                        <FontAwesomeIcon className='icons' icon="fa-brands fa-telegram" />
                    </a>
                </div>
            </div>
            <div id="frofile">
                <div className="contitle">
                    <div className="title"><i className="fa-solid fa-id-card"></i> <h3>PROFIL</h3></div>
                    <div className="arrow-left"></div>
                </div>
                <div className="content">
                    <p>I am a Full Stack Developer with passion for building beautiful and 
                        user-freindly websites. I have a strong understanding of both fron-end 
                        and back-end development, and I am excited to put my skills to use in a 
                        professional setting. I am a quick learner and a team player, and I am 
                        confident that I can be a valuable assest to any web developement team.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Profile;