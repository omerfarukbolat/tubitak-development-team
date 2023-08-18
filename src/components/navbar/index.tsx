import './navbar.css';
import linkes from '../../json/navbar.json';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleRedirect = (link: string) => {
    navigate(link);
  };

  return (
    <div className="styled-navbar">
      <ul className="styled-navbar-list">
        {linkes.map((item) => (
          <li
            className="styled-navbar-list-item"
            key={item.id}
            onClick={() => handleRedirect(item.link)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
