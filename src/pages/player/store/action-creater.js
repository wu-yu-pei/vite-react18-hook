import { getCurrentSong } from '@/services/player';

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

export function getCurrentSongAction(ids) {
  return (dispatch, getState) => {
    const playList = getState().player.get('playList');
    const songIndex = playList.findIndex((song) => song.id === ids);

    if (songIndex !== -1) {
      // 列表中有这首歌
      // 改变currentIndex
      dispatch(changeCurrentIndex(songIndex));
      dispatch(changeCurrentSong(playList[songIndex]))
    } else {
      // 列表中没有这首歌
      getCurrentSong(ids).then((res) => {
        const newPlayList = [...playList];
        newPlayList.push(res.songs[0]);
        dispatch(changePlayList(newPlayList))
        dispatch(changeCurrentIndex(newPlayList.length - 1));
        dispatch(changeCurrentSong(res.songs[0]));
      });
    }
  };
}
