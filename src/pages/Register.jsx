import React from "react";

const Register = () => {
    const [isLogin, setLogin] = React.useState(false);
    return (
        <div className="p-6">
            <div className=" w-[24rem] mx-auto mt-10 p-8 rounded-lg shadow-lg border border-[#E8E8E8]">
                <h2 className="text-left text-xl font-bold text-[#5e5e5e]">Create Account</h2>
                {isLogin === false ? (<p className=" text-[#5e5e5e]">Please sign up to book appointment</p>) :
                    (<p className=" text-[#5e5e5e]">Please login to book appointment</p>)}
                <div>
                    <form className="mt-4 ">
                        {!isLogin && (
                            <>
                                <label className="block mb-1 text-[#5e5e5e]">Full Name</label>
                                <input
                                    type="text"
                                    className="w-full p-2 border rounded border-[#DADADA] mb-2"
                                />
                            </>
                        )}
                        <lable className="block mb-1 text-[#5e5e5e]">
                            Email
                        </lable>
                        <input type="email" className="w-full p-2 border border-[#DADADA] rounded mb-2" />
                        <lable className="block mb-1 text-[#5e5e5e]">
                            Password
                        </lable>
                        <input type="password" className="w-full p-2 border rounded mb-5 border-[#DADADA]" />
                        {isLogin === false ? (<button type="submit" className="w-full bg-[#5f6ffb]  text-white py-2 rounded cursor-pointer">Create Account</button>) 
                        : (<button type="submit" className="w-full bg-[#5f6ffb]  text-white py-2 rounded cursor-pointer">Login</button>)
                        }
                        {isLogin === false && <p>Already have an account <a className="text-[#5f6fff] underline cursor-pointer" onClick={() => setLogin(true)}>Login here</a></p>}
                        {isLogin === true && <p>Create an new account?  <a className="text-[#5f6fff] underline cursor-pointer" onClick={() => setLogin(false)}>Click here</a></p>}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;

