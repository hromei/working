<?php
if($_POST["submit"]){
//collectam info
$name=$_POST['name'];
$visitor_email=$_POST['email'];
$phone=$_POST['phone'];
$pickup=$_POST['pick-up'];
$hour=$_POST['hour'];
$min1=$_POST['minute'];
$returndate=$_POST['return'];
$hour2=$_POST['hour2'];
$min2=$_POST['minute2'];

//validam
if(empty($name)|| empty(phone)|| empty(pickup))
{
    echo "Numele și numărul de telefon sunt obligatorii!";
    exit;
}
$email_from="andreea_hromei@yahoo.com"; //adresa de email
$email_subject="Rezervare online noua";
$email_body="Ati primit un mesaj de la $name.\n".
"adresa de email: $visitor_email\n".
"numarul de telefon: $phone\n".
"data preluarii: $pickup\n".
"ora: $hour\n".
"minutul: $min1\n".
"data returnarii: $returndate\n".
"ora: $hour2\n".
"minutul: $min2\n".

$to ="andreea_hromei@yahoo.com";
$headers="De la: $email_from \r\n";

//trimite mailul
mail($to,$email_subject,$email_body,$headers);

$thankYou="<p>Va multumim!</p>";
}
