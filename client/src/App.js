import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import Post from "./pages/Post";
import Login from "./pages/Login";
import "./App.css"

import { Routes, Route, Navigate } from "react-router-dom";


function App() {

  const user = false;
  return (
    <div>
     <Navbar user={user}/>
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/login" element={user ? <Navigate to="/"/> : <Login /> } />
       <Route path="/post/:id" element={user ? <Post /> : <Navigate to="/"/>} />
     </Routes>
    </div>
  );
}

export default App;
