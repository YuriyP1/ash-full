import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

import './style.scss';

const asideBar = () => {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);

  const dispose = () => {
    root.unmount();
    container.remove();
  };

  root.render(<App dispose={dispose} />);
};
export default asideBar;
