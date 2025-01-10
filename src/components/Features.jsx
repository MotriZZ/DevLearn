import React from "react";

const Features = () => {
  const features = [
    {
      title: "Comprehensive Courses",
      description: "In-depth resources to master key skills.",
    },
    {
      title: "Expert Mentorship",
      description: "Guidance from industry professionals.",
    },
    {
      title: "Community Support",
      description: "Engage with peers and mentors.",
    },
    {
      title: "Flexible Learning",
      description: "Access materials anytime, anywhere.",
    },
    {
      title: "Project-Based Learning",
      description: "Work on real-world projects to build your portfolio.",
    },
    {
      title: "Certification",
      description: "Earn certificates to showcase your achievements.",
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold text-primary mb-8">Key Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-primary mb-2">
                {feature.title}
              </h4>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
