import styled from 'styled-components';

export const RecLeftWarpperA = styled.a`
  display:  flex;
  padding: 5px 0;
  width: 210px;
  height: 50px;
  .left {
    img {
      width: 40px;
      height: 40px;
    }
  }
  .right {
    overflow: hidden;
    color: #000;
    p {
      margin: 0 0 0 5px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      :first-child {
        font-size: 12px;
      }
      :last-child {
        font-size: 12px;
        color: rgb(102,102,102);
      }
    }
  }
`;
