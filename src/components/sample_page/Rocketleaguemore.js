import React from 'react'
import "./sample.css"
import rocketmore_img from "./rocketmore_img.svg"
import register_now from "./register_now.svg"
function Sample() {
  return (
    <>
    <div className='container upperimage'>
        <img className='topimg' src ={rocketmore_img} alt=""/>
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
            Rocket League is not only a sport but also a field of research that aims to advance robotics technology. The objective of Rocket League is to score more goals than the opposing team by getting a ball into their opponent's goal post. The game is played on a specially designed field that is usually smaller than a traditional soccer field. The playing surface can be either indoor or outdoor, depending on the tournament rules. There is one round of 7 minutes. In that, the team which can hit more goals than the other team will win the Rocket League.
         </p>
          </div>
        <div>
          <div className='container about0'>
              <span  style={{"color":"FDC32D"}}>TEAM SIZE : </span>
              <span className='notbold' style={{"color":"white"}}>Quad</span>
          </div>
          <div className='container about1'>
              <span style={{"color":"FDC32D"}}>FEES : </span>
              <span className='notbold' style={{"color":"white"}}>400/- Per Group</span>
          </div>
          <div className='container about2'>
              <span style={{"color":"FDC32D"}}>TIME DURATION : </span>
              <span className='notbold' style={{"color":"white"}}> -- </span>
          </div>
          <div className='container about3'>
              <span style={{"color":"FDC32D"}}>VENUE : </span>
              <span className='notbold' style={{"color":"white"}}>Open Gym, PCCOER</span>
          </div>
          <div className='container about4'>
              <span style={{"color":"FDC32D"}}>PRIZES : </span>
              <span className='notbold'>
                <span style={{"color":"white"}}>1st </span><span style={{"color": "#FF037D"}}> Rs 2000/-</span>
              </span>
              <h6 className='prizeh'>
                <h6 className='notbold prizeh'>
                  <span style={{"color":"white"}}>2nd </span><span style={{"color": "#FF037D"}}> Rs 1200/-</span>
                </h6>
                <h6 className='notbold prizeh'>
                  <span style={{"color":"white"}}>3rd </span><span style={{"color": "#FF037D"}}> Rs 800/-</span>
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
            7 MIN time will be given for each match .
            </li>
            <li>
            Cars will be allotted by soccer club or you can bring your own also   
            </li>
            <li>
            4 members required in each team 4. Only college students are allowed to participate.
            </li>
            <li>
            50 percent of amount will be retrieved from team in case of damage to car .
            </li>
            <li>
            If team will not present at given time then no refund will be given .
            </li>
            <li>
            Rules of the game will be disclose at the time of competition .
            </li>
            <li>
            In case of any misbehavior team will be disqualified .
            </li>
            <li>
            Spot entries will be accepted only by online mode.
            </li>
            <li>
            Only 1 player is allowed in the D area of the defending team.
            </li>
            <li>
            No hand touch of any team member is allowed to the car while the game is going on.
            </li>
            <li>
            In the case of a car flipped only with the help of Partner's car you can flip back your car. 
            </li>
            <li>
            If the ball gets out of the Ground, the ball will be given to the opponent team to start at that time.
            </li>
            <li>
            In the case of a draw an extra 2 minutes will be given.
            </li>
            <li>
            At least one player car should be on their half side
            </li>
          </ul>
        </div>
        <div className='generalrules'>
          <h3 className='generalrulesheading'>
            GENERAL RULES : 
          </h3>
          <ul className='structureul' >
            <li>
            The game is played on a specially designed field that is usually smaller than a traditional soccer field. 
            </li>
            <li>
            There is one round of 7 minutes. In that, the team which can hit more goals than the other team will win the Robo Soccer .
            </li>
          </ul>
        </div>
        <div className='container contact' style={{"color" : "yellow"}}>
          <div className='container about0'>
                <span style={{"color":"FDC32D"}}> CONTACT : </span>
                <span>
                <h6 className=' deskcont' style={{"color":"white"}}>Om Umbare : 9665959705</h6>
                <h6 className='notbold deskcont' style={{"color" : "white"}}>Amar Shende : 7620241342</h6>
                </span>
            </div>
        </div>
        <br></br><br></br><br></br>
        </div>
    </>
    
  )
}

export default Sample