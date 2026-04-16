import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchImages } from "../api/pexels";
import ImageGrid from "../components/ImageGrid";

export default function CategoryPage() {
  const { name } = useParams();
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages(name).then(setImages);
  }, [name]);

  return (
    <div>
      <h2>{name} Pictures</h2>
      <ImageGrid images={images} />
    </div>
  );
}