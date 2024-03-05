// // - Знайти та вивести довижину настипних стрінгових значень
// // 'hello world', 'lorem ipsum', 'javascript is cool'
//
let str = 'hello world';
console.log(str.length);

let str2 = 'lorem ipsum';
console.log(str2.length);
let str3 = 'javascript is cool';
console.log(str3.length);

//
// // - Перевести до великого регістру наступні стрінгові значення
// // 'hello world', 'lorem ipsum', 'javascript is cool'
//
let strUpp = str.toUpperCase()
console.log(strUpp);
let str2Upp = str2.toUpperCase();
console.log(str2Upp);
let str3Upp = str3.toUpperCase();
console.log(str3Upp);

//
//
// // - Перевести до нижнього регістру настипні стрінгові значення
// // 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
//
console.log(strUpp.toLowerCase());
console.log(str2Upp.toLowerCase());
console.log(str3Upp.toLowerCase());

//
//
// // - Є "брудна" стрінга - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str4 = ' dirty string   ' ;
let str4New = str4.slice(1, 13);
console.log(str4New);

//
//
// // - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// //     let str = 'Ревуть воли як ясла повні';
// // let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let arr = ['Ревуть', 'воли', 'як', 'ясла', 'повні'];
let str5 = arr.join(' ');
console.log(str5);

//
//
//
// // - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
//
let mass = [10,8,-7,55,987,-1011,0,1050,0];
let map  = mass.map ((item) => {
    return item +'';
});
console.log(map);


//
//
// // - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// // let nums = [11,21,3];
// // sortNums(nums,'ascending') // [3,11,21]
// // sortNums(nums,'descending') // [21,11,3]
//
let nums = [11,22,6];
let sortNums = (arr,direction)=>{
    if (direction === 'ascending'){
        console.log(arr);
    }else if (direction === 'descending'){
        console.log(arr.reverse());
    }
};
sortNums(nums,'descending');



//
//
// // - є масив
// // let coursesAndDurationArray = [
// //     {title: 'JavaScript Complex', monthDuration: 5},
// //     {title: 'Java Complex', monthDuration: 6},
// //     {title: 'Python Complex', monthDuration: 6},
// //     {title: 'QA Complex', monthDuration: 4},
// //     {title: 'FullStack', monthDuration: 7},
// //     {title: 'Frontend', monthDuration: 4}
// // ];
// // -- відсортувати його за спаданням за monthDuration
//
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let sort = coursesAndDurationArray.sort((firstObj, secondObj) => {
    return secondObj.monthDuration - firstObj.monthDuration;
});
console.log(sort);

//
//
// // -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//
let filter = coursesAndDurationArray.filter(item => item.monthDuration > 5);
console.log(filter);

//
//
// // -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
//
let mapedLessons = coursesAndDurationArray.map((value, index) => {
    let newValue = {
        title: value.title,
        monthDuration:value.monthDuration,
        id: index +1
    }
    return newValue;
} );
console.log(mapedLessons);


//
//
//
//
//
//
// // описати колоду карт (від 6 до туза без джокерів)
// //
// // {
// //     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
// //         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
// //     color:'', // 'red','black'
// // }
let cards = [
    { color:'red', value:'6', cardSuit:'heart'},
    { color:'red', value:'6', cardSuit:'clubs'},
    { color:'black', value:'6', cardSuit:'spade'},
    { color:'black', value:'6', cardSuit:'diamond'},
    { color:'black', value:'7', cardSuit:'diamond'},
    { color:'black', value:'7', cardSuit:'spade'},
    { color:'red', value:'7', cardSuit:'heart'},
    { color:'red', value:'7', cardSuit:'clubs'},
    { color:'red', value:'8', cardSuit:'heart'},
    { color:'red', value:'8', cardSuit:'clubs'},
    { color:'black', value:'8', cardSuit:'diamond'},
    { color:'black', value:'8', cardSuit:'spade'},
    { color:'black', value:'9', cardSuit:'diamond'},
    { color:'black', value:'9', cardSuit:'spade'},
    { color:'red', value:'9', cardSuit:'heart'},
    { color:'red', value:'9', cardSuit:'clubs'},
    { color:'red', value:'10', cardSuit:'clubs'},
    { color:'red', value:'10', cardSuit:'heart'},
    { color:'black', value:'10', cardSuit:'diamond'},
    { color:'black', value:'10', cardSuit:'spade'},
    { color:'black', value:'jack', cardSuit:'diamond'},
    { color:'black', value:'jack', cardSuit:'spade'},
    { color:'red', value:'jack', cardSuit:'clubs'},
    { color:'red', value:'jack', cardSuit:'heart'},
    { color:'red', value:'queen', cardSuit:'clubs'},
    { color:'red', value:'queen', cardSuit:'heart'},
    { color:'black', value:'queen', cardSuit:'diamond'},
    { color:'black', value:'queen', cardSuit:'spade'},
    { color:'black', value:'king', cardSuit:'diamond'},
    { color:'black', value:'king', cardSuit:'spade'},
    { color:'red', value:'king', cardSuit:'clubs'},
    { color:'red', value:'king', cardSuit:'heart'},
    { color:'red', value:'ace', cardSuit:'clubs'},
    { color:'red', value:'ace', cardSuit:'heart'},
    { color:'black', value:'ace', cardSuit:'diamond'},
    { color:'black', value:'ace', cardSuit:'spade'},

];
//
// // - знайти піковий туз
let ace = cards.find(value =>value.value === 'ace' && value.cardSuit === 'diamond');
console.log(ace);

//
//
//
// // - всі шістки
let cardSix = cards.filter((value)=> {
    return value.value === '6';
});
console.log(cardSix);


//
//
// // - всі червоні карти
let redCards = cards.filter((value) => {
    return value.color === 'red';
})
console.log(redCards);



//
// // - всі буби
let clubs = cards.filter(value => {
    return value.cardSuit === 'clubs';
})
console.log(clubs);


//
//
// // - всі трефи від 9 та більше
//

let nineUpCards = cards.filter(value =>{
    return value.value === '10' || value.value === 'ace' || value.value === 'queen' || value.value === 'jack' || value.value === 'king';
})
let spadeCards = ( nineUpCards.reduce((accum,card) =>{

    if (card.cardSuit === 'spade'){
        accum.newCards.push(card);
    } else if (card.cardSuit !== 'spade'){
        accum.oldCards.push(card);
    }
    return accum;

},{newCards:[], oldCards:[]}));

console.log(spadeCards);

