<?php
session_start();
require_once 'db.php';
$db = Database::getInstance();
if(!isset($_REQUEST['login']) || !isset($_REQUEST['password'])){
    die();
}
$login = $db->quote($_REQUEST['login']);
$password = md5($_REQUEST['password']);

$query = "SELECT id, login FROM `users` WHERE login='$login' AND password='$password'";
$result = $db->query($query)->fetchSingleRow();
if($result){
    $_SESSION['id']=$result['id'];
    $_SESSION['login']=$result['login'];
} else {
    header('Location: /admin');
}
