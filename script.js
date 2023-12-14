const cursor = document.querySelector(".cursor");
function progress() {
  var number = document.querySelector(".number");
  var count = 0;
  var tl = gsap.timeline();
  function animate() {
    if (count === 100) {
      // tl.to(".preload", {
      //   duration: 1,
      //   y: "-100%",
      //   ease: Circ.easeInOut,
      // });
      // tl.to(".bgone-grey", {
      //   y: "-100%",
      //   duration: 1,
      //   ease: "ease",
      // });
      // tl.to(
      //   ".bg-black",
      //   {
      //     y: "-100%",
      //     duration: 1,
      //     ease: "ease",
      //   },
      //   "-=0.01"
      // );
      // tl.to(
      //   ".bg-grey",
      //   {
      //     y: "-100%",
      //     duration: 1,
      //     ease: "ease",
      //   },
      //   "-=0.01"
      // );
    } else {
      count += 1;
      number.textContent = count + "%";
      // Ralentir lorsque count atteint 80
      if (count === 70) {
        console.log("Ralentissement !");
        clearInterval(loadingInterval); // Arrête l'intervalle actuel
        loadingInterval = setInterval(animate, 75); // Redémarre avec un nouvel intervalle plus long
      } else if (count === 85) {
        console.log("Ralentissement !");
        clearInterval(loadingInterval); // Arrête l'intervalle actuel
        loadingInterval = setInterval(animate, 100); // Redémarre avec un nouvel intervalle plus long
      } else if (count == 95) {
        console.log("Ralentissement !");
        clearInterval(loadingInterval);
        loadingInterval = setInterval(animate, 125);
      }
    }
  }
  var loadingInterval = setInterval(animate, 50);
}

document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top:" +
      (e.pageY - 10) +
      "px; left:" +
      (e.pageX - 10) +
      "px; z-index:" +
      99 +
      ";"
  );
});
document.addEventListener("click", () => {
  cursor.setAttribute("style", "height:20px; width:20px;");
  setTimeout(() => {
    cursor.setAttribute("style", "height:10px; width:10px;");
  }, 500);
});
window.addEventListener("load", progress);
