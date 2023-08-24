import './index.css';

interface TabData {
  label: string;
}

interface TabsProps {
  data: TabData[];
  active: string;
  setActive: (tab: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ data, active, setActive }) => {
  return (
    <nav className="styled-tabs">
      {data.map((item) => (
        <button
          key={item.label}
          className={`styled-tabs-button ${
            active === item.label.toLowerCase() ? 'active' : ''
          }`}
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
};

export default Tabs;
