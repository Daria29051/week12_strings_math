// Забираем в переменные кнопку

const button = document.getElementById('button');



// Забираем  в переменные поля для вывода output
const userNameOutput = document.querySelector('.output-part__name');


const avatarOutput = document.querySelector('.output-part__url');


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


