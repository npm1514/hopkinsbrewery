import React from 'react';
import { render } from 'react-dom';
import { CmscontentPage } from '../pages';

if (window)
  render(
    <CmscontentPage data={window.__DATA__} />,
    document.getElementById('app')
  );
