import styled from 'styled-components';

export const RecNewItemDiv = styled.div`
  width: 120px;
  height: 156px;
  img {
    width: 100px;
    height: 100px;
    margin: 0 auto;
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
