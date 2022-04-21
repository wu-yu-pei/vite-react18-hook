import React, { memo } from 'react';

import { RecNewItemDiv } from './style';

const RecNewItem = memo((props) => {
  const { picUrl, name, company } = props;
  return (
    <RecNewItemDiv>
      <img src={picUrl} alt="" />
      <p>
        <a href="">{company}</a>
      </p>
      <p>
        <a href="">{name}</a>
      </p>
    </RecNewItemDiv>
  );
});

export default RecNewItem;
