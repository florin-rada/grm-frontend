import React from "react";

export const HeaderElement = (props) => {
    return (
        <div className="text-l text-slate-500 hover:text-black">
            {props.children}
        </div>
    )
}