import React from "react";

const Courses = () => {
  const courses = [
    {
      name: "Web Development",
      description:
        "HTML, CSS, JavaScript, and modern frameworks like React and Vue.",
    },
    {
      name: "Data Science",
      description: "Python, R, and tools like TensorFlow and Pandas.",
    },
    { name: "DevOps", description: "Docker, Kubernetes, and CI/CD pipelines." },
    {
      name: "Cloud Computing",
      description: "AWS, Azure, and Google Cloud Platform.",
    },
  ];

  const mentors = [
    {
      name: "Alice Johnson",
      expertise: "Web Development Expert",
      profilePicture: "https://via.placeholder.com/150", // Placeholder image
    },
    {
      name: "James Smith",
      expertise: "Data Scientist",
      profilePicture: "https://via.placeholder.com/150", // Placeholder image
    },
    {
      name: "Sophia Davis",
      expertise: "DevOps Engineer",
      profilePicture: "https://via.placeholder.com/150", // Placeholder image
    },
    {
      name: "Liam Brown",
      expertise: "Cloud Computing Specialist",
      profilePicture: "https://via.placeholder.com/150", // Placeholder image
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        {/* Courses Section */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-primary mb-8">
            Available Courses
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-primary mb-2">
                  {course.name}
                </h4>
                <p className="text-gray-700">{course.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mentors Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-primary mb-8">Our Mentors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mentors.map((mentor, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md"
              >
                <img
                  src={mentor.profilePicture}
                  alt={`${mentor.name}'s profile`}
                  className="w-24 h-24 rounded-full mb-4"
                />
                <h4 className="text-xl font-bold text-primary">
                  {mentor.name}
                </h4>
                <p className="text-gray-700">{mentor.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
