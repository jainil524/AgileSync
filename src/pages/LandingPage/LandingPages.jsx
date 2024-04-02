import { NavLink } from "react-router-dom";
import { ImArrowRight2 } from "react-icons/im";
import { PiKanbanFill } from "react-icons/pi";

import "./css/Landing.css";
import Login from "../Auth/Login/Login";

function Landing() {
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

          <div className="hero">
            <div>
              <h1 className="heading">
                <span className="management">Empowering Collaboration for </span><br />
                <span>Project Success</span>
              </h1>
              <p className="description">
                Unite students and professors for seamless project management. Revolutionize your workflow from proposal to achievement with streamlined features. Join us and transform your projects today!
              </p>
              <button className="navBtn"><NavLink to="/login">Sign in</NavLink></button>
            </div>
            <div>
              <img className="introPic" src="../../../src/assets/img/intro_pic.svg" alt="image" />
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Landing;
