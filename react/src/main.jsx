// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import '@ant-design/v5-patch-for-react-19';
import './index.css';
import App from './App.jsx';
import store from './redux/store.js';
import { Provider } from 'react-redux';
import { StrictMode } from 'react';
import { AuthProvider } from '../context/authContext.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Provider>
  </StrictMode>
)
