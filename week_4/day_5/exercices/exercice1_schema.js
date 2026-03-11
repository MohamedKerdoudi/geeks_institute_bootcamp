import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  name: String,
  email: String
});
const User = model('User', userSchema);

const postSchema = new Schema({
  title: String,
  content: String,
  author: { 
    type: Schema.Types.ObjectId, 
    ref: 'User'   
  }
});
const Post = model('Post', postSchema);

const run = async () => {
  await mongoose.connect('mongodb://127.0.0.1:27017/testdb');

  const admin = await User.create({ 
    name: 'Lina', 
    email: 'lina@email.com' 
  });

  await Post.create({ 
    title: 'Mongoose is Awesome',
    content: 'Let me explain why...',
    author: admin._id   
  });

  
  const postWithData = await Post
    .findOne({ title: 'Mongoose is Awesome' })
    .populate('author');

  console.log(`Post Title: ${postWithData.title}`);
  console.log(`Author Name: ${postWithData.author.name}`);
  console.log(`Author Email: ${postWithData.author.email}`);

  await mongoose.disconnect();
};

run();
//output:
// Post Title: Mongoose is Awesome
// Author Name: Lina
// Author Email:lina@email.com