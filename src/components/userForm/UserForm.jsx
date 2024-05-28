import React, { useState } from "react";

const UserForm = ({ onUserSubmit }) => {
  const [username, setUsername] = useState("");

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUserSubmit(username);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter GitHub username.."
        value={username}
        onChange={handleInputChange}
      />
      <button type="submit">Confirm</button>
    </form>
  );
};

export default UserForm;
