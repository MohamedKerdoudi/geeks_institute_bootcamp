import { useEffect, useState } from "react";
import { fetchImages } from "../api/pexels";
import Category from "../components/Category";
import ImageGrid from "../components/ImageGrid";

export default function Home() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages("Mountain").then(setImages);
  }, []);

  return (
    <div>
      <Category />
      <h2>Mountain Pictures</h2>
      <ImageGrid images={images} />
    </div>
  );
}