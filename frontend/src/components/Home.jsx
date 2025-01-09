// src/components/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Welcome to the Tourist Map App</h1>
      <Link to="/map">View Tourist Places on Map</Link>
    </div>
  );
};

export default Home;
