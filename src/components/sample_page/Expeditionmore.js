import React from 'react'
import "./sample.css"
import hawkmore_img from "./expentition_img.svg"
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
            Hunting for treasure with help of clues has always been exciting and adventurous. So to break the boredom of part-takers and cheer up them by giving them a break, comes an event organized by Civil Department known as 'Expedition Hunt'. A Hunt that takes participants on a cryptic and interactive journey into secret nooks of the department.
            </p>
          </div>
        <div>
          <div className='container about0'>
              <span  style={{"color":"FDC32D"}}>TEAM SIZE : </span>
              <span className='notbold' style={{"color":"white"}}>Trio</span>
          </div>
          <div className='container about1'>
              <span style={{"color":"FDC32D"}}>FEES : </span>
              <span className='notbold' style={{"color":"white"}}>150/- Per Group</span>
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
                <span style={{"color":"white"}}>1st </span><span style={{"color": "#FF037D"}}> Rs 3500/-</span>
              </span>
              <h6 className='prizeh'>
                <h6 className='notbold prizeh'>
                  <span style={{"color":"white"}}>2nd </span><span style={{"color": "#FF037D"}}> Rs 2500/-</span>
                </h6>
                <h6 className='notbold prizeh'>
                  <span style={{"color":"white"}}>3rd </span><span style={{"color": "#FF037D"}}> Rs 1500/-</span>
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
            There Will be two Stages/Rounds.
            </li>
            <li>
            Stage-1 : It is the Screening Round in which your team will go through some Fun/Memory Games in which your teamwork is observed. </li>
            <li>
            Stage-2 : Top 5 Teams will then go to next Stage/ Round , which is  Treasure  Hunt, Consists of clues , each one leading to next clue. </li>
            <li>
            Top 3 teams those who hunts the Treasure will be receiving Cash Prizes. </li>
          </ul>
        </div>
        <div className='generalrules'>
          <h3 className='generalrulesheading'>
            GENERAL RULES : 
          </h3>
          <ul className='structureul' >
            <li>
            The group have to participate in round one namely Screening round with fun twist.
            </li>
            <li>
            Any misbehavior of participant with coordinator will lead to disqualification of entire team. 
            </li>
            <li>
            No cheating will be accepted.
            </li>
            <li>
            After first round of Screening, Top scorer groups will compete with each other for hunting treasure.
            </li>
          </ul>
        </div>
        <div className='container contact' style={{"color" : "yellow"}}>
          <div className='container about0'>
                <span style={{"color":"FDC32D"}}> CONTACT : </span>
                <span>
                <h6 className=' deskcont' style={{"color":"white"}}>Sujit patil : 9373343560</h6>
                <h6 className=' deskcont' style={{"color":"white"}}>Abhishek Taware : 9922974631</h6>
                </span>
            </div>
        </div>
        <br></br><br></br><br></br>
        </div>
    </>
    
  )
}

export default Sample