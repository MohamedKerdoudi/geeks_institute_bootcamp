import { FaRocket } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-10 py-6 max-w-6xl mx-auto">
      
      <div className="flex items-center gap-2 text-xl font-semibold">
        <FaRocket className="text-red-500 text-2xl" />
        Company
      </div>

      <nav className="flex gap-8 text-gray-600 font-medium">
        <a href="#">Home</a>
        <a href="#">Features</a>
        <a href="#">Contact</a>
      </nav>

    </header>
  );
}