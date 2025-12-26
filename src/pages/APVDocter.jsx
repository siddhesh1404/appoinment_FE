import React from 'react'
import { Stethoscope,BadgeCheck ,OctagonAlert  } from "lucide-react";

import { href, Link } from "react-router-dom";

function APVDocter() {
    const AdminDashBordInfo = [
    {
      title: "Approved Doctor",
      description: "carrently approved doctors",
      icon: BadgeCheck ,
      bg: "from-purple-400 to-indigo-500",// gradient for icon button
      href:""
    },
    {
    title: "Pending Doctor",
      description: "View and manage pending doctors",
      icon: OctagonAlert,
      bg: "from-green-400 to-teal-500",
      href:""
    },
  ];
  return (
    <div>
         <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-start justify-center py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {AdminDashBordInfo.map((info, index) => {
          const Icon = info.icon;

          return (
            <div>
              <Link to={info.href}>
              <div
                key={index}
                className="bg-white w-96 rounded-xl shadow-xl p-8 flex justify-between items-center hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Text */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {info.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{info.description}</p>
                </div>
                {/* Icon Button */}
                <button
                  className={`bg-gradient-to-br ${info.bg} text-white p-5 rounded-full shadow-lg hover:scale-110 transform transition-all duration-300`}
                >
                  <Icon size={28} />
                </button>
              </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
    </div>

  )
}

export default APVDocter
