import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
    background-color: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    max-width: 50rem;
    margin: 2rem auto;
    padding: 1.5rem 0rem;
`;

export default function Card(props) {
    return <CardContainer>{props.children}</CardContainer>;
}
