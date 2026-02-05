import { Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Welcome to Auth Demo</h1>
      <nav>
        <Link to="/login">Login</Link> |{" "}
        <Link to="/register">Register</Link>
      </nav>
    </div>
  );
}
