export default function ImageCard({ img }) {
  return (
    <div className="card">
      <img src={img.src.medium} alt={img.photographer} />
    </div>
  );
}