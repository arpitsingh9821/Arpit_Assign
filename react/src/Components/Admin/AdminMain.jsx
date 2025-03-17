import React from 'react'
import { Tabs } from "antd";
import { TbLogout2 } from "react-icons/tb";
import AdminAbout from './AdminAbout.jsx';
import AdminAcad from './AdminAcad.jsx';
import Project from './AdminProj.jsx'
import AdminCont from './AdminCont.jsx';
import './Admin.css'
import AdminIntro from './AdminIntro.jsx';
import { useSelector } from 'react-redux';
import { useAuth } from '../../../context/authContext.jsx';
const onChange = (key) => {
 
};
const items = [
  {
    key: '1',
    label: <span className='text-white cursor-pointer hover:text-green-400 transition-all p-20 duration-500'>Home</span>,
    children: <AdminIntro />,
  },
  {
    key: '2',
    label: <span className='text-white cursor-pointer hover:text-green-400 transition-all p-20 duration-500'>About</span>,
    children: <AdminAbout />,
  },
  {
    key: '3',
    label: <span className='text-white cursor-pointer hover:text-green-400 transition-all p-20 duration-500'>Academics</span>,
    children: <AdminAcad />,
  },
  {
    key: '4',
    label: <span className='text-white cursor-pointer hover:text-green-400 transition-all p-20 duration-500'>Projects</span>,
    children:  <Project />,
  },
  {
    key: '5',
    label: <span className='text-white cursor-pointer hover:text-green-400 transition-all p-20 duration-500'>Contact</span>,
    children: <AdminCont/>, 
  },
];

const AdminMain = () => {
  const {logout} = useAuth();
  const {portfolio} = useSelector((state) => state.root);
  return (
    <div className='w-full mt-5 p-5 flex flex-col  items-center backdrop-blur font-semibold text-white shadow-cyanShadow h-screen'>
      <div> 
      <h1 className='text-4xl font-bold text-center mb-6 text-gray-300 '>ADMIN PANEL</h1>
      <button className='absolute top-4 right-40 px-7 py-2 rounded-full text-white border-green-300 border-2 
            flex items-center text-xl gap-1 bg-gradient-to-r from-green-300 to-green-600 
            hover:border-green-100 hover:scale-110 transition-all duration-500 
            hover:shadow-[0_0_20px_5px_rgba(134,239,172,0.8)]' onClick={logout}><TbLogout2 />Logout</button>
       <div className='backdrop-blur'><Tabs defaultActiveKey="1" items={items} onChange={onChange} className="custom-tabs"/></div>
        <div>
        <div className="shadow-orangeMediumShadow fixed top-[500px] right-0 -z-10 animate-pulse sm:hidden lg:block md:block overflow-hidden"></div>
        <div className="shadow-cyanMediumShadow fixed top-[-30px] right-[40px] -z-10 animate-pulse sm:hidden lg:block md:block overflow-hidden"></div>
        <div className="shadow-cyanMediumShadow fixed top-[-30px] left-0 -z-10 opacity-[0.8] sm:hidden lg:block md:block overflow-hidden"></div>
        <div className="shadow-orangeMediumShadow fixed top-[500px] left-0 -z-10 opacity-[0.8] sm:hidden lg:block md:block overflow-hidden"></div>
        <div className="shadow-cyanMediumShadow fixed top-[500px] left-[-80%] -z-10 opacity-[0.8]  overflow-hidden"></div>
        <div className="shadow-cyanMediumShadow fixed items-center left-[80%] -z-10 opacity-[0.8] overflow-hidden"></div>
        <div className="shadow-cyanMediumShadow fixed top-[10px] left-[100px] -z-10 opacity-[0.8] overflow-hidden"></div>
        <div className="shadow-orangeMediumShadow fixed top-[10px] left-[500px] -z-10 opacity-[0.8]  overflow-hidden"></div>
        <div className="shadow-orangeMediumShadow fixed bottom-[10px] left-[100px] -z-10 opacity-[0.8]  overflow-hidden"></div>
        <div className="shadow-cyanMediumShadow fixed bottom-[10px] left-[500px] -z-10 opacity-[0.8]  overflow-hidden"></div>
        <div className="justify-center shadow-cyanMediumShadow fixed bottom-[10px] left-[500px] -z-10 opacity-[0.8]  overflow-hidden"></div>
    </div>
    </div>
    </div>
  )
}

export default AdminMain