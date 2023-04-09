import React from 'react';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <div className='min-h-[calc(100vh-136px)]'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;