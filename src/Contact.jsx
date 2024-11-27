import { FaGithubSquare } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <p>© 2024 Thanuja Dilum. All rights reserved. .</p>
      <div className=" cons">
        <a href="https://github.com/nyxXD321" target="_blank">
          GitHub <FaGithubSquare />
        </a>
        <a href="https://whatsapp.com/" target="_blank">
          WhatsApp <BsWhatsapp />
        </a>
        <a href="https://facebook.com/" target="_blank">
          FaceBook <FaFacebookSquare />
        </a>
        <a href="mailto:nyxxd222@gmail.com" target="_blank">
          Email <MdAttachEmail />
        </a>
      </div>
    </div>
  );
};

export default Contact;
