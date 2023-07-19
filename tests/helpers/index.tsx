import React, { ReactElement, ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

export const getWrapper = ({
  children,
}: {
  children?: ReactElement | ReactNode;
}) => (
  <MemoryRouter>
    <RecoilRoot>{children}</RecoilRoot>
  </MemoryRouter>
);
