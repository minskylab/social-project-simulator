import React, { FunctionComponent } from "react";
import styled from "styled-components";

const Button = styled.button`
    padding: 10px 12px;
    background-color: #ffdf53;
    font-family: "Karla", sans-serif;
    font-size: 16px;
    border: none;
    border-radius: 24px;
    transition: 0.3s;

    :focus {
        outline: 0;
    }

    :hover {
        background-color: #f7cf1e;
        cursor: pointer;
    }
`;

interface MinkyButtonProps {
    text: string;
}

const Minskybutton: FunctionComponent<MinkyButtonProps> = props => {
    return <Button>{props.text.toUpperCase()}</Button>;
};

export default Minskybutton;
