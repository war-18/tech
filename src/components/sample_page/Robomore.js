import React from 'react'
import "./sample.css"
import roboracemore_img from "./roboracemore_img.svg"
import register_now from "./register_now.svg"
function Sample() {
  return (
    <>
    <div className='container upperimage'>
        <img className='topimg' src ={roboracemore_img} alt=""/>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSerIyE5aauF6nL7q4mxY0ErEJv8GxrhLiuoYIPKISeto2TkDA/viewform">
        <img className='registernowbutton' src ={register_now} alt=""/>
      </a>
    </div>
      <div className="dashed-line">
      </div>
      {/* <div></div> */}
      <div className='containerleft'>
        <div className='container'>
          <h3 className='about0'>
            ABOUT : 
          </h3>
          </div>
          <br></br>
          <div className='pcontainer'>
            <p className='hawkpara'>
            The Technovate 2023 RoboRace will push all limits, combining the best RC ATV and ultimate operator challenges. Watch the competitors race offroad RC vehicles in spectacular courses across all dimensions. As our most significant season yet, the most skilled, well-developed, and efficient will aim to dominate the race of 2 laps through iconic obstacles offroad arena to be crowned the Technovate 2k23 RoboRace Champion.
            </p>
          </div>
        <div>
          <div className='container about0'>
              <span  style={{"color":"FDC32D"}}>TEAM SIZE : </span>
              <span className='notbold' style={{"color":"white"}}>Solo</span>
          </div>
          <div className='container about1'>
              <span style={{"color":"FDC32D"}}>FEES : </span>
              <span className='notbold' style={{"color":"white"}}>100/- Per Person</span>
          </div>
          <div className='container about2'>
              <span style={{"color":"FDC32D"}}>TIME DURATION : </span>
              <span className='notbold' style={{"color":"white"}}> -- </span>
          </div>
          <div className='container about3'>
              <span style={{"color":"FDC32D"}}>VENUE : </span>
              <span className='notbold' style={{"color":"white"}}>PCCOER Campus</span>
          </div>
          <div className='container about4'>
              <span style={{"color":"FDC32D"}}>PRIZES : </span>
              <span className='notbold'>
                <span style={{"color":"white"}}>1st </span><span style={{"color": "#FF037D"}}> Rs 5000/-</span>
              </span>
              <h6 className='prizeh'>
                <h6 className='notbold prizeh'>
                  <span style={{"color":"white"}}>2nd </span><span style={{"color": "#FF037D"}}> Rs 3000/-</span>
                </h6>
                <h6 className='notbold prizeh'>
                  <span style={{"color":"white"}}>3rd </span><span style={{"color": "#FF037D"}}> Rs 1000/-</span>
                </h6>
              </h6>
              
          </div>
          <br></br><br></br><br></br>
        </div> 
        <div>
        <h3 className='structure'>
          STRUCTURE : 
        </h3>
          <ul className='structureul' >
            <li>
            The operator has to pass their RC within less duration through obstacles.
            </li>
            <li>
            The team who completes 5 laps of the track in minimum time duration will be declared as the winner of RoboRace and will be rewarded with prize money.
            </li>
          </ul>
        </div>
        <div className='generalrules'>
          <h3 className='generalrulesheading'>
            GENERAL RULES : 
          </h3>
          <ul className='structureul' >
            <li>
            Teams should make their RC according to rules mentioned below.
            </li>
            <li>
            RC ATV Specs:    
              <ol className='abcde' style={{"listStyleType": "lower-alpha"}} >
                <li>
                Length: 300mm   
                </li>
                <li>
                Width: 300mm
                </li>
                <li>
                There are no such restrictions for height of your RC.
                </li>
              </ol>
            </li>
            <li>
            Teams can build wired or wireless RC.
            </li>
            <li>
            Teams will have to carry a minimum of 2 batteries.
            </li>
            <li>
            Teams will carry their own battery chargers, charging points
            </li>
            <li>
            Any inappropriate behavior by the pilot towards the volunteers/organizers/other pilots will lead to immediate disqualification from the event. 
            </li>
            <li>
                Students should refrain from abusive language, obscene displays during the competitions, if one fails to do so they will be disqualified.
            </li>
          </ul>
        </div>
        <div className='container contact' style={{"color" : "yellow"}}>
          <div className='container about0'>
                <span style={{"color":"FDC32D"}}> CONTACT : </span>
                <span>
                <h6 className=' deskcont' style={{"color":"white"}}>Saras Watekar : 7796807249</h6>
                <h6 className='notbold deskcont' style={{"color" : "white"}}>Siddhant Yadav : 90222226081</h6>
                </span>
            </div>
        </div>
        <br></br><br></br><br></br>
        </div>
    </>
    
  )
}

export default Sample