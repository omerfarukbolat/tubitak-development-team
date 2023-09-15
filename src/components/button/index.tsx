import './button.css';

interface ButtonProps {
  label: string;
  maxWidth?: boolean;
  colour?: 'black' | 'white' | 'blue'; // We defined 2 colours for the Font Colour... If its not necessary..
  backgroundColour?: 'blue' | 'green' | 'red' | 'yellow' | 'white' | 'gray'; // We defined 4 colours for the BackgroundColour... If its not necessary..
  onClick: () => void;
  marginTop?: number;
}

const Button = ({
  label,
  maxWidth = false,
  colour = 'black',
  backgroundColour = 'white',
  onClick,
  marginTop = 0,
}: ButtonProps) => (
  <button
    style={{ marginTop: marginTop }}
    className={`styled-button ${
      maxWidth ? 'maxWidth' : ''
    } colour-${colour} backgroundColour-${backgroundColour}`}
    onClick={onClick}
  >
    {label}
  </button>
);

export default Button;
