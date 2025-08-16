
export function Contact() {
  return (
    <div className="max-w-4xl mx-auto p-6 h-screen pt-[70px]">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center mb-4">Contact Us</h1>
      <p className="text-center text-gray-600 mb-8">
        Have questions or feedback? We'd love to hear from you!
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <form className="space-y-4 bg-white shadow-md rounded-2xl p-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          ></textarea>
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="bg-gray-50 shadow-md rounded-2xl p-6 space-y-4">
          <h2 className="text-xl font-semibold">Get in Touch</h2>
          <p>📍 Miranpur, Near Sangeet Cinema</p>
          <p>📞 +91 9084847255</p>
          <p>✉️ architk471@gmail.com</p>

          <div className="flex gap-4 mt-4">
            <a href="#" className="text-blue-500 hover:underline">Facebook</a>
            <a href="#" className="text-blue-400 hover:underline">Twitter</a>
            <a href="#" className="text-pink-500 hover:underline">Instagram</a>
          </div>
        </div>
      </div>
    </div>
  );
}
