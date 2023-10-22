import React from 'react'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Profile from './Profile'
import Deploma from './Deploma'
import Experiences from './Experiences'
import Freetime from './Freetime'

function Content(){

    return(
        <div id="main">
            <Profile/>  
            <Deploma/> 
            <Experiences/>
            <Freetime/>
        </div>
    )
}
export default Content;
