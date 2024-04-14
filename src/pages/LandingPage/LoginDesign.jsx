import { NavLink } from "react-router-dom";

import "./css/Landing.css";
import Login from "../Auth/Login/Login";
import IntroPic from "../../../public/img/intro_pic.svg";
import AgileSyncLogo from "../../../public/img/AGILE-SYNC-LOGO.png"

function LoginDesign() {
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
              <li>
                <NavLink to="/about">CONTACT</NavLink>
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
              <Login />
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default LoginDesign;
