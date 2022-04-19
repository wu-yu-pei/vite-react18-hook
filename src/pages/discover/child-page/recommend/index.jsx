import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import { getTopBannerAction } from './store/action-creater';

const Recommend = () => {
  const { banner } = useSelector(
    (state) => ({
      banner: state.recommend.get('topBanner'),
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopBannerAction());
  }, []);

  return <div>推荐{banner.length}</div>;
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
