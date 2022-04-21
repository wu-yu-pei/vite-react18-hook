import styled from 'styled-components';

export const RecNewItemDiv = styled.div`
  width: 120px;
  height: 156px;
  img {
    text-align: center;
    width: 100px;
    height: 100px;
  }
  p {
    margin: 5px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    a {
      color: #000;
      font-size: 12px;
    }
  }
`;
