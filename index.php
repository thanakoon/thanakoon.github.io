<?php require('template.php'); ?>
<!doctype html>
<html lang="en">
  <head>
    <?php echo $head;?>
    <title>หน้าแรก | LiteWOOD</title>
  </head>
  <body>

  <?php echo $nav?>

  <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand fw-bold" href="#">หน้าแรก</a>
  </div>
</nav>

  <br>
  <div class="container-fluid">
    

  <div class="row  g-3">
    <div class="col-6">
        <div class="card">
          <img src="https://thanakoon.com/wp-content/uploads/2022/06/Aluminium-C.png" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title text-center">C-Shaped C85</h5>
            <a href="CShaped.php" class="d-grid gap-2 btn" style="background:#2DB9B5; color:white;">คำนวน</a>
          </div>
        </div>
      <!--C-Shaped C85-->
    </div>
    <div class="col-6">
        <div class="card">
          <img src="https://thanakoon.com/wp-content/uploads/2022/06/Aluminium-G-Lock-100.png" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title text-center">G-Lock 100</h5>
            <a href="GLock100.php" class="d-grid gap-2 btn" style="background:#2DB9B5; color:white;">คำนวน</a>
          </div>
        </div>
      <!--G-Lock 100-->
    </div>
    <div class="col-6">
       <div class="card">
          <img src="https://thanakoon.com/wp-content/uploads/2022/07/800x800-Aluminium-box-eco-20x50-1.png" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title text-center">ECO 50 x 20</h5>
            <a href="Eco50.php" class="d-grid gap-2 btn" style="background:#2DB9B5; color:white;">คำนวน</a>
          </div>
        </div>
      <!--ECO 50 x 20-->
    </div>
    <div class="col-6">
        <div class="card">
          <img src="https://thanakoon.com/wp-content/uploads/2022/07/800x800-Aluminium-box-eco-20x100-1.png" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title text-center">ECO 100 x 20</h5>
            <a href="Eco100.php" class="d-grid gap-2 btn" style="background:#2DB9B5; color:white;">คำนวน</a>
          </div>
        </div>
      <!--ECO 100 x 20-->
    </div>
  </div>



    </div>
    

    <?php echo $js?>
  </body>
</html>