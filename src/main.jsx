import React from 'react';
import ReactDOM from 'react-dom/client';

import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Register from '../src/pages/Login/Registro.jsx';
import Login from '../src/pages/Login/Login.jsx';
import LoginAdm from '../src/pages/Login/LoginAdm.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Routes>

          


          <Route path="/registro" element={<Register />} />
          <Route path="/" element={<Login />} />
          <Route path="/LoginAdm" element={<LoginAdm />} />

          
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
