// Register.jsx
import { useState } from "react";
import { supabase } from "../supabaseClient";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from("users")
      .insert([{ username, email, password }]);
    if (error) setMessage(error.message);
    else setMessage("Registration successful!");
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Register</h2>
      <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      <button type="submit">Register</button>
      <p>{message}</p>
    </form>
  );
}

export default Register;
