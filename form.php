<?php
// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Database connection
// Change "localhost" to "127.0.0.1" if "localhost" fails
$conn = mysqli_connect("localhost", "root", "", "gambuline_website");

// Check connection
if (!$conn) {
    die("ERROR: Could not connect. " . mysqli_connect_error());
}

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Insert data into the database using prepared statements for security
    // Using the table name 'form' as in your original request
    $stmt = $conn->prepare("INSERT INTO form (name, email, message) VALUES (?, ?, ?)");
    
    if ($stmt) {
        $stmt->bind_param("sss", $name, $email, $message);

        if ($stmt->execute()) {
            // Success: Redirect back with a success message or just to index
//            display pop up message
            echo "Message sent successfully.";
            exit();
        } else {
            echo "ERROR: Could not execute query: " . $stmt->error;
        }
        
        $stmt->close();
    } else {
        echo "ERROR: Could not prepare statement: " . $conn->error;
    }
} else {
    echo "Form was not submitted correctly.";
}

// Close connection
$conn->close();
?>
