export default function Card({ icon, title, description }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition">

      <div className="text-5xl mb-5 flex justify-center">
        {icon}
      </div>

      <h3 className="text-xl font-bold mb-2">
        {title}
      </h3>

      <p className="text-gray-500 text-sm">
        {description}
      </p>

    </div>
  );
}