import React, { useState } from "react";
import "./signin.css";
import { useNavigate } from "react-router-dom";
import Footer from "../footer/Footer";
const Login1 = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const loginUser = async (e) => {
    e.preventDefault();
    setError(true);

    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email,

        password,
      }),
    });
    const data = await res.json();
    if (data.status === 400 || !data) {
      window.alert("Invalid SignIn");
      console.log("Invalid SignIn");
    } else if (data.status === 200) {
      //   window.alert("Successfully SignIn");
      console.log("Successfully SignIn");
      navigate("/");
    }
  };
  return (
    <>
      <div id="log" className="mt-5">
        <form method="POST" action="/">
          <h2 className="text-warning">Login Now</h2>
          <label> Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
            className="btn btn-outline-danger text-white fs-5"
          />
          {error && !email && <span className="sp">Enter Valid Email</span>}
          <label> Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="off"
            className="btn btn-outline-warning text-white fs-5"
          />
          {error && !password && <span className="sp">Enter Valid Password</span>}
          <input
            type="submit"
            name="signin"
            value="Login"
            onClick={loginUser}
            className="btn btn-outline-warning text-white d-block mx-auto mt-3"
          />
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Login1;
