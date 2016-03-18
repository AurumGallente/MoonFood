
</div>

    <footer class="footer">
        <div class="container-fluid">
             <?php if(!isset($action)): ?>
            <div id="footer-nav" class="row">
                <div id="btn-arrow-down" class="footer__arrow footer__arrow_anim_down-up">
                    <img src="images/arrow_down.png">
                </div>
            </div>
            <?php endif; ?>
            <div class="row">
                <div class="hidden-xs col-sm-3 col-md-2">
                    <div class="social-panel">
                        <span class="icon-instagram social-panel__social-btn"></span>
                        <span class="icon-facebook social-panel__social-btn"></span>
                        <span class="icon-vk social-panel__social-btn"></span>
                    </div>
                </div>
                <?php if($action!='order'): ?>
                <div class="col-xs-12 col-sm-6 offset-sm-3 col-md-8">
                    <div class="order center-block">
                        <div class="visible-md visible-lg">
                            <div class="form-group order__select-count select-up">
                                <label class="select-count__label hide" for="sel1">Закажите сейчас</label>
                                <select class="form-control select-count__selector js-select" id="sel1">
                                    <option value="1">1 Бутылка</option>
                                    <option value="2">2 Бутылки</option>
                                    <option value="3">3 Бутылки</option>
                                    <option value="4">4 Бутылки</option>
                                </select>
                            </div>
                            <span id="order-cost" class="order__cost">
                                = <span id="order-value-cost">1200</span> руб.
                            </span>
                        </div>
                        <a class="order-link" href="?action=order">
                            <div id="order-btn" class="btn order__order-btn visible-md visible-lg">
                                Заказать
                            </div>
                        </a>
                        <div class="btn order__order-btn hidden-md hidden-lg" data-toggle="modal" data-target=".bs-order">
                            Заказать
                        </div>
                    </div>
                    <?php endif; ?>
                </div>
            </div>
        </div>
    </footer>
    <!-- modal order -->
    <div class="modal fade bs-order" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
        <div class="modal-dialog">
            <div class="modal-content moda-menu">
                <div class="modal-header">
                    <button type="button" class="close close-btn" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                </div>
                <div class="container-fluid" style="margin-top: 60px;">
                    <div class="order in-modal center-block">
                        <div class="form-group order__select-count">
                            <label class="select-count__label text-center" for="sel2">Закажите сейчас</label>
                            <select class="form-control select-count__selector js-select" id="sel2">
                                <option value="1">1 бутылка</option>
                                <option value="2">2 бутылки</option>
                                <option value="3">3 бутылки</option>
                                <option value="4">4 бутылки</option>
                            </select>
                        </div>
                        
                        <span id="order-cost2" class="order__cost">
                            = <span id="order-value-cost2">1200</span> руб.
                        </span>
                        
                        <a href="order.html">
                            <div class="btn order__order-btn">
                                Заказать
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <?php if($action=='order'): ?>
        <div id="order-accept" class="modal fade bs-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
         <div class="modal-dialog modal-sm">
           <div class="modal-content">
             <div class="modal-header">
               <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
               <h4 class="modal-title">Принятие заказа</h4>
             </div>
             <div class="modal-body">
               <h3>Ваш заказ принят.</h3>
             </div>
             <div class="modal-footer">
               <button type="button" class="btn btn-default" data-dismiss="modal">Закрыть</button>
             </div>
           </div>
         </div>
       </div>
       
       <div id="order-denied" class="modal fade bs-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
         <div class="modal-dialog modal-sm">
           <div class="modal-content">
             <div class="modal-header">
               <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
               <h4 class="modal-title">Принятие заказа</h4>
             </div>
             <div class="modal-body">
               <h3 style="color:#f00;">Ошибка принятия заказа</h3>
             </div>
             <div class="modal-footer">
               <button type="button" class="btn btn-default" data-dismiss="modal">Закрыть</button>
             </div>
           </div>
         </div>
       </div>
       
       <div id="order-error-fio" class="modal fade bs-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
         <div class="modal-dialog modal-sm">
           <div class="modal-content">
             <div class="modal-header">
               <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
               <h4 class="modal-title">Ошибка</h4>
             </div>
             <div class="modal-body">
               <h3 style="color:#f00;">Поле ФИО не заполенно!</h3>
             </div>
             <div class="modal-footer">
               <button type="button" class="btn btn-default" data-dismiss="modal">Закрыть</button>
             </div>
           </div>
         </div>
       </div>
       
        <div id="order-error-adress" class="modal fade bs-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
         <div class="modal-dialog modal-sm">
           <div class="modal-content">
             <div class="modal-header">
               <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
               <h4 class="modal-title">Ошибка</h4>
             </div>
             <div class="modal-body">
               <h3 style="color:#f00;">Поле АДРЕСС не заполенно!</h3>
             </div>
             <div class="modal-footer">
               <button type="button" class="btn btn-default" data-dismiss="modal">Закрыть</button>
             </div>
           </div>
         </div>
       </div>
       
        <div id="order-error-phone" class="modal fade bs-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
         <div class="modal-dialog modal-sm">
           <div class="modal-content">
             <div class="modal-header">
               <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
               <h4 class="modal-title">Ошибка</h4>
             </div>
             <div class="modal-body">
               <h3 style="color:#f00;">Поле ТЕЛЕФОН не заполенно или заполненно не правильно!</h3>
             </div>
             <div class="modal-footer">
               <button type="button" class="btn btn-default" data-dismiss="modal">Закрыть</button>
             </div>
           </div>
         </div>
       </div>
       
       <div id="order-error-email" class="modal fade bs-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
         <div class="modal-dialog modal-sm">
           <div class="modal-content">
             <div class="modal-header">
               <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
               <h4 class="modal-title">Ошибка</h4>
             </div>
             <div class="modal-body">
               <h3 style="color:#f00;">Поле EMAIL не заполенно или заполненно не правильно!</h3>
             </div>
             <div class="modal-footer">
               <button type="button" class="btn btn-default" data-dismiss="modal">Закрыть</button>
             </div>
           </div>
         </div>
       </div>   
    <?php endif; ?>

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
    <!-- slimscroll -->
    <script src="js/vendors/jquery.slimscroll.min.js"></script>
    <!-- full page scroller -->
    <script src="js/jquery.fullpage.js"></script>
    <!-- plugin formstyler -->
    <script src="js/jquery.formstyler.js"></script>
    <!-- actual size -->
    <script src="js/jquery.liActualSize.js"></script>
    <!-- slider first main slide -->
    <script src="js/slider_title.js"></script>
    <!-- slider on page -->
    <script src="js/slider_on_page.js"></script>
    <!-- plugin pfold -->
    <script src="js/modernizr.custom.79639.js"></script>
    <script src="js/jquery.pfold.js"></script>
    <!-- nano scroll -->
    <script src="js/overthrow.min.js"></script>
    <script src="js/jquery.nanoscroller.js"></script>
    
    <!-- MoonFood script -->
    <script src="js/script.js"></script>
  </body>
</html>
