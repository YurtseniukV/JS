// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function sq(a,b){
    return a*b;

}
let square = sq(10,5);
console.log(square);



// - створити функцію яка обчислює та повертає площу кола з радіусом r
function circle(x,r){
    return x*(r*r);
}
let circleSq = circle(3.14,6);
console.log(circleSq);



// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinder(p,r,h){
    return 2*p*r*h;
}
let cylinderSq = cylinder(3.14,10,8);
console.log(cylinderSq);



// - створити функцію яка приймає масив та виводить кожен його елемент
function arr(array){
   for (let arrayItem of array){
       console.log(arrayItem);
   }

}
let users = [6, 9, true, 'Ostap'];
arr(users);




// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function textWriter(text){
    document.write(`<h4>${text}</h4>`);
}
let paragraph = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At excepturi ratione recusandae.';
textWriter(paragraph);




// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function listWriter(list){
    document.write(`<ul>
                <li>${list}</li>
                <li>${list}</li>
                <li>${list}</li>
                        </ul>`);

}
let list = 'Hello';
listWriter(list);



// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function listItem(text,countOfTag = '3',nameTag = 'li'){
    document.write(`<ul>`)
    for (let i = 0; i < countOfTag; i++) {
        document.write(`<${nameTag}>${text}</${nameTag}>`)
    }
    document.write(`</ul>`)
}

listItem('Hello world!')



// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function mass(array){
    for (let arrayItem of array){
        document.write(`<li>${arrayItem}</li>`);
    }
}
let names = ['Olya', 11, true ];
mass(names);



// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function arrayOfObjects(array){
    for (let item of array){
        for (let obj in item){
            document.write(`
        <div> ${obj} : ${item[obj]} </div>
        `)
        }
    }
}

let peoples = [
    {name : 'Vasya', id : 'Vas', age: 55},
    {name:'Ivan', id:'Iv' , age:23}
]
arrayOfObjects(peoples);






// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let total = 0;
function  sum(arr){
    for (let arrNum of arr){
      total += arrNum;
    }
    return total;
}
let aa = [5, 6, 9, 3,2];
console.log(sum(aa));




// - створити функцію яка повертає найменьше число з масиву

function minValue(){
    let minNum = arguments[0]
    for (let item of arguments) {
        if(item < minNum){
            minNum = item
        }
    }
    return minNum;
}
let numbers = minValue(5,0,63,15,3);
console.log(numbers);






// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]


function swap(arr,index1,index2) {
    let arrItem = arr[0];
    arr[0] = arr[1];
    arr[1]= arr[2];
    arr[2] = arrItem;
    console.log(arr,index1,index2);
}
let qq = [11, 22, 33,];
console.log(qq);
swap(qq,44,55);






//
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

function exchange(sumUAH,currencyValues,exchangeCurrency){
    let moneyExch=0;
    for (const item of currencyValues) {
        if (exchangeCurrency === item.currency  ) {
            moneyExch = item.value;
        }
    }
    return sumUAH/moneyExch + ` ${exchangeCurrency}`;
}

let money = exchange(10000,[{currency: 'USD', value:40}, {currency: 'EUR', value:42}],'USD')
console.log(money);
