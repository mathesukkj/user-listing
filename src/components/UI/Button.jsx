import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
    font: inherit;
    border: 2px solid #2f002f;
    background: #4f005f;
    color: white;
    padding: 0.25rem 1rem;
    cursor: pointer;

    :hover,
    :active {
        background: #741188;
        border-color: #741188;
    }

    :focus {
        outline: none;
    }
`;

export default function Button(props) {
    return (
        <ButtonStyled type={props.type || "button"} onClick={props.onClick}>
            {props.text}
        </ButtonStyled>
    );
}
