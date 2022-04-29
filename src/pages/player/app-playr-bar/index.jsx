import React, { memo } from 'react';

import { PlayerBarWarpper, ControlWarpper, CenterWarpper, RightWarpper } from './style';

const AppPlayerBar = memo(() => {
  return (
    <PlayerBarWarpper>
      <div className="content wrap-v1">
        <ControlWarpper>
          <a href="javascript:;"></a>
          <a href="javascript:;"></a>
          <a href="javascript:;"></a>
        </ControlWarpper>
        <CenterWarpper>
          <a href="#">
            <img
              src="http://p4.music.126.net/SEyHiif0UfP68pTEugkdRg==/109951166723691860.jpg?param=34y34"
              alt=""
            />
          </a>
          <div className="info">
            <div className="info-top">
              <a href="">独 守 烟 花 渐 凉</a>
              <span>
                <a href="">万古</a>/<a href="">万古呀</a>
              </span>
              <a href="">asdf</a>
            </div>
            <div className="info-buttom">
              <div className="info-buttom-bar"></div>
              <div className="info-buttom-time">01:13/03:20</div>
            </div>
          </div>
        </CenterWarpper>
        <RightWarpper>
          <div className="left">
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
          </div>
          <div className="right">
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
          </div>
        </RightWarpper>
      </div>
    </PlayerBarWarpper>
  );
});

export default AppPlayerBar;
