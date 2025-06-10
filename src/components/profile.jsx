import React, { useState, useEffect } from "react";
import SideBar from "./sideBar";
import profilePicture from "../images/profile-picture.png"
function Profile() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: ""
  });

  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const loggedInEmail = localStorage.getItem("loggedInUser");
    if (!loggedInEmail) return;
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const currentUser = users.find(u => u.email === loggedInEmail);

    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const updatedUsers = users.map(u =>
      u.email === localStorage.getItem("loggedInUser") ? user : u
    );

    localStorage.setItem("users", JSON.stringify(updatedUsers));

    if (user.email && user.email.trim() !== "") {
      localStorage.setItem("loggedInUser", user.email);
    }

    alert("Profile updated successfully!");
    setEditing(false);
  };
  return (
    <div>

      <div className="dashboard-page">
        <SideBar />


        <div className="non-nav-bar-div">
          <img alt="Profile"className="profile-picture" src={profilePicture}></img>
          {!editing ? (
            <div>

              <p><strong>Username:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Phone:</strong> {user.number}</p>
              <button onClick={() => setEditing(true)}>Update</button>
            </div>
          ) : (
            <div className="update-div">
              <div className="input-label-div">
                <label>Email:</label>
                <input name="email" value={user.email} onChange={handleChange} /><br />
              </div>
              <div className="input-label-div">
                <label>Password:</label>
                <input type="password" name="password" value={user.password} onChange={handleChange} /><br />
              </div>

              <button onClick={handleSave}>Save</button><button onClick={() => setEditing(false)}>Cancel</button>
            </div>
          )}
        </div>

      </div>
    </div>



















  );
}

export default Profile;





