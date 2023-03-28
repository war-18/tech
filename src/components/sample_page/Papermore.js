import React from 'react'
import "./sample.css"
import hawkmore_img from "./paper_img.svg"
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
                        PAPER PRESENTATION is an event that will provide a forum for Research Scholars, Scientists students, and Engineers to share and present their ideas and experience in the below domains.
                    </p>
                </div>
                <div>
                    <div className='container about0'>
                        <span style={{ "color": "FDC32D" }}>TEAM SIZE : </span>
                        <span className='notbold' style={{ "color": "white" }}>Solo</span>
                    </div>
                    <div className='container about1'>
                        <span style={{ "color": "FDC32D" }}>FEES : </span>
                        <span className='notbold' style={{ "color": "white" }}>50/- Per Person</span>
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
                        {/* <span className='notbold'>
                <span style={{"color":"white"}}>1st </span><span style={{"color": "#FF037D"}}> Rs 2000/-</span>
              </span> */}
                        <h6 className='prizeh'>
                            <h6 className='notbold prizeh'>
                                <span style={{ "color": "white" }}>All the papers received will be published in our college journal. The best paper will receive a prize. </span>
                            </h6>
                        </h6>

                    </div>
                    <br></br><br></br><br></br>
                </div>
                <div>
                    <h3 className='structure'>
                        DOMAIN :
                    </h3>
                    <ul className='structureul' >
                        <li>
                            Automatic Control Systems
                        </li>
                        <li>
                            Communication Engineering
                        </li>
                        <li>
                            Embedded Systems and IoT
                        </li>
                        <li>
                            Robotics and Automation
                        </li>
                        <li>
                            Manufacturing Engineering
                        </li>
                        <li>
                            Power Electronics and Power Systems
                        </li>
                        <li>
                            Signal and Image Processing
                        </li>
                        <li>
                            Artificial Intelligence
                        </li>
                        <li>
                            Electrical Power and Control
                        </li>
                        <li>
                            Electronics Communications
                        </li>
                        <li>
                            Signals and Systems & Image processing
                        </li>
                        <li>
                            Soft Computing and its Applications
                        </li>
                        <li>
                            Micro and Smart Grids
                        </li>
                        <li>
                            Engineering Materials
                        </li>
                        <li>
                            Information Technology and it’s applications
                        </li>
                        <li>
                            Internet of things(IOT)
                        </li>
                        <li>
                            AI and Matching learning applications
                        </li>
                        <li>
                            Data Science
                        </li>
                    </ul>
                </div>
                <div className='generalrules'>
                    <h3 className='generalrulesheading'>
                        GENERAL RULES :
                    </h3>
                    <ul className='structureul' >
                        <li>
                            To be submitted in word document as well as pdf.
                        </li>
                        <li>
                            The Paper will be reviewed by our reviewers.
                        </li>
                        <li>
                            Individual or Team of maximum 3 members can participate.
                        </li>
                        <li>
                            If any paper found in another format it will get rejected.
                        </li>
                        <li>
                            Topic of paper should be strictly related to domain mention above.
                        </li>
                        <li>
                            Participants whose paper get selected need to present their paper with PPT in PCCOER Campus.
                        </li>
                    </ul>
                </div>
                <div className='container contact' style={{ "color": "yellow" }}>
                    <div className='container about0'>
                        <span style={{ "color": "FDC32D" }}> CONTACT : </span>
                        <span>
                            <h6 className=' deskcont' style={{ "color": "white" }}>Shweta Patil : 7517961070</h6>
                            <h6 className=' deskcont' style={{ "color": "white" }}>Darshana Bhavsar : 9975894553</h6>
                        </span>
                    </div>
                </div>
                <br></br><br></br><br></br>
            </div>
        </>

    )
}

export default Sample