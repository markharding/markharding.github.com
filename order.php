<?php
/**
 * Quick an dirty email order form for markharding.co 
 * 
 * @todo make this into a datastore - but emails are free!
 */

use \google\appengine\api\mail\Message;
use google\appengine\api\cloud_storage\CloudStorageTools;

//file_put_contents('gs://vocal-territory-679.appspot.com/hello.txt', 'Hello');

try{
  $message = new Message();
  $message->setSender("mark@kramnorth.com");
  $message->addTo("mark@kramnorth.com");
  $message->setSubject("New Order");
  
  $data = $_POST['data'];
  
  $body = <<<BODY
  	Mark, you have a new order. 
  	
  	\n \n
  	
  	$data
BODY;
  
  $message->setTextBody("Hello, world!");
 // $message->addAttachment('image.jpg', 'image data', $image_content_id);
  $message->send();
} catch (InvalidArgumentException $e) {}