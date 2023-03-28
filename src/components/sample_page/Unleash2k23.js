import React from 'react'
import "./sample.css"
import unleashmore_img from "./cadmore_img.svg"
import register_now from "./register_now.svg"
function Sample() {
  return (
    <>
    <div className='container upperimage'>
        <img className='topimg' src ={unleashmore_img} alt=""/>
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
            Technofire is a quiz event in which we will test your technical knowledge, team spirit, and coordination. Technofire is a type of quiz that focuses on testing knowledge and understanding of technical subjects, such as science, technology, and engineering fields. It includes questions related to concepts, theories, and problem-solving techniques.
         </p>
          </div>
        <div>
          <div className='container about0'>
              <span  style={{"color":"FDC32D"}}>TEAM SIZE : </span>
              <span className='notbold' style={{"color":"white"}}>Duo</span>
          </div>
          <div className='container about1'>
              <span style={{"color":"FDC32D"}}>FEES : </span>
              <span className='notbold' style={{"color":"white"}}>50/- Per Person</span>
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
          There will be 2 rounds
            </li>
            <li>
           1.  In this event some common questions will be ask to you, correct answer will be select for next round, wrong answer will be eliminate in these round.  </li>
            <li>
            2. In this round some question will ask commonly if any one know the answer, then you have to press the buzzer, chance for answering the question will be 1st press-1st serve. 
             </li>
          </ul>
        </div>
        <div className='generalrules'>
          <h3 className='generalrulesheading'>
            GENERAL RULES : 
          </h3>
          <ul className='structureul' >
            <li>
            Event opens for all engineering branches.
            </li> 
            <li>
            Entry fees: 50rs only for each person. 
            </li> 
            <li>
            There will be 2 rounds i.e. Elimination round and the Buzzer round Initially, Teams will be tested in the first round (elimination round) and then, they will be qualified towards the Final round i.e. Buzzer round. 
            </li> 
            <li>
            In Elimination round you have to submit your answer in registered group no need to give answer separately. 
            </li> 
            <li>
            In Buzzer round, the team that presses the buzzer first gets a chance to answer it. 6. If a team answers right they get 10 points.
            </li> 
            <li>
            If a team doesn’t answer or gives a wrong answer after they press buzzer they also lose 5 points. 
            </li> 
            <li>
            Cheating not allowed. 
            </li> 
            <li>
            No use of any device like mobile for searching
            </li>  
            <li>
            The teams having highest marks at the end will be declared as winners. 
            </li> 
            <li>
            In case of a tie after the Buzzer round, the tied teams get into again a buzzer round. Rules are similar of buzzer round; if a team answers right they get 10 points. If they answer wrong they get minus 5 points.
            </li> 
          </ul>
        </div>
        <div className='container contact' style={{"color" : "yellow"}}>
          <div className='container about0'>
                <span style={{"color":"FDC32D"}}> CONTACT : </span>
                <span>
                <h6 className=' deskcont' style={{"color":"white"}}>Snehal Kukre : 7038008134</h6>
                </span>
            </div>
        </div>
        <br></br><br></br><br></br>
        </div>
    </>
    
  )
}

export default Sample