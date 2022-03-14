import styled from '@emotion/styled';

type ButtonProps = {
  round?: boolean;
  href?: string;
  target?: string;
  rel?: string;
};
export const Button = styled.button<ButtonProps>`
  padding: 0.5em 1em;
  text-decoration: none;
  cursor: pointer;
  color: white;
  background-color: rgb(61, 67, 180);
  border: 1px solid #1afe49;
  width: fit-content;
  &:hover {
    color: #1afe49;
  }
  border-radius: ${(props) => (props.round ? '25px' : '0')};
`;
