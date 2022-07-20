function getParameters() {
  const searchParams = new URLSearchParams(window.location.search);
  var productId=searchParams.get("product");
  var url="intent://theinqr.com/?product="+productId+"#Intent;scheme=tta;end";
  window.location.replace(url);
  setTimeout(goToPlayStore, 500);
}

function goToPlayStore(){
    window.location.replace("https://play.app.goo.gl/?link=https://play.google.com/store/apps/details?id=com.github.android");
}
