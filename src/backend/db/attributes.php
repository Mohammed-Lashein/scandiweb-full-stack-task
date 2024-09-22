<?php

$json = file_get_contents('../../data/data.json');
// var_dump($json);
$data = json_decode($json, true);
$products = $data['data']["products"];
// print_r(array_keys($products));
for($i=0; $i< count($products); $i++) {
  echo "#####=====#####\n"; 
  $productAttributes = $products[$i]["attributes"][0];
  print_r($productAttributes);
  print_r($productAttributes["items"]);
  echo "#####=====#####\n";
  

};
echo "======="; 
// print_r($data);
echo 'aloha';