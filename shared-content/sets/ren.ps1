# Get all files in the directory
$files = Get-ChildItem -Path $directory

# Loop through each file and rename it
foreach ($file in $files) {
    # Define the new name by replacing the old text with the new text
    $newName = $file.Name -replace "set-", ""
    $newName = $newName -replace ".html", ".mdx"
    
    # Rename the file
    Rename-Item -Path $file.FullName -NewName $newName
}

Write-Output "Files have been renamed successfully."