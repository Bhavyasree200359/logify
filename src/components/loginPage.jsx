// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import InputField from "./inputField";
// function LoginPage() {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();

//     const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

//     const matchedUser = existingUsers.find(
//       (user) =>
//         user.email === formData.email && user.password === formData.password
//     );

//     if (matchedUser) {
//       alert("Login successful!");
//       navigate("/dashboard");
//     } else {
//       alert("User not found. Please sign up first.");
//     }
//   };

//   return (
//     <div className="login-page-div">
//       <h1 style={{
//         paddingBottom:"20px"
//       }}>Login</h1>
//       <form onSubmit={handleLogin}>
//         <InputField
//           label="Email"
//           type="email"
//           name="email"
//           value={formData.email}
//           placeholder="xyz@gmail.com"
//           onChange={handleChange}
//         />
//         <InputField
//           label="Password"
//           type="password"
//           name="password"
//           value={formData.password}
//           placeholder="cgav....vd"
//           onChange={handleChange}
//         />
       
//         <button style={{
//           marginTop:"20px",
//           marginLeft:"25%"
          
//           }} type="submit">Login</button>
        
//         <div style={{
//           paddingTop:"20px",
//         }}>If not registered please, <button onClick={()=>{
//           navigate("/signup")
//         }}>Sign Up</button></div>
        
//       </form>
//     </div>
//   );
// }

// export default LoginPage;








import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "./inputField";

function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    const matchedUser = existingUsers.find(
      (user) =>
        user.email === formData.email && user.password === formData.password
    );

    if (matchedUser) {
      localStorage.setItem("loggedInUser", formData.email);
      alert("Login successful!");
      navigate("/dashboard");
    } else {
      alert("User not found. Please sign up first.");
    }
  };

  return (
    <div className="login-page-div">
      <h1 style={{ paddingBottom: "20px" }}>Login</h1>
      <form onSubmit={handleLogin}>
        <InputField
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          placeholder="xyz@gmail.com"
          onChange={handleChange}
        />
        <InputField
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          placeholder="cgav....vd"
          onChange={handleChange}
        />
        <button
          style={{
            marginTop: "20px",
            marginLeft: "25%",
          }}
          type="submit"
        >
          Login
        </button>
        <div
          style={{
            paddingTop: "20px",
          }}
        >
          If not registered please,{" "}
          <button
            type="button"
            onClick={() => {
              navigate("/signup");
            }}
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
