if (confirm('Чи бажаєте почати гру?')) {
  var bound=5;
  var prize=[10, 5, 2];
  var attempt=3;
  var yourGuess;
  var wallet=0;
  var message = "Будь ласка, введіть число від 0 до " + bound;
  var number = Math.floor(Math.random() * bound)+1;

    while (attempt>=0) {
      if (attempt>0) {
        yourGuess = parseInt(prompt(message));
          if (yourGuess == number) {
            wallet=wallet+prize[3-attempt];
            if (confirm("Ви вгадали! Зіграємо ще?!")) {
              attempt=3;
              bound=bound*2;
              number = Math.floor(Math.random() * bound)+1;
              message = "Будь ласка, введіть число від 0 до " + bound;
                for (var i=0; i<prize.length; i++) {
                  prize[i]=prize[i]*3;
                }
              continue;
            } else {
              alert("Дякуємо за гру, ваш виграш становить " + wallet + "$");
              break;
            }
          }
          else {
          attempt--;
          continue;
          }
      } else {
        alert("Ви не вгадали.. Дякуємо за гру, ваш виграш становить " + wallet + "$");
        if (confirm("Зіграємо ще?!")) {
          bound=5;
          prize=[10, 5, 2];
          attempt=3;
          wallet=0;
          message = "Будь ласка, введіть число від 0 до " + bound;
          number = Math.floor(Math.random() * bound)+1;
          continue;
        } else {
          break;
        }
      }
        }

}

else {
  console.log('Сьогодні ви не виграли мільйон, а могли!');
}
