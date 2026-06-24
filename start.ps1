$ErrorActionPreference = "Stop"

$workspace = Split-Path -Parent $MyInvocation.MyCommand.Path
$bundledNode = Join-Path $env:USERPROFILE ".cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"

Set-Location $workspace

if (Test-Path $bundledNode) {
  & $bundledNode server.js
  exit $LASTEXITCODE
}

node server.js
