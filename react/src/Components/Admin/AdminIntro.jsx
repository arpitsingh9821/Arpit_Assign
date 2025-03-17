import React, { useEffect } from 'react';
import { Form, Input, message, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { ShowLoading, HideLoading, SetPortfolioData } from '../../redux/rootSlice';
import axios from 'axios';

const AdminIntro = () => {
  const dispatch = useDispatch();
  const { portfolio } = useSelector((state) => state.root);

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
  
      const response = await axios.post('http://localhost:8000/api/portfolio/update-intro', {
        ...values,
        id: portfolio?.intro?._id,
      });
  
      dispatch(HideLoading());
  
      if (response.data.success) {
        message.success(response.data.message);
        window.location.reload();
      } else {
        message.error(response.data.message);
      }
    } catch (err) {
      dispatch(HideLoading());
      message.error("Error updating intro");
    }
  };

  return (
    <div className="mb-5 flex justify-center items-center w-full h-full">
      <Form
        layout="vertical"
        initialValues={portfolio?.intro}
        onFinish={onFinish}
        className="p-6 rounded-lg shadow-cyanShadow h-full w-[75%]"
      >
        <Form.Item name="fullName" label={<span className='text-green-100 text-balance'>Name :</span>}>
          <Input
            placeholder="Name"
            className="p-3 rounded-md text-black font-special placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:shadow-lg focus:shadow-green-500 transition-all duration-500"
          />
        </Form.Item>

        <Form.Item name="Degree" label={<span className='text-green-100 text-balance'>Degree :</span>}>
          <Input
            placeholder="Degree"
            className="p-3 rounded-md text-black font-special placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:shadow-lg focus:shadow-green-500 transition-all duration-500"
          />
        </Form.Item>

        <Form.Item name="topCaption" label={<span className='text-green-100 text-balance'>Caption Top :</span>}>
          <Input
            placeholder="Caption Top"
            className="p-3 rounded-md text-black font-special placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:shadow-lg focus:shadow-green-500 transition-all duration-500"
          />
        </Form.Item>

        <Form.Item name="bottomCaption" label={<span className='text-green-100 text-balance'>Caption Bottom :</span>}>
          <Input
            placeholder="Caption Bottom"
            className="p-3 rounded-md text-black font-special placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:shadow-lg focus:shadow-green-500 transition-all duration-500"
          />
        </Form.Item>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 rounded-full font-bold text-white border-green-300 border-2 text-xl bg-gradient-to-r from-green-200 to-green-600 flex items-center justify-center hover:border-green-100 hover:scale-110 transition-all duration-500 hover:shadow-[0_0_20px_5px_rgba(134,239,172,0.8)]"
          >
            Save
          </button>
        </div>
      </Form>
    </div>
  );
};

export default AdminIntro;
