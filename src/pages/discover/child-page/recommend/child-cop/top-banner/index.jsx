import React, { memo, useEffect, createRef, useState, useCallback } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import { getTopBannerAction } from '../../store/action-creater';

import { BannerWarpper } from './style';
import { Carousel } from 'antd';

const TopBanner = memo(() => {
  console.log('render');
  // local state
  const carouselRef = createRef();
  const [currentBanner, setCurrentBanner] = useState(0);

  // reudx
  const { banner } = useSelector(
    (state) => ({
      banner: state.recommend.get('topBanner'),
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch]);

  // 页面逻辑
  const changeBanner = useCallback(function changeBanner(from, to) {
    setCurrentBanner(to);
  });

  const bgImg = banner[currentBanner] && banner[currentBanner].imageUrl + '?imageView&blur=40x20';
  console.log(bgImg);
  return (
    <BannerWarpper bgImg={bgImg}>
      <div className="wrap-v1">
        <div className="left">
          <span onClick={(e) => carouselRef.current.prev()}></span>
        </div>
        <div className="center wrap-v2">
          <div className="center-left">
            <Carousel effect="fade" ref={carouselRef} beforeChange={changeBanner}>
              {banner.map((item, index) => {
                return (
                  <div key={index}>
                    <img src={item.imageUrl} alt={item.typeTitle} />
                  </div>
                );
              })}
            </Carousel>
          </div>
          <div className="center-right">B</div>
        </div>
        <div className="right">
          <span onClick={(e) => carouselRef.current.next()}></span>
        </div>
      </div>
    </BannerWarpper>
  );
});

export default TopBanner;
