import * as actionTypes from './const';

import { getTopBannerDate } from '@/services/recommend';

export const changeTopBanerAction = (bannerDate) => ({
  type: actionTypes.CHANGE_RECOMMEND_BANER,
  banner: bannerDate,
});

export const getTopBannerAction = () => {
  return (dispatch) => {
    getTopBannerDate().then((res) => {
      dispatch(changeTopBanerAction(res.banners));
    });
  };
};
