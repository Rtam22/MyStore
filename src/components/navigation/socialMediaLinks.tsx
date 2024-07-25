import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faXTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";

function SocialMediaLinks() {
  return (
    <div className="social-media">
      <a href="/">
        <FontAwesomeIcon
          icon={faInstagram}
          style={{ color: "rgb(231, 231, 231)" }}
          className="fa-lg"
        />
      </a>
      <a href="/">
        <FontAwesomeIcon
          icon={faXTwitter}
          size="lg"
          style={{ color: "rgb(231, 231, 231)" }}
        />
      </a>
      <a href="/">
        <FontAwesomeIcon
          icon={faFacebook}
          size="lg"
          style={{ color: "rgb(231, 231, 231)" }}
        />
      </a>
    </div>
  );
}

export default SocialMediaLinks;
