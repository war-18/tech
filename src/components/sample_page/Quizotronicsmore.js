import React from 'react'
import "./sample.css"
import hawkmore_img from "./quizotronics_img.svg"
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
            Quizotronics is an Event in which teams will have a multi-round rivalry among them. The Craziest event that gets you a Perfect Tour of Core Electronics. Take a Deep dive into a series of interesting Rounds, and Win Exciting Prizes with many more Surprises!
NOT from E&TC??? Don’t worry !!! We have designed the Event for ALL Departments. So Put on your 'Thinking Caps' and See you there!
            </p>
          </div>
        <div>
          <div className='container about0'>
              <span  style={{"color":"FDC32D"}}>TEAM SIZE : </span>
              <span className='notbold' style={{"color":"white"}}>Trio</span>
          </div>
          <div className='container about1'>
              <span style={{"color":"FDC32D"}}>FEES : </span>
              <span className='notbold' style={{"color":"white"}}>150/- Per Team</span>
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
                <span style={{"color":"white"}}>1st </span><span style={{"color": "#FF037D"}}> Rs 2000/-</span>
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
            Round 1... Guess the elements from the mystery box with Blindfolded Eyes.
            </li>
            <li>
            Round 2... Crack out the funniest Ever  Technical  Riddle .</li>
            <li>
            Round 3... Finale Quiz  Round to end the Rivalry!</li>
            
          </ul>
        </div>
        <div className='generalrules'>
          <h3 className='generalrulesheading'>
            GENERAL RULES : 
          </h3>
          <ul className='structureul' >
            <li>
            Eyes will be Blindfolded .
            </li>
            <li>
            Only one Hand touch to Components is Allowed.
            </li>
            <li>
            Total Time for the Round will be 20seconds. 
            </li>
            <li>
            Five riddles  in all will be asked by the host.
            </li>
            <li>
            Riddles (question) will not be repeated.  
            </li>
            <li>
            If tie ..there will be a tie breaker for the same.
            </li>
            <li>
            Each team has it's quota of 4 questions and other questions passed to it from previous teams.
            </li>
          </ul>
        </div>
        <div className='container contact' style={{"color" : "yellow"}}>
          <div className='container about0'>
                <span style={{"color":"FDC32D"}}> CONTACT : </span>
                <span>
                <h6 className=' deskcont' style={{"color":"white"}}>Atharva kale : 9325823736</h6>
                </span>
            </div>
        </div>
        <br></br><br></br><br></br>
        </div>
    </>
    
  )
}

export default Sample