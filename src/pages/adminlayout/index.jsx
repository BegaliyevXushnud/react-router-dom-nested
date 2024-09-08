import React from "react";
import { useNavigate } from "react-router-dom";

const AdminLayout = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("username");
    navigate("/login");
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Xush kelibsiz, {username}!</h2>
      <h3 className="text-lg mb-4">Bu Admin Dashboard sahifasi</h3>
      <button
        onClick={handleLogout}
        className="py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Chiqish
      </button>
    </div>
  );
};

export default AdminLayout;
