import React from 'react';
import './Topbar.scss';

function Topbar(props) {
  const { title } = props;

  return (
    <div className="topbar">
      <span className="topbar__title">{title}</span>
    </div>
  );
}

export default Topbar;