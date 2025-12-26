import React, { useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { AppComtext } from '../context/AppContext';
// Temporary data - this will be replaced with API data later

const TopDoctors = () => {
  const {doctors} =useContext(AppComtext)
  const navigate = useNavigate()
  return (
    <div className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Top Doctors to Book
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Simply browse through our extensive list of trusted doctors.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6" >
          {doctors.slice(0,10).map((doctor) => (
            <div
              key={doctor._id}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group" 
            >
              {/* Doctor Image */}
              <div className="relative bg-blue-50 p-4" onClick={()=>navigate(`/appoinment/${doctor._id}`)}>
                <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Doctor Info */}
              <div className="p-4">
                {/* Availability Status */}
                <div className="flex items-center mb-3">
                  <div className={`w-2 h-2 rounded-full mr-2 ${
                    doctor.available ? 'bg-green-500' : 'bg-gray-400'
                  }`}></div>
                  <span className={`text-sm font-medium ${
                    doctor.available ? 'text-green-600' : 'text-gray-500'
                  }`}>
                    {doctor.available ? 'Available' : 'Unavailable'}
                  </span>
                </div>

                {/* Doctor Name */}
                <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                  {doctor.name}
                </h3>

                {/* Specialty */}
                <p className="text-gray-600 text-sm">
                  {doctor.specialty}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors duration-300 hover:shadow-lg" onClick={()=>navigate('doctors')}>
            View More Doctors
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopDoctors;