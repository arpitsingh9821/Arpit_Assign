import React, { useState } from "react"; 
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";
import { BiSolidHide } from "react-icons/bi";
import { BiSolidShow } from "react-icons/bi";
const Login = () => {
  const [email, setEmail] = useState("");  
  const [password, setPassword] = useState("");
  const [isPassword, setIsPassword] = useState(true);
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-center items-center h-screen font-admin"> 
    <div>
      {/* ✅ Use Link for routing */}
      <Link to="/">
      <button    
  className="absolute top-4 left-3 px-7 py-2 rounded-full text-white border-green-300 border-2 
    flex items-center text-xl gap-1 bg-gradient-to-r from-green-300 to-green-600 
    hover:border-green-100 hover:scale-110 transition-all duration-500 
    hover:shadow-[0_0_20px_5px_rgba(134,239,172,0.8)]"
>
  <MdOutlineArrowBackIosNew className='mt-[2px]' /> Back
</button>

      </Link>
    </div>
      <div className="bg-brown1 bg-transparent h-[500px] w-[500px] p-8 rounded-md  shadow-cyanShadow border border-green-100  mt-[50px]">
        <h1 className="mt-[50px] text-4xl font-bold text-center mb-6 text-gray-300 ">ADMIN PANEL</h1>
        <div>
        <div className="shadow-orangeMediumShadow fixed top-[500px] right-0 -z-10 animate-pulse sm:hidden lg:block md:block overflow-hidden"></div>
        <div className="shadow-cyanMediumShadow fixed top-[-30px] right-[40px] -z-10 animate-pulse sm:hidden lg:block md:block overflow-hidden"></div>
        <div className="shadow-cyanMediumShadow fixed top-[-30px] left-0 -z-10 opacity-[0.8] sm:hidden lg:block md:block overflow-hidden animate-pulse"></div>
        <div className="shadow-orangeMediumShadow fixed top-[500px] left-0 -z-10 opacity-[0.8] sm:hidden lg:block md:block overflow-hidden animate-pulse"></div>
        <div className="shadow-cyanMediumShadow fixed top-[500px] left-[-80%] -z-10 opacity-[0.8]  overflow-hidden animate-pulse"></div>
        <div className="shadow-cyanMediumShadow fixed items-center left-[80%] -z-10 opacity-[0.8] overflow-hidden animate-pulse"></div>
        <div className="shadow-cyanMediumShadow fixed top-[10px] left-[100px] -z-10 opacity-[0.8] overflow-hidden animate-pulse"></div>
        <div className="shadow-orangeMediumShadow fixed top-[10px] left-[500px] -z-10 opacity-[0.8]  overflow-hidden animate-pulse"></div>
        <div className="shadow-orangeMediumShadow fixed bottom-[10px] left-[100px] -z-10 opacity-[0.8]  overflow-hidden animate-pulse"></div>
        <div className="shadow-cyanMediumShadow fixed bottom-[10px] left-[500px] -z-10 opacity-[0.8]  overflow-hidden animate-pulse"></div>
        <div className="justify-center shadow-cyanMediumShadow fixed bottom-[10px] left-[500px] -z-10 opacity-[0.8]  overflow-hidden animate-pulse"></div>
    </div>
       
        <form className="flex flex-col space-y-6" onSubmit={submitHandler}>
          <input
            className="mt-[40px] border p-2 rounded-md text-black shadow-cyanShadow"
            type="email"
            placeholder="Admin Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="relative border bg-white p-2 rounded-md shadow-cyanShadow flex items-center">
            <input
              className="w-full pr-12 text-black outline-none"
              type={isPassword ? "password" : "text"}
              placeholder="Admin Password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute right-3 text-blue-500 h-full w-7 text-xl hover:text-blue-800  font-semibold"
              onClick={() => setIsPassword(!isPassword)}
            >
              {isPassword ? <BiSolidShow/> : <BiSolidHide/>}
            </button>
          </div>
          <button
            className="shadow-cyanShadow bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
