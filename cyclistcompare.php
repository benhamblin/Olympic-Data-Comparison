<?php
include "coa123‐mysql‐connect.php"; //db details
$conn = mysqli_connect($servername, $username, $password, $dbname);
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}
$sql = "SELECT country.iso_id, COUNT(cyclist.cyclist_id) AS cyclist_count
FROM country
LEFT JOIN cyclist ON country.iso_id = cyclist.iso_id
GROUP BY country.iso_id
ORDER BY cyclist_count DESC";
$result = mysqli_query($conn, $sql); 
$allDataArray = array();
while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
   $allDataArray[] = $row;
}
echo json_encode($allDataArray);

?>