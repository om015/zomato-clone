import React from "react";

const AuthForm = ({ type, setShowForm }) => {
  return (
    <div className="form-container">
      <h2>{type === "login" ? "Login" : "Sign Up"}</h2>
      <input type="text" placeholder="Enter ID" />
      <input type="password" placeholder="Enter Password" />
      <button onClick={() => setShowForm(false)}>Submit</button>
    </div>
  );
};

export default AuthForm;
