import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { PlayerBarWarpper, ControlWarpper, CenterWarpper, RightWarpper } from './style';
import { Slider } from 'antd';

import { getCurrentSongAction, changePlayType, changePlayNext } from '../store/action-creater';

import { getSize, formatMinuteSecond, getPlaySong } from '@/utils/format-utils';

const AppPlayerBar = memo(() => {
  const [currentTime, setCurrentTime] = useState(0);
  const [Progress, setProgress] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // reudx
  const dispatch = useDispatch();
  const audioRef = useRef();

  let { currentSong, playType } = useSelector((state) => {
    return {
      currentSong: state.player.get('currentSong'),
      playType: state.player.get('playType'),
    };
  });

  useEffect(() => {
    dispatch(getCurrentSongAction(167876));
  }, [dispatch]);

  useEffect(() => {
    audioRef.current.src = getPlaySong(currentSong.id);
    audioRef.current
      .play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch((err) => {
        setIsPlaying(false);
      });
  }, [currentSong]);

  const songName = currentSong && currentSong.name;
  const songerName = currentSong && currentSong.ar && currentSong.ar[0].name;
  const picUrl = currentSong && currentSong.al && currentSong.al.picUrl;
  const dt = currentSong && currentSong.dt;
  const showCurrentTime = formatMinuteSecond(currentTime);

  // play music
  function playMusic() {
    // 这里有个细节 把设置数据放在后面
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  }
  // on music paly
  function timeUpdate(e) {
    if (isChanging) return;
    setCurrentTime(e.target.currentTime * 1000);
    setProgress(((e.target.currentTime * 1000) / dt) * 100);
  }

  // on music play end
  function endEd(e) {
    dispatch(changePlayNext(1))
  }

  // change play type
  function handleChangePlayType() {
    playType = playType + 1;
    if (playType >= 3) {
      playType = 0;
    }
    dispatch(changePlayType(playType));
  }

  // next
  function handleNext(tags) {
    dispatch(changePlayNext(tags));
  }

  // 或快滑动
  const progressChange = useCallback(
    (value) => {
      setIsChanging(true);
      const currentTime = (value / 100) * dt;
      // 设置进度
      setProgress(value);
      // 设置当前时间
      setCurrentTime(currentTime);
    },
    [dt]
  );

  const progressAfterChange = useCallback(
    (value) => {
      // 设置音乐播放的位置
      audioRef.current.currentTime = ((value / 100) * dt) / 1000;
      setIsChanging(false);
      if (!isPlaying) {
        audioRef.current.play();
        setIsPlaying(!isPlaying);
      }
    },
    [isPlaying, dt]
  );

  return (
    <PlayerBarWarpper>
      <div className="content wrap-v1">
        <ControlWarpper position={isPlaying ? '-163px' : '-202px'}>
          <a href="javascript:;" onClick={() => handleNext(-1)}></a>
          <a href="javascript:;" onClick={playMusic}></a>
          <a href="javascript:;" onClick={() => handleNext(1)}></a>
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
                <Slider
                  value={Progress}
                  onChange={progressChange}
                  onAfterChange={progressAfterChange}
                ></Slider>
              </div>

              <div className="info-buttom-time">
                {showCurrentTime}/{formatMinuteSecond(dt)}
              </div>
            </div>
          </div>
        </CenterWarpper>
        <RightWarpper playType={playType}>
          <div className="left">
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
          </div>
          <div className="right">
            <a href=""></a>
            <a href="javascript:;" onClick={handleChangePlayType}></a>
            <a href=""></a>
          </div>
        </RightWarpper>
      </div>
      <audio ref={audioRef} onTimeUpdate={timeUpdate} onEnded={endEd}></audio>
    </PlayerBarWarpper>
  );
});

export default AppPlayerBar;
