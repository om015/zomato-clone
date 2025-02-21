import React from "react";

const Header = ({ setShowLogin, setShowSignup }) => {
  return (
    <div className="top-bar">
      <div className="get-app">Get the App</div>
      <div className="auth-links">
        <button onClick={() => setShowLogin(true)}>Login</button>
        <button onClick={() => setShowSignup(true)}>Sign Up</button>
      </div>
    </div>
  );
};

export default Header;

