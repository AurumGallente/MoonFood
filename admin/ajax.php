<?php
if(!$_SERVER['SERVER_ADDR']==$_SERVER['REMOTE_ADDR']){
    die();
}
require_once 'db.php';
$db = Database::getInstance();
var_dump($_REQUEST);


