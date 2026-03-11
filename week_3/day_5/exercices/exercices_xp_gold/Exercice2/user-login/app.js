import express, { json } from "express";
import { hash, compare } from "bcrypt";
import { sign, verify } from "jsonwebtoken";

const app = express();
app.use(json());

const PORT = 5000;
const SECRET_KEY = "mysecretkey";


let users = [];


app.post("/api/register", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password)
    return res.status(400).json({ message: "All fields required" });

  const existingUser = users.find(user => user.username === username);
  if (existingUser)
    return res.status(400).json({ message: "User already exists" });

  const hashedPassword = await hash(password, 10);

  users.push({
    id: users.length + 1,
    username,
    password: hashedPassword,
    role: "user"
  });

  res.status(201).json({ message: "User registered successfully" });
});


app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;

  const user = users.find(user => user.username === username);
  if (!user)
    return res.status(400).json({ message: "Invalid credentials" });

  const validPassword = await compare(password, user.password);
  if (!validPassword)
    return res.status(400).json({ message: "Invalid credentials" });

  const token = sign(
    { id: user.id, username: user.username, role: user.role },
    SECRET_KEY,
    { expiresIn: "1h" }
  );

  res.json({ message: "Login successful", token });
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(401).json({ message: "Access denied" });

  verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    req.user = user;
    next();
  });
}

app.get("/api/profile", authenticateToken, (req, res) => {
  res.json({ message: "Profile data", user: req.user });
});

app.listen(PORT, () => {
  console.log("Server running on port 5000");
});