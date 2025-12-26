import React, { useState } from 'react'
import { assets } from '../assets/assets';

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "dummy@gmail.com",
    photo: assets.profile_pic,
    phone: "1234567890",
    address: {
      line1: "123 Main St",
      line2: "Apt 4B",
      city: "New York",
    },
    gender: "Male",
    Birthday: "1990-01-01"

  });
  const [isedit, setIsedit] = useState(true);
  return (
    <div className="max-w-lg w-full mx-auto bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-6">
  {/* Profile Image */}
  <div className="flex flex-col items-center">
    <img
      src={userData.photo}
      alt="Profile"
      className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-md object-cover"
    />
    {isedit ? (
      <input
        type="text"
        value={userData.name}
        onChange={(e) =>
          setUserData((prev) => ({ ...prev, name: e.target.value }))
        }
        className="mt-4 text-lg font-medium text-center border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
      />
    ) : (
      <h2 className="text-2xl font-semibold text-gray-800 mt-4">
        {userData.name}
      </h2>
    )}
  </div>

  <hr className="border-gray-200" />

  {/* Contact Information */}
  <div>
    <h3 className="text-sm font-semibold text-blue-600 mb-2 uppercase tracking-wide">
      Contact Information
    </h3>
    <div className="space-y-3">
      <p className="text-gray-700">
        <span className="font-medium">Email:</span> {userData.email}
      </p>
      <div>
        <p className="font-medium text-gray-700">Phone:</p>
        {isedit ? (
          <input
            type="text"
            value={userData.phone}
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, phone: e.target.value }))
            }
            className="w-full mt-1 border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
          />
        ) : (
          <p className="text-gray-800">{userData.phone}</p>
        )}
      </div>

      <div>
        <p className="font-medium text-gray-700">Address:</p>
        {isedit ? (
          <div className="space-y-2 mt-1">
            <input
              type="text"
              value={userData.address.line1}
              onChange={(e) =>
                setUserData((prev) => ({
                  ...prev,
                  address: { ...prev.address, line1: e.target.value },
                }))
              }
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              value={userData.address.line2}
              onChange={(e) =>
                setUserData((prev) => ({
                  ...prev,
                  address: { ...prev.address, line2: e.target.value },
                }))
              }
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>
        ) : (
          <p className="text-gray-800">
            {userData.address.line1} <br /> {userData.address.line2}
          </p>
        )}
      </div>
    </div>
  </div>

  <hr className="border-gray-200" />

  {/* Basic Information */}
  <div>
    <h3 className="text-sm font-semibold text-blue-600 mb-2 uppercase tracking-wide">
      Basic Information
    </h3>
    <div className="space-y-4">
      <div>
        <p className="font-medium text-gray-700">Gender:</p>
        {isedit ? (
          <select
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, gender: e.target.value }))
            }
            value={userData.gender}
            className="w-full mt-1 border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        ) : (
          <p className="text-gray-800">{userData.gender}</p>
        )}
      </div>
      <div>
        <p className="font-medium text-gray-700">Birthday:</p>
        {isedit ? (
          <input
            type="date"
            value={userData.Birthday}
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, Birthday: e.target.value }))
            }
            className="w-full mt-1 border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
          />
        ) : (
          <p className="text-gray-800">{userData.Birthday}</p>
        )}
      </div>
    </div>
  </div>

  {/* Action Button */}
  <div className="flex justify-center mt-4">
    {isedit ? (
      <button
        onClick={() => setIsedit(false)}
        className="px-6 py-2 rounded-lg bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition"
      >
        Save
      </button>
    ) : (
      <button
        onClick={() => setIsedit(true)}
        className="px-6 py-2 rounded-lg bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition"
      >
        Edit
      </button>
    )}
  </div>
</div>

  )
}

export default MyProfile