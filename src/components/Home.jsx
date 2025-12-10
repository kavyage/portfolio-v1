import React from "react";
import pic from "../../public/photo5.jpg";
import { FaBlogger, FaLinkedin, FaMedium, FaGithub, FaHandsHelping, FaBriefcase, FaTools } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import { useNavigate } from "react-router-dom";
import Collab from "./Collab"; // correct local import (same folder as Home.jsx)

function Home() {
  const navigate = useNavigate();

  const cards = [
    {
      title: "Experience",
      path: "/experience",
      description: "View my work experience and resume.",
      icon: <FaBriefcase className="text-3xl text-red-600 mr-2" />,
    },
    {
      title: "Git Repos",
      path: "/gitrepos",
      description: "Check out my GitHub repositories.",
      icon: <FaGithub className="text-3xl text-gray-800 mr-2" />,
    },
    {
      title: "Tech Stack",
      path: "/techstack",
      description: "See the technologies I work with.",
      icon: <FaTools className="text-3xl text-green-600 mr-2" />,
    },
    // Collab card removed intentionally
  ];

  return (
    <>
      {/* Upper Section */}
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
        <div className="flex flex-col md:flex-row">
          {/* Intro Text Section */}
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome to My Space</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              {/* <h1>I'm a </h1> */}
                <h1>I'm a&nbsp;</h1>
              <ReactTyped
                className="text-red-700 font-bold"
                strings={[
                  "SDET", "Software Engineer", "Automation Developer", "QA", "Software Tester",
          "Freelancer", "Mentor", "Open Source Contributor", "Educator",
          "Content/Technical Writer", "Type Writer",  "Traveler", "Travel Advisor"
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              👋 I’m G E Kavya — an SDET who blends logic with creativity.
              I build reliable, high-quality software through thoughtful testing, smart automation, and streamlined processes. My experience spans manual and automation testing, across both functional and non-functional areas. With hands-on work in UI testing, API validation, and CI/CD/CT pipelines, I enjoy turning complexity into clarity and ensuring every release is stable, scalable, and user-ready.
              <br /><br />
              Outside the world of code, I’m a solo backpacker, a typewriter lover, and a writer who enjoys shaping thoughts into words. I travel with purpose — often volunteering, teaching, or simply connecting with people who offer new perspectives.
              <br /><br />
              My work and my journeys share one belief:
              Observe deeply. Solve thoughtfully. Improve continuously.
            </p>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1 flex flex-col items-center">
            <img src={pic} className="rounded-full md:w-[450px] md:h-[450px]" alt="Profile" />
            {/* <br /> */}
            {/* Social Media under photo */}
            <div className="flex justify-center mt-6 space-x-5">
              <a href="https://www.linkedin.com/in/kavyage" target="_blank" rel="noreferrer">
                <FaLinkedin className="text-2xl cursor-pointer" />
              </a>
              <a href="https://github.com/kavyage/" target="_blank" rel="noreferrer">
                <FaGithub className="text-2xl cursor-pointer" />
              </a>
              <a href="https://medium.com/@krazylazykavy" target="_blank" rel="noreferrer">
                <FaMedium className="text-2xl cursor-pointer" />
              </a>
              <a href="https://krazylazykavy.blogspot.com/" target="_blank" rel="noreferrer">
                <FaBlogger className="text-2xl cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Cards */}
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
        {/* changed to md:grid-cols-3 so 3 cards align correctly */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className="p-6 bg-slate-100 rounded-2xl shadow-md hover:shadow-lg cursor-pointer text-center transition transform hover:scale-105 flex flex-col items-center"
              onClick={() => navigate(card.path)}
            >
              <div className="flex items-center mb-2">
                {card.icon}
                <h2 className="font-bold text-xl">{card.title}</h2>
              </div>
              <p className="text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Collab section rendered here using your existing Collab component */}
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
        <Collab />
      </div>

      <hr />
    </>
  );
}

export default Home;
