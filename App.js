import React, { useState } from "react";
import "./styles.css";
import Header from "./Header";
import AuthForm from "./AuthForm";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <div>
      <Header setShowLogin={setShowLogin} setShowSignup={setShowSignup} />
      <div className="image-container">
        <img
          src="https://b.zmtcdn.com/data/pictures/chains/0/18365240/a8c84349c1138e70cf3870a850f5e29d_o2_featured_v2.jpg"
          alt="Restaurant"
        />
      </div>
      <h2 className="header-text">Discover the best food & drinks in Pune</h2>
      {showLogin && <AuthForm type="login" setShowForm={setShowLogin} />}
      {showSignup && <AuthForm type="signup" setShowForm={setShowSignup} />}
    </div>
  );
};

export default App;

