import React from "react";
import { NextPage } from "next";
import { useState } from "react";

enum SimulatorStep {
    IntroducingDates,
    Simulating
}

const Simulator: NextPage = () => {
    const [step, setStep] = useState<SimulatorStep>(SimulatorStep.IntroducingDates);

    console.log(step);

    return (
        <div>
            <div>{step}</div>
        </div>
    );
};

export default Simulator;
