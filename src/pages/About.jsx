import React from "react";

const About = () => {
  const stats = [
    {
      title: "50,000+",
      description: "Students Enrolled",
    },
    {
      title: "1,500+",
      description: "Courses Available",
    },
    {
      title: "98%",
      description: "Student Satisfaction",
    },
  ];

  const values = ["Innovation", "Empowerment", "Community", "Excellence"];

  return (
    <section className="bg-secondary py-16">
      <div className="container mx-auto text-center">
        {/* About Dev Learn */}
        <h2 className="text-4xl font-bold text-primary mb-4">
          About Dev Learn
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Dev Learn is a platform dedicated to helping aspiring IT professionals
          achieve their goals. Our mission is to provide clear pathways and
          resources to excel in the tech industry. Whether you're just starting
          or looking to advance your skills, Dev Learn is here to guide you
          every step of the way.
        </p>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-3xl font-bold text-primary">{stat.title}</h3>
              <p className="text-gray-700 mt-2">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Core Values */}
        <h3 className="text-2xl font-bold text-primary mb-4">
          Our Core Values
        </h3>
        <ul className="list-disc list-inside text-lg text-gray-700 mx-auto max-w-xl mb-8">
          {values.map((value, index) => (
            <li key={index} className="mb-2">
              {value}
            </li>
          ))}
        </ul>

        {/* Call to Action */}
        <div className="bg-primary text-white p-8 rounded-lg shadow-md">
          <h3 className="text-3xl font-bold mb-4">Join Our Community!</h3>
          <p className="text-lg mb-6">
            Start your journey in tech today with Dev Learn. Sign up now and
            gain access to thousands of courses, industry mentors, and a
            supportive community of learners.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-6 rounded-lg font-bold text-lg">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
