// Забираем в переменные кнопку

const button = document.getElementById('button');



// Забираем  в переменные поля для вывода output
const userNameOutput = document.querySelector('.output-part__name');

const avatarOutput = document.querySelector('.output-part__url');

const dateOutput = document.querySelector('.output-part__date');

const commentOutput = document.querySelector('.output-part__comment');


// функция вывода данных в поле имени
const showOutputName = () => {
    const userName = document.getElementById('name');
    const userNameValue = userName.value;
    const userNameValueLowered = userNameValue.toLowerCase();
    const userNameValueTrimmed = userNameValueLowered.trim().replace(/^ +| +$|( ) +/g,"$1");
    const userNameValueSplitted = userNameValueTrimmed .split(" ");
    const userNameCapitalized = userNameValueSplitted.map(function(word) {
 return word[0].toUpperCase() + word.slice(1);
  })
  const finalUserName = userNameCapitalized.join(" ")
  userNameOutput.innerHTML = finalUserName;
}


// функция вывода аватара
  const showOutputAvatar = ()=> {

    const avatar = document.getElementById('avatar');
    const avatarValue = avatar.value;
    avatarOutput.innerHTML = '<img src="' + avatarValue + '" width="250" height="250">';
}

// функция вывода комментария

const checkSpam  = () => {
    const comment = document.getElementById('comment');
    const commentValue = comment.value;
    const commentValueChecked = commentValue.replace(/viagra/gi, "***").replace(/xxx/gi, "***");
    commentOutput.innerHTML = commentValueChecked;
};



// вешаем обработчик событий на кнопку
button.addEventListener('click', showOutputName);
button.addEventListener('click', showOutputAvatar);
button.addEventListener('click', checkSpam);
button.addEventListener('click', noName);



// ЗАДАНИЕ НЕДЕЛИ 13

let control = 0;
const yesCheckbox = document.getElementById('yes'); //чекбокс "да"
const noCheckbox = document.getElementById('no'); //чекбокс "нет"
const NameFormPart = document.querySelector('.input-part__name'); //поле "фио и его инпут"

// функция проверки выделения только 1 чекбокса единовременно
const onlyOne= () =>  {
if (control === 0) {
yesCheckbox.checked=true;
noCheckbox.checked=false;
control = 1;
} else {
noCheckbox.checked=true;
yesCheckbox.checked=false;
control = 0;
}
}

// функция: если пользователь не ввел имя, то отобразить Username
 function noName() {
  const userName = document.getElementById('name');
  const userNameValue = userName.value;
 if (userNameValue == "") { 
  userNameOutput.innerHTML = "Username";
 }}

//  функция скрытия полей заполнения имени при нажатом no-чекбоксе
const hideNameInputPart = () => {
  if (noCheckbox.checked=true) {
  NameFormPart.hidden=true} 
  else {
    NameFormPart.hidden=false} 
  }

  //  функция возврата видимости полей заполнения имени при нажатом yes-чекбоксе
 const showNameInputPart = () => {
    if (yesCheckbox.checked=true) {
    NameFormPart.hidden=false} 
    else {
      NameFormPart.hidden=true} 
    }

// вешаем обработчик событий (выделение только 1го чекбокса и скрытие поле с ФИО) на чекбоксы
    yesCheckbox.addEventListener('click', showNameInputPart);
    yesCheckbox.addEventListener('click', onlyOne);
    noCheckbox.addEventListener('click', hideNameInputPart);
    noCheckbox.addEventListener('click', onlyOne);


  //функция присвоения имени дню недели
    const nameWeekDay = () => {
  let dayName = '';
  let dayOfWeek = new Date().getDay();
  switch(dayOfWeek) {
  case 0: dayName = 'Sun';
  break;
  case 1: dayName = 'Mon';
  break;
  case 2: dayName = 'Tue';
  break;
  case 3: dayName = 'Wed';
  break;
  case 4: dayName = 'Thu';
  break;
  case 5: dayName = 'Fri';
  break;
  case 6: dayName = 'Sat';
  break;
  default: dayName = 'Unknown';
      }
      return dayName;
  }

    //функция присвоения имени месяцу
    const nameMonth = () => {
      let monthName = '';
      let monthNumber = new Date().getMonth();
      switch(monthNumber) {
      case 0: monthName = 'Jan';
      break;
      case 1: monthName = 'Feb';
      break;
      case 2: monthName = 'Mar';
      break;
      case 3: monthName = 'Apr';
      break;
      case 4: monthName = 'May';
      break;
      case 5: monthName = 'Jun';
      break;
      case 6: monthName = 'Jul';
      break;
      case 7: monthName = 'Aug';
      break;
      case 8: monthName = 'Sep';
      break;
      case 9: monthName = 'Oct';
      break;
      case 10: monthName = 'Nov';
      break;
      case 11: monthName = 'Dec';
      break;
      default: monthName = 'Unknown';
          }
          return monthName;
      }

  //функция добавления 0 к дате
 const addZeroToDate = () => {
  const date= new Date().getDate();
  if (date < 10){
    return `0${date}`
  } else {
   return `${date}`
  }
  }

    //функция добавления 0 к часам
 const addZeroToHours = () => {
  const hours = new Date().getHours();
  if (hours < 10){
    return `0${hours}`
  } else {
   return `${hours}`
  }
  }

  //функция добавления 0 к минутам
 const addZeroToMin = () => {
    const min = new Date().getMinutes();
    if (min < 10){
      return `0${min}`
    } else {
     return `${min}`
    }
    }

  //функция добавления 0 к секундам
 const addZeroToSec = () => {
  const sec = new Date().getSeconds();
  if (sec  < 10){
    return `0${sec}`
  } else {
   return `${sec}`
  }
  }
    
  

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
const totalDate = `${weekDay}, ${date} ${month} ${year} at ${hours}:${min}:${sec}`
dateOutput.innerHTML = totalDate;
}

//вешаем обработчик вывода даты на кнопку
button.addEventListener('click', showDate);




