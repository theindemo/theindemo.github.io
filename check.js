function getParameters() {
  const searchParams = new URLSearchParams(window.location.search);
  var productId=searchParams.get("product");
  var url="intent://theinqr.com/?product="+productId+"#Intent;scheme=tta;end";
  window.location.replace(url);
  setTimeout(hideLoading, 500);
}

function hideLoading(){
  var element = document.getElementById("page_loader");
  element.style.display = "none";
}
