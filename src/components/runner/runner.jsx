import { faGear, faCircleCheck, faXmark, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { RunnerDetails } from "../runner_details/runner_details";

export const Runner = ({name}) => {
    const [showDetails, setShowDetails] = useState(false);
    const onCardClick = (evt) => {
        evt.preventDefault();
        setShowDetails(true);
    }

    const closeRunnerDetails = () => {
        setShowDetails(false);
    }

    return (
        <div className="flex flex-col rounded-lg min-w-min border border-slate-500 dark:border-slate-200 z-0">
            <div onClick={onCardClick} className="flex header border-b border-b-slate-400 p-2 justify-center hover:cursor-pointer">
                <span>{name}</span>
            </div>
            <div className="flex flex-col z-0">
                <div className="px-1 flex flex-row justify-start align-text-top p-1">
                    <div>
                        <FontAwesomeIcon color="blue" spin icon={faGear}></FontAwesomeIcon>
                    </div>
                    <div className="pl-1">
                    <span>Job 5</span>
                    </div>
                </div>
                <div className="px-1 flex flex-row justify-start align-text-top p-1">
                    <div>
                        <FontAwesomeIcon color="blue" spin icon={faGear}></FontAwesomeIcon>
                    </div>
                    <div className="pl-1">
                    <span>Job 4</span>
                    </div>
                </div>
                <div className="px-1 flex flex-row justify-start align-text-top p-1">
                    <div>
                        <FontAwesomeIcon color="green" icon={faCircleCheck}></FontAwesomeIcon>
                    </div>
                    <div className="pl-1">
                        <span>Job 3</span>
                    </div>
                </div>
                <div className="px-1 flex flex-row justify-start align-text-top p-1">
                    <div>
                        <FontAwesomeIcon color="green" icon={faCircleCheck}></FontAwesomeIcon>
                    </div>
                    <div className="pl-1">
                    <span>Job 2</span>
                    </div>
                </div>
                <div className="px-1 flex flex-row justify-start align-text-top p-1">
                    <div>
                        <FontAwesomeIcon color="red" icon={faCircleXmark}></FontAwesomeIcon>
                    </div>
                    <div className="pl-1">
                    <span>Job 1</span>
                    </div>
                </div>
            </div>
            <RunnerDetails show={showDetails} handleClose={closeRunnerDetails}/>
        </div>
    )
}