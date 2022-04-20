import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import RecTitle from '@/components/rec-title';
import RecSongItem from '@/components/rec-song-item';
import { Carousel } from 'antd';

import { getAlbumAction } from '../../../../store/action-creater';

import { AlbumsWarpperDiv } from './style';

const NewSongs = memo(() => {
  const { albums } = useSelector((state) => {
    console.log(state.recommend);
    return {
      albums: state.recommend.get('albums'),
    };
  }, shallowEqual);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAlbumAction(10));
  }, [dispatch]);

  return (
    <AlbumsWarpperDiv>
      <RecTitle title="新碟上架" href="http://baidu.com"></RecTitle>
      <div className="content">
        <div className="center">
          <Carousel autoplay dots={false}>
            {[0, 1].map((item, index) => {
              return (
                <div key={index} className="car">
                  {albums.slice(index * 5, (index + 1) * 5).map((inItem, inIndex) => {
                    return <RecSongItem {...inItem} key={inIndex}></RecSongItem>;
                  })}
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </AlbumsWarpperDiv>
  );
});

export default NewSongs;
