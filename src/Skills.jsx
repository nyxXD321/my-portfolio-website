import { BsTerminalFill } from "react-icons/bs";
import { AiFillDatabase } from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa6";
import { TiArrowSortedDown } from "react-icons/ti";

const Skills = () => {
  return (
    <div id="skills" className="skills">
      <h1>
        <span>My Skills. 💪</span>
      </h1>
      <div className="skill-con">
        <div className="skil">
          <a
            href="https://en.wikipedia.org/wiki/Frontend_and_backend"
            target="_blank"
          >
            <BsTerminalFill />
          </a>
          <h1>Back-end Development</h1>
          <p>Node.js & Express.js</p>
        </div>
        <div className="skil">
          <a
            href="https://en.wikipedia.org/wiki/Front-end_web_development"
            target="_blank"
          >
            <FaLaptopCode />
          </a>
          <h1>Front-end Development</h1>
          <p>React.js & Vue.js</p>
        </div>
        <div className="skil">
          <a href="https://en.wikipedia.org/wiki/Database" target="_blank">
            <AiFillDatabase />
          </a>
          <h1>Database Management</h1>
          <p>MySQL & mongoDB</p>
        </div>
      </div>
      <a href="#projects" className="down-btn">
        <TiArrowSortedDown />
      </a>
    </div>
  );
};

export default Skills;
