function getParameters() {
  const searchParams = new URLSearchParams(window.location.search);
  var productId=searchParams.get("product");
    
  document.addEventListener('visibilitychange', onVisibilityChange);
    
    if(isIOSDevice()){
        /document.write("I am an IOS device!");
        var ios_url="hostapp:/message?string="+productId+"#Intent;scheme=tta;end";
        //window.location.replace(ios_url);
//        setTimeout(function () { window.location = ios_url; }, 500);
//        window.location = "https://theindemo.github.io/pages/download.html";
        
    }else{
        document.write("I am an android device!");
        var android_url="intent://theinqr.com/?product="+productId+"#Intent;scheme=tta;end";
        window.location.replace(android_url);
        //setTimeout(window.location.replace(android_url), 1500);
        
    }
    
// setTimeout(hideLoading, 500);
// hideLoading()
    
}

function onVisibilityChange() {
  if (document.visibilityState === 'visible') {
      document.write("user is focused on the page")
      window.location = "https://theindemo.github.io/pages/download.html";
  } else {
      document.write("user left the page")
  }
}

//setTimeout(function () { window.location = "https://itunes.apple.com/appdir"; }, 25);

function checking(){
    setTimeout(hideLoading, 11500);
    //window.location = "https://theindemo.github.io/pages/download.html";
    //window.location = "appname://";
    //window.location.replace("https://theindemo.github.io/pages/download.html");
}

function hideLoading(){
//  var element = document.getElementById("page_loader");
//  element.style.display = "none";
//  document.getElementById("page_loader").style.display = 'none';
    document.write("hideloading")
}

//function goToPlayStore(){
//
//    if(isIOSDevice()){
//        //document.write("I am an IOS device!");
//        window.location.replace("https://play.app.goo.gl/?link=https://play.google.com/store/apps/details?id=com.github.android");
//
//    }else{
//        //document.write("I am an android device!");
//        window.location.replace("https://play.app.goo.gl/?link=https://play.google.com/store/apps/details?id=com.github.android");
//    }
//
//}

function isIOSDevice(){
   return !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
}
