import React, { useState } from "react";
import "./index.css";

interface DropdownData {
    name: string;
    click: () => void;

}
interface DropdownProps {
    data: DropdownData[];
    isReverse:boolean;
    
}


const Dropdown: React.FC<DropdownProps> = ({data}) => {
    const [isOpen, setIsOpen] = useState(false);


    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="styled-dropdown">
            <button className="styled-dropdown-button" onClick={toggleDropdown}>
                <span className="styled-dropdown-dot"></span>
                <span className="styled-dropdown-dot"></span>
                <span className="styled-dropdown-dot"></span>
            </button>
            {isOpen && (
                <div className="styled-dropdown-content">
                    {data.map(data => (
                        <a key={data.name} onClick={data.click}>
                            {data.name}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
