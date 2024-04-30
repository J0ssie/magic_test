<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Uploaded File</title>
</head>
<body>

<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h2 class="mt-4 mb-4 text-center">Uploaded File</h2>
            <?php
            // Check if filename is provided as a query parameter
            if (isset($_GET["filename"])) {
                $uploadedFile = "uploads/" . basename($_GET["filename"]);
                if (file_exists($uploadedFile)) {
                    // Read and display the content of the PHP file
                    include $uploadedFile;

                } else {
                    echo "<p>No file uploaded.</p>";
                }
            } else {
                echo "<p>No file uploaded.</p>";
            }
            ?>
        </div>
    </div>
</div>

</body>
</html>
