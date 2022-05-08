const validation = (fieldName) => {
    let value;

    if (fieldName === "age") {
        value = +prompt(`Enter your ${fieldName}`);

        while (!value || !Number.isInteger(value)) {
            value = +prompt(`Enter your ${fieldName} again`);
        }
    } else {
        value = prompt(`Enter your ${fieldName}`);

        while (!value) {
            value = prompt(`Enter your ${fieldName} again`);
        }
    }
    return value;
};

const getGender = () => {
    return confirm("Are you man?") ? "man" : "woman";
};

const getPension = (gender, age) => {
    if ((gender === "man" && age > 64) || (gender === "woman" && age > 54)) {
        return "yes";
    } else {
        return "no";
    }
};

const showInfo = (username, surname, patronymic, age, gender, pension) => {
    alert(`ФИО: ${username} ${surname} ${patronymic}
    Ваш возрас в годах: ${age}
    Ваш возрас в днях: ${age * 365}
    Через 5 лет Вам будет: ${age + 5}
    Ваш пол: ${gender}
    Вы на пенсии: ${pension}`);
};

const init = () => {
    const username = validation("name");
    const surname = validation("surname");
    const patronymic = validation("patronymic");
    const age = validation("age");
    const gender = getGender();
    const pension = getPension(gender, age);

    showInfo(username, surname, patronymic, age, gender, pension);
};

init();