import { FaDev } from "react-icons/fa6";

import { FaInfoCircle } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { RiContactsBook3Fill } from "react-icons/ri";

const Welcome = () => {
  return (
    <div className="Welcome" id="home">
      <div className="nav">
        <div className="logo">
          <h1>
            <FaDev /> <span>Portfolio.</span>
          </h1>
        </div>
        <nav className="nav-bar">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact" id="contact-btn">
            Contact me
          </a>
        </nav>
      </div>
      <div className="wel-body">
        <h1 className="moto">
          Setting the <br />
          <span className="cr">Standard for , 🔥</span>
          <br /> <span className="pr">Professional</span> Web Design. <br />
          <p className="moto-p">Hello and Welcome to my Portfolio . ❤️</p>
        </h1>
        <div className="name">
          <p>
            Full stack web development involves <br /> building both the
            front-end <br />
            (user interface) and back-end <br /> (server, database) of web
            applications. <br /> It requires knowledge of technologies <br />{" "}
            like HTML, CSS, JavaScript, and <br /> server-side languages.
          </p>

          <div className="logos">
            <a href="https://github.com/" target="_blank">
              <FaGithubSquare />
            </a>
            <a href="https://whatsapp.com/" target="_blank">
              <BsWhatsapp />
            </a>
            <a href="https://facebook.com/" target="_blank">
              <FaFacebookSquare />
            </a>
            <a href="https://mail.google.com/" target="_blank">
              <MdAttachEmail />
            </a>
          </div>

          <div className="but">
            <a href="#about" className="about-btn">
              About me
              <span className="dd">
                <FaInfoCircle />
              </span>
            </a>
            <a href="#contact" className="con-btn">
              <RiContactsBook3Fill />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
