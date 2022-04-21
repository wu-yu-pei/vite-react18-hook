import React, { memo } from 'react';

const AsideHeader = memo(() => {
  return (
    <div
      style={{
        padding: '15px',
        background: 'linear-gradient(180, #fff,#ccc)',
        lineHeight: '22px',
        height: '126px',
        borderBottom:'2px solid #ccc'
      }}
    >
      <p style={{ fontSize: '12px' }}>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
      <button
        style={{
          padding: '2px 25px',
          backgroundColor: '#e12128',
          color: '#fff',
          display: 'block',
          margin: '30px auto 0',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        用户登录
      </button>
    </div>
  );
});

export default AsideHeader;
