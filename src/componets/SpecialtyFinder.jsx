import React from 'react';
import {useNavigate} from 'react-router-dom';
import { 
  Stethoscope, 
  Baby, 
  Sparkles, 
  Users, 
  Brain, 
  Activity 
} from 'lucide-react';

const SpecialtyFinder = () => {
  const navigate = useNavigate();
  const specialties = [
    {
      id: 1,
      name: 'General physician',
      text:"general_physician",
      icon: Stethoscope,
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      id: 2,
      name: 'Gynecologist',
      text:"gynecologist",
      icon: Users,
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      id: 3,
      name: 'Dermatologist',
      text:"dermatologist",
      icon: Sparkles,
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      id: 4,
      name: 'Pediatricians',
      text:"pediatricians",
      icon: Baby,
      bgColor: 'bg-orange-100',
      iconColor: 'text-orange-600'
    },
    {
      id: 5,
      name: 'Neurologist',
      text:"neurologist",
      icon: Brain,
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      id: 6,
      name: 'Gastroenterologist',
      text:"gastroenterologist",
      icon: Activity,
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600'
    }
  ];
console.log(specialties.text);
  return (
    <div className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Find by Speciality
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Simply browse through our extensive list of trusted doctors,
            <br />
            schedule your appointment hassle-free.
          </p>
        </div>

        {/* Specialty Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
          {specialties.map((specialty) => {
            const IconComponent = specialty.icon;
            return (
              <div
                key={specialty.id}
                className="group flex flex-col items-center text-center cursor-pointer transition-all duration-300 hover:scale-105"
                onClick={() => navigate(`/doctors?specialty=${specialty.text}`)}
              >
                {/* Icon Circle */}
                <div className={`
                  w-20 h-20 lg:w-24 lg:h-24 rounded-full ${specialty.bgColor} 
                  flex items-center justify-center mb-4 
                  group-hover:shadow-lg transition-all duration-300
                  group-hover:scale-110
                `}>
                  <IconComponent className={`w-8 h-8 lg:w-10 lg:h-10 ${specialty.iconColor}`} />
                </div>
                
                {/* Specialty Name */}
                <h3 className="text-sm lg:text-base font-medium text-gray-800 leading-tight">
                  {specialty.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SpecialtyFinder;