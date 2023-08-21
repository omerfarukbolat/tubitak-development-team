import React, { useState } from "react";
import "./index.css";

interface Option{
    label: string;
    url:string;
    value: string;
}


const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const options: Option[]=[
        {label:"Seçenek 1",url:"#",value:"option1"},
        {label:"Seçenek 2",url:"#",value:"option2"},
        {label:"Seçenek 3",url:"#",value:"option3"}
    ]
    
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown">
            <button className="dropbtn" onClick={toggleDropdown}>
                <span className="styled-dropdown"></span>
                <span className="styled-dropdown"></span>
                <span className="styled-dropdown"></span>
            </button>
            {isOpen && (
                <div className="dropdown-content">
                   {options.map(option => (
                        <a key={option.value} href={option.url}>
                            {option.label}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
