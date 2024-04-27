<?php

$chat = file_get_contents('chat.json');
$chat = json_decode($chat, true);
$mesbot = $chat['mesbot'];
$models = $mesbot[2]['categories'][0]['items'];

$links = [];

$domain = $_SERVER['HTTP_HOST'] ?: $_SERVER['SERVER_NAME'];
$protocol = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? 'https://' : 'http://';
$website = $protocol . $domain;

foreach ($models as $model) {
   array_push($links, $website . "/?model=" . $model['name']);
}

echo json_encode($links);
exit;
