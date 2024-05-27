import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../Styles/Experiences.css'
function Experiences(){


    return(
        <div id="Experiences">
            <div className="contitle">
                <div className="title"><FontAwesomeIcon className='icons' icon="fa-solid fa-briefcase"/> <h3>PROFESSIONAL EXPERIENCES</h3></div>
                <div className="arrow-left"></div>
            </div>
            <div className="content">
                <div className="formations">
                    <div className="formadate">
                        <p><FontAwesomeIcon className='icons' icon="fa-solid fa-calendar-days"/> Sep. 2019 to Feb. 2020: </p>
                    </div>
                    <div className="formacontenet">
                        <p>Work within the printing company Book Manufacturer (IFL) in Casablanca.</p>
                        <span><FontAwesomeIcon className='icons' icon="fa-solid fa-circle"/> Warehouse operator.</span>
                    </div>
                </div>
                <div className="formations">
                    <div className="formadate">
                        <p><FontAwesomeIcon className='icons' icon="fa-solid fa-calendar-days"/> Feb. 2020 to Feb. 2024 : </p>
                    </div>
                    <div className="formacontenet">
                        <p>Work within the company Counter of Motor Parts and Accessories (COPIMA) in Casablanca.</p>
                        <div className="spans">
                            <span><FontAwesomeIcon className='icons' icon="fa-solid fa-circle"/> Billing Agent.</span>
                            <span><FontAwesomeIcon className='icons' icon="fa-solid fa-circle"/> Responsible for processing returns.</span>
                            <span><FontAwesomeIcon className='icons' icon="fa-solid fa-circle"/> Responsible for inventory control.</span>
                        </div>
                    </div>
                </div>
                <div className="formations">
                    <div className="formadate">
                        <p><FontAwesomeIcon className='icons' icon="fa-solid fa-calendar-days"/> Feb. 2024 until now : </p>
                    </div>
                    <div className="formacontenet">
                        <p>Work within the company Counter of Motor Parts and Accessories (COPIMA) in Casablanca.</p>
                        <div className="spans">
                            <span><FontAwesomeIcon className='icons' icon="fa-solid fa-circle"/> Product Owner.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experiences; 