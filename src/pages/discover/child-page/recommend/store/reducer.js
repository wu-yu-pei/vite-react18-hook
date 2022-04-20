import * as actionTypes from './const';
import { Map } from 'immutable';

const initState = Map({
  topBanner: [],
  hotRecommend: [],
});

function reducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_RECOMMEND_BANER:
      return state.set('topBanner', action.topBanner);

    case actionTypes.CHANGE_RECOMMEND_HOTRECOMMEND:
      return state.set('hotRecommend', action.hotRecommend);

    default:
      return state;
  }
}

export default reducer;
