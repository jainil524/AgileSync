import { NavLink } from "react-router-dom";

import "./css/Landing.css";
import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register";
import IntroPic from "../../../public/img/intro_pic.svg";
import AgileSyncLogo from "../../../public/img/AGILE-SYNC-LOGO.png"


function RegisterDesign() {
  return (
    <>
      <div className="outerbox">
        <div className="innerbox">

          <div className="navbar">
            <div className="navLogo">
              <img src={AgileSyncLogo} alt="sd" />
            </div>

            <ul className="navMenu">
              <li>
                <NavLink to="/">HOME</NavLink>
              </li>
              <li>
                <NavLink to="/about">ABOUT</NavLink>
              </li>
              <button className="navBtn"><NavLink to="/register">Sign up</NavLink></button>
              <button className="navBtn"><NavLink to="/login">Sign in</NavLink></button>
            </ul>
          </div>

          <div className="hero login">

            <div>
              <img className="introPic" src={IntroPic} alt="image" />
            </div>
            <div>
              <Register />
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default RegisterDesign;
