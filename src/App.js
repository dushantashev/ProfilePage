import Navbar from "./components/Navbar";
import Home from "./components/Home";
import React from "react";
import Hero from "./components/Hero";
import Tehnologies from "./components/Tehnologies";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Contact from "./components/Contact";


export default function App() {
    return (
        <div className=" text-neutral-300 antialiased selection:bg-cyan-50 selection:text-cyan-900">
            <div className="fixed top-0 -z-10 h-full w-full">
                <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
                </div>
            </div>
            <div className="container mx-auto px-16">
                <Navbar />
                <Hero />
                <Home />
                <Tehnologies/>
             <Experience/>
                <Project/>
                <Contact/>
            </div>
        </div>
    );
}
