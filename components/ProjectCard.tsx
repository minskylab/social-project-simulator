import React, { FunctionComponent, useEffect, useState } from "react";
import styled from "styled-components";
import { Project } from "../logic";
import MinskyInput from "./MinskyInput";

interface ProjectCardProps {
    project: Project;
}

interface NewFeatureState {
    name?: string;
    costByHour?: number;
    duration?: number;
    difficult?: number;
}

const NewFeatureBox = styled.div`
    max-width: 24em;
`;

const ProjectCard: FunctionComponent<ProjectCardProps> = props => {
    const [newFeature, setNewFeature] = useState<NewFeatureState>({ difficult: 0.5 });

    useEffect(() => {
        console.log("project prop updated");
    }, [props.project]);

    return (
        <div>
            <div>
                <div>Project "{props.project.name}"</div>
                <ul>
                    {props.project.features.map(f => {
                        return <li>{f.name}</li>;
                    })}
                </ul>
            </div>
            <NewFeatureBox>
                <MinskyInput
                    type={"text"}
                    value={newFeature.name}
                    onChange={(val: string) => setNewFeature({ name: val })}
                    placeholder={"Feature name"}
                    label={"Name"}
                />
                <MinskyInput
                    type="number"
                    value={newFeature.costByHour}
                    placeholder={"Cost by hour"}
                    onChange={(val: string) => setNewFeature({ costByHour: Number.parseInt(val) })}
                    label={"Cost by hour"}
                />
                <MinskyInput
                    type="number"
                    value={newFeature.duration}
                    placeholder={"Feature duration"}
                    onChange={(val: string) => setNewFeature({ duration: Number.parseInt(val) })}
                    label={"Duration (in days)"}
                />
                <MinskyInput
                    type="number"
                    value={newFeature.difficult}
                    placeholder={"Feature difficult"}
                    onChange={(val: string) => setNewFeature({ difficult: Number.parseInt(val) })}
                    label={"Difficult"}
                />
            </NewFeatureBox>
        </div>
    );
};

export default ProjectCard;
