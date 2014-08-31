this is a test <?php echo 'and it works'; ?>

<?php 

use \google\appengine\api\mail\Message;
use google\appengine\api\cloud_storage\CloudStorageTools;

file_put_contents('gs://vocal-territory-679.appspot.com/hello.txt', 'Hello');
var_dump(CloudStorageTools::serve('gs://vocal-territory-679.appspot.com/hello.txt')); 

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