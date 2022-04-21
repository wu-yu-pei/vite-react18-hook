import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import RecTitle from '@/components/rec-title';
import RankItem from '@/components/rank-item';

import { RankWarperDiv } from './style';

import {
  getBiaoshengAction,
  getXingeAction,
  getYuanchangAction,
} from '../../../../store/action-creater';

const Ranking = memo(() => {
  const dispatch = useDispatch();

  const { biaosheng, xinge, yuanchang } = useSelector((state) => ({
    biaosheng: state.recommend.get('biaosheng'),
    xinge: state.recommend.get('xinge'),
    yuanchang: state.recommend.get('yuanchang'),
  }));

  useEffect(() => {
    dispatch(getBiaoshengAction(3));
    dispatch(getXingeAction(0));
    dispatch(getYuanchangAction(2));
  }, [dispatch]);

  return (
    <RankWarperDiv>
      <RecTitle title="榜单" href="http://baidu.com"></RecTitle>
      <div className="content">
        <RankItem listDate={biaosheng} title="飙升榜" coverImgUrl="http://p3.music.126.net/pcYHpMkdC69VVvWiynNklA==/109951166952713766.jpg?param=100y100" moreLink="https://music.163.com/discover/toplist?id=19723756"></RankItem>
        <RankItem listDate={xinge} title="新歌榜" coverImgUrl="http://p4.music.126.net/wVmyNS6b_0Nn-y6AX8UbpQ==/109951166952686384.jpg?param=100y100" moreLink="https://music.163.com/discover/toplist?id=3779629"></RankItem>
        <RankItem listDate={yuanchang} title="原创榜" coverImgUrl="http://p4.music.126.net/iFZ_nw2V86IFk90dc50kdQ==/109951166961388699.jpg?param=100y100" moreLink="https://music.163.com/discover/toplist?id=2884035"></RankItem>
      </div>
    </RankWarperDiv>
  );
});

export default Ranking;
