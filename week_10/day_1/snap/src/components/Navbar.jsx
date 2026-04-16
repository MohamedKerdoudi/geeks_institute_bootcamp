import { Link } from "react-router-dom";
import Search from "./Search";

export default function Navbar() {
  return (
    <div className="navbar">
      <h1><Link to="/">SnapShot</Link></h1>
      <Search />
    </div>
  );
}