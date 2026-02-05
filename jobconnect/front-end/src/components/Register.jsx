import { useState } from "react";

function Register() {
  const [form, setForm] = useState({
    username: "",
    email: "",
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
        `http://127.0.0.1:8000/register?username=${form.username}&email=${form.email}&password=${form.password}`,
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
      setMessage("✅ " + data.message);
    } catch (err) {
      setMessage("❌ Server error");
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto" }}>
      <h2>Register</h2>
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
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
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
        <button type="submit">Register</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default Register;
