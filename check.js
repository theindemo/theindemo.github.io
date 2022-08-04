function getParameters() {
    setTimeout(prepareView, 2000);
}

function prepareView() {
  const searchParams = new URLSearchParams(window.location.search);
  var productId=searchParams.get("product");
  
    if(isIOSDevice()){
        var ios_url="hostapp:/message?string="+productId+"#Intent;scheme=tta;end";
        window.location.replace(ios_url);
        
    }else{
        var android_url="intent://theinqr.com/?product="+productId+"#Intent;scheme=tta;end";
        window.location.replace(android_url);
    }

    setTimeout(onVisibilityChange, 1000);
}


function onVisibilityChange() {
  if (document.visibilityState === 'visible') {
      window.location = "https://theindemo.github.io/pages/download.html";
  } else {
      document.write("user left the page")
  }
}


function isIOSDevice(){
   return !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
}
