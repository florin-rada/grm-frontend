import React from "react";

export const Footer = () => {
    return (
        <section className="bg-slate-900 text-white grid">
            <div className="flex flex-row space-between justify-center gap-5">
                <div className="flex flex-col">
                    <div className="flex flex-col pb-3">
                        <span className="text-xl pb-2">Platform</span>
                        <a href="#">Platform</a>
                        <a href="#">Platform</a>
                        <a href="#">Platform</a>
                    </div>
                    <div className="flex flex-col pb-3">
                        <span className="text-xl pb-2">Pricing</span>
                        <a href="#">View plans</a>
                        <a href="#">Why premium</a>
                        <a href="#">Why unlimited</a>

                    </div>
                    

                </div>
                
                <div className="flex flex-col">
                    <div className="flex flex-col pb-3">
                        <span className="text-xl pb-2">Solutions</span>
                        <a href="#">Runner monitoring</a>
                        <a href="#">Runner management</a>
                        <a href="#">Runner usage statistics</a>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-col pb-3">
                        <span className="text-xl pb-2">Resources</span>
                        <a href="#">Learn</a>
                        <a href="#">Blog</a>
                    </div>

                </div>
                <div className="flex flex-col">
                    <div className="flex flex-col pb-3">
                        <span className="text-xl pb-2">Company</span>
                        <a href="#">About</a>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-col pb-3">
                        <span className="text-xl pb-2">Contact US</span>
                        <a href="#">Get Help</a>
                        <a href="#">Terms of use</a>
                        <a href="#">Privacy Statement</a>
                        <a href="#">Cookie preferences</a>
                    </div>
                </div>
            </div>
        </section>
    )
}