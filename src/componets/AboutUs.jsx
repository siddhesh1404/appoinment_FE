import React from "react";
import {assets} from '../assets/assets'
const AboutUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Image */}
        <div className="flex justify-center">
          <img
            src={assets.about_image} // replace with your image path
            alt="Doctors smiling"
            className="rounded-2xl shadow-lg w-full max-w-md object-cover"
          />
        </div>

        {/* Right Side - Text */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            ABOUT <span className="text-blue-600">US</span>
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Welcome to Prescripto, your trusted partner in managing your
            healthcare needs conveniently and efficiently. At Prescripto, we
            understand the challenges individuals face when it comes to
            scheduling doctor appointments and managing their health records.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Prescripto is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior
            service. Whether you're booking your first appointment or managing
            ongoing care, Prescripto is here to support you every step of the
            way.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            Our Vision
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Our vision at Prescripto is to create a seamless healthcare
            experience for every user. We aim to bridge the gap between patients
            and healthcare providers, making it easier for you to access the
            care you need, when you need it.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
