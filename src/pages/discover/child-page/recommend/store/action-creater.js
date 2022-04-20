import * as actionTypes from './const';

import { getTopBannerDate, getHotRecommendDate } from '@/services/recommend';

export const changeTopBanerAction = (topBannerDate) => ({
  type: actionTypes.CHANGE_RECOMMEND_BANER,
  topBanner: topBannerDate,
});

export const changeHotRecommendAction = (HotRecommendDate) => ({
  type: actionTypes.CHANGE_RECOMMEND_HOTRECOMMEND,
  hotRecommend: HotRecommendDate,
});

export const getTopBannerAction = () => {
  return (dispatch) => {
    getTopBannerDate().then((res) => {
      dispatch(changeTopBanerAction(res.banners));
    });
  };
};

export const getHotRecommendAction = (limit) => {
  return (dispatch) => {
    getHotRecommendDate(limit).then((res) => {
      dispatch(changeHotRecommendAction(res.result));
    });
  };
};
