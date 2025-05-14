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
                        <span className="text-secondary pt-2">Full Stack Web Developer</span>
                    </div>
                    <div className="case2 col-md-8 col-sm-12">
                        <h3>Jamal Boujbari</h3>
                        <p>Is a dedicated Full Stack Web Developer and Product Owner based in Casablanca. With a strong foundation in 
                            both technology and business strategy, he specializes in building high-performance web applications using JavaScript, React, 
                            and PostgreSQL. His mission is to leverage innovative technologies to address real-world challenges while bridging the gap 
                            between technical teams and business stakeholders.<br/>

                            Passionate about continuous learning and digital innovation, Jamal is committed to contributing to impactful software solutions 
                            that enhance user experience and support organizational success. As an agile professional, he actively develops his skills in 
                            product management and full stack development, while also mentoring emerging talent in the tech space.<br/>

                            With over two years of experience managing product backlogs, prioritizing user stories, and leading internal digital transformation 
                            initiatives, Jamal has played a key role in delivering scalable mobile and web applications aligned with strategic goals.<br/>

                            Before entering the tech world, Jamal earned a Bachelor’s degree in Physical Sciences from Cadi Ayyad University, which laid 
                            the groundwork for his analytical mindset and problem-solving abilities.<br/>

                            As he continues to evolve in his dual role as a developer and product owner, Jamal remains focused on building value-driven 
                            solutions and contributing to Morocco’s growing technology ecosystem.
                        </p>
                    </div>      
                </div>
            </div>
        </div>
    
    )
}

export default About;