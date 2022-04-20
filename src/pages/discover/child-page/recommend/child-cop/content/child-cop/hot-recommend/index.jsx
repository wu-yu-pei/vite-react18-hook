import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getHotRecommendAction } from '../../../../store/action-creater';

import RecTitle from '@/components/rec-title';
import RecSongItem from '@/components/rec-song-item';

import { HotRecommendWarpperDiv } from './style'

const HotRecommend = memo(() => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHotRecommendAction(8));
  }, [dispatch]);

  const { hotRecommend } = useSelector((state) => ({
    hotRecommend: state.recommend.get('hotRecommend'),
  }));


  return (
    <HotRecommendWarpperDiv>
      <RecTitle title="热门推荐" list={['华语', '流行', '摇滚', '民谣', '电子']} href="http://baidu.com"></RecTitle>
      <ul>
        {hotRecommend.map((item, index) => {
          return <RecSongItem {...item} key={index}></RecSongItem>;
        })}
      </ul>
    </HotRecommendWarpperDiv>
  );
});

export default HotRecommend;
