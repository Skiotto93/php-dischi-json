<?php

$discs = file_get_contents('discs.json');
$albums = json_decode($discs, true);

$json_string = json_encode($albums);

header("Content-Type: application/json");

echo $json_string;