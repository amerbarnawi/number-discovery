import React from "react";
import "../Footer/Footer.css";
import { MdEmail } from "react-icons/md";
import { BsGithub, BsLinkedin, BsFileEarmarkPersonFill } from "react-icons/bs";

function Footer() {
  return (
    <div className="footer">
      <div className="contact-details">
        <a
          target="_blank"
          href="mailto:barnawi.amer@yahoo.com"
          rel="noopener noreferrer"
        >
          <MdEmail className="contact" />
        </a>
        <a
          target="_blank"
          href="https://github.com/amerbarnawi"
          rel="noopener noreferrer"
        >
          <BsGithub className="contact" />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/amer-barnawi-150979104/"
          rel="noopener noreferrer"
        >
          <BsLinkedin className="contact" />
        </a>
        <a
          target="_blank"
          href="https://abarnawi.netlify.app/"
          rel="noopener noreferrer"
        >
          <BsFileEarmarkPersonFill className="contact" />
        </a>
      </div>
      <p>
        &copy;2022 <span>Amer Barnawi</span>, All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
