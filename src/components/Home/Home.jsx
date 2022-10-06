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


export default function Home(props) {
 
    useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <>
      //{" "}
      <div id="home" className="container">
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
      <div id="about" className="row">
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
    </>
  );
  
}

