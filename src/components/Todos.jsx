import React, { useEffect, useState } from "react";


const Todos = () => {
  // code to fetch and display todos data here
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await res.json();
        setTodos(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTodos();

  }, []);
  return (
    <div>
      <h2>Todos</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>

        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>{todo.completed ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Todos;