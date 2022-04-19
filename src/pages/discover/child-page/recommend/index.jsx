import React, { memo, useEffect } from 'react';
import { RecommendWarpper } from './style';

import TopBanner from './child-cop/top-banner';

const Recommend = () => {
  return (
    <RecommendWarpper>
      <TopBanner></TopBanner>
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
