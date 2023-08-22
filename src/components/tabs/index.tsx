import './index.css';
import React, { useState } from 'react';

interface TabData {
  label: string;
  func: () => void;
}

interface TabsProps {
  data: TabData[];
  active: string;
  setActive: (tab: string) => void;
}

function Navbar({ data, active, setActive }: TabsProps) {
  return (
    <nav className="styled-nav">
      {data.map(item => (
        <button
          key={item.label}
          className={`tab-button ${active === item.label.toLowerCase() ? 'active' : ''}`}
          onClick={() => {
            setActive(item.label.toLowerCase());
            item.func();
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
