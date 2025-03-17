import { Form, message, Modal, Input } from 'antd';
import { useState } from 'react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HideLoading, ReloadData, ShowLoading } from '../../redux/rootSlice';
import axios from 'axios';



const AdminProj = () => {
  const dispatch = useDispatch();
  const { portfolio } = useSelector((state) => state.root);
  const { Projects } = portfolio;
  const [showAddEditModal, setShowAddEditModal] = useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = useState(null);

  // Handle form submission (Add / Update)
  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      let response;

      if (selectedItemForEdit) {
        response = await axios.post('http://localhost:8000/api/portfolio/update-project', { ...values, id: selectedItemForEdit._id });
      } else {
        response = await axios.post('http://localhost:8000/api/portfolio/add-project', values);
      }

      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        setShowAddEditModal(false);
        setSelectedItemForEdit(null);
        dispatch(HideLoading());
        dispatch(ReloadData(true));
      } else {
        message.error(response.data.message);
      }
    } catch (err) {
      dispatch(HideLoading());
      console.error("Error updating project:", err);
      message.error("Error updating project");
    }
  };

  // Handle project deletion
  const deleteProject = async (id) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post('http://localhost:8000/api/portfolio/delete-project', { id });

      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        dispatch(ReloadData(true));
      } else {
        message.error(response.data.message);
      }
    } catch (err) {
      dispatch(HideLoading());
      console.error("Error deleting project:", err);
      message.error("Error deleting project");
    }
  };

  return (
    <div className="mb-5 flex justify-center flex-col">
      <div className="flex justify-end">
        <button
          className="mr-5 mb-10 rounded-lg border-green-300 border-2 text-sm bg-gradient-to-r from-green-200 to-green-600 flex items-center justify-center hover:border-green-100 hover:scale-110 transition-all duration-500 hover:shadow-[0_0_20px_5px_rgba(134,239,172,0.3)] px-5 py-2 text-white"
          onClick={() => {
            setShowAddEditModal(true);
            setSelectedItemForEdit(null);
          }}
        >
          Add Project
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-5 px-5 sm:flex sm:flex-col sm:items-center md:grid md:grid-cols-2 lg:grid-cols-3">

        {Projects.map((project) => (
          <div key={project._id} className="border w-fit border-lightgrey p-5 rounded-xl shadow-cyanShadow h-fit">
            <h1 className="text-center text-orange-400 text-3xl font-bold">{project.name}</h1>
            <hr className="mt-2 py-2 text-green-100" />
            <p className="text-green-100 text-lg font-body">Project : {project.year}</p>
            <a className="text-green-100 text-lg font-body" href={project.link} target="_blank" rel="noopener noreferrer">
              Link : {project.link}
            </a>
            <img src={project.image} alt="project" className="rounded-lg mt-2 h-100 w-96" />

            <div className="flex justify-between px-14">
              {/* Delete Button */}
              <button
                className="border-green-300 border-2 bg-gradient-to-r from-green-200 to-green-600 flex items-center justify-center hover:border-green-100 hover:scale-110 transition-all duration-700 hover:shadow-[0_0_20px_5px_rgba(134,239,172,0.6)] text-lg text-white p-2 rounded-lg mt-2 h-10 w-20"
                onClick={() => deleteProject(project._id)}
              >
                Delete
              </button>

              {/* Edit Button (Fix Applied) */}
              <button
                className="border-green-300 border-2 bg-gradient-to-r from-green-200 to-green-600 flex items-center justify-center hover:border-green-100 hover:scale-110 transition-all duration-700 hover:shadow-[0_0_20px_5px_rgba(134,239,172,0.6)] text-lg text-white p-2 rounded-lg mt-2 h-10 w-20"
                onClick={() => {
                  setSelectedItemForEdit(project);
                  setShowAddEditModal(true);
                }}
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Adding/Editing Projects */}
      <Modal
        open={showAddEditModal}
        title={selectedItemForEdit ? 'Edit Project' : 'Add Project'}
        footer={null}
        onCancel={() => setShowAddEditModal(false)}
      >
        <Form initialValues={selectedItemForEdit} layout="vertical" onFinish={onFinish}
        className='flex flex-col items-center justify-between'>
          <Form.Item name="name" label="Project Name" rules={[{ required: true, message: 'Please enter project name' }]}>
            <Input placeholder="Enter Project Name" />
          </Form.Item>
          <Form.Item name="year" label="Year" rules={[{ required: true, message: 'Please enter year' }]}>
            <Input placeholder="Year" />
          </Form.Item>
          <Form.Item name="link" label="Link">
            <Input placeholder="Project Link" />
          </Form.Item>
          <Form.Item name="align" label="Alignment">
            <Input placeholder="Alignment on website" />
          </Form.Item>
          <Form.Item name="image" label="Image URL">
            <Input placeholder="Image URL" />
          </Form.Item>

          <div className="flex justify-end">
          <button
          type="button"
          className="border-blue-950 text-blue-950 px-5 py-2"
          onClick={() => {
            setShowAddEditModal(false);
            setSelectedItemForEdit(null); }}>
              Cancel
              </button>
            <button type="submit" className="bg-blue-950 text-white px-5 py-2 ml-2">
              {selectedItemForEdit ? 'Update' : 'Add'}
            </button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default AdminProj;
