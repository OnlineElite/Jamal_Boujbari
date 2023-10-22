import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../Styles/Freetime.css'
function Freetime(){
    const freeTimeTasks = [
        {name : 'Internet browsing' , percent : 15},
        {name : 'Programming' , percent : 50},
        {name : 'Travel' , percent : 15},
        {name : 'Sports' , percent : 20}
    ]
    
    useEffect(()=>{
        const numbers = document.getElementsByClassName('number')
        const taskNames = document.getElementsByClassName('taskName')
        
        freeTimeTasks.forEach((val) => {
            for(let num of numbers){
                for(let task of taskNames){
                    console.log(task.getAttribute('name'))
                    if(num.getAttribute('name') === task.getAttribute('name') & num.getAttribute('name') === val.name){
                        console.log(`numid ${num.getAttribute('name')} taskid ${task.getAttribute('name')}`)
                        let counter = 0;
                        setInterval(() =>{
                            if(counter === val.percent){
                                clearInterval()
                            }else{
                                counter += 1;
                                num.textContent = counter + "%";
                            }
                        }, 40)
                        task.textContent = val.name;
                    }
                    else{
                        continue;
                    }
                }
            }
        })
    }, [])

    return(
        <div id="freeTime">
            <div className="contitle">
                <div className="title"><FontAwesomeIcon className='icons' icon="fa-solid fa-clock"/><h3>FREE TIME</h3></div>
                <div className="arrow-left"></div>
            </div>
            <div id="freetimecontent">
                <div className="cart">
                    <div className="tasks">
                        <div className="outer">
                            <div className="inner">
                                <div name="Internet browsing" className="number">
                                </div>
                            </div>
                        </div>
                        <svg className="svg" xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                            <defs>
                                <linearGradient id="Internet">
                                    <stop offset="0%" stop-color="green" />
                                    <stop offset="100%" stop-color="lightgreen" />
                                </linearGradient>
                            </defs>
                            <circle className="circle Internet" cx="80" cy="80" r="70" stroke-linecap="round" />
                        </svg>
                    </div>
                    <div className="taskName" name="Internet browsing"></div>
                </div>
                <div className="cart">
                    <div className="tasks">
                        <div className="outer">
                            <div className="inner">
                                <div name="Programming" className="number">
                                </div>
                            </div>
                        </div>
                        <svg className="svg" xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                            <defs>
                                <linearGradient id="Programming">
                                    <stop offset="0%" stop-color="blue" />
                                    <stop offset="100%" stop-color="#b3c9fb" />
                                </linearGradient>
                            </defs>
                            <circle className="circle Programming" cx="80" cy="80" r="70" stroke-linecap="round" />
                        </svg>
                    </div> 
                    <div className="taskName" name="Programming"></div>
                </div>
                <div className="cart">
                    <div className="tasks">
                        <div className="outer">
                            <div className="inner">
                                <div name="Travel" className="number">
                                </div>
                            </div>
                        </div>
                        <svg className="svg" xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                            <defs>
                                <linearGradient id="Travel">
                                    <stop offset="0%" stop-color="orange" />
                                    <stop offset="100%" stop-color="lightsalmon" />
                                </linearGradient>
                            </defs>
                            <circle className="circle Travel" cx="80" cy="80" r="70" stroke-linecap="round" />
                        </svg>
                    </div> 
                    <div className="taskName" name="Travel"></div>
                </div>
                <div className="cart">
                    <div className="tasks">
                        <div className="outer">
                            <div className="inner">
                                <div name="Sports" className="number">
                                </div>
                            </div>
                        </div>
                        <svg className="svg" xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                            <defs>
                                <linearGradient id="Sports">
                                    <stop offset="0%" stop-color="purple" />
                                    <stop offset="100%" stop-color=" lightpink" />
                                </linearGradient>
                            </defs>
                            <circle className="circle Sports" cx="80" cy="80" r="70" stroke-linecap="round" />
                        </svg>
                    </div>
                    <div className="taskName" name="Sports"></div>
                </div>
            </div>
        </div>
    )
}

export default Freetime;