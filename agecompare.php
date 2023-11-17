<?php
include "coa123‐mysql‐connect.php"; //db details
$conn = mysqli_connect($servername, $username, $password, $dbname);
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
} //date is the start of the olympics
$sql = "SELECT country.iso_id, AVG(TIMESTAMPDIFF(YEAR, cy.dob, '2012-07-27')) as avg_age
FROM country country
JOIN cyclist cy ON country.iso_id = cy.iso_id
GROUP BY country.iso_id
ORDER BY avg_age ASC";
$result = mysqli_query($conn, $sql); 
$allDataArray = array();
while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
   $allDataArray[] = $row;
}
echo json_encode($allDataArray);
?>