<?php

session_start();

$availableLanguages = ['es', 'en', 'cat', 'it'];

if (isset($_GET['lang']) && in_array($_GET['lang'], $availableLanguages)) {
    $_SESSION["lang"] = $_GET["lang"];
} else {
    $_SESSION["lang"] = "en";
}

include(__DIR__ . "/langs/" . $_SESSION["lang"] . ".php");
