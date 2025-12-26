import React from "react";

const WhyChooseUs = () => {
  const features = [
    {
      title: "EFFICIENCY:",
      description:
        "Streamlined appointment scheduling that fits into your busy lifestyle.",
    },
    {
      title: "CONVENIENCE:",
      description:
        "Access to a network of trusted healthcare professionals in your area.",
    },
    {
      title: "PERSONALIZATION:",
      description:
        "Tailored recommendations and reminders to help you stay on top of your health.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          WHY <span className="text-blue-600">CHOOSE US</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
