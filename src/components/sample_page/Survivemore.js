import React from 'react'
import "./sample.css"
import hawkmore_img from "./survive_img.svg"
import register_now from "./register_now.svg"
function Sample() {
  return (
    <>
    <div className='container upperimage'>
        <img className='topimg' src ={hawkmore_img} alt=""/>
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
            Survive the Fall is a physics-based challenge where the player must drop an egg from a height without it breaking. The game involves a platform or structure that the player adjusts to achieve a successful drop. As the levels progress, the structures become more complex, making the game more challenging.
            </p>
          </div>
        <div>
          <div className='container about0'>
              <span  style={{"color":"FDC32D"}}>TEAM SIZE : </span>
              <span className='notbold' style={{"color":"white"}}>Trio</span>
          </div>
          <div className='container about1'>
              <span style={{"color":"FDC32D"}}>FEES : </span>
              <span className='notbold' style={{"color":"white"}}>90/- Per Team</span>
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
                <span style={{"color":"white"}}>1st </span><span style={{"color": "#FF037D"}}> Rs 2500/-</span>
              </span>
              <h6 className='prizeh'>
                <h6 className='notbold prizeh'>
                  <span style={{"color":"white"}}>2nd </span><span style={{"color": "#FF037D"}}> Rs 1000/-</span>
                </h6>
                <h6 className='notbold prizeh'>
                  <span style={{"color":"white"}}>3rd </span><span style={{"color": "#FF037D"}}> Rs 500/-</span>
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
            Task is to ensure egg doesn't Break.
            </li>
            <li>
            1st round - Dropping the egg from low height onto a simple platform.</li>
            <li>
            2nd round - Dropping egg from higher height on complex platform.            </li>
            <li>
            3rd round- The difficulty level is increased to its maximum potential. </li>
          </ul>
        </div>
        <div className='generalrules'>
          <h3 className='generalrulesheading'>
            GENERAL RULES : 
          </h3>
          <ul className='structureul' >
            <li>
            Participants have to make a structure to achieve a particular goal.      </li>
            <li>
            Only 3 members per Team is allowed.   </li>
            <li>
            Material for making the structure will be provided by organizers.    </li>
            <li>
            Team will have 5 min to come up with a strategy and 25 min will be allotted to make your structure. </li>
            <li>
            Only one member will be allowed to collect the material for each team.
            </li>
            <li>
            Participants should use objects that are provided by the organizers.
            </li>
            <li>
            Use of foreign material is prohibited.
            </li>
            <li>
            Taking help from players other than teammates is prohibited. 
            </li>
            <li>
            Coordinators and judge decision is considered final decision.
            </li>
            <li>
            Misbehavior with coordinates and judge will lead to disqualification
            </li>
            <li>
            Any team fails to follow this rules will lead to disqualification. 
            </li>
          </ul>
        </div>
        <div className='container contact' style={{"color" : "yellow"}}>
          <div className='container about0'>
                <span style={{"color":"FDC32D"}}> CONTACT : </span>
                <span>
                <h6 className=' deskcont' style={{"color":"white"}}>Tanmay Sangalgikar : 9765089383</h6>
                </span>
            </div>
        </div>
        <br></br><br></br><br></br>
        </div>
    </>
    
  )
}

export default Sample