const divs = document.querySelectorAll(".special");
divs.forEach((div, indexDiv) => {
  let paragraf = div.querySelectorAll("p");
  paragraf.forEach((p, indexP) => {
    p.style.color = "green";
    p.textContent =
      `Div ${indexDiv + 1}, Paragraf ${indexP + 1}:   ` + p.textContent;
  });
});
