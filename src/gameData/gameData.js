export const gameData = {
  gameInfo: {
    title: "About this game",
    description:
      "The aim of this game is to discover the random number that the computer reserves, and this number consists of four digits.",
  },
  principle: {
    title: "The principle of this game",
    description:
      "The ability to analyze the results of the experiments that you perform to discover the number of the computer, taking into account the number of experiments and time.",
  },
  guide: {
    title: "User's Manual",
    description: [
      "When you start the game, you must start immediately by choosing your numbers and reading the result.",
      "You should start by focusing on the results of the comparison between your number and the computer's number.",
      "The (+) sign indicates that one of your numbers matches one of the computer's numbers in the same order.",
      "The (-) sign that one of your four numbers matches one of the computer numbers but not in the same order.",
      "Do not repeat the numbers ( in the same order) that you have previously tried, because the result will be the same.",
      "Do not duplicate number unless you suspect that the computer number is a duplicate, for example: 1111",
      "Always analyze your results and add useful results to the 'Important list'",
      "Always pay attention to the time, because it is important for your final evaluation.",
    ],
  },
  rules: {
    title: "The rules of the game",
    description: [
      "If you try a number you've tried before, you'll lose a brain.",
      "If you use a number whose digits are all equal, you will lose a brain.",
      "If you get three (+) signs in one comparison, you get a brain & star.",
      "You will not get anything if you repeat a number (4 digits), instead, you will lose a brain.",
      "You lose, if you lose the 10 brains you got at the beginning of the game.",
      "You win, if you find out the four-digit computer number in the same order.",
    ],
  },
  evaluation: {
    title: "The final evaluation ( The result )",
    description: [
      "Final score out of one hundred (100%).",
      "If you don't have brains anymore, you've lost( Brain = 0 => You lost).",
      "The first three minutes are free (3 minutes = free).",
      "Every minute you lose will cost you five points(1 minute = -5 ).",
      "Losing a brain costs you three points (- Brain = -3).",
      "Every brain you earn will increase your balance by six points ( + Brain = +6).",
      "You earn three marks for every star you earn (+ Star = +3).",
      "The first three attempts are free (3 attempt = free).",
      "You lose 2 marks on each attempt (1 attempt = -2).",
    ],
  },
  example: {
    title: "Example of the comparison result",
    description:
      "If you chose this number (2356) and the computer number is (3158) then the result will be (- +), the reason is: You have two digits equal to two digits of the computer number (3 and 5), but the number (3) is not in the same order and therefore you got (-) sign, while the number (5) is in the same order and you got a (+) sign. ",
  },
};
