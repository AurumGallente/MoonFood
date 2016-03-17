<?php
$action = isset($_REQUEST['action'])? $_REQUEST['action'] : null;
switch($action){
    case null: $template = mainPage();
        break;
    case 'faq' : $template = faqPage();
        break;
    case 'reviews' : $template = reviewsPage();
        break;
    case 'blog' : $template = blogPage();
        break;
    case 'order' : $template = orderPage();
        break;
    default : $template = mainPage();
}

function mainPage(){
    return 'templates/main.php';    
}
function faqPage(){
    return 'templates/faq.php';
}
function blogPage(){
    return 'templates/blog.php';
}
function orderPage(){
    $number = $_REQUEST['select'];
    return 'templates/order.php';
}
function reviewsPage(){
    return 'templates/reviews.php';
}
require_once ('templates/header.php');
require_once ($template);
require_once ('templates/footer.php');