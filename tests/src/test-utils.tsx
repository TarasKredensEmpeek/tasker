import React, { ReactElement, ReactNode } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

const WithAllProviders = ({ children }: { children: ReactNode }) => (
  <BrowserRouter>
    <RecoilRoot>{children}</RecoilRoot>
  </BrowserRouter>
);

export const wrapper = WithAllProviders;

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper, ...options });

export * from '@testing-library/react';
export { customRender as render };
