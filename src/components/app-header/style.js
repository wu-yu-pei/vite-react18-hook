import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  height: 75px;
  background-color: #242424;
  color: #fff;

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
  }

  .divider {
    height: 5px;
    background-color: #c20c0c;
  }
`;

export const HeaderLeft = styled.div`
  display: flex;
  height: 100%;

  .logo {
    display: block;
    cursor: pointer;
    width: 176px;
    height: 69px;
    background-position: 0 0;
  }

  ul {
    display: flex;
    align-items: center;

    li {
      width: 94px;
      height: 70px;
      color: #fff;
      line-height: 70px;
      text-align: center;

      &:hover {
        background-color: #000000;
        a {
          color: #fff;
        }
      }

      a {
        display: block;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        color: #ccc;
        cursor: pointer;
        text-decoration: none;

        &.active {
          border-bottom: 2px solid red;
        }
      }
      :last-child {
        position: relative;
        ::after {
          top: 13px;
          right: -8px;
          width: 28px;
          content: '';
          height: 20px;
          position: absolute;
          background-image: url(../../src/assets/img/sprite_01.png);
          background-position: -190px 0;
        }
      }
    }
  }
`;

export const HeaderRight = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  input {
    box-sizing: border-box;
    padding-left: 30px;
    width: 158px;
    height: 32px;
    border-radius: 32px;
    background-position: 0px -98px;
    background-color: #fff;
  }

  button {
    display: block;
    border-radius: 32px;
    border: 1px solid #4f4f4f;
    padding: 8px 10px;
    color: #ccc;
    background-color: #242424;
    :hover {
      border: 1px solid #fff;
    }
  }

  a {
    :hover {
      color: #fff;
    }
  }
`;
