<?php
// Скрипт проверки
include ('connection.php');

if (isset($_COOKIE['id']) and isset($_COOKIE['hash']))
{
    $query = mysqli_query($link, "SELECT *,INET_NTOA(user_ip) AS user_ip FROM users WHERE user_id = '".intval($_COOKIE['id'])."' LIMIT 1");
    $userdata = mysqli_fetch_assoc($query);
    
    if(isset($_REQUEST['logout']) and  $_REQUEST['logout'] == 'true'){
        setcookie("id", "");
        setcookie("hash", "");
        header("Location: login.php"); exit();
    }

    if(($userdata['user_hash'] !== $_COOKIE['hash']) or ($userdata['user_id'] !== $_COOKIE['id'])
 or (($userdata['user_ip'] !== $_SERVER['REMOTE_ADDR'])  and ($userdata['user_ip'] !== "0")))
    {
        setcookie("id", "", time() - 3600*24*30*12, "/");
        setcookie("hash", "", time() - 3600*24*30*12, "/");
        //print "Хм, что-то не получилось";
        header("Location: login.php"); exit();
    }
    else
    {
        print "Привет, ".$userdata['user_login'].". Всё работает!";
        ?>
            <a href="?logout=true">Выход</a>
        <?php
    }
}
else
{
    header("Location: login.php"); exit();
}
?>