import * as actionTypes from './const';
import { Map } from 'immutable';

const initState = Map({
  topBanner: [],
});

function reducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_RECOMMEND_BANER:
      return state.set('topBanner', action.topBanner);
    default:
      return state;
  }
}

export default reducer;
