function getParameters() {
  const searchParams = new URLSearchParams(window.location.search);
  var productId=searchParams.get("product");
    
    if(isIOSDevice()){
        //document.write("I am an IOS device!");
        var ios_url="hostapp:/message?string="+productId+"#Intent;scheme=tta;end";
        window.location.replace(ios_url);
        
    }else{
        //document.write("I am an android device!");
        var android_url="intent://theinqr.com/?product="+productId+"#Intent;scheme=tta;end";
        window.location.replace(android_url);
    }
    
  setTimeout(goToPlayStore, 10000000);
}

function goToPlayStore(){
    window.location.replace("https://play.app.goo.gl/?link=https://play.google.com/store/apps/details?id=com.github.android");
}

function isIOSDevice(){
   return !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
}
