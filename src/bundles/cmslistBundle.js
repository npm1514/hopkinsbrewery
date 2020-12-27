import React from 'react';
import { render } from 'react-dom';
import { CmslistPage } from '../pages';

if (window)
  render(
    <CmslistPage data={window.__DATA__} />,
    document.getElementById('app')
  );
