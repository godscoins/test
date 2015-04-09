<?php

include "db.php"; // подключение к базе данных
 
$countView = (int)$_POST['count_add'];  // количество записей, получаемых за один раз
$startIndex = (int)$_POST['count_show']; // с какой записи начать выборку
 
// запрос к бд
$sql = mysql_query("
    SELECT * FROM `use` LIMIT $startIndex, $countView
") or die(mysql_error());
$newsData = array();
while($result = mysql_fetch_array($sql, MYSQL_ASSOC)){
    $newsData[] = $result;
}
 
if(empty($newsData)){
    // если новостей нет
    echo json_encode(array(
        'result'    => 'finish'
    ));
}else{
    // если новости получили из базы, то сформируем html элементы
    // и отдадим их клиенту
    $html = "";
    foreach($newsData as $oneNews){
        $html .= "
		    <h3>{$oneNews['title']}</h3>
            <div class='papers'>{$oneNews['big_text']} </div>

        
        ";
    }
    echo json_encode(array(
        'result'    => 'success',
        'html'      => $html
    ));
}

?>