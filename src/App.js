import React from 'react';
import './App.css';
import Info from './components/Info';

const App = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#23252C] font-inter">
      <div className="min-w-[317px] bg-[#1A1B21] rounded-[10px]">
        <Info />

      </div>
    </div>
  )
}

export default App;
