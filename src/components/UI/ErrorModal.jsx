import React from "react";
import Button from "./Button";
import styled from "styled-components";

const CardContainer = styled.div`
    background-color: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    max-width: 50rem;
    margin: 2rem auto;
    position: fixed;
    top: 30vh;
    left: 10%;
    width: 80%;
    z-index: 100;
    overflow: hidden;

    header {
        background: #4f005f;
        padding: 1rem;
    }

    header h2 {
        margin: 0;
        color: white;
    }

    div {
        padding: 1rem;
    }

    footer {
        padding: 1rem;
        display: flex;
        justify-content: flex-end;
    }

    @media (min-width: 768px) {
        left: calc(50% - 20rem);
        width: 40rem;
    }
`;

const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 10;
    background: rgba(0, 0, 0, 0.75);
`;

export default function ErrorModal(props) {
    return (
        <div>
            <Backdrop onClick={props.onConfirm} />

            <CardContainer>
                <header>
                    <h2>{props.title}</h2>
                </header>
                <div>
                    <p>{props.text}</p>
                </div>
                <footer>
                    <Button text="Okay" onClick={props.onConfirm} />
                </footer>
            </CardContainer>
        </div>
    );
}
