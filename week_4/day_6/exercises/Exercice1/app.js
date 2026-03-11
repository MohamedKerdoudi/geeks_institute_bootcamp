//Define the User Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String
});
//Define the Post Schema with a Reference
const User = mongoose.model('User', userSchema);
const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});
//Create a User and a Post
const Post = mongoose.model('Post', postSchema);
const admin = await User.create({
  name: 'Lina',
  email: 'lina@mail.com'
});

await Post.create({
  title: 'Mongoose is Awesome',
  content: 'Learning MongoDB with Mongoose',
  author: admin._id
});
//Use .populate() to Join the Data
const postWithData = await Post
  .findOne({ title: 'Mongoose is Awesome' })
  .populate('author');
  //Access the  Data
  console.log(`Post Title: ${postWithData.title}`);
console.log(`Author Name: ${postWithData.author.name}`);