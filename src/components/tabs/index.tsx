import './index.css';
import React, { useState } from 'react';

interface Data{
  label: string;
  func: () => void;
}

const data: Data[]=[
  {
    label:"All",
    func:()=>{
      console.log('All Butona Tıklandı')
    }
  },{
    label:"Active",
    func:()=>{
      console.log('Active Butona Tıklandı')
    }
  },{
    label:"Completed",
    func:()=>{
      console.log('Comleted Butona Tıklandı')
    }
  }

]

function Navbar() {
  const [activeTab, setActiveTab] = useState('all'); 

  const handleTabClick = (tab : string) => {
    setActiveTab(tab);
  };

  return (
    <nav className="styled-nav">
    {data.map(item => (
      <button
        key={item.label}
        className={`tab-button ${activeTab === item.label.toLowerCase() ? 'active' : ''}`}
        onClick={() => {
          handleTabClick(item.label.toLowerCase());
          item.func(); // İlgili işlevi burada çağırıyoruz
        }}
        data-tab={item.label.toLowerCase()}
      >
        {item.label}
      </button>
    ))}
  </nav>
  );
}

export default Navbar;