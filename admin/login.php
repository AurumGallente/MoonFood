<div class="row-fluid">
    <form class="form-horizontal" name="loginform" action="auth.php" method="POST">
     <div class="form-group">
       <label for="login" class="col-sm-2 control-label">Login</label>
       <div class="col-sm-10">
           <input type="login" class="form-control" id="login" name="login" placeholder="login" required="required" />
       </div>
     </div>
     <div class="form-group">
       <label for="password" class="col-sm-2 control-label">Password</label>
       <div class="col-sm-10">
         <input type="password" class="form-control" id="password" name="password" placeholder="Password">
       </div>
     </div>
     <div class="form-group">
       <div class="col-sm-offset-2 col-sm-10">
         <div class="checkbox">
           <label>
             <input type="checkbox"> Remember me
           </label>
         </div>
       </div>
     </div>
     <div class="form-group">
       <div class="col-sm-offset-2 col-sm-10">
         <button type="submit" class="btn btn-default">Sign in</button>
       </div>
     </div>
   </form>
</div>