import React, { useContext } from 'react';
import { AppComtext } from '../context/AppContext';

function MyrecentAppoiments() {
    const {doctors} =useContext(AppComtext)
    const appointments = [
  {
    id: 1,
    doctorName: "Dr. Richard James",
    specialization: "General physician",
    photo: "https://via.placeholder.com/100", // replace with doctor photo
    address: "57th Cross, Richmond Circle, Church Road, London",
    datetime: "25 July, 2024 | 8:30 PM",
    status: "pending",
  },
  {
    id: 2,
    doctorName: "Dr. Richard James",
    specialization: "General physician",
    photo: "https://via.placeholder.com/100",
    address: "57th Cross, Richmond Circle, Church Road, London",
    datetime: "25 July, 2024 | 8:30 PM",
    status: "payment_required",
  },
  {
    id: 3,
    doctorName: "Dr. Richard James",
    specialization: "General physician",
    photo: "https://via.placeholder.com/100",
    address: "57th Cross, Richmond Circle, Church Road, London",
    datetime: "25 July, 2024 | 8:30 PM",
    status: "paid",
  },
];
  return (
    <>

    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-xl font-semibold mb-6">My Appointments</h2>
      <div className="space-y-4">
        {appointments.map((appt) => (
          <div
            key={appt.id}
            className="flex items-center justify-between bg-white shadow-md rounded-lg p-4"
          >
            {/* Doctor Info */}
            <div className="flex items-center gap-4">
              <img
                src={appt.photo}
                alt={appt.doctorName}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div>
                <h3 className="text-lg font-semibold">{appt.doctorName}</h3>
                <p className="text-gray-500">{appt.specialization}</p>
                <p className="mt-1">
                  <span className="font-semibold">Address: </span>
                  {appt.address}
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  <span className="font-semibold">Date & Time: </span>
                  {appt.datetime}
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-2">
              {appt.status === "payment_required" && (
                <button className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">
                  Pay here
                </button>
              )}
              {appt.status === "paid" && (
                <button className="px-4 py-2 rounded-md bg-blue-600 text-white" disabled>
                  Paid
                </button>
              )}
              <button className="px-4 py-2 rounded-md border hover:bg-gray-100">
                Cancel appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default MyrecentAppoiments