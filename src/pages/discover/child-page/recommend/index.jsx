import React, { memo, useEffect } from 'react';
import { RecommendWarpper, RecommendContentWarpper } from './style';

import TopBanner from './child-cop/top-banner';
import Content from './child-cop/content';
import Left from './child-cop/left';

const Recommend = () => {
  return (
    <RecommendWarpper>
      <TopBanner></TopBanner>
      <RecommendContentWarpper className="wrap-v2">
        <Content></Content>
        <Left></Left>
      </RecommendContentWarpper>
    </RecommendWarpper>
  );
};

export default memo(Recommend);

/**
 * 使用redux:
 * hook:        useDispatch()  useSelector()
 * 原始:         mapStateToProps mapDispatchToProps  connect
 */
// const Recommend = (props) => {
//   const { banner, getTopBanner } = props;

//   useEffect(() => {
//     getTopBanner();
//   }, [getTopBanner]);

//   return <div>推荐{banner.length}</div>;
// };

// const mapStateToProps = (state) => {
//   return {
//     banner: state.recommend.topBanner,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getTopBanner: () => {
//       dispatch(getTopBannerAction());
//     },
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(memo(Recommend));
