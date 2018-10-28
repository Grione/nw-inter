<? 
$phone = $_POST['phone'];
$text = $_POST['text'];



$mail_message = '
<html>
<head>
    <title>Заявка с сайта</title>   
</head>
<body>
    <h2>Заявка с формы "У вас остались вопросы?"</h2>
    <ul>
        
        <li>Телефон: ' .$phone. '</li>
        
        <li>Вопрос: ' .$text. '</li>
        
    </ul>
</body>
</html>';

$headers = "From: Администратор сайта \r\n".
"MIME-Version: 1.0" . "\r\n" .
"Content-type: text/html; charset=UTF-8" . "\r\n";

$mail = mail('intergroup-nw@yandex.ru', 'Заказ', $mail_message, $headers);

?>