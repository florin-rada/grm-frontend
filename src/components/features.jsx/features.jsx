import React from "react";
import { LoadingProgressBar } from "../progressBar/loadingProgressBar";
import { SignupButton } from "../signup_button/signup_button";

export const Features = () => {


    return (
        <section className="flex flex-row justify-center">
            <div className="flex flex-grow"></div>
            <div className="flex flex-col flex-grow basis-1/3">
                <div className="flex flex-row">
                    <div className="flex flex-col basis-1/3 justify-center">
                        <div className="p-2">
                            <h2 className="text-2xl">Centralized Runner Management</h2>
                        </div>
                        <div className="p-2">
                            <h3 className="text-xl">View and manage all your GitLab runners in one place.</h3>
                        </div>
                        <div className="p-2"><SignupButton id="2"></SignupButton></div>
                    </div>
                    <div className="flex flex-col basis-2/3">
                        <img src="public/45267e.svg" alt="my_feature_image"></img>
                    </div>
                </div>
                <div className="flex flex-row min-h-[1rem] gap-4">
                    <LoadingProgressBar run={false} height="0.2rem" color={"black"}></LoadingProgressBar>
                    <LoadingProgressBar run={false} height="0.2rem" color={"black"}></LoadingProgressBar>
                    <LoadingProgressBar run={false} height="0.2rem" color={"black"}></LoadingProgressBar>
                    <LoadingProgressBar run={false} height="0.2rem" color={"black"}></LoadingProgressBar>
                    <LoadingProgressBar run={false} height="0.2rem" color={"black"}></LoadingProgressBar>
                    <LoadingProgressBar run={false} height="0.2rem" color={"black"}></LoadingProgressBar>
                    <LoadingProgressBar run={false} height="0.2rem" color={"black"}></LoadingProgressBar>
                    <LoadingProgressBar run={false} height="0.2rem" color={"black"}></LoadingProgressBar>
                    
                </div>
                <div className="">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem expedita molestias natus excepturi quidem possimus harum nisi. Fuga numquam, beatae nesciunt maiores ad pariatur, quasi, rerum praesentium dignissimos cumque provident?</p>
                </div>
            </div>
            <div className="flex flex-grow"></div>
        </section>
    )
}