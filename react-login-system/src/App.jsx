import { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  // Login function
  const login = (e) => {
    e.preventDefault();

    // Demo username and password
    if (username === "admin" && password === "1234") {

      // Simulated user data
      const userData = {
        userId: 101,
        role: "Admin"
      };

      // Simulated JWT token
      const token = btoa(JSON.stringify(userData));

      // Store token
      localStorage.setItem("token", token);

      // Store user data in state
      setUser(userData);
    } else {
      alert("Invalid username or password");
    }
  };

  // Logout
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setUsername("");
    setPassword("");
  };

  return (
    <div className="container">

      {!user ? (
        <div className="login-box">
          <h1>Login</h1>

          <form onSubmit={login}>

            <input
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">
              Login
            </button>

          </form>

          <p>Username: admin</p>
          <p>Password: 1234</p>
        </div>
      ) : (

        // Protected Dashboard
        <div className="dashboard">
          <h1>Dashboard</h1>

          <h2>Welcome, {username}!</h2>

          <p>User ID: {user.userId}</p>
          <p>Role: <b>{user.role}</b></p>

          <p>🔐 This is a protected dashboard.</p>

          <button onClick={logout}>
            Logout
          </button>
        </div>

      )}

    </div>
  );
}

export default App;