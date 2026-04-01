
import React from "react";
import PostList from "./PostList";
import UsersList from "./UsersList";
import "bootstrap/dist/css/bootstrap.min.css";  

function App() {
  return (
    <div className="container py-4">
      
      <PostList />
      <UsersList />
    </div>
  );
}

export default App;