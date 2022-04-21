import * as actionTypes from './const';
import { Map } from 'immutable';

const initState = Map({
  topBanner: [],
  hotRecommend: [],
  albums: [],
  biaosheng: [],
  xinge: [],
  yuanchang: [],
});

function reducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_RECOMMEND_BANER:
      return state.set('topBanner', action.topBanner);

    case actionTypes.CHANGE_RECOMMEND_HOTRECOMMEND:
      return state.set('hotRecommend', action.hotRecommend);

    case actionTypes.CHANGE_RECOMMEND_ALBUM:
      return state.set('albums', action.albums);

    case actionTypes.CHANGE_RANKINGBIAOSHENG:
      return state.set('biaosheng', action.biaosheng);

    case actionTypes.CHANGE_RANKING_NEWSONGS:
      return state.set('xinge', action.xinge);

    case actionTypes.CHANGE_RANKING_YUANCHUANG:
      return state.set('yuanchang', action.yuanchang);

    default:
      return state;
  }
}

export default reducer;
