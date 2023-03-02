import React, { useState } from "react";
import Card from "./../UI/Card";
import styled from "styled-components";
import Button from "../UI/Button";

const Form = styled.form`
    margin: 0.5rem auto;
    width: 90%;
    padding: 1rem 0;
    max-width: 40rem;
    font-size: 1.2rem;

    label {
        display: block;
        font-weight: bold;
        margin-bottom: 0.5rem;
    }

    input {
        font: inherit;
        display: block;
        width: 100%;
        border: 1px solid #ccc;
        padding: 0.15rem;
        margin-bottom: 1.5rem;
    }

    input:focus {
        outline: none;
        border-color: #4f005f;
    }
`;

export default function AddUser(props) {
    const initialFormValues = {
        username: "",
        age: "",
    };

    const [formValues, setFormValues] = useState(initialFormValues);

    function handleInputChange(e) {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    }

    function handleAddUser(e) {
        e.preventDefault();
        setFormValues(initialFormValues);
        console.log(formValues);
    }

    function handleButtonClick() {}

    return (
        <Card>
            <Form onSubmit={handleAddUser}>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    value={formValues.username}
                    onChange={handleInputChange}
                />
                <label htmlFor="age">Age (Years)</label>

                <input
                    type="number"
                    name="age"
                    id="age"
                    value={formValues.age}
                    onChange={handleInputChange}
                />
                <Button
                    type="submit"
                    onClick={handleButtonClick}
                    text="Add User"
                />
            </Form>
        </Card>
    );
}
