// функция удаляющая лишние теги и пробелы

function deleteTegs(str) {
    const regexp = /<.*?>/ig,
        strNew = str.replace(regexp, "").replace(/(\s)+/g,"$1").replace(/(^ )+|( $)+|/,"");
        return strNew;
   }
   
   console.log(deleteTegs('<div id="tera">Удалить лишние  <a href="link">теги</a></div> из HTML.'  ))

   