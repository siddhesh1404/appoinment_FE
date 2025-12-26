import React from 'react'
import { ArrowRight, Calendar, Users, Star } from 'lucide-react';



const Hero = () => {
    const doctorProfiles = [
    "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=150",
    "https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=150", 
    "https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=150"
  ];
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 container mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Book Appointment
                <br />
                <span className="text-white/90">With Trusted Doctors</span>
              </h1>
              
              <p className="text-lg lg:text-xl text-white/80 leading-relaxed max-w-lg">
                Simply browse through our extensive list of trusted doctors, 
                schedule your appointment hassle-free.
              </p>
            </div>

            {/* Doctor profiles preview */}
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-3">
                {doctorProfiles.map((profile, index) => (
                  <div key={index} className="w-12 h-12 rounded-full border-3 border-white overflow-hidden bg-white">
                    <img 
                      src={profile} 
                      alt={`Doctor ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full border-3 border-white bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-sm font-medium">
                  +50
                </div>
              </div>
              <div className="text-white/80">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm">Trusted by 1000+ patients</p>
              </div>
            </div>

            {/* CTA Button */}
            <button 
            onClick={""}
            className="group inline-flex items-center space-x-3 bg-white text-indigo-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <Calendar className="w-5 h-5" />
              <span>Book appointment</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            {/* Stats */}
            <div className="flex items-center space-x-8 text-white/70">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-sm">Expert Doctors</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">10k+</div>
                <div className="text-sm">Happy Patients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">98%</div>
                <div className="text-sm">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Content - Medical Team */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main doctor image */}
              <div className="relative z-20 bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                <img 
                  src="https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Senior Doctor"
                  className="w-80 lg:w-96 h-96 lg:h-[500px] object-cover rounded-xl"
                />
              </div>
              
              {/* Supporting medical team */}
              <div className="absolute -left-20 top-20 z-10 bg-white/10 backdrop-blur-sm rounded-xl p-3">
                <img 
                  src="https://images.pexels.com/photos/6129967/pexels-photo-6129967.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Male Nurse"
                  className="w-32 h-40 object-cover rounded-lg"
                />
              </div>
              
              <div className="absolute -right-16 bottom-20 z-10 bg-white/10 backdrop-blur-sm rounded-xl p-3">
                <img 
                  src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Female Healthcare Worker"
                  className="w-32 h-40 object-cover rounded-lg"
                />
              </div>

              {/* Floating elements */}
              <div className="absolute top-10 right-0 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">24/7 Available</div>
                    <div className="text-sm text-gray-600">Online Consultation</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-10 left-0 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Easy Booking</div>
                    <div className="text-sm text-gray-600">Instant Confirmation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero