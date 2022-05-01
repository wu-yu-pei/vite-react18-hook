import  request  from './request';

export function getCurrentSong(ids) {
  return request({
    url: '/song/detail',
    params: {
      ids,
    },
  });
}
