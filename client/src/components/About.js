import React from 'react'
import phot from '../images/img5.png'
import '../Styles/About.css'
function About(){

    return(
        <div className="artecle " id="about">
            <h2 className=" text-center">About me</h2>
            <div className="container">
                <div className="row">
                    <div className="case1 col-md-4 col-sm-12">
                        <div className="circle"><img src= {phot} alt="none"/></div>
                        <span className="text-secondary">Full Stack Developer</span>
                    </div>
                    <div className="case2 col-md-8 col-sm-12">
                        <h3>Jamal Boujbari</h3>
                        <p>I am a Full Stack Developer with passion for building beautiful and 
                            user-freindly websites. I have a strong understanding of both fron-end 
                            and back-end development, and I am excited to put my skills to use in a 
                            professional setting. I am a quick learner and a team player, and I am 
                            confident that I can be a valuable assest to any web developement team.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    
    )
}

export default About;