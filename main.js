window.onload = () => {
  document.body.classList.remove("container");

  const firstLine = "I LOVE U❤️".split("");
  const secondLine = "Happy Anniversary 7 Month".split("");

  const title1 = document.getElementById("title1");
  const title2 = document.getElementById("title2");

  let index1 = 0;

  function typeFirstLine() {
    if (index1 < firstLine.length) {
      title1.innerHTML += firstLine[index1];
      index1++;
      setTimeout(typeFirstLine, 300);
    } else {
      setTimeout(() => typeSecondLine(0), 500);
    }
  }

  function typeSecondLine(i) {
    if (i < secondLine.length) {
      title2.innerHTML += secondLine[i];
      setTimeout(() => typeSecondLine(i + 1), 200);
    }
  }

  typeFirstLine();
};
