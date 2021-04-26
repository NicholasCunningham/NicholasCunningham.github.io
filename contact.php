<?php
    $name = $_POST['Name'];
    $visitor_email = $_POST['Email'];
    $subject = $_POST['Subject'];
    $message = $_POST['Message'];

    $email_from = 'nicholas.e.cunningham@gmail.com';
    $email_body = "A visitor to your portfolio website has sent you a message!\n".
        "Email address: $visitor_email\n".
        "Message:\n $message".
    $to = "nicholas.e.cunningham@gmail.com";
    $headers = "From: $email_from \r\n";
    $headers .= "Reply-To: $visitor_email \r\n";

    mail($to,$subject,$email_body,$headers);

    header('Location: index.html');
?>