import React, { memo } from 'react';
import { RankItemDiv } from './style';

const RankItem = memo((props) => {
  const { coverImgUrl, title, listDate, moreLink } = props;
  return (
    <RankItemDiv>
      <div className="top">
        <div className="left">
          <img
            src={coverImgUrl}
            alt=""
          />
        </div>
        <div className="right">
          <h4>{title}</h4>
          <p>
            <span></span>
            <span></span>
          </p>
        </div>
      </div>
      <ul>
        {
          listDate.map((item, index) => {
            return (
              <li key={index}>
                <span>{index} {item.name}</span>
                <span></span>
              </li>
            )
          })
        }
        <li>
          <a href={moreLink}>查看更多&gt;</a>
        </li>
      </ul>
    </RankItemDiv>
  );
});

export default RankItem;
