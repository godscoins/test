<?php
define("HOST", "localhost");
define("USER", "soberhanru_ez");
define("PASSWORD", "Vfhrtnbyu11");
define("DB_NAME", "soberhanru_ez");
$db_connect = mysql_connect(HOST, USER, PASSWORD, TRUE); 
mysql_selectdb(DB_NAME,$db_connect);
mysql_set_charset('utf8');
?>