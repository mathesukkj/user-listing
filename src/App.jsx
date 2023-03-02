import "./App.css";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import { useState } from "react";

function App() {
    const [usersList, setUsersList] = useState([]);

    function handleAddUser(name, age) {
        setUsersList((prevState) => {
            return [...prevState, { name, age, key: Math.random() }];
        });
    }

    return (
        <div className="App">
            <AddUser onAddUser={handleAddUser} />
            <UsersList users={usersList} />
        </div>
    );
}

export default App;
