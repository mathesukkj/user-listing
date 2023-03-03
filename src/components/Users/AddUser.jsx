import React, { useState } from "react";
import Card from "./../UI/Card";
import styled from "styled-components";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

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
    const [error, setError] = useState("");

    function handleInputChange(e) {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    }

    function handleAddUser(e) {
        e.preventDefault();
        if (
            !formValues.username.trim().length ||
            !formValues.age.trim().length
        ) {
            setError({
                title: "Invalid input",
                text: "Enter a valid value instead",
            });
            return;
        }
        if (formValues.age < 1) {
            setError({
                title: "Invalid age",
                text: "Enter a value greater than 1 instead",
            });
            return;
        }
        setError();
        props.onAddUser(formValues.username, formValues.age);
        setFormValues(initialFormValues);
    }

    function handleConfirm() {
        setError();
    }

    return (
        <div>
            {error && (
                <ErrorModal
                    onConfirm={handleConfirm}
                    title={error.title}
                    text={error.text}
                />
            )}

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
                    <Button type="submit" text="Add User" />
                </Form>
            </Card>
        </div>
    );
}
