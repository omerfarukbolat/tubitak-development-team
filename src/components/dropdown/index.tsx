import React, { useState } from "react";
import "./index.css";

interface Option{
    label: string;
    value: string;
    func: () => void;

}


const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const options: Option[]=[
        {label:"Seçenek 1",
        func: () => {
            alert("Seçenek 1 seçildi!");
        },
        value:"option1"},
        
        {label:"Seçenek 2",
        func: () => {
            alert("Seçenek 2 seçildi!");
        },
        value:"option2"},
        
        {label:"Seçenek 3",
        func: () => {
            alert("Seçenek 3 seçildi!");
        },
        value:"option3"}
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
                        <a key={option.value} onClick={option.func}>
                            {option.label}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
