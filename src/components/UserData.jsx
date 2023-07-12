import React from "react";

const UserData = ({ users }) => {
    return (
        <table className="data-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>City</th>
                </tr>
            </thead>
            <tbody>
                {users.map((currUser) => {
                    const { id, name, email, address } = currUser;
                    return (
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>{email}</td>
                            <td>{address.city}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    )
}


export default UserData;