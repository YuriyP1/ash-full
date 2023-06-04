import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

import './style.scss';
export let disposePhoneTooltip
const phoneTooltip = () => {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);

  disposePhoneTooltip = () => {
    root.unmount();
    container.remove();
  };

  root.render(<App dispose={disposePhoneTooltip} />);
};
export default phoneTooltip;
