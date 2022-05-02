/**
[00:00.000] 作词 : 许嵩
[00:01.000] 作曲 : 许嵩
[00:02.000] 编曲 : 许嵩
[00:22.240]天空好想下雨
[00:24.380]我好想住你隔壁
[00:26.810]傻站在你家楼下
 *
 */
export function parseLyc(lyc) {
  const lyrics = [];
  const array = lyc.split('\n');
  let reg = /\[(\d{2}):(\d{2}).(\d{2,3})\]/g;

  for (let item of array) {
    if (item) {
      const res = reg.exec(item);
      if (!res) continue;
      const time1 = res[1] * 60 * 1000;
      const time2 = res[2] * 1000;
      const time3 = res[3].length === 3 ? res[3] * 1 : res[3] * 10;
      const totaltime = time1 + time2 + time3;
      const content = item.replace(reg, '');
      lyrics.push({ time: totaltime, content });
    }
  }
  return lyrics;
}
