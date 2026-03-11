db.users.insertOne({
  username: "CodeMaster",
  bio: "Full-stack developer passionate about NoSQL databases.",
  socialLinks: {
    twitter: "https://twitter.com/codemaster",
    github: "https://github.com/codemaster",
    linkedin: "https://linkedin.com/in/codemaster"
  },
  createdAt: new Date()
})
db.posts.createIndex({ authorId: 1 })
db.posts.createIndex({ tags: 1 })
db.posts.createIndex({ createdAt: -1 })
db.posts.insertOne({
  title: "Why I Love MongoDB",
  body: "Schema flexibility is a game changer...",
  authorId: ObjectId("65c2b0000000000000000000"), 
  tags: ["NoSQL", "Database", "Tech"],
  comments: [
    {
      username: "CodeMaster",
      text: "Great article! Very clear.",
      timestamp: new Date()
    }
  ],
  createdAt: new Date()
})
db.comments.insertOne({
  postId: ObjectId("..."),
  username: "CodeMaster",
  text: "Awesome!",
  timestamp: new Date()
})
db.comments.createIndex({ postId: 1, timestamp: -1 })