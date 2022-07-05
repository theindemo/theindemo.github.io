

    function getParameters() {
        const searchParams = new URLSearchParams(window.location.search);
        var productId=searchParams.get("product");
        var url="intent://theinqr.com/?product="+productId+"#Intent;scheme=tta;package=com.tta.qr;end";
        document.getElementById("q").value=productId;
          window.location.replace(url);
    }
