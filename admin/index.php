<?php
require_once 'db.php';
session_start();

$products = 'products.php';
$login = 'login.php';
$template = isset($_SESSION['login']) && isset($_SESSION['id']) ? $products : $login;

$header = 'header.php';
$footer = 'footer.php';

include_once $header;
include_once $template;
include_once $footer;
