import React, { memo } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { DirecoverWrapper } from './style.js';
import { dicoverMenu } from '@/common/local-data.js';
const Discover = memo(() => {
  return (
    <DirecoverWrapper>
      <div className="discover-top">
        <ul>
          {dicoverMenu.map((item, index) => {
            return (
              <li key={index}>
                <NavLink to={'/discover' + item.link}>
                  <span>{item.title}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <Outlet></Outlet>
    </DirecoverWrapper>
  );
});

export default Discover;
