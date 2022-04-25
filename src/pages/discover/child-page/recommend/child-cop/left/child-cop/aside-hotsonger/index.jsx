import React, { memo } from 'react';

import RecAsideHeader from '@/components/rec-aside-header';
import RecLeftAonger from '@/components/rec-left-songer';

import { hotRadios } from '../../../../../../../../common/local-data';

const AsideHotSonger = memo(() => {
  console.log(hotRadios);
  return (
    <div>
      <RecAsideHeader title="热门主播"></RecAsideHeader>
      {hotRadios.map((item, index) => {
        return <RecLeftAonger {...item} key={index}></RecLeftAonger>;
      })}
    </div>
  );
});

export default AsideHotSonger;
