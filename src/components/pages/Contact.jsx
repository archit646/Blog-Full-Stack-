import { useState } from "react";

export function Contact() {
  const [feedback, setFeedback] = useState({ 'name': '', 'email': '', 'message': '' })
  
  const handleChange = (e) => {
    setFeedback({
      ...feedback,
      [e.target.name]:e.target.value

    })
    
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (feedback.name === '' || feedback.email === '' || feedback.message === '') {
      alert('All Fields are Required')
    }
    alert('Send Successfully')
    setFeedback({
      name: '',
      email: '',
      message:''
    })
  }
  return (
    <div className="max-w-4xl mx-auto p-6 min-h-screen pt-[70px]">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center mb-4">Contact Us</h1>
      <p className="text-center text-gray-600 mb-8">
        Have questions or feedback? We'd love to hear from you!
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} name="contact" method="POST" data-netlify="true" className="space-y-4 bg-white shadow-md rounded-2xl p-6">
          
          <input
            type="text"
            placeholder="Your Name" value={feedback.name} onChange={handleChange} name="name"
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
          <input
            type="email"
            placeholder="Your Email" value={feedback.email} onChange={handleChange} name="email"
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
          <textarea
            placeholder="Your Message"
            rows="5" value={feedback.message} onChange={handleChange} name="message"
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          ></textarea>
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="bg-gray-50 shadow-md rounded-2xl p-6 space-y-4">
          <h2 className="text-xl font-semibold">Get in Touch</h2>
          <p>📍 Miranpur, Muzaffarnagar, Uttar Pradesh, 251315</p>
          <p>📞 +91 9084847255</p>
          <p>✉️ architk471@gmail.com</p>

         
        </div>
      </div>
    </div>
  );
}
