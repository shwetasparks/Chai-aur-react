import { useState, useContext } from "react";
import userContext from "../context/UserContext";

const Login = () => {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");

   
   const {setUser}=useContext(userContext)

   // handlesubmit
   const handleSubmit = (e) => {
      e.preventDefault()
      setUser({username,password})
   };

   return (
      <div>
         <h2>Login</h2>
         <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => {
               setUsername(e.target.value);
            }}
         />
         <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => {
               setPassword(e.target.value);
            }}
         />
         <button onClick={handleSubmit}>Submit</button>
      </div>
   );
};

export default Login;
