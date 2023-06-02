import React, { useState, useEffect } from "react";


export const LoadingProgressBar = ({run, totalDuration = 5000, height= "1rem", color="blue"}) => {
    const [width, setWidth] = useState({
        "counter": 0,
        "style": {
            "width": "0%",
            "height": height,
            "backgroundColor": color,
        }
    });
    //const [style, setStyle] = useState({"width": "0%"});
    useEffect(() => {
        if (run) {
            const interval = setInterval(() =>{
                setWidth((prev) => {
                    let counter = prev["counter"];
                    counter++;
                    if (counter > 100) {
                        counter = 0;
                    }
                    return {"counter": counter, "style": {...prev["style"], "width": `${counter}%`}}
                })
            }, Math.floor(totalDuration / 100));
            return () => clearInterval(interval);
        }
    }, [run])
    return (
        <div style={{"height": height}} className="flex progress bg-slate-200 h-4 w-full rounded-md z-0 overflow-hidden">
            <div style={width["style"]} className="flex flex-col justify-center progress-bar transition-width duration-100 ease-in rounded-md z-100"></div>
        </div>
    )
}