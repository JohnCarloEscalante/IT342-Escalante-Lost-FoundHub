import { Link } from "react-router-dom";
import "../styles/sidebar.css";

function Sidebar() {

    return (
        <div className="sidebar">

            <h2>LostFoundHub</h2>

            <Link to="/dashboard">
                Dashboard
            </Link>

            <Link to="/report-lost">
                Report Lost
            </Link>

            <Link to="/report-found">
                Report Found
            </Link>

            <Link to="/browse">
                Browse Items
            </Link>

            <Link to="/my-reports">
                My Reports
            </Link>

            <Link to="/profile">
                Profile / Settings
            </Link>

            <button
                className="logout-btn"
                onClick={() => {
                    localStorage.removeItem("token");
                    window.location.href = "/";
                }}
            >
                Logout
            </button>

        </div>
    );
}

export default Sidebar;