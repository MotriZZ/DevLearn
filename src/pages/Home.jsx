import React from "react";

const Home = () => {
  const testimonials = [
    {
      name: "Jane Doe",
      role: "Frontend Developer",
      testimonial:
        "Dev Learn helped me transition into a tech career with confidence. Highly recommended!",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "John Smith",
      role: "Data Analyst",
      testimonial:
        "The courses are structured and engaging. The mentors are always there to help.",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Emily Clark",
      role: "DevOps Engineer",
      testimonial:
        "Thanks to Dev Learn, I landed my dream job in cloud computing. Amazing experience!",
      image: "https://via.placeholder.com/150",
    },
  ];

  const faqs = [
    {
      question: "What courses do you offer?",
      answer:
        "We offer courses in web development, data science, DevOps, and cloud computing.",
    },
    {
      question: "How much does it cost?",
      answer: "We have both free and paid courses to suit your needs.",
    },
    {
      question: "How do I get started?",
      answer: "Simply sign up and start exploring our courses today!",
    },
  ];

  const blogPosts = [
    {
      title: "Top 5 Skills for Web Developers in 2025",
      description:
        "Discover the essential skills to stay ahead in the fast-paced world of web development.",
    },
    {
      title: "Why Learn DevOps in the Modern IT Landscape?",
      description:
        "Understand the importance of DevOps and how it can accelerate your career.",
    },
    {
      title: "Cloud Computing Trends for the Next Decade",
      description:
        "Explore the future of cloud computing and its impact on businesses worldwide.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-400 to-gray-100 py-20 text-center">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold text-white mb-4">
            Welcome to <span className="text-yellow-500">Dev Learn</span>
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Unlock your potential with expert-led courses and resources tailored
            for IT professionals.
          </p>
          <button className="bg-yellow-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-yellow-600">
            Explore Courses
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-200 py-12 text-white">
        <div className="container mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-4xl font-bold">10,000+</h4>
              <p>Students Enrolled</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold">500+</h4>
              <p>Hours of Content</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold">4.9/5</h4>
              <p>Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold text-primary mb-8">
            What Our Students Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name}'s picture`}
                  className="w-16 h-16 rounded-full mx-auto mb-4"
                />
                <p className="text-gray-700 italic mb-4">
                  "{testimonial.testimonial}"
                </p>
                <h4 className="text-primary font-bold">{testimonial.name}</h4>
                <p className="text-gray-600">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-primary text-center mb-8">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-md">
                <h4 className="text-lg font-bold text-primary mb-2">
                  {faq.question}
                </h4>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-primary text-center mb-8">
            Latest Blog Posts
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-primary mb-2">
                  {post.title}
                </h4>
                <p className="text-gray-700">{post.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
