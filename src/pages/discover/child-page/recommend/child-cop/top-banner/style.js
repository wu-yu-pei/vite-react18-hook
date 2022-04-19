import styled from 'styled-components';

export const BannerWarpper = styled.div`
  height: 283px;
  background: url(${(props) => props.bgImg}) center center/9000px;

  .wrap-v1 {
    display: flex;
    align-items: center;
    .left,
    .right {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 60px;
      height: 100%;
      span {
        display: block;
        width: 37px;
        height: 60px;
        background-image: url(../../../../../src/assets/img/banner.png);
      }
    }
    .left {
      span {
        background-position: 0px -360px;
        :hover {
          background-position: 0px -430px;
        }
      }
    }

    .right {
      span {
        background-position: 0px -510px;
        :hover {
          background-position: 0px -580px;
        }
      }
    }

    .center {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex: 1;
      .center-left {
        height: 283px;
        width: 730px;
        img {
          width: 100%;
          height: 283px;
        }
      }
      .center-right {
        width: 254px;
        height: 283px;
        background-image: url(./../../../../src/assets/img/download.png);
        .download {
          display: block;
          width: 215px;
          height: 56px;
          margin: 186px 0 0 19px;
          background-position: 0 9999px;
          text-indent: -9999px;
        }
      }
    }
  }
`;
