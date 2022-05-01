import React, { memo, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { PlayerBarWarpper, ControlWarpper, CenterWarpper, RightWarpper } from './style';
import { Slider } from 'antd';

import { getCurrentSongAction } from '../store/action-creater';

import { getSize, formatMinuteSecond, getPlaySong } from '@/utils/format-utils';

const AppPlayerBar = memo(() => {
  const audioRef = useRef();
  const [currentTime, setCurrentTime] = useState();
  // reudx
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentSongAction(167876));
  }, [dispatch]);

  const { currentSong } = useSelector((state) => {
    return {
      currentSong: state.player.get('currentSong'),
    };
  });

  const songName = currentSong && currentSong.name;
  const songerName = currentSong && currentSong.ar && currentSong.ar[0].name;
  const picUrl = currentSong && currentSong.al && currentSong.al.picUrl;
  const dt = currentSong && currentSong.dt;

  // outher funciont
  // 跳转页面
  function goto() {
    console.log(20);
  }
  // play music
  function playMusic() {
    audioRef.current.src = getPlaySong(currentSong.id);
    audioRef.current.play();
  }

  // on music paly
  function timeUpdate(e) {
    setCurrentTime(e.target.currentTime * 1000);
  }

  return (
    <PlayerBarWarpper>
      <div className="content wrap-v1">
        <ControlWarpper>
          <a href="javascript:;"></a>
          <a href="javascript:;" onClick={playMusic}></a>
          <a href="javascript:;"></a>
        </ControlWarpper>
        <CenterWarpper>
          <a href="#">
            <img src={getSize(picUrl, 33)} onClick={(e) => goto()} alt="" />
          </a>
          <div className="info">
            <div className="info-top">
              <a href="">{songName}</a>
              <span>
                <a href="">{songerName}</a>
              </span>
              <a href="">asdf</a>
            </div>
            <div className="info-buttom">
              <div className="info-buttom-bar">
                <Slider value={(currentTime / dt) * 100}></Slider>
              </div>

              <div className="info-buttom-time">
                {formatMinuteSecond(currentTime)}/{formatMinuteSecond(dt)}
              </div>
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
      <audio ref={audioRef} onTimeUpdate={timeUpdate}></audio>
    </PlayerBarWarpper>
  );
});

export default AppPlayerBar;
