let name = prompt('Ваше имя?', 'abc');
let surname = prompt('Ваша фамилия?', 'abc');
let  fathername = prompt('Ваше отчество?', 'abc');
let age = prompt ('Сколько тебе лет?', '123');
let isMen = confirm('Ваш пол - мужской?', );
let gender = isMen ? 'мужской' : 'женский';
let grandGender;
if (age <= 65 && gender) {
grandGender = 'Нет!';
} else if (age <= 55 && !gender) {
    grandGender = 'Нет!';
} else {
    grandGender = 'Да!';
}

alert(`ФИО: ${name} ${surname} ${fathername}
Ваш возраст в годах: ${age}
Ваш возраст в днях: ${age *365}
Через 5 лет вам будет: ${+age + 5}
Ваш пол: ${gender}
Вы на пенсии: ${grandGender}`);

let line = prompt('Введите предложение для подсчета гласных букв', 'абв/abc');
let vowels = line.match(/[аоэиуыеёюяaeiouy]/g).length; 
alert (vowels);

