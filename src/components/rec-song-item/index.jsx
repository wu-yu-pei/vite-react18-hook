import React, { memo } from 'react';

import { getCount, getSize } from '@/utils/format-utils';

import { WarpperDiv } from './style';
const RecSongItem = memo((props) => {
  const { picUrl, name, playCount } = props;
  return (
    <WarpperDiv>
      <div className="top">
        <img src={getSize(picUrl, 140)} alt="" />
        <p>
          <span></span>
          <span>{getCount(playCount)}</span>
          <span></span>
        </p>
      </div>
      <a className="bottom">{name}</a>
    </WarpperDiv>
  );
});

export default RecSongItem;
