// функция удаляющая теги
function deleteTegs(str) {
 var tags = /( |<([^>]+)>)/ig,
     strNew = str.replace(tags, " ");
     return strNew;
}

console.log(deleteTegs('<div id="tera">Удалить лишние  <a href="link">теги</a></div> из HTML.'  ));