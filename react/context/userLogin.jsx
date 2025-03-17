import { useState } from 'react';
import { message } from 'antd';
import { useAuth } from './authContext';

const useLogin = () => {
  const { login } = useAuth();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const loginUser = async (values) => {
    try {
      setError(null);
      setLoading(true);
      const res = await fetch(`http://localhost:8000/api/portfolio/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await res.json();
      console.log("API Response Status:", res.status);  // ✅ Log response status
        console.log("API Response Data:", data);          // ✅ Log response data

        message.destroy();
  if (data.status === "success" && data.token) {
      message.success(data.message || "Login Successful");
      login(data.token, data.user);
    } else {
      message.error(data.message || "Login Failed");
    }
  } catch (error) {
    message.destroy();
    message.error("Login Failed");
    console.error("Login Error:", error);
  } finally {
    setLoading(false);
  }
};

  return { loading, error, loginUser };
};

export default useLogin;
