<?php

$mailTo = "felipephito@gmail.com";

$firstname = $_POST[firstname];
$lastname = $_POST[lastname];
$email =$_POST[email]
$subject = $_POST[subject];
$message = $_POST[message];

$body = $body . "Olá Felipe, você recebeu uma nova mensagem!" . "\n\n";

$body = $body . "<strong>Nome: </strong>" . $fisrtname . "\n";
$body = $body . "<strong>Sobrenome: </strong>" . $lastname . "\n";
$body = $body . "<strong>E-mail: </strong>" . $email . "\n";
$body = $body . "<strong>Mensagem: </strong>" . $message . "\n";

mail($mailTo, $subject, $body, "From: $email\r\n");

?>