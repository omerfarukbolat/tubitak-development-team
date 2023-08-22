import React, { useState } from "react";
import "./index.css";

interface Option{
    label: string;
    value: string;
    func: () => void;

}


const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectionOption] = useState<Option | null>(null);

    const options: Option[]=[
        {label:"Seçenek 1",
        func: () => {
            console.log("Seçenek 1 seçildi!");
        },
        value:"option1"},
        
        {label:"Seçenek 2",
        func: () => {
            console.log("Seçenek 2 seçildi!");
        },
        value:"option2"},
        
        {label:"Seçenek 3",
        func: () => {
            console.log(selectedOption);
        },
        value:"option3"}
    ]
    
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const hannleOptionClick = (option: Option)=> {
        setSelectionOption(option);
        option.func();
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
                        <a 
                            key={option.value} 
                            onClick= {()=> hannleOptionClick(option)}
                            className={selectedOption && selectedOption.value === option.value ? "selected" : ""}
                            >
                                {option.label}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
