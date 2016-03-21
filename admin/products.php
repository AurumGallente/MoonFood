<?php
session_start();
if (!isset($_SESSION['id']) || (!isset($_SESSION['login']))) {
    header('Location: /admin');
}
require_once 'db.php';
$db = Database::getInstance();
$sql = $db->query("SELECT id, fio, address, phone,email,bottlecount, cost FROM products ORDER BY id ASC");
$query = "SELECT count(id) as count from products";
$nr = $db->query($query)->fetchSingleRow()['count'];
if (isset($_GET['pn'])) {
    $pn = (int) $_GET['pn'];
} else {
    $pn = 1;
}

$itemsPerPage = 10;

$lastPage = ceil($nr / $itemsPerPage);

if ($pn < 1) {
    $pn = 1;
} else if ($pn > $lastPage) {
    $pn = $lastPage;
}
$centerPages = "";
$sub1 = $pn - 1;
$sub2 = $pn - 2;
$add1 = $pn + 1;
$add2 = $pn + 2;
if ($pn == 1) {
    $centerPages .= '&nbsp; <span class="pagNumActive">' . $pn . '</span> &nbsp;';
    $centerPages .= '&nbsp; <a href="' . $_SERVER['PHP_SELF'] . '?pn=' . $add1 . '">' . $add1 . '</a> &nbsp;';
} else if ($pn == $lastPage) {
    $centerPages .= '&nbsp; <a href="' . $_SERVER['PHP_SELF'] . '?pn=' . $sub1 . '">' . $sub1 . '</a> &nbsp;';
    $centerPages .= '&nbsp; <span class="pagNumActive">' . $pn . '</span> &nbsp;';
} else if ($pn > 2 && $pn < ($lastPage - 1)) {
    $centerPages .= '&nbsp; <a href="' . $_SERVER['PHP_SELF'] . '?pn=' . $sub2 . '">' . $sub2 . '</a> &nbsp;';
    $centerPages .= '&nbsp; <a href="' . $_SERVER['PHP_SELF'] . '?pn=' . $sub1 . '">' . $sub1 . '</a> &nbsp;';
    $centerPages .= '&nbsp; <span class="pagNumActive">' . $pn . '</span> &nbsp;';
    $centerPages .= '&nbsp; <a href="' . $_SERVER['PHP_SELF'] . '?pn=' . $add1 . '">' . $add1 . '</a> &nbsp;';
    $centerPages .= '&nbsp; <a href="' . $_SERVER['PHP_SELF'] . '?pn=' . $add2 . '">' . $add2 . '</a> &nbsp;';
} else if ($pn > 1 && $pn < $lastPage) {
    $centerPages .= '&nbsp; <a href="' . $_SERVER['PHP_SELF'] . '?pn=' . $sub1 . '">' . $sub1 . '</a> &nbsp;';
    $centerPages .= '&nbsp; <span class="pagNumActive">' . $pn . '</span> &nbsp;';
    $centerPages .= '&nbsp; <a href="' . $_SERVER['PHP_SELF'] . '?pn=' . $add1 . '">' . $add1 . '</a> &nbsp;';
}

$limit = 'LIMIT ' . ($pn - 1) * $itemsPerPage . ',' . $itemsPerPage;
$paginationDisplay = "";

if ($lastPage != "1") {
    $paginationDisplay .= 'Page <strong>' . $pn . '</strong> of ' . $lastPage . '&nbsp;  &nbsp;  &nbsp; ';
    $paginationDisplay .= '&nbsp;  <a href="' . $_SERVER['PHP_SELF'] . '?pn=' . 1 . '"> First</a> ';
    if ($pn != 1) {
        $previous = $pn - 1;
        $paginationDisplay .= '&nbsp;  <a href="' . $_SERVER['PHP_SELF'] . '?pn=' . $previous . '"> Back</a> ';
    }
    $paginationDisplay .= '<span class="paginationNumbers">' . $centerPages . '</span>';
    if ($pn != $lastPage) {
        $nextPage = $pn + 1;
        $paginationDisplay .= '&nbsp;  <a href="' . $_SERVER['PHP_SELF'] . '?pn=' . $nextPage . '"> Next</a> ';
    }
    $paginationDisplay .= '&nbsp;  <a href="' . $_SERVER['PHP_SELF'] . '?pn=' . $lastPage . '"> Last</a> ';
}


