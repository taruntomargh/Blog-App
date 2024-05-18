import React, { useState } from "react";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import axios from "axios";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister(event) {
    event.preventDefault();
    try {
      const registerResponse = await axios.post("http://localhost:8000/register", {
        data: {
          username: username,
          email: email,
          password: password
        }
      });
      console.log(registerResponse);

      if(registerResponse.status === 200){
        alert("User registered successfully.");
      } 

      if(registerResponse.status === 400){
        alert("User not registered.");
      }
    } catch (error) {
      console.log("handleRegister error: ", error);
    }
  }

  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center items-center gap-8">
      <h1 className="text-3xl font-bold">Register</h1>
      <form onSubmit={handleRegister} className="flex flex-col gap-4 items-center">
        <div className="flex items-center gap-2">
          <label htmlFor="username" className="w-24 text-xl">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter your name"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            className="p-1 text-xl outline-none bg-slate-200 rounded-md"
          />
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="email" className="w-24 text-xl">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="p-1 text-xl outline-none bg-slate-200 rounded-md"
          />
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="password" className="w-24 text-xl">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="p-1 text-xl outline-none bg-slate-200 rounded-md"
          />
        </div>
        <Button type={"submit"} value={"Submit"} addedStyle="w-20" />
      </form>
    </div>
    </div>
  );
};

export default RegisterPage;
