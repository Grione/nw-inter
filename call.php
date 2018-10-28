<? 
$phone = $_POST['phone'];
$name = $_POST['name'];


$mail_message = '
<html>
<head>
    <title>Заявка с сайта</title>
</head>
<body>
    <h2>Заявка с формы "Заказать звонок"</h2>
    <ul>
        
        
        <li>Имя: ' .$name. '</li>
        <li>Телефон: ' .$phone. '</li>
    </ul>
</body>
</html>';

$headers = "From: Администратор сайта \r\n".
"MIME-Version: 1.0" . "\r\n" .
"Content-type: text/html; charset=UTF-8" . "\r\n";

$mail = mail('intergroup-nw@yandex.ru', 'Заявка', $mail_message, $headers);

?>