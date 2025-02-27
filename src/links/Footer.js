import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faInstagram,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";

import "../App.css";

export default function Footer() {
    return (
        <div>
            <div className="letter">
                <h4>
                    If you would like to contribute additional sites, feel free
                    to leave a pull request on Github.
                </h4>
            </div>
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
        </div>
    );
}
