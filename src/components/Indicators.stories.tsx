import React from 'react';

import Indicators from './Indicators';

export default {
  title: 'Indicators',
  component: Indicators,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} ;

export const DefaultIndicator = () => (
  <div style={{backgroundColor: 'red', width: '100vw', height: '100vw'}}>
    <Indicators total={6} currentIdx={3}/>
  </div>
);
