import * as actionTypes from './const';

const initState = {
  topBanner: [],
};

function reducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_RECOMMEND_BANER:
      return { ...initState, topBanner: [] };

    default:
      return state;
  }
}

export default reducer;
