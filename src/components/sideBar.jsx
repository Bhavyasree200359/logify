


import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function SideBar() {
const navigate=useNavigate();
    const handleLogout = () => {
    localStorage.removeItem("loggedInUser"); // ✅ clear the logged-in user
    alert("Logged out successfully!");
    navigate("/login"); // ✅ redirect to login page
  };
  return (
    <div className="nav-bar-div">
      <NavLink
        to="/dashboard"
        end
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >Home</NavLink>
      <NavLink
        to="/dashboard/profile"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        Profile
      </NavLink>
      <NavLink
        to="/dashboard/agent"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        Agent
      </NavLink>
      {/* <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        Log out
      </NavLink> */}



      <button style={{
        color:"white",
        backgroundColor:"rgb(26, 22, 37)",
        border:"none",
          padding: "5px 10px",
          fontSize:"15px",
          cursor:"pointer"
      }}onClick={handleLogout}   className={({ isActive }) => (isActive ? "active-link" : "")}>
        Logout
      </button>
    </div>


  );
}

export default SideBar;












// import React from "react";
// import { NavLink, Outlet } from "react-router-dom";
// // Optional styling

// function SidebarLayout() {
//   return (
//     <div className="nav-bar-div">
//       <aside className="sidebar">
//         <nav>
//           <ul>
           
//             <li><NavLink to="/dashboard/profile" className={({ isActive }) => (isActive ? "active-link" : "")}>Profile</NavLink></li>
//             <li><NavLink to="/dashboard/agent" className={({ isActive }) => (isActive ? "active-link" : "")}>Agent Config</NavLink></li>
//           </ul>
//         </nav>
//       </aside>

//       <main className="main-content">
//         <Outlet /> {/* This renders child routes */}
//       </main>
//     </div>
//   );
// }

// export default SidebarLayout;
