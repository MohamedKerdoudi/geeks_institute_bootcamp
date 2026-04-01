import React, { Component } from "react";

export default class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],         
      loaded: false      
    };
  }

  
  async componentDidMount() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      const data = await response.json();  
      this.setState({ users: data, loaded: true });
    } catch (err) {
      console.error("UsersList fetch error:", err);
     
      this.setState({ loaded: true }); 
    }
  }

  render() {
    const { users, loaded } = this.state;

   
    if (!loaded) {
      return (
        <div className="my-4">
          <h2>Users</h2>
          <div className="alert alert-info">Loading…</div>
        </div>
      );
    }

    return (
      <section className="my-4">
        <h2>Users</h2>
        <ul className="list-group">
          {users.map((u) => (
            <li key={u.id} className="list-group-item">
              <strong>{u.name}</strong> – {u.email}
            </li>
          ))}
        </ul>
      </section>
    );
  }
}