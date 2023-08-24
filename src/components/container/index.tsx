import './container.css';

interface ContainerProps {
  children: JSX.Element;
}

const Container: React.FC<ContainerProps> = ({ children }) => (
  <div className="styled-container">{children}</div>
);

export default Container;
