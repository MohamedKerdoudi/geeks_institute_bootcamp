import express, { json } from "express";
const app = express();
const PORT = 3000;

app.use(json());


let posts = [
  { id: 1, title: "First Post", content: "This is my first blog post." },
  { id: 2, title: "Second Post", content: "Learning Express is fun!" }
];

let nextId = 3;


app.get("/posts", (req, res) => {
  res.json(posts);
});


app.get("/posts/:id", (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }
  res.json(post);
});

app.post("/posts", (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ message: "Title and content required" });
  }

  const newPost = { id: nextId++, title, content };
  posts.push(newPost);

  res.status(201).json(newPost);
});


app.put("/posts/:id", (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  const { title, content } = req.body;
  post.title = title || post.title;
  post.content = content || post.content;

  res.json(post);
});


app.delete("/posts/:id", (req, res) => {
  const index = posts.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ message: "Post not found" });
  }

  posts.splice(index, 1);
  res.json({ message: "Post deleted successfully" });
});


app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Server error" });
});

app.listen(PORT, () => {
  console.log(`🚀 Blog API running on http://localhost:${PORT}`);
});
