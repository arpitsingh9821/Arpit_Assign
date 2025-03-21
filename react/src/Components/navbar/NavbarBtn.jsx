import React from 'react';
import { RiLoginCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";  // ✅ Import Link

const NavbarBtn = () => {
  return (
    <div>
      {/* ✅ Use Link for routing */}
      <Link to="/login">
        <button    className="px-4 py-2 rounded-full font-bold text-white border-green-300 border-2 
        flex items-center text-xl gap-1 bg-gradient-to-r from-green-300 to-green-600 
        hover:border-green-100 hover:scale-110 transition-all duration-500 
        hover:shadow-[0_0_20px_5px_rgba(134,239,172,0.8)]">
          Login <RiLoginCircleLine className='mt-[0.5px]' />
        </button>
      </Link>
    </div>
  );
};

export default NavbarBtn;
