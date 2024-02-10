// 1 Завдання
// Оголосіть дві змінні: name та city
// name: Іван;
// Призначити значення змінної name змінній city
// Вивести значення city в консоль

// let name = 'Іван';
// let city;
// city = name;

// console.log(city);


// 2 Завдання
// Який буде результат виконання скрипта?

// let name = 'Olga';

// console.log(`Привіт ${1}`); // Привіт 1
// console.log(`Привіт ${'name'}`); // Привіт name
// console.log(`Привіт ${name}`); // Привіт Olga


// 3 Завдання
// Видобути число зі змінних
// Вивести тип змінних в консоль

// let a = '5';
// let b = '13cvb';
// let c = '12.9sxdcfgv';

// console.log(`a = ${parseInt(a)}`);
// console.log(`a is ${typeof(parseInt(a))}`);

// console.log(`b = ${parseInt(b)}`);
// console.log(`b is ${typeof(parseInt(b))}`);

// console.log(`c = ${parseFloat(c)}`);
// console.log(`c is ${typeof(parseFloat(c))}`);


// 4 Завдання
// Зробіть, щоб 0.1 + 0.2 = 0.3

// console.log((0.1 * 10 + 0.2 * 10) / 10);


// 5 Завдання
// Поверніть найбільше число з набору 20, 10, 50, 40

// console.log(Math.max(20, 10, 50, 40));


// 6 Завдання
// Поверніть випадкове число в діапазоні від 2 до 4

// console.log(Math.random() * (4 - 2) + 2);

// 7 Завдання
// Дізнатись довжину message

// const message = 'Welcome to Bahamas';

// console.log(message.length);


// 8 Завдання
// Вивести в консоль message великими літерами

// const message = 'Welcome to Bahamas';

// console.log(message.toUpperCase());


// 9 Завдання
// Створити путий об'єкт
// Додати туди ім'я, вік і місто
// Вивести результат в консоль
// Видалити місто
// Додати булеан з ключем like flowers
// Вивести результат в консоль

// const person = {};

// person.name = 'Ivan';
// person.age = 20;
// person.city = 'Kyiv';

// console.log(person);

// delete person.city;
// person['like flowers'] = true;

// console.log(person);


// 10 Завдання
// За допомогою for..in вивести в консоль ключі і значення об'єкта

// const person = {
//   name: 'Ivan',
//   age: 20,
//   city: 'Kyiv',
// };

// for (propery in person) {
//   console.log(`${propery}: ${person[propery]}`);
// }