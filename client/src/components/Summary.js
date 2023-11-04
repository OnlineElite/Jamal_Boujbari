import React from 'react'
import Sidebar from './Sidebar'
import Content from './Content'
import '../Styles/Summary.css'
import cv from '../images/cv.pdf'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Summary(){

    return(
        <div id='summary'>
            {/*<div className='leftSide'>
                <a className='' href='/'>
                    <FontAwesomeIcon className='icons' icon="fa-regular fa-circle-left" />
                </a>
                <span className='my-2 px-0 mx-0'>
                    <Link to={cv}
                        download="Jamal_Boujbari_CV"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon className='icons' icon="fa-solid fa-download" />
                    </Link>
                </span>
            </div>*/}
            <div className='containery '>
                <div className='row'>
                    <div id="sidebar" class="col-md-3 col-lg-3 col-sm-12">
                        <Sidebar/>
                    </div>
                    <div id="main" class="col-md-9 col-lg-9 col-sm-12">
                        <Content/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Summary;