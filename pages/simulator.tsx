import React from "react";
import { NextPage } from "next";
import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import {Project} from "../logic";

enum SimulatorStep {
    IntroducingDates,
    Simulating
}


const Simulator: NextPage = () => {
    const projectName = "Sentido App";

    const [step, setStep] = useState<SimulatorStep>(SimulatorStep.IntroducingDates);
    const [project, setProject] = useState<Project>(new Project(projectName));
    console.log(step);

    return (
        <div>
            <div>{step}</div>
            <div>
                <ProjectCard project={project}/>
            </div>
        </div>
    );
};

export default Simulator;
