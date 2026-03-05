<?php
header('Content-Type: application/json');

$conn = new mysqli("localhost","root","","llamabuzz");

if ($conn->connect_error) {
    echo json_encode([
        "success"=>false,
        "message"=>"Erreur connexion BDD"
    ]);
    exit;
}

$data = json_decode(file_get_contents("php://input"), true);

$username = trim($data["username"]);
$email = trim($data["email"]);
$password = password_hash($data["password"], PASSWORD_DEFAULT);

if(!$username || !$email || !$password){
    echo json_encode([
        "success"=>false,
        "message"=>"Champs manquants"
    ]);
    exit;
}

$check = $conn->prepare("SELECT id FROM users WHERE email=?");
$check->bind_param("s",$email);
$check->execute();
$res = $check->get_result();

if($res->num_rows > 0){
    echo json_encode([
        "success"=>false,
        "message"=>"Email déjà utilisé"
    ]);
    exit;
}

$stmt = $conn->prepare("INSERT INTO users(username,email,password) VALUES(?,?,?)");
$stmt->bind_param("sss",$username,$email,$password);
$stmt->execute();

echo json_encode([
    "success"=>true
]);
