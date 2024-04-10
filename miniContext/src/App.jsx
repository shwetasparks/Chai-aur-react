import Login from "./Components/Login";
import UserContextprovider from "./context/UserContextProvider";
import Profile from "./Components/Profile";

function App() {
   return (
      <UserContextprovider>
         <h1>Welcome to our app!</h1>
         <Login />
         <Profile />
      </UserContextprovider>
   );
}

export default App;
