<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Access-Control-Max-Age: 3600");


include "db.php";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
   die("Ошибка подключения к базе данных: " . $conn->connect_error);
}
if (!isset($_POST['token']) || (isset($_POST['token']) && $_POST['token'] != $token)) {
   header('Content-Type: application/json');
   echo json_encode(["token" => "invalid"]);
   exit;
}


$data = [];
if (isset($_POST['last_request_date'])) {
   $last_request_date = $_POST['last_request_date'];
   $sql = "SELECT * FROM `$table` WHERE created_at >= ?";
   $stmt = $conn->prepare($sql);
   $stmt->bind_param("s", $last_request_date);
   $stmt->execute();
   $result = $stmt->get_result();
   while ($row = $result->fetch_assoc()) {
      unset($row['id_c_r_m_data']);
      unset($row['created_at']);
      unset($row['updated_at']);
      $new_row = [];
      foreach ($row as $key => $value) {
         $v = $value;
         if (!$v) {
            $v = '';
         }
         $new_row[$key] = $v;
      }
      array_push($data, $new_row);
   }

   $sql = "DELETE FROM `$table` WHERE created_at >= ?";
   $stmt = $conn->prepare($sql);
   $stmt->bind_param("s", $last_request_date);
   $stmt->execute();

   $stmt->close();
   $conn->close();
} else {
   $sql = "SELECT * FROM  `$table`";
   $result = $conn->query($sql);
   if ($result) {
      while ($row = $result->fetch_assoc()) {
         unset($row['id_c_r_m_data']);
         unset($row['created_at']);
         unset($row['updated_at']);
         $new_row = [];
         foreach ($row as $key => $value) {
            $v = $value;
            if (!$v) {
               $v = '';
            }
            $new_row[$key] = $v;
         }
         array_push($data, $new_row);
      }

      $sql = "DELETE FROM `$table`";
      $result = $conn->query($sql);
   } else {
      echo "Error: " . $sql . "<br>" . $conn->error;
   }
   $conn->close();
}

header('Content-Type: application/json');
echo json_encode($data);
