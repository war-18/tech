import React from 'react'
import "./sample.css"
import hawkmore_img from "./brocode_img.svg"
import register_now from "./register_now.svg"
function Sample() {
    return (
        <>
            <div className='container upperimage'>
                <img className='topimg' src={hawkmore_img} alt="" />
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSerIyE5aauF6nL7q4mxY0ErEJv8GxrhLiuoYIPKISeto2TkDA/viewform">
                    <img className='registernowbutton' src={register_now} alt="" />
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
                        Bro Code is an event that festers a team spirit between two coders who work together to complete the tasks at hand. This Competition puts your logical reasoning, team spirit, and coding skills to the test.
                    </p>
                </div>
                <div>
                    <div className='container about0'>
                        <span style={{ "color": "FDC32D" }}>TEAM SIZE : </span>
                        <span className='notbold' style={{ "color": "white" }}>Duo</span>
                    </div>
                    <div className='container about1'>
                        <span style={{ "color": "FDC32D" }}>FEES : </span>
                        <span className='notbold' style={{ "color": "white" }}>100/- Per Group</span>
                    </div>
                    <div className='container about2'>
                        <span style={{ "color": "FDC32D" }}>TIME DURATION : </span>
                        <span className='notbold' style={{ "color": "white" }}> -- </span>
                    </div>
                    <div className='container about3'>
                        <span style={{ "color": "FDC32D" }}>VENUE : </span>
                        <span className='notbold' style={{ "color": "white" }}>PCCOER Campus</span>
                    </div>
                    <div className='container about4'>
                        <span style={{ "color": "FDC32D" }}>PRIZES : </span>
                        <span className='notbold'>
                            <span style={{ "color": "white" }}>1st </span><span style={{ "color": "#FF037D" }}> Rs 3000/-</span>
                        </span>
                        <h6 className='prizeh'>
                            <h6 className='notbold prizeh'>
                                <span style={{ "color": "white" }}>2nd </span><span style={{ "color": "#FF037D" }}> Rs 2000/-</span>
                            </h6>
                            <h6 className='notbold prizeh'>
                                <span style={{ "color": "white" }}>3rd </span><span style={{ "color": "#FF037D" }}> Rs 1000/-</span>
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
                        This Competition will be held in 3 rounds:
                        <ol className='abcde' style={{"listStyleType": "lower-alpha"}} >
                            <li>
                            Brain Teaser: The participants will be required to solve a series of brain teasers to advance on to the next round.
                            </li>
                            <li>
                            Treasure Hunt: The Participants will have to work in a team and look for a treasure.
                            </li>
                            <li>
                            Coding: The Participants will be given a problem statement for which they will have to develop a solution in code within the given time frame. 
                            </li>
                        </ol>
                        </li>
                        <li>
                        There will be some twist in it.
                        </li>
                    </ul>
                </div>
                <div className='generalrules'>
                    <h3 className='generalrulesheading'>
                        GENERAL RULES :
                    </h3>
                    <ul className='structureul' >
                        <li>
                            The Participants will have to work in teams of two. Solo participants may be assigned a random partner.
                        </li>
                        <li>
                            Any Misdemeanor of a participant will result in disqualification.
                        </li>
                        <li>
                            No mobile phones will be allowed. However, the participants can carry their own notepads, pen/pencil and water bottles.
                        </li>
                        <li>
                            Any Participant found accessing the internet in the coding round will be disqualified immediately.
                        </li>
                        <li>
                            A team has to complete the current round to advance on to the next round.
                        </li>
                        <li>
                            Any Round cannot be skipped.
                        </li>
                    </ul>
                </div>
                <div className='container contact' style={{ "color": "yellow" }}>
                    <div className='container about0'>
                        <span style={{ "color": "FDC32D" }}> CONTACT : </span>
                        <span>
                            <h6 className=' deskcont' style={{ "color": "white" }}>Vaishnavi bhujbal : 8956984009</h6>
                        </span>
                    </div>
                </div>
                <br></br><br></br><br></br>
            </div>
        </>

    )
}

export default Sample