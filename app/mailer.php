<?php
   if(isset($_POST['submit'])) {

/* Mail */
   $to = "Berger.Tatjana@web.de";

/* Betreff */
   $subject = "Kontaktformular Conference App";

/* Input Values */
   $name_field = $_POST['name'];
   $email_field = $_POST['mail'];
   $nachricht = $_POST['nachricht'];

   $body = "Von: $name_field\n E-Mail: $email_field\n Nachricht:\n $nachricht";

/* Mail absenden */
   mail($to, $subject, $body);

/* Bei Erfolg, Success = 1 und zurück zu Kontaktformular */
   header ("Location: kontakt.html?success=1");
 } else {

/* Bei Erfolg, Success = 2 und zurück zu Kontaktformular */
 header ("Location: kontakt.html?success=2");
 }
   ?>