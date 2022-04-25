import React, { memo } from 'react';

import { RecLeftWarpperA } from './style';

const RecLeftSonger = memo((props) => {
  const { picUrl, url = '#', name, position } = props;
  return (
    <RecLeftWarpperA href={url}>
      <div className="left">
        <img src={picUrl} alt="" />
      </div>
      <div className="right">
        <p>{name}</p>
        <p>{position}</p>
      </div>
    </RecLeftWarpperA>
  );
});

export default RecLeftSonger;
