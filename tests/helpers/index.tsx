import React, { ReactElement, ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

export const getWrapper = ({
  children,
}: {
  children?: ReactElement | ReactNode;
}) => (
  <BrowserRouter>
    <RecoilRoot>{children}</RecoilRoot>
  </BrowserRouter>
);
