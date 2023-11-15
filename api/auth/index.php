<?php
// CORS HEADERS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: *");
header('content-type: application/json; charset=utf-8');


$_POST = json_decode(file_get_contents('php://input'), true);
$_POST['login'] = ( isset($_POST['login']) ) ? $_POST['login'] : null;
$_POST['senha'] = ( isset($_POST['senha']) ) ? $_POST['senha'] : null;
$ilogin = $_POST['login'];
$isenha = $_POST['senha'];

ini_set( 'display_errors', 1 );
error_reporting( E_ALL );
//$from = $_POST['email'];

$token = time();



if($ilogin == "autoland" && $isenha == "123456"){
$dados = array(
	"status" => true,
	"login" => $_POST['login'],
	"token" => $token
	);
}else{
$dados = array(
	"status" => false,
	"login" => $_POST['login'],
	"token" => null
	);
}

$json = json_encode($dados);

header('Content-Type: application/json'); 
echo $json;
?>