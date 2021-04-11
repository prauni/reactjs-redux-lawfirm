<?php
header("Access-Control-Allow-Origin", "*");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header("Access-Control-Allow-Credentials", "true");
header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,DELETE,POST,PUT");
header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");

$con = mysqli_connect('localhost','root','','imagegallery');
$sql = "select * from categories";
$res = mysqli_query($con,$sql);
$data = array();
while($row= mysqli_fetch_array($res)){
	$val['id'] 		= $row['id'];
	$val['name'] 	= $row['name'];
	$data[] = $val;
}
echo json_encode($data);
?>