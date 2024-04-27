<?php


$servername = "127.0.0.1";
$subdomen = $_SERVER['SERVER_NAME'];
$subdomen = strtolower($subdomen);
$array = explode('.', $subdomen);
$brand = ucfirst($array[0]);
// $brand = 'Toyota';
$domen = $array[count($array) - 2] . '.' . $array[count($array) - 1];
$username = $domen;
$password = $domen;
// $username = "macbookpro";
// $password = "1122";
$dbname = $domen;
// $dbname = "msk-china.ru";
$table = $subdomen;
// $table = "baic.msk-china.ru";
$token = "31806a896fd74ccf834d5a12341434fe";
