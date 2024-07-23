<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Encouragement Page</title>
  <!-- Link to the favicon -->
  <link rel="icon" href="img/favicon.ico" type="image/x-icon">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body>
  <section class="container">
    <!-- logo -->
    <div class="row">
      <div class="col"></div>
      <img src="img/logo.png" alt="logo for encouraging words" class="col-8 logo" id="logo">
      <div class="col"></div>
      <div class="col"></div>
    </div>
    <!-- name -->
    <div class="row">
      <p class="col-sm">Hi🥳, it's nice to meet you🫂!</p>
      <input type="text" class="col-sm" placeholder="name" id="name">
    </div>
    <!-- encouragement -->
    <div class="row">
      <p class="col-sm">And what is it that you need to hear right now to spark your spirits?🫂</p>
      <textarea id="encouragement" placeholder="Words of Encouragement" class="col-sm"></textarea>
    </div>
    <!-- post script -->
    <div class="row">
      <p class="col-sm">Add a post script🫂!</p>
      <textarea id="post-script" placeholder="Post Script" class="col-sm"></textarea>
    </div>
    <!-- volume -->
    <div class="text-center row vol">
      <input type="range" onchange="setVolume()" id='volume1' min=0 max=1 step=0.01 value='1'>
      <p class="vol">Volume🔊</p>
    </div>
    <!-- button -->
    <div class="row">
      <div class="col"></div>
      <button onclick="encourage()" class="col-8 btn btn-primary shrink-button" id="speak"> Hear It!🥳</button>
      <div class="col"></div>
    </div>
  </section>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
  <script src="script.js"></script>
</body>

</html>