$sql2 = "SELECT id, fio, address, phone,email,bottlecount, cost FROM products ORDER BY id DESC $limit";

$result = $db->query($sql2)->fetchAll();

$query = "SELECT cost FROM bottlecost ORDER BY id LIMIT 1";
$bottleCost = $db->query($query)->fetchSingleRow()['cost'];

$query = "SELECT * FROM `texts` WHERE `group`='specialist'";
$specialistTexts = $db->query($query)->fetchAll();

?>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Админпанель</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
    </head>
    <body>
        <div class="container-fluid">
            <div class="row-fluid">
                <div class="col-xs-11">
                    <ul class="nav nav-tabs">
                        <li class="active"><a data-toggle="tab" href="#products">заказы</a></li>
                        <li><a data-toggle="tab" href="#texts">редактировать текст</a></li>
                    </ul>
                </div> 
                <div class="col-xs-1">
                    <button class="btn btn-default"><a href="/admin/logout.php">logout</a></button>
                </div>
            </div>
            <div class="tab-content">
                <div id="products" class="tab-pane fade in active">
                    <div class="row-fluid">
                        <div class="col-xs-12">
                            
                            <div style="">
                                <h2>Всего заказов: <?php echo $nr; ?></h2>
                            </div>
                            <div style=""><?php echo $paginationDisplay; ?></div>
                            <div style="">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <td>
                                                номер записи
                                            </td>
                                            <td>
                                                адрес
                                            </td>
                                            <td>
                                                телефон
                                            </td>
                                            <td>
                                                email
                                            </td>
                                            <td>
                                                количество бутылок
                                            </td>
                                            <td>
                                                сумма заказа
                                            </td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <?php
                                        $count = count($result) - 1;
                                        if (count($result) > 0) {
                                            for ($i = 0; $i <= $count; $i++) {
                                                ?>
                                                <tr>
                                                    <td> <?php echo $result[$i]['id']; ?></td>
                                                    <td> <?php echo $result[$i]['address']; ?></td>
                                                    <td> <?php echo $result[$i]['phone']; ?></td>
                                                    <td> <?php echo $result[$i]['email']; ?></td>
                                                    <td> <?php echo $result[$i]['bottlecount']; ?></td>
                                                    <td> <?php echo $result[$i]['cost'] ?></td>
                                                </tr>
                                                <?php
                                            }
                                        }
                                        ?>
                                    </tbody>
                                </table>
                            </div>
                            <div style=""><?php echo $paginationDisplay; ?></div>

                        </div>
                    </div>
                    <div class="row-fluid">
                        <div class="col-xs-3">
                            <p>Текущая стоимость 1 единицы товара:<?php echo $bottleCost; ?>руб</p>
                        </div>
                        <div class="col-xs-9">
                            <form name="form" action="/admin/updateprice.php" method="POST">
                                <div class="form-group">
                                    <label for="cost">Изменить стоимость</label>
                                    <input type="number" class="form-control" id="bottle-cost" name="cost" placeholder="стоимость" required />
                                    <input type="hidden" name="bottle-cost" value="<?php echo $bottleCost; ?>" />
                                </div>
                                <button type="submit" class="btn btn-default">изменить</button>
                            </form>
                        </div>
                    </div> 
                </div>
                <div id="texts" class="tab-pane fade">
                    <div class="row-fluid">
                        <div class="col-xs-12">
                            <?php foreach($specialistTexts as $text): ?>
                            <pre>
                                <h5><?php echo  $text['header']; ?></h5>
                                <p><?php echo $text['specialty']; ?></p>
                                <p><?php echo $text['text']; ?></p>
                                <button><a href="/admin/change?id=<?php echo $text['id'];?>">изменить</a></button>
                            </pre>                                
                            <?php endforeach;?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html> 