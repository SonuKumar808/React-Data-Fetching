import React, { useEffect, useState } from "react";
import UserData from "./components/UserData";

const API = "https://jsonplaceholder.typicode.com/users";


const App = () => {

    const [users, setUsers] = useState([]);

    const fetchUser = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            if (data.length > 0) {
                setUsers(data);
            }

            console.log(data);
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        fetchUser(API);
    }, [])
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>City</th>
                </tr>
            </thead>

            <tbody>
                <UserData users={users} />
            </tbody>
        </table>
    )
}

export default App;