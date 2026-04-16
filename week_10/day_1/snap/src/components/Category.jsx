import { Link } from "react-router-dom";

const categories = ["Mountain", "Beaches", "Birds", "Food"];

export default function Category() {
  return (
    <div className="categories">
      {categories.map((cat) => (
        <Link key={cat} to={`/category/${cat}`}>
          <button>{cat}</button>
        </Link>
      ))}
    </div>
  );
}