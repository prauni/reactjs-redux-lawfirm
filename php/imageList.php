<?php
header("Access-Control-Allow-Origin", "*");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header("Access-Control-Allow-Credentials", "true");
header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,DELETE,POST,PUT");
header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");

$data = array();
$baseurl = '';
$baseurl = 'http://localhost/projects/phptest/rightway/gallery/public/storage/';
$whr = '';
if(isset($_REQUEST['cat_id']) && $_REQUEST['cat_id']>0){
	$whr = ' where category_id = '.$_REQUEST['cat_id'];
}


$con = mysqli_connect('localhost','root','','imagegallery');
$sql = "select id,name,category_id,description from images ".$whr;
$res = mysqli_query($con,$sql);
while($row= mysqli_fetch_array($res)){
	$val['id'] 				= $row['id'];
	$val['category_id'] 	= $row['category_id'];
	$val['description'] 	= $row['description'];
	$val['name'] 			= $baseurl.$row['name'];
	$data[] = $val;
}
echo json_encode($data);
?>