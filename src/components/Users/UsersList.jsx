import React from "react";
import styled from "styled-components";
import Card from "../UI/Card";

const UsersListContainer = styled.div`
    width: 90%;
    margin: 0.5rem auto;
    max-width: 40rem;

    ul {
        list-style: none;
        padding: 1rem 0;
    }

    li {
        border: 1px solid #ccc;
        margin: 0.5rem 0;
        padding: 0.5rem;
    }
`;

export default function UsersList(props) {
    return (
        <Card>
            <UsersListContainer>
                <ul>
                    {props.users.map((user) => (
                        <li key={user.key}>
                            {user.name} ({user.age} years old)
                        </li>
                    ))}
                </ul>
            </UsersListContainer>
        </Card>
    );
}
