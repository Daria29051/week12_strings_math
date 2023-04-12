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


// РАБОТА С АВАТАРОМ

    // // функция подстановки рандомного аватара
    const putRandomImage = () => {
      const avatar = document.getElementById('avatar');
      const avatarValue = avatar.value;
      if (avatarValue == "")  {
      let image =  new Array();
  image[0] = "https://omoro.ru/wp-content/uploads/2018/05/prikilnie-kartinki-na-avatarky-dlia-devyshek-12.jpg";
  image[1] = "https://zamanilka.ru/wp-content/uploads/2022/07/kotik-ava-060722-1.jpg";
  image[2] = "http://psihoman.ru/uploads/posts/2022-07/1657544415_5.jpg";
  image[3] = "https://userpic.fishki.net/2016/01/10/466640/dcb1710f25c8e04f85b847fd8d573e88.jpg";
  image[4] = "https://s1.1zoom.ru/b5050/340/255649-Sepik_3840x2400.jpg";
  image[5] = "https://www.ukazka.ru/img/g/uk771771.jpg";
  
    let number = Math.floor(Math.random() * image.length);
    avatarOutput.innerHTML = '<img src="'+ image[number]+'" width="250" height="250"/>';
      }  else {
    avatarOutput.innerHTML = '<img src="' + avatarValue + '" width="250" height="250">';
      }
    }


  
// функция вывода комментария

const checkSpam  = () => {
    const comment = document.getElementById('comment');
    const commentValue = comment.value;
    const commentValueChecked = commentValue.replace(/viagra/gi, "***").replace(/xxx/gi, "***");
    commentOutput.innerHTML = commentValueChecked;
};



// вешаем обработчики событий на кнопку
button.addEventListener('click', showOutputName); //вывод имени
button.addEventListener('click', putRandomImage); // вывод аватара с условием рандом подбора картинки если не указан url
button.addEventListener('click', checkSpam); // вывод комментария





// ЗАДАНИЕ НЕДЕЛИ 13

let control = 0;
const yesCheckbox = document.getElementById('yes'); //чекбокс "да"
const noCheckbox = document.getElementById('no'); //чекбокс "нет"
const NameFormPart = document.querySelector('.input-part__name'); //поле "фио и его инпут"

// функция выделения только 1 чекбокса единовременно
const onlyOneYes= () =>  {
if (control === 0) {
yesCheckbox.checked=true;
noCheckbox.checked=false;
} else {
noCheckbox.checked=true;
yesCheckbox.checked=false;
}
}

const onlyOneNo= () =>  {
  if (control === 0) {
  noCheckbox.checked=true;
  yesCheckbox.checked=false;
  } else {
  noCheckbox.checked=true;
  yesCheckbox.checked=false;
  }
  }

// обработчик событий на выделение только  чекбокса
noCheckbox.addEventListener('click', onlyOneNo);
yesCheckbox.addEventListener('click', onlyOneYes);



// функция: если пользователь не ввел имя или выбрал чекбокс No = не показывать имя, то отобрази Username
 function noName() {
  const userName = document.getElementById('name');
  const userNameValue = userName.value;
 if ((userNameValue === "") && (noCheckbox.checked=true)) { 
  userNameOutput.innerHTML = "Username";
 } 
}

//  обработчик событий на незаполненное поле имени
 button.addEventListener('click', noName); //вывод username при незаполнен

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
    noCheckbox.addEventListener('click', hideNameInputPart);



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
dateOutput.innerHTML =totalDate;
}

//вешаем обработчик вывода даты на кнопку
button.addEventListener('click', showDate);


// функция последовательного отображения комментариев друг за другом
