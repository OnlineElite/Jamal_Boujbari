import React from 'react'
import Sidebar from './Sidebar'
import Content from './Content'
import '../Styles/Summary.css'
import CV_English from '../images/CV_English.pdf'
import CV_French from '../images/CV_French.pdf'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Summary(){

    return(
        <div id='summary'>
            <div className='leftSide'>
                <a className='' href='/'>
                    <FontAwesomeIcon className='icons' icon="fa-regular fa-circle-left" />
                </a>
                <span className='my-2 px-0 mx-0'>   
                    <FontAwesomeIcon className='icons'data-bs-toggle="modal" data-bs-target="#jamalCv" icon="fa-solid fa-download" />
                </span>
            </div>
            <div className='container '>
                <div className='row'>
                    <div id="sidebar" className="col-md-3 col-lg-3 col-sm-12">
                        <Sidebar/>
                    </div>
                    <div id="main" className="col-md-9 col-lg-9 col-sm-12">
                        <Content/>
                    </div>
                </div>
            </div>
            {/*-- Modal --*/}
            <div className=" jamalCvModal modal fade" id="jamalCv" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-sm">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5 text-white" id="exampleModalLabel">Choose cv language</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body ">
                            <Link to={CV_English}
                                download="Jamal_Boujbari_CV_English"
                                target="_blank"
                                rel="noreferrer"
                            >
                            <button className='btn btn-primary mx-2'> In English</button>
                            </Link>
                            <Link to={CV_French}
                                download="Jamal_Boujbari_CV_French"
                                target="_blank"
                                rel="noreferrer"
                            >
                            <button className='btn  text-white' style={{backgroundColor : '#01ad01'}}> In French </button>
                            </Link>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger text-white" data-bs-dismiss="modal">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Summary;