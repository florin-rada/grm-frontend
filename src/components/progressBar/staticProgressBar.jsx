import React from "react";

export const StaticProgressBar = ({percentage = 0, height= "1rem", color="blue"}) => {
    return (
        <div style={{"height": height}} className="flex progress bg-slate-200 bg-transparent h-4 w-full rounded-md z-0 overflow-hidden">
            <div style={{"height": height, "width": `${percentage}%`, "backgroundColor": color}} className="flex flex-col justify-center progress-bar transition-width duration-100 ease-in rounded-md z-100"></div>
        </div>
    )
}