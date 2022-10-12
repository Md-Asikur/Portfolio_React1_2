import React,{useEffect} from 'react'
import './about.css'
import man2 from '../images/man2.jpg'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Aos from "aos";
import "../../../node_modules/aos/dist/aos.css";
import Footer from '../footer/Footer';
import Parallax from '../parallax spring/Parallax';
import Parall2 from '../Parallax2/Parallax2';


const About = (props) => {
   useEffect(() => {
     Aos.init({ duration: 3000 });
   }, []);

  return (
    <>
      <div id="about" className="row">
       
        <div className="col-sm-12 col-md-6 col-lg-5  mt-5" data-aos="zoom-in-right">
          {/* <img
          src={man2}
          alt=""
          height="400px"
          width="340px"
          style={{ marginLeft: "150px" }}
        /> */}
          <Card>
            <Card.Img
              variant="top"
              src={man2}
              style={{ height: "520px", marginRight: "80px", border: "none" }}
            />
            {/* <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body> */}
          </Card>
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
      <Parallax />
      {/* <Parall2 />
      <Footer /> */}
      
    </>
  );
}
export default About