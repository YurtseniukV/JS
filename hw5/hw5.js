// - створити => функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let sq = (a,b) =>a*b;
console.log(sq(5,10));



// ----//
// - створити => функцію яка обчислює та повертає площу кола з радіусом r
let circle = (x,r) => x*(r*r);
console.log(circle(3.14,6));



//
// - створити =>функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let cylinderSq = (p, r, h) => 2*p*r*h;
console.log(cylinderSq(3.14, 10,8));

//



// - створити => функцію яка приймає масив та виводить кожен його елемент
let arr= (array) => {
    for (let arrayItem of array){
        console.log(arrayItem);
    }

}
let users = [6, 9, true, 'Ostap'];
arr(users);

//





// - створити => функцію яка створює параграф з текстом. Текст задати через аргумент
let textWriter = (text) => {
    document.write(`<h4>${text}</h4>`);
}
let paragraph = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At excepturi ratione recusandae.';
textWriter(paragraph);






// - створити => функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let listWriter = (list) => {
    document.write(`<ul>
                <li>${list}</li>
                <li>${list}</li>
                <li>${list}</li>
                        </ul>`);
}
let list = 'Hello world!';
listWriter(list);








// - створити => функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let listItem = (text,countOfTag,nameTag) => {
    document.write(`<ul>`)
    for (let i = 0; i < countOfTag; i++) {
        document.write(`<${nameTag}>${text}</${nameTag}>`)
    }
    document.write(`</ul>`)
}

listItem('Hello my friend!', 5, 'h1');







// - створити => функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let mass = (array) => {
    for (let arrayItem of array){
        document.write(`<li>${arrayItem}</li>`);
    }
}
let names = ['Olena', 55, true ];
mass(names);








// - створити => функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let arrayOfObj = (array) =>{
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
    arrayOfObj(peoples);










// - створити стрілочну функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13


let total = 0;
let sum = (arrayOfNum) => {
    for (let arrNum of arrayOfNum){
        total += arrNum;
    }
    return total;
}
console.log(sum( [5, 6, 99]));







// - створити стрілочну функцію яка повертає найменше число з масиву

let minValue = (a,b,c) => {
           if(b>a<c){
               console.log(a)
           }else if(c>b<a){
               console.log(b);
           }else if(b>c<a){
               console.log(c);
           }

}
let numbers = minValue(5,0,63);



// - створити стрілочну функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let swap = (arr,index1,index2) => {
    let arrItem = arr[0];
    arr[0] = arr[1];
    arr[1]= arr[2];
    arr[2] = arrItem;
    console.log(arr,index1,index2);
}
let numeration = [11, 22, 33,];
console.log(numeration);
swap(numeration,44,55);




// - Написати стрілочну функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

let exchangeMoney = (sumUAH,currencyValues,exchangeCurrency) => {
    let moneyExch=0;
    for (const item of currencyValues) {
        if (exchangeCurrency === item.currency  ) {
            moneyExch = item.value;
        }
    }
    return sumUAH/moneyExch + ` ${exchangeCurrency}`;

}
let money = exchangeMoney(10000,[{currency: 'USD', value:40}, {currency: 'EUR', value:42}],'USD')
console.log(money);