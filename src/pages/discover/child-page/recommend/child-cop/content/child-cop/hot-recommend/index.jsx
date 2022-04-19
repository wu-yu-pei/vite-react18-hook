import React, { memo } from 'react';

import RecTitle from '@/components/rec-title';

const HotRecommend = memo(() => {
  return (
    <div>
      <RecTitle title="热门推荐" list={['A', 'B', 'C', 'D']} href="http://baidu.com"></RecTitle>
    </div>
  );
});

export default HotRecommend;
