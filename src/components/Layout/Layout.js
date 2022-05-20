import React from 'react';

import StyledLayout from './StyledLayout';

const Layout = (props) => {
  return (
    <StyledLayout>
      {props.children}
    </StyledLayout>
  )
};

export default Layout;