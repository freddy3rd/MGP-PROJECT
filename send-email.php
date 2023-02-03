
<?php


$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];

require "vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

$mail = new PHPMailer(true);

$mail->SMTPDebug = SMTP::DEBUG_SERVER;

$mail->isSMTP();
$mail->SMTPAuth = true;

$mail->Host = 'smtp.gmail.com' ;
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 587;

// $mail->Username = "Mistergrandph@gmail.com";
// $mail->Password = "tdnshdzapjuwrbkw";

$mail->Username = "arnejovincent03@gmail.com";
$mail->Password = "ceecdhnpjkshnpqn";

$mail->setFrom($email, $name);
$mail->addAddress("arnejovincent03@gmail.com", "MGP INQUERIES");//RECEPIENTS



$mail->Subject = "MISTER GRAND CONTESTANT INQUERY ($email)";
$mail->Body = $message;

$mail-> send();

$name = "";
$email = "";
$message = "";
?>
