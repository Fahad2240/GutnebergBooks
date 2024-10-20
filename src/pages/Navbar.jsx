import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
        <div className="container">
            <h1 className="logo">Gutenberg Books</h1>
            <div className="links">
            {/* Navigation links */}
            <Link to="/">Home</Link>
            <Link to="/Wishlist">Wishlist</Link>
            </div>
        </div>
        </nav>
    );
}

export default Navbar;
