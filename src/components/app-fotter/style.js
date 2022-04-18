import styled from 'styled-components';

export const FotterWarper = styled.div`
  border-top: 1px solid #d3d3d3;

  .content {
    display: flex;
    justify-content: space-between;
    height: 172px;
    padding-top: 25px;
    .left {
      .left-link-item {
        color: #999;
        padding: 0 5px;
        border-left: 1px solid #d3d3d3;
        :first-child {
          border-left: none !important;
        }
      }

      p {
        padding: 0 5px;
        margin: 10px 0;
        span {
          display: inline-block;
          width: 18px;
          height: 21px;
          background-image: url(https://s2.music.126.net/style/web2/img/3rd/police.png?d8aea268b6291b9fb9f75f38aee13132);
          vertical-align: middle;
        }
      }
    }

    .right {
      ul {
        display: flex;
        gap: 10px;
        li {
          width: 60px;
          height: 70px;
          a {
            display: block;
            width: 58px;
            height: 58px;
            background: url(../../src/assets/img/sprite_footer_02.png) no-repeat;
            background-size: 121px 554px;
          }
          :nth-child(1) a {
            background-position: -64px 0px;
          }
          :nth-child(2) a {
            background-position: -64px -62px;
          }
          :nth-child(3) a {
            background-position: -64px -124px;
          }
          :nth-child(4) a {
            background-position: 0px -124px;
          }
          p {
            text-align: center;
          }
        }
      }
    }
  }
`;
