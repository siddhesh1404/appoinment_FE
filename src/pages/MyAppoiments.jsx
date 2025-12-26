import React, { useEffect, useState, useContext } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { CalendarDays } from "lucide-react";
import { AppComtext } from "../context/AppContext";

const MyAppoiments = () => {
  const { docId } = useParams();
  const [docInfo, setDocInfo] = useState(null);
  const [selectedTime, setSelectedTime] = useState("9.00 am");
  const [selectedDate, setSelectedDate] = useState("");
  const { doctors } = useContext(AppComtext);
  const navigate=useNavigate();

  useEffect(() => {
    const doc = doctors.find((doc) => doc._id === docId);
    setDocInfo(doc);
  }, [doctors, docId]);

  const times = [
    "8.00 am",
    "8.30 am",
    "9.00 am",
    "9.30 am",
    "10.00 am",
    "10.30 am",
    "11.00 am",
    "11.30 am",
  ];

  if (!docInfo) {
    return (
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 text-center">
        Loading...
      </div>
    );
  }

  return (
    <>
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6">
        {/* Top Section */}
        <div className="flex flex-col sm:flex-row gap-6">
          {/* Doctor Image */}
          <div className="w-32 h-32 rounded-xl overflow-hidden mx-auto sm:mx-0">
            <img
              src={docInfo.image || "https://via.placeholder.com/150"}
              alt={docInfo.name || "Doctor"}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Doctor Info */}
          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-xl font-semibold flex items-center justify-center sm:justify-start gap-2">
              {docInfo.name || "Doctor Name"}{" "}
              <span className="text-blue-500">✔</span>
            </h2>
            <p className="text-gray-600">
              {docInfo.degree} {docInfo.speciality}
            </p>
            <p className="text-gray-500 text-sm">
              {docInfo.experience
                ? `${docInfo.experience} Years`
                : "Experience N/A"}
            </p>

            <p className="mt-2 text-gray-700 text-sm leading-relaxed">
              {docInfo.description || "No description available."}
            </p>

            <p className="mt-2 font-semibold text-gray-800">
              Appointment fee:{" "}
              <span className="text-black">${docInfo.fee || "N/A"}</span>
            </p>
          </div>
        </div>

        {/* Booking Slots */}
        <div className="mt-6">
          <h3 className="font-semibold text-gray-800 mb-3">Booking slots</h3>

          {/* Date Picker */}
          <div className="w-80">
            <label className="block text-sm mb-2 font-medium text-gray-700">
              Select Date
            </label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-blue-400 bg-white 
              text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
              transition duration-200"
            />
          </div>

          {/* Time Slots */}
          <div className="flex flex-wrap gap-3 mt-4">
            {times.map((t) => (
              <button
                key={t}
                onClick={() => setSelectedTime(t)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition ${
                  selectedTime === t
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-blue-50 border border-gray-200"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Book Button */}
          <div className="mt-6">
            <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2">
              <CalendarDays size={18} /> Book an appointment
            </button>
          </div>
        </div>
      </div>

      {/* Related Doctors Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
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
          {doctors
            .filter(
              (doctor) =>
                doctor.speciality === docInfo.speciality &&
                doctor._id !== docInfo._id
            )
            .map((doctor) => (
              <div
  key={doctor._id}
  className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer"
  onClick={() => navigate(`/appoinment/${doctor._id}`)}
>
                <div className="w-full h-52 bg-gray-100 flex items-center justify-center">
                  <img
                    src={doctor.image || "https://via.placeholder.com/150"}
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
                  <p className="text-sm text-gray-500">{doctor.speciality}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default MyAppoiments;
