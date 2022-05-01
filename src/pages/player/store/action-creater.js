import { getCurrentSong } from '@/services/player';

import * as actionType from './const';

function changeCurrentSong(currentSong) {
  return {
    type: actionType.CHANGE_CURRENT_SONG,
    currentSong,
  };
}

export function getCurrentSongAction(ids) {
  return (dispatch) => {
    getCurrentSong(ids).then((res) => {
      dispatch(changeCurrentSong(res.songs[0]));
    });
  };
}
