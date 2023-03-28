import React from 'react'
import "./sample.css"
import hawkmore_img from "./cadmore_img.svg"
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
            Cad Master is an event organized by the Civil Department, that tests various computational skills like problem-solving, imagination, etc of a participant. You have to participate individually in this competition. You can build a perfect plan using the given dimensions.
            </p>
          </div>
        <div>
          <div className='container about0'>
              <span  style={{"color":"FDC32D"}}>TEAM SIZE : </span>
              <span className='notbold' style={{"color":"white"}}>Solo</span>
          </div>
          <div className='container about1'>
              <span style={{"color":"FDC32D"}}>FEES : </span>
              <span className='notbold' style={{"color":"white"}}>60/- Per Drone</span>
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
                <span style={{"color":"white"}}>1st </span><span style={{"color": "#FF037D"}}> Rs 3000/-</span>
              </span>
              <h6 className='prizeh'>
                <h6 className='notbold prizeh'>
                  <span style={{"color":"white"}}>2nd </span><span style={{"color": "#FF037D"}}> Rs 2000/-</span>
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
            Participants will have to participate individually in this competition.
            </li>
            <li>
            Participants will have to participate individually in this competition. Participants will have to draw 2-D line plan according to problem Statement. Problem Statement will be given on the spot to the participants.
             </li>
            <li>
            Given requirements of the problem Statement should be fulfilled by participants in the 2-D plan.
             </li>
            <li>
            Final result will be based on your prepared plan and pitch for the same .
            </li>
          </ul>
        </div>
        <div className='generalrules'>
          <h3 className='generalrulesheading'>
            GENERAL RULES : 
          </h3>
          <ul className='structureul' >
            <li>
            Sample question of Different areas will be given to alternate participant.
            </li>
            <li>
            Each one have to design plan , elevation and section in definite time interval.
            </li>
            <li>
            Plan with proper town planning guidelines and appropriate VastuShastra will be decided as winner by Experts.
            </li>
            <li>
            Different question paper may vary different dimensions,roug pages are provided to the participants.
            </li>
          </ul>
        </div>
        <div className='container contact' style={{"color" : "yellow"}}>
          <div className='container about0'>
                <span style={{"color":"FDC32D"}}> CONTACT : </span>
                <span>
                <h6 className=' deskcont' style={{"color":"white"}}>Shrikant More : 7558587843</h6>
                <h6 className='notbold deskcont' style={{"color" : "white"}}>Vishal Bobhate : 9579041131</h6>
                </span>
            </div>
        </div>
        <br></br><br></br><br></br>
        </div>
    </>
    
  )
}

export default Sample