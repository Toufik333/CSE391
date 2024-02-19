<?php
include_once("./db_connection.php");

// Print client from the database:
$sql = "SELECT * FROM client";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "<table><tr><th>Name</th><th>Phone</th></tr>";
    while($row = $result->fetch_assoc()) {
        echo "<tr><td>" . $row["name"]. "</td><td>" . $row["phone"]. "</td>";
    }
    echo "</table>";
} else {
    echo "0 results";
}

?>