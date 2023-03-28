import React from "react";
import EventCardL from "../components/EventCardL";
import EventCardR from "../components/EventCardR";
import Hawkrace from "../images/eventcards/hawkrace.svg";
import Nirmiti from "../images/eventcards/nirmiti.svg";
import Expedition from "../images/eventcards/expedition.svg";
// import spro from "../images/eventcards/spro.svg";
import cad from "../images/eventcards/cad.svg";
import laptop from "../images/eventcards/laptop.svg";
import unleash from "../images/eventcards/unleash.svg";
import mech from "../images/eventcards/mech.svg";
import cat from "../images/eventcards/cat.svg";
import roborace from "../images/eventcards/roborace.svg";
import rocketleague from "../images/eventcards/rocketleague.svg";
import codecombact from "../images/eventcards/codecombact.svg";
import quizotronics from "../images/eventcards/quizotronics.svg";
import paperpresent from "../images/eventcards/paperpresent.svg";
import header from "../images/eventcards/events.svg";
import everobothon from "../images/everobothon.svg";
import evecadathon from "../images/evecadathon.svg";
import evebraniac from "../images/evebraniac.svg";
import eveconstructo from "../images/eveconstructo.svg";
import evecodothon from "../images/evecodothon.svg";
import "./Events.css";
const Events = ({ reference }) => {
  // const events = [
  //   {
  //     name: "Hawkrace",
  //     img: Hawkrace,
  //     link: "/hawkrace",
  //   },
  //   {
  //     name: "Expedition",
  //     img: Expedition,
  //     link: "/expedition",
  //   },
  //   {
  //     name: "STRUCTUREPRO",
  //     img: spro,
  //     link: "/structurepro",
  //   },
  //   {
  //     name: "Nirmiti",
  //     img: Nirmiti,
  //     link: "/nirmiti",
  //   },
  //   {
  //     name: "cad master",
  //     img: cad,
  //     link: "/cadmaster",
  //   },
  //   {
  //     name: "technofire",
  //     img: laptop,
  //     link: "/technofire",
  //   },
  //   {
  //     name: "UNLEASH2K23",
  //     img: unleash,
  //     link: "/unleash2k23",
  //   },
  //   {
  //     name: "CAD O CREATE",
  //     img: mech,
  //     link: "/cadocreate",
  //   },
  //   {
  //     name: "BRO CODE",
  //     img: cat,
  //     link: "/brocode",
  //   },
  //   {
  //     name: "Robo Race ",
  //     img: roborace,
  //     link: "/roborace",
  //   },
  //   {
  //     name: "ROCKETLEAGUE",
  //     img: rocketleague,
  //     link: "/rocketleague",
  //   },
  //   {
  //     name: "Code Combact ",
  //     img: codecombact,
  //     link: "/codecombact",
  //   },
  //   {
  //     name: "QUIZOTRONICS",
  //     img: quizotronics,
  //     link: "/quizotronics",
  //   },
  //   {
  //     name: "Paper Present",
  //     img: paperpresent,
  //     link: "/paperpresent",
  //   },
  // ];
  return (
    <div className="Events" ref={reference}>
      <div className="Heading">
        <img src={header} alt="" style={{"width":"100%"}} />
      </div>
      <div id="everobothon" className="evehead">
        <img src={everobothon} alt="" style={{"width":"100%","marginTop":"10%"}}/>
      </div>
      <div className="Event_gap">
        <EventCardL name={"HAWKRACE"} image={Hawkrace} link={"/hawkrace"} />
      </div>
      <div className="Event_gap">
        <EventCardR name={"ROBO RACE"} image={roborace} link={"/roborace"} />
      </div>
      <div className="Event_gap">
        <EventCardL name={"ROCKETLEAGUE"} image={rocketleague} link={"/rocketleague"} />
      </div>
      <div id="evecadothon" className="evehead">
        <img src={evecadathon} alt="" style={{"width":"100%","marginTop":"10%"}}/>
      </div>
      <div className="Event_gap">
        <EventCardR name={"CAD O CREATE"} image={mech} link={"/cadocreate"} />
      </div>
      <div className="Event_gap">
        <EventCardL name={"CAD MASTER"} image={cad} link={"/cadmaster"} />
      </div>
      <div id="evebraniac" className="evehead">
        <img src={evebraniac} alt="" style={{"width":"100%","marginTop":"10%"}}/>
      </div>
      <div className="Event_gap">
        <EventCardR name={"TECHNOFIRE"} image={laptop} link={"/technofire"} />
      </div>
      <div className="Event_gap">
        <EventCardL name={"UNLEASH2K23"} image={unleash} link={"/unlish2k23"} />
      </div>
      <div className="Event_gap">
        <EventCardR name={"PAPER PRESENTATION"} image={paperpresent} link={"/paperpresentation"} />
      </div>
      <div className="Event_gap">
        <EventCardL name={"QUIZOTRONICS"} image={quizotronics} link={"/quizotronics"} />
      </div>
      <div className="Event_gap">
        <EventCardR name={"EXPEDITION HUNT"} image={Expedition} link={"/expeditionhunt"} />
      </div>
      <div id="eveconstructo" className="evehead">
        <img src={eveconstructo} alt="" style={{"width":"100%","marginTop":"10%"}}/>
      </div>
      <div className="Event_gap">
        <EventCardL name={"NIRMITI"} image={Nirmiti} link={"/nirmiti"} />
      </div>
      <div className="Event_gap">
        <EventCardR name={"SURVIVE THE FALL"} image={Nirmiti} link={"/survivethefall"} />
      </div>
      <div id="evecodothon" className="evehead">
        <img src={evecodothon} alt="" style={{"width":"100%","marginTop":"10%"}}/>
      </div>
      <div className="Event_gap">
        <EventCardL name={"THE BRO CODE"} image={cat} link={"/thebrocode"} />
      </div>
      <div className="Event_gap">
        <EventCardR name={"CODE COMBAT"} image={codecombact} link={"/codecombat"} />
      </div>
    </div>
  );
};

export default Events;
