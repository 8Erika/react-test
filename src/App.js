import React from "react";
import { useState } from "react";
import "./App.css";
import UserForm from "./components/userForm/UserForm";
import UserInfo from "./components/userInfo/UserInfo";
import UserRepo from "./components/userRepo/UserRepo";

const App = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserSubmit = (username) => {
    setSelectedUser(username);
  };
  const handleReset = () => {
    setSelectedUser(null);
  };
  return (
    <div className="App">
      <h1>User data:</h1>
      <UserForm onUserSubmit={handleUserSubmit} />
      {selectedUser && <UserInfo username={selectedUser} />}
      {selectedUser && <UserRepo username={selectedUser} />}
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default App;
