// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом



// let users = [];
// let divObj = document.createElement('div');
// document.body.appendChild(divObj);

let form = document.forms['form'];
form.onsubmit = function (e) {
    e.preventDefault();

// let obj = {
//     name: this.username.value,
//     surname: this.surname.value,
//     age: this.age.value
// }
// users.push(obj);
// console.log(users);
    // divObj.innerText = JSON.stringify(users);

}

let inputUsername = form.username;
inputUsername.oninput = function () {
}

let inputSurname = form.surname;
inputSurname.oninput = function () {
}

let inputAge = form.age;
inputAge.oninput = function () {
}

let divObj = document.createElement('div');
document.body.appendChild(divObj);



let button = document.getElementsByClassName('createOb')[0];
button.onclick = function () {

    divObj.innerText = `${inputUsername.value} ${inputSurname.value}, вік : ${inputAge.value}`;

}


