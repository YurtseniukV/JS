// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let user=['56', 'name', true, 123, false, 5, -199, 'hello', false, []];
console.log(user[0]);
console.log(user[1]);
console.log(user[2]);
console.log(user[3]);
console.log(user[4]);
console.log(user[5]);
console.log(user[6]);
console.log(user[7]);
console.log(user[8]);
console.log(user[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title: 'Duna',
    pageCount: 456,
    genre: 'Fantasy'
};
let book2 ={
    title: 'Emotional intelekt',
    pageCount: 260,
    genre: 'Psyhology'
};
let book3={
    title: 'Hatiko',
    pageCount: 500,
    genre: 'Historical'
};

// // - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let book4={
    title:'Startrack',
    pageCount: 620,
    genre: 'Fantasy',
    authors: ['Jastin Mayer', 56]
}

let book5={
    title: 'Dark swan',
    pageCount: 253,
    genre: 'horror',
    authors: ['Jane Lock',72]
}

let book6={
    title: 'Wonderwoman',
    pageCount: 386,
    genre:'Drama',
    authors: ['Tom Walker', 61]
}

// // - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {name:'Borys', username:'Boro', password:'0000'},
    {name:'Anna', username:'Anet', password:'1111'},
    {name:'Ivan', username:'Ivanko', password:'2222'},
    {name:'Olya', username:'Olka', password:'3333'},
    {name:'Anriy', username:'Andrew', password:'4444'},
    {name:'Ostap', username:'Ostapko', password:'5555'},
    {name:'Hanna', username:'Annet', password:'6666'},
    {name:'Pavlo', username:'Pasha', password:'7777'},
    {name:'Taras', username:'Tarasko', password:'8888'},
    {name:'Artem', username:'Tema', password:'9999'}
]
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5]['password']);
console.log(users[6]['password']);
console.log(users[7]['password']);
console.log(users[8]['password']);
console.log(users[9]['password']);
