import { Routes, Route } from "react-router-dom";
import React from "react";  
import Layout from "./layout/layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Doctors from "./pages/Doctors";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import MyProfile from "./pages/MyProfile";
import MyAppoiments from "./pages/MyAppoiments";
import Register from "./pages/Register";
import AdminPanel from "./pages/AdminPanel";
import MyrecentAppoiments from "./pages/MyrecentAppoiments";
import AdminDashBoard from "./componets/AdminDashBoard";
import Add_Docter from "./pages/Add_Docter";
import APVDocter from "./pages/APVDocter";

function App() {
  return (
    <Routes>

      {/* USER ROUTES (WITH NAVBAR & FOOTER) */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/my-appoinment" element={<MyAppoiments />} />
        <Route path="/my-recent-appoinment" element={<MyrecentAppoiments />} />
        <Route path="/appoinment/:docId" element={<MyAppoiments />} />
      </Route>

      {/* ADMIN ROUTE (NO NAVBAR / FOOTER) */}
      <Route path="/admindashboard" element={<AdminDashBoard />} />
      <Route path="/admin-panel" element={<AdminPanel />} />
      <Route path="/add-doctor" element={<Add_Docter />} />
      <Route path="/approved-doctors" element={<APVDocter />} />

    </Routes>
  );
}

export default App;
