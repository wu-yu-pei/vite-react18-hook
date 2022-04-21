import React, { memo } from 'react';

import { AsideDiv } from './style';

const RecAsideHeader = memo((props) => {
  const { title, link } = props;
  return (
    <AsideDiv>
      <div className="left">{title}</div>
      <div className="right">
        <a href={link}>{link ? '查看全部>' : ''}</a>
      </div>
    </AsideDiv>
  );
});

export default RecAsideHeader;
