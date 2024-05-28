import React, { useState } from "react";
import { useEffect } from "react";

export default function UserRepo({ username }) {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    async function fetchRepositories() {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos`
        );
        if (response.ok) {
          const data = await response.json();
          setRepositories(data);
        } else {
          console.error("Error fetching repositories:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching repositories:", error);
      }
    }

    fetchRepositories();
  }, [username]);
  return (
    <div className="repo">
      <h2>GitHub Repositories for {username}</h2>
      <ul>
        {repositories.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </div>
  );
}
