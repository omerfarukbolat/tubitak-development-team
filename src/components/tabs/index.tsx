import './index.css';
import React, { useState } from 'react';

interface TabData {
  label: string;
}

interface TabsProps {
  data: TabData[];
  active: string;
  setActive: (tab: string) => void;
}

function Tabs({ data, active, setActive }: TabsProps) {
  return (
    <nav className="styled-tabs">
      {data.map(item => (
        <button
          key={item.label}
          className={`styled-tabs-button ${active === item.label.toLowerCase() ? 'active' : ''}`}
          onClick={() => {
            setActive(item.label.toLowerCase());
          }}
          data-tab={item.label.toLowerCase()}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}

export default Tabs;
