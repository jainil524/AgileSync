import { NavLink } from "react-router-dom";

import "./css/Landing.css";
import Login from "../Auth/Login/Login";

function LoginDesign() {
  return (
    <>
      <div className="outerbox">
        <div className="innerbox">

          <div className="navbar">
            <div className="navLogo">
              <img src="../../../src/assets/img/AGILE-SYNC-LOGO.png" alt="sd" />
            </div>

            <ul className="navMenu">
              <li>
                <NavLink to="/">HOME</NavLink>
              </li>
              <li>
                <NavLink to="/about">ABOUT</NavLink>
              </li>
              <li>
                <NavLink to="/about">CONTACT</NavLink>
              </li>
              <button className="navBtn"><NavLink to="/register">Sign up</NavLink></button>
              <button className="navBtn"><NavLink to="/login">Sign in</NavLink></button>
            </ul>
          </div>

          <div className="hero login">

            <div>
              <img className="introPic" src="../../../src/assets/img/intro_pic.svg" alt="image" />
            </div>
            <div>
              <Login />
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default LoginDesign;
