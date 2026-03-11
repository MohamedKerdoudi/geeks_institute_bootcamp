import { get } from "axios";

async function fetchData() {
  try {
    const response = await get(
      "https://jsonplaceholder.typicode.com/posts/1"
    );

    console.log("📡 Fetched Data:");
    console.log(response.data);
  } catch (error) {
    console.error("❌ Error fetching data:", error.message);
  }
}

export default fetchData;
