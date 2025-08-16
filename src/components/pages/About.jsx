// export function About(){
//     return(
//         <>
//         <div className="mt-[60px] h-screen">
//         <h1>This is About Page</h1><br></br>
        
//         </div>
//         </>
//     )
// }
export function About() {
  return (
    <div className="min-h-screen bg-white text-gray-800 pt-[63px]">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-8 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Welcome to our blog! We share ideas, tutorials, and insights to inspire and help people grow in tech and life.
        </p>
      </div>

      {/* Profile Section */}
      <div className="max-w-5xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 items-center">
        <img
          src="/archit.jpg"
          alt="Profile"
          className="rounded-2xl shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
          <p className="text-gray-600 mb-4">
            We are passionate bloggers and developers who believe in the power of knowledge sharing. 
            This blog is a space where we publish helpful articles, tutorials, and stories that can guide 
            beginners as well as professionals.
          </p>
          <p className="text-gray-600">
            Our goal is to make learning simple and accessible to everyone. Whether you’re a student, 
            developer, or enthusiast, we’re here to provide valuable resources.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600 text-lg">
            To create meaningful and practical content that empowers people to learn and grow. 
            We aim to simplify complex concepts and present them in a way that is easy to understand.
          </p>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="max-w-5xl mx-auto py-16 px-6 grid md:grid-cols-3 gap-8 text-center">
        <div className="p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold mb-2">Quality Content</h3>
          <p className="text-gray-600">Well-researched blogs and tutorials to ensure authenticity.</p>
        </div>
        <div className="p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold mb-2">Community First</h3>
          <p className="text-gray-600">Building a supportive community of learners and creators.</p>
        </div>
        <div className="p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold mb-2">Free Knowledge</h3>
          <p className="text-gray-600">Making resources accessible to everyone, free of cost.</p>
        </div>
      </div>
    </div>
  );
}
