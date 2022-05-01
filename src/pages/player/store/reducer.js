import { Map } from 'immutable';
import * as actionType from './const';
const defaultState = Map({
  currentSong: {},
});

export default function reducer(state = defaultState, actions) {
  switch (actions.type) {
    case actionType.CHANGE_CURRENT_SONG:
      return state.set('currentSong', actions.currentSong);
    default:
      return state;
  }
}
