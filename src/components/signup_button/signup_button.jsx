import React from "react";
import { AddTrackingEvent, EvtType } from "../tracking/tracking";

export const SignupButton = ({id}) => {

    const onClickTracking = (evt) => {
        AddTrackingEvent(EvtType.CallToAction, document.referrer, `${id}`)
    }
    return (
        <a onClick={onClickTracking} className="py-1 px-2 text-xl rounded-md border transition-colors hover:bg-slate-100 hover:border-slate-950 hover:text-slate-950 border-slate-100 bg-slate-950 text-white" href="/signup_waitlist">Join waitlist</a>
    )
}