import React, { useEffect,useState } from "react";
import "./services.css";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import AppSettingsAltOutlinedIcon from "@mui/icons-material/AppSettingsAltOutlined";
import DeveloperBoard from "@mui/icons-material/DeveloperBoard";
import Aos from "aos";
import "../../../node_modules/aos/dist/aos.css";
import CountUp from "react-countup";
import Trigger from "react-scroll-trigger";
import Footer from "../footer/Footer";
const Services = (props) => {
  const[counter,setCounter]=useState(false)
  useEffect(() => {
   Aos.init({duration:3000})
  }, [])
  
  return (
    <>
      <div id="services" className="row">
        <div
          className="col-sm-12 col-md-12 col-lg-12 text-center"
          data-aos="zoom-in-right"
        >
          <h1>My Offered Services</h1>
          <p>
            At about this time of year, some months after New Year’s resolutions have been
            made and kept,
            <br /> or made and neglected.
          </p>
        </div>
        {/* <div className="col-sm-12 col-md-6 col-lg-4" id="">
        <Card>
          <Card.Img id="img" variant="top" src={design} />
          <Card.Body>
            <Card.Title>Web Design</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary">Web Designing</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-4">
        <Card>
          <Card.Img id="img" variant="top" src={develop} />
          <Card.Body>
            <Card.Title>Web Development</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-4">
        <Card>
          <Card.Img id="img" variant="top" src={camera}/>
          <Card.Body>
            <Card.Title>photography</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div> */}
        <div
          className="col-sm-12 col-md-6 col-lg-4"
          id="serv-mt"
          data-aos="zoom-out-left"
        >
          <div>
            <h1>
              <DesignServicesIcon id="icon" />
            </h1>
          </div>
          <div id="serv-body">
            <a href="#">
              <h1>Web Design</h1>
            </a>
            <p>
              “It is not because things are difficult that we do not dare; it is because
              we do not dare that they are difficult.”
            </p>
          </div>
        </div>
        <div
          className="col-sm-12 col-md-6 col-lg-4"
          id="serv-mt"
          data-aos="zoom-in-right"
        >
          <div>
            <h1>
              <DeveloperBoard id="icon" />
            </h1>
          </div>
          <div id="serv-body">
            <a href="#">
              <h1>Web Development</h1>
            </a>
            <p>
              “It is not because things are difficult that we do not dare; it is because
              we do not dare that they are difficult.”
            </p>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4" id="serv-mt" data-aos="zoom-in-left">
          <div>
            <h1>
              <CameraAltOutlinedIcon id="icon" />
            </h1>
          </div>
          <div id="serv-body">
            <a href="#">
              <h1>Photography</h1>
            </a>
            <p>
              “It is not because things are difficult that we do not dare; it is because
              we do not dare that they are difficult.”
            </p>
          </div>
        </div>
        <div
          className="col-sm-12 col-md-6 col-lg-4"
          id="serv-mt"
          data-aos="zoom-in-right"
        >
          <div>
            <h1>
              <NoteAltOutlinedIcon id="icon" />
            </h1>
          </div>
          <div id="serv-body">
            <a href="#">
              <h1>Cliping Path</h1>
            </a>
            <p>
              “It is not because things are difficult that we do not dare; it is because
              we do not dare that they are difficult.”
            </p>
          </div>
        </div>
        <div
          className="col-sm-12 col-md-6 col-lg-4"
          id="serv-mt"
          data-aos="zoom-in-right"
        >
          <div>
            <h1>
              <AppSettingsAltOutlinedIcon id="icon" />
            </h1>
          </div>
          <div id="serv-body">
            <a href="#">
              <h1>Apps Builder</h1>
            </a>
            <p>
              “It is not because things are difficult that we do not dare; it is because
              we do not dare that they are difficult.”
            </p>
          </div>
        </div>
        <div
          className="col-sm-12 col-md-6 col-lg-4"
          id="serv-mt"
          data-aos="zoom-out-left"
        >
          <div>
            <h1>
              <RocketLaunchOutlinedIcon id="icon" />
            </h1>
          </div>
          <div id="serv-body">
            <a href="#">
              <h1>Graphics Design</h1>
            </a>
            <p>
              “It is not because things are difficult that we do not dare; it is because
              we do not dare that they are difficult.”
            </p>
          </div>
        </div>
        <div className="row" style={{ marginTop: "140px" }} id="counter">
          <div className="col-sm-12 col-md-4 col-lg-3">
            <Trigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
              <div className="count">
              
                <h1>
                  {counter && <CountUp start={0} end={2400} duration={3} delay={0} />}
                </h1>
                <h2> Projects Completed</h2>
              </div>
            </Trigger>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-3">
            <Trigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
              <div className="count">
                <h1>
                  {counter && <CountUp start={0} end={1500} duration={3} delay={0} />}
                </h1>
                <h2> Happy Client</h2>
              </div>
            </Trigger>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-3">
            <Trigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
              <div className="count">
                <h1>
                  {counter && <CountUp start={0} end={3600} duration={3} delay={0} />}
                </h1>
                <h2> Cups Of Coffee</h2>
              </div>
            </Trigger>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-3">
            <Trigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
              <div className="count">
                <h1>
                  {counter && <CountUp start={0} end={400} duration={2} delay={0} />}
                </h1>
                <h2> Real Professionals</h2>
              </div>
            </Trigger>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}; 
export default Services;
