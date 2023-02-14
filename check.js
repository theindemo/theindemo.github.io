function getParameters() {
    detectLang();
    setTimeout(prepareView, 2000);
}

function prepareView() {
  const searchParams = new URLSearchParams(window.location.search);
  var productId=searchParams.get("data");
  
    if(isIOSDevice()){
        var ios_url="getqrdataviapta.com:/data?qrdata="+productId+"#Intent;scheme=tpvptatwo;end";
        window.location.replace(ios_url);
        
    }else{
        var android_url="intent://getqrdataviapta.com/?data=="+productId+"#Intent;scheme=tpvptatwo;end";
 
        window.location.replace(android_url);
    }
    setTimeout(onVisibilityChange, 2500);
}

function onVisibilityChange() {
  if (document.visibilityState === 'visible') {
      window.location.replace ("https://theindemo.github.io/pages/download.html");
  } else {
      document.write(" ")
  }
}

function isIOSDevice(){
   return !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
}

function detectLang(){
    let pta2label1="We are currently checking if the Philips TV Remote application is installed on your device.";
    let pta2label2="You will automatically proceed to the Philips TV Remote application if it is already installed.";
    
    
    var userLang = navigator.language || navigator.userLanguage;
    switch(userLang) {
        case "en":
              pta2label1="We are currently checking if the Philips TV Remote application is installed on your device.";
              pta2label2="You will automatically proceed to the Philips TV Remote application if it is already installed.";
          break;
        case "de":
              pta2label1="Wir prüfen derzeit, ob die Philips TV Remote App auf Ihrem Gerät installiert ist.";
              pta2label2="Sie gelangen automatisch zur Philips TV Remote App, wenn diese bereits installiert ist.";
          break;
        case "nl":
              pta2label1="We controleren momenteel of de Philips TV Remote App op uw apparaat is geïnstalleerd.";
              pta2label2="U wordt automatisch doorgestuurd naar de Philips TV Remote App als deze al is geïnstalleerd.";
          break;
        case "es":
                pta2label1="Estamos comprobando si la aplicación Philips TV Remote está instalada en su dispositivo.";
                pta2label2="Si ya está instalada, accederá automáticamente a la aplicación Philips TV Remote.";
                break;
        case "fr":
              pta2label1="Nous vérifions actuellement si l'application Philips TV Remote est installée sur votre appareil.";
              pta2label2="Vous pourrez accéder automatiquement à l'application Philips TV Remote si elle est déjà installée.";
                break;
        case "it":
              pta2label1="È in corso la verifica dell'installazione dell'applicazione Philips TV Remote sul dispositivo.";
              pta2label2="Se è già installata, si procede automaticamente all'applicazione Philips TV Remote.";
                break;
        case "pt":
                pta2label1="Neste momento, estamos a verificar se a aplicação Philips TV Remote está instalada no seu dispositivo.";
                pta2label2="Se já estiver instalada, a aplicação Philips TV Remote será automaticamente aberta.";
                break;
        case "ru":
              pta2label1="Мы проверяем наличие установленного приложения Philips TV Remote на вашем устройстве.";
              pta2label2="Если оно установлено, приложение Philips TV Remote откроется автоматически.";
          break;
            
    }
    document.getElementById("pta2label1").innerText = pta2label1;
    document.getElementById("pta2label2").innerText = pta2label2;
    
}
