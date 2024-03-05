<?php require('template.php'); ?>
<?php $page = "CShaped"; ?>
<!doctype html>
<html lang="en">
  <head>
    <?php echo $head;?>
    <title>คำนวนราคารุ่น C-Shaped C85 | LiteWOOD</title>
  </head>
  <body>
 
  <?php
         if ($page == "home"){
          echo $nav;  
         }else{
          echo $nav_home;
         }
  ?>

  <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand fw-bold" href="#">คำนวนราคารุ่น C-Shaped C85</a>
  </div>
</nav>
    <br>
    <div class="container-fluid">
       
        <select id = "optionCShaped" class="form-select mb-3" ></select>
   
        <select id = "optionCShapedInstall" class="form-select mb-3" ></select>
      
        <div class="input-group mb-3">
            <span class="input-group-text">กว้าง</span>
            <input type="text" id="width" class="form-control" placeholder="ความกว้าง" aria-label="Recipient's username" aria-describedby="basic-addon2">
            <span class="input-group-text" id="basic-addon2">เมตร</span>
        </div>

        <div class="input-group mb-3">
            <span class="input-group-text">ยาว</span>
            <input type="text" id="length" class="form-control" placeholder="ความยาว" aria-label="Recipient's username" aria-describedby="basic-addon2">
            <span class="input-group-text" id="basic-addon2">เมตร</span>
        </div>

        <div class="d-grid gap-2">
            <button class="btn" style="background:#2DB9B5; color:white;" type="button" id="btnSum">คำนวน</button>
        </div>
        <br>
        
        <div class="alert alert-success alert-dismissible fade show" role="alert" style="display:none;" id="data_amount">
            <h4 class="alert-heading fw-bold">ผลการคำนวน</h4>
            <hr>
            <p id="area_total"></p>
        </div>

    </div>

    <?php echo $js?>
    
    <script src="CShapedC85.js"></script>
    
  </body>
</html>