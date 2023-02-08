<?php 
require "constant.php";
#creating database connection
$servername = "localhost";
$username = "root";
$password = "";
$image_db ="mgp_db";

// Create connection
$conn = mysqli_connect($servername, $username, $password,$image_db);

// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

?>