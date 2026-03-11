import { get } from 'axios';

async function fetchPosts() {
  try {
    const response = await get('https://jsonplaceholder.typicode.com/posts');

    const posts = response.data;

    posts.forEach(post => {
      console.log(post.title);
    });

  } catch (error) {
    console.error('Error fetching posts:', error.message);
  }
}

export default fetchPosts;