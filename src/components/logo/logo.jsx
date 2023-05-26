import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGitlab} from '@fortawesome/free-brands-svg-icons';

export const Logo = () => {
    return (
        <a href="/" className=""><h3><FontAwesomeIcon size="xl" icon={faGitlab}></FontAwesomeIcon></h3></a>
    )
}