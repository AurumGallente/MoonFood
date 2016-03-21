<?php

require_once '../admin/db.php';
$db = Database::getInstance();

$bottlecount =  (int) $_REQUEST['bottlecount'];
$email = $db->quote($_REQUEST['email']);
$phone = $db->quote($_REQUEST['phone']);
$address = $db->quote($_REQUEST['adress']);
$fio = $db->quote($_REQUEST['fio']);

$query = "SELECT `cost` FROM `bottlecost` ORDER BY id DESC LIMIT 1";
$result = $db->query($query)->fetchSingleRow();
$cost = $result['cost'];
$totalCost = $cost*$bottlecount;

$query = "INSERT INTO `products`(`fio`, `address`, `phone`, `email`, `bootlecount`, `cost`) VALUES ('$fio','$address','$phone','$email',$bottlecount,$totalCost)";
$db->query($query);
echo json_encode(array('success'=>1));