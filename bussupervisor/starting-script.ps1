$springPath = "./src/main/java/de/hsw/bussupervisor"

if(Test-Path $springPath){
    Start-Process powershell -ArgumentList "-noexit", "-noprofile", "-command &{Set-Location $SpringPath | mvn spring-boot:run }"
}

$reactPath = "./frontend/src/"
if (Test-Path $reactPath) {
    start-Process powershell -ArgumentList "-noexit", "noprofile", "-command &{Set-Location $reactPath | npm install | npm start }"
}