import React, { Component } from "react";

export default class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],          
      errorMsg: ""       
    };
  }


  async componentDidMount() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      const data = await response.json();   
      this.setState({ posts: data });
    } catch (err) {
      console.error("PostList fetch error:", err);
      this.setState({ errorMsg: "Could not load posts." });
    }
  }

  render() {
    const { posts, errorMsg } = this.state;

   
    if (errorMsg) {
      return <div className="alert alert-danger">{errorMsg}</div>;
    }


    if (posts.length === 0) {
      return <div>Loading posts…</div>;
    }


    return (
      <section className="post-list my-4">
        <h2>Posts</h2>
        <ul className="list-group">
          {posts.map((p) => (
            <li key={p.id} className="list-group-item">
              <h5>{p.title}</h5>
              <p>{p.body}</p>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}