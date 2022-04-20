import styled from 'styled-components';

export const WarpperDiv = styled.div`
  width: 140px;
  height: 180px;
  .top {
    position: relative;
    img {
      width: 140px;
      height: 140px;
    }
    p {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 20px;
      padding: 0 10px;
      background-color: #000;
      color: #eee7e7;
      opacity: 0.7;
      margin-bottom: 0;
      line-height: 20px;
      span {
        float: left;
        width: 20px;
        height: 20px;
        :nth-of-type(1) {
          background-image: url(../../src/assets/img/sprite_icon.png);
          background-position: 0 -19px;
          background-repeat: no-repeat;
        }
        :nth-of-type(2) {
          width: 55px;
          font-size: 10px;
        }
        :nth-of-type(3) {
          float: right;
          background-image: url(../../src/assets/img/sprite_icon.png);
          background-position: 0 3px;
          background-repeat: no-repeat;
        }
      }
    }
  }
  .bottom {
    color: #000;
    :hover {
      text-decoration: underline;
      font-size: 14px;
    }
  }
`;
