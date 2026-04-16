import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchImages } from "../api/pexels";
import ImageGrid from "../components/ImageGrid";

export default function SearchPage() {
  const { query } = useParams();
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages(query).then(setImages);
  }, [query]);

  return (
    <div>
      <h2>Results for "{query}"</h2>
      <ImageGrid images={images} />
    </div>
  );
}