import React, { memo } from 'react';
import { LeftDiv } from './style';

import AsideHeader from './child-cop/aside-header';
import AsideSonger from './child-cop/aside-songer';
import AsideHotSonger from './child-cop/aside-hotsonger';
const Left = memo(() => {
  return (
    <LeftDiv>
      <AsideHeader></AsideHeader>
      <div className="info">
        <AsideSonger></AsideSonger>
        <AsideHotSonger></AsideHotSonger>
      </div>
    </LeftDiv>
  );
});

export default Left;
