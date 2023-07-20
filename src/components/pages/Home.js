import React from "react";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the JSON Placeholder</h1>
      <p>JSON Placeholder is a fake REST API that is primarily used for prototyping and testing.</p>
      <p>
        To view the tables for <span className="highlight">"Users"</span> and{" "}
        <span className="highlight">"Todos"</span>, please click on the links in the navbar above.
      </p>
    </div>
  );
};

export default Home;
