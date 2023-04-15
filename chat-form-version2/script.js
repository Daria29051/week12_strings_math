// Забираем данные из html-файла

const button = document.getElementById('button');


// Забираем  в переменные поля для вывода input
const userName = document.getElementById('name'); //поле ввода имениconsole.log(button);


const avatar = document.getElementById('avatar'); // поле ввода ссылки на аватар


const comment = document.getElementById('comment'); // поле ввода комментария


const output = document.querySelector('.output-part__form'); //поле вывода заполненной формы


// функция вывода имени

const showOutputName = () => {
  const userNameValueLowered = userName.value.toLowerCase();
  const userNameValueTrimmed = userNameValueLowered.trim().replace(/^ +| +$|( ) +/g,"$1");
  const userNameValueSplitted = userNameValueTrimmed .split(" ");
  const userNameCapitalized = userNameValueSplitted.map(function(word) {
return word.slice(0,1).toUpperCase() + word.slice(1);
})
const totalUserName = userNameCapitalized.join(" ");

// замена имени на 'Username'
if ((userName.value === "") && (noCheckbox.checked=true)) { 
  return "Username";
 } 
 else {
  return totalUserName;
 }
}




// функция вывода аватара

const arr = [
  "https://omoro.ru/wp-content/uploads/2018/05/prikilnie-kartinki-na-avatarky-dlia-devyshek-12.jpg",
  "https://zamanilka.ru/wp-content/uploads/2022/07/kotik-ava-060722-1.jpg",
  "http://psihoman.ru/uploads/posts/2022-07/1657544415_5.jpg",
  "https://userpic.fishki.net/2016/01/10/466640/dcb1710f25c8e04f85b847fd8d573e88.jpg",
  "https://s1.1zoom.ru/b5050/340/255649-Sepik_3840x2400.jpg",
  "https://www.ukazka.ru/img/g/uk771771.jpg",
];


const putRandomImage = () => {
  let url = " ";
  if (avatar.value == "") {
    const indexArr = Math.floor(Math.random() * 6);
    url = arr[indexArr];
  } else {
    url = avatar.value;
  }
  return url;
};



// функция вывода комментария

const checkSpam = () => {
  const commentValueChecked = comment.value.replace(/viagra/gi, "***").replace(/xxx/gi, "***");
  return commentValueChecked;

};


// ЗАДАНИЕ НЕДЕЛИ 13

//забираем в переменные чекбоксы и поле ввода фио
let control = 0;
const yesCheckbox = document.getElementById("yes"); //чекбокс "да"
const noCheckbox = document.getElementById("no"); //чекбокс "нет"
const NameFormPart = document.querySelector('.input-part__name'); //поле "фио и его инпут"




// функция выделения только 1 чекбокса единовременно
const onlyOneYes = () => {
  if (control === 0) {
    yesCheckbox.checked = true;
    noCheckbox.checked = false;
  } else {
    noCheckbox.checked = true;
    yesCheckbox.checked = false;
  }
};

const onlyOneNo = () => {
  if (control === 0) {
    noCheckbox.checked = true;
    yesCheckbox.checked = false;
  } else {
    noCheckbox.checked = true;
    yesCheckbox.checked = false;
  }
};

// обработчик событий на выделение только 1 чекбокса
noCheckbox.addEventListener("click", onlyOneNo);
yesCheckbox.addEventListener("click", onlyOneYes);


//  функция скрытия полей заполнения имени при нажатом no-чекбоксе
const hideNameInputPart = () => {
  if ((noCheckbox.checked = true)) {
    NameFormPart.hidden = true;
  } else {
    NameFormPart.hidden = false;
  }
};

//  функция возврата видимости полей заполнения имени при нажатом yes-чекбоксе
const showNameInputPart = () => {
  if ((yesCheckbox.checked = true)) {
    NameFormPart.hidden = false;
  } else {
    NameFormPart.hidden = true;
  }
};

// вешаем обработчик событий на скрытие/раскрытие поле с ФИО на чекбоксы
yesCheckbox.addEventListener("click", showNameInputPart);
noCheckbox.addEventListener("click", hideNameInputPart);


// РАБОТА С ДАТОЙ
//функция присвоения имени дню недели
const nameWeekDay = () => {
  let dayName = "";
  let dayOfWeek = new Date().getDay();
  switch (dayOfWeek) {
    case 0:
      dayName = "Sun";
      break;
    case 1:
      dayName = "Mon";
      break;
    case 2:
      dayName = "Tue";
      break;
    case 3:
      dayName = "Wed";
      break;
    case 4:
      dayName = "Thu";
      break;
    case 5:
      dayName = "Fri";
      break;
    case 6:
      dayName = "Sat";
      break;
    default:
      dayName = "Unknown";
  }
  return dayName;
};

//функция присвоения имени месяцу
const nameMonth = () => {
  let monthName = "";
  let monthNumber = new Date().getMonth();
  switch (monthNumber) {
    case 0:
      monthName = "Jan";
      break;
    case 1:
      monthName = "Feb";
      break;
    case 2:
      monthName = "Mar";
      break;
    case 3:
      monthName = "Apr";
      break;
    case 4:
      monthName = "May";
      break;
    case 5:
      monthName = "Jun";
      break;
    case 6:
      monthName = "Jul";
      break;
    case 7:
      monthName = "Aug";
      break;
    case 8:
      monthName = "Sep";
      break;
    case 9:
      monthName = "Oct";
      break;
    case 10:
      monthName = "Nov";
      break;
    case 11:
      monthName = "Dec";
      break;
    default:
      monthName = "Unknown";
  }
  return monthName;
};

//функция добавления 0 к дате
const addZeroToDate = () => {
  const date = new Date().getDate();
  if (date < 10) {
    return `0${date}`;
  } else {
    return `${date}`;
  }
};

//функция добавления 0 к часам
const addZeroToHours = () => {
  const hours = new Date().getHours();
  if (hours < 10) {
    return `0${hours}`;
  } else {
    return `${hours}`;
  }
};

//функция добавления 0 к минутам
const addZeroToMin = () => {
  const min = new Date().getMinutes();
  if (min < 10) {
    return `0${min}`;
  } else {
    return `${min}`;
  }
};

//функция добавления 0 к секундам
const addZeroToSec = () => {
  const sec = new Date().getSeconds();
  if (sec < 10) {
    return `0${sec}`;
  } else {
    return `${sec}`;
  }
};

// функция вывода даты и времени
const showDate = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = nameMonth();
  const date = addZeroToDate();
  const weekDay = nameWeekDay();
  const hours = addZeroToHours();
  const min = addZeroToMin();
  const sec = addZeroToSec();
  const totalDate = `${weekDay}, ${date} ${month} ${year} at ${hours}:${min}:${sec}`;
  return totalDate;
};


// функция вывода всей формы


const showOutput = () => {
  output.innerHTML += `<div class="output-part__profile">
  <div class="output-part__avatar"><img class="output-part__img" alt="avatar" src=${putRandomImage()}></div>
    <div class="output-part__name">${showOutputName()}</div>
  
    <div class="output-part__date">${showDate()}</div>
    </div>
  <div class="output-part__comment">${checkSpam()}</div>
  `;
};

//вешаем обработчик вывода всей формы на кнопку
button.addEventListener('click', showOutput);

//функция очистки формы
const clearForm = () => {
    const form = document.querySelector('.form');
    form.reset();
  };
  
  //вешаем обработчик очистки формы на кнопку
  button.addEventListener('click', clearForm);