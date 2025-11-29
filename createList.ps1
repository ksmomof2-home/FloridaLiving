# update-images.ps1  ← put this file in the repository root (same level as /docs)
Set-Location -LiteralPath $PSScriptRoot

$files = Get-ChildItem -LiteralPath "docs\images" -File |
         Where-Object { $_.Name -match '^pot\d{2}_.*\.(jpe?g|png|webp|gif)$' } |
         Select-Object -ExpandProperty Name |
         Sort-Object -Descending

$lines = foreach ($f in $files) {
    "  `"$f`","
}

@"
window.GARDEN_IMAGE_LIST = [
$($lines -join "`n")
];
"@ | Set-Content -Encoding utf8 -Path "docs\js\image-list.js"

Write-Host "Image list updated! $($files.Count) photos ready for glory!" -ForegroundColor Magenta
