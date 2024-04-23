import React from "react";

import ObjectiveImg from "./objective.svg";
import WorkImg from "./work.svg";
import ChatbotImg from "./chatbot.svg";
import { NavLink } from "react-router-dom";
import BoyImg from "./boy.svg"
import GirlImg from "./girl.svg"
import AgileSyncLogo from "../../../../public/img/AGILE-SYNC-LOGO.png"

import "./About.css";

function About() {
  return (
    <>
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

      <div class="line">Made By AgileSync Team!</div>

      <div class="gap">
        <div class="container flex big-feature-container">
          <div class="feature-img">
            <img src={ObjectiveImg} alt="" />
          </div>
          <div class="features-desc flex">
            <h3>Objective</h3>
            <p>
              Unite students and professors for seamless project management.
              Revolutionize your workflow from proposal to achievement with
              streamlined features. Join us and transform your projects today!
            </p>
          </div>
        </div>
      </div>

      <div class="gap">
        <div class="container flex big-feature-container">
          <div class="features-desc flex">
            <h3>WorkFlow</h3>
            <div class="inner">
              <h4>Project Creation</h4>
              <p>
                AgileSync enables users to create new projects effortlessly.
                Users can initiate projects, set goals, and define project
                scopes with ease.
              </p>

              <h4>Member/Student Invitation</h4>
              <p>
                The platform facilitates seamless collaboration by allowing
                project owners to invite members or students to join the
                project. This feature ensures that all team members have access
                to project resources and updates.
              </p>

              <h4>Progress Tracking</h4>
              <p>
                AgileSync provides dynamic progress tracking through a Kanban
                board interface. This allows users to visualize project status,
                track tasks, and monitor progress in real time.
              </p>
            </div>
          </div>

          <div class="feature-img">
            <img src={WorkImg} alt="" />
          </div>
        </div>
      </div>

      <div class="gap">
        <div class="container flex big-feature-container">
          <div class="feature-img">
            <img src={ChatbotImg} alt="" />
          </div>
          <div class="features-desc flex">
            <h3>Artificial Intelligence Integration</h3>
            <div class="inner">
              <p>
                One of the standout features of AgileSync is its integration of
                artificial intelligence (AI). Users can interact with an AI
                chatbot to access project information, historical data, and
                receive suggestions for project improvement. The chatbot
                leverages AI algorithms to provide relevant and helpful
                responses to user queries.
              </p>

              <h4>Documented Progress</h4>
              <p>
                AgileSync stores project progress and updates in a document
                format, making it easily accessible to team members. The AI
                chatbot can retrieve information from these progress documents
                to provide accurate responses to user inquiries.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="features-section">
        <div class="container">
          <div class="features-header">
            <h2>Team Members</h2>
          </div>
          <div class="features-area flex">
            <div class="features-card flex">
              <img class="pic" src={BoyImg} alt="" />
              <h3>Jainil Prajapati</h3>
              <button button class="navBtn">
                Frontend Developer
              </button>
            </div>

            <div class="features-card flex">
              <img class="pic" src={BoyImg} alt="" />
              <h3>Mit Patel</h3>
              <button button class="navBtn">
                AI Developer
              </button>
            </div>

            <div class="features-card flex">
              <img class="pic" src={GirlImg} alt="" />
              <h3>Barbie Sharma</h3>
              <button button class="navBtn">
                Frontend Developer
              </button>
            </div>

            <div class="features-card flex dev">
              <img class="pic" src={BoyImg} alt="" />
              <h3>Dev Sapariya</h3>
              <button button class="navBtn">
                Backend Developer
              </button>
            </div>

            <div class="features-card flex chintan">
              <img class="pic" src={BoyImg} alt="" />
              <h3>Chintan Patil</h3>
              <button button class="navBtn">
                Backend Developer
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default About;
