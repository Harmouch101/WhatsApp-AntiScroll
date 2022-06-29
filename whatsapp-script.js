if (document.URL.includes("web.whatsapp.com") == true) {
  var p = setInterval(function () {
    if (document.querySelector("._3xTHG")) {
      var t = setInterval(function () {
        const y1 = document.querySelector("#pane-side").scrollTop;
        document
          .querySelector("._3xTHG")
          .addEventListener("keydown", function () {
            if (event.keyCode === 13) {
              const y2 = document.querySelector("#pane-side").scrollTop;
              console.log(`${y1}, ${y2}`);
              setTimeout(function () {
                document.querySelector("#pane-side").scrollTop = Math.max(
                  y1,
                  y2
                );
              }, 1200);
            }
          });
      }, 1000);
      clearInterval(p);
    }
  }, 500);
}
