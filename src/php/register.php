<?php
// Config
include('./config.php');

//Test if conn occurred.
if (mysqli_connect_errno()) {
    die(
        "Database conn failed: " .
        mysqli_connect_error() .
        " (" . mysqli_connect_errno() . ")"
    );
}

$name    = isset($_POST['name']) ? $_POST['name'] : null;
$email   = isset($_POST['email']) ? $_POST['email'] : null;
$country = isset($_POST['country']) ? $_POST['country'] : null;

if (null === $_POST['name'] && null === $_POST['country']) {
    $betaRegistration = 0;
} else {
    $betaRegistration = 1;
}

echo "Hola " . $_POST['nombre'] . ".";

// Insert into database
$query = "INSERT INTO mailing (name, email, country, beta_registration) 
            VALUES ('" .
         $_POST["name"] .
         "','" .
         $_POST["email"] .
         "','" .
         $_POST["country"] .
         "', '" .
         $betaRegistration .
         "')";

$result = mysqli_query($mysqli, $query);

if ($result) {
    header('Location: ../index.php?register=success');
} else {
    header('Location: ../index.php?register=failure');
}

mysqli_close($mysqli);
