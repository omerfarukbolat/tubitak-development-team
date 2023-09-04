import './button.css';

interface ButtonProps {
  label: string;
  colour?: 'black' | 'white'; // We defined 2 colours for the Font Colour... If its not necessary..
  backgroundColour?: 'blue' | 'green' | 'red' | 'yellow'; // We defined 4 colours for the BackgroundColour... If its not necessary..
  onClick: () => void;
}

const Button = ({
  label,
  colour = 'white',
  backgroundColour = 'blue',
  onClick,
}: ButtonProps) => (
  <button
    className={`styled-button colour-${colour} backgroundColour-${backgroundColour}`}
    onClick={onClick}
  >
    {label}
  </button>
);

export default Button;
