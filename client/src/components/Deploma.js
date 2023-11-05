import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../Styles/Deploma.css'
function Deploma(){

    return(
        <div id="diploma">
            <div className="contitle">
                <div className="title"><FontAwesomeIcon className='icons' icon="fa-solid fa-graduation-cap"/> <h3>DIPLOMAS AND QUALIFICATIONS</h3></div>
                <div className="arrow-left"></div>
            </div>
            <div className="content">
                <div className="formations">
                    <div className="formadate">
                        <p><FontAwesomeIcon className='icons' icon="fa-solid fa-award"/> Jun 2019: </p>
                    </div>
                    <div className="formacontenet">
                        <p>Bachelor's degree in Physical Materials Sciences, Energy Specialization,
                           from Cadi Ayyad University, Faculty of Sciences Semlalia, Marrakech.
                        </p>
                    </div>
                </div>
                <div className="formations">
                    <div className="formadate">
                        <p><FontAwesomeIcon className='icons' icon="fa-solid fa-award"/> Jun 2018: </p>
                    </div>
                    <div className="formacontenet">
                        <p>General University Studies Diploma in Physical Materials Sciences from
                            Cadi Ayyad University, Faculty of Sciences Semlalia, Marrakech.
                        </p>
                    </div>
                </div>
                <div className="formations">
                    <div className="formadate">
                        <p><FontAwesomeIcon className='icons' icon="fa-solid fa-award"/> Jun 2016: </p>
                    </div>
                    <div className="formacontenet">
                        <p>High school degree in physical sciences, Essaouira.</p>
                    </div>
                </div>
            </div>
            <div id="additionalCertificate">
                <div className="contitle">
                    <div className="title"><FontAwesomeIcon className='icons' icon="fa-solid fa-graduation-cap"/> <h3>ADDITIONAL TRAINING</h3></div>
                    <div className="arrow-left"></div>
                </div>
                <div className="content">
                    <div className="formations">
                        <div className="formadate">
                            <p><FontAwesomeIcon className='icons' icon="fa-solid fa-award"/> Sep 2023: </p>
                        </div>
                        <div className="formacontenet">
                            <p> 
                                Diploma Full Stack Web Developer from Developers Institute, Casablanca.   
                            </p>
                        </div>
                    </div>
                    <div className="formations">
                        <div className="formadate">
                            <p><FontAwesomeIcon className='icons' icon="fa-solid fa-award"/> Apr 2017: </p>
                        </div>
                        <div className="formacontenet">
                            <p>
                                “My Kit for Employment” training as part of the USAID Carier Center program from Cadi Ayyad University,
                                Semlalia Faculty of Sciences, Marrakech.
                            </p>
                        </div>
                    </div>  
                </div>   
            </div>
        </div>
    )
}

export default Deploma;