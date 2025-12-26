import React from "react";

const doctors = [
  {
    id: 1,
    name: "Dr. Richard James",
    specialization: "General physician",
    image: "https://via.placeholder.com/150",
    available: true,
  },
  {
    id: 2,
    name: "Dr. Sarah Johnson",
    specialization: "General physician",
    image: "https://via.placeholder.com/150",
    available: true,
  },
  {
    id: 3,
    name: "Dr. Michael Brown",
    specialization: "General physician",
    image: "https://via.placeholder.com/150",
    available: true,
  },
  {
    id: 4,
    name: "Dr. Emily Davis",
    specialization: "General physician",
    image: "https://via.placeholder.com/150",
    available: true,
  },
  {
    id: 5,
    name: "Dr. James Wilson",
    specialization: "General physician",
    image: "https://via.placeholder.com/150",
    available: true,
  },
];

export default function RelatedDoctors() {
  return (
    <>
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-2xl font-semibold text-gray-800">
          Related Doctors
        </h2>
        <p className="text-gray-500 mt-2">
          Simply browse through our extensive list of trusted doctors.
        </p>
      </div>

      {/* Doctors Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer"
          >
            <div className="w-full h-52 bg-gray-100 flex items-center justify-center">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="h-full object-cover"
              />
            </div>
            <div className="p-4">
              {doctor.available && (
                <p className="text-green-600 text-sm font-medium flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Available
                </p>
              )}
              <h3 className="text-lg font-semibold mt-2 text-gray-800">
                {doctor.name}
              </h3>
              <p className="text-sm text-gray-500">{doctor.specialization}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-2xl font-semibold text-gray-800">
          Related Doctors
        </h2>
        <p className="text-gray-500 mt-2">
          Simply browse through our extensive list of trusted doctors.
        </p>
      </div>

      {/* Doctors Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer"
          >
            <div className="w-full h-52 bg-gray-100 flex items-center justify-center">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="h-full object-cover"
              />
            </div>
            <div className="p-4">
              {doctor.available && (
                <p className="text-green-600 text-sm font-medium flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Available
                </p>
              )}
              <h3 className="text-lg font-semibold mt-2 text-gray-800">
                {doctor.name}
              </h3>
              <p className="text-sm text-gray-500">{doctor.specialization}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
