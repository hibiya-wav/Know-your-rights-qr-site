import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faInstagram,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";

import "../App.css"

export default function Footer() {
    return (
        <div className="social-icons">
            <a href="https://x.com/hibiya_wav" className="twitter">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a
                href="https://www.instagram.com/hibiya.wav/"
                className="instagram"
            >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://github.com/hibiya-wav" className="github">
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
        </div>
    );
}