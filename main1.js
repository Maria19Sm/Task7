const readline = require('readline');
const { breakdownArr } = require('./main2.js');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function generateRandomArray(length) {
  return Array.from({ length }, () => Math.floor(Math.random() * 100));
}

function getUserInput() {
  rl.question('Введіть "+" для генерації рандомного маисва з внесенням його розміру "-" для внесення своїх змінних в масив, або "q" для виходу, або розмір масиву: ', (answer) => {
    const trimmedAnswer = answer.trim().toLowerCase();

    if (trimmedAnswer === '+') {
      rl.question('Введіть розмір масиву: ', (sizeInput) => {
        const size = parseInt(sizeInput);

        if (isNaN(size)) {
          console.log('Некоректний розмір масиву.');
          getUserInput();
        } else {
          const randomArray = generateRandomArray(size); 
          console.log("Згенерований випадковий масив:", randomArray);
          const sortedArray = breakdownArr(randomArray);
          console.log("Відсортований масив:", sortedArray);
          rl.close();
        }
      });
    } else if (trimmedAnswer === '-') {
      rl.question('Введіть числа через пробіл: ', (input) => {
        const unsortedArray = input.split(' ').map(Number);
        console.log('Згенерований вами масив', unsortedArray)
        const sortedArray = breakdownArr(unsortedArray);
        console.log("Відсортований масив:", sortedArray);
        rl.close();
      });
    } else if (trimmedAnswer === 'q') {
      rl.close();
    } else {
      console.log('Некоректна відповідь. Введіть "+" для генерації рандомного маисва з внесенням його розміру "-" для внесення своїх змінних в масив, або "q" для виходу, або розмір масиву: ');
      getUserInput();
    }
  });
}

getUserInput();
