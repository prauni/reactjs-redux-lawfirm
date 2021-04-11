<?php
header("Access-Control-Allow-Origin", "*");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header("Access-Control-Allow-Credentials", "true");
header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,DELETE,POST,PUT");
header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");

$banner['content'] 	= '<h1>It\'s never easy...'.substr(time(),-3,3).'<br> When it comes to family.</h1><p>But we can set<br> everything straight.</p>';
$banner['img']		= 'family-large.jpg';
$data['banner']		= $banner;
echo json_encode($data);
?>