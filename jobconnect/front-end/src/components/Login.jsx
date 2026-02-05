import { useState } from "react";

function Login() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `http://127.0.0.1:8000/login?username=${form.username}&password=${form.password}`,
        {
          method: "POST",
        }
      );

      if (!res.ok) {
        const err = await res.json();
        setMessage("❌ " + err.detail);
        return;
      }

      const data = await res.json();
      setMessage("✅ " + data.message + ` (Welcome, ${data.user.username})`);
    } catch (err) {
      setMessage("❌ Server error");
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto" }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          required
        /><br/>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        /><br/>
        <button type="submit">Login</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default Login;
