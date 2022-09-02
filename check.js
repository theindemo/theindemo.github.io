function getParameters() {
    setTimeout(prepareView, 2000);
}

function prepareView() {
  const searchParams = new URLSearchParams(window.location.search);
  var productId=searchParams.get("data");
  
    if(isIOSDevice()){
        var ios_url="getqrdataviapta.com:/message?data="+productId+"#Intent;scheme=tpvptatwo;end";
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
