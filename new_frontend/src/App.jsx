import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Components/Login";
import Logout from "./Components/Logout";
import GameComponent from "./Components/3D/GameComponent";

function App() {
  const [userData, setUserData] = useState(null);

  return (
    <>
      {userData && <GameComponent />}
      <Login setUserData={setUserData} userData={userData} />
    </>
  );
}

export default App;
