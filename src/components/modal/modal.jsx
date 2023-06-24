import React, { useEffect } from "react";
import { onceSupported } from "../../utils/constants/constants";


export const Modal = ({isDialog, show, handleOnClose}) => {
    const onExit = (evt) => {
        if (!show) {
            return;
        }
        if (evt.type == "click") {
            evt.preventDefault();
            handleOnClose();

        } else if (evt.type == "keyup") {
            console.log(evt.key);
            if (!evt.isComposit && evt.key == "Escape") {
                handleOnClose();
            }
        }
    }
    useEffect(() => {
        if (show) {
            document.addEventListener("keyup", onExit, onceSupported ? {once : true} : false);
        }
    }, [show])
    return (
        <>
            {show ? 
            <>
                <div className="flex justify-center fixed top-0 left-0">
                    <div onClick={onExit} className="fixed w-screen h-screen overflow-auto z-30 bg-slate-500/40">
                        
                    </div>
                    <div className="flex justify-center bg-slate-100 w-max h-max mt-10 rounded-md">
                        <div className="title z-40 p-2 border-b-slate-900">
                            Runner Name
                        </div>
                        <div className="body flex flex-col p-2">
                            <div>Col 1</div>
                            <div>Col 2</div>
                            <div>Col 3</div>
                            <div>Col 4</div>
                            <div>Col 5</div>
                        </div>

                    </div>
                </div>
            </> : null
            }
        </>
    )
}