import { useState } from "react";
import "./App.css";
import ResponseList from "./components/ResponseList";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isAdmin, setIsAdmin] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const oldData =
      JSON.parse(localStorage.getItem("contactResponses")) || [];

    oldData.push({
      ...formData,
      timestamp: new Date().toLocaleString(),
    });

    localStorage.setItem(
      "contactResponses",
      JSON.stringify(oldData)
    );

    alert("Response Saved Successfully!");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleAdminLogin = () => {
    if (adminPassword === "admin123") {
      setIsAdmin(true);
    } else {
      alert("Invalid Password");
    }
  };

  return (
    <div className={darkMode ? "container dark" : "container"}>
      <button
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
      </button>

      <h1>My Portfolio</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Enter Message"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit</button>
      </form>

      <hr />

      {!isAdmin ? (
        <div>
          <h2>Admin Login</h2>

          <input
            type="password"
            placeholder="Enter Admin Password"
            value={adminPassword}
            onChange={(e) =>
              setAdminPassword(e.target.value)
            }
          />

          <button onClick={handleAdminLogin}>
            Login
          </button>
        </div>
      ) : (
        <ResponseList />
      )}
    </div>
  );
}

export default App;