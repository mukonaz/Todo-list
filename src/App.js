import { Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { Registration } from "./components/Registration";
import { Home } from "./components/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/login" element={<Login/>}/>
      <Route path="/registration" element={<Registration/>}/>
      <Route path="/home" element={<Home/>}/>

    </Routes>

  );
}

export default App;
