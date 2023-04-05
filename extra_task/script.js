// функция удаляющая лишние теги и пробелы

function deleteTegs(str) {
 var tags = /( |<([^>]+)>)/ig,
     strNew = str.replace(tags, " ").replace(/^ +| +$|( ) +/g,"$1");
     return strNew;
}

console.log(deleteTegs('<div id="tera">Удалить лишние  <a href="link">теги</a></div> из HTML.'  ))