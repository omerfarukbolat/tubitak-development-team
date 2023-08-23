import { useState, useRef } from 'react';
import './dropdown.css';
import useOnClickOutside from '../../hooks/useOnClickOutside';

interface DropdownData {
  name: string;
  click: () => void;
}
interface DropdownProps {
  data: DropdownData[];
  isReverse?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({ data, isReverse = false }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  useOnClickOutside(ref, () => setIsOpen(false));

  const listItemClicking = (click: () => void) => {
    click();
    setIsOpen(false);
  };

  return (
    <div ref={ref} className="styled-dropdown">
      <button
        className="styled-dropdown-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="styled-dropdown-dot"></span>
        <span className="styled-dropdown-dot"></span>
        <span className="styled-dropdown-dot"></span>
      </button>
      {isOpen && (
        <div
          className={`styled-dropdown-menu ${isReverse ? 'top' : 'bottom'}`}
          style={{ top: isReverse ? -(data.length * 40 + 20) : 30 }}
        >
          <ul className="styled-dropdown-menu-list">
            {data.map((item) => (
              <li
                className="styled-dropdown-menu-list-item"
                key={item.name}
                onClick={() => listItemClicking(item.click)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
