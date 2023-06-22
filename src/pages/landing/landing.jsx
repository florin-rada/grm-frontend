import React, { useEffect } from "react";
import { Header } from "../../components/header/header";
import { Description } from "../../components/description/description";
import { Features } from "../../components/features.jsx/features";
import { Footer } from "../../components/footer/footer";
import { AddTrackingEvent } from "../../components/tracking/tracking";
import { EvtType } from "../../components/tracking/tracking";

export const Landing = () => {
    
    useEffect(() => {
        window.addEventListener("load", (event) => {
            console.log("page is fully loaded");
            AddTrackingEvent(EvtType.Visit, document.referrer, "/")
          });
    }, [])
    return (
        <>
            <Header></Header>
            <Description></Description>
            {/* <Features></Features> */}
            <Footer></Footer>
        </>
    );
}