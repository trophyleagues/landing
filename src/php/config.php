<?php
/*
$host_name = '127.0.0.1';
$database  = 'landing';
$user_name = 'root';
$password  = 'root';
*/
$host_name = 'db747994929.db.1and1.com';
$database  = 'db747994929';
$user_name = 'dbo747994929';
$password  = 'fuckOgame1!';


$mysqli = mysqli_connect($host_name, $user_name, $password, $database);

if (mysqli_connect_errno()) {
    die('<p>Error al conectar con servidor MySQL: ' . mysqli_connect_error() . '</p>');
} 
