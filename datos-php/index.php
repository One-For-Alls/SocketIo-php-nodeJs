<?php
$url = 'http://localhost:3000/'; // URL del servidor Node.js

$data = array("nick" => 'gracias por la oportunidad', "twitter" => "@CarmaZone");
 
$data_string = json_encode($data);
 
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'Content-Type: application/json',
    'Content-Length: ' . strlen($data_string))
);
 
$result = curl_exec($ch);

echo $result;

curl_close($ch);
?>
