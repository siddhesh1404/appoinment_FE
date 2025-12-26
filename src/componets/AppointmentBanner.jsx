import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
const AppointmentBanner = () => {
   const navigate = useNavigate()
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mx-6 my-8 overflow-hidden">
      <div className="flex items-center justify-between px-8 lg:px-12 py-8 lg:py-12">
        {/* Left Content */}
        <div className="flex-1 text-white">
          <h2 className="text-3xl lg:text-5xl font-bold leading-tight mb-6">
            Book Appointment
            <br />
            With 100+ Trusted Doctors
          </h2>
          
          <button className="bg-white text-gray-800 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 hover:shadow-lg" onClick={()=>navigate('login')}>
            Create account
          </button>
        </div>

        {/* Right Content - Doctor Image */}
        <div className="hidden lg:block flex-shrink-0 ml-8">
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Female Doctor"
              className="w-80 h-80 object-cover object-center rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;