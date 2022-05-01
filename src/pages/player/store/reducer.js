import { Map } from 'immutable';
import * as actionType from './const';
const defaultState = Map({
  currentSong: {},
  currentIndex: 0,
  playList: [],
});

export default function reducer(state = defaultState, actions) {
  switch (actions.type) {
    case actionType.CHANGE_CURRENT_SONG:
      return state.set('currentSong', actions.currentSong);
    case actionType.CHANGE_CURRENT_INDEX:
      return state.set('currentIndex', actions.currentIndex);
    case actionType.CHANGE_PLAY_LIST:
      return state.set('playList', actions.playList);
    default:
      return state;
  }
}
