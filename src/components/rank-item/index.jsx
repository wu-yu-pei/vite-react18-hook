import React, { memo } from 'react';
import { RankItemDiv } from './style';

const RankItem = memo((props) => {
  const { coverImgUrl, title, listDate, moreLink } = props;
  return (
    <RankItemDiv>
      <div className="top">
        <div className="left">
          <img
            src="http://p4.music.126.net/pcYHpMkdC69VVvWiynNklA==/109951166952713766.jpg?param=100y100"
            alt=""
          />
        </div>
        <div className="right">
          <h4>飙升榜</h4>
          <p>
            <span></span>
            <span></span>
          </p>
        </div>
      </div>
      <ul>
        <li>
          <span>1 征法撒旦阿斯发阿斯蒂芬阿斯弗</span>
          <span></span>
        </li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
        <li>
          <a href="">查看更多></a>
        </li>
      </ul>
    </RankItemDiv>
  );
});

export default RankItem;
