import React, { useContext, useState } from "react";
import { doctors } from "../assets/assets";
import { AppComtext } from "../context/AppContext";
import { Navigate, useNavigate } from "react-router-dom";


const specialties = [
  "General physician",
  "Gynecologist",
  "Dermatologist",
  "Pediatricians",
  "Neurologist",
  "Gastroenterologist",
];

const DoctorsList = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState(null);
  const {doctors} = useContext(AppComtext)
  const navigate = useNavigate()

  const filteredDoctors = selectedSpecialty
    ? doctors.filter((doc) => doc.speciality === selectedSpecialty)
    : doctors;

  return (
    <div className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Browse through the doctors specialist.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <div className="flex flex-col space-y-4">
              {specialties.map((specialty, index) => (
                <button
                  key={index}
                  onClick={() =>
                    setSelectedSpecialty(
                      specialty === selectedSpecialty ? null : specialty
                    )
                  }
                  className={`px-4 py-2 border rounded-lg text-left text-gray-700 font-medium hover:bg-blue-50 transition ${
                    specialty === selectedSpecialty
                      ? "border-blue-500 bg-blue-100 text-blue-600"
                      : "border-gray-300"
                  }`}
                >
                  {specialty}
                </button>
              ))}
            </div>
          </div>

          {/* Doctors Grid */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredDoctors.map((doctor) => (
              <div
                key={doctor._id} onClick={()=>navigate(`/appoinment/${doctor._id}`)}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                {/* Doctor Image */}
                <div className="relative bg-blue-50 p-4">
                  <div className="aspect-square rounded-xl overflow-hidden">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Doctor Info */}
                <div className="p-4">
                  {/* Availability */}
                  <div className="flex items-center mb-2">
                    <div
                      className={`w-2 h-2 rounded-full mr-2 ${
                        doctor.available ? "bg-green-500" : "bg-gray-400"
                      }`}
                    ></div>
                    <span
                      className={`text-sm font-medium ${
                        doctor.available ? "text-green-600" : "text-gray-500"
                      }`}
                    >
                      {doctor.available ? "Available" : "Unavailable"}
                    </span>
                  </div>

                  {/* Doctor Name */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                    {doctor.name}
                  </h3>

                  {/* Specialty */}
                  <p className="text-gray-600 text-sm">{doctor.speciality}</p>
                  <p className="text-gray-600 text-sm">{doctor.experience}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorsList;
