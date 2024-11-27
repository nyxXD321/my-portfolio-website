import { MdRemoveRedEye } from "react-icons/md";
import { TiArrowSortedDown } from "react-icons/ti";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h1>
        <span>My Projects. 📺</span>
      </h1>
      <div className="con">
        <div className="pro">
          <h1>Calculator</h1>
          <p>This project was created using react !</p>
          <a
            href="https://calculator-liart-zeta-75.vercel.app/"
            target="_blank"
          >
            View
            <span>
              <MdRemoveRedEye />
            </span>
          </a>
        </div>
        <div className="pro">
          <h1>Quiz App</h1>
          <p>This project was created using react !</p>
          <a
            href="https://react-quiz-app-wheat-five.vercel.app/"
            target="_blank"
          >
            View
            <span>
              <MdRemoveRedEye />
            </span>
          </a>
        </div>
      </div>
      <h1>
        <a href="https://github.com/nyxXD321" target="_blank" className="git">
          View more on GitHub .
        </a>
        <br />
        <a href="#contact" className="down-btn btn2">
          <TiArrowSortedDown />
        </a>
      </h1>
    </div>
  );
};

export default Projects;
