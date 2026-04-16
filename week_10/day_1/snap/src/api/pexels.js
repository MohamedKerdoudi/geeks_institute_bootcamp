import axios from "axios";

const API_KEY = "YOUR_PEXELS_API_KEY";

export const fetchImages = async (query, perPage = 30, page = 1) => {
  const res = await axios.get("https://api.pexels.com/v1/search", {
    headers: {
      Authorization: API_KEY,
    },
    params: {
      query,
      per_page: perPage,
      page,
    },
  });

  return res.data.photos;
};