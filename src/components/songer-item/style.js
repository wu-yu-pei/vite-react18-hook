import styled from 'styled-components';

export const SongerItemDiv = styled.div`
  display: flex;
  align-items: center;
  width: 210px;
  height: 62px;
  background: #fafafa;
  margin: 10px 0;
  border: 1px solid #ccc;
  &:hover {
    background-color: #f4f4f4;
  }
  img {
    width: 62px;
    height: 62px;
  }
  .right {
    flex: 1;
    overflow: hidden;
    cursor: pointer;
    p {
      :nth-child(1) {
        padding-left: 20px;
        font-size: 14px;
        font-weight: 700;
        margin: 0;
      }
      :nth-child(2) {
        padding-left: 20px;
        font-size: 12px;
        margin: 5px 0 0 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
`;
