$newString = '<- <WowHeadItem id="{}" >{}_note_</WowHeadItem>'

Get-ChildItem -Filter "*.mdx" | ForEach-Object {
  $filePath = $_.FullName
  while (Get-Content -Path $filePath -Raw | Select-String '{% include ...}') {
    $line = Get-Content -Path $filePath -Raw
    if ($line -match '{% include (.*?)}" note="([^"]*)"}') {
      Write-Host "Replacing line in file: $($filePath)"
      $newLine = [regex]::Replace($line, '{% include (\d+)" note="([^"]*)"}', '<- <WowHeadItem id="$1" >$_2</WowHeadItem>')
      Set-Content -Path $filePath -Value ($content -replace $line, $newLine)
    }
  }
}