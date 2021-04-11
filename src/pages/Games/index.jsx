import React, { useState } from 'react';
import Topbar from '../../components/Topbar';
import Menu from '../../components/Menu';
import List from '../../components/List';
import { favorites, racing, sport, fps, openWorld, fight } from './constants';
import './Games.scss';

function GamesPage(props) {
  const [style, setStyle] = useState(favorites);

  return (
    <div className="games-page">
      <Topbar title="Games Favoritos" />
      <div className="root-container__body">
        <Menu setStyle={setStyle} />
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

const favoritesGames = [
  {
    id: 1,
    title: "F1 2020",
    videoUrl: "https://www.youtube.com/embed/wF0vF1uXXYU",
    description: "F1 2020 é o videojogo oficial da temporada 2020 de Fórmula 1, que, ainda, disponibiliza como recurso acessível a edição de 2020 de uma das categorias secundárias, a Fórmula 2"
  },
  {
    id: 2,
    title: "Gran Turismo Sport",
    videoUrl: "https://www.youtube.com/embed/moDdHXpxWrw",
    description: "Gran Turismo Sport é um jogo eletrônico simulador de corrida desenvolvido pela Polyphony Digital e publicado pela Sony Interactive Entertainment. É o sétimo título principal da série Gran Turismo e foi lançado exclusivamente para PlayStation 4 em outubro de 2017."
  },
  {
    id: 1,
    title: "eFootball PES 2021",
    videoUrl: "https://www.youtube.com/embed/GSXViWOyEO4",
    description: "eFootball Pro Evolution Soccer 2021 Season Update, é um jogo eletrônico de futebol desenvolvido pela PES Production e publicado pela Konami."
  },
  {
    id: 1,
    title: "Battlefield 1",
    videoUrl: "https://www.youtube.com/embed/c7nRTF2SowQ",
    description: "Battlefield 1 é um jogo eletrônico de tiro em primeira pessoa ambientado na Primeira Guerra Mundial, desenvolvido pela DICE e publicada pela Electronic Arts. É o décimo quarto jogo da franquia Battlefield. Foi lançado em outubro de 2016 para Microsoft Windows, PlayStation 4 e Xbox One. "
  },
  {
    id: 2,
    title: "Battlefield 4",
    videoUrl: "https://www.youtube.com/embed/hl-VV9loYLw",
    description: "Battlefield 4 é um jogo de tiro em primeira pessoa desenvolvido pela DICE e publicado pela Electronic Arts. É o décimo terceiro título da série, sequência de Battlefield 3, e foi lançado entre outubro e novembro de 2013 para Microsoft Windows, PlayStation 3, Xbox 360, PlayStation 4 e Xbox One."
  },
  {
    id: 1,
    title: "Grand Theft Auto IV",
    videoUrl: "https://www.youtube.com/embed/M80K51DosFo",
    description: "Grand Theft Auto IV é um jogo eletrônico de ação-aventura desenvolvido pela Rockstar North e publicado pela Rockstar Games. É o sexto título principal da série Grand Theft Auto e foi lançado em 29 de abril de 2008 para PlayStation 3 e Xbox 360 e depois em 2 de dezembro para Microsoft Windows."
  },
  {
    id: 2,
    title: "Red Dead Redemption",
    videoUrl: "https://www.youtube.com/embed/-o7rES_3ymA",
    description: "Red Dead Redemption é um jogo eletrônico de ação-aventura desenvolvido pela Rockstar San Diego e publicado pela Rockstar Games. Ele foi lançado em maio de 2010 para PlayStation 3 e Xbox 360, sendo um sucessor espiritual de Red Dead Revolver lançado em 2004."
  },
];

const racingGames = [
  {
    id: 1,
    title: "F1 2020",
    videoUrl: "https://www.youtube.com/embed/wF0vF1uXXYU",
    description: "F1 2020 é o videojogo oficial da temporada 2020 de Fórmula 1, que, ainda, disponibiliza como recurso acessível a edição de 2020 de uma das categorias secundárias, a Fórmula 2"
  },
  {
    id: 2,
    title: "Gran Turismo Sport",
    videoUrl: "https://www.youtube.com/embed/moDdHXpxWrw",
    description: "Gran Turismo Sport é um jogo eletrônico simulador de corrida desenvolvido pela Polyphony Digital e publicado pela Sony Interactive Entertainment. É o sétimo título principal da série Gran Turismo e foi lançado exclusivamente para PlayStation 4 em outubro de 2017."
  },
  {
    id: 3,
    title: "Project Cars 2",
    videoUrl: "https://www.youtube.com/embed/eAK9LKWlkZ0",
    description: "Project CARS 2 é um jogo eletrônico simulador de corridas desenvolvido pela Slightly Mad Studios e publicado pela Namco Bandai em 22 de setembro de 2017 para Windows, PlayStation 4 e Xbox One. O jogo é uma sequência do Project CARS, oferece 140 opções de traçados de pistas e 189 carros."
  },
  {
    id: 4,
    title: "Need for Speed: The Run",
    videoUrl: "https://www.youtube.com/embed/v-4msZsoe18",
    description: "Need for Speed​​: The Run é um jogo de corrida, o título de número 18 da franquia Need for Speed​​, desenvolvido pela EA Black Box em parceria com a DICE e publicado pela Electronic Arts em 17 de novembro de 2011."
  },
  {
    id: 5,
    title: "Need for Speed Heat",
    videoUrl: "https://www.youtube.com/embed/9ewiJJe_nYI",
    description: "Need for Speed Heat é um jogo eletrônico de corrida desenvolvido pela Ghost Games e publicado pela Electronic Arts para Microsoft Windows, PlayStation 4 e Xbox One. Esse é o vigésimo-quarto jogo de série Need for Speed e irá comemorar o aniversário de 25 anos da série."
  },
  {
    id: 6,
    title: "Need for Speed",
    videoUrl: "https://www.youtube.com/embed/2FhCCBXhNr4",
    description: "Need for Speed é um jogo eletrônico de corrida que foi produzido pelo estúdio Ghost Games e lançado pela Electronic Arts para as plataformas PlayStation 4, Xbox One e para Microsoft Windows."
  },
  {
    id: 7,
    title: "Dirt Rally 2.0",
    videoUrl: "https://www.youtube.com/embed/C2K-NShU_M8",
    description: "Dirt Rally 2.0 é um jogo de corrida desenvolvido e publicado pela Codemasters para o Microsoft Windows, PlayStation 4 e Xbox One. Foi lançado em 26 de fevereiro de 2019. O jogo é o décimo terceiro título da série Colin McRae Rally e o sétimo título para levar o nome Dirt."
  },
  {
    id: 8,
    title: "Automobilista 2",
    videoUrl: "https://www.youtube.com/embed/JVg1ftqwd20",
    description: "Automobilista 2 é o culminar de um projeto desenvolvido ao longo de quase uma década. Em sua essência, é uma simulação abrangente do automobilismo brasileiro, apresentando todas as principais categorias do automobilismo nacional, as principais pistas e fabricantes."
  },
  {
    id: 9,
    title: "Forza Motorsport 7",
    videoUrl: "https://www.youtube.com/embed/9aAr5blVy0g",
    description: "Forza Motorsport 7 é um jogo de corrida desenvolvido pela Turn 10 Studios e publicado pela Xbox Game Studios Exclusivamente para o Xbox One e Windows 10. Foi lançado no dia 03 de Outubro de 2017. É o décimo jogo da franquia na série Forza, o sétimo na série principal."
  },
  {
    id: 10,
    title: "Forza Horizon 4",
    videoUrl: "https://www.youtube.com/embed/BxlMtTh48zw",
    description: "Forza Horizon 4 é um jogo de corrida em mundo aberto desenvolvido pela Playground Games em colaboração com a Turn 10 e publicado pela Xbox Game Studios, que na época do lançamento ainda era conhecida como Microsoft Studios. É o quarto da franquia Forza Horizon e o décimo primeiro da edição Forza."
  }
];

const sportGames = [
  {
    id: 1,
    title: "eFootball PES 2021",
    videoUrl: "https://www.youtube.com/embed/GSXViWOyEO4",
    description: "eFootball Pro Evolution Soccer 2021 Season Update, é um jogo eletrônico de futebol desenvolvido pela PES Production e publicado pela Konami."
  },
  {
    id: 2,
    title: "FIFA 21",
    videoUrl: "https://www.youtube.com/embed/tuLAn9adQpI",
    description: "FIFA 21 é um videogame de simulação de esportes desenvolvido e publicado pela Electronic Arts, tendo como estrela da capa o jogador Kylian Mbappé. O jogo foi anunciado em 19 de junho de 2020, sendo, no mesmo ano, oficialmente publicado no dia 9 de outubro."
  }
];

const fpsGames = [
  {
    id: 1,
    title: "Battlefield 1",
    videoUrl: "https://www.youtube.com/embed/c7nRTF2SowQ",
    description: "Battlefield 1 é um jogo eletrônico de tiro em primeira pessoa ambientado na Primeira Guerra Mundial, desenvolvido pela DICE e publicada pela Electronic Arts. É o décimo quarto jogo da franquia Battlefield. Foi lançado em outubro de 2016 para Microsoft Windows, PlayStation 4 e Xbox One. "
  },
  {
    id: 2,
    title: "Battlefield 4",
    videoUrl: "https://www.youtube.com/embed/hl-VV9loYLw",
    description: "Battlefield 4 é um jogo de tiro em primeira pessoa desenvolvido pela DICE e publicado pela Electronic Arts. É o décimo terceiro título da série, sequência de Battlefield 3, e foi lançado entre outubro e novembro de 2013 para Microsoft Windows, PlayStation 3, Xbox 360, PlayStation 4 e Xbox One."
  },
  {
    id: 3,
    title: "Call of Duty: Modern Warfare",
    videoUrl: "https://www.youtube.com/embed/bH1lHCirCGI",
    description: "Call of Duty: Modern Warfare é um jogo eletrônico de tiro em primeira pessoa produzido pela Infinity Ward. Foi publicado pela Activision em 25 de outubro de 2019 para Microsoft Windows, PlayStation 4 e Xbox One. É o decimo sexto jogo da serie Call of Duty e actua como um \"soft reboot\" da sub-serie Modern Warfare."
  },
  {
    id: 4,
    title: "Rainbow Six Siege",
    videoUrl: "https://www.youtube.com/embed/6wlvYh0h63k",
    description: "Tom Clancy's Rainbow Six Siege é um videojogo do género first person shooter produzido pela Ubisoft Montreal. Foi anunciado pela Ubisoft a 9 de Junho de 2014 na Electronic Entertainment Expo 2014 onde foi muito aplaudido pela crítica. Foi lançado para Xbox One, PlayStation 4 e para Microsoft Windows."
  },
  {
    id: 5,
    title: "Far Cry 3",
    videoUrl: "https://www.youtube.com/embed/J6gnOVJsCsM",
    description: "Far Cry 3 é um jogo do gênero tiro em primeira pessoa e mundo aberto desenvolvido pela Ubisoft Montreal em conjunto com a Ubisoft Massive, a Ubisoft Reflections, e a Ubisoft Shanghai. Foi publicado pela Ubisoft para PlayStation 3, Xbox 360 e Microsoft Windows, sendo a sequência do jogo Far Cry 2, lançado em 2008."
  },
  {
    id: 6,
    title: "Arma 3",
    videoUrl: "https://www.youtube.com/embed/Jioo5uXoNLg",
    description: "ARMA 3 é um videojogo de mundo aberto militar tático de tiro em primeira e terceira pessoa desenvolvido pelo estúdio checo Bohemia Interactive Studio, para o Microsoft Windows. Foi lançado em 12 de setembro de 2013."
  },
  {
    id: 7,
    title: "DOOM",
    videoUrl: "https://www.youtube.com/embed/RO90omga8D4",
    description: "Doom é um jogo eletrônico de tiro em primeira pessoa desenvolvido pela id Software e publicado pela Bethesda Softworks. Foi lançado mundialmente em 13 de maio de 2016 para Microsoft Windows, PlayStation 4 e Xbox One."
  }
];

const openWorldGames = [
  {
    id: 1,
    title: "Grand Theft Auto IV",
    videoUrl: "https://www.youtube.com/embed/M80K51DosFo",
    description: "Grand Theft Auto IV é um jogo eletrônico de ação-aventura desenvolvido pela Rockstar North e publicado pela Rockstar Games. É o sexto título principal da série Grand Theft Auto e foi lançado em 29 de abril de 2008 para PlayStation 3 e Xbox 360 e depois em 2 de dezembro para Microsoft Windows."
  },
  {
    id: 2,
    title: "Red Dead Redemption",
    videoUrl: "https://www.youtube.com/embed/-o7rES_3ymA",
    description: "Red Dead Redemption é um jogo eletrônico de ação-aventura desenvolvido pela Rockstar San Diego e publicado pela Rockstar Games. Ele foi lançado em maio de 2010 para PlayStation 3 e Xbox 360, sendo um sucessor espiritual de Red Dead Revolver lançado em 2004."
  },
  {
    id: 3,
    title: "Grand Theft Auto V",
    videoUrl: "https://www.youtube.com/embed/QkkoHAzjnUs",
    description: "Grand Theft Auto V é um jogo eletrônico de ação-aventura desenvolvido pela Rockstar North e publicado pela Rockstar Games."
  },
  {
    id: 4,
    title: "Watch Dogs",
    videoUrl: "https://www.youtube.com/embed/PFko4Kut39s",
    description: "A trama de Watch Dogs gira em torno de Aiden Pearce, um homem moldado pela violência e assombrado pelo passado. Após sofrer um atentado juntamente com sua família, uma perda irreparável faz com que o hacker seja impulsionado em uma onda de vingança e justiça."
  },
  {
    id: 5,
    title: "Watch Dogs 2",
    videoUrl: "https://www.youtube.com/embed/qp7zjfBS5p8",
    description: "Watch Dogs 2 é um jogo eletrônico desenvolvido pela Ubisoft Montreal que sucede o popular Watch Dogs, de 2014."
  },
  {
    id: 6,
    title: "Red Dead Redemption 2",
    videoUrl: "https://www.youtube.com/embed/eaW0tYpxyp0",
    description: "Red Dead Redemption 2 é um jogo eletrônico de ação-aventura desenvolvido e publicado pela Rockstar Games. É o terceiro título da série Red Dead e uma prequela de Red Dead Redemption, tendo sido lançado em outubro de 2018 para PlayStation 4 e Xbox One e em novembro de 2019 para Microsoft Windows e Google Stadia."
  },
  {
    id: 7,
    title: "Assassins Creed 2",
    videoUrl: "https://www.youtube.com/embed/_xkCPNECud8",
    description: "Assassin's Creed II é um jogo eletrônico de ação-aventura desenvolvido pela Ubisoft Montreal e publicado pela Ubisoft."
  },
  {
    id: 8,
    title: "Assassins Creed Valhalla",
    videoUrl: "https://www.youtube.com/embed/L0Fr3cS3MtY",
    description: "Assassin's Creed Valhalla é um jogo eletrônico de RPG de ação desenvolvido pela Ubisoft Montreal e publicado pela Ubisoft."
  }
];

const fightGames = [
  {
    id: 1,
    title: "Mortal Kombat 11",
    videoUrl: "https://www.youtube.com/embed/UoTams2yc0s",
    description: "Mortal Kombat 11 é um jogo eletrônico de luta desenvolvido pela NetherRealm Studios e publicado pela Warner Bros. Interactive Entertainment. É a décima primeira edição principal da série de jogos eletrônicos de luta, Mortal Kombat, e uma continuação direta de Mortal Kombat X."
  },
  {
    id: 2,
    title: "Street Fighter V",
    videoUrl: "https://www.youtube.com/embed/0nFd7Iylj5A",
    description: "Street Fighter V é um videojogo de luta publicado pela Capcom, que o produziu em colaboração com o estúdio Dimps. O sexto capítulo da série Street Fighter, foi lançado a 16 de Fevereiro de 2016 para Microsoft Windows e PlayStation 4. Uma versão para Linux tem lançamento previsto para o segundo trimestre de 2016."
  },
  {
    id: 3,
    title: "UFC 3",
    videoUrl: "https://www.youtube.com/embed/Pgh7dGxVKWw",
    description: "EA Sports UFC 3 é um videogame de luta de artes marciais mistas desenvolvido pela EA Canada e publicado pela EA Sports. Conor McGregor, um dos lutadores anteriores da EA Sports UFC 2, voltou como lutador oficial do jogo."
  }
];