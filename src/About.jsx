import { IoSettingsOutline } from "react-icons/io5";
import work from "./acc/work.gif";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { RiVuejsFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

const About = () => {
  return (
    <div className="about" id="about">
      <h1>
        <span>About me. 🧒</span>
      </h1>
      <div className="about-con">
        <div className="cont">
          <img src={work} alt="" />
          <h1>Hi I'm Thanuja Dilum</h1>
        </div>
        <p>
          I am a <span className="high">full-stack web developer</span> with
          experience in building dynamic, responsive, and scalable web
          applications. I specialize in <span className="high">both</span>{" "}
          front-end and back-end technologies, working with frameworks like
          React, Node.js, and more.
        </p>
        <div className="mern">
          <a href="https://react.dev/" target="_blank">
            <FaReact />
          </a>
          <a href="https://nodejs.org/en" target="_blank">
            <FaNodeJs />
          </a>
          <a href="https://vuejs.org/" target="_blank">
            <RiVuejsFill />
          </a>
          <a href="https://expressjs.com/" target="_blank">
            <SiExpress />
          </a>
          <a href="https://www.mongodb.com/" target="_blank">
            <SiMongodb />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
