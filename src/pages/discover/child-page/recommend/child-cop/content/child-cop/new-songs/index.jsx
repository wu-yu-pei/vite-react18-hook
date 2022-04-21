import React, { createRef, memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import RecTitle from '@/components/rec-title';
import RecNewItem from '@/components/rec-new-item';
import { Carousel } from 'antd';

import { getAlbumAction } from '../../../../store/action-creater';

import { AlbumsWarpperDiv } from './style';

const NewSongs = memo(() => {
  const CarouselRef = createRef();

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
        <div className="left" onClick={e => CarouselRef.current.pre()}></div>
        <div className="center">
          <Carousel autoplay dots={false} ref={CarouselRef}>
            {[0, 1].map((item, index) => {
              return (
                <div key={index} className="car">
                  {albums.slice(index * 5, (index + 1) * 5).map((inItem, inIndex) => {
                    return <RecNewItem {...inItem} key={inIndex}></RecNewItem>;
                  })}
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="right" onClick={e => CarouselRef.current.next()}></div>
      </div>
    </AlbumsWarpperDiv>
  );
});

export default NewSongs;
