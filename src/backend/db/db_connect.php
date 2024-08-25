<?php

define("DB_USERNAME", 'root');
define("DB_PASSWORD", "");

$host = "localhost";
$db_name = "scandiweb-ecommerce";


try {
  $dsn = "mysql:host=$host;name=$db_name;charset=utf8";
  $options = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES => false
    /* Explanation of the last option : It seems that PDO provides a way to emulate prepared stmts when the db driver doesn't natively implement it . We disabled this as emulated stmts aren't as secure or as efficient as native prepared stmts */
  ];
  $pdo = new PDO($dsn, DB_USERNAME, DB_PASSWORD);
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
  echo "". $e->getMessage();
}