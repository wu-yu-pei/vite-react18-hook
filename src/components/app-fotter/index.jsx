import React, { memo } from 'react';

import { FotterWarper } from './style';
import { footerLinks, footerImages } from '@/common/local-data';

const AppFotter = memo(() => {
  return (
    <FotterWarper>
      <div className="content wrap-v1">
        <div className="left">
          {footerLinks.map((item, index) => {
            return (
              <a href={item.link} key={index} className="left-link-item">
                {item.title}
              </a>
            );
          })}
          <p>网易公司版权所有©1997-2022杭州乐读科技有限公司运营：浙网文[2021] 1186-054号</p>
          <p>
            粤B2-20090191-18 工业和信息化部备案管理系统网站 <span></span> 浙公网安备{' '}
            <a href="#">33010902002564号</a>
          </p>
        </div>
        <div className="right">
          <ul>
            {footerImages.map((item, index) => {
              return (
                <li key={index}>
                  <a href={item.link}></a>
                  <p>{item.title}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </FotterWarper>
  );
});

export default AppFotter;
