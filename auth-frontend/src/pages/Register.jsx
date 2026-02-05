import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [form, setForm] = useState({ username: "", email: "", password: "", repeat: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.repeat) return alert("Passwords don't match!");
    try {
      await axios.post("http://127.0.0.1:8000/register", {
        username: form.username,
        email: form.email,
        password: form.password
      });
      alert("Registered successfully!");
    } catch (err) {
      alert(err.response.data.detail);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" placeholder="Username" onChange={handleChange} />
      <input name="email" type="email" placeholder="Email" onChange={handleChange} />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} />
      <input name="repeat" type="password" placeholder="Repeat Password" onChange={handleChange} />
      <button type="submit">Register</button>
    </form>
  );
}
