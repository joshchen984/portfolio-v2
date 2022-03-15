import React from 'react';
import styled from '@emotion/styled';
import { mq } from '../utils/breakpoints';

const Layout = styled.div`
  padding: 2rem;
  ${mq[2]} {
    padding: 0;
  }
`;

export default Layout;
