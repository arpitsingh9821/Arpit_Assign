import React from 'react';
import { Form, Input, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { HideLoading, SetPortfolioData, ShowLoading } from '../../redux/rootSlice';
import { useLocation } from 'react-router-dom';
const { TextArea } = Input;

const AdminAcad = () => {
  const dispatch = useDispatch();
  const { portfolio } = useSelector((state) => state.root);
  const location = useLocation(); 

  const reloadPage = () => {
    window.location.reload(); 
  };

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());

      const response = await axios.post('https://arpit-assign.onrender.com/api/portfolio/update-academics', {
        ...values,
        id: portfolio?.academic?._id,
      });

      dispatch(HideLoading());

      if (response.data.success) {
        message.success(response.data.message);
        dispatch(SetPortfolioData({
                        ...portfolio, 
                        academic: { ...portfolio?.academic, ...values } 
                      }));
      } else {
        message.error(response.data.message);
      }
    } catch (err) {
      dispatch(HideLoading());
      console.error("Error updating academics:", err);
      message.error("Error updating academics");
    }
  };

  return (
    <div className="mb-5 flex justify-center items-center w-full h-full">
      <Form
        layout="vertical"
        initialValues={portfolio?.academic}
        onFinish={onFinish}
        className="p-6 rounded-lg shadow-cyanShadow h-full w-[75%]"
      >
        <Form.Item name="academicsImg" label={<span className='text-green-100 text-balance'>About Image :</span>}>
          <Input
            placeholder="Fill the image link here"
            className="p-3 rounded-md text-black font-special placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:shadow-lg focus:shadow-green-500 transition-all duration-500"
          />
        </Form.Item>

        <Form.Item name="Desc" label={<span className='text-green-100 text-balance'>About Description :</span>}>
          <TextArea
            placeholder="Write about yourself here"
            autoSize={{ minRows: 1, maxRows: 10 }}
            className="p-3 w-full rounded-md text-black font-special placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:shadow-lg focus:shadow-green-500 transition-all duration-500"
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

export default AdminAcad;
