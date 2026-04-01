
import React from "react";
import Header from "./components/Header";
import MainLayout from "./components/MainLayout";
import "bootstrap/dist/css/bootstrap.min.css"; 

export default function App() {
  return (
    <div className="app-container">

      <Header />


      <MainLayout />
    </div>
  );
}