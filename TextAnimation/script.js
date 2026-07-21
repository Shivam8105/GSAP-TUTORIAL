function breakText() {
  var h1 = document.querySelector("h1");

  var text = h1.textContent;

  var splittedText = text.split("");

  var clutter = "";

  splittedText.forEach(function (elem) {
    clutter += `<span>${elem}</span>`;
  });

  h1.innerHTML = clutter;
}

breakText();

gsap.from("h1 span", {
    y: 100,
    opacity: 0,
    duration: 0.7,
    delay: 5,
    stagger: 0.3
})
