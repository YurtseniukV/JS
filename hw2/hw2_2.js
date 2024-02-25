// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 253;
if (x > 0){
    console.log('Вірно');
}else {
    console.log('Не вірно');
}


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 99;
if (time >= 0 && time < 15) {
    console.log('Перша четверть');
} else if (time >= 15 && time < 30) {
    console.log('Друга чверть');
} else if (time >= 30 && time < 45) {
    console.log('Третя чверть');
} else if (time >= 45 && time < 60) {
    console.log('Четверта чверть')
} else {
    console.log('invalid input')
}


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 12;
if (day > 0 && day <= 10) {
    console.log('Перша декада місяця');
} else if (day > 10 && day <= 20) {
    console.log('Друга декада місяця');
} else if (day > 20 && day <= 31) {
    console.log('Третя декада місяця')
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let week = prompt('Which day are you interested about?')
switch (week) {
    case '1':
        console.log('Monday');
        break;
    case '2':
        console.log('Thuesday');
        break;
    case '3':
        console.log('Wednesday');
        break;
    case '4':
        console.log('Thursday');
        break;
    case '5':
        console.log('Friday');
        break;
    case '6':
        console.log('Saturday');
        break;
    case '7':
        console.log('Sunday');
        break;
    default:
        console.log('There are not information about')
}


//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
//

let userNumber1 = +prompt('Введіть перше число');
let userNumber2 = +prompt('Введіть друге число');
if (userNumber1 > userNumber2) {
    console.log(userNumber1);
} else if (userNumber2 > userNumber1) {
    console.log(userNumber2);
} else {
    console.log('Ці числа рівні');
}


//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
//

let xx = false || 'default' || null || NaN || undefined || '' || 0;
console.log(xx);  /*Дала змінній назву хх аби не повторювалась назва з першого завдання*/


//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Супер');
} else if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Супер');
} else if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Супер');
} else if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Супер');
} else if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Супер');
} else if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Супер');
}
