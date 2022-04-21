import * as actionTypes from './const';

import {
  getTopBannerDate,
  getHotRecommendDate,
  getAlbumDate,
  getTopList,
} from '@/services/recommend';

// 同步actions
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
  albums: AlbumDate,
});

export const changeBiaoshengAction = (Biaosheng) => ({
  type: actionTypes.CHANGE_RANKINGBIAOSHENG,
  biaosheng: Biaosheng,
});

export const changeXingeAction = (Xinge) => ({
  type: actionTypes.CHANGE_RANKING_NEWSONGS,
  xinge: Xinge,
});

export const changeYuanchangAction = (Yuanchang) => ({
  type: actionTypes.CHANGE_RANKING_YUANCHUANG,
  yuanchang: Yuanchang,
});

// 异步actions
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
    getAlbumDate(limit).then((res) => {
      dispatch(changeAlbumAction(res.albums));
    });
  };
};

export const getBiaoshengAction = (idx) => {
  return (dispatch) => {
    getTopList(idx).then((res) => {
      dispatch(changeBiaoshengAction(res.playlist.tracks.splice(0, 10)));
    });
  };
};

export const getXingeAction = (idx) => {
  return (dispatch) => {
    getTopList(idx).then((res) => {
      dispatch(changeXingeAction(res.playlist.tracks.splice(0, 10)));
    });
  };
};

export const getYuanchangAction = (idx) => {
  return (dispatch) => {
    getTopList(idx).then((res) => {
      dispatch(changeYuanchangAction(res.playlist.tracks.splice(0, 10)));
    });
  };
};
