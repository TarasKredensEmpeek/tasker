import React from 'react';
import { render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';

import Tasker from 'modules/Tasker';

test('Render of Tasker component', () => {
  render(
    <RecoilRoot>
      <BrowserRouter>
        <Tasker />
      </BrowserRouter>
    </RecoilRoot>,
  );
});
