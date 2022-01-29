const form = document.querySelector("#form");
const todo = document.querySelector("#todo");
const inputText = document.querySelector("#inputText");
const btnSumbit = document.querySelector("#btnSumbit");

let data = [];

btnSumbit.addEventListener('click', (event) => {
    event.preventDefault();// отменяет событие по умолчанию

    data.push(inputText.value);

    todo.innerHTML = ""; // при каждом клике очищаем, не будут повторяться вводимые числа

    data.forEach((title, index) => {
        todo.innerHTML += `
        <div class='card' id=${index}>
        ${title}
        <button id='btnDelet'>Delet</button>
        </div> 
        `;
    })

    form.reset();
});

todo.addEventListener("click", (event) => {
    if (event.target.id === "btnDelet") {
        const card = event.target.closest(".card");
        const cardId = +card.id;

        data.splice(cardId, 1);

        todo.innerHTML = "";

        data.forEach((title, index) => {
            todo.innerHTML += `
            <div class='card' id=${index}>
            ${title}
            <button id='btnDelet'>Delet</button>
            </div> 
            `;
        })

        console.log(card);
    }
    //console.log("TARGET", event.target);//блок, на котором срабатывает повешанное событие, именно, на что кликаем
    //console.log("CURRENT_TARGET", event.currentTarget); //блок на котором повесили событие, большой блок, где находится все
})