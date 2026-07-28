Add-Type -AssemblyName System.IO.Compression.FileSystem
$files = Get-ChildItem -Path "C:\Users\stapi\Downloads\drive-download-20260728T143255Z-1-001" -Filter *.docx
foreach ($file in $files) {
    $zip = [System.IO.Compression.ZipFile]::OpenRead($file.FullName)
    $entry = $zip.GetEntry("word/document.xml")
    if ($entry) {
        $stream = $entry.Open()
        $reader = New-Object System.IO.StreamReader($stream)
        $xml = $reader.ReadToEnd()
        $reader.Close()
        $text = [regex]::Replace($xml, '<w:p [^>]*>|<w:p>', "

")
        $text = [regex]::Replace($text, '<[^>]+>', '')
        $text = [System.Net.WebUtility]::HtmlDecode($text)
        
        $outFile = "C:\Users\stapi\Downloads\drive-download-20260728T143255Z-1-001\$($file.BaseName).txt"
        Set-Content -Path $outFile -Value $text -Encoding UTF8
        Write-Host "Processed: $($file.Name)"
    }
    $zip.Dispose()
}
