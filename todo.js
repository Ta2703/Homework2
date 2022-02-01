const form = document.querySelector("#form");
const todo = document.querySelector("#todo");
const inputText = document.querySelector("#inputText");
const btnSumbit = document.querySelector("#btnSumbit");
const modal = document.querySelector("#modal");
const btnClearAll = document.querySelector("#btnClearAll");
let data = [];

btnSumbit.addEventListener('click', (event) => {
    event.preventDefault();// отменяет событие по умолчанию

    data.push({
        title: inputText.value,
        done: false,
        id: Date.now(),
    });

    todo.innerHTML = ""; // при каждом клике очищаем, не будут повторяться вводимые числа

    data.forEach((task) => {
        todo.innerHTML += `
        <div class='${task.done ? "card card_done" : "card"}' id=${task.id}>
        ${task.title}
        <button class='btnDelet'>Delet</button>
        <button class='btnDone'>Done</button>
        <button class='btnEdit'>Edit</button>
        </div> 
        `;
    })

    form.reset();
});

btnClearAll.addEventListener("click", (event) => {
    event.preventDefault();

    data = [];
    todo.innerHTML = "";
});

todo.addEventListener("click", (event) => {
    if (event.target.classList.contains("btnDelet")) {
        const card = event.target.closest(".card");
        const cardId = +card.id; // находим айдишку карточки 33-34 (id: Date.now(),)

        const cardIndexInData = data.findIndex((task) => { //индекс карточки, на которую нажали делит
            return task.id === cardId;
        });// 

        data.splice(cardIndexInData, 1);

        todo.innerHTML = "";

        data.forEach((task) => {
            todo.innerHTML += `
            <div class='${task.done ? "card card_done" : "card"}' id=${task.id}>
            ${task.title}
            <button class='btnDelet'>Delet</button>
            <button class='btnDone'>Done</button>
            <button class='btnEdit'>Edit</button>
            </div> 
            `;
        })

        console.log(card);
    }


    //console.log("TARGET", event.target);//блок, на котором срабатывает повешанное событие, именно, на что кликаем
    //console.log("CURRENT_TARGET", event.currentTarget); //блок на котором повесили событие, большой блок, где находится все


    if (event.target.classList.contains("btnDone")) {
        const card = event.target.closest(".card");
        const cardId = +card.id; // находим айдишку карточки 33-34 (id: Date.now(),)
        const cardIndexInData = data.findIndex((task) => { //индекс карточки, на которую нажали делит
            return task.id === cardId;
        });// 

        data[cardIndexInData].done = !data[cardIndexInData].done;

        todo.innerHTML = "";

        data.forEach((task) => {
            todo.innerHTML += `
        <div class='${task.done ? "card card_done" : "card"}' id=${task.id}>
        ${task.title}
        <button class='btnDelet'>Delet</button>
        <button class='btnDone'>Done</button>
        <button class='btnEdit'>Edit</button>
        </div> 
        `;
        });
    };

    if (event.target.classList.contains("btnEdit")) {
        modal.classList.toggle("visible");
    }
});