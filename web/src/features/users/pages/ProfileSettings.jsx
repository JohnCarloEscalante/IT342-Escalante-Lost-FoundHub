import { useEffect, useState } from "react";
import Sidebar from "../../../shared/components/Sidebar";
import { getUserProfile, updateUserProfile } from "../api/userApi";

import "../../items/styles/dashboard.css";
import "../styles/profile.css";

function ProfileSettings() {

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState("");

    useEffect(() => {
        loadProfile();
    }, []);

    const loadProfile = async () => {
        try {
            const email = localStorage.getItem("userEmail");

            const res = await getUserProfile(email);

            setUser({
                name: res.data.name,
                email: res.data.email,
                password: ""
            });

            setLoading(false);

        } catch (err) {
            console.log(err);
        }
    };

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await updateUserProfile({
                name: user.name,
                email: user.email,
                password: user.password
            });

            setMessage("Profile updated successfully!");

            setUser({
                ...user,
                password: ""
            });

        } catch (err) {
            console.log(err);
            setMessage("Update failed.");
        }
    };

    if (loading) {
        return (
            <div className="dashboard-layout">
                <Sidebar />
                <div className="dashboard-container">
                    <h2>Loading profile...</h2>
                </div>
            </div>
        );
    }

    return (
        <div className="dashboard-layout">

            <Sidebar />

            <div className="dashboard-container">

                <div className="page-header">
                    <h1>Profile & Settings</h1>
                    <p>Manage your account information</p>
                </div>

                <form className="profile-form" onSubmit={handleSubmit}>

                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                    />

                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={user.email}
                        disabled
                    />

                    <label>New Password</label>
                    <input
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                        placeholder="Leave blank to keep current password"
                    />

                    <button type="submit">
                        Save Changes
                    </button>

                    {message && (
                        <p className="success-msg">{message}</p>
                    )}

                </form>

            </div>
        </div>
    );
}

export default ProfileSettings;