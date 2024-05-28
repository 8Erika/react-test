import React, { useState, useEffect } from "react";

const UserInfo = ({ username }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error("Error getting user:", error));
  }, [username]);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <img src={user.avatar_url} alt={`${user.login}'s avatar`} />
      <h2>{user.name}</h2>
      <p>
        <b>Location: </b>
        {user.location}
      </p>
      <p>
        <b>Bio: </b>
        {user.bio}
      </p>
    </div>
  );
};

export default UserInfo;
