import React from "react";
import { LoadingProgressBar } from "../progressBar/loadingProgressBar";
import { StaticProgressBar } from "../progressBar/staticProgressBar";
import { SignupButton } from "../signup_button/signup_button";

export const Description = () => {
    return <div className="m-3 flex flex-grid bg-gradient-to-tr from-white via-65% via-sky-200 to-orange-200 ">
        <div className="flex flex-row p-2 space-x-5">
            <div className="flex flex-grow"></div>
            <div className="flex flex-col basis-1/2 justify-center">
                <div>
                    <h1 className="text-3xl">Gitlab runner monitoring made easy</h1>
                    <h2 className="text-xl">RunnerWatch: Monitor GitLab runners, track job statuses, modify settings, and access powerful statistics. Optimize your CI/CD pipeline with real-time insights on average job durations, failure rates, active runners, and more. Take control and boost your GitLab workflow with ease. Get RunnerWatch now!</h2>
                    
                </div>
                <div className="flex justify-center">
                    <SignupButton></SignupButton>
                </div>
            </div>
            <div className="flex flex-grow"></div>
        </div>
    </div>
}