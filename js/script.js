//**** Мини-калькулятор ****
// сложение 2-х чисел
// разность 2-х чисел
// произведение 2-х чисел
// частное 2-х чисел
// возведение числна в n-степень
// корень n-ой степени

let cancel = true;
let menu = ` Ваш выбор (0-6)
1. Сложение 2-х чисел
2. Разность 2-х чисел
3. Произведение 2-х чисел
4. Деление 2-х чисел
5. Возведение числна в n-степень
6. Вычисление корня n-ой степени
0. Отмена`;

let num1, num2;
let result; //сумма, разность, произведение...

do {
  let operation = prompt(menu, "0");
  
  switch(operation) {
    case "1": let num1 = +prompt("первое число:");
              let num2 = +prompt("второе число:");

              result = num1 + num2;
              alert(`Сумма чисел = ${result}`);
              break;
    case "2": let num1 = prompt("первое число:");
              let num2 = prompt("второе число:");

              result = num1 - num2;
              alert(`Разность чисел = ${result}`);
              break;
    case "3": let num1 = prompt("первое число:");
              let num2 = prompt("второе число:");

              result = num1 * num2;
              alert(`произведение чисел = ${result}`);
              break;
    case "4": num1 = prompt("первое число:");
              num2 = prompt("второе число:");

              if(num2 != 0) {
                result = num1 / num2;
                alert(`частное 2-х чисел = ${result.toFixed(4)}`);
              }
              else {
                alert(`Делить на 0 нельзя!`);
              }
              break;
    case "5": num1 = prompt("Число:");
              num2 = prompt("Степень:");

              if(num2 < 0) {
                result = Math.pow(num1, num2).toFixed(2);
              }
              else {             
              // result = num1**num2;
              result = Math.pow(num1, num2);
              }

              alert(`Число ${num1} в степени ${num2} = ${result}`);
            
              break;
    case "6": num1 = prompt("Число:");
              num2 = prompt("Степень корня:");

              result = Math.pow(num1, 1 / num2);
              alert(`корень степени ${num2} из числа ${num1} = ${result}`);

              break;
  
    //отмена действия 
    case "0":
    case null: cancel = false;
                break;
    default: alert("Ошибка! Неверный выбор!!!");
                break;
  }
} while(cancel);


// **** Задача 5 ****
// Выведите столбец чисел от 1 до 50.

// let i = 1;

// // цикл с предисловием
// while(i <= 50) {
//   console.log(i + `\n`);
//   i++;
// }

// // цикл с постусловием
// do {
//   console.log(i + `\n`);
//   i++;
// } while(i < 50)


//break
//continue


//**** Задача 3 ****
//Пользователь вводит сумму вклада и процент, который будет начисляться ежегодно.
//Отобразить размер вклада поочередно на ближайшие 5 лет.

// let sum; //сумма вклада
// let percent; //годовой процент
// let countYears; //кол-во лет
// let result; //итоговая строка с выводом

// let endWordYears = ""; //строка содержащая "год(а)", "лет"

// //Допустим пользователь вбивает 1000 под 10% на 10 лет

// sum = Number(prompt("Сумма вклада:"));
// percent = Number(prompt("Годовой %:"));
// countYears = Number(prompt("период вклада (лет):"));

// //for(объявление и инициализация переменных цикла; условие; изменение счётчика) {
// //тело цикла
// //}

// for (let i = 1; i <= countYears; i++) {
//   sum += sum * percent / 100;

//   if (i != 11 && i % 10 == 1) {
//     endWordYears = "год";
//   } 
//   // else if ((i % 10 >= 2 && i % 10 <= 4) && ((i != 11) && (i != 12) && (i != 13) && (i != 14))) {
//   //   endWordYears = "года";
//   // } 
//   else if((i >= 5 && i <= 20) || (i %10 >= 5 && i % 10 <= 9) || (i % 10) == 0) {
//     endWordYears = "лет";
//   }
//   else {
//     endWordYears = "года";
//   }

//   result += `Через ${i} ${endWordYears} сумма = ${sum.toFixed(2)}\n`
//   console.log(`Через ${i} ${endWordYears} сумма = ${sum.toFixed(2)}`);
// }

// alert(result);

// //если
// if (условие) {
//   //команды
// }
// //иначе, если
// else if (условие) {
//   //команды
// }
// //иначе, если
// else if (условие) {
//   //команды
// }
// //иначе
// else {
//   //команды
// }

// switch (выражение) {
//   case значение1:
//     команды;
//     break;
//   case значение2:
//     команды;
//     break;
//   case значение3:
//     команды;
//     break;
//   default:
//     команды; //дефолт не обязательный, может остутствовать
//     break;
// }




// 1 год, 21 год
// 2, 3, 4 года 25
// 5, 6, 7, 8, 9, 10 лет + 11,12, 13,14,15 - 20 лет

//инкремент - увеличение значения переменной
//декремент - уменьшение значения переменной
//постфиксная запись
//префиксная запись 

// i = i + 2; //полная запись
// i = i - 2; //полная запись
// i = i * 2; //полная запись
// i = i / 2; //полная запись

// i += 2; //сокращенная запись
// i -= 2; //сокращенная запись
// i *= 2; //сокращенная запись
// i /= 2; //сокращенная запись

// i = i + 1;
// i++; // инкремент (постфиксная запись)
// ++i; // инкремент (префиксная запись)

// i = i - 1;
// i--; // инкремент (постфиксная запись)
// --i; // инкремент (префиксная запись)




//**** Задача 2 ****
//Пользователь вводит длину оснований трапеции (a и b), а также высоту трапеции h.
//Программа выводит сообщение: "Прощадь трапеции будет равна <значение>". Площадь вычесляется по формуле ((a + b) / 2) * h, где a, b - основания, h - высота.

// let a, b; //стороны трапеции
// let h; //высота трапеции
// let S; //искомая площадь

// let result = ""; //строка с результатом

// a = +promot("Сторона a:");
// b = +promot("Сторона b:");
// h = +promot("Высота h:");

// if (a > 0 && b > 0 && h > 0) {
//   S = ((a + b) / 2) * h;
//   result = `Площадь трапеции со сторонами a = ${a}, b = ${b}\nи высотой h = ${h} равна ${S}`
// }

// else {
//   result = "Неверные данные!!! Площадь невозможно посчитать!";
// }
// alert(result);

// **** Задача 1 ****
// Программа хранит в других переменных курс доллара и евро. В первой переменной у вас хранится стоимость одного евро в рублях, во второй - стоимость одного доллара в рублях. 
// Вы спрашиваете у пользователя, сколько рублей он хочкт сконвертировать, получаете это число и считаете. Результат надо вывести на страницу с помощью alert.

// let kursDollara = 74.8;
// let kursEuro = 90.5;
// let sumDollars = 0,
//   sumEuro = 0;

// let rubles = prompt("Сумма в рублях:") {
//   alert("Вы отменили!!!");
// }
// else {
//   if (rubles == "") {
//     alert("Вы ничего не ввели!!!");
//   } 
//   else {
//     if (isNaN(+rubles)) {
//       alert("Это не число!");
//     }
//     else {
//       sumDollars = (rubles/kursDollara).toFixed(2);
//       sumEuro = (rubles/kursEuro).toFixed(2);

//       alert(`Сумма в долларах = ${sumDollars}$, Сумма в евро = ${sumEuro}\u20AC`);
//     }
//   }
// }