<?php
include_once("./db_connection.php");

echo "Hello";
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $color = $_POST['color'];
    $licence_number = $_POST['licence_number'];
    $engine_number = $_POST['engine_number'];
    $appointment_date = $_POST['appointment_date'];
    $desire_mechanic = $_POST['desire_mechanic'];





    $sql = "INSERT INTO client VALUES ('$name', '$phone', '$color', '$licence_number', '$engine_number', '$appointment_date', '$desire_mechanic')";
    if ($mysqli->query($sql)) 
        echo "Inserted Jane"; 
    elseif ($mysqli->errno == 1062) 
        echo "Insert failed because ID 789 already exists"; 
    else 
        die("Error $mysql->errno $mysqli->error<br>SQL = $sql<br>");

    if ($conn->query($sql) === TRUE) {
        echo "Record added successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>