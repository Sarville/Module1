{
  const rain = Math.round(Math.random());

  if (rain === 1) {
    console.log('Пошёл дождь. Возьмите зонт!');
  }
    else {
      console.log('Дождя нет!');
    }
}

{
  const scoreMath = +prompt('Введите кол-во баллов по математике:', 92);
  const scoreRus = +prompt('Введите кол-во баллов по русскому языку:', 78);
  const scoreInfo = +prompt('Введите кол-во баллов по информатике:', 95);

  if (scoreMath + scoreRus + scoreInfo >= 265) {
    console.log('Поздравляю, вы поступили на бюджет!');
  }
}

{
  const money = +prompt('Сколько вы хотите снять?', 1250);

  if (money % 100 !== 0) {
    console.log('Банкомат выдает только купюрами по 100р');
  }
}
