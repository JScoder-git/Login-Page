import React from "react";
import logo from "../assets/base-logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import '../App.css';

export const LeftBox = () => {
  return (
    <div className="relative w-[50vw] h-screen bg-[#605bff] flex flex-col justify-center items-center rectangle z-10">
      <img
        className="absolute top-4 left-4 md:w-20 md:h-18 lg:w-20 lg:h-18 xl:w-20 xl:h-18 z-10"
        alt="Logo"
        src={logo}
      />
      <h1 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl z-10">BASE</h1>
      <div className="absolute bottom-12 flex space-x-6 z-10">
        <FontAwesomeIcon
          icon={faGithub}
          size="2x"
          className="text-white text-2xl md:text-3xl lg:text-4xl"
        />
        <FontAwesomeIcon
          icon={faLinkedin}
          size="2x"
          className="text-white text-2xl md:text-3xl lg:text-4xl"
        />
        <FontAwesomeIcon
          icon={faTwitter}
          size="2x"
          className="text-white text-2xl md:text-3xl lg:text-4xl"
        />
        <FontAwesomeIcon
          icon={faDiscord}
          size="2x"
          className="text-white text-2xl md:text-3xl lg:text-4xl"
        />
      </div>
    </div>
  );
};
