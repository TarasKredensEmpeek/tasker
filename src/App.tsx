import React from 'react';
import { RecoilRoot } from 'recoil';

import Tasker from 'modules/Tasker';

const App = () => (
  <RecoilRoot>
    <Tasker />
  </RecoilRoot>
);

export default App;
