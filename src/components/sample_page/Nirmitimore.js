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
            Let's build the bridge model using popsicles and glue. As bridges have a special place in transportation infrastructure due their direct relationship with other places. Participating in the Bridge Building Competition students get a flavor of what it is to be an Engineer, designing structures to a set of specifications and then seeing them perform their function. They are also provided with an academically-oriented extracurricular activity that is recognized school-wide.
            </p>
          </div>
        <div>
          <div className='container about0'>
              <span  style={{"color":"FDC32D"}}>TEAM SIZE : </span>
              <span className='notbold' style={{"color":"white"}}>Trio or Quad</span>
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
            Teams: Participants are organized into teams of a certain size (e.g., 3-4 people per team).
            </li>
            <li>
            Materials: Each team is given a set of materials to build their bridge. The materials can include items like popsicle sticks, glue.</li>
            <li>
            Design Phase: Participants are given a set amount of time to plan and design their bridge.</li>
            <li>
            Building Phase: Once the design phase is over, participants are given a set amount of time to build their bridge using the materials they were given.</li>
            <li>
            Testing Phase: After the building phase, each bridge is tested for its strength and durability. The testing phase can involve placing weights on the bridge to see how much it can hold or subjecting the bridge to other types of stress tests.
            </li>
            <li>
            Judging: Finally, a panel of judges evaluates each bridge based on criteria such as its strength, durability, creativity, and overall appearance. The team with the highest score is declared the winner. 
            </li>
          </ul>
        </div>
        <div className='generalrules'>
          <h3 className='generalrulesheading'>
            GENERAL RULES : 
          </h3>
          <ul className='structureul' >
            <li>
            Number of participants should be 3 or 4 in each team. 
            </li>
            <li>
            Different types of trusses can be used. 
            </li>
            <li>
            The bridge must be only consist of: 
            <ol className='abcde' style={{"listStyleType": "lower-alpha"}} >
                <li>
                Wooden popsicles and glue.
                </li>
                <li>
                No other materials can’t be used, bridge not to be found painted.
                </li>
            </ol>
            </li>
            <li>
            Wooden popsicles and glue are provided and the bridge should be build within given time interval. 
            </li>
            <li>
            The bridge must have a minimum total length of 45 cm, and have a clear span of 40 cm.. The bridge must have a minimum width of 9 cm and a maximum width of 12 cm. It must have a minimum height of 10 cm. There are no restrictions on the maximum height. 
            </li>
            <li>
            Dimensional error of +/- 1 cm will be allowed.
            </li>
            <li>
            The Centre of the bridge must have a gap in the top and bottom to allow for a chain and hook to pass through it, so that a load can be applied to the bridge.
            </li>
            <li>
            No more than 2 craft sticks may be sticked/bonded together to form a single member. However, there can be an infinite number of craft sticks at a joint.
            </li>
            <li>
            Maximum strength to weight ratio is criteria for winning. 
            </li>
            <li>
            Decision of judges will be final and binding to all participants.
            </li>
          </ul>
        </div>
        <div className='container contact' style={{"color" : "yellow"}}>
          <div className='container about0'>
                <span style={{"color":"FDC32D"}}> CONTACT : </span>
                <span>
                <h6 className=' deskcont' style={{"color":"white"}}>Sarang pawar : 7517299266</h6>
                <h6 className=' deskcont' style={{"color":"white"}}>Tejas Patil : 7588947365</h6>
                <h6 className=' deskcont' style={{"color":"white"}}>Sujay hamane : 8605641737</h6>
                </span>
            </div>
        </div>
        <br></br><br></br><br></br>
        </div>
    </>
    
  )
}

export default Sample