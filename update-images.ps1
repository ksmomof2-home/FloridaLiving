Set-Location $PSScriptRoot

$logFile = "$PSScriptRoot\update-images.log"
function Log($m) {
  $t = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
"$t $m"|Out-File $logFIle -Append -Encoding utf8
Write-Host $m
}

Log "=== STARTED ==="

Log "Pulling..."
git pull | ForEach-Object {Log $_}

if ($LASTEXITCODE -ne 0){
  Log "Stashing..."
  git stash push -m "auto$(Get-Date -Format yyyy-MM-dd_HHmmm)"
  git pull | ForEach-Object{Log $_}
  $had=$true
}else{$had=$false}

$files=Get-ChildItem "docs\assets\images\pots" -File |
      Where-Object{$_.Name -match '^pot\d{2}_' } |
      Sort-Object Name -Descending

$list = $files | ForEach-Object {" `"$($_.Name)`","}
"window.GARDEN_IMAGE_LIST=["|Set-Content "docs\js\image-list.js" -Encoding utf8
$list|Add-Content "docs\js\image-list.js" -Encoding utf8
"];"|Add-Content "docs\js\image-list.js" -Encoding utf8

$photoCount=$files.Count
Log "Generated $photoCount photos"

git add "docs\js\image-list.js"
if (!(git diff --cached --quiet)) {
  git commit -m "update images $photoCount"|ForEach-Object{Log $_}
  git push | ForEach-Object{Log $_}}

Log "DONE"
Write-Host "`nDONE!$photocount photos. Press any key..."
$null=$Host.UI.RAWUI.ReadKey("NoEcho,IncludeKeyDown")
