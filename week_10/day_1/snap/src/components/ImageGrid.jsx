import ImageCard from "./ImageCard";

export default function ImageGrid({ images }) {
  return (
    <div className="grid">
      {images.map((img) => (
        <ImageCard key={img.id} img={img} />
      ))}
    </div>
  );
}