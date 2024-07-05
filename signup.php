<?php
// Assuming you have a database connection in config.php
include('config.php');

// Retrieve data from POST request
$name = $_POST['name'];
$email = $_POST['email'];
$password = password_hash($_POST['password'], PASSWORD_DEFAULT); // Hash password securely
$age = $_POST['age'];
$gender = $_POST['gender'];
$weight = $_POST['weight'];
$weightUnit = $_POST['weightUnit'];
$height = $_POST['height'];
$heightUnit = $_POST['heightUnit'];

// Insert user data into users table
$insertUserQuery = "INSERT INTO users (name, email, password, created_at)
                    VALUES ('$name', '$email', '$password', NOW())";
if (mysqli_query($conn, $insertUserQuery)) {
    $userId = mysqli_insert_id($conn); // Get the ID of the inserted user

    // Insert user data into user_data table
    $insertUserDataQuery = "INSERT INTO user_data (user_id, weight, height, steps, activity, total_energy_expended, created_at)
                            VALUES ('$userId', '$weight', '$height', NULL, NULL, NULL, NOW())";
    if (mysqli_query($conn, $insertUserDataQuery)) {
        // Success
        $response = array('success' => true, 'message' => 'User registered successfully.');
        echo json_encode($response);
    } else {
        // Error inserting user data
        $response = array('success' => false, 'message' => 'Error inserting user data.');
        echo json_encode($response);
    }
} else {
    // Error inserting user
    $response = array('success' => false, 'message' => 'Error registering user.');
    echo json_encode($response);
}

// Close database connection
mysqli_close($conn);
?>
