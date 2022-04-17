import React, { memo } from 'react';

import { NavLink } from 'react-router-dom';

import { HeaderWrapper, HeaderLeft, HeaderRight } from './style';
import { headerLinks } from '@/common/local-data';

const APPFotter = memo(() => {

  const mapLinks = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link}>
          {item.title}
        </NavLink>
      );
    } else {
      return (
        <a href={item.link}>
          {item.title}
        </a>
      );
    }
  };

  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a className="logo sprite_01" href="#/"></a>
          <ul>
            {headerLinks.map((item, index) => {
              return <li key={index}>{mapLinks(item, index)}</li>;
            })}
          </ul>
        </HeaderLeft>
        <HeaderRight>right</HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  );
});

export default APPFotter;
