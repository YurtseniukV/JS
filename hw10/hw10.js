let form = document.forms['form'];
form.onsubmit = function (e) {
    e.preventDefault();
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


// let user = {
//     name:inputUsername.value,
//     age:inputAge,
//     surname:inputSurname
// };
//
// divObj.innerHTML = `<p>${user}</p>`;
