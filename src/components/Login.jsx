import React from "react";
import Input from "./Input";

function Login() {
  return (
    <form className="form">
      <h1>HELLO!</h1>
      <Input type = "text" placeholder="username"></Input>
      <Input type = "password" placeholder="password"></Input>
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;