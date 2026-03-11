const mongoose = require("mongoose");

async function main() {
  try {
   
    await mongoose.connect("mongodb://127.0.0.1:27017/blogDB");

    console.log("MongoDB Connected");

    const userSchema = new mongoose.Schema({
      username: {
        type: String,
        required: true
      },
      email: {
        type: String,
        unique: true
      }
    }, { timestamps: true });

    const User = mongoose.model("User", userSchema);

   
    const commentSchema = new mongoose.Schema({
      text: String,
      author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      },
      createdAt: {
        type: Date,
        default: Date.now
      }
    });

  
    const postSchema = new mongoose.Schema({
      title: {
        type: String,
        required: true
      },
      content: String,
      author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
      },
      comments: [commentSchema]
    }, { timestamps: true });

    const Post = mongoose.model("Post", postSchema);

  
    const seedData = async () => {

     
      await User.deleteMany({});
      await Post.deleteMany({});

     
      const lina = await User.create({
        username: "LinaDev",
        email: "lina@test.com"
      });

      const adam = await User.create({
        username: "AdamCode",
        email: "adam@test.com"
      });

     
      await Post.create({
        title: "MongoDB Relationships",
        content: "Today we learned about population...",
        author: lina._id,
        comments: [
          {
            text: "Great post!",
            author: adam._id
          }
        ]
      });

      console.log("Seed data inserted");
    };

    
    const getFullBlogFeed = async () => {

      const feed = await Post.find()
        .populate("author", "username email")
        .populate("comments.author", "username");

      console.log("\nFull Blog Feed:\n");
      console.log(JSON.stringify(feed, null, 2));
    };

    await seedData();
    await getFullBlogFeed();

    await mongoose.disconnect();

  } catch (error) {
    console.error(error);
  }
}

main();