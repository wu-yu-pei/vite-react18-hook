import React, { memo } from 'react';

import RecAsideHeader from '@/components/rec-aside-header';
import SongerItem from '@/components/songer-item';

const AsideHotSonger = memo(() => {
  return (
    <div>
      <RecAsideHeader title="热门主播"></RecAsideHeader>
      <SongerItem></SongerItem>
    </div>
  );
});

export default AsideHotSonger;
