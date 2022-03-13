import React from 'react';
import styled from '@emotion/styled';
import Poster from '../images/cyberpunk.jpg';
import Animation from '../images/cyberpunk.mp4';

const Video = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  width: auto;
  height: auto;
  min-width: 100%;
  min-height: 100%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  z-index: -1;
`;
const HeaderVideo = () => {
  return (
    <Video autoPlay muted loop playsInline poster={Poster}>
      <source src={Animation} />
    </Video>
  );
};

export default HeaderVideo;
