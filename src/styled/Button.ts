import styled from 'styled-components';

export type IStyledButtonProps = {
  primary?: boolean;
};

export const StyledButton = styled.button<IStyledButtonProps>`
  border: none;
  box-shadow: none;
  outline: none;
  background: ${props => (props.primary ? 'darkred' : 'limegreen')};
`;
