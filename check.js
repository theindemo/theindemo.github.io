

    function getParameters() {
        const searchParams = new URLSearchParams(window.location.search);
        var productId=searchParams.get("product");
        var url="intent://theindemo.github.io/?product="+productId+"#Intent;scheme=tta;package=com.tta.qr;end";
        document.getElementById("q").value=productId;
          window.location.replace(url);
    }

