import React from 'react';
import { IconButton } from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import './Topbar.scss';

function Topbar(props) {
  const { title, showMenu, setShowMenu } = props;
  
  return (
    <div className="topbar">
      {!showMenu && <IconButton className="topbar__button" aria-label="upload picture" onClick={() => setShowMenu(true)}>
        <ExpandMore />        
      </IconButton>}
      {showMenu && <IconButton className="topbar__button" aria-label="upload picture" onClick={() => setShowMenu(false)}>
        <ExpandLess />
      </IconButton>}
      <span className="topbar__title">{title}</span>
    </div>
  );
}

export default Topbar;