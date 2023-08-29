import './button.css';

interface ButtonProps {
  label: string;
  colour?: 'black' | 'white'; // We defined 2 colours for the Font Colour... If its not necessary..
  backgroundColour?: 'blue' | 'green' | 'red' | 'yellow'; // We defined 4 colours for the BackgroundColour... If its not necessary..
  onClick: () => void;
  size: 'small' | 'medium' | 'large';
}

const Button = ({
  label,
  colour = 'white',
  backgroundColour = 'blue',
  onClick,
  size = 'medium',
}: ButtonProps) => {
  const sizeSelection = (size: string) => {
    switch (size) {
      case 'small':
        return 5;
      case 'medium':
        return 10;
      case 'large':
        return 15;

      default:
        break;
    }
  };

  return (
    <button
      style={{ padding: sizeSelection(size) }}
      className={`styled-button colour-${colour} backgroundColour-${backgroundColour}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
