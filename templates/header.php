<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="SKYPE_TOOLBAR" content="SKYPE_TOOLBAR_PARSER_COMPATIBLE" />
    <meta content="telephone=no" name="format-detection">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name=”viewport” content="user-scalable=no" />
    <title>Moon Food</title>

    <!-- Normalize -->
    <link href="css/normalize.css" rel="stylesheet">
    <!-- Bootstrap -->
    <link href="css/bootstrap.css" rel="stylesheet">
    <!-- pagescroller css -->
    <!-- <link href="css/onepage-scroll.css" rel="stylesheet"> -->
    <link href="css/jquery.fullpage.css" rel="stylesheet">
    <!-- Social font icon -->
    <link href="css/fontello.css" rel="stylesheet">
    <!-- css for jq plugin pfold -->
    <link rel="stylesheet" type="text/css" href="css/pfold.css" />
    <!-- css for jq plugin formstyler -->
    <link rel="stylesheet" type="text/css" href="css/jquery.formstyler.css" />
    <!-- nanoscroller -->
    <link rel="stylesheet" href="css/nanoscroller.css">
    <!-- animate -->
    <link rel="stylesheet" href="css/animate.css">
    
    <!-- Moon Food style -->
    <link href="css/style.css" rel="stylesheet">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
    <header class="header">
        <div class="container-fluid">
            <div class="row">
                <a href="?">
                    <img class="header__logo" src="images/logo.svg"/>
                </a>
                <nav class="header__navigation hidden-xs">
                    <ul class="navigation__navigation-list">
                        <a href="?action=faq"><li class="navigation-list__button <?php echo ($action=='faq')?'active':''; ?>"> вопросы и ответы </li></a>
                        <a href="?action=reviews"><li class="navigation-list__button <?php echo ($action=='reviews')?'active':''; ?>">  отзывы </li></a>
                        <a href="?action=blog"><li class="navigation-list__button <?php echo ($action=='blog')?'active':''; ?>"> блог </li></a>
                    </ul>
                </nav>

                <div class="header__mobile-menu mobile-menu hidden-sm hidden-md hidden-lg" data-toggle="modal" data-target=".bs-example-modal-lg">
                    <span class="btn-icon-menu btn-menu-toggle" aria-hidden="true"></span>
                </div>
                <a class="order-link" href="?action=order">
                    <div class="header__cart">
                        <span class="btn-icon-menu glyphicon glyphicon-shopping-cart" aria-hidden="true"></span>
                    </div>
                </a>
                <div class="header__phone visible-md visible-lg">
                    <a class="header__phone-link" href="tel:+74954563478"><span class="tel">+7 495 456 34 78</span></a>
                </div>
            </div>
        </div>
    </header>
     <!-- modal menu -->
    <div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
     <div class="modal-dialog">
        <div class="modal-content moda-menu">
          <div class="modal-header">
            <button type="button" class="close close-btn" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          </div>
          <div class="container-fluid">
              <div class="row">
                    <div class="modal-menu__phone"><a class="header__phone-link" href="tel:+74954563478"><span class="tel">+7 495 456 34 78</span></a></div>
              </div>
              <hr class="hr">
              <div class="modal-nav">
                  <div class="row"><a href="?action=faq"><div class="navigation-list__button"> вопросы и ответы </div></a></div>
                  <div class="row"><a href="?action=reviews"><div class="navigation-list__button">  отзывы </div></a></div>
                  <div class="row"><a href="?action=blog"><div class="navigation-list__button"> блог </div></a></div>
              </div>
              <div class="row fixed-social">
                  <div class="social-panel social-panel_modal center-block text-center">
                    <span class="icon-instagram social-panel__social-btn"></span>
                    <span class="icon-facebook social-panel__social-btn"></span>
                    <span class="icon-vk social-panel__social-btn"></span>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>

    <div id="fullpage">