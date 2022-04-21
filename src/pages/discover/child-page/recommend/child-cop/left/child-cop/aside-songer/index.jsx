import React, { memo } from 'react';

import RecAsideHeader from '@/components/rec-aside-header';
import SongerItem from '@/components/songer-item';

import { AsideSongErDiv } from './style';

import { inSonger } from '@/common/local-data.js';
const AsideSonger = memo(() => {
  console.log(inSonger);
  return (
    <AsideSongErDiv>
      <RecAsideHeader
        title="入住歌手"
        link="https://music.163.com/discover/artist/signed/"
      ></RecAsideHeader>
      {inSonger.map((item, index) => {
        return <SongerItem {...item} key={index}></SongerItem>;
      })}
    </AsideSongErDiv>
  );
});

export default AsideSonger;
