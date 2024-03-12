// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.name = name;
    this.id = id;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}


let users = [
    new User(1, 'Oleh', 'Onev', 'oleh@gmail.com', '+380963542569'),
    new User(2, 'Olya', 'Polin', 'olya@gmail.com', '+380963535569'),
    new User(3, 'Ira', 'Ren', 'ira@gmail.com', '+380963542999'),
    new User(4, 'Ivan', 'Seryi', 'ivan@gmail.com', '+380963542222'),
    new User(5, 'Ihnat', 'Asan', 'ihnat@gmail.com', '+380963542777'),
    new User(6, 'Vova', 'Polid', 'vova@gmail.com', '+380963542868'),
    new User(7, 'Andrew', 'Nest', 'andr@gmail.com', '+380963553565'),
    new User(8, 'Roma', 'Weres', 'roma@gmail.com', '+380963500000'),
    new User(9, 'Eli', 'Sazin', 'eli@gmail.com', '+380963541111'),
    new User(10, 'Ostin', 'Lobo', 'osti@gmail.com', '+380963548875')
]
console.log(users);





// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filteredUsers = users.filter(value =>{
    return value.id % 2 === 0;

})
console.log(filteredUsers);






// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sortUsers = users.sort((obj1,obj2)=> {
    return obj2 - obj1;
});
console.log(sortUsers);








// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clients = [
    new Client(1, 'Oleh', 'Olehov', 'ol@gmail.com', '+380971111111', ['apple', 'oil', 'water','apple', 'oil', 'water','apple', 'oil', 'water','apple']),
    new Client(2, 'Olya', 'Olyas', 'olya@gmail.com', '+380972222222', ['oil', 'water']),
    new Client(3, 'Olena', 'Olenas', 'ole@gmail.com', '+380971111333', ['apple', 'oil', 'water','apple', 'oil']),
    new Client(4, 'Ostap', 'Ostapov', 'ost@gmail.com', '+380971111444', ['apple', 'oil', 'water']),
    new Client(5, 'Osyp', 'Osypov', 'osyp@gmail.com', '+380971111555', ['apple', 'oil', 'water','apple', 'oil', 'water','oil']),
    new Client(6, 'Anna', 'Annav', 'an@gmail.com', '+380971111666', ['apple', 'oil', 'water', 'apple', 'oil', 'water','apple', 'oil', 'water']),
    new Client(7, 'Asya', 'Otov', 'as@gmail.com', '+380971111777', ['apple', 'oil', 'water', 'apple', 'oil', 'water']),
    new Client(8, 'Ivan', 'Ivanov', 'iv@gmail.com', '+380971111888', ['apple', 'oil', 'water', 'mango']),
    new Client(9, 'Vova', 'Vov', 'vov@gmail.com', '+380971111999', ['apple', 'oil', 'water']),
    new Client(10, 'Nika', 'Nov', 'nik@gmail.com', '+380971111000', ['apple','apple'])
]

console.log(clients);









// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

 let sortClients = clients.sort((a,b) =>{
return b.order - a.order;
})
console.log(sortClients);














// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


function Car (model,year,speedMax,capacity,manufacturer,driver = []){
this.model = model;
this.year = year;
this.manufacturer = manufacturer;
this.speedMax = speedMax;
this.capacity = capacity;
this.driver = driver;



    this.addDriver= function (driver){
        this.driver.push(driver);
    }

}

Car.prototype.drive = function(){
    return `Їдемо зі швидкістю ${this.speedMax} на годину`;
};

Car.prototype.info = function(){
    return `Модель авто - ${this.model},
            Рік випуску - ${this.year},
            Країна виробник - ${this.manufacturer},
            Максимальна швидкість - ${this.speedMax} км/год,
            Обєм двигуна - ${this.capacity}.`
}

Car.prototype.increaseMaxSpeed = function(newSpeed){
    return this.speedMax += newSpeed;
}

Car.prototype.changeYear= function (newValue){
    return this.year = newValue;
}



let reno = new Car('Reno', 2015, 220, 'V = 2.0', 'France');
console.log(reno);
console.log(reno.drive());
console.log(reno.info());
console.log(reno.increaseMaxSpeed(30));
console.log(reno.changeYear(2018));
reno.addDriver({model:'Reno', year:2015});
console.log(reno.info());









// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car



class Car2 {
constructor(model,year,speedMax,capacity,manufacturer){
    this.model = model;
    this.year = year;
    this.manufacturer = manufacturer;
    this.speedMax = speedMax;
    this.capacity = capacity;

}

    drive(){
        return `Їдемо зі швидкістю ${this.speedMax} на годину`;
    };

    info(){
        return `Модель авто - ${this.model},
            Рік випуску - ${this.year},
            Країна виробник - ${this.manufacturer},
            Максимальна швидкість - ${this.speedMax} км/год,
            Обєм двигуна - ${this.capacity}.`
    }

 increaseMaxSpeed (newSpeed){
        return this.speedMax += newSpeed;
    }

    changeYear (newValue){
        return this.year = newValue;
    }

}

let audi = new Car2('Audi R8', 2021, 235, '4.0', 'Germany');
console.log(audi);
console.log(audi.drive());
console.log(audi.info());
console.log(audi.increaseMaxSpeed(100));
console.log(audi.changeYear(2024));










// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

class Cinderella{
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

let cinderellas = [
    new Cinderella('Ann', 28, 39),
    new Cinderella('Alice', 29, 34),
    new Cinderella('Ashley', 24, 35),
    new Cinderella('Ameli', 22, 33),
    new Cinderella('Jasmine', 29, 37),
    new Cinderella('Katya', 21, 40),
    new Cinderella('Katrin', 23, 41),
    new Cinderella('Kasya', 38, 44),
    new Cinderella('Nina', 48, 36),
    new Cinderella('Nika', 20, 42),
];

class Prince {
    constructor(name, age, footSizeFound) {
        this.name = name;
        this.age = age;
        this.footSizeFound = footSizeFound;
    }

}

let prince = new Prince('Alladin', 35, 37);


function coupleFinder(prince,array) {
    for (const princes of array) {
        if (princes.footSize === 37) {
            console.log(princes);
        }
    }
}

coupleFinder(prince,cinderellas);




//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
let findPrinces = cinderellas.find((princes,prince) => princes.footSize === 37);
console.log(findPrinces);

