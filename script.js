function openLetter() {
  document.getElementById("home").style.display = "none";

  const birthday = document.getElementById("birthday");
  birthday.classList.remove("hidden");
  birthday.classList.add("show");

  setTimeout(() => {
    const memories = document.getElementById("memories");
    memories.classList.remove("hidden");
    memories.classList.add("show");
    memories.scrollIntoView({ behavior: "smooth" });
  }, 1200);

  makePetals(18);
}

function showEnding() {
  const ending = document.getElementById("ending");
  ending.classList.remove("hidden");
  ending.classList.add("show");
  ending.scrollIntoView({ behavior: "smooth" });
  makePetals(28);
}

function makePetals(count) {
  const container = document.getElementById("petals");
  for (let i = 0; i < count; i++) {
    const petal = document.createElement("span");
    petal.className = "petal";
    petal.textContent = Math.random() > .5 ? "♡" : "✦";
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.fontSize = (10 + Math.random() * 14) + "px";
    petal.style.animationDuration = (4 + Math.random() * 5) + "s";
    petal.style.animationDelay = (Math.random() * 1.5) + "s";
    container.appendChild(petal);
    setTimeout(() => petal.remove(), 10000);
  }
}
