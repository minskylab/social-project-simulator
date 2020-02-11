import styled from "styled-components";
import React, { ChangeEventHandler, FunctionComponent, useState } from "react";

interface MinskyInputProps {
    value: any;
    onChange: (newVal: string) => void;
    type: "text" | "number" | "password" | "tel";
    placeholder?: string;
    label?: string;
}

const Input = styled.input`
    background-color: #fffcf0;
    font-size: 16px;
    border: 0.5px solid #fffcf0;
    border-radius: 8px;
    padding: 12px 14px;
    font-family: "Karla", sans-serif;
    color: #1b1b1b;
    transition: 0.3s;

    ::placeholder {
        color: #5b5b5b;
    }

    :focus {
        outline: none;
        /* border: 0.5px solid #1b1b1b; */
        /* box-shadow: 0 0 0.5px 0.5px #ffc48244; */
        background-color: #fff6d2;
    }

    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    ::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`;

const InputWrapper = styled.div`
    display: flex;
    flex-flow: column;
    font-family: "Karla", sans-serif;
    padding: 4px 0;
    margin-top: 8px;
`;

interface LabelProps {
    focus?: boolean;
}

const Label = styled.label<LabelProps>`
    font-size: 12px;
    transition: 0.3s;
    color: ${props => (props.focus ? "#1b1b1b" : "#485667")};
    margin-bottom: 2px;
    /* margin-left: 8px; */
`;

const MinskyInput: FunctionComponent<MinskyInputProps> = props => {
    const [focus, setFocus] = useState<boolean>(false);
    return (
        <InputWrapper>
            {props.label ? <Label focus={focus}> {props.label} </Label> : null}
            <Input
                type={props.type}
                value={props.value}
                placeholder={props.placeholder}
                onChange={e => props.onChange(e.target.value)}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
            />
        </InputWrapper>
    );
};

export default MinskyInput;
