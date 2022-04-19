import * as actionTypes from './const';

import { getTopBannerDate } from '@/services/recommend';

export const changeTopBanerAction = (topBannerDate) => ({
  type: actionTypes.CHANGE_RECOMMEND_BANER,
  topBanner: topBannerDate,
});

export const getTopBannerAction = () => {
  return (dispatch) => {
    getTopBannerDate().then((res) => {
      dispatch(changeTopBanerAction(res.banners));
    });
  };
};
