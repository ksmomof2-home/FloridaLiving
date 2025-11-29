# update-images.ps1 – final bulletproof edition 
Set-Location -LiteralPath $PSScriptRoot

$files = Get-ChildItem -LiteralPath "images" -File |
         Where-Object { $_.Name -match '^pot\d{2}_.*\.(jpe?g|png|webp|gif)$' } |
         Select-Object -ExpandProperty Name |
         Sort-Object -Descending

# Build the array lines properly (no weird backtick escaping)
$lines = foreach ($f in $files) {
    "  `"$f`","
}

# Create the final JS file
@"
window.GARDEN_IMAGE_LIST = [
$($lines -join "`n")
];
"@ | Set-Content -Encoding utf8 -Path "js\image-list.js"

Write-Host "Image list updated! $($files.Count) photos ready for glory!" -ForegroundColor Magenta