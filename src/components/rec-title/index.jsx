import React, { memo } from 'react';

import { RecTitelDiv } from './style';

const RecTitle = memo((props) => {
  const { title, list = [], href } = props;
  return (
    <RecTitelDiv>
      <div className="left">
        <span>{title}</span>
        <ul>
          {list.map((item, index) => {
            return (
              <li key={index}>
                <a href="#">{item}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="right">
        <a href={href}>更多</a>
        <span></span>
      </div>
    </RecTitelDiv>
  );
});

export default RecTitle;
