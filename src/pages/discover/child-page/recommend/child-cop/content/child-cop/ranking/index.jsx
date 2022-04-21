import React, { memo } from 'react';
import RecTitle from '@/components/rec-title';

import RankItem from '@/components/rank-item';
import { RankWarperDiv } from './style';
const Ranking = memo(() => {
  return (
    <RankWarperDiv>
      <RecTitle title="榜单" href="http://baidu.com"></RecTitle>
      <div className="content">
        <RankItem></RankItem>
        <RankItem></RankItem>
        <RankItem></RankItem>
      </div>
    </RankWarperDiv>
  );
});

export default Ranking;
