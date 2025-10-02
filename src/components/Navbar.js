import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="p-4 bg-green-600 text-white flex justify-between">
      <h1 className="font-bold text-xl">FlavourTrail</h1>
      <div>
        <Link to="/" className="px-2">Home</Link>
        <Link to="/owner" className="px-2">Dashboard</Link>
        <Link to="/login" className="px-2">Login</Link>
      </div>
    </nav>
  );
}
