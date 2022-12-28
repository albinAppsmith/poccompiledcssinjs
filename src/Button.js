import React from 'react';
import { styled } from '@compiled/react';

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${(props) => (props.padding ? props.padding : "0.5rem")};
  border-width: ${(props) => props.borderWidth ? props.borderWidth : "1px"};;
  border-style: solid;
  border-color: ${(props) => props.borderColor ? props.borderColor : "var(--ads-color-orange-500)"};
  border-radius: 0.25rem;
  font-size: ${(props) => props.fontSize ? props.fontSize : "1rem"};;
  font-weight: 500;
  text-align: center;
  margin: ${(props) => (props.margin ? props.margin : "0")};
  cursor: pointer;
  background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : "var(--ads-color-orange-500)")};
  color: ${(props) => (props.color ? props.color : "var(--ads-color-black-0)")};
`;

const Button = (props) => {
  return (
    <StyledButton {...props}>
      { props.children }
    </StyledButton>
  );
}

export default Button;
