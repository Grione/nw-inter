<? 
$phone = $_POST['phone'];

$mail = $_POST['mail'];



$mail_message = '
<html>
<head>
    <title>Заявка с сайта</title>
</head>
<body>
    <h2>Заявка с формы "Консультация"</h2>
    <ul>
        
        <li>Телефон: ' .$phone. '</li>
        
        <li>E-Mail: ' .$mail. '</li>
    </ul>
</body>
</html>';

$headers = "From: Администратор сайта \r\n".
"MIME-Version: 1.0" . "\r\n" .
"Content-type: text/html; charset=UTF-8" . "\r\n";

$mail = mail('intergroup-nw@yandex.ru', 'Заказ', $mail_message, $headers);

?>