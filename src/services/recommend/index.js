import request from '../request';

export function getTopBannerDate() {
  return request({
    url: '/banner',
  });
}

export function getHotRecommendDate(limit) {
  return request({
    url: '/personalized',
    params: {
      limit,
    },
  });
}
