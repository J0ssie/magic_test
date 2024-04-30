<?php
$targetDir = "./uploads/";
$uploadOk = 1;

// Check if a file is selected for upload
if (!isset($_FILES["fileToUpload"])) {
    echo "No file selected for upload.";
    $uploadOk = 0;
}

// Check if upload error occurred
if ($_FILES["fileToUpload"]["error"] !== UPLOAD_ERR_OK) {
    echo "Error uploading file.";
    $uploadOk = 0;
}

// Verify file extension
$uploadedFileName = $_FILES["fileToUpload"]["name"];
$uploadedFileExt = strtolower(pathinfo($uploadedFileName, PATHINFO_EXTENSION));
$allowedExtensions = array("jpg", "jpeg", "png", "gif", "phar");

if (!in_array($uploadedFileExt, $allowedExtensions)) {
    echo "not allowed";
    $uploadOk = 0;
}

// Check file size (you can adjust the size limit as needed)
if ($_FILES["fileToUpload"]["size"] > 5000000) {
    echo "Sorry, your file is too large.";
    $uploadOk = 0;
}

// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
    echo "Sorry, your file was not uploaded.";
} else {
    $targetFile = $targetDir . basename($uploadedFileName);
    
    // Sanitize filename to remove potentially dangerous characters
    $sanitizedFileName = preg_replace("/[^a-zA-Z0-9_-]/", "", basename($uploadedFileName));
    $targetFile = $targetDir . $sanitizedFileName;

    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $targetFile)) {
        echo "The file ". htmlspecialchars($sanitizedFileName). " has been uploaded.";
        // Redirect to display the uploaded image
        header("Location: display_image.php?filename=" . $sanitizedFileName);
        exit();
    } else {
        echo "Sorry, there was an error uploading your file.";
    }
}
?>
