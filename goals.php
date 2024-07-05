<?php
$host = "localhost";
$username = "root";
$password = "";
$dbname = "254Fit";

// Create connection
$conn = new mysqli($host, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$user_id = $conn->insert_id; // Assuming the user ID is available here
$calorieGoal = $_POST['calorieGoal'];
$proteinGoal = $_POST['proteinGoal'];
$carbsGoal = $_POST['carbsGoal'];
$fatsGoal = $_POST['fatsGoal'];
$weightGoal = $_POST['weightGoal'];

// Insert goals into database
$sql = "INSERT INTO goals (user_id, calorie_goal, protein_goal, carbs_goal, fats_goal, weight_goal)
VALUES ('$user_id', '$calorieGoal', '$proteinGoal', '$carbsGoal', '$fatsGoal', '$weightGoal')";

if ($conn->query($sql) === TRUE) {
    echo "Goals set successfully";
    header('Location: profile.html');
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
