import styled from 'styled-components';

export const DirecoverWrapper = styled.div`
  .discover-top {
    height: 34px;
    background-color: #c20c0c;
    ul {
      display: flex;
      margin-left: 407px;
      li {
        line-height: 34px;
        height: 100%;
        a {
          padding: 0 13px;
          color: #fff;
          border-radius: 8px;
          text-decoration: none;
          span {
            padding: 3px 10px;
            border-radius: 10px;
          }
          &.active {
            span {
              background-color: #9b0909;
            }
          }
        }
      }
    }
  }
`;
