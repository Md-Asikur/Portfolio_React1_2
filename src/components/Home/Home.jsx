import React,{useEffect} from "react";
import "./home.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import img1 from '../images/man1.jpg'
import img2 from "../images/man2.jpg";
import man2 from "../images/man2.jpg";
import img3 from "../images/man3.jpg";
import Aos from "aos";
import "../../../node_modules/aos/dist/aos.css";
import About from "../about/About";
import Contact from "../contact/Contact";
import SignIn from "../Register/Register";
import Login1 from "../Sign_in/Signin";
import Services from "../services/Services";
import Footer from "../footer/Footer";

import  { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import png1 from "../images/rocket.png";
import Motion from "../React Scoll Motion/Motion";
import Countdown from "../Vanta Birds Bg";

// Little helpers ...
const url = (name, wrap = false) =>
  `${wrap ? "url(" : ""}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;
export default function Home(props) {
  const parallax = useRef(!null);
    useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <>
      {/* <div id="home" className="container">
        <div id="home" className="row">
          <h1 className="h1">Home Page</h1>
          <div
            className="col-sm-12 col-md-6 col-lg-6 col-sm mb-4 "
            data-aos="zoom-in-right"
          >
            <h1> Designing With Passion While Exploring The World</h1>
            <p></p>
            <p>
              Consectetur adipiscing elit, sed do eiusmod tempor ididunt ut labore et
              dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra
              sebfd dho eiusmod tempor maecenas accumsan lacus.
            </p>
            <p></p>
            <p>
              Consectetur adipiscing elit, sed do eiusmod tempor ididunt ut labore et
              dolore magna aliqua.
            </p>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4" data-aos="zoom-in-left">
            <h1> Any Type Of Query & Discussion. </h1>
            <h3> Late talk with me</h3>
            <h1>
              <a href="#">hire@Asukur.com</a>
            </h1>
          </div>

          <div className="container">
            <div className="r-3" style={{ marginTop: "200px" }}>
              <div className="col-sm-12 col-md-12 col-lg-10" data-aos="zoom-in-right">
                <h1>
                  What Services <br />
                  you will Get from me!
                </h1>
              </div>
            </div>
            <div className="row">
              <div
                className="col-sm-12 col-md-6 col-lg-4 mt-5 mb-5"
                data-aos="fade-right"
              >
                <Card>
                  <Card.Img variant="top" src={img1} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </div>
              <div
                className="col-sm-12 col-md-6 col-lg-4 mt-5 mb-5"
                data-aos="zoom-in-right"
              >
                <Card>
                  <Card.Img variant="top" src={img2} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4 mt-5 mb-5" data-aos="fade-left">
                <Card>
                  <Card.Img variant="top" src={img3} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>
        //{" "}
      </div>
      {/* ABout Section */}
      {/* <div id="about" className="row">
        <h1 className="h1">About Me</h1>

        <div className="col-sm-12 col-md-6 col-lg-5  mt-5" data-aos="zoom-in-right">
          <img
            src={man2}
            alt=""
            height="400px"
            width="340px"
            style={{ marginLeft: "150px" }}
          />
        </div>
        <div
          className="col-sm-12 col-md-6 col-lg-6"
          id="about"
          style={{ marginTop: "100px" }}
          data-aos="zoom-in-left"
        >
          <h3>About Me</h3>

          <h1>PERSONAL DETAILS</h1>

          <p>
            Here, I focus on a range of items and features that we use in life without
            giving them a second thought. such as Coca Cola. Dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
          </p>

          <button className="btn btn-outline-primary">view full details</button>
        </div>
      </div>
      //parallxx
      <div style={{ width: "100%", height: "100%", background: "#253237" }}>
        <Parallax ref={parallax} pages={3}>
          <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: "#805E" }} />
          <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: "#87BCDE" }} />

          <ParallaxLayer
            offset={0}
            speed={0}
            factor={3}
            style={{
              backgroundImage: url("stars", true),
              backgroundSize: "cover",
            }}
          />

          <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: "none" }}>
            <img src={url("satellite4")} style={{ width: "15%", marginLeft: "70%" }} />
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
            <img
              src={url("cloud")}
              style={{ display: "block", width: "20%", marginLeft: "55%" }}
            />
            <img
              src={url("cloud")}
              style={{ display: "block", width: "10%", marginLeft: "15%" }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
            <img
              src={url("cloud")}
              style={{ display: "block", width: "20%", marginLeft: "70%" }}
            />
            <img
              src={url("cloud")}
              style={{ display: "block", width: "20%", marginLeft: "40%" }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
            <img
              src={url("cloud")}
              style={{ display: "block", width: "10%", marginLeft: "10%" }}
            />
            <img
              src={url("cloud")}
              style={{ display: "block", width: "20%", marginLeft: "75%" }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
            <img
              src={url("cloud")}
              style={{ display: "block", width: "20%", marginLeft: "60%" }}
            />
            <img
              src={url("cloud")}
              style={{ display: "block", width: "25%", marginLeft: "30%" }}
            />
            <img
              src={url("cloud")}
              style={{ display: "block", width: "10%", marginLeft: "80%" }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
            <img
              src={url("cloud")}
              style={{ display: "block", width: "20%", marginLeft: "5%" }}
            />
            <img
              src={url("cloud")}
              style={{ display: "block", width: "15%", marginLeft: "75%" }}
            />
          </ParallaxLayer>

          <ParallaxLayer
            offset={2.5}
            speed={-0.4}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "none",
            }}
          >
            <img src={url("earth")} style={{ width: "60%" }} />
          </ParallaxLayer>

          <ParallaxLayer
            offset={2}
            speed={-0.3}
            style={{
              backgroundSize: "80%",
              backgroundPosition: "center",
              backgroundImage: url("clients", true),
            }}
          />

          <ParallaxLayer
            offset={0}
            speed={0.1}
            onClick={() => parallax.current.scrollTo(1)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={url("server")} style={{ width: "20%" }} />
          </ParallaxLayer>

          <ParallaxLayer
            offset={1}
            speed={0.1}
            onClick={() => parallax.current.scrollTo(2)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={url("bash")} style={{ width: "40%" }} />
          </ParallaxLayer>

          <ParallaxLayer
            offset={2}
            speed={-0}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={() => parallax.current.scrollTo(0)}
          >
            <img src={url("clients-main")} style={{ width: "40%" }} />
          </ParallaxLayer>
        </Parallax>
      </div> */}

      <Countdown />
      
    </>
  );
  
}

