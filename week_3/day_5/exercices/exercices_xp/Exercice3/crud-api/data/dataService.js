import { get } from "axios";

async function fetchPosts() {
  const response = await get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
}

export default { fetchPosts };