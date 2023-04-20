import React from "react";
import Login from "./Login";
import Register from "./Register";

 var Loginvalue = false;
// function Login()
// {
//     if(Loginvalue === true)
//     {
//         return <h1>Hello!</h1>
//     }
//     else{
//        return ( <form className="form">
//         <input type="text" placeholder="Username" />
//         <input type="password" placeholder="Password" />
//         <button type="submit">Login</button>
//       </form>);
//     }
// }

function App() {
  return (
    <div className="container">
     {
       Loginvalue ? <Login /> : <Register /> 
     }
     
    </div>
  );
}

export default App;
