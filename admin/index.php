<?php
    if (isset($_COOKIE['id']) and isset($_COOKIE['hash'])){
        header("Location: admin.php"); exit();
    }else{
        header("Location: login.php"); exit();
    }
?>