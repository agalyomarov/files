<?php
session_start();
$_SESSION['modal'] = true;

/**
 * 46 - звонок
 * 80 - кредит
 * 81 - экспресс-кредит
 * 47 - рассрочка
 * 83 - обратный звонок
 * 84 - бронь
 * 85 - trade-in
 * 86 - обратная связь
 * 87 - утилизация
 * 88 - выкупи
 * 1684 - отзыв
 */

if (isset($_POST['phone'])) {
    $url = 'https://plex-crm.ru/api/v3/contact/form';
    $token = '0g8z5AqVnIMT6dGsVSFs6pDq0Rnu2XFA9jipVmjp6c8f0ac0';
    $data = array(
      'type' =>  83,
      'company' =>  127, // тайга - 63, авангард - 83
      'website' => "cars-kras.ru", // домен сайта
      'mark' => '',
      'model' => '',
      'comment' => '',
      'phone' => $_POST['phone'],
      'name' =>  ''
    );
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
      "Authorization: Bearer {$token}",
      'Content-Type: application/json',
    ));
    curl_exec($ch);
    // print_r(json_encode(['data' => "success", 'status' => 200]));


}

if (!isset($_POST['phone']) && isset($_POST['data'])) {
    $post = json_decode($_POST['data']);
    $url = 'https://plex-crm.ru/api/v3/contact/form';
    $token = '0g8z5AqVnIMT6dGsVSFs6pDq0Rnu2XFA9jipVmjp6c8f0ac0';
    $data = array(
      'type' =>  46,
      'company' => 127, // тайга - 63, авангард - 83
      'website' => "cars-kras.ru", // домен сайта
      'mark' => '',
      'model' => '',
      'comment' => "baic " . $post->auto . ', опции: ' . $post->options . ', свет: ' . $post->term . ', способ оплаты: ' . $post->cash . ', когда звонить: ' . $post->callTime,
      'phone' =>  $post->phone,
      'name' => $post->name
    );
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
      "Authorization: Bearer {$token}",
      'Content-Type: application/json',
    ));
    curl_exec($ch);
    // print_r(json_encode(['data' => "success", 'status' => 200]));

}


$content = file_get_contents('content.json');
$content = json_decode($content, true);
header('Location:/' . $content['success_path']);
