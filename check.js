function getParameters() {
  const searchParams = new URLSearchParams(window.location.search);
  var productId=searchParams.get("product");
  
    if(isIOSDevice()){
        document.write("I am an IOS device!");
        var ios_url="hostapp:/message?string="+productId+"#Intent;scheme=tta;end";
        window.location.replace(ios_url);
        
    }else{
        document.write("I am an android device!");
        var android_url="intent://theinqr.com/?product="+productId+"#Intent;scheme=tta;end";
        window.location.replace(android_url);
    }
    //document.addEventListener('visibilitychange', onVisibilityChange);
}

function onVisibilityChange() {
  if (document.visibilityState === 'visible') {
      document.write("user is focused on the page")
      window.location = "https://theindemo.github.io/pages/download.html";
  } else {
      document.write("user left the page")
  }
}


function isIOSDevice(){
   return !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
}
