import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faUser } from "@fortawesome/free-solid-svg-icons";
import { HeaderElement } from "../header/headerElement";
import {Link} from "react-router-dom";


export const Menu = ({selected}) => {
    const settingsClassName = selected.startsWith("/settings") ? "selected": "";
    const reportsClassName = selected.startsWith("/reports") ? "selected": "";
    const profileClassName = selected.startsWith("/profile") ? "selected": "";

    return (
        <div className="sticky top-0 bg-white flex flex-row justify-center space-x-4 py-3 px-4 items-center">
            <HeaderElement><Logo></Logo></HeaderElement>
            <HeaderElement ><Link className={reportsClassName} to="/reports">Reports</Link></HeaderElement>
            <div className="flex-grow"></div>
            <HeaderElement>
                <Link className={settingsClassName} to="/settings">
                    <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>
                </Link>
            </HeaderElement>
            <HeaderElement>
                <Link className={profileClassName} to="/profile">
                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                </Link>
            </HeaderElement>
        </div>
    )
}