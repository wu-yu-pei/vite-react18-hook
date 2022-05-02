import { getCurrentSong, getLyric } from '@/services/player';
import { parseLyc } from '../../../utils/parse';

import * as actionType from './const';

function changeCurrentSong(currentSong) {
  return {
    type: actionType.CHANGE_CURRENT_SONG,
    currentSong,
  };
}

function changeCurrentIndex(currentIndex) {
  return {
    type: actionType.CHANGE_CURRENT_INDEX,
    currentIndex,
  };
}

function changePlayList(playList) {
  return {
    type: actionType.CHANGE_PLAY_LIST,
    playList,
  };
}

export function changePlayType(playType) {
  return {
    type: actionType.CHANGE_PLAY_TYPE,
    playType,
  };
}

export function changePlayNext(tags) {
  return (dispatch, getState) => {
    const playType = getState().player.get('playType');
    const playList = getState().player.get('playList');
    let currentIndex = getState().player.get('currentIndex');
    switch (playType) {
      case 1: // 随机播放
        let randomIndex = Math.floor(Math.random() * playList.length);
        while (randomIndex === currentIndex) {
          randomIndex = Math.floor(Math.random() * playList.length);
        }
        currentIndex = randomIndex;
        break;
      case 2: // 单曲循环
        // currentIndex = currentIndex;
        break;
      default:
        currentIndex += tags;
        if (currentIndex >= playList.length) {
          currentIndex = 0;
        }
        if (currentIndex < 0) {
          currentIndex = playList.length - 1;
        }
        break;
    }
    dispatch(changeCurrentIndex(currentIndex));
    dispatch(changeCurrentSong(playList[currentIndex]));
    dispatch(getCurrentLycAction(playList[currentIndex].id));
  };
}

export function changeCurrentLyc(lyric) {
  return {
    type: actionType.CHANGE_CURRENT_LYC,
    currentLyc: lyric,
  };
}

export function getCurrentLycAction(id) {
  return (dispatch) => {
    getLyric(id).then((res) => {
      let lyc = res.lrc.lyric;
      let parseLycs = parseLyc(lyc);
      dispatch(changeCurrentLyc(parseLycs));
    });
  };
}

export function getCurrentSongAction(ids) {
  return (dispatch, getState) => {
    const playList = getState().player.get('playList');
    const songIndex = playList.findIndex((song) => song.id === ids);

    if (songIndex !== -1) {
      // 列表中有这首歌
      // 改变currentIndex
      dispatch(changeCurrentIndex(songIndex));
      dispatch(changeCurrentSong(playList[songIndex]));
      dispatch(getCurrentLycAction(ids));
    } else {
      // 列表中没有这首歌
      getCurrentSong(ids).then((res) => {
        const newPlayList = [...playList];
        newPlayList.push(res.songs[0]);
        dispatch(changePlayList(newPlayList));
        dispatch(changeCurrentIndex(newPlayList.length - 1));
        dispatch(changeCurrentSong(res.songs[0]));
        dispatch(getCurrentLycAction(ids));
      });
    }
  };
}
