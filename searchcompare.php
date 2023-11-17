<?php
function validateInputs($countryCode) {
  $valid = true;
  
  if (strlen($countryCode) !== 3) { //not 3 letter code
    $valid = false;
    /*echo '<h2>Error! Country input incorrect. Please enter a valid 3 letter country code.<h2>';*/
  }
  
  return $valid;
}

include "coa123‐mysql‐connect.php"; //db details

$country1 = trim($_POST['country1']);
$country2 = trim($_POST['country2']);

if (validateInputs($country1) && validateInputs($country2)){
$conn = mysqli_connect($servername, $username, $password, $dbname);
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}
$sql = "SELECT country.country_name, country.gold, country.silver, country.bronze, country.total, GROUP_CONCAT(cyclist.name SEPARATOR ', ') AS cyclist_names
            FROM country
            LEFT JOIN cyclist ON cyclist.iso_id = country.iso_id
            LEFT JOIN event ON event.cyclist_id = cyclist.cyclist_id AND event.event_name IN ('Event1', 'Event2')
            WHERE country.iso_id IN ('$country1', '$country2')
            GROUP BY country.country_name, country.gold, country.silver, country.bronze, country.total";
$result = mysqli_query($conn, $sql); 
$allDataArray = array();
while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
   $allDataArray[] = $row;
}
echo json_encode($allDataArray);
}
//echo '<h2>Error! Country input incorrect. Please enter a valid 3 letter country code.<h2>';
?>