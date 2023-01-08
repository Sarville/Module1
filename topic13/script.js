'use strict';

(() => {
  const ruLang = {
    figures: ['камень', 'ножницы', 'бумага'],
    phrase: {
      start: 'Введите камень, ножницы или бумага',
      computer: 'Компьютер',
      player: 'Игрок',
      score: 'Счет игры',
      confirm: 'Вы точно хотите выйти?',
    },
    draw: 'Ничья',
    win: 'Вы выиграли',
    loose: 'Вы проиграли',
    get rules() {
      return [[this.draw, this.win, this.loose], [this.loose, this.draw, this.win], [this.win, this.loose, this.draw]];
    },
  };
  const enLang = {
    figures: ['rock', 'scissors', 'paper'],
    phrase: {
      start: 'Enter rock, scissors or paper',
      computer: 'Computer',
      player: 'Player',
      score: 'Game score',
      confirm: 'Sure you wanna exit?',
    },
    draw: 'Draw',
    win: 'You win',
    loose: 'You lose',
    get rules() {
      return [[this.draw, this.win, this.loose], [this.loose, this.draw, this.win], [this.win, this.loose, this.draw]];
    },
  };

  const getFigure = (lang, ask) => {
    const figure = lang.figures.filter((item) => {
      if (item) {
        return (item.substring(0, ask.length) === ask.toLowerCase());
      }
    });
    return lang.figures.indexOf(figure[0]);
  };

  const game = (language) => {
    const result = {
      player: 0,
      computer: 0,
    };
    const lang = language === 'EN' || language === 'ENG' ? enLang : ruLang;

    return function start() {
      const ask = prompt(lang.phrase.start);
      if (ask !== null) {
        if (ask.trim().length) {
          const playerFigure = getFigure(lang, ask);
          if (playerFigure !== -1) {
            const computerFigure = Math.round(Math.random() * 2);
            const match = lang.rules[playerFigure][computerFigure];
            alert(`${lang.phrase.computer}: ${lang.figures[computerFigure]}
${lang.phrase.player}: ${lang.figures[playerFigure]}\n\n${match}`);
            if (match === lang.win) result.player += 1;
            if (match === lang.loose) result.computer += 1;
          }
        }
        start();
      } else if (!(confirm(lang.phrase.confirm))) {
        start();
      } else {
        alert(`${lang.phrase.score}:\n${lang.phrase.computer}: ${result.computer}
${lang.phrase.player}: ${result.player}`);
      }
    };
  };

  window.rps = game;
})();
