import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { Project } from "../logic";

interface ProjectTimelineProps {
    project: Project;
}

const ProjectTimeline: FunctionComponent<ProjectTimelineProps> = props => {
    return (
        <div>
            <div>
                <h2>Ideation Stage</h2>
                <div>
                    <h3> Start </h3>
                    <p>{new Date().toString()}</p>
                </div>
                <div>
                    <h3> Content </h3>
                    <div>
                        {props.project.ideationStages.map(stage => {
                            return (
                                <div>
                                    <div>{stage.name}</div>
                                    <div>{stage.duration}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div>
                <h2>Development Stage</h2>
                <div>
                    <h3> Start </h3>
                    <p>{new Date().toString()}</p>
                </div>
                <div>
                    <h3> Content </h3>
                    <div>
                        {props.project.features.map(feature => {
                            return (
                                <div>
                                    <div>{feature.name}</div>
                                    <div>{feature.duration}</div>
                                    <div>{feature.costByHour}</div>
                                    <div>{feature.difficult}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div>
                <h2>Production Gap</h2>
                <div>
                    <h3> Start </h3>
                    <p>{new Date().toString()}</p>
                </div>
            </div>
            <div>
                <h2>Retribution Stage</h2>
                <div>
                    <h3> Start </h3>
                    <p>{new Date().toString()}</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectTimeline;
