
import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Example1 from "./Example1";
import Example2 from "./Example2";
import Example3 from "./Example3";

import ErrorBoundary from "./ErrorBoundary";

const HomeScreen = () => (
  <div className="p-4">
    <h2>Home Screen</h2>
    <p>Welcome to the home page.</p>
  </div>
);

const ProfileScreen = () => (
  <div className="p-4">
    <h2>Profile Screen</h2>
    <p>This is your profile.</p>
  </div>
);

const ShopScreen = () => {
  throw new Error("🛒  Oops! The shop component crashed.");
 
};


export default function App() {
  return (
    <BrowserRouter>
     
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand">React‑Router‑EB Demo</span>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    "nav-link" + (isActive ? " active" : "")
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    "nav-link" + (isActive ? " active" : "")
                  }
                >
                  Profile
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/shop"
                  className={({ isActive }) =>
                    "nav-link" + (isActive ? " active" : "")
                  }
                >
                  Shop
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      
      <div className="container mt-4">
        <Routes>
          <Route
            path="/"
            element={
              <ErrorBoundary>
                <HomeScreen />
              </ErrorBoundary>
            }
          />
          <Route
            path="/profile"
            element={
              <ErrorBoundary>
                <ProfileScreen />
              </ErrorBoundary>
            }
          />
          <Route
            path="/shop"
            element={
              <ErrorBoundary>
                <ShopScreen />
              </ErrorBoundary>
            }
          />
    
          <Route
            path="*"
            element={<h3 className="p-4">404 – Page not found</h3>}
          />
        </Routes>
          <PostList />

        <Example1 />
        <Example2 />
        <Example3 />
      </div>
    </BrowserRouter>
  );
}