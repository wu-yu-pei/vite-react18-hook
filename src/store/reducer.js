import { combineReducers } from 'redux';
import { reducer as recommendReducer } from '../pages/discover/child-page/recommend/store/index';
import { reducer as palyerReducer } from '../pages/player/store';

const cReducer = combineReducers({
  recommend: recommendReducer,
  player: palyerReducer,
});

export default cReducer;
