import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Topbar from '../../components/Topbar';
import Menu from '../../components/Menu';
import List from '../../components/List';
import { favorites, racing, sport, fps, openWorld, fight } from './constants';
import './Games.scss';

function GamesPage(props) {
  const [style, setStyle] = useState(favorites);
  const [showMenu, setShowMenu] = useState(false);
  const [favoritesGames, setFavoritesGames] = useState([]);
  const [racingGames, setRacingGames] = useState([]);
  const [sportGames, setSportGames] = useState([]);
  const [fpsGames, setFpsGames] = useState([]);
  const [openWorldGames, setOpenWorldGames] = useState([]);
  const [fightGames, setFightGames] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/favoritesGames')
      .then(response => {
        setFavoritesGames(response.data);
      });

    axios.get('http://localhost:3001/racingGames')
      .then(response => {
        setRacingGames(response.data);
      });
    
    axios.get('http://localhost:3001/sportGames')
      .then(response => {
        setSportGames(response.data);
      });

    axios.get('http://localhost:3001/fpsGames')
      .then(response => {
        setFpsGames(response.data);
      });

    axios.get('http://localhost:3001/openWorldGames')
      .then(response => {
        setOpenWorldGames(response.data);
      });

    axios.get('http://localhost:3001/fightGames')
      .then(response => {
        setFightGames(response.data);
      });
  }, []);

  return (
    <div className="games-page">
      <Topbar title="Games Favoritos" showMenu={showMenu} setShowMenu={setShowMenu} />
      <div className="root-container__body">
        {showMenu && <Menu setStyle={setStyle} />}
        <main className="pages-games__container">
          {style === favorites && <List title={'Favoritos'} list={favoritesGames} />}
          {style === racing && <List title={'Corrida'} list={racingGames} />}
          {style === sport && <List title={'Esporte'} list={sportGames} />}
          {style === fps && <List title={'FPS'} list={fpsGames} />}
          {style === openWorld && <List title={'Mundo Aberto'} list={openWorldGames} />}
          {style === fight && <List title={'Luta'} list={fightGames} />}
        </main>
      </div>
    </div>
  );
}

export default GamesPage;