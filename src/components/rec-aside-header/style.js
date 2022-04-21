import styled from 'styled-components';

export const AsideDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 24px;
  border-bottom: 1px solid #ccc;
  .left {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 12px;
    font-weight: 700;
  }
  .right {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 12px;
    font-weight: 400;
    text-decoration-color: rgb(102, 102, 102);
    a {
      color: rgb(102, 102, 102);
      cursor: pointer;
    }
  }
`;
