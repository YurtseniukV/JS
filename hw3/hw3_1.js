// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for (let i = 0; i < 10; i++) {
    document.write(` <div>Nice to meet you</div>`)

}


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
let items=[
    {greeting:'Hello'},
    {greeting:'Hi'},
    {greeting:'Bonjour'},
    {greeting:'Привіт'},
    {greeting:'Salut'},
    {greeting:'Ola'},
    {greeting:'Guten tag'},
    {greeting:'Nin Hao'},
    {greeting:'Salve'},
    {greeting:'Asalam'}
];

for (let i = 0; i < items.length; i++) {
    const item = items[i];
    document.write(`<div> ${item.greeting} ${[i]}</div>`)
}


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let i = 0;
while (i<20){
    document.write(`<h1>World</h1>`)
    i++;
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
    let content = ['One', 'two', 'three', 'four', 'five', 'six', 'seven', 'Olya', 'Ira', 'Petya', 'Aa', 'Bb', 'CC', 'DD', 'SS', 'FF', 'PP', 'Monday', 'Friday', 'Sunday'];
    let ii = 0;
    while (ii<20){
        let item = content[ii];
        document.write(`<h1>${item} ${[ii]}</h1>`);
        ii++;
    }