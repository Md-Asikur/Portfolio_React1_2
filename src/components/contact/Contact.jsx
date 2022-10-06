import React, { Component } from 'react'
import Slider from "react-slick";
import  { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './contact.css'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import img2 from "../images/man2.jpg";
import img1 from "../images/man1.jpg";
import img3 from "../images/man3.jpg";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MarkEmailUnreadOutlinedIcon from "@mui/icons-material/MarkEmailUnreadOutlined";
import ArrowRightAlt from '@mui/icons-material/ArrowRightAlt';
import Facebook from '@mui/icons-material/Facebook';
import YouTube from '@mui/icons-material/YouTube';
import Instagram from '@mui/icons-material/Instagram';
import Footer from '../footer/Footer';
const Contact=()=>{
 
   const settings = {
     dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
     
    };
    // const navigate = useNavigate();
    // const [formErrors, setFormErrors] = useState({});
    // const [isSubmit, setIsSubmit] = useState(false);

    // const [user, setUser] = useState({
    //   name: "",
    //   email: "",
    //   password: "",
    //   cpassword: "",
    //   work: "",
    //   phone: "",
    // });

    // const handleInputs = (e) => {
    //   const { name, value } = e.target;
    //   setUser({
    //     ...user,
    //     [name]: value,
    //   });
    // };
    // useEffect(() => {
    //   console.log(formErrors);
    //   if (Object.keys(formErrors).length === 0 && isSubmit) {
    //     console.log(user);
    //   }
    // }, [formErrors]);
    // const validate = (values) => {
    //   const errors = {};
    //   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    //   if (!values.name) {
    //     errors.name = "Username is required!";
    //   }
    //   if (!values.phone) {
    //     errors.phone = "Phone is required!";
    //   }
    //   if (!values.work) {
    //     errors.work = "Work is required!";
    //   }
    //   if (!values.email) {
    //     errors.email = "Email is required!";
    //   } else if (!regex.test(values.email)) {
    //     errors.email = "This is not a valid email format!";
    //   }
    //   if (!values.password) {
    //     errors.password = "Password is required";
    //   } else if (values.password.length < 4) {
    //     errors.password = "Password must be more than 4 characters";
    //   } else if (values.password.length > 10) {
    //     errors.password = "Password cannot exceed more than 10 characters";
    //   }
    //   if (!values.cpassword) {
    //     errors.cpassword = "Conpassword is required";
    //   } else if (values.password != values.cpassword) {
    //     errors.cpassword = "Password is Not Match";
    //   }
    //   return errors;
    // };
    // const postData = async (e) => {
    //   e.preventDefault();
    //   setFormErrors(validate(user));
    //   setIsSubmit(true);
    //   const { name, email, work, phone, password, cpassword } = user;
    //   if (!name || !email || !work || !phone || !password || !cpassword) {
    //     return false;
    //   }

    //   const res = await fetch("http://localhost:5000/register", {
    //     method: "POST",
    //     headers: {
    //       "Content-type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       name,
    //       email,
    //       work,
    //       phone,
    //       password,
    //       cpassword,
    //     }),
    //   });
    //   const data = await res.json();
    //   if (data.status === 422 || !data) {
    //     window.alert("Invalid Registretion");
    //     console.log("Invalid Registretion");
    //   } else {
    //     // window.alert("Successfully Registretion");
    //     // console.log("Successfully Registretion");
    //     navigate("/");
    //   }
    // };
  
  return (
    <>
      <div id="contact">
        <div className="container col-sm mx-3">
          <Slider {...settings}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={img2} id="im" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={img1} id="im" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={img3} id="im" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <div className="row">
                <div className="col-md-4">
                  <Card.Img variant="top" src={img1} id="ims" />
                </div>
                <div className="col-md-8">
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </div>
              </div>
            </Card>
          </Slider>
          {/* <div className="register bg-black" id="reg">
            {console.log("user", user)}
            <form method="POST">
              <h2>Register Now</h2>
              <label for="name">Name</label>
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleInputs}
                autoComplete="off"
              />
              <p style={{ display: "block" }} id="reg-red">
                {formErrors.name}
              </p>

              <label for="name">Email</label>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleInputs}
                autoComplete="off"
              />
              <p style={{ display: "block" }} id="reg-red">
                {formErrors.email}
              </p>

              <label for="name">Phone</label>
              <input
                type="number"
                name="phone"
                value={user.phone}
                onChange={handleInputs}
                autoComplete="off"
              />
              <p id="reg-red">{formErrors.phone}</p>
              <label for="name">Work</label>
              <input
                type="text"
                name="work"
                value={user.work}
                onChange={handleInputs}
                autoComplete="off"
              />
              <p id="reg-red">{formErrors.work}</p>
              <label for="name">Password</label>
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={handleInputs}
                autoComplete="off"
              />
              <p id="reg-red">{formErrors.password}</p>
              <label for="name">ConfirmPassword</label>
              <input
                type="password"
                name="cpassword"
                value={user.cpassword}
                onChange={handleInputs}
                autoComplete="off"
              />
              <p id="reg-red">{formErrors.cpassword}</p>
              <br />
              <input type="submit" name="signup" value="register" onClick={postData} />
            </form>
          </div> */}
          {/* Horizontal CArd here */}
          {/* <div className="card mt-4">
          <div className="row">
            <div className="col-md-3">
              <img src={img3} alt="" height="200px" width="250px" />
            </div>
            <div className="col-md-9">
              <h1 className="text-black">Md ASikur </h1>
              <h3 className="text-success">Hire Me</h3>
              <button type="" className="btn btn-outline-success">
                Contact Now
              </button>
            </div>
          </div>
        </div> */}
        </div>

        <div className="row" style={{ marginTop: "140px" }} id="counter">
          <div className="col-sm-12 col-md-4 col-lg-3">
            <div className="count">
              <h1> CUSTOM PRICE</h1>
              <h3>
                <button className="btn btn-warning text-danger d-block mx-auto">
                  CREATE OWN
                </button>
              </h3>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-3">
            <div className="count">
              <h1> BASIC</h1>
              <h3 className="text-warning text-center">39$</h3>
              <h3>
                <button className="btn btn-outline-danger d-block mx-auto">
                  BUY NOW
                </button>
              </h3>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-3">
            <div className="count">
              <h1> STANDARD</h1>
              <h3 className="text-warning text-center">239$</h3>
              <h3>
                <button className="btn btn-outline-success d-block mx-auto">
                  BUY NOW
                </button>
              </h3>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-3">
            <div className="count">
              <h1> PREMIUM</h1>
              <h3 className="text-warning text-center">499$</h3>
              <h3>
                <button className="btn btn-outline-primary d-block mx-auto">
                  BUY NOW
                </button>
              </h3>
            </div>
          </div>
        </div>
        {/* <div
          className="row"
          style={{ marginTop: "140px", backgroundColor: "black" }}
          id="counters"
        >
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="count">
              <h2> About me</h2>
              <p className="text-muted">
                We have tested a number of registry fix and clean utilities and present
                <p></p>
                our top 3 list on our site for your convenience. Copyright ©2022 All
                rights reserved | <p></p>This template is made with by Colorlib
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="count">
              <h2 id="inp-letter">News letter</h2>
              <p className="text-muted">Stay updated with our latest trends</p>
              <h3>
                <input type="email" name="email" placeholder="Enter Email" />
              </h3>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="count">
              <h1>Follow Me</h1>
              <p className="text-muted mx-3">let us be social</p>
              <h3 className="d-flex" id="link-f">
                <a href="#">
                  <Facebook />
                </a>
                <a href="#">
                  <YouTube />
                </a>
                <a href="#">
                  <Instagram />
                </a>
                <a href="#">
                  <MarkEmailUnreadOutlinedIcon />
                </a>
              </h3>
            </div>
          </div>
        </div> */}
      </div>
      <Footer />
    </>
  );
  }
export default Contact;