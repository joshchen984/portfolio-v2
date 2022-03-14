import styled from '@emotion/styled';

type HeadingProps = {
  white?: boolean;
};
const Heading = styled.h2<HeadingProps>`
  font-weight: 400;
  text-align: center;
  font-size: 3.5em;
  font-family: 'Raleway', sans-serif;
  color: ${(props) => (props.white ? 'white' : 'black')};
`;
export default Heading;
