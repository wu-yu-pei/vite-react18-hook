import React, { memo } from 'react';

import { SongerItemDiv } from './style';

const SongerItem = memo((props) => {
  const { imgUrl, one, two } = props;
  return (
    <SongerItemDiv>
      <img src={imgUrl} alt="" />
      <div className="right">
        <p>{one}</p>
        <p>{two}</p>
      </div>
    </SongerItemDiv>
  );
});

export default SongerItem;
