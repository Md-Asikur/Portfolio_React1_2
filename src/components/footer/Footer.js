import React from 'react'
import MarkEmailUnreadOutlinedIcon from "@mui/icons-material/MarkEmailUnreadOutlined";
import ArrowRightAlt from "@mui/icons-material/ArrowRightAlt";
import Facebook from "@mui/icons-material/Facebook";
import YouTube from "@mui/icons-material/YouTube";
import Instagram from "@mui/icons-material/Instagram";
export default function Footer() {
  return (
    <div>
      <div
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
              our top 3 list on our site for your convenience. Copyright ©2022 All rights
              reserved | <p></p>This template is made with by Colorlib
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
      </div>
    </div>
  );
}
