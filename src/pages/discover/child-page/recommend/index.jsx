import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import { getTopBannerAction } from './store/action-creater';

const Recommend = (props) => {
  const { banner, getTopBanner } = props;

  useEffect(() => {
    getTopBanner();
  }, [getTopBanner]);

  return <div>推荐{banner.length}</div>;
};

const mapStateToProps = (state) => {
  return {
    banner: state.recommend.topBanner,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTopBanner: () => {
      dispatch(getTopBannerAction());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(Recommend));
