<?php 
if (isset($_POST["submit"])) {
    $to = "sunnydas7@gmail.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $first_name = $_POST['name'];
    $comment=$_POST['message'];
    $subject = "Message from portfolio";
    $message = $first_name . " wrote the following:" . "\n\n" . $_POST['message'];
   

    $headers = "From:$from\r\n";
   
    
    mail($to,$subject,$message,$headers);
    
    echo "Mail Sent. Thank you " . $first_name . ", we will contact you shortly.";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
}
?>