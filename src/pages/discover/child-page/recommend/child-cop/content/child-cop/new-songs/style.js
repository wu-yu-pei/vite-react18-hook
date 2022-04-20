import styled from 'styled-components';

export const AlbumsWarpperDiv = styled.div`
  .content {
    display: flex;

    margin: 10px 0;
    height: 180px;
    /* border: 1px solid #000; */
    align-items: center;
    .left {
      width: 16px;
    }
    .center {
      flex: 1;
      overflow: hidden;
      .car {
        width: 700px !important;
        display: flex !important;
        align-items: center;
        justify-content: space-around;
        div {
          flex: 1;
        }
      }
    }
    .right {
      width: 16px;
    }
  }
`;
