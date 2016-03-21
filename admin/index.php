<?php
require_once 'db.php';
session_start();

$products = 'products.php';
$login = 'login.php';
$template = isset($_SESSION['login']) && isset($_SESSION['id']) ? $products : $login;
if(isset($_SESSION['id'])&&isset($_SESSION['login'])){
    header('Location: /admin/products.php');
}

$header = 'header.php';
$footer = 'footer.php';

include_once $header;
include_once $template;
include_once $footer;
