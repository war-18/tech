import React from 'react'
import "./sample.css"
import rocketmore_img from "./cadmore_img.svg"
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
            The game is played on a specially designed
field that is usually smaller than a traditional soccer field.
There is one round of 7 minutes. In that, the
team which can hit more goals than the other team will win the
Robo Soccer .
         </p>
          </div>
        <div>
          <div className='container about0'>
              <span  style={{"color":"FDC32D"}}>TEAM SIZE : </span>
              <span className='notbold' style={{"color":"white"}}>Duet</span>
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
          The Competition will consist of 2
            </li>
            <li>
            1.Minor Group : This group will consist of First and Second year students Competition will have Eliminator round followed by final round.   
            </li>
            <li>
            2.Major Group : This group will consist of Third Year and Fourth Year students Competition will have Eliminator round followed by final round. 
             </li>
            <li>
            Groups of two should be made for the competition. In first round, a product will be given on the spot for the students to design and perform a basic analysis on it.
            </li>
            <li>
            Top 6 groups amongst all participants will be selected during this round, based on the time taken to design the product.
            </li>
            <li>
            The second round will be a verbal pitch.
            </li>
            <li>
            All the groups will be placed against one of their competitors for the verbal pitch delivery. All have to prove why their product is better than their competitor. This round will be totally dependent on your presence of mind, knowledge about the software and oratory skills. 
            </li>
            <li>
            The final result will be based on your prepared CAD and Pitch for the same   
            </li>
            <li>
            Top 3 teams (groups) will be receiving Cash Prizes.
              </li>
          </ul>
        </div>
        <div className='generalrules'>
          <h3 className='generalrulesheading'>
            GENERAL RULES : 
          </h3>
          <ul className='structureul' >
            <li>
            The group should consist of only 2 members. 
            </li>
            <li>
            All are suggested to carry their own laptop with CAD and Analysis Software of your choice 
              </li>
            <li>
            Maximum time limit for 1st round will be 45 Minutes 
            </li>
            <li>
            The first 6 teams (groups) to finish their designing will move to the second round.
            </li>
            <li>
            Time Limit for 2nd round will be 15 minutes.
            </li>
            <li>
            Use of mobile phones during competition is prohibited.
            </li>
            <li>
            Any type of cheating will not be tolerated.
            </li>
          </ul>
        </div>
        <div className='container contact' style={{"color" : "yellow"}}>
          <div className='container about0'>
                <span style={{"color":"FDC32D"}}> CONTACT : </span>
                <span>
                <h6 className=' deskcont' style={{"color":"white"}}>Yash Gaikwad : 8237646243</h6>
                <h6 className='notbold deskcont' style={{"color" : "white"}}>Siddhant Yadav : 9022226081</h6>
                </span>
            </div>
        </div>
        <br></br><br></br><br></br>
        </div>
    </>
    
  )
}

export default Sample