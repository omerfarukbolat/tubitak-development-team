import './button.css';

interface ButtonProps {
  label: string;
  maxWidth?: boolean;
  colour?: 'black' | 'white' | 'blue'; // We defined 2 colours for the Font Colour... If its not necessary..
  backgroundColour?: 'blue' | 'green' | 'red' | 'yellow' | 'white' | 'gray'; // We defined 4 colours for the BackgroundColour... If its not necessary..
  onClick: () => void;
}

const Button = ({
  label,
  maxWidth = false,
  colour = 'black',
  backgroundColour = 'white',
  onClick,
}: ButtonProps) => (
  <button
    className={`styled-button ${maxWidth ? 'maxWidth' : ''} colour-${colour} backgroundColour-${backgroundColour}`}
    onClick={onClick}
  >
    {label}
  </button>
);

export default Button;
