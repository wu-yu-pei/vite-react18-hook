import request from '../request';

export function getTopBannerDate() {
  return request({
    url: '/banner',
  });
}
