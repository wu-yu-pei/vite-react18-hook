import styled from 'styled-components';

export const RankItemDiv = styled.div`
  width: 230px;
  height: 560px;
  border: 1px solid #d3d3d3;
  .top {
    height: 140px;
    display: flex;
    column-gap: 5px;
    padding: 20px 0 20px 19px;
    .left {
      img {
      }
    }

    .right {
      h4 {
        margin-top: 7px;
        font-weight: 800;
        font-size: 16px;
      }
      p {
        display: flex;
        span {
          display: block;
          width: 22px;
          height: 22px;
          margin: 0 7px;
          background: url(../../../../../src/assets/img/sprite_02.png);
          cursor: pointer;
          :first-child {
            background-position: -267px -205px;
            :hover {
              background-position: -267px -235px;
            }
          }
          :last-child {
            background-position: -300px -205px;
            :hover {
              background-position: -300px -235px;
            }
          }
        }
      }
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100% - 140px);
    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex: 1;
      padding-left: 30px;
      padding-right: 10px;
      span {
        cursor: pointer;
        :nth-child(1) {
          flex: 1;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        :nth-child(2) {
          display: none !important;
          display: inline-block;
          width: 82px;
          height: 100%;
          background: url(../../../../../src/assets/img/sprite_02.png) no-repeat;
          background-position: 0 -9999999px;
        }
      }
      &:hover {
        span {
          :nth-child(2) {
            display: inline-block !important;
            background-position: -267px -228px;
          }
        }
      }

      :nth-child(2n + 1) {
        background: #e8e8e8;
      }
      :last-child {
        padding-left: 150px;
        line-height: 31px;
        a {
          color: #000;
          :hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
`;
