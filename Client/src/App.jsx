import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Tasks from "./pages/Tasks";

import Analytics from "./pages/Analytics";


function App() {
  return (
    
    <Routes>

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path = "/" element = {<Login />} />
      <Route path = "/signup" element = {<Signup />} />
      <Route path = "/dashboard" element = {<Dashboard />} />
      <Route path = "/profile" element = {<Profile />} />
      <Route path = "*" element = {<NotFound />} />
      <Route path = "/tasks" element = {<Tasks />} />

      <Route path = "/analytics" element = {<Analytics />} />

    </Routes>


  )
}

export default App
