import React from 'react';
import { css } from '@emotion/react';
import Title from './Title';
import HeaderVideo from './HeaderVideo';
import { Button } from './Buttons';

type HeaderProps = {
  scrollToProjects: () => void;
};
const Header = ({ scrollToProjects }: HeaderProps) => {
  return (
    <header
      css={css`
        position: relative;
        margin: 0px;
        padding: 0px;
        text-align: center;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        overflow: hidden;
      `}
    >
      <HeaderVideo />
      <Title>Josh Chen</Title>
      <Button round onClick={scrollToProjects}>
        See Projects
      </Button>
    </header>
  );
};

export default Header;
