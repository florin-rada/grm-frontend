import React from "react";
import { Logo } from "../logo/logo";
import { HeaderElement } from "./headerElement";

export const Header = () => {
    return (
        <div className="sticky top-0 bg-white flex flex-row justify-center space-x-4 py-3 px-4 items-center">
            <HeaderElement><Logo></Logo></HeaderElement>
            <HeaderElement><a className="hover:bg-slate-100 rounded-md p-1" href="#who_we_are">Who We are</a></HeaderElement>
            <HeaderElement><a className="hover:bg-slate-100 rounded-md p-1" href="#what_we_do">What We Do</a></HeaderElement>
            <div className="flex-grow"></div>
            <HeaderElement><a className="p-1 text-xl rounded-md hover:bg-slate-800 bg-slate-950 text-white" href="/signup_waitlist">Sign up For waitlist</a></HeaderElement>
        </div>
    )
}