import React, { useState } from "react";
import InputField from "./inputField";
import { useNavigate } from "react-router-dom";
function SignUpPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    number: "",
  });
  const navigate=useNavigate();


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    console.log("Register button clicked");

    e.preventDefault();

    // Get existing users or empty array
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Check for duplicate email
    const isDuplicate = existingUsers.some(
      (user) => user.email === formData.email
    );
    if (isDuplicate) {
      alert("Email already registered!");
      return;
    }

    // Save new user
    existingUsers.push(formData);
    localStorage.setItem("users", JSON.stringify(existingUsers));
    alert("Registered successfully!");
    navigate('/login')
  };

  return (
    <div className="sign-up-page-div">
      <h1 style={{
        paddingBottom:"20px"
      }}>Sign Up</h1>
      <form onSubmit={handleRegister}>
        <InputField
          label="Username"
          type="text"
          name="name"
          value={formData.name}
          placeholder="xyz"
          onChange={handleChange}
        />
        <InputField
          label="Email"
          type="email"
          name="email"
           value={formData.email}
          placeholder="xyz@gmail.com"
          onChange={handleChange}
          className="email-input"
        />
        <InputField
          label="Password"
          type="password"
          name="password"
           value={formData.password}
          placeholder="cgav....vd"
          onChange={handleChange}
        />
        <InputField
          label="Phone"
          type="tel"
          name="number"
           value={formData.number}
          placeholder="+91 630XXXXX20"
          onChange={handleChange}
        />
        <button style={{
          marginTop:"30px",
          marginLeft:"25%"
          
          }}type="submit">Register</button>
        <div style={{
          paddingTop:"20px",
        }}>If registered please, <button onClick={()=>{
          navigate("/login")
        }}>Login</button></div>
       
      </form>
    </div>
  );
}

export default SignUpPage;
