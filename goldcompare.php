<?php
include "coa123‐mysql‐connect.php"; //db details
$conn = mysqli_connect($servername, $username, $password, $dbname);
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}
$sql = "SELECT iso_id, gold 
FROM country 
ORDER BY gold DESC";
$result = mysqli_query($conn, $sql); 
$allDataArray = array();
while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
   $allDataArray[] = $row;
}
echo json_encode($allDataArray);

?>