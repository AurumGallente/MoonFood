<div class="row-fluid wrap-login">
    <div class="panel panel-default center-block">
        <div class="panel-heading">
            <div class="panel-heading__header">
                Авторизация
            </div>
        </div>
       <div class="panel-body">
            <form class="form-horizontal" name="loginform" action="auth.php" method="POST">
             <div class="form-group">
               <label for="login" class="col-sm-4 control-label">Login</label>
               <div class="col-sm-8">
                   <input type="login" class="form-control" id="login" name="login" placeholder="login" required="required" />
               </div>
             </div>
             <div class="form-group">
               <label for="password" class="col-sm-4 control-label">Password</label>
               <div class="col-sm-8">
                 <input type="password" class="form-control" id="password" name="password" placeholder="Password">
               </div>
             </div>
             <div class="form-group btn-panel">
               <div class="col-sm-6">
                 <button type="" class="btn btn-default btn__login-form center-block">На главную</button>
               </div>
               <div class="col-sm-6">
                 <button type="submit" class="btn btn-default btn__login-form center-block">Вход</button>
               </div>
             </div>
           </form>
        </div>
    </div>
</div>