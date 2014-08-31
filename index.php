this is a test <?php echo 'and it works'; ?>

<?php 

use \google\appengine\api\mail\Message;

try
{
  $message = new Message();
  $message->setSender("mark@kramnorth.com");
  $message->addTo("mark@kramnorth.com");
  $message->setSubject("Example email");
  $message->setTextBody("Hello, world!");
 // $message->addAttachment('image.jpg', 'image data', $image_content_id);
  $message->send();
} catch (InvalidArgumentException $e) {
  // ...
}