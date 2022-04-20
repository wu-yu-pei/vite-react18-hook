import * as actionTypes from './const';

import { getTopBannerDate, getHotRecommendDate, getAlbumDate } from '@/services/recommend';

export const changeTopBanerAction = (topBannerDate) => ({
  type: actionTypes.CHANGE_RECOMMEND_BANER,
  topBanner: topBannerDate,
});

export const changeHotRecommendAction = (HotRecommendDate) => ({
  type: actionTypes.CHANGE_RECOMMEND_HOTRECOMMEND,
  hotRecommend: HotRecommendDate,
});

export const changeAlbumAction = (AlbumDate) => ({
  type: actionTypes.CHANGE_RECOMMEND_ALBUM,
  albums: AlbumDate
})

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


export const getAlbumAction = (limit) => {
  return (dispatch) => {
    getAlbumDate(limit).then(res => {
      dispatch(changeAlbumAction(res.albums))
    })
  }
}