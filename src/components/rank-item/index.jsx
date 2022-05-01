import React, { memo } from 'react';
import { useDispatch } from 'react-redux';

import { RankItemDiv } from './style';

import { getCurrentSongAction } from '../../pages/player/store/action-creater';

const RankItem = memo((props) => {
  const { coverImgUrl, title, listDate, moreLink } = props;

  const dispatch = useDispatch();

  function handelClick(item) {
    dispatch(getCurrentSongAction(item.id));
  }

  return (
    <RankItemDiv>
      <div className="top">
        <div className="left">
          <img src={coverImgUrl} alt="" />
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
        {listDate.map((item, index) => {
          return (
            <li key={index}>
              <span>
                {index} {item.name}
              </span>
              <span onClick={() => handelClick(item)}></span>
            </li>
          );
        })}
        <li>
          <a href={moreLink}>查看更多&gt;</a>
        </li>
      </ul>
    </RankItemDiv>
  );
});

export default RankItem;
