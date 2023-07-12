import React, { useEffect, useState } from "react";
import UserData from "./components/UserData";
import Todos from "./components/Todos";


const API = "https://jsonplaceholder.typicode.com/users";


const App = () => {

    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState("users");

    const handleNavigation = (page) => {
        setCurrentPage(page);
    };


    const fetchUser = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            if (data.length > 0) {
                setUsers(data);
            }
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        fetchUser(API);
    }, []);
    return (
        <div>
            <nav className="navigation">
                <button onClick={() => handleNavigation("users")}>Users</button>
                <button onClick={() => handleNavigation("todos")}>Todos</button>
            </nav>
            {currentPage === "users" ? (
                <UserData users={users} />
            ) : (
                <Todos />
            )}
        </div>
    );
};

export default App;