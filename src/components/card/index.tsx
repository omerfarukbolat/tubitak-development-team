import './card.css';

interface CardProps {
  children: JSX.Element;
  round?: number;
}

const Card: React.FC<CardProps> = ({ children, round = 10 }) => (
  <div className="styled-card" style={{ borderRadius: round }}>
    {children}
  </div>
);

export default Card;
