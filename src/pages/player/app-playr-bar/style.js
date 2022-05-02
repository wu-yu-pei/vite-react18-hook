import styled from 'styled-components';

export const PlayerBarWarpper = styled.div`
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  height: 53px;
  z-index: 99999;
  visibility: visible;
  background: url(../../src/assets/img/playbar.png) 0 0 repeat-x;
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 47px;
    transform: translate(0, 5px);
  }
`;

export const ControlWarpper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 137px;
  a {
    display: block;
    width: 28px;
    height: 28px;
    background-image: url(../../src/assets/img/playbar.png);
    :nth-child(1) {
      background-position: 0 -130px;
    }
    :nth-child(2) {
      width: 36px;
      height: 36px;
      background-position: 0 ${(props) => props.position};
    }
    :nth-child(3) {
      background-position: -80px -130px;
    }
  }
`;
export const CenterWarpper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  > a {
    position: relative;
    display: block;
    width: 34px;
    height: 34px;
    background-image: url(../../src/assets/img/playbar.png);
    background-position: 0 -80px;
    overflow: hidden;
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 33px;
      height: 33px;
      transform: translate(-50%, -50%);
      border-radius: 7px;
    }
  }
  .info {
    display: flex;
    flex-wrap: wrap;
    margin-left: 13px;
    color: rgb(155, 155, 155);
    .info-top {
      font-size: 12px;
      width: 100%;
      height: 28px;
      line-height: 28px;
      > a {
        :first-child {
          color: #fff;
        }
      }
      span {
        margin-left: 10px;
        a {
          color: rgb(155, 155, 155);
        }
      }
    }
    .info-buttom {
      display: flex;
      /* align-items: center; */
      width: 581px;
      height: 10px;
      .info-buttom-bar {
        width: 493px;

        .ant-slider {
          background-image: url(../../src/assets/img/statbar.png);
          margin: -2px 0 0 0;
          .ant-slider-rail {
            background-color: transparent;
            margin-top: -2px;
          }
          .ant-slider-track {
            margin-top: -3px;
            height: 8px;
            background-image: url(../../src/assets/img/statbar.png);
            background-position: 0 -67px;
          }
          .ant-slider-handle {
            margin-top: -7px;
            border-color: #91272c;
          }
        }
      }
      .info-buttom-time {
        font-size: 10px;
        margin: -7px 0 0 20px;
      }
    }
  }
`;
export const RightWarpper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 100px;
  .left {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 87px;
    a {
      display: block;
      width: 25px;
      height: 25px;
      :nth-child(1) {
        background: url(../../src/assets/img/play-bar-item.png);
        :hover {
          background-position: 0 25px;
        }
      }
      :nth-child(2) {
        background: url(../../src/assets/img/playbar.png);
        background-position: -88px -163px;
        :hover {
          background-position: -88px -189px;
        }
      }
      :nth-child(3) {
        background: url(../../src/assets/img/playbar.png);
        background-position: -114px -163px;
        :hover {
          background-position: -114px -189px;
        }
      }
    }
  }
  .right {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: url(../../src/assets/img/playbar.png) no-repeat;
    background-position: -147px -248px;
    width: 113px;
    a {
      display: block;
      width: 25px;
      height: 25px;
      :nth-child(1) {
        background: url(../../src/assets/img/playbar.png);
        background-position: -4px -248px;
        :hover {
          background-position: -33px -248px;
        }
      }
      :nth-child(2) {
        background: url(../../src/assets/img/playbar.png);
        background-position: ${(props) => {
          switch (props.playType) {
            case 0:
              return '-4px -344px';
            case 1:
              return '-65px -248px';
            case 2:
              return '-67px -344px';
            default:
              break;
          }
        }};
        :hover {
          background-position: ${(props) => {
            switch (props.playType) {
              case 0:
                return '-34px -344px';
              case 1:
                return '-92px -248px';
              case 2:
                return '-94px -344px';
              default:
                break;
            }
          }};
        }
      }
      :nth-child(3) {
        background: url(../../src/assets/img/playbar.png);
        background-position: -42px -68px;
        :hover {
          background-position: -42px -98px;
        }
      }
    }
  }
`;
