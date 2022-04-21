import styled from 'styled-components';

export const AlbumsWarpperDiv = styled.div`
  .content {
    display: flex;
    background-color: #f5f5f5;
    margin: 10px 0;
    height: 180px;
    align-items: center;
    border: 1px solid #d3d3d3;
    .left {
      width: 16px;
      height: 25px;
      background: url(../../../../../src/assets/img/sprite_02.png);
      background-position: -265px -71px;
    }
    .center {
      width: 654px;
      overflow: hidden;
      .car {
        width: 100%;
        display: flex !important;
        align-items: center;
        justify-content: space-around;
      }
    }
    .right {
      width: 16px;
      height: 25px;
      background: url(../../../../../src/assets/img/sprite_02.png);
      background-position: -298px -71px;
    }
  }
`;
