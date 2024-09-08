import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const App = () => {
  const [username, setUsername] = useState("");
  const [selectedPage, setSelectedPage] = useState("admin-layout");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username) {
      localStorage.setItem("username", username);
      localStorage.setItem("isAuthenticated", true);
      navigate(`/${selectedPage}`);
    } else {
      alert("Ismingizni kiriting");
    }
  };

  return (
    <div>
      <h2>Login sahifasi</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Ism: </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Ismingizni kiriting"
            required
          />
        </div>
        <div>
          <label>Marshrutni tanlang: </label>
          <select
            value={selectedPage}
            onChange={(e) => setSelectedPage(e.target.value)}
          >
            <option value="admin-layout">Admin Dashboard</option>
            <option value="cars">Mashinalar</option>
            <option value="admin-list">Adminlar ro'yxati</option>
            <option value="user-layout">User Dashboard</option>
            <option value="products">Mahsulotlar</option>
            <option value="user-list">Foydalanuvchilar ro'yxati</option>
          </select>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default App;
