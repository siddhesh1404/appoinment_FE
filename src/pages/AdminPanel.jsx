import React from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [isLogin, setLogin] = React.useState(false);
  const navigate = useNavigate();
  
 const handleLogin = (e) => {
    e.preventDefault(); 
    navigate("/admindashboard");
  };
  return (
    <div className="p-6 mt-12">
      <div className=" w-[24rem]  mx-auto mt-10 p-8 rounded-lg shadow-lg border border-[#E8E8E8]">
        <h2 className="text-center text-2xl font-bold text-[#5e5e5e]">
         {isLogin ? <span className="text-[#5f6ffb]">Doctor</span> : <span className="text-[#5f6ffb]">Admin</span>} Login</h2>
        <div>
          <form className="mt-4 ">

            <lable className="block mb-1 text-[#5e5e5e]">
              Email
            </lable>
            <input type="email" className="w-full p-2 border border-[#DADADA] rounded mb-2" />
            <lable className="block mb-1 text-[#5e5e5e]">
              Password
            </lable>
            <input type="password" className="w-full p-2 border rounded mb-5 border-[#DADADA]" />
            <button  onClick={handleLogin} type="button" className="w-full bg-[#5f6ffb]  text-white py-2 rounded cursor-pointer">Login</button>


          </form>
          <p className="text-left mt-4 text-[#5e5e5e]">
            {isLogin ? <span>Doctor</span> : <span>Admin</span>} Login?<a onClick={() => setLogin(!isLogin)} className="text-[#5f6fff] underline cursor-pointer">Click here</a></p>
        </div>
      </div>
    </div>
  );
};

export default Register;

