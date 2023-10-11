import { StyledButton } from './Button.styled';

function Button({ text, onClick, width, height, type = 'button' }) {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      {text}
    </StyledButton>
  );
}

export default Button;
