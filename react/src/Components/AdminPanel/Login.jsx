import React, { useState } from "react"; 
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";
import Background from "./BackGround";
import useLogin from "../../../context/userLogin";

const Login = () => {
  const [isPassword, setIsPassword] = useState(true);
  const [formData, setFormData] = useState({ username: "", password: "" });

  const { error, loading, loginUser } = useLogin();

 
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(formData);
    await loginUser(formData); 
  };

  return (
    <div className="flex justify-center items-center h-screen font-admin"> 
      <div>
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

      <div className="bg-brown1 bg-transparent h-[500px] w-[500px] p-8 rounded-md shadow-cyanShadow border border-green-100 mt-[50px]">
        <h1 className="mt-[50px] text-4xl font-bold text-center mb-6 text-gray-300">ADMIN PANEL</h1>
        <Background/>

        <form className="flex flex-col space-y-6" onSubmit={handleLogin}>
          {/* Email Input */}
          <input
            className="mt-[40px] border p-2 rounded-md text-black shadow-cyanShadow"
            type="text"
            placeholder="Admin Username"
            required
            autoComplete="off"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          />

          {/* Password Input */}
          <div className="relative border bg-white p-2 rounded-md shadow-cyanShadow flex items-center">
            <input
              className="w-full pr-12 text-black outline-none"
              type={isPassword ? "password" : "text"}
              placeholder="Admin Password"
              required
              autoComplete="off"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
            <button
              type="button"
              className="absolute right-3 text-blue-500 h-full w-7 text-xl hover:text-blue-800 font-semibold"
              onClick={() => setIsPassword(!isPassword)}
            >
              {isPassword ? <BiSolidShow/> : <BiSolidHide/>}
            </button>
          </div>

          {/* Submit Button */}
          <button
            className="shadow-cyanShadow bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            type="submit"
            disabled={loading} // Disable button when loading
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
