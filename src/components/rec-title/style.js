import styled from 'styled-components';

export const RecTitelDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 35px;
  line-height: 35px;
  padding: 0 0px 0 34px;
  border-bottom: 2px solid #c10d0c;
  background: url(../../src/assets/img/sprite_02.png) no-repeat;
  background-position: -225px -152px;
  .left {
    display: flex;
    align-items: center;
    height: 35px;
    line-height: 35px;
    span {
      font-size: 20px;
      font-weight: normal;
    }
    ul {
      display: flex;
      align-items: center;
      gap: 5px;
      margin: 0 0 0 15px;
      li {
        line-height: 35px;
        :first-child a {
          border: none;
        }
        a {
          padding: 0 10px;
          font-size: 12px;
          text-decoration: none;
          color: #666;
          border-left: 1px solid #ccc;
        }
      }
    }
  }
  .right {
    a {
      text-decoration: none;
      color: #666;
      :hover {
        text-decoration: underline;
      }
    }
    span {
      display: inline-block;
      width: 20px;
      height: 20px;
      margin-left: 5px;
      background: url(../../src/assets/img/sprite_02.png) no-repeat 0 -240px;
      vertical-align: middle;
    }
  }
`;
