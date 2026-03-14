import Header from "./components/Header"
import Card from "./components/Card"
import Contact from "./components/Contact"

import { FaRocket, FaBolt, FaMobileAlt } from "react-icons/fa"

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">

      <Header />

      {/* Hero Section */}

      <section className="text-center py-16 px-6 max-w-3xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
          Build a Responsive Landing Page with React
        </h1>

        <p className="text-gray-500 mb-8">
          A mini-project to practice building responsive landing pages using React components.
        </p>

        <button className="bg-red-500 text-white px-8 py-3 rounded-lg text-lg hover:bg-red-600 shadow-md">
          Get Started
        </button>

      </section>

      {/* Features */}

      <section className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 pb-20">

        <Card
          icon={<FaRocket className="text-red-500" />}
          title="Fast Performance"
          description="Our landing page loads quickly and runs smoothly across all devices."
        />

        <Card
          icon={<FaBolt className="text-yellow-500" />}
          title="Easy to Use"
          description="Our landing page is simple and intuitive for users to navigate."
        />

        <Card
          icon={<FaMobileAlt className="text-red-500" />}
          title="Modern Design"
          description="Our landing page features a clean, modern, and responsive design."
        />

      </section>

      <Contact />

    </div>
  );
}

export default App