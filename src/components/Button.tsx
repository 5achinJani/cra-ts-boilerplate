import React from 'react';
import { StyledButton, IStyledButtonProps } from 'styled/Button';

export type IButtonProps = IStyledButtonProps & {
  onClick?: () => void;
};

export const Button: React.FC<IButtonProps> = props => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};
