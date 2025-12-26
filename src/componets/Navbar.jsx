import {  NavLink} from "react-router-dom";
import { useNavigate } from "react-router-dom"
import {assets} from '../assets/assets'
import React from "react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [token, setToken] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  return (
    <nav className="bg-white border-gray-200 shadow py-3 ">
     
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-3">
          <img src={assets.logo} className="h-8" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            MyApp
          </span>
        </NavLink>

        {/* Right side buttons */}
        <div className="flex md:order-2 space-x-3 md:space-x-0 ">
          {
            token
            ? <div className="flex items-center gap-2 cursor-pointer group relative">
            <img src={assets.profile_pic} className="w-8 rounded-full" alt=""/>
            <img src={assets.dropdown_icon} className="w-2.5" alt=""/>
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p className="hover:text-black cursor-pointer" onClick={()=>navigate('my-profile')} >My Profile</p>
                <p className="hover:text-black cursor-pointer" onClick={()=>navigate('my-appoiments')}>My Appoiment</p>
                <p className="hover:text-black cursor-pointer" onClick={()=>setToken(false)}>Logout</p>
                </div>
            
            </div>
            
            </div>
            :<button
            type="button"
            className="text-white bg-[#5f6fff] hover:bg-blue-800 focus:ring-4 
                       focus:outline-none focus:ring-blue-300 font-bold rounded-full 
                       text-sm px-6 py-4 text-center"
          onClick={()=>navigate('register')}
          >
            Create Account
          </button>
          }
          

          {/* Mobile menu toggle button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center 
                       text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 
                       focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Navbar Links */}
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 
            ${isOpen ? "block" : "hidden"} `}
          id="navbar-cta"
        >
          <ul
            className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 
                       rounded-lg bg-white md:space-x-8 md:flex-row md:mt-0 md:border-0"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 px-3 md:p-0 text-sm 
                  ${isActive ? "text-blue-600 font-semibold " : "text-black hover:text-blue-600"}`
                }
              >
                 {({ isActive }) => (
      <div className="flex flex-col items-center">
        <span>HOME</span>
        {isActive && (
          <hr className="border-none border-rounded-sm h-[3px] bg-blue-600 w-3/5 mt-1" />
        )}
      </div>
    )}
              </NavLink>
              
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block py-2 px-3 md:p-0 text-sm 
                  ${isActive ? "text-blue-600 font-semibold" : "text-black hover:text-blue-600"}`
                }
              >
                {({ isActive }) => (
      <div className="flex flex-col items-center">
        <span>ABOUT</span>
        {isActive && (
          <hr className="border-none h-[3px] bg-blue-600 w-3/5 mt-1" />
        )}
      </div>
    )}
                
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/doctors"
                className={({ isActive }) =>
                  `block py-2 px-3 md:p-0 text-sm 
                  ${isActive ? "text-blue-600 font-semibold" : "text-black hover:text-blue-600"}`
                }
              >
               {({ isActive }) => (
      <div className="flex flex-col items-center">
        <span>ALL DOCTER</span>
        {isActive && (
          <hr className="border-none h-[3px] bg-blue-600 w-3/5 mt-1" />
        )}
      </div>
    )}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `block py-2 px-3 md:p-0 text-sm 
                  ${isActive ? "text-blue-600 font-semibold" : "text-black hover:text-blue-600"}`
                }
              >
                  {({ isActive }) => (
      <div className="flex flex-col items-center">
        <span>CONTACT</span>
        {isActive && (
          <hr className="border-none h-[3px] bg-blue-600 w-3/5 mt-1" />
        )}
      </div>
    )}
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to="/admin-panel"
                target="_black"
               className={"border border-[#e5e7eb] px-5 text-xs py-1.5 rounded-full"}
              >
                Admin Panel
              </NavLink>
            </li>
            
          </ul>
          
        </div>
      </div>
       <hr className="border-t-0.5 border-[#adadad] h-0.5 w-4/5 justify-center mx-auto "/>
    </nav>
  );
}
