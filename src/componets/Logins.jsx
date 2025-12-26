import React from 'react'
import { useState } from 'react'

function Logins() {
    

  return (
    <div>
       <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md">
  <div className="px-6 py-6">
    <div className="flex justify-center mx-auto">
      <img className="w-auto h-8" src="https://merakiui.com/images/logo.svg" alt="Logo" />
    </div>

    <h3 className="mt-3 text-xl font-medium text-center text-gray-700">Welcome Back</h3>

    <p className="mt-1 text-center text-gray-500">Login or create account</p>

    <form>
      <div className="w-full mt-4">
        <input
          className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:outline-none"
          type="email"
          placeholder="Email Address"
          aria-label="Email Address"
        />
      </div>

      <div className="w-full mt-4">
        <input
          className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:outline-none"
          type="password"
          placeholder="Password"
          aria-label="Password"
        />
      </div>

      <div className="flex items-center justify-between mt-4">
        <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
          Forgot Password?
        </a>

        <button
          className="px-6 py-2 text-sm font-medium tracking-wide text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Sign In
        </button>
      </div>
    </form>
  </div>

  <div className="flex items-center justify-center py-4 text-center bg-gray-100">
    <span className="text-sm text-gray-600">Don't have an account?</span>
    <a href="#" className="mx-2 text-sm font-bold text-blue-500 hover:underline">
      Register
    </a>
  </div>
</div>


















    </div>
  )
}

export default Logins