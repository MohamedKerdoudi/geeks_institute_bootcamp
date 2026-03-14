export default function Contact() {
  return (
    <section className="py-20 px-6">

      <h2 className="text-3xl font-bold text-center mb-4">
        Contact Us
      </h2>

      <p className="text-center text-gray-500 mb-10">
        Have any questions? Send us a message and we'll get back to you as soon as possible.
      </p>

      <div className="bg-white shadow-xl rounded-xl max-w-5xl mx-auto p-10 grid md:grid-cols-2 gap-8">

        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p className="text-gray-500">
            Have any questions? Send us a message and we'll get back to you as soon as possible.
          </p>
        </div>

        <form className="flex flex-col gap-4">

          <input
            type="email"
            placeholder="Email Address"
            className="border rounded-md p-3"
          />

          <textarea
            placeholder="Your Message"
            rows="4"
            className="border rounded-md p-3"
          />

          <button className="bg-red-500 text-white py-3 rounded-md hover:bg-red-600 transition">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}