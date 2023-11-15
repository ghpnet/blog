<?php
// CORS HEADERS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: *");
header('content-type: application/json; charset=utf-8');


$_POST = json_decode(file_get_contents('php://input'), true);
$_POST['nome'] = ( isset($_POST['nome']) ) ? $_POST['nome'] : null;
$_POST['email'] = ( isset($_POST['email']) ) ? $_POST['email'] : null;
$_POST['mensagem'] = ( isset($_POST['mensagem']) ) ? $_POST['mensagem'] : null;
$imail = $_POST['email'];
$inome = $_POST['nome'];
$msg = $_POST['mensagem'];

ini_set( 'display_errors', 1 );
error_reporting( E_ALL );
$from = $_POST['email'];
$to = "ghpnet@gmail.com";
$subject = "AutoLand :: Contato [$imail]";
$message = "E-mail enviado por $inome\nE-mail: $imail\nMensagem: $msg";
$headers = "From:" . $from;
mail($to,$subject,$message, $headers);


//if($_POST['email'] == null and $_POST['email'] = ""){
//	mail("ghpnet@gmail.com","erro de envio","nao recebi os dados", "From: ghpnet@gmail.com");
//}

//mail("suportesegundaasegunda@gmail.com","erro de envio","nao recebi os dados", "From: suportesegundaasegunda@gmail.com");


$dados = array(
	"status" => true,
	"nome" => $_POST['nome'],
	"email" => $imail
	);

$json = json_encode($dados);

header('Content-Type: application/json'); 
echo $json;
?>