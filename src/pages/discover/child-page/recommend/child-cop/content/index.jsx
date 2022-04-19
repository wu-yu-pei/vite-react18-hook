import React, { memo } from 'react';
import { ContentDiv } from './style';

import HotRecommend from './child-cop/hot-recommend';
import NewSongs from './child-cop/new-songs';
import Ranking from './child-cop/ranking';

const Content = memo(() => {
  return (
    <ContentDiv>
      <HotRecommend></HotRecommend>
      <NewSongs></NewSongs>
      <Ranking></Ranking>
    </ContentDiv>
  );
});

export default Content;
