import React from "react";
import InputR from "./InputR";

function Register() {
    return (
        <div>
        <form className="form">
            <InputR type="text" placeholder="username"></InputR>
            <InputR type="password" placeholder="password"></InputR>
            <InputR type="password" placeholder="confirm-password"></InputR>
            <button type="submit">Register</button>
        </form>
        </div>
    );
}

export default Register;