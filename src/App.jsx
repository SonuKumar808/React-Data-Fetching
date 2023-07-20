import React, { useEffect, useState } from "react";
import UserData from "./components/UserData";
import Todos from "./components/Todos";
import Navbar from "./components/Navbar"; 

const API_USERS = "https://jsonplaceholder.typicode.com/users";

const App = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState("users");

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
    fetchUser(API_USERS);
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {/* Pass onPageChange to Navbar */}
      <Navbar onPageChange={handlePageChange} />
      {currentPage === "users" ? <UserData users={users} /> : <Todos />}
    </div>
  );
};

export default App;
