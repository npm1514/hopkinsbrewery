import React from 'react';
import { render } from 'react-dom';
import { MainPage } from '../pages';

if (window)
  render(
    <MainPage data={window.__DATA__} />,
    document.getElementById('app')
  );
