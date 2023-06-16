import React from "react";

export const EvtType = Object.freeze({
    Visit: Symbol("visit"),
    Leave: Symbol("leave"),
    CallToAction: Symbol("call_to_action"),
    Register: Symbol("register")
})

export const AddTrackingEvent = (evtType, referrer, target) => {
    let args = {
        referer: referrer,
        target: target
    }
    // we check to make sure we have a valid event type being sent
    if (evtType === EvtType.Visit) {
        args.action = "visit";
    } else if (evtType === EvtType.Leave) {
        args.action = "leaver";
    } else if (evtType === EvtType.Register) {
        args.action = "register"
    } else if (evtType === EvtType.CallToAction) {
        args.action = "call_to_action"
    } else {
        console.log("Invalid event type");
        return
    }

    fetch("http://localhost:8080/tracking", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(args),
    })
}