import React from "react";

export const Description = () => {
    return <div className="m-3 flex flex-grid bg-gradient-to-tr from-white via-65% via-sky-200 to-orange-200 ">
        <div className="flex flex-row p-2 space-x-5">
            <div className="flex flex-col basis-1/3">
                <div>
                    <h1 className="text-3xl">Gitlab runner monitoring made easy</h1>
                    <p>RunnerWatch: Monitor GitLab runners, track job statuses, modify settings, and access powerful statistics. Optimize your CI/CD pipeline with real-time insights on average job durations, failure rates, active runners, and more. Take control and boost your GitLab workflow with ease. Get RunnerWatch now!</p>
                </div>
                <div>
                    <span>The timer</span>
                </div>
            </div>
            <div className="flex-col basis-1/2">
                <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum obcaecati optio, similique molestiae adipisci nulla asperiores repudiandae commodi iusto voluptatem alias mollitia vitae? Tenetur modi nobis quas at error adipisci.</span>
            </div>
        </div>
    </div>
}