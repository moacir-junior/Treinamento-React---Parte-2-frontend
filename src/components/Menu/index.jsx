import React from 'react';
import { Button } from '@material-ui/core'
import { Star, Games } from '@material-ui/icons';
import { favorites, racing, sport, fps, openWorld, fight } from '../../pages/Games/constants';
import './Menu.scss';

function Menu(props) {
  const { setStyle } = props;

  return (
    <nav className="sidebar">
      <ul className="sidebar__options">
        <li className="sidebar__options__item">
          <Button className="sidebar__options__item__button" onClick={() => setStyle(favorites)}>
            <Star className="sidebar__options__item__icon" />Favoritos
          </Button>
        </li>        
        <li className="sidebar__options__item">
          <Button className="sidebar__options__item__button" onClick={() => setStyle(racing)}>
            <Games className="sidebar__options__item__icon" />Corrida
          </Button>
        </li>
        <li className="sidebar__options__item">
          <Button className="sidebar__options__item__button" onClick={() => setStyle(sport)}>
            <Games className="sidebar__options__item__icon" />Esporte
          </Button>
        </li>
        <li className="sidebar__options__item">
          <Button className="sidebar__options__item__button" onClick={() => setStyle(fps)}>
            <Games className="sidebar__options__item__icon" />FPS
          </Button>
        </li>
        <li className="sidebar__options__item">
          <Button className="sidebar__options__item__button" onClick={() => setStyle(openWorld)}>
            <Games className="sidebar__options__item__icon" />Mundo Aberto
          </Button>
        </li>
        <li className="sidebar__options__item">
          <Button className="sidebar__options__item__button" onClick={() => setStyle(fight)}>
            <Games className="sidebar__options__item__icon" />Luta
          </Button>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;