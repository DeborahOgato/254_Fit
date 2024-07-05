<?php
include 'config.php';

header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);

$name = $data['name'];
$email = $data['email'];
$age = (int)$data['age'];
$gender = $data['gender'];
$weight = (float)$data['weight'];
$weightUnit = $data['weightUnit'];
$height = (float)$data['height'];
$heightUnit = $data['heightUnit'];

// Convert weight and height to metric if necessary
if ($weightUnit === 'lbs') {
    $weight = $weight * 0.453592;
}
if ($heightUnit === 'in') {
    $height = $height * 2.54;
}

// Insert user into users table
$userQuery = $conn->prepare("INSERT INTO users (name, email, created_at) VALUES (?, ?, NOW())");
$userQuery->bind_param("ss", $name, $email);
$userQuery->execute();
$userId = $userQuery->insert_id;

// Insert user data into user_data table
$userDataQuery = $conn->prepare("INSERT INTO user_data (user_id, age, gender, weight, height, created_at) VALUES (?, ?, ?, ?, ?, NOW())");
$userDataQuery->bind_param("iisdd", $userId, $age, $gender, $weight, $height);
$userDataQuery->execute();

$response = array('success' => true, 'message' => 'User signed up successfully');
echo json_encode($response);

$conn->close();
?>
