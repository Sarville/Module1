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
  // const enLang = {
  //   figures: ['rock', 'scissors', 'paper'],
  //   phrase: {
  //     start: 'Enter rock, scissors or paper',
  //     computer: 'Computer',
  //     player: 'Player',
  //     score: 'Game score',
  //     confirm: 'Sure you wanna exit?',
  //   },
  //   draw: 'Draw',
  //   win: 'You win',
  //   loose: 'You lose',
  //   get rules() {
  //     return [[this.draw, this.win, this.loose], [this.loose, this.draw, this.win], [this.win, this.loose, this.draw]];
  //   },
  // };

  const getFigure = (lang, ask) => {
    const figure = lang.figures.filter((item) => {
      if (item) {
        return (item.substring(0, ask.length) === ask.toLowerCase());
      }
    });
    return lang.figures.indexOf(figure[0]);
  };

  const rps = () => {
    let playerTurn = true;
    const startRPS = () => {
      const lang = ruLang;
      const ask = prompt(lang.phrase.start);
      if (ask !== null) {
        if (ask.trim().length) {
          const playerFigure = getFigure(lang, ask);
          if (playerFigure !== -1) {
            const computerFigure = Math.round(Math.random() * 2);
            const match = lang.rules[playerFigure][computerFigure];
            alert(`${lang.phrase.computer}: ${lang.figures[computerFigure]}
${lang.phrase.player}: ${lang.figures[playerFigure]}\n\n${match}`);
            if (match === lang.win) playerTurn = true;
            if (match === lang.loose) playerTurn = false;
            if (match === lang.draw) startRPS();
          } else startRPS();
        } else startRPS();
      } else {
        alert('Вы отказались от розыгрыша. Ходит Бот');
        playerTurn = false;
      }
    };
    startRPS();
    return playerTurn;
  };

  const game = () => {
    const marblesCount = {
      player: 5,
      bot: 5,
    };

    return function start(bot) {
      const playAgain = () => { // Спрашиваем - Еще раз?
        const askAgain = confirm('Еще раз?');
        if (askAgain) {
          marblesCount.player = 5;
          marblesCount.bot = 5;
          start();
        }
      };
      const turn = bot === undefined ? rps() : bot;
      if (turn) { // Ход игрока
        const botAnswer = Math.round(Math.random()) ? 'Нечётное' : 'Чётное';
        const ask = prompt(`Введите количество шариков:\nУ Игрока: ${marblesCount.player}\nУ Бота: ${marblesCount.bot}`);
        if (ask !== null) { // Нажали отмену?
          if ((ask.trim().length) && (!Number.isNaN(+ask))) {
            const playerNum = +ask; // Ввели не пустое или число?
            if ((playerNum <= marblesCount.player) && (playerNum <= marblesCount.bot) && (playerNum > 0)) { // Ввели допустимое число?
              if ((!(playerNum % 2) && (botAnswer === 'Чётное')) || (!((playerNum + 1) % 2) && (botAnswer === 'Нечётное'))) {
                marblesCount.player -= playerNum;
                marblesCount.bot += playerNum;
                alert(`Игрок загадал ${playerNum}, Бот ответил ${botAnswer} и выиграл раунд`);
              } else {
                marblesCount.player += playerNum;
                marblesCount.bot -= playerNum;
                alert(`Игрок загадал ${playerNum}, Бот ответил ${botAnswer} и проиграл раунд`);
              }
              if ((marblesCount.player > 0) && (marblesCount.bot > 0)) {
                start(false);
              } else {
                if (marblesCount.player === 0) alert('Бот выиграл игру');
                if (marblesCount.bot === 0) alert('Игрок выиграл игру');
                playAgain();
              }
            } else {
              alert('Ввели недопустимое число');
              start(true);
            }
          } else {
            alert('Ввели не число');
            start(true);
          }
        } else alert('Вы отменили игру');
      } else { // Ход бота
        const botNum = Math.floor(Math.random() * (Math.min(marblesCount.bot, marblesCount.player)) + 1);
        const playerAnswer = confirm(`Бот загадал. Игрок угадывает.
У Игрока: ${marblesCount.player}\nУ Бота: ${marblesCount.bot}\nОК - Чётное, Отмена - Нечётное`);
        if ((!(botNum % 2) && playerAnswer) || (!((botNum + 1) % 2) && !playerAnswer)) {
          marblesCount.player += botNum;
          marblesCount.bot -= botNum;
          alert(`Бот загадал ${botNum}, игрок ответил ${playerAnswer ? 'Чётное' : 'Нечётное'} и выиграл раунд`);
        } else {
          marblesCount.player -= botNum;
          marblesCount.bot += botNum;
          alert(`Бот загадал ${botNum}, игрок ответил ${playerAnswer ? 'Чётное' : 'Нечётное'} и проиграл раунд`);
        }
        if ((marblesCount.player > 0) && (marblesCount.bot > 0)) {
          start(true);
        } else {
          if (marblesCount.player === 0) alert('Бот выиграл игру');
          if (marblesCount.bot === 0) alert('Игрок выиграл игру');
          playAgain();
        }
      }
    };
  };
  window.marbles = game;
})();